import * as THREE from 'three';
import { clamp, formatTime, padScore } from './utils.js';

const TAU = Math.PI * 2;

export class UI {
  constructor(world, player) {
    this.world = world;
    this.player = player;
    this.el = {
      hud: document.getElementById('hud'),
      hpFill: document.getElementById('hp-fill'),
      enFill: document.getElementById('en-fill'),
      hpText: document.getElementById('hp-text'),
      enText: document.getElementById('en-text'),
      score: document.getElementById('score'),
      relicCount: document.getElementById('relic-count'),
      weaponName: document.getElementById('weapon-name'),
      weaponDesc: document.getElementById('weapon-desc'),
      heatFill: document.getElementById('heat-fill'),
      crosshair: document.getElementById('crosshair'),
      hitmarker: document.getElementById('hitmarker'),
      damageFlash: document.getElementById('damage-flash'),
      speedLines: document.getElementById('speed-lines'),
      banner: document.getElementById('banner'),
      bannerTitle: document.getElementById('banner-title'),
      bannerDesc: document.getElementById('banner-desc'),
      toast: document.getElementById('toast'),
      toastText: document.getElementById('toast-text'),
      feed: document.getElementById('feed'),
      bossBar: document.getElementById('boss-bar'),
      bossFill: document.getElementById('boss-fill'),
      bossName: document.getElementById('boss-name'),
      bossSub: document.getElementById('boss-sub'),
      modeTag: document.getElementById('mode-tag'),
      modeName: document.getElementById('mode-name'),
      coords: document.getElementById('coords'),
      minimap: document.getElementById('minimap'),
      compass: document.getElementById('compass-strip'),
      objectiveTitle: document.getElementById('obj-title'),
      objectiveBody: document.getElementById('obj-body'),
      objectiveFill: document.getElementById('obj-fill'),
      objectiveDistance: document.getElementById('obj-distance'),
      objectiveHint: document.getElementById('obj-hint'),
      prompt: document.getElementById('prompt'),
      start: document.getElementById('start-screen'),
      startStatus: document.getElementById('start-status'),
      deploy: document.getElementById('deploy'),
      pause: document.getElementById('pause-screen'),
      death: document.getElementById('death-screen'),
      victory: document.getElementById('victory-screen'),
      deathRelics: document.getElementById('death-relics'),
      abShield: document.getElementById('ab-shield'),
      abEmp: document.getElementById('ab-emp'),
      abJets: document.getElementById('ab-jets'),
      abDrive: document.getElementById('ab-drive'),
      startStatus: document.getElementById('start-status'),
      touchAbility: document.querySelector('#btn-ability .tb-lbl'),
      touchTransform: document.querySelector('#btn-transform .tb-lbl')
    };
    this.mapCtx = this.el.minimap.getContext('2d');
    this.timers = { banner: null, toast: null, damage: null };
    this.damageUntil = 0;
    this.lastWeapon = -1;
    this.lastObjective = '';
    this.lastBossPercent = -1;
    this.feedItems = [];
    this.time = 0;
    this.mapTimer = 0;
    this.textTimer = 0;
    this.compassHeading = -999;
    this.buildCompass();
    this.el.deploy.addEventListener('click', () => {
      if (this.el.deploy.dataset.ready !== '1') return;
      if (this.onDeploy) this.onDeploy();
    });
    window.addEventListener('resize', () => this.resize());
    this.resize();
  }

  resize() {
    const w = this.el.minimap.clientWidth;
    if (w > 0) {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const size = Math.round(w * dpr);
      if (this.el.minimap.width !== size) {
        this.el.minimap.width = this.el.minimap.height = size;
      }
    }
  }

  setReady() {
    if (this.el.deploy) {
      this.el.deploy.dataset.ready = '1';
      this.el.deploy.disabled = false;
      this.el.deploy.classList.add('ready');
    }
    if (this.el.startStatus) this.el.startStatus.textContent = 'ENERGON GRID ONLINE';
  }

  hideStart() {
    this.el.start.classList.add('leaving');
    this.el.deploy.dataset.ready = '0';
    setTimeout(() => {
      this.el.start.style.display = 'none';
    }, 750);
  }

  showStart() {
    this.el.start.style.display = '';
    this.el.start.classList.remove('leaving');
  }

  showHUD(show = true) {
    this.el.hud.classList.toggle('hidden', !show);
  }

