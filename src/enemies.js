import * as THREE from 'three';
import { clamp, damp, dampAngle, dist2D, makeGlowTexture, makeSprite, mulberry32 } from './utils.js';
import { BOSS_POS } from './world.js';

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();

function mat(color, metalness = 0.8, roughness = 0.4, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, metalness, roughness, ...extra });
}

export class Enemy {
  constructor(scene, world, effects, combat, audio, config) {
    this.scene = scene;
    this.world = world;
    this.effects = effects;
    this.combat = combat;
    this.audio = audio;
    this.config = config;
    this.type = config.type || 'trooper';
    this.isBoss = false;
    this.isDrone = this.type === 'decepticlone';
    this.scaleFactor = this.type === 'bruiser' ? 1.2 : this.isDrone ? 1 : 1;
    this.position = new THREE.Vector3(config.x, 0, config.z);
    this.position.y = world.heightAt(config.x, config.z);
    this.anchor = this.position.clone();
    this.yaw = config.yaw ?? Math.random() * Math.PI * 2;
    this.alive = true;
    this.active = true;
    this.awakened = true;
    this.health = this.maxHealth = this.type === 'bruiser' ? 170 : this.isDrone ? 58 : 85;
    this.hitRadius = this.type === 'bruiser' ? 1.7 : this.isDrone ? 1.25 : 1.15;
    this.centerHeight = this.type === 'bruiser' ? 2.8 : this.isDrone ? 2.15 : 2.0;
    this.speed = this.type === 'bruiser' ? 6.4 : this.isDrone ? 8.1 : 5.6;
    this.engageRange = this.type === 'bruiser' ? 55 : this.isDrone ? 82 : 46;
    this.preferred = this.type === 'bruiser' ? 8 : this.isDrone ? 21 : 18;
    this.attackRange = this.type === 'bruiser' ? 4.6 : this.isDrone ? 46 : 38;
    this.attackCooldown = 1.2 + Math.random() * 1.8;
    this.windup = 0;
    this.pendingAttack = null;
    this.stunTimer = 0;
    this.flashTimer = 0;
    this.wasFlashing = false;
    this.deadTimer = 0;
    this.state = 'patrol';
    this.patrolTimer = 0;
    this.patrolTarget = this.position.clone();
    this.legPhase = Math.random() * 10;
    this.aggro = false;
    this.lastKnown = new THREE.Vector3();
    this.random = mulberry32((config.seed || Math.random() * 1e9) | 0);
    this.scoreValue = this.type === 'bruiser' ? 250 : this.isDrone ? 190 : 120;
    this.glowing = null;
    this.hitPoint = new THREE.Vector3();
    this.bobPhase = Math.random() * Math.PI * 2;
    this.glowTexture = makeGlowTexture(64);
    this.buildModel();
    this.buildHealthBar();
    scene.add(this.root);
    this.root.position.copy(this.position);
    this.root.rotation.y = this.yaw;
  }

