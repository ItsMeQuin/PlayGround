import * as THREE from 'three';
import { clamp, dist2D, makeGlowTexture, makeSprite } from './utils.js';
import { WATER_LEVEL } from './world.js';

const HEALTH_SPOTS = [
  [-30, 250], [90, 90], [-170, 210], [-268, -30], [250, -20],
  [140, -220], [-250, -190], [-90, -380], [220, -330], [330, 60],
  [-430, -160], [40, -90], [430, -240], [-80, 360]
];

const ENERGY_SPOTS = [
  [34, 200], [-110, 60], [-220, 120], [180, -70], [300, -250],
  [-300, -260], [-60, -300], [120, -410], [420, -120], [-460, -300],
  [-130, -120], [250, 210]
];

export class PickupManager {
  constructor(scene, world, effects, audio) {
    this.scene = scene;
    this.world = world;
    this.effects = effects;
    this.audio = audio;
    this.glowTexture = makeGlowTexture(128);
    this.relics = [];
    this.canisters = [];
    this.shards = [];
    this.onRelic = null;
    this.onHeal = null;
    this.onEnergy = null;
    this.onShard = null;
    this.time = 0;
    this.buildRelics();
    this.buildCanisters();
  }

  buildRelics() {
    for (const site of this.world.relics) {
      const group = new THREE.Group();
      const y = site.y + 3.35;
      group.position.set(site.x, y, site.z);
      const color = new THREE.Color(site.color);

      const coreMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(site.color).multiplyScalar(0.25),
        emissive: site.color, emissiveIntensity: 2.2,
        metalness: 0.65, roughness: 0.15
      });
      const core = new THREE.Mesh(new THREE.OctahedronGeometry(0.72, 0), coreMat);
      core.castShadow = true;
      group.add(core);