  showPause(show) {
    this.el.pause.classList.toggle('hidden', !show);
  }

  showDeath(show, relics = 0) {
    this.el.death.classList.toggle('hidden', !show);
    if (show) this.el.deathRelics.textContent = `${relics} / 6`;
  }

  showVictory(show, stats = null) {
    this.el.victory.classList.toggle('hidden', !show);
    if (show && stats) {
      document.getElementById('stat-time').textContent = formatTime(stats.time);
      document.getElementById('stat-score').textContent = Math.floor(stats.score);
      document.getElementById('stat-relics').textContent = `${stats.relics} / 6`;
      document.getElementById('stat-kills').textContent = stats.kills;
    }
  }

  toast(text, duration = 2.6) {
    this.el.toastText.textContent = text;
    this.el.toast.classList.add('on');
    clearTimeout(this.timers.toast);
    this.timers.toast = setTimeout(() => this.el.toast.classList.remove('on'), duration * 1000);
  }

  banner(site) {
    this.el.bannerTitle.textContent = site.name;
    this.el.bannerDesc.textContent = site.desc;
    this.el.banner.classList.add('on');
    clearTimeout(this.timers.banner);
    this.timers.banner = setTimeout(() => this.el.banner.classList.remove('on'), 3600);
  }

  feed(html, duration = 5) {
    const node = document.createElement('div');
    node.className = 'feed-item';
    node.innerHTML = html;
    this.el.feed.appendChild(node);
    this.feedItems.push({ node, until: this.time + duration });
    if (this.feedItems.length > 4) {
      const old = this.feedItems.shift();
      old.node.remove();
    }
  }

  hitmarker(crit = false) {
    const el = this.el.hitmarker;
    el.classList.remove('on');
    el.classList.toggle('crit', crit);
    void el.offsetWidth;
    el.classList.add('on');
  }

  flashDamage(amount) {
    const el = this.el.damageFlash;
    el.classList.remove('on');
    void el.offsetWidth;
    el.classList.add('on');
    this.damageUntil = this.time + 0.16;
  }

  setBoost(on) {
    this.el.speedLines.classList.toggle('on', on);
  }

  setTargetLock(lock) {
    this.el.crosshair.classList.toggle('lock', lock);
  }

  buildCompass() {
    const strip = this.el.compass;
    strip.innerHTML = '';
    strip.style.position = 'absolute';
    strip.style.width = '2160px';
    strip.style.height = '26px';
    const labels = { 0: 'N', 45: 'NE', 90: 'E', 135: 'SE', 180: 'S', 225: 'SW', 270: 'W', 315: 'NW' };
    for (let deg = -180; deg <= 540; deg += 15) {
      const node = document.createElement('span');
      const normalized = ((deg % 360) + 360) % 360;
      const isMajor = normalized % 45 === 0;
      node.textContent = labels[normalized] ?? (isMajor ? '' : '·');
      node.style.position = 'absolute';
      node.style.left = `${(deg + 180) * 3}px`;
      node.style.top = '8px';
      node.style.transform = 'translateX(-50%)';
      node.style.font = isMajor ? '600 9px/1 var(--font-ui)' : '600 6px/1 var(--font-ui)';
      node.style.letterSpacing = '0.1em';
      node.style.color = isMajor ? (normalized === 0 ? '#62f3ff' : '#b5dce3') : '#5b858e';
      strip.appendChild(node);
    }
  }

  updateCompass(cameraYaw) {
    const heading = ((-cameraYaw * 180) / Math.PI % 360 + 360) % 360;
    if (Math.abs(heading - this.compassHeading) < 0.2) return;
    this.compassHeading = heading;
    this.el.compass.style.transform = `translateX(${150 - (heading + 180) * 3}px)`;
  }