  buildModel() {
    if (this.isDrone) {
      this.buildDecepticlone();
      return;
    }
    const bodyColor = this.type === 'bruiser' ? 0x241b2b : 0x1d1a24;
    this.mats = {
      body: mat(bodyColor, 0.78, 0.44),
      purple: mat(0x4a2c62, 0.72, 0.4),
      dark: mat(0x100e15, 0.7, 0.52),
      silver: mat(0x8b929a, 0.92, 0.3),
      accent: new THREE.MeshStandardMaterial({ color: 0x2a0f18, emissive: 0xff3826, emissiveIntensity: 1.9, metalness: 0.6, roughness: 0.3 }),
      visor: new THREE.MeshStandardMaterial({ color: 0x3a0606, emissive: 0xff2617, emissiveIntensity: 3.1, metalness: 0.5, roughness: 0.2 }),
      gold: mat(0x8e6d35, 0.85, 0.4)
    };
    this.flashMats = [this.mats.body, this.mats.purple, this.mats.dark];
    for (const m of this.flashMats) {
      m.userData.baseEmissive = m.emissive.clone();
      m.userData.baseIntensity = m.emissiveIntensity;
    }

    const root = new THREE.Group();
    const rig = new THREE.Group();
    root.add(rig);
    const s = this.scaleFactor;
    rig.scale.setScalar(s);
    this.root = root;
    this.rig = rig;

    const torso = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.35, 0.82), this.mats.body);
    torso.position.y = 2.35;
    rig.add(torso);
    const chest = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.52, 0.22), this.mats.purple);
    chest.position.set(0, 2.45, 0.47);
    rig.add(chest);
    const core = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.16, 0.08), this.mats.accent);
    core.position.set(0, 2.36, 0.6);
    rig.add(core);
    const abdomen = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.55, 0.62), this.mats.dark);
    abdomen.position.y = 1.63;
    rig.add(abdomen);
    const pelvis = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.5, 0.7), this.mats.body);
    pelvis.position.y = 1.28;
    rig.add(pelvis);

    const head = new THREE.Group();
    head.position.y = 3.25;
    rig.add(head);
    const skull = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.55, 0.6), this.mats.body);
    head.add(skull);
    const face = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.3, 0.1), this.mats.dark);
    face.position.set(0, -0.03, 0.31);
    head.add(face);
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.1, 0.06), this.mats.visor);
    visor.position.set(0, 0.02, 0.37);
    head.add(visor);
    for (const sgn of [-1, 1]) {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.42, 4), this.mats.silver);
      horn.position.set(sgn * 0.24, 0.38, -0.02);
      horn.rotation.z = sgn * 0.24;
      head.add(horn);
      const shoulder = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.65, 0.8), this.mats.purple);
      shoulder.position.set(sgn * 0.96, 2.65, 0);
      rig.add(shoulder);
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.42, 4), this.mats.silver);
      spike.position.set(sgn * 1.1, 3.0, -0.06);
      spike.rotation.z = sgn * 0.2;
      rig.add(spike);
    }
    this.head = head;

    this.arms = {};
    for (const sgn of [-1, 1]) {
      const shoulder = new THREE.Group();
      shoulder.position.set(sgn * 1.03, 2.62, 0);
      rig.add(shoulder);
      const upper = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.8, 0.42), this.mats.body);
      upper.position.y = -0.5;
      shoulder.add(upper);
      const elbow = new THREE.Group();
      elbow.position.y = -0.92;
      shoulder.add(elbow);
      const fore = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.78, 0.48), this.mats.purple);
      fore.position.y = -0.44;
      elbow.add(fore);
      const hand = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.34, 0.36), this.mats.silver);
      hand.position.y = -0.92;
      elbow.add(hand);
      if (sgn > 0) {
        const gun = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.17, 0.9, 6), this.mats.dark);
        gun.rotation.x = Math.PI / 2;
        gun.position.set(0, -0.38, 0.55);
        elbow.add(gun);
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.1, 0.35, 6), this.mats.accent);
        barrel.rotation.x = Math.PI / 2;
        barrel.position.set(0, -0.38, 1.08);
        elbow.add(barrel);
        const muzzle = new THREE.Object3D();
        muzzle.position.set(0, -0.38, 1.28);
        elbow.add(muzzle);
        this.muzzle = muzzle;
        this.armR = shoulder;
        this.forearmR = elbow;
      } else {
        this.armL = shoulder;
        this.forearmL = elbow;
        if (this.type === 'bruiser') {
          const fist = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.75, 0.75), this.mats.silver);
          fist.position.y = -1.0;
          elbow.add(fist);
          this.fistL = fist;
          this.pendingFistR = fist.clone();
          this.pendingFistR.position.y = -1.0;
        }
      }
      this.arms[sgn > 0 ? 'right' : 'left'] = { shoulder, elbow };
    }
    if (this.pendingFistR) {
      this.forearmR.add(this.pendingFistR);
      this.fistR = this.pendingFistR;
      this.pendingFistR = null;
    }

    this.legs = {};
    for (const sgn of [-1, 1]) {
      const hip = new THREE.Group();
      hip.position.set(sgn * 0.42, 1.2, 0);
      rig.add(hip);
      const thigh = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.8, 0.55), this.mats.body);
      thigh.position.y = -0.42;
      hip.add(thigh);
      const knee = new THREE.Group();
      knee.position.y = -0.86;
      hip.add(knee);
      const shin = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.85, 0.48), this.mats.purple);
      shin.position.y = -0.42;
      knee.add(shin);
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.22, 0.75), this.mats.silver);
      foot.position.set(0, -0.91, 0.13);
      knee.add(foot);
      this.legs[sgn > 0 ? 'right' : 'left'] = { hip, knee, foot };
    }

    if (this.type === 'bruiser') {
      const pack = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.8, 0.4), this.mats.dark);
      pack.position.set(0, 2.5, -0.55);
      rig.add(pack);
      for (let i = 0; i < 3; i++) {
        const vent = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.5, 0.08), this.mats.accent);
        vent.position.set(-0.3 + i * 0.3, 2.55, -0.77);
        rig.add(vent);
      }
    }

    // Charge glow at right hand
    const charge = makeSprite(this.glowTexture, 0xff4a2c, 1.7);
    charge.position.set(0, -0.4, 1.4);
    charge.material.opacity = 0;
    this.forearmR.add(charge);
    this.chargeGlow = charge;

    root.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
  }

  buildDecepticlone() {
    this.mats = {
      body: mat(0x332747, 0.82, 0.4, { emissive: 0x1a0d26, emissiveIntensity: 0.75 }),
      plate: mat(0x5a3478, 0.76, 0.38, { emissive: 0x241030, emissiveIntensity: 0.7 }),
      dark: mat(0x171021, 0.7, 0.5, { emissive: 0x08040c, emissiveIntensity: 0.5 }),
      silver: mat(0xa4acb4, 0.92, 0.28),
      accent: new THREE.MeshStandardMaterial({ color: 0x2a0f18, emissive: 0xff3826, emissiveIntensity: 1.45, metalness: 0.6, roughness: 0.25 }),
      visor: new THREE.MeshStandardMaterial({ color: 0x3a0606, emissive: 0xff2617, emissiveIntensity: 3.6, metalness: 0.5, roughness: 0.18 }),
      energy: new THREE.MeshStandardMaterial({ color: 0x1a0a2c, emissive: 0xb45cff, emissiveIntensity: 2.5, metalness: 0.5, roughness: 0.2 })
    };
    this.flashMats = [this.mats.body, this.mats.plate, this.mats.dark];
    for (const m of this.flashMats) {
      m.userData.baseEmissive = m.emissive.clone();
      m.userData.baseIntensity = m.emissiveIntensity;
    }

    const root = new THREE.Group();
    const rig = new THREE.Group();
    rig.position.y = 2.15;
    root.add(rig);
    this.root = root;
    this.rig = rig;

    const hull = new THREE.Mesh(new THREE.IcosahedronGeometry(0.82, 1), this.mats.body);
    hull.scale.set(1.15, 0.9, 1.35);
    rig.add(hull);
    const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(0.64, 1), this.mats.plate);
    shell.scale.set(1.25, 0.72, 1.3);
    shell.position.y = 0.18;
    rig.add(shell);
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), this.mats.energy);
    core.position.set(0, 0.02, 0.92);
    rig.add(core);
    this.core = core;

    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), this.mats.visor);
    eye.scale.set(1.35, 0.65, 0.55);
    eye.position.set(0, 0.38, 1.02);
    rig.add(eye);
    for (const s of [-1, 1]) {
      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.1, 0.14), this.mats.silver);
      brow.position.set(s * 0.42, 0.49, 0.92);
      brow.rotation.z = s * -0.35;
      rig.add(brow);
    }

    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.42, 0.055, 6, 32), this.mats.energy);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.02;
    rig.add(ring);
    this.ring = ring;

    this.gunPods = {};
    for (const s of [-1, 1]) {
      const pod = new THREE.Group();
      pod.position.set(s * 1.12, 0.02, 0.12);
      rig.add(pod);
      const casing = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.5, 1.18), this.mats.plate);
      pod.add(casing);
      const cap = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.16, 0.3), this.mats.accent);
      cap.position.set(0, 0.2, 0.38);
      pod.add(cap);
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.1, 0.62, 7), this.mats.dark);
      barrel.rotation.x = Math.PI / 2;
      barrel.position.set(0, -0.04, 0.78);
      pod.add(barrel);
      const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.12, 7), this.mats.accent);
      tip.rotation.x = Math.PI / 2;
      tip.position.set(0, -0.04, 1.1);
      pod.add(tip);
      const muzzle = new THREE.Object3D();
      muzzle.position.set(0, -0.04, 1.18);
      pod.add(muzzle);
      if (s > 0) {
        this.muzzle = muzzle;
        this.podR = pod;
      } else {
        this.podL = pod;
        this.muzzleL = muzzle;
      }
      this.gunPods[s > 0 ? 'right' : 'left'] = pod;
    }

    // Small stabiliser fins
    for (const s of [-1, 1]) {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.7, 0.5), this.mats.silver);
      fin.position.set(s * 0.65, -0.55, -0.55);
      fin.rotation.z = s * 0.45;
      rig.add(fin);
    }

    // Hover jets
    this.droneJets = [];
    for (const s of [-1, 1]) {
      const jet = makeSprite(this.glowTexture, 0xb45cff, 1.8);
      jet.position.set(s * 0.85, -0.75, -0.15);
      jet.material.opacity = 0.75;
      rig.add(jet);
      this.droneJets.push(jet);
    }

    const charge = makeSprite(this.glowTexture, 0xff3a25, 1.45);
    charge.position.set(0, -0.04, 1.3);
    charge.material.opacity = 0;
    this.podR.add(charge);
    this.chargeGlow = charge;

    this.arms = { left: { shoulder: new THREE.Group(), elbow: new THREE.Group() }, right: { shoulder: new THREE.Group(), elbow: new THREE.Group() } };
    this.legs = { left: { hip: new THREE.Group(), knee: new THREE.Group() }, right: { hip: new THREE.Group(), knee: new THREE.Group() } };
    this.head = new THREE.Group();

    root.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
  }

  buildHealthBar() {
    const group = new THREE.Group();
    const bgMat = new THREE.MeshBasicMaterial({ color: 0x12080a, transparent: true, opacity: 0.8, depthTest: false, depthWrite: false });
    const fillMat = new THREE.MeshBasicMaterial({ color: 0xff4938, transparent: true, opacity: 0.95, depthTest: false, depthWrite: false });
    const bgGeo = new THREE.PlaneGeometry(2.2, 0.16);
    const fillGeo = new THREE.PlaneGeometry(2.2, 0.16);
    fillGeo.translate(1.1, 0, 0);
    const bg = new THREE.Mesh(bgGeo, bgMat);
    const fill = new THREE.Mesh(fillGeo, fillMat);
    fill.position.x = -1.1;
    fill.position.z = 0.01;
    group.add(bg);
    group.add(fill);
    group.position.y = (this.type === 'bruiser' ? 4.6 : this.isDrone ? 3.55 : 3.7);
    group.visible = false;
    group.renderOrder = 20;
    this.root.add(group);
    this.healthBar = group;
    this.healthFill = fill;
    this.healthBarTimer = 0;
  }

  getHitPosition(target) {
    return target.copy(this.position).add(_v2.set(0, this.centerHeight, 0));
  }

  takeDamage(amount, point, crit = false) {
    if (!this.alive) return;
    this.health -= amount;
    this.flashTimer = 0.1;
    this.healthBarTimer = 3.2;
    this.healthBar.visible = true;
    this.healthFill.scale.x = clamp(this.health / this.maxHealth, 0, 1);
    this.aggro = true;
    this.lastKnown.copy(this.combat.player ? this.combat.player.position : this.position);
    if (this.health <= 0) {
      this.die();
    } else if (this.audio) {
      this.audio.enemyHit(this.type === 'bruiser');
    }
  }

  die() {
    if (!this.alive) return;
    this.alive = false;
    this.active = false;
    this.deadTimer = 0;
    this.root.visible = true;
    const center = this.position.clone().add(new THREE.Vector3(0, this.centerHeight, 0));
    this.effects.explosion(center, 0x9d5cff, this.type === 'bruiser' ? 1.5 : 1);
    this.effects.sparks(center, 38, 0xff9a4a, 2);
    this.audio?.enemyDeath(this.type === 'bruiser');
    this.healthBar.visible = false;
    if (this.combat.onEnemyKilled) this.combat.onEnemyKilled(this);
  }

  update(dt, player, camera, elapsed) {
    if (!this.alive) {
      this.deadTimer += dt;
      if (this.deadTimer > 0.35) this.root.visible = false;
      return;
    }
    if (!this.active) return;
    const playerAlive = player && !player.dead;
    const dist = dist2D(this.position.x, this.position.z, player.position.x, player.position.z);
    const heightDiff = Math.abs(player.position.y - this.position.y);
    if (playerAlive && !this.aggro && dist < this.engageRange && heightDiff < 22) {
      this.aggro = true;
      this.lastKnown.copy(player.position);
    }
    if (this.aggro && (!playerAlive || dist > 85)) {
      this.aggro = false;
      this.state = 'return';
    }
    if (this.stunTimer > 0) {
      this.stunTimer -= dt;
      this.state = 'stunned';
      this.root.position.x += (Math.random() - 0.5) * dt * 0.3;
      this.root.position.z += (Math.random() - 0.5) * dt * 0.3;
      if (this.stunTimer <= 0) {
        this.state = 'chase';
        this.root.rotation.z = 0;
      }
      this.updateVisuals(dt, camera);
      return;
    }

    this.attackCooldown -= dt;
    this.flashTimer -= dt;

    if (this.aggro && playerAlive) {
      this.lastKnown.copy(player.position);
      this.attackCooldown = Math.max(this.attackCooldown, 0);
      const angleToPlayer = Math.atan2(player.position.x - this.position.x, player.position.z - this.position.z);
      const turnSpeed = 7;
      this.yaw = dampAngle(this.yaw, angleToPlayer, turnSpeed, dt);

      if (this.windup > 0) {
        this.windup -= dt;
        this.state = 'attack';
        this.chargeGlow.material.opacity = 0.55 + Math.sin(elapsed * 30) * 0.25;
        this.chargeGlow.scale.setScalar(1.4 + (0.8 - this.windup) * 2);
        if (this.windup <= 0) {
          this.releaseAttack(player);
          this.chargeGlow.material.opacity = 0;
        }
      } else {
        this.chargeGlow.material.opacity = damp(this.chargeGlow.material.opacity, 0, 12, dt);
        let moveDir = null;
        if (this.type === 'bruiser') {
          if (dist > 3.6) moveDir = this.toward(player.position, this.speed, dt);
          if (dist < this.attackRange && this.attackCooldown <= 0) {
            this.windup = 0.55;
            this.pendingAttack = 'slam';
          }
        } else if (this.isDrone) {
          if (dist > this.preferred + 4) moveDir = this.toward(player.position, this.speed, dt);
          else if (dist < this.preferred - 6) moveDir = this.toward(player.position, -this.speed * 0.8, dt);
          else {
            const strafe = Math.sin(elapsed * 1.15 + this.bobPhase) * 1.4;
            moveDir = _v.set(Math.cos(angleToPlayer) * strafe * dt * this.speed, 0, -Math.sin(angleToPlayer) * strafe * dt * this.speed);
          }
          if (dist < this.attackRange && this.attackCooldown <= 0 && this.windup <= 0) {
            this.windup = 0.32;
            this.pendingAttack = 'drone';
          }
        } else {
          if (dist > this.preferred + 5) moveDir = this.toward(player.position, this.speed, dt);
          else if (dist < this.preferred - 5) moveDir = this.toward(player.position, -this.speed * 0.7, dt);
          else {
            // strafe
            const strafe = Math.sin(elapsed * 0.55 + this.random() * 6) * 0.9;
            moveDir = _v.set(Math.cos(angleToPlayer) * strafe * dt * this.speed * 0.45, 0, -Math.sin(angleToPlayer) * strafe * dt * this.speed * 0.45);
          }
          if (dist < this.attackRange && this.attackCooldown <= 0 && this.windup <= 0) {
            this.windup = 0.45;
            this.pendingAttack = 'shoot';
          }
        }
        if (moveDir) this.applyMove(moveDir.x, moveDir.z);
      }
      this.state = this.windup > 0 ? 'attack' : 'chase';
      if (this.windup <= 0 && this.attackCooldown <= 0) {
        if (this.type === 'bruiser' && dist < this.attackRange) {
          this.windup = 0.55;
          this.pendingAttack = 'slam';
        } else if (this.type !== 'bruiser' && !this.isDrone && dist < this.attackRange) {
          this.windup = 0.45;
          this.pendingAttack = 'shoot';
        }
      }
    } else {
      this.state = this.aggro ? 'return' : 'patrol';
      if (this.state === 'return') {
        const d = dist2D(this.position.x, this.position.z, this.anchor.x, this.anchor.z);
        if (d > 4) this.applyMove(...this.towardDelta(this.anchor, this.speed * 0.8, dt));
        else this.aggro = false;
      } else {
        this.patrolTimer -= dt;
        if (this.patrolTimer <= 0) {
          const a = this.random() * Math.PI * 2;
          const r = this.random() * (this.config.patrolRadius || 14);
          this.patrolTarget.set(this.anchor.x + Math.cos(a) * r, 0, this.anchor.z + Math.sin(a) * r);
          this.patrolTarget.y = this.world.heightAt(this.patrolTarget.x, this.patrolTarget.z);
          this.patrolTimer = 2.5 + this.random() * 4;
          this.state = 'patrol';
        }
        const d = dist2D(this.position.x, this.position.z, this.patrolTarget.x, this.patrolTarget.z);
        if (d > 1.2) {
          const movement = this.towardDelta(this.patrolTarget, this.speed * 0.32, dt);
          this.applyMove(movement.x, movement.z);
          this.yaw = dampAngle(this.yaw, Math.atan2(movement.x, movement.z), 4, dt);
        }
      }
    }

    // Stuck against props
    this.world.resolve(this.position, 0.9);
    this.position.y = this.world.heightAt(this.position.x, this.position.z);
    this.root.position.copy(this.position);
    this.root.rotation.y = this.yaw;
    this.updateVisuals(dt, camera);
  }

  toward(target, speed, dt) {
    const dx = target.x - this.position.x;
    const dz = target.z - this.position.z;
    const d = Math.hypot(dx, dz) || 1;
    return _v.set((dx / d) * speed * dt, 0, (dz / d) * speed * dt);
  }

  towardDelta(target, speed, dt) {
    const dx = target.x - this.position.x;
    const dz = target.z - this.position.z;
    const d = Math.hypot(dx, dz) || 1;
    return { x: (dx / d) * speed * dt, z: (dz / d) * speed * dt };
  }

  applyMove(mx, mz) {
    this.position.x += mx;
    this.position.z += mz;
    const d = dist2D(this.position.x, this.position.z, this.anchor.x, this.anchor.z);
    if (d > 80) {
      const dx = this.anchor.x - this.position.x;
      const dz = this.anchor.z - this.position.z;
      const l = Math.hypot(dx, dz) || 1;
      this.position.x = this.anchor.x - (dx / l) * 80;
      this.position.z = this.anchor.z - (dz / l) * 80;
    }
    this.legPhase += Math.hypot(mx, mz) * 7;
  }

  releaseAttack(player) {
    if (this.pendingAttack === 'shoot') {
      const origin = new THREE.Vector3();
      this.root.updateMatrixWorld(true);
      this.muzzle.getWorldPosition(origin);
      const target = player.position.clone().add(new THREE.Vector3(0, 2.0, 0));
      const dir = target.sub(origin).normalize();
      const spread = 0.035;
      dir.x += (Math.random() - 0.5) * spread * 2;
      dir.y += (Math.random() - 0.5) * spread;
      dir.z += (Math.random() - 0.5) * spread * 2;
      this.combat.spawnEnemyProjectile({ origin, direction: dir.normalize(), damage: 9, speed: 36, owner: this });
      this.effects.muzzleFlash(origin, 0xff4a2c, 1.6);
      this.audio?.enemyShoot();
      this.attackCooldown = 1.5 + Math.random() * 1.1;
    } else if (this.pendingAttack === 'drone') {
      this.root.updateMatrixWorld(true);
      const origin = new THREE.Vector3();
      const target = player.position.clone().add(new THREE.Vector3(0, 2.0, 0));
      for (let i = 0; i < 2; i++) {
        const muzzle = i === 0 ? this.muzzle : this.muzzleL;
        muzzle.getWorldPosition(origin);
        const dir = target.clone().sub(origin).normalize();
        const spread = 0.02;
        dir.x += (Math.random() - 0.5) * spread * 2;
        dir.y += (Math.random() - 0.5) * spread;
        dir.z += (Math.random() - 0.5) * spread * 2;
        this.combat.spawnEnemyProjectile({ origin: origin.clone(), direction: dir.normalize(), damage: 6, speed: 44, owner: this });
      }
      this.effects.muzzleFlash(origin, 0xff4a2c, 1.2);
      this.audio?.enemyShoot();
      this.attackCooldown = 1.15 + Math.random() * 0.75;
    } else if (this.pendingAttack === 'slam') {
      const pos = this.position.clone().add(new THREE.Vector3(0, 0.5, 0));
      this.effects.ring(pos, 0xff5c3d, 8, 0.45, 1.2);
      this.effects.dust(pos, 16, 0x786b52, 1.4);
      this.effects.addShake(1.4);
      this.audio?.slam();
      const d = dist2D(this.position.x, this.position.z, player.position.x, player.position.z);
      if (d < 7 && Math.abs(player.position.y - this.position.y) < 4) {
        player.takeDamage(20, this.position.clone());
      }
      this.attackCooldown = 2.1;
    }
    this.pendingAttack = null;
  }

  updateVisuals(dt, camera) {
    if (this.isDrone) {
      this.updateDroneVisuals(dt, camera);
      return;
    }
    const moving = this.state === 'chase' || this.state === 'patrol' || this.state === 'return';
    const speed = moving ? 1 : 0;
    this.legPhase += dt * (speed ? 7 : 1.5);
    const amp = moving ? 0.55 : 0.04;
    const swing = Math.sin(this.legPhase);
    this.legs.left.hip.rotation.x = damp(this.legs.left.hip.rotation.x, swing * amp, 10, dt);
    this.legs.right.hip.rotation.x = damp(this.legs.right.hip.rotation.x, -swing * amp, 10, dt);
    this.legs.left.knee.rotation.x = damp(this.legs.left.knee.rotation.x, Math.max(0, -swing) * amp * 1.2, 10, dt);
    this.legs.right.knee.rotation.x = damp(this.legs.right.knee.rotation.x, Math.max(0, swing) * amp * 1.2, 10, dt);
    this.arms.left.shoulder.rotation.x = -swing * amp * 0.6;
    if (this.windup > 0) {
      this.armR.rotation.x = damp(this.armR.rotation.x, -1.5, 8, dt);
      this.armR.rotation.z = damp(this.armR.rotation.z, -0.1, 6, dt);
    } else {
      this.armR.rotation.x = damp(this.armR.rotation.x, swing * amp * 0.5, 6, dt);
      this.armR.rotation.z = damp(this.armR.rotation.z, 0.1, 6, dt);
    }
    this.rig.position.y = Math.abs(Math.sin(this.legPhase)) * 0.035 * (moving ? 1 : 0.2);
    this.rig.rotation.z = Math.sin(this.legPhase) * 0.02 * (moving ? 1 : 0);
    this.head.rotation.y = Math.sin(this.legPhase * 0.37) * 0.06;

    if (this.stunTimer > 0) {
      this.root.rotation.z = Math.sin(this.stunTimer * 32) * 0.05;
      if (Math.random() < dt * 16) this.effects.sparks(this.position.clone().add(new THREE.Vector3(0, 2.5, 0)), 1, 0xc58cff, 0.6, { life: 0.25 });
    } else {
      this.root.rotation.z = damp(this.root.rotation.z, 0, 5, dt);
    }

    this.flashTimer -= dt;
    const flashing = this.flashTimer > 0;
    if (flashing !== this.wasFlashing) {
      this.wasFlashing = flashing;
      for (const m of this.flashMats) {
        if (flashing) {
          m.emissive.setHex(0xffffff);
          m.emissiveIntensity = 1.2;
        } else {
          m.emissive.copy(m.userData.baseEmissive);
          m.emissiveIntensity = m.userData.baseIntensity;
        }
      }
    }

    if (this.healthBarTimer > 0) {
      this.healthBarTimer -= dt;
      this.healthBar.visible = true;
      this.healthBar.quaternion.copy(this.root.quaternion).invert().multiply(camera.quaternion);
      this.healthBar.position.y = this.type === 'bruiser' ? 4.6 : 3.7;
    } else {
      this.healthBar.visible = false;
    }
  }

  updateDroneVisuals(dt, camera) {
    this.bobPhase += dt;
    const chase = this.state === 'chase' || this.state === 'attack';
    const bob = Math.sin(this.bobPhase * 2.25) * 0.12;
    this.rig.position.y = 2.15 + bob;
    this.rig.rotation.x = damp(this.rig.rotation.x, chase ? 0.12 : 0, 4, dt);
    this.rig.rotation.z = damp(this.rig.rotation.z, Math.sin(this.bobPhase * 1.1) * 0.05, 3, dt);
    this.ring.rotation.z += dt * (chase ? 2.4 : 0.9);
    this.ring.rotation.x = Math.PI / 2 + Math.sin(this.bobPhase * 0.8) * 0.08;
    this.core.scale.setScalar(1 + Math.sin(this.bobPhase * 4) * 0.14);
    for (const jet of this.droneJets) {
      jet.material.opacity = 0.55 + Math.random() * 0.3;
      jet.scale.setScalar(1.5 + Math.random() * 0.35);
    }
    this.podR.position.z = 0.12 + (this.windup > 0 ? Math.sin(this.bobPhase * 30) * 0.03 : 0);
    this.podR.rotation.x = damp(this.podR.rotation.x, this.windup > 0 ? 0.16 : 0, 8, dt);
    if (this.windup > 0) {
      this.chargeGlow.material.opacity = 0.5 + Math.sin(this.bobPhase * 26) * 0.28;
      this.chargeGlow.scale.setScalar(1.2 + (0.4 - this.windup) * 2.4);
    } else {
      this.chargeGlow.material.opacity = damp(this.chargeGlow.material.opacity, 0, 10, dt);
    }

    this.flashTimer -= dt;
    const flashing = this.flashTimer > 0;
    if (flashing !== this.wasFlashing) {
      this.wasFlashing = flashing;
      for (const m of this.flashMats) {
        if (flashing) {
          m.emissive.setHex(0xffffff);
          m.emissiveIntensity = 1.3;
        } else {
          m.emissive.copy(m.userData.baseEmissive);
          m.emissiveIntensity = m.userData.baseIntensity;
        }
      }
    }

    if (this.healthBarTimer > 0) {
      this.healthBarTimer -= dt;
      this.healthBar.visible = true;
      this.healthBar.quaternion.copy(this.root.quaternion).invert().multiply(camera.quaternion);
      this.healthBar.position.y = 3.55;
    } else {
      this.healthBar.visible = false;
    }
  }
}