      const inner = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.0, 0),
        new THREE.MeshBasicMaterial({ color: site.color, wireframe: true, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
      );
      group.add(inner);

      const ringMat = new THREE.MeshStandardMaterial({
        color: 0x141c22, emissive: site.color, emissiveIntensity: 1.1,
        metalness: 0.8, roughness: 0.3
      });
      const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.22, 0.035, 4, 40), ringMat);
      ring1.rotation.x = Math.PI / 2.4;
      group.add(ring1);
      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.42, 0.025, 4, 40), ringMat);
      ring2.rotation.y = Math.PI / 2.2;
      group.add(ring2);

      const glow = makeSprite(this.glowTexture, site.color, 5.2);
      glow.material.opacity = 0.5;
      group.add(glow);

      // Orbiting fragments
      const shards = [];
      for (let i = 0; i < 5; i++) {
        const shard = new THREE.Mesh(new THREE.TetrahedronGeometry(0.12, 0), coreMat);
        shard.userData.angle = (i / 5) * Math.PI * 2;
        shard.userData.radius = 1.6 + Math.random() * 0.3;
        shard.userData.height = (Math.random() - 0.5) * 1.1;
        group.add(shard);
        shards.push(shard);
      }

      this.scene.add(group);
      this.relics.push({
        site,
        group,
        core,
        inner,
        ring1,
        ring2,
        glow,
        shards,
        baseY: y,
        collected: false
      });
      site.pickup = group;
    }
  }

  buildCanisters() {
    const crossMat = new THREE.MeshStandardMaterial({
      color: 0x0c2a18, emissive: 0x74f7a8, emissiveIntensity: 1.8, metalness: 0.5, roughness: 0.25
    });
    const cellMat = new THREE.MeshStandardMaterial({
      color: 0x0a2e3a, emissive: 0x62f3ff, emissiveIntensity: 1.8, metalness: 0.5, roughness: 0.25
    });
    for (const [x, z] of HEALTH_SPOTS) {
      const y = this.world.heightAt(x, z);
      if (y < WATER_LEVEL + 0.3) continue;
      const group = new THREE.Group();
      group.position.set(x, y + 1.2, z);
      const box1 = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.22, 0.22), crossMat);
      const box2 = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.7, 0.22), crossMat);
      group.add(box1, box2);
      const cage = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.95, 0.95), new THREE.MeshBasicMaterial({
        color: 0x74f7a8, wireframe: true, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false
      }));
      group.add(cage);
      const glow = makeSprite(this.glowTexture, 0x74f7a8, 2.6);
      glow.material.opacity = 0.4;
      group.add(glow);
      const beam = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.5, 8, 8, 1, true),
        new THREE.MeshBasicMaterial({ color: 0x74f7a8, transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
      );
      beam.position.y = 4;
      group.add(beam);
      this.scene.add(group);
      this.canisters.push({ type: 'health', group, x, z, y: y + 1.2, baseY: y + 1.2, active: true, timer: 0, spin: cage });
    }
    for (const [x, z] of ENERGY_SPOTS) {
      const y = this.world.heightAt(x, z);
      if (y < WATER_LEVEL + 0.3) continue;
      const group = new THREE.Group();
      group.position.set(x, y + 1.2, z);
      const cell = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.3, 0.85, 6), cellMat);
      group.add(cell);
      for (let i = 0; i < 3; i++) {
        const band = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.035, 4, 12), new THREE.MeshBasicMaterial({
          color: 0x9ffaff, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false
        }));
        band.rotation.x = Math.PI / 2;
        band.position.y = -0.28 + i * 0.28;
        group.add(band);
      }
      const glow = makeSprite(this.glowTexture, 0x62f3ff, 2.4);
      glow.material.opacity = 0.4;
      group.add(glow);
      const beam = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.45, 7, 8, 1, true),
        new THREE.MeshBasicMaterial({ color: 0x62f3ff, transparent: true, opacity: 0.07, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
      );
      beam.position.y = 3.5;
      group.add(beam);
      this.scene.add(group);
      this.canisters.push({ type: 'energy', group, x, z, y: y + 1.2, baseY: y + 1.2, active: true, timer: 0, spin: null });
    }
  }

  spawnShard(pos, value = 30, energon = 5) {
    const group = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0x143d44, emissive: 0x62f3ff, emissiveIntensity: 2.2, metalness: 0.4, roughness: 0.2 });
    const mesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.28, 0), mat);
    group.add(mesh);
    const glow = makeSprite(this.glowTexture, 0x62f3ff, 1.1);
    group.add(glow);
    this.scene.add(group);
    const start = pos.clone();
    group.position.copy(start);
    this.shards.push({
      group, mesh, glow, value, energon,
      vel: new THREE.Vector3((Math.random() - 0.5) * 4, 4 + Math.random() * 3, (Math.random() - 0.5) * 4),
      life: 32, age: 0, grounded: false, collected: false
    });
  }

  collectRelic(entry) {
    entry.collected = true;
    entry.site.collected = true;
    entry.group.visible = false;
    if (entry.site.beam) entry.site.beam.visible = false;
    if (entry.site.marker) entry.site.marker.visible = false;
    const pos = entry.group.position.clone();
    this.effects.pickupBurst(pos, entry.site.color);
    this.audio?.relicPickup();
    if (this.onRelic) this.onRelic(entry.site);
  }

  update(dt, player, elapsed) {
    this.time += dt;
    for (const r of this.relics) {
      if (r.collected) continue;
      const t = elapsed;
      r.group.position.y = r.baseY + Math.sin(t * 1.3 + r.site.x * 0.03) * 0.28;
      r.core.rotation.y += dt * 0.8;
      r.core.rotation.x += dt * 0.35;
      r.inner.rotation.y -= dt * 0.45;
      r.inner.rotation.z += dt * 0.2;
      r.ring1.rotation.z += dt * 0.6;
      r.ring2.rotation.x += dt * 0.4;
      r.glow.material.opacity = 0.42 + Math.sin(t * 2.2) * 0.12;
      for (const shard of r.shards) {
        const a = shard.userData.angle + t * 0.8;
        shard.position.set(
          Math.cos(a) * shard.userData.radius,
          shard.userData.height + Math.sin(t * 1.8 + a) * 0.25,
          Math.sin(a) * shard.userData.radius
        );
        shard.rotation.x += dt * 2;
        shard.rotation.y += dt * 1.4;
      }
      if (player && !player.dead) {
        const d = dist2D(player.position.x, player.position.z, r.site.x, r.site.z);
        if (d < 3.2 && Math.abs(player.position.y + 1.8 - r.group.position.y) < 5.5) {
          this.collectRelic(r);
        }
      }
    }

    for (const c of this.canisters) {
      if (!c.active) {
        c.timer -= dt;
        if (c.timer <= 0) {
          c.active = true;
          c.group.visible = true;
          c.group.scale.setScalar(0.2);
        }
        continue;
      }
      c.group.position.y = c.baseY + Math.sin(elapsed * 1.6 + c.x * 0.1) * 0.12;
      c.group.rotation.y += dt * (c.type === 'health' ? 0.9 : 1.4);
      if (c.spin) c.spin.rotation.x += dt * 0.6;
      const targetScale = 1;
      if (c.group.scale.x < targetScale) c.group.scale.setScalar(Math.min(targetScale, c.group.scale.x + dt * 1.8));
      if (player && !player.dead) {
        const d = dist2D(player.position.x, player.position.z, c.x, c.z);
        if (d < 2.2 && Math.abs(player.position.y + 1.5 - c.group.position.y) < 4) {
          c.active = false;
          c.group.visible = false;
          c.timer = c.type === 'health' ? 32 : 24;
          if (c.type === 'health') {
            player.health = Math.min(player.maxHealth, player.health + 35);
            this.effects.healBurst(player.position.clone().add(new THREE.Vector3(0, 2, 0)));
            this.audio?.healthPickup();
            if (this.onHeal) this.onHeal(35);
          } else {
            player.energon = Math.min(player.maxEnergon, player.energon + 45);
            player.addScore(120);
            this.effects.pickupBurst(player.position.clone().add(new THREE.Vector3(0, 2, 0)), 0x62f3ff);
            this.audio?.energyPickup();
            if (this.onEnergy) this.onEnergy(45);
          }
        }
      }
    }

    for (let i = this.shards.length - 1; i >= 0; i--) {
      const s = this.shards[i];
      s.age += dt;
      s.life -= dt;
      if (s.life <= 0) {
        s.group.visible = false;
        this.scene.remove(s.group);
        this.shards.splice(i, 1);
        continue;
      }
      s.mesh.rotation.y += dt * 4;
      s.mesh.rotation.x += dt * 2;
      const ground = this.world.heightAt(s.group.position.x, s.group.position.z);
      if (!s.grounded) {
        s.vel.y -= 20 * dt;
        s.group.position.addScaledVector(s.vel, dt);
        if (s.group.position.y <= ground + 0.3) {
          s.group.position.y = ground + 0.3;
          s.vel.y = Math.abs(s.vel.y) * 0.4;
          s.vel.x *= 0.5;
          s.vel.z *= 0.5;
          if (s.vel.y < 0.6) {
            s.vel.set(0, 0, 0);
            s.grounded = true;
          }
        }
      }
      if (player && !player.dead && s.age > 0.45) {
        const toPlayer = new THREE.Vector3(
          player.position.x - s.group.position.x,
          player.position.y + 1.8 - s.group.position.y,
          player.position.z - s.group.position.z
        );
        const dist = toPlayer.length();
        if (dist < 15) {
          toPlayer.normalize();
          const pull = (1 - dist / 15) * 28 + 8;
          s.group.position.addScaledVector(toPlayer, pull * dt);
          s.grounded = true;
          if (dist < 1.35) {
            player.addScore(s.value);
            player.energon = Math.min(player.maxEnergon, player.energon + s.energon);
            this.effects.sparks(s.group.position.clone(), 5, 0x62f3ff, 0.7, { life: 0.3 });
            this.audio?.shard();
            if (this.onShard) this.onShard(s.value);
            this.scene.remove(s.group);
            this.shards.splice(i, 1);
          }
        }
      }
      s.glow.material.opacity = 0.4 + Math.sin(s.age * 6) * 0.15;
    }
  }
}
