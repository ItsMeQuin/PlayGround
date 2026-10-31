import * as THREE from 'three';
import { makeGlowTexture, clamp } from './utils.js';

const _v1 = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _v3 = new THREE.Vector3();
const _v4 = new THREE.Vector3();

function segmentPointDistanceSq(a, b, p, out) {
  const abx = b.x - a.x;
  const aby = b.y - a.y;
  const abz = b.z - a.z;
  const apx = p.x - a.x;
  const apy = p.y - a.y;
  const apz = p.z - a.z;
  const len = abx * abx + aby * aby + abz * abz;
  const t = len > 1e-6 ? clamp((apx * abx + apy * aby + apz * abz) / len, 0, 1) : 0;
  out.set(a.x + abx * t, a.y + aby * t, a.z + abz * t);
  const dx = p.x - out.x;
  const dy = p.y - out.y;
  const dz = p.z - out.z;
  return dx * dx + dy * dy + dz * dz;
}

export class Combat {
  constructor(scene, world, effects, audio) {
    this.scene = scene;
    this.world = world;
    this.effects = effects;
    this.audio = audio;
    this.glowTexture = makeGlowTexture(64);
    this.projectiles = [];
    this.player = null;
    this.enemies = [];
    this.boss = null;
    this.onHitmarker = null;
    this.onEnemyKilled = null;
    this.onPlayerHit = null;
    this.materials = new Map();
    this.sprites = new Map();
    this.tempPool = [];
    this.buildPool();
    this.time = 0;
  }

  getMaterial(color) {
    if (!this.materials.has(color)) {
      this.materials.set(color, new THREE.MeshBasicMaterial({ color, toneMapped: false }));
    }
    return this.materials.get(color);
  }

  getGlow(color) {
    if (!this.sprites.has(color)) {
      this.sprites.set(color, new THREE.SpriteMaterial({
        map: this.glowTexture, color, transparent: true, opacity: 0.9,
        blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false
      }));
    }
    return this.sprites.get(color);
  }

  buildPool() {
    const geo = new THREE.CapsuleGeometry(0.075, 0.6, 3, 6);
    geo.rotateX(Math.PI / 2);
    this.boltGeo = geo;
    for (let i = 0; i < 70; i++) {
      const group = new THREE.Group();
      const core = new THREE.Mesh(geo, this.getMaterial(0x62f3ff));
      core.renderOrder = 5;
      group.add(core);
      const glow = new THREE.Sprite(this.getGlow(0x62f3ff));
      glow.scale.setScalar(1.3);
      group.add(glow);
      group.visible = false;
      this.scene.add(group);
      this.tempPool.push({ group, core, glow, active: false });
    }
  }

  takeFromPool() {
    let slot = this.tempPool.find((s) => !s.active);
    if (!slot) {
      const group = new THREE.Group();
      const core = new THREE.Mesh(this.boltGeo, this.getMaterial(0x62f3ff));
      const glow = new THREE.Sprite(this.getGlow(0x62f3ff));
      glow.scale.setScalar(1.3);
      group.add(core);
      group.add(glow);
      group.visible = false;
      this.scene.add(group);
      slot = { group, core, glow, active: false };
      this.tempPool.push(slot);
    }
    slot.active = true;
    slot.group.visible = true;
    return slot;
  }