export class Boss {
  constructor(scene, world, effects, combat, audio) {
    this.scene = scene;
    this.world = world;
    this.effects = effects;
    this.combat = combat;
    this.audio = audio;
    this.type = 'boss';
    this.isBoss = true;
    this.scaleFactor = 1;
    this.position = new THREE.Vector3(BOSS_POS.x, world.heightAt(BOSS_POS.x, BOSS_POS.z), BOSS_POS.z);
    this.spawnPoint = this.position.clone();
    this.yaw = Math.PI;
    this.alive = true;
    this.active = false;
    this.awakened = false;
    this.engaged = false;
    this.health = 1000;
    this.maxHealth = 1000;
    this.hitRadius = 4.2;
    this.centerHeight = 4.6;
    this.speed = 5.4;
    this.attackCooldown = 2.2;
    this.windup = 0;
    this.pendingAttack = null;
    this.flashTimer = 0;
    this.wasFlashing = false;
    this.deadTimer = 0;
    this.summonedAt = [false, false];
    this.legPhase = 0;
    this.phase = 1;
    this.onSummon = null;
    this.onBossDeath = null;
    this.glowTexture = makeGlowTexture(64);
    this.buildModel();
    this.buildBar();
    scene.add(this.root);
    this.root.position.copy(this.position);
    this.root.rotation.y = this.yaw;
  }

