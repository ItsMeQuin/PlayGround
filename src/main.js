import * as THREE from 'three';
import { World, SPAWN, BOSS_POS, PLAY_RADIUS } from './world.js';
import { Effects } from './effects.js';
import { Player } from './player.js';
import { Combat } from './combat.js';
import { PickupManager } from './pickups.js';
import { Enemy, Boss, spawnEnemySet } from './enemies.js';
import { Input } from './input.js';
import { UI } from './ui.js';
import { AudioEngine } from './audio.js';
import { clamp, damp, dampAngle, smoothstep, formatTime, dist2D } from './utils.js';

const ZERO_INPUT = {
  moveX: 0, moveZ: 0, sprint: false, fire: false, ability: false,
  jumpPressed: false, weaponCycle: false, pressed: new Set()
};

class Game {
  constructor() {
    const canvas = document.getElementById('game');
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
      stencil: false
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.03;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x8fb3ab);
    this.camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 4800);
    this.camera.position.set(0, 18, 380);
    this.scene.add(this.camera);

    this.clock = new THREE.Clock();
    this.state = 'menu';
    this.worldTime = 0;
    this.menuTime = 0;
    this.missionTime = 0;
    this.bossdownT = 0;
    this.deathT = 0;
    this.introT = 1;
    this.lookCooldown = 0;
    this.camYaw = 0;
    this.camPitch = 0.24;
    this.camPos = new THREE.Vector3();
    this.camLook = new THREE.Vector3();
    this.aimPoint = new THREE.Vector3();
    this.targetLock = false;
    this.region = '';
    this.lastRegion = '';
    this.bossWakeTimer = 0;
    this.bossMusic = false;
    this.bossEngaged = false;
    this.bossPhase = 1;
    this.victoryShown = false;
    this.deathShown = false;
    this.respawnPoint = SPAWN.clone();
    this.introToastShown = false;

    this.setupLights();
    this.world = new World(this.scene, this.renderer);
    this.effects = new Effects(this.scene, this.world);
    this.audio = new AudioEngine();
    this.player = new Player(this.scene, this.world, this.effects, this.audio);
    this.player.attachViewModel(this.camera);
    this.combat = new Combat(this.scene, this.world, this.effects, this.audio);
    this.pickups = new PickupManager(this.scene, this.world, this.effects, this.audio);
    this.enemies = spawnEnemySet(this.scene, this.world, this.effects, this.combat, this.audio);
    this.boss = new Boss(this.scene, this.world, this.effects, this.combat, this.audio);

    this.input = new Input(canvas);
    this.ui = new UI(this.world, this.player);
    this.wireSystems();

    this.menuAim = new THREE.Vector3(SPAWN.x, SPAWN.y + 3, SPAWN.z - 20);
    this.updateMenuCamera(0, true);
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Start screen becomes interactive once the first frame is rendered.
    this.ui.el.deploy.disabled = true;
    this.ui.el.deploy.dataset.ready = '0';
    requestAnimationFrame(() => {
      this.ui.setReady();
      this.renderer.render(this.scene, this.camera);
      window.__game = this.makeDebugAPI();
      window.__gameReady = true;
    });

    this.renderer.setAnimationLoop(() => this.loop());
  }

  setupLights() {
    this.sunDir = new THREE.Vector3(-0.52, 0.38, -0.76).normalize();
    const sun = new THREE.DirectionalLight(0xffdfb4, 2.65);
    sun.position.copy(SPAWN).addScaledVector(this.sunDir, 220);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -72;
    sun.shadow.camera.right = 72;
    sun.shadow.camera.top = 72;
    sun.shadow.camera.bottom = -72;
    sun.shadow.camera.near = 20;
    sun.shadow.camera.far = 520;
    sun.shadow.bias = -0.0005;
    sun.shadow.normalBias = 0.035;
    sun.target.position.copy(SPAWN);
    this.scene.add(sun);
    this.scene.add(sun.target);
    this.sun = sun;

    const hemi = new THREE.HemisphereLight(0xa8d4ff, 0x2e3826, 0.82);
    this.scene.add(hemi);
    const fill = new THREE.DirectionalLight(0x8cb9d8, 0.38);
    fill.position.set(160, 110, 240);
    fill.target.position.copy(SPAWN);
    this.scene.add(fill);
    this.scene.add(fill.target);
    this.fill = fill;
    this.scene.add(new THREE.AmbientLight(0x7f9b91, 0.18));
  }

  wireSystems() {
    this.combat.player = this.player;
    this.combat.enemies = this.enemies;
    this.combat.boss = this.boss;
    this.player.combat = this.combat;

    this.player.onDamage = () => this.ui.flashDamage();
    this.player.onDeath = () => this.onPlayerDeath();
    this.player.onEMP = (pos) => this.applyEMP(pos);

    this.combat.onHitmarker = (crit) => this.ui.hitmarker(crit);
    this.combat.onEnemyKilled = (enemy) => this.onEnemyKilled(enemy);
    this.combat.onPlayerHit = () => {};

    this.pickups.onRelic = (site) => this.onRelic(site);
    this.pickups.onHeal = () => {
      this.ui.toast('CHASSIS REPAIRED +35');
      this.ui.feed('REPAIR CELL <b>+35 INTEGRITY</b>');
    };
    this.pickups.onEnergy = () => {
      this.ui.feed('ENERGON CELL <b>+45 ENERGISON</b>');
    };
    this.pickups.onShard = (value) => {
      if (Math.random() < 0.25) this.ui.feed(`ENERGON SHARD <b>+${value}</b>`, 2.4);
    };

    this.boss.onSummon = (boss) => this.summonAdds(boss);
    this.boss.onBossDeath = (boss) => this.onBossDeath(boss);

    this.input.onPauseRequest = () => this.togglePause();
    this.input.onLockChange = (locked, wasLocked) => {
      if (!locked && wasLocked && this.state === 'playing') this.pause();
    };

    this.ui.onDeploy = () => this.start();

    document.getElementById('resume').addEventListener('click', () => this.resume());
    document.getElementById('mute').addEventListener('click', () => this.toggleMute());
    document.getElementById('restart').addEventListener('click', () => location.reload());
    document.getElementById('respawn').addEventListener('click', () => this.respawn());
    document.getElementById('continue').addEventListener('click', () => this.continueExploring());
    document.getElementById('redeploy').addEventListener('click', () => location.reload());

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state === 'playing') this.pause();
    });

    this.effects.setViewport(this.renderer.domElement.height, this.camera.fov);
  }

  /* ------------------------------------------------------------------ flow */
  start() {
    if (this.state !== 'menu') return;
    this.audio.unlock();
    this.audio.setEngine(false);
    this.ui.hideStart();
    this.ui.showHUD(true);
    this.input.showTouchUI(true);
    this.input.enabled = true;
    this.input.clear();
    this.state = 'playing';
    this.player.setFirstPerson(true);
    this.missionTime = 0;
    this.introT = 0;
    this.introStartPos = this.camera.position.clone();
    this.introStartLook = this.camLook.clone();
    this.camYaw = 0;
    this.camPitch = 0.08;
    this.camLook.copy(this.player.position).add(new THREE.Vector3(0, 2.3, -9));
    this.respawnPoint.copy(SPAWN);
    this.input.requestPointerLock();
    this.ui.toast('ARC-7 DEPLOYED // 6 RELIC SIGNALS DETECTED', 3.6);
    this.ui.feed('WARNING <b>DECEPTICLONE PATROLS ACTIVE</b>', 7);
    setTimeout(() => {
      if (this.state === 'playing' && !this.introToastShown) {
        this.introToastShown = true;
        this.ui.toast('TRANSFORM WITH F // FOLLOW THE GOLD SIGNALS');
      }
    }, 5200);
    this.ui.feed('MISSION <b>RECOVER 6 AUTOBOT RELIC CORES</b>', 7);
  }

  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.input.enabled = false;
    this.input.clear();
    this.input.exitPointerLock();
    this.audio.setEngine(false);
    this.audio.setBoost(false);
    this.ui.showPause(true);
  }

  resume() {
    if (this.state !== 'paused') return;
    this.ui.showPause(false);
    this.state = 'playing';
    this.input.enabled = true;
    this.input.requestPointerLock();
    this.audio.setEngine(this.player.mode === 'vehicle');
    this.clock.getDelta();
  }

  togglePause() {
    if (this.state === 'playing') this.pause();
    else if (this.state === 'paused') this.resume();
  }

  toggleMute() {
    this.audio.setMuted(!this.audio.muted);
    const btn = document.getElementById('mute');
    if (btn) btn.textContent = this.audio.muted ? 'AUDIO: OFF' : 'AUDIO: ON';
    this.ui.toast(this.audio.muted ? 'AUDIO MUTED' : 'AUDIO ONLINE', 1.6);
  }

  onPlayerDeath() {
    if (this.state === 'dead' || this.state === 'victory') return;
    this.state = 'dead';
    this.deathT = 0;
    this.deathShown = false;
    this.input.enabled = false;
    this.input.clear();
    this.audio.setEngine(false);
    this.audio.setBoost(false);
    this.effects.addShake(2);
    this.resetBossRetry();
  }

  respawn() {
    if (this.state !== 'dead') return;
    this.player.revive();
    const y = this.world.heightAt(this.respawnPoint.x, this.respawnPoint.z);
    this.player.position.set(this.respawnPoint.x, y, this.respawnPoint.z);
    this.player.root.position.copy(this.player.position);
    this.player.yaw = Math.PI;
    this.player.root.rotation.y = this.player.yaw;
    this.camYaw = 0;
    this.camPitch = 0.08;
    this.camPos.copy(this.camera.position);
    this.ui.showDeath(false);
    this.state = 'playing';
    this.input.enabled = true;
    this.input.requestPointerLock();
    this.ui.toast('SPARK SIGNATURE RESTORED', 2.6);
    this.audio.setEngine(false);
  }

  resetBossRetry() {
    if (!this.boss.alive || !this.boss.awakened) return;
    this.boss.health = this.boss.maxHealth;
    this.boss.engaged = false;
    this.boss.windup = 0;
    this.boss.attackCooldown = 2.5;
    this.boss.pendingAttack = null;
    this.boss.summonedAt = [false, false];
    this.boss.position.copy(this.boss.spawnPoint);
    this.boss.root.position.copy(this.boss.position);
    this.boss.worldBar.visible = false;
    this.boss.active = true;
    this.bossMusic = false;
    this.audio.setBossMode(false);
    if (this.bossAdds) {
      for (const add of this.bossAdds) {
        if (!add || !add.alive) continue;
        add.alive = false;
        add.root.visible = false;
        const idx = this.enemies.indexOf(add);
        if (idx >= 0) this.enemies.splice(idx, 1);
      }
    }
    this.bossAdds = [];
  }

  onBossDeath(boss) {
    if (this.state === 'victory' || this.state === 'bossdown') return;
    this.state = 'bossdown';
    this.bossdownT = 0;
    this.input.enabled = false;
    this.input.clear();
    this.audio.setEngine(false);
    this.audio.setBoost(false);
    this.audio.setBossMode(false);
    this.audio.victory();
    this.player.addScore(2500);
    this.player.setFirstPerson(false);
    this.victoryStats = {
      time: this.missionTime,
      score: this.player.score,
      relics: this.player.relics,
      kills: this.player.kills
    };
    this.ui.toast('DECEPTICON WARLORD ELIMINATED // +2500 ENERGON', 4);
    this.ui.feed('VULCAN <b>OFFLINE</b>', 8);
  }

  continueExploring() {
    if (this.state !== 'victory') return;
    this.ui.showVictory(false);
    this.state = 'playing';
    this.player.setFirstPerson(true);
    this.input.enabled = true;
    this.input.requestPointerLock();
    this.camPos.copy(this.camera.position);
    this.ui.toast('BASIN SECURED // FREE ROAM', 2.8);
    this.audio.setBossMode(false);
  }

  onRelic(site) {
    this.player.unlockRelic(site);
    this.player.addScore(250);
    this.ui.banner(site);
    this.ui.feed(`RELIC CORE <b>${site.name}</b>`, 6);
    this.effects.addShake(0.6);
    const rx = site.x + 5;
    const rz = site.z + 6;
    const ry = this.world.heightAt(rx, rz);
    this.respawnPoint.set(rx, ry, rz);
    if (this.player.relics >= 6) {
      this.bossWakeTimer = 2.2;
      this.ui.toast('ALL CORES RECOVERED // WARLORD SIGNAL LOCATED', 4);
      this.ui.feed('TITAN\'S REST <b>DECEPTICON SIGNAL DETECTED</b>', 8);
    } else {
      this.ui.toast(`RELIC CORE ${this.player.relics}/6 RECOVERED`, 2.6);
    }
  }

  applyEMP(pos) {
    const radius = 22;
    for (const enemy of [...this.enemies]) {
      if (!enemy.alive || !enemy.active) continue;
      const d = dist2D(enemy.position.x, enemy.position.z, pos.x, pos.z);
      if (d < radius) {
        enemy.stunTimer = 4.2;
        enemy.aggro = true;
        enemy.getHitPosition(this._tmpHit ||= new THREE.Vector3());
        this.combat.applyDamage(enemy, 46, this._tmpHit, true);
      }
    }
    if (this.boss.alive && this.boss.awakened) {
      const d = dist2D(this.boss.position.x, this.boss.position.z, pos.x, pos.z);
      if (d < radius + 6) {
        this.boss.getHitPosition(this._tmpHit ||= new THREE.Vector3());
        this.combat.applyDamage(this.boss, 60, this._tmpHit, true);
      }
    }
    this.ui.feed('EMP BURST <b>HOSTILES STUNNED</b>', 3);
  }

  onEnemyKilled(enemy) {
    if (!enemy || enemy.isBoss) return;
    this.player.kills++;
    this.player.addScore(enemy.scoreValue);
    const dropPos = enemy.position.clone().add(new THREE.Vector3(0, 1.6, 0));
    const drops = 1 + (Math.random() < 0.3 ? 1 : 0);
    for (let i = 0; i < drops; i++) {
      this.pickups.spawnShard(dropPos.clone(), 25 + Math.floor(Math.random() * 20), 4);
    }
    if (Math.random() < 0.35) {
      this.ui.feed(`${enemy.type === 'decepticlone' ? 'DECEPTICLONE' : 'DECEPTICON'} <b>DESTROYED</b> +${enemy.scoreValue}`, 3);
    }
  }

  summonAdds(boss) {
    if (!this.bossAdds) this.bossAdds = [];
    const aliveAdds = this.bossAdds.filter((a) => a && a.alive);
    if (aliveAdds.length > 4) return;
    this.ui.toast('WARLORD DEPLOYING REINFORCEMENTS', 2.4);
    for (let i = 0; i < 2; i++) {
      const angle = (i / 2) * Math.PI * 2 + 0.4;
      const x = boss.position.x + Math.cos(angle) * 15;
      const z = boss.position.z + Math.sin(angle) * 15;
      const enemy = new Enemy(this.scene, this.world, this.effects, this.combat, this.audio, {
        type: 'decepticlone', x, z, yaw: angle, seed: 4400 + i + Math.random() * 1000,
        patrolRadius: 10
      });
      enemy.aggro = true;
      enemy.lastKnown.copy(this.player.position);
      this.enemies.push(enemy);
      this.bossAdds.push(enemy);
      this.effects.ring(new THREE.Vector3(x, this.world.heightAt(x, z), z), 0xbb5cff, 7, 0.6, 1);
    }
  }

  /* --------------------------------------------------------------- camera */
  applyLook(dt) {
    const dx = this.input.mouseDX;
    const dy = this.input.mouseDY;
    if (dx || dy) {
      const sens = this.input.isTouch ? this.input.touchSensitivity : this.input.sensitivity;
      this.camYaw -= dx * sens;
      this.camPitch += dy * sens * 0.88;
      this.lookCooldown = 1.35;
    }
    this.camPitch = clamp(this.camPitch, -1.15, 1.15);
    this.lookCooldown = Math.max(0, this.lookCooldown - dt);
  }

  updateMenuCamera(dt, snap = false) {
    this.menuTime += dt;
    const angle = Math.PI + Math.sin(this.menuTime * 0.11) * 0.48;
    const radius = 27;
    const target = new THREE.Vector3(SPAWN.x, SPAWN.y + 2.8, SPAWN.z);
    const desired = new THREE.Vector3(
      target.x + Math.sin(angle) * radius,
      target.y + 12.5 + Math.sin(this.menuTime * 0.15) * 1.2,
      target.z + Math.cos(angle) * radius
    );
    if (snap) this.camPos.copy(desired);
    else this.camPos.lerp(desired, 1 - Math.exp(-2 * dt));
    this.camLook.copy(target);
    this.camera.position.copy(this.camPos);
    this.camera.lookAt(this.camLook);
    this.camera.fov = 58;
    this.camera.updateProjectionMatrix();
    this.camera.updateMatrixWorld();
  }

  updateBossCamera(dt) {
    this.bossdownT += dt;
    const target = this.boss.position.clone().add(new THREE.Vector3(0, 3.8, 0));
    const angle = 0.4 + this.bossdownT * 0.34;
    const radius = 24;
    const desired = new THREE.Vector3(
      target.x + Math.sin(angle) * radius,
      target.y + 7 + Math.sin(this.bossdownT * 0.6) * 1.4,
      target.z + Math.cos(angle) * radius
    );
    this.camPos.lerp(desired, 1 - Math.exp(-2.4 * dt));
    this.camLook.lerp(target, 1 - Math.exp(-5 * dt));
    const shake = this.effects.shake * 0.25;
    this.camera.position.copy(this.camPos);
    this.camera.position.x += (Math.random() - 0.5) * shake;
    this.camera.position.y += (Math.random() - 0.5) * shake;
    this.camera.lookAt(this.camLook);
    this.camera.fov = damp(this.camera.fov, 52, 3, dt);
    this.camera.updateProjectionMatrix();
    this.camera.updateMatrixWorld();
  }

  updateGameCamera(dt) {
    const blend = this.player.transformT;
    const isVehicle = this.player.mode === 'vehicle' || (this.player.transforming && this.player.transformDir > 0);

    if (this.player.mode === 'vehicle' && !this.player.transforming && this.lookCooldown <= 0 && Math.abs(this.player.speed) > 3) {
      this.camYaw = dampAngle(this.camYaw, this.player.yaw + Math.PI, 2.1, dt);
      this.camPitch = damp(this.camPitch, 0.02, 1.2, dt);
    }

    const fwdX = -Math.sin(this.camYaw);
    const fwdZ = -Math.cos(this.camYaw);
    const cosP = Math.cos(this.camPitch);
    const sinP = Math.sin(this.camPitch);
    const eyeHeight = this.player.mode === 'robot' ? 4.55 - blend * 2.92 : 1.63;
    const planar = Math.hypot(this.player.velocity.x, this.player.velocity.z);
    const bob = this.player.mode === 'robot' && this.player.grounded
      ? Math.sin(this.player.walkPhase * 2) * 0.032 * clamp(planar / 11, 0, 1)
      : 0;

    const desired = new THREE.Vector3(
      this.player.position.x + fwdX * 0.24,
      this.player.position.y + eyeHeight + bob,
      this.player.position.z + fwdZ * 0.24
    );
    const lookTarget = new THREE.Vector3(
      desired.x + fwdX * cosP * 40,
      desired.y - sinP * 40,
      desired.z + fwdZ * cosP * 40
    );

    if (this.introT < 1) {
      this.introT = Math.min(1, this.introT + dt / 2.1);
      const t = smoothstep(0, 1, this.introT);
      this.camPos.lerpVectors(this.introStartPos, desired, t);
      this.camLook.lerpVectors(this.introStartLook, lookTarget, t);
    } else {
      this.camPos.lerp(desired, 1 - Math.exp(-18 * dt));
      this.camLook.lerp(lookTarget, 1 - Math.exp(-18 * dt));
    }

    const shake = this.effects.shake * 0.24 + this.player.cameraShake * 0.16;
    this.camera.position.copy(this.camPos);
    if (shake > 0.001) {
      this.camera.position.x += (Math.random() - 0.5) * shake;
      this.camera.position.y += (Math.random() - 0.5) * shake;
      this.camera.position.z += (Math.random() - 0.5) * shake;
    }
    this.camera.lookAt(this.camLook);
    if (shake > 0.001) this.camera.rotation.z += (Math.random() - 0.5) * shake * 0.004;

    const speedRatio = clamp(Math.abs(this.player.speed) / 48, 0, 1);
    const targetFov = 70 + (isVehicle ? 7 : 0) + speedRatio * 7 + (this.player.boosting ? 3 : 0);
    this.camera.fov = damp(this.camera.fov, targetFov, 3.5, dt);
    this.camera.updateProjectionMatrix();
    this.camera.updateMatrixWorld();
  }

  updateAim() {
    this.camera.updateMatrixWorld();
    const dir = this.camera.getWorldDirection(this._aimDir ||= new THREE.Vector3());
    this.aimPoint.copy(this.camera.position).addScaledVector(dir, 130);
    const threshold = this.input.isTouch ? 0.963 : 0.986;
    let best = null;
    let bestDot = threshold;
    const targets = [...this.enemies];
    if (this.boss.alive && this.boss.awakened) targets.push(this.boss);
    for (const e of targets) {
      if (!e.alive || !e.active) continue;
      e.getHitPosition(this._tmpHit ||= new THREE.Vector3());
      const to = _toTarget.copy(this._tmpHit).sub(this.camera.position);
      const dist = to.length();
      if (dist > 145) continue;
      to.divideScalar(dist);
      const dot = to.dot(dir);
      if (dot > bestDot) {
        bestDot = dot;
        best = e;
      }
    }
    this.targetLock = !!best;
    if (best) {
      best.getHitPosition(this.aimPoint);
    }
    this.ui.setTargetLock(this.targetLock);
  }

  updateLight() {
    const anchor = this.player.position;
    this.sun.position.set(anchor.x + this.sunDir.x * 190, anchor.y + this.sunDir.y * 190, anchor.z + this.sunDir.z * 190);
    this.sun.target.position.set(anchor.x, anchor.y, anchor.z);
    this.sun.target.updateMatrixWorld();
    this.fill.position.set(anchor.x + 150, anchor.y + 100, anchor.z + 210);
    this.fill.target.position.set(anchor.x, anchor.y, anchor.z);
    this.fill.target.updateMatrixWorld();
  }

  /* --------------------------------------------------------------- update */
  updateWorldCommon(dt) {
    this.worldTime += dt;
    this.world.update(dt, this.worldTime, this.camera);
    this.effects.update(dt);
    this.audio.update(dt);
  }

  updateMenu(dt) {
    this.updateWorldCommon(dt);
    this.player.update(dt, ZERO_INPUT, this.camYaw, this.menuAim, this.camera);
    for (const enemy of this.enemies) enemy.update(dt, this.player, this.camera, this.worldTime);
    this.boss.update(dt, this.player, this.camera, this.worldTime);
    this.pickups.update(dt, this.player, this.worldTime);
    this.updateMenuCamera(dt);
    this.updateLight();
  }

  updatePlaying(dt) {
    this.missionTime += dt;
    this.input.update();
    if (this.input.pressed.has('KeyM')) this.toggleMute();
    this.applyLook(dt);
    this.updateGameCamera(dt);
    this.updateAim();

    this.player.update(dt, this.input, this.camYaw, this.aimPoint, this.camera);
    if (this.state !== 'playing') {
      this.updateWorldCommon(dt);
      return;
    }
    this.combat.update(dt);
    for (const enemy of this.enemies) enemy.update(dt, this.player, this.camera, this.worldTime);
    this.boss.update(dt, this.player, this.camera, this.worldTime);

    if (!this.bossMusic && this.boss.engaged && this.boss.alive) {
      this.bossMusic = true;
      this.audio.setBossMode(true);
      this.ui.toast('WARNING // DECEPTICON WARLORD ENGAGED', 3.4);
      this.effects.addShake(1.2);
    }
    if (this.boss.alive && this.boss.phase !== this.bossPhase) {
      this.bossPhase = this.boss.phase;
      if (this.bossPhase === 2) {
        this.ui.toast('WARLORD ENRAGED // SEEK COVER', 3);
        this.audio.bossRoar();
      }
    }
    if (this.bossWakeTimer > 0) {
      this.bossWakeTimer -= dt;
      if (this.bossWakeTimer <= 0 && !this.boss.awakened) {
        this.boss.activate();
        this.audio.setBossMode(true);
        this.bossMusic = true;
        this.ui.toast('WARNING // WARLORD SIGNAL ONLINE AT TITAN\'S REST', 4.2);
        this.ui.feed('TITAN\'S REST <b>VULCAN AWAKENED</b>', 8);
      }
    }

    this.pickups.update(dt, this.player, this.worldTime);
    this.updateWorldCommon(dt);
    this.updateLight();
    this.updateRegion();

    if (this.player.mode === 'vehicle') {
      this.audio.updateEngine(Math.abs(this.player.speed) / 48);
    }

    const objective = this.getObjective();
    this.ui.update(dt, {
      player: this.player,
      camera: this.camera,
      cameraYaw: this.camYaw,
      enemies: this.enemies,
      boss: this.boss,
      objective,
      targetLock: this.targetLock,
      boosting: this.player.boosting && this.player.speed > 18,
      speedRatio: Math.abs(this.player.speed) / 48
    });
    this.effects.shake = Math.max(0, this.effects.shake);
  }

  updateBossDown(dt) {
    this.bossdownT += dt;
    this.worldTime += dt;
    this.boss.update(dt, this.player, this.camera, this.worldTime);
    this.pickups.update(dt, this.player, this.worldTime);
    this.updateWorldCommon(dt);
    this.updateLight();
    this.updateBossCamera(dt);
    this.ui.update(dt, {
      player: this.player,
      camera: this.camera,
      cameraYaw: this.camYaw,
      enemies: this.enemies,
      boss: this.boss,
      objective: this.getObjective(),
      targetLock: false,
      boosting: false,
      speedRatio: 0
    });
    if (this.bossdownT > 3.6 && !this.victoryShown) {
      this.victoryShown = true;
      this.state = 'victory';
      this.ui.showVictory(true, this.victoryStats || {
        time: this.missionTime,
        score: this.player.score,
        relics: this.player.relics,
        kills: this.player.kills
      });
      this.ui.showHUD(false);
    }
  }

  updateDead(dt) {
    this.deathT += dt;
    this.updateWorldCommon(dt);
    if (this.deathT > 1.25 && !this.deathShown) {
      this.deathShown = true;
      this.ui.showDeath(true, this.player.relics);
    }
    this.updateGameCamera(dt);
  }

  updateVictory(dt) {
    this.worldTime += dt;
    this.world.update(dt, this.worldTime, this.camera);
    this.effects.update(dt);
  }

  updateRegion() {
    const region = this.world.regionAt(this.player.position.x, this.player.position.z);
    if (region !== this.region) {
      const previous = this.region;
      this.region = region;
      if (previous && this.state === 'playing') {
        this.ui.toast(`ENTERING ${region}`, 2.2);
      }
    }
  }

  getObjective() {
    const remaining = this.world.relics.filter((r) => !r.collected);
    const objective = {
      title: 'RECOVER THE RELIC CORES',
      body: 'Six Autobot caches are scattered across the basin. Decepticlone patrols are hunting you. Each core unlocks a weapon or ability.',
      progress: this.player.relics / 6,
      distance: '—',
      hint: 'FOLLOW THE SIGNAL',
      prompt: null,
      target: null
    };
    if (remaining.length > 0) {
      let nearest = remaining[0];
      let nearestDist = Infinity;
      for (const r of remaining) {
        const d = dist2D(this.player.position.x, this.player.position.z, r.x, r.z);
        if (d < nearestDist) {
          nearestDist = d;
          nearest = r;
        }
      }
      objective.distance = `${Math.round(nearestDist)} M`;
      objective.hint = this.world.regionAt(nearest.x, nearest.z);
      objective.target = { x: nearest.x, z: nearest.z };
      objective.body = `Relic cores recovered: ${this.player.relics}/6. The closest signal pulses from ${objective.hint.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}.`;
      if (this.player.relics === 0 && !this.input.isTouch && this.missionTime < 9) objective.prompt = 'TRANSFORM';
      this.world.objectiveTarget = objective.target;
    } else if (this.boss.alive) {
      const d = dist2D(this.player.position.x, this.player.position.z, this.boss.position.x, this.boss.position.z);
      objective.title = 'DESTROY THE DECEPTICON WARLORD';
      objective.body = this.boss.awakened
        ? 'VULCAN is online at Titan\'s Rest. Break the warlord before the basin falls.'
        : 'All six cores are secure. The warlord signal is rising at Titan\'s Rest.';
      objective.progress = 1;
      objective.distance = `${Math.round(d)} M`;
      objective.hint = "TITAN'S REST";
      objective.target = { x: this.boss.position.x, z: this.boss.position.z };
      this.world.objectiveTarget = objective.target;
    } else {
      objective.title = 'BASIN SECURED';
      objective.body = 'The Decepticon warlord is scrap. Hunt the remaining hostiles or explore the forest.';
      objective.progress = 1;
      objective.distance = '—';
      objective.hint = 'FREE ROAM';
      this.world.objectiveTarget = null;
    }
    return objective;
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.input?.isTouch ? 1.5 : 1.75));
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.effects?.setViewport(this.renderer.domElement.height, this.camera.fov);
    this.ui?.resize();
  }

  loop() {
    const dt = clamp(this.clock.getDelta(), 0, 0.05);
    if (this.state === 'menu') {
      this.updateMenu(dt);
    } else if (this.state === 'playing') {
      this.updatePlaying(dt);
    } else if (this.state === 'paused') {
      // Keep the frame alive without advancing the simulation.
    } else if (this.state === 'dead') {
      this.updateDead(dt);
    } else if (this.state === 'bossdown') {
      this.updateBossDown(dt);
    } else if (this.state === 'victory') {
      this.updateVictory(dt);
    }
    this.renderer.render(this.scene, this.camera);
    this.input.endFrame();
  }

  makeDebugAPI() {
    return {
      game: this,
      start: () => this.start(),
      teleport: (x, z, yaw = null) => {
        const y = this.world.heightAt(x, z) + 0.05;
        this.player.position.set(x, y, z);
        this.player.velocity.set(0, 0, 0);
        this.player.root.position.copy(this.player.position);
        if (yaw !== null) {
          this.player.yaw = yaw;
          this.player.root.rotation.y = yaw;
          this.camYaw = yaw + Math.PI;
        }
        this.camPos.copy(this.camera.position);
        this.ui.toast(`TELEPORT // ${Math.round(x)} / ${Math.round(z)}`, 1.5);
      },
      unlockAll: () => {
        for (const entry of this.pickups.relics) {
          if (!entry.collected) this.pickups.collectRelic(entry);
        }
      },
      awakenBoss: () => {
        this.bossWakeTimer = 0.01;
      },
      killBoss: () => {
        if (this.boss.alive) {
          this.boss.getHitPosition(this._tmpHit ||= new THREE.Vector3());
          this.combat.applyDamage(this.boss, this.boss.health, this._tmpHit, true);
        }
      },
      heal: () => { this.player.health = this.player.maxHealth; this.player.energon = this.player.maxEnergon; },
      state: () => this.state,
      setCamera: (yaw, pitch = 0.25) => { this.camYaw = yaw; this.camPitch = pitch; },
      fire: () => { this.player.fire(this.player.weapon); },
      stats: () => ({
        state: this.state,
        relics: this.player.relics,
        health: this.player.health,
        enemies: this.enemies.filter((e) => e.alive).length,
        bossHealth: this.boss.health,
        position: { x: this.player.position.x, z: this.player.position.z },
        missionTime: this.missionTime
      })
    };
  }
}

const _toTarget = new THREE.Vector3();

try {
  new Game();
} catch (error) {
  console.error(error);
  const status = document.getElementById('start-status');
  if (status) status.textContent = 'RENDERER OFFLINE // CHECK CONSOLE';
  const deploy = document.getElementById('deploy');
  if (deploy) deploy.disabled = true;
}