  update(dt, context) {
    this.time += dt;
    const { player, camera, enemies, boss, objective, targetLock, boosting, speedRatio } = context;

    // Core bars
    this.el.hpFill.style.transform = `scaleX(${clamp(player.health / player.maxHealth, 0, 1)})`;
    this.el.enFill.style.transform = `scaleX(${clamp(player.energon / player.maxEnergon, 0, 1)})`;
    this.el.heatFill.style.width = `${clamp(player.heat, 0, 100)}%`;
    this.el.crosshair.classList.toggle('heat', player.overheated > 0);
    this.setTargetLock(targetLock);

    if (this.time > this.damageUntil) this.el.damageFlash.classList.remove('on');
    this.el.damageFlash.classList.toggle('low', player.health < 30 && !player.dead);
    this.setBoost(boosting);
    this.updateCompass(context.cameraYaw);
    this.el.modeTag.classList.toggle('vehicle', player.mode === 'vehicle');
    this.el.modeName.textContent = player.mode === 'vehicle' ? 'VEHICLE MODE' : 'ROBOT MODE';
    if (this.el.touchTransform) this.el.touchTransform.textContent = player.mode === 'vehicle' ? 'ROBOT' : 'SHIFT';

    // Weapon
    if (this.lastWeapon !== player.weaponIndex) {
      this.lastWeapon = player.weaponIndex;
      const w = player.weapon;
      this.el.weaponName.textContent = w.name;
      this.el.weaponDesc.textContent = w.desc;
      document.querySelectorAll('.weapon-slots .slot').forEach((slot, i) => {
        slot.classList.toggle('active', i === player.weaponIndex);
        slot.classList.toggle('locked', !player.unlocked.has(['pistol', 'repeater', 'mortar'][i]));
      });
    }

    // Ability tiles
    this.el.abShield.classList.toggle('locked', !player.abilities.shield);
    this.el.abShield.classList.toggle('active', player.shieldActive);
    this.el.abEmp.classList.toggle('locked', !player.abilities.emp);
    this.el.abJets.classList.toggle('locked', !player.abilities.jets);
    this.el.abDrive.classList.toggle('locked', !player.abilities.overdrive);
    this.el.abShield.classList.toggle('ready', player.abilities.shield && player.energon > 15);
    this.el.abEmp.classList.toggle('ready', player.abilities.emp && player.empCooldown <= 0 && player.energon >= 30);
    const empCd = this.el.abEmp.querySelector('.ab-cd');
    if (empCd) empCd.style.transform = `scaleY(${clamp(player.empCooldown / 10, 0, 1)})`;
    const shieldIcon = this.el.abShield.querySelector('.ab-glyph');
    if (shieldIcon) shieldIcon.style.opacity = player.abilities.shield ? 1 : 0.35;
    if (this.el.touchAbility) {
      if (player.abilities.emp && !player.abilities.shield) this.el.touchAbility.textContent = 'EMP';
      else if (player.abilities.shield) this.el.touchAbility.textContent = 'AEGIS';
      else this.el.touchAbility.textContent = 'LOCKED';
    }

    // Boss bar
    if (boss && boss.awakened && boss.alive && boss.engaged) {
      this.el.bossBar.classList.remove('hidden');
      this.el.bossFill.style.width = `${clamp(boss.health / boss.maxHealth, 0, 1) * 100}%`;
      this.el.bossSub.textContent = boss.phase === 2 ? "TITAN'S REST // CRITICAL — ENRAGED" : "TITAN'S REST // THREAT LEVEL OMEGA";
      this.el.bossBar.classList.toggle('enraged', boss.phase === 2);
    } else {
      this.el.bossBar.classList.add('hidden');
    }

    // Timed text updates
    this.textTimer -= dt;
    if (this.textTimer <= 0) {
      this.textTimer = 0.1;
      this.el.hpText.textContent = Math.ceil(player.health);
      this.el.enText.textContent = Math.ceil(player.energon);
      this.el.score.textContent = padScore(player.score);
      this.el.relicCount.textContent = player.relics;
      const camX = Math.round(player.position.x);
      const camZ = Math.round(player.position.z);
      this.el.coords.textContent = `X ${String(camX).padStart(4, '0')} / Z ${String(camZ).padStart(4, '0')}`;
      this.el.objectiveTitle.textContent = objective.title;
      this.el.objectiveBody.textContent = objective.body;
      this.el.objectiveFill.style.width = `${objective.progress * 100}%`;
      this.el.objectiveDistance.textContent = objective.distance;
      this.el.objectiveHint.textContent = objective.hint;
      if (objective.prompt) {
        this.el.prompt.classList.remove('hidden');
        this.el.prompt.querySelector('span').textContent = objective.prompt;
      } else {
        this.el.prompt.classList.add('hidden');
      }
    }

    // Feed expiry
    for (let i = this.feedItems.length - 1; i >= 0; i--) {
      if (this.time > this.feedItems[i].until) {
        this.feedItems[i].node.remove();
        this.feedItems.splice(i, 1);
      }
    }

    // Minimap at reduced rate
    this.mapTimer -= dt;
    if (this.mapTimer <= 0) {
      this.mapTimer = 0.055;
      this.drawMinimap(player, enemies, boss, context.cameraYaw);
    }
    this.el.minimap.setAttribute('aria-label', `Minimap. Player at ${Math.round(player.position.x)}, ${Math.round(player.position.z)}`);
  }