  buildModel() {
    this.mats = {
      body: mat(0x26232d, 0.85, 0.42),
      plate: mat(0x3c2438, 0.8, 0.38),
      dark: mat(0x100e12, 0.7, 0.55),
      silver: mat(0x9aa0a6, 0.92, 0.3),
      gold: mat(0xa87c2f, 0.9, 0.32),
      accent: new THREE.MeshStandardMaterial({ color: 0x320b0b, emissive: 0xff3220, emissiveIntensity: 2.1, metalness: 0.6, roughness: 0.25 }),
      visor: new THREE.MeshStandardMaterial({ color: 0x400808, emissive: 0xff1e10, emissiveIntensity: 3.6, metalness: 0.4, roughness: 0.2 }),
      energy: new THREE.MeshStandardMaterial({ color: 0x1b0a30, emissive: 0xbb5cff, emissiveIntensity: 2.4, metalness: 0.5, roughness: 0.2 })
    };
    this.flashMats = [this.mats.body, this.mats.plate, this.mats.dark];
    for (const m of this.flashMats) {
      m.userData.baseEmissive = m.emissive.clone();
      m.userData.baseIntensity = m.emissiveIntensity;
    }

    const root = new THREE.Group();
    const rig = new THREE.Group();
    root.add(rig);
    this.root = root;
    this.rig = rig;

    // Legs
    this.legs = {};
    for (const sgn of [-1, 1]) {
      const hip = new THREE.Group();
      hip.position.set(sgn * 0.95, 2.9, 0);
      rig.add(hip);
      const thigh = new THREE.Mesh(new THREE.BoxGeometry(0.95, 1.7, 1.05), this.mats.body);
      thigh.position.y = -0.85;
      hip.add(thigh);
      const knee = new THREE.Group();
      knee.position.y = -1.7;
      hip.add(knee);
      const shin = new THREE.Mesh(new THREE.BoxGeometry(0.88, 1.65, 0.95), this.mats.plate);
      shin.position.y = -0.82;
      knee.add(shin);
      const foot = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.42, 1.85), this.mats.silver);
      foot.position.set(0, -1.72, 0.35);
      knee.add(foot);
      const toeGlow = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.12, 0.3), this.mats.accent);
      toeGlow.position.set(0, -1.7, 1.24);
      knee.add(toeGlow);
      const shinGlow = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.8, 0.1), this.mats.accent);
      shinGlow.position.set(0, -0.75, 0.5);
      knee.add(shinGlow);
      this.legs[sgn > 0 ? 'right' : 'left'] = { hip, knee };
    }

    // Torso
    const torso = new THREE.Mesh(new THREE.BoxGeometry(3.1, 2.5, 1.8), this.mats.body);
    torso.position.y = 4.4;
    rig.add(torso);
    const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(2.3, 1.1, 0.4), this.mats.plate);
    chestPlate.position.set(0, 4.6, 1.02);
    rig.add(chestPlate);
    const chestGlow = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.42, 0.1), this.mats.energy);
    chestGlow.position.set(0, 4.65, 1.25);
    rig.add(chestGlow);
    const core = makeSprite(this.glowTexture, 0xbb5cff, 4.4);
    core.position.set(0, 4.65, 1.5);
    core.material.opacity = 0.5;
    rig.add(core);
    this.coreGlow = core;
    const waist = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.8, 1.4), this.mats.dark);
    waist.position.y = 3.0;
    rig.add(waist);
    const belt = new THREE.Mesh(new THREE.BoxGeometry(2.35, 0.28, 1.55), this.mats.gold);
    belt.position.y = 3.3;
    rig.add(belt);

    // Head
    const head = new THREE.Group();
    head.position.y = 6.05;
    rig.add(head);
    const skull = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.0, 1.05), this.mats.body);
    head.add(skull);
    const face = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.55, 0.18), this.mats.dark);
    face.position.set(0, -0.06, 0.54);
    head.add(face);
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.16, 0.08), this.mats.visor);
    visor.position.set(0, 0.02, 0.64);
    head.add(visor);
    for (const sgn of [-1, 1]) {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.16, 1.1, 4), this.mats.gold);
      horn.position.set(sgn * 0.52, 0.82, -0.08);
      horn.rotation.z = sgn * 0.3;
      head.add(horn);
      const cheek = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.52, 0.32), this.mats.silver);
      cheek.position.set(sgn * 0.54, -0.2, 0.3);
      head.add(cheek);
    }
    const crown = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.22, 0.9), this.mats.gold);
    crown.position.set(0, 0.58, 0.1);
    head.add(crown);
    this.head = head;

    // Shoulders and arms with cannons
    this.arms = {};
    for (const sgn of [-1, 1]) {
      const shoulder = new THREE.Group();
      shoulder.position.set(sgn * 2.0, 5.2, 0);
      rig.add(shoulder);
      const pauldron = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.2, 1.5), this.mats.plate);
      pauldron.position.set(sgn * 0.18, 0.1, 0);
      shoulder.add(pauldron);
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.23, 1.1, 4), this.mats.gold);
      spike.position.set(sgn * 0.55, 0.8, -0.1);
      spike.rotation.z = sgn * 0.45;
      shoulder.add(spike);
      const upper = new THREE.Mesh(new THREE.BoxGeometry(0.75, 1.5, 0.8), this.mats.body);
      upper.position.y = -0.95;
      shoulder.add(upper);
      const elbow = new THREE.Group();
      elbow.position.y = -1.7;
      shoulder.add(elbow);
      const fore = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.4, 1.0), this.mats.plate);
      fore.position.y = -0.7;
      elbow.add(fore);
      const cannon = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.5, 2.2, 8), this.mats.dark);
      cannon.rotation.x = Math.PI / 2;
      cannon.position.set(0, -0.55, 0.9);
      elbow.add(cannon);
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.32, 0.8, 8), this.mats.accent);
      barrel.rotation.x = Math.PI / 2;
      barrel.position.set(0, -0.55, 2.3);
      elbow.add(barrel);
      const muzzle = new THREE.Object3D();
      muzzle.position.set(0, -0.55, 2.9);
      elbow.add(muzzle);
      const charge = makeSprite(this.glowTexture, 0xff3a22, 3.4);
      charge.position.set(0, -0.55, 3.05);
      charge.material.opacity = 0;
      elbow.add(charge);
      if (sgn > 0) {
        this.muzzle = muzzle;
        this.armR = shoulder;
        this.chargeGlow = charge;
      } else {
        this.muzzleL = muzzle;
      }
      this.arms[sgn > 0 ? 'right' : 'left'] = { shoulder, elbow };
    }

    // Back wings
    for (const sgn of [-1, 1]) {
      const wing = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.2, 0.22), this.mats.plate);
      wing.position.set(sgn * 1.7, 5.1, -1.0);
      wing.rotation.set(0.2, sgn * -0.4, sgn * 0.22);
      rig.add(wing);
      const edge = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.1, 0.08), this.mats.accent);
      edge.position.set(sgn * 1.7, 5.65, -1.13);
      edge.rotation.copy(wing.rotation);
      rig.add(edge);
    }

    // Back thrusters
    for (const sgn of [-1, 1]) {
      const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 0.5, 8), this.mats.dark);
      nozzle.position.set(sgn * 0.75, 4.4, -1.05);
      nozzle.rotation.x = Math.PI / 2;
      rig.add(nozzle);
      const flame = makeSprite(this.glowTexture, 0xff4a2c, 3);
      flame.position.set(sgn * 0.75, 4.4, -1.4);
      flame.material.opacity = 0;
      rig.add(flame);
      (this.thrusters ||= []).push(flame);
    }

    root.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
  }

  buildBar() {
    const group = new THREE.Group();
    group.position.y = 8.4;
    const bg = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 0.28), new THREE.MeshBasicMaterial({ color: 0x100507, transparent: true, opacity: 0.8, depthTest: false }));
    const fillGeo = new THREE.PlaneGeometry(6.4, 0.28);
    fillGeo.translate(3.2, 0, 0);
    const fill = new THREE.Mesh(fillGeo, new THREE.MeshBasicMaterial({ color: 0xff3a22, transparent: true, opacity: 0.95, depthTest: false }));
    fill.position.set(-3.2, 0, 0.01);
    group.add(bg);
    group.add(fill);
    group.visible = false;
    this.root.add(group);
    this.worldBar = group;
    this.worldBarFill = fill;
  }

  getHitPosition(target) {
    return target.copy(this.position).add(_v2.set(0, this.centerHeight, 0));
  }

  activate() {
    if (this.awakened) return;
    this.awakened = true;
    this.active = true;
    this.audio?.bossRoar();
    this.effects.addShake(2.5);
    this.effects.ring(this.position.clone().add(new THREE.Vector3(0, 0.5, 0)), 0xff3a22, 28, 1.4, 1.4);
    this.effects.flash(this.position.clone().add(new THREE.Vector3(0, 5, 0)), 0xff3a22, 12, 0.8, 3);
  }

  takeDamage(amount, point, crit = false) {
    if (!this.alive || !this.awakened) return;
    this.health -= amount;
    this.flashTimer = 0.09;
    this.health = Math.max(0, this.health);
    this.worldBar.visible = true;
    this.worldBarFill.scale.x = clamp(this.health / this.maxHealth, 0, 1);
    this.aggro = true;
    if (this.health <= 0) {
      this.die();
      return;
    }
    if (!this.summonedAt[0] && this.health < this.maxHealth * 0.66) {
      this.summonedAt[0] = true;
      this.summon();
    } else if (!this.summonedAt[1] && this.health < this.maxHealth * 0.33) {
      this.summonedAt[1] = true;
      this.summon();
    }
    if (this.health < this.maxHealth * 0.33) this.phase = 2;
    this.audio?.bossHit();
  }

  summon() {
    this.effects.ring(this.position.clone().add(new THREE.Vector3(0, 0.5, 0)), 0xbb5cff, 18, 0.9, 1.2);
    this.effects.flash(this.position.clone().add(new THREE.Vector3(0, 4, 0)), 0xbb5cff, 8, 0.5, 2);
    this.audio?.bossRoar();
    if (this.onSummon) this.onSummon(this);
  }

  die() {
    if (!this.alive) return;
    this.alive = false;
    this.active = false;
    this.deadTimer = 0;
    this.worldBar.visible = false;
    this.audio?.bossDeath();
    this.effects.addShake(4);
    if (this.onBossDeath) this.onBossDeath(this);
  }

  update(dt, player, camera, elapsed) {
    if (!this.alive) {
      this.deadTimer += dt;
      if (this.deadTimer < 2.4) {
        if (Math.random() < dt * 9) {
          const p = this.position.clone().add(new THREE.Vector3((Math.random() - 0.5) * 6, 2 + Math.random() * 5, (Math.random() - 0.5) * 6));
          this.effects.explosion(p, 0xff6a3a, 1.2 + Math.random() * 0.8);
          this.audio?.explosion(0.7);
        }
        this.rig.rotation.z = Math.sin(this.deadTimer * 8) * 0.08;
        this.rig.position.y = -this.deadTimer * 0.5;
      } else {
        this.root.visible = false;
      }
      return;
    }
    if (!this.awakened) {
      this.rig.position.y = Math.sin(elapsed * 0.8) * 0.02;
      this.head.rotation.y = Math.sin(elapsed * 0.33) * 0.16;
      this.coreGlow.material.opacity = 0.25 + Math.sin(elapsed * 1.2) * 0.12;
      return;
    }

    const dist = dist2D(this.position.x, this.position.z, player.position.x, player.position.z);
    if (!this.engaged && dist < 115) {
      this.engaged = true;
      this.audio?.bossRoar();
      this.effects.addShake(1.6);
    }
    if (!this.engaged) {
      this.coreGlow.material.opacity = 0.4 + Math.sin(elapsed * 2) * 0.2;
      return;
    }

    const angleToPlayer = Math.atan2(player.position.x - this.position.x, player.position.z - this.position.z);
    this.yaw = dampAngle(this.yaw, angleToPlayer, this.phase === 2 ? 3.2 : 2.2, dt);
    this.root.rotation.y = this.yaw;

    this.attackCooldown -= dt;
    this.flashTimer -= dt;

    if (this.windup > 0) {
      this.windup -= dt;
      this.chargeGlow.material.opacity = 0.6 + Math.sin(elapsed * 28) * 0.3;
      this.chargeGlow.scale.setScalar(1.2 + (0.9 - this.windup) * 2.4);
      for (const f of this.thrusters) f.material.opacity = 0.5 + Math.random() * 0.4;
      if (this.windup <= 0) {
        this.releaseAttack(player, dist);
        this.chargeGlow.material.opacity = 0;
        for (const f of this.thrusters) f.material.opacity = 0;
      }
    } else {
      for (const f of this.thrusters) f.material.opacity = damp(f.material.opacity, 0.15, 5, dt);
      this.chargeGlow.material.opacity = damp(this.chargeGlow.material.opacity, 0, 8, dt);
      if (dist > 30) {
        const dx = (player.position.x - this.position.x) / dist;
        const dz = (player.position.z - this.position.z) / dist;
        const spd = this.speed * (this.phase === 2 ? 1.35 : 1);
        this.position.x += dx * spd * dt;
        this.position.z += dz * spd * dt;
        this.legPhase += dt * spd * 1.5;
        this.rig.position.y = Math.abs(Math.sin(this.legPhase)) * 0.16;
      } else if (dist < 12) {
        const dx = (this.position.x - player.position.x) / dist;
        const dz = (this.position.z - player.position.z) / dist;
        this.position.x += dx * 2.4 * dt;
        this.position.z += dz * 2.4 * dt;
      }
      if (this.attackCooldown <= 0 && dist < 80) {
        this.pendingAttack = dist < 16 ? 'slam' : 'volley';
        this.windup = this.pendingAttack === 'slam' ? 0.75 : (this.phase === 2 ? 0.45 : 0.65);
      }
    }

    // Walk legs
    const walkAmp = dist > 30 ? 0.28 : 0.03;
    const swing = Math.sin(this.legPhase);
    this.legs.left.hip.rotation.x = damp(this.legs.left.hip.rotation.x, swing * walkAmp, 8, dt);
    this.legs.right.hip.rotation.x = damp(this.legs.right.hip.rotation.x, -swing * walkAmp, 8, dt);
    this.legs.left.knee.rotation.x = damp(this.legs.left.knee.rotation.x, Math.max(0, -swing) * walkAmp * 1.8, 8, dt);
    this.legs.right.knee.rotation.x = damp(this.legs.right.knee.rotation.x, Math.max(0, swing) * walkAmp * 1.8, 8, dt);
    this.arms.left.shoulder.rotation.x = -swing * walkAmp * 0.7;
    this.arms.right.shoulder.rotation.x = -swing * walkAmp * 0.7;
    this.head.rotation.y = Math.sin(elapsed * 0.8) * 0.05;
    this.coreGlow.material.opacity = 0.45 + Math.sin(elapsed * 3.3) * 0.2;
    this.coreGlow.scale.setScalar(4.4 + Math.sin(elapsed * 3.3) * 0.5);

    this.position.y = this.world.heightAt(this.position.x, this.position.z);
    this.root.position.copy(this.position);

    const flashing = this.flashTimer > 0;
    if (flashing !== this.wasFlashing) {
      this.wasFlashing = flashing;
      for (const m of this.flashMats) {
        if (flashing) {
          m.emissive.setHex(0xffffff);
          m.emissiveIntensity = 1.4;
        } else {
          m.emissive.copy(m.userData.baseEmissive);
          m.emissiveIntensity = m.userData.baseIntensity;
        }
      }
    }
    this.worldBar.visible = true;
    this.worldBar.quaternion.copy(camera.quaternion);
  }

  releaseAttack(player, dist) {
    const origin = new THREE.Vector3();
    this.root.updateMatrixWorld(true);
    if (this.pendingAttack === 'volley') {
      const count = this.phase === 2 ? 5 : 3;
      for (let i = 0; i < count; i++) {
        this.muzzle.getWorldPosition(origin);
        const target = player.position.clone().add(new THREE.Vector3(Math.sin(i * 4.1) * 1.6, 2.0, Math.cos(i * 3.7) * 1.6));
        const dir = target.sub(origin).normalize();
        this.combat.spawnBossProjectile({ origin: origin.clone(), direction: dir, damage: 12 });
      }
      this.effects.muzzleFlash(origin, 0xff3a22, 3.4);
      this.audio?.bossShoot();
      this.attackCooldown = this.phase === 2 ? 1.5 : 2.4;
    } else if (this.pendingAttack === 'slam') {
      const pos = this.position.clone().add(new THREE.Vector3(0, 0.6, 0));
      this.effects.ring(pos, 0xff3a22, 22, 0.8, 1.6);
      this.effects.ring(pos, 0xffb060, 15, 0.55, 1.2);
      this.effects.dust(pos, 34, 0x72664f, 2.4);
      this.effects.addShake(3.4);
      this.audio?.bossSlam();
      if (dist < 17) player.takeDamage(26, this.position.clone());
      this.attackCooldown = 2.8;
    }
    this.pendingAttack = null;
  }
}