  spawnPlayerProjectile({ origin, direction, weapon, owner }) {
    const slot = this.takeFromPool();
    const p = {
      type: weapon.projectile,
      faction: 'player',
      owner,
      slot,
      pos: origin.clone(),
      prev: origin.clone(),
      dir: direction.clone().normalize(),
      speed: weapon.speed,
      damage: weapon.damage,
      splash: weapon.splash || 0,
      gravity: weapon.gravity || 0,
      radius: weapon.projectile === 'mortar' ? 0.22 : 0.13,
      color: weapon.color,
      life: weapon.projectile === 'mortar' ? 4 : 2.2,
      weapon,
      trailTimer: 0
    };
    const scale = weapon.projectile === 'mortar' ? 2.5 : 1;
    slot.core.material = this.getMaterial(weapon.color);
    slot.glow.material = this.getGlow(weapon.color);
    slot.group.scale.setScalar(scale);
    slot.group.position.copy(origin);
    slot.group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), p.dir);
    this.projectiles.push(p);
  }

  spawnEnemyProjectile({ origin, direction, damage = 9, speed = 38, color = 0xff5c3d, owner = null, radius = 0.18 }) {
    const slot = this.takeFromPool();
    const p = {
      type: 'bolt',
      faction: 'enemy',
      owner,
      slot,
      pos: origin.clone(),
      prev: origin.clone(),
      dir: direction.clone().normalize(),
      speed,
      damage,
      splash: 0,
      gravity: 0,
      radius,
      color,
      life: 4.2,
      trailTimer: 0
    };
    slot.core.material = this.getMaterial(color);
    slot.glow.material = this.getGlow(color);
    slot.group.scale.setScalar(1.35);
    slot.group.position.copy(origin);
    slot.group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), p.dir);
    this.projectiles.push(p);
  }

  spawnBossProjectile(opts) {
    this.spawnEnemyProjectile({ ...opts, color: 0xff3a22, speed: 30, damage: opts.damage ?? 14, radius: 0.32 });
  }

  enemiesInRadius(pos, radius) {
    const result = [];
    for (const e of this.enemies) {
      if (!e.alive || !e.active) continue;
      e.getHitPosition(_v4);
      if (_v4.distanceTo(pos) <= radius + (e.hitRadius || 1.2)) result.push(e);
    }
    if (this.boss && this.boss.alive && this.boss.active) {
      this.boss.getHitPosition(_v4);
      if (_v4.distanceTo(pos) <= radius + 4) result.push(this.boss);
    }
    return result;
  }

  applyDamage(enemy, amount, point, crit = false) {
    if (!enemy.alive) return;
    enemy.takeDamage(amount, point, crit);
    if (this.onHitmarker) this.onHitmarker(crit);
    this.audio?.hit();
    this.effects.sparks(point, crit ? 12 : 7, crit ? 0xffca6a : 0xffa060, 1, { life: 0.32, size: 0.1 });
    if (!enemy.alive && this.onEnemyKilled) this.onEnemyKilled(enemy);
  }

  explode(pos, damage, splash, color, owner) {
    this.effects.explosion(pos, color, 1.2);
    this.audio?.explosion(0.8);
    const hit = this.enemiesInRadius(pos, splash);
    for (const e of hit) {
      e.getHitPosition(_v1);
      const d = _v1.distanceTo(pos);
      const factor = 1 - clamp(d / splash, 0, 0.98);
      this.applyDamage(e, damage * factor, _v1.clone(), false);
    }
  }

  update(dt) {
    this.time += dt;
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.life -= dt;
      if (p.life <= 0) {
        this.release(i);
        continue;
      }
      p.prev.copy(p.pos);
      p.dir.y -= p.gravity * dt;
      if (p.gravity) p.dir.normalize();
      p.pos.addScaledVector(p.dir, p.speed * dt);
      p.slot.group.position.copy(p.pos);
      p.slot.group.quaternion.setFromUnitVectors(_v2.set(0, 0, 1), p.dir);

      if (p.type === 'mortar') {
        p.trailTimer -= dt;
        if (p.trailTimer <= 0) {
          p.trailTimer = 0.025;
          this.effects.sparks(p.pos, 2, 0xffb060, 0.5, { life: 0.35, size: 0.16, gravity: -1 });
        }
      }

      let removed = false;
      if (p.faction === 'player') {
        // Boss and regular enemies
        const targets = this.enemies.filter((e) => e.alive && e.active);
        if (this.boss && this.boss.alive && this.boss.active) targets.push(this.boss);
        for (const e of targets) {
          e.getHitPosition(_v3);
          const r = (e.hitRadius || 1.2) + p.radius;
          if (segmentPointDistanceSq(p.prev, p.pos, _v3, _v1) < r * r) {
            if (p.type === 'mortar') {
              this.explode(p.pos.clone(), p.splash, 6.5, p.color, p.owner);
              this.applyDamage(e, p.damage, _v3.clone(), true);
            } else {
              this.applyDamage(e, p.damage, _v1.clone(), Math.random() < 0.12);
            }
            this.release(i);
            removed = true;
            break;
          }
        }
        if (removed) continue;
      } else {
        const player = this.player;
        if (player && !player.dead) {
          player.getShieldPosition ? player.getShieldPosition(_v3) : _v3.copy(player.position).add(_v2.set(0, 2.2, 0));
          const shieldDist = _v1.copy(player.position).add(_v2.set(0, 2, 0)).distanceTo(p.pos);
          if (player.shieldActive && shieldDist < 3.1) {
            this.effects.shieldImpact(p.pos.clone(), 0x62f3ff);
            this.audio?.shieldHit();
            this.release(i);
            continue;
          }
          const center = _v3.copy(player.position).add(_v2.set(0, 1.9, 0));
          if (segmentPointDistanceSq(p.prev, p.pos, center, _v1) < 1.75 * 1.75) {
            player.takeDamage(p.damage, p.pos.clone());
            if (this.onPlayerHit) this.onPlayerHit(p.damage);
            this.release(i);
            continue;
          }
        }
      }

      // Terrain impact
      const ground = this.world.heightAt(p.pos.x, p.pos.z);
      if (p.pos.y <= ground + 0.2) {
        if (p.type === 'mortar') this.explode(p.pos.clone(), p.splash, 7, p.color, p.owner);
        else this.effects.bulletImpact(p.pos.clone(), p.color);
        this.release(i);
        continue;
      }
      // Soft bound
      if (Math.abs(p.pos.x) > 800 || Math.abs(p.pos.z) > 800 || p.pos.y > 400) this.release(i);
    }
  }

  release(index) {
    const p = this.projectiles[index];
    if (!p) return;
    p.slot.active = false;
    p.slot.group.visible = false;
    this.projectiles.splice(index, 1);
  }
}