  drawMinimap(player, enemies, boss, cameraYaw) {
    const ctx = this.mapCtx;
    const size = this.el.minimap.width;
    const scale = size / this.world.mapSize;
    ctx.clearRect(0, 0, size, size);
    ctx.save();
    ctx.drawImage(this.world.mapCanvas, 0, 0, size, size);
    // Tint
    ctx.fillStyle = 'rgba(3, 18, 24, 0.18)';
    ctx.fillRect(0, 0, size, size);

    const toMap = (x, z) => [
      (x / 1600 + 0.5) * size,
      (z / 1600 + 0.5) * size
    ];

    // Objective trail
    if (this.world.objectiveTarget) {
      const [px, py] = toMap(player.position.x, player.position.z);
      const [ox, oy] = toMap(this.world.objectiveTarget.x, this.world.objectiveTarget.z);
      ctx.strokeStyle = 'rgba(255, 200, 90, 0.22)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 5]);
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(ox, oy);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Relic markers
    for (const site of this.world.relics) {
      if (site.collected) continue;
      const [x, y] = toMap(site.x, site.z);
      const c = new THREE.Color(site.color);
      const pulse = 1 + Math.sin(this.time * 3 + site.x) * 0.2;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.PI / 4);
      ctx.fillStyle = `rgba(${c.r * 255 | 0},${c.g * 255 | 0},${c.b * 255 | 0},0.92)`;
      ctx.shadowColor = `rgba(${c.r * 255 | 0},${c.g * 255 | 0},${c.b * 255 | 0},1)`;
      ctx.shadowBlur = 8;
      const s = 3.4 * pulse;
      ctx.fillRect(-s / 2, -s / 2, s, s);
      ctx.restore();
    }

    // Enemies
    ctx.fillStyle = 'rgba(255, 74, 56, 0.95)';
    for (const e of enemies) {
      if (!e.alive || !e.active) continue;
      const [x, y] = toMap(e.position.x, e.position.z);
      ctx.beginPath();
      ctx.arc(x, y, 1.9, 0, TAU);
      ctx.fill();
    }

    // Boss
    if (boss && boss.alive && boss.awakened) {
      const [x, y] = toMap(boss.position.x, boss.position.z);
      const pulse = 1 + Math.sin(this.time * 4) * 0.25;
      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = '#ff5648';
      ctx.fillStyle = 'rgba(255, 60, 40, 0.9)';
      ctx.shadowColor = '#ff3a22';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.moveTo(0, -7 * pulse);
      ctx.lineTo(6 * pulse, 0);
      ctx.lineTo(0, 7 * pulse);
      ctx.lineTo(-6 * pulse, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // Player view cone
    const [px, py] = toMap(player.position.x, player.position.z);
    const coneAngle = -cameraYaw;
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(coneAngle);
    const grad = ctx.createLinearGradient(0, 0, 0, -34);
    grad.addColorStop(0, 'rgba(150, 245, 255, 0.34)');
    grad.addColorStop(1, 'rgba(150, 245, 255, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 34, -Math.PI / 2 - 0.42, -Math.PI / 2 + 0.42);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // Player arrow
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(Math.PI - player.yaw);
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = 'rgba(6, 24, 30, 0.9)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -5.5);
    ctx.lineTo(4, 4.5);
    ctx.lineTo(0, 2.2);
    ctx.lineTo(-4, 4.5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // Grid
    ctx.strokeStyle = 'rgba(98, 243, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let g = 0; g <= 4; g++) {
      const p = (g / 4) * size;
      ctx.beginPath();
      ctx.moveTo(p, 0); ctx.lineTo(p, size);
      ctx.moveTo(0, p); ctx.lineTo(size, p);
      ctx.stroke();
    }

    // Ring border
    ctx.strokeStyle = 'rgba(98, 243, 255, 0.28)';
    ctx.lineWidth = 1.4;
    ctx.strokeRect(0.5, 0.5, size - 1, size - 1);
    ctx.restore();
  }

  setBossEnraged() {
    this.el.bossBar.classList.add('enraged');
  }
}