export function spawnEnemySet(scene, world, effects, combat, audio) {
  const definitions = [
    { type: 'trooper', x: 294, z: 168, yaw: -2.2 },
    { type: 'trooper', x: 312, z: 200, yaw: 1.4 },
    { type: 'bruiser', x: 280, z: 208, yaw: 0.2 },
    { type: 'trooper', x: -286, z: 92, yaw: 2.2 },
    { type: 'trooper', x: -336, z: 148, yaw: -1.1 },
    { type: 'trooper', x: -300, z: -60, yaw: 0.8 },
    { type: 'trooper', x: -345, z: -100, yaw: -2.4 },
    { type: 'bruiser', x: -300, z: -118, yaw: 1.8 },
    { type: 'trooper', x: 310, z: -98, yaw: 2.6 },
    { type: 'trooper', x: 352, z: -142, yaw: -0.3 },
    { type: 'bruiser', x: 326, z: -178, yaw: 1.1 },
    { type: 'trooper', x: -356, z: -242, yaw: 0.5 },
    { type: 'trooper', x: -402, z: -278, yaw: -1.6 },
    { type: 'bruiser', x: -372, z: -300, yaw: 2.8 },
    { type: 'trooper', x: 72, z: -278, yaw: 2.2 },
    { type: 'trooper', x: 112, z: -324, yaw: -0.8 },
    { type: 'trooper', x: 30, z: -392, yaw: 0.9 },
    { type: 'bruiser', x: 60, z: -410, yaw: 2.1 },
    { type: 'trooper', x: -22, z: 40, yaw: 1.3, patrolRadius: 22 },
    { type: 'trooper', x: 18, z: -160, yaw: -1.9, patrolRadius: 24 },
    { type: 'trooper', x: -122, z: 156, yaw: 0.4, patrolRadius: 18 },
    { type: 'trooper', x: 180, z: 60, yaw: 2.5, patrolRadius: 20 },

    // Decepticlone hunter-killer patrols broadcast across the basin
    { type: 'decepticlone', x: 120, z: 250, yaw: 0.3, patrolRadius: 34 },
    { type: 'decepticlone', x: -150, z: 250, yaw: 1.8, patrolRadius: 34 },
    { type: 'decepticlone', x: 250, z: 90, yaw: -0.7, patrolRadius: 30 },
    { type: 'decepticlone', x: -250, z: 30, yaw: 2.4, patrolRadius: 32 },
    { type: 'decepticlone', x: 240, z: -40, yaw: 1.1, patrolRadius: 36 },
    { type: 'decepticlone', x: -220, z: -20, yaw: -1.5, patrolRadius: 30 },
    { type: 'decepticlone', x: 180, z: -200, yaw: 2.9, patrolRadius: 32 },
    { type: 'decepticlone', x: -210, z: -180, yaw: 0.6, patrolRadius: 34 },
    { type: 'decepticlone', x: 60, z: -130, yaw: -2.1, patrolRadius: 26 },
    { type: 'decepticlone', x: -60, z: -240, yaw: 1.7, patrolRadius: 30 },
    { type: 'decepticlone', x: 180, z: -340, yaw: -0.4, patrolRadius: 34 },
    { type: 'decepticlone', x: -140, z: -330, yaw: 2.2, patrolRadius: 36 },
    { type: 'decepticlone', x: 330, z: 120, yaw: 1.5, patrolRadius: 28 },
    { type: 'decepticlone', x: -360, z: 60, yaw: -2.6, patrolRadius: 28 },
    { type: 'decepticlone', x: 350, z: -60, yaw: 0.9, patrolRadius: 30 },
    { type: 'decepticlone', x: -390, z: -140, yaw: -1.2, patrolRadius: 30 },
    { type: 'decepticlone', x: 40, z: 140, yaw: 2.8, patrolRadius: 24 },
    { type: 'decepticlone', x: -80, z: 390, yaw: 0.2, patrolRadius: 32 },
    { type: 'decepticlone', x: 110, z: 360, yaw: -2.4, patrolRadius: 32 },
    { type: 'decepticlone', x: -40, z: -430, yaw: 1.3, patrolRadius: 30 }
  ];
  return definitions.map((d, i) => new Enemy(scene, world, effects, combat, audio, { ...d, seed: 9000 + i * 71 }));
}
