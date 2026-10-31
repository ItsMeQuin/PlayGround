import { clamp } from './utils.js';

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.ready = false;
    this.engineOn = false;
    this.boost = false;
    this.waterOn = false;
    this.bossLayer = false;
  }

  unlock() {
    if (this.ready) {
      this.ctx?.resume?.();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    this.ctx = ctx;
    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -18;
    compressor.knee.value = 22;
    compressor.ratio.value = 8;
    compressor.attack.value = 0.004;
    compressor.release.value = 0.22;
    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.55;
    this.master.connect(compressor);
    compressor.connect(ctx.destination);

    this.music = ctx.createGain();
    this.music.gain.value = 0.5;
    this.music.connect(this.master);
    this.sfx = ctx.createGain();
    this.sfx.gain.value = 0.72;
    this.sfx.connect(this.master);

    this.noiseBuffer = this.makeNoise(ctx, 2.2);
    this.ready = true;
    this.startAmbient();
    this.createEngine();
    this.createWater();
    this.createBossLayer();
  }

  makeNoise(ctx, seconds) {
    const length = Math.floor(ctx.sampleRate * seconds);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.2;
    }
    return buffer;
  }

  startAmbient() {
    const ctx = this.ctx;
    const noise = ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;
    noise.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 420;
    filter.Q.value = 0.4;
    const gain = ctx.createGain();
    gain.gain.value = 0.11;
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.music);
    noise.start();
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.06;
    lfoGain.gain.value = 130;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    // Low, slow forest drone.
    const droneGain = ctx.createGain();
    droneGain.gain.value = 0.038;
    droneGain.connect(this.music);
    for (const [freq, type, detune] of [[55, 'sine', 0], [82.5, 'triangle', 5], [110, 'sine', -7]]) {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = freq;
      osc.detune.value = detune;
      const g = ctx.createGain();
      g.gain.value = 0.4;
      osc.connect(g);
      g.connect(droneGain);
      osc.start();
    }
    const droneLfo = ctx.createOscillator();
    const droneLfoGain = ctx.createGain();
    droneLfo.frequency.value = 0.033;
    droneLfoGain.gain.value = 0.018;
    droneLfo.connect(droneLfoGain);
    droneLfoGain.connect(droneGain.gain);
    droneLfo.start();

    // Sparse distant bird-like pings.
    this.ambientTimer = 0;
  }

  createEngine() {
    const ctx = this.ctx;
    this.engineGain = ctx.createGain();
    this.engineGain.gain.value = 0;
    this.engineGain.connect(this.sfx);
    this.engineFilter = ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.value = 360;
    this.engineFilter.Q.value = 2.2;
    this.engineFilter.connect(this.engineGain);
    this.engineOscA = ctx.createOscillator();
    this.engineOscA.type = 'sawtooth';
    this.engineOscA.frequency.value = 44;
    this.engineOscA.connect(this.engineFilter);
    this.engineOscB = ctx.createOscillator();
    this.engineOscB.type = 'square';
    this.engineOscB.frequency.value = 67;
    const bGain = ctx.createGain();
    bGain.gain.value = 0.25;
    this.engineOscB.connect(bGain);
    bGain.connect(this.engineFilter);
    this.engineOscA.start();
    this.engineOscB.start();
  }

  createWater() {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 780;
    filter.Q.value = 0.7;
    this.waterGain = ctx.createGain();
    this.waterGain.gain.value = 0;
    src.connect(filter);
    filter.connect(this.waterGain);
    this.waterGain.connect(this.sfx);
    src.start();
  }

  createBossLayer() {
    const ctx = this.ctx;
    this.bossGain = ctx.createGain();
    this.bossGain.gain.value = 0;
    this.bossGain.connect(this.music);
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 36.7;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 160;
    filter.Q.value = 4;
    osc.connect(filter);
    filter.connect(this.bossGain);
    osc.start();
    const pulse = ctx.createOscillator();
    const pulseGain = ctx.createGain();
    pulse.frequency.value = 2.6;
    pulseGain.gain.value = 0.5;
    pulse.connect(pulseGain);
    pulseGain.connect(this.bossGain.gain);
    pulse.start();
    this.bossGain.gain.value = 0;
  }

  setEngine(on) {
    if (!this.ready) return;
    this.engineOn = on;
    const now = this.ctx.currentTime;
    this.engineGain.gain.cancelScheduledValues(now);
    this.engineGain.gain.setTargetAtTime(on ? 0.085 : 0, now, 0.12);
  }

  setBoost(on) {
    this.boost = on;
  }

  setWater(on) {
    if (!this.ready || on === this.waterOn) return;
    this.waterOn = on;
    this.waterGain.gain.setTargetAtTime(on ? 0.05 : 0, this.ctx.currentTime, 0.2);
  }

  updateEngine(speedRatio) {
    if (!this.ready || !this.engineOn) return;
    const now = this.ctx.currentTime;
    const ratio = clamp(speedRatio, 0, 1.4);
    this.engineOscA.frequency.setTargetAtTime(42 + ratio * 58 + (this.boost ? 22 : 0), now, 0.08);
    this.engineOscB.frequency.setTargetAtTime(63 + ratio * 90, now, 0.08);
    this.engineFilter.frequency.setTargetAtTime(260 + ratio * 950 + (this.boost ? 420 : 0), now, 0.1);
    this.engineGain.gain.setTargetAtTime(this.engineOn ? 0.055 + ratio * 0.035 + (this.boost ? 0.03 : 0) : 0, now, 0.1);
  }

  setBossMode(on) {
    if (!this.ready) return;
    this.bossLayer = on;
    this.bossGain.gain.setTargetAtTime(on ? 0.055 : 0, this.ctx.currentTime, 0.8);
  }

  setMuted(muted) {
    this.muted = muted;
    if (this.master) this.master.gain.setTargetAtTime(muted ? 0 : 0.55, this.ctx.currentTime, 0.05);
  }

  tone({ freq = 440, endFreq = null, type = 'sine', dur = 0.2, gain = 0.15, attack = 0.006, delay = 0, dest = null, filter = null, q = 1 }) {
    if (!this.ready || this.muted) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(1, freq), t0);
    if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(1, endFreq), t0 + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    let node = osc;
    if (filter) {
      const f = ctx.createBiquadFilter();
      f.type = filter;
      f.frequency.value = Math.max(60, freq * 2.4);
      f.Q.value = q;
      node.connect(f);
      node = f;
    }
    node.connect(g);
    g.connect(dest || this.sfx);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  noise({ dur = 0.2, gain = 0.12, freq = 800, type = 'lowpass', q = 1, delay = 0, dest = null, slideTo = null }) {
    if (!this.ready || this.muted) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime + delay;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.setValueAtTime(Math.max(40, freq), t0);
    filter.Q.value = q;
    if (slideTo) filter.frequency.exponentialRampToValueAtTime(Math.max(40, slideTo), t0 + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(filter);
    filter.connect(g);
    g.connect(dest || this.sfx);
    src.start(t0);
    src.stop(t0 + dur + 0.05);
  }

  shoot(type) {
    if (type === 'mortar') {
      this.tone({ freq: 180, endFreq: 48, type: 'sawtooth', dur: 0.28, gain: 0.2, filter: 'lowpass' });
      this.noise({ dur: 0.22, gain: 0.16, freq: 1200, slideTo: 180 });
    } else if (type === 'repeater') {
      this.tone({ freq: 1350 + Math.random() * 120, endFreq: 420, type: 'square', dur: 0.07, gain: 0.055 });
      this.tone({ freq: 620, endFreq: 210, type: 'sawtooth', dur: 0.08, gain: 0.05 });
    } else {
      this.tone({ freq: 940, endFreq: 240, type: 'square', dur: 0.13, gain: 0.08 });
      this.tone({ freq: 320, endFreq: 90, type: 'sawtooth', dur: 0.16, gain: 0.06 });
    }
  }

  hit() {
    this.tone({ freq: 720, endFreq: 380, type: 'triangle', dur: 0.06, gain: 0.07 });
    this.noise({ dur: 0.06, gain: 0.05, freq: 1800, type: 'hipass' });
  }

  enemyShoot() {
    this.tone({ freq: 420, endFreq: 120, type: 'sawtooth', dur: 0.16, gain: 0.06 });
  }

  enemyHit(big) {
    this.noise({ dur: 0.12, gain: big ? 0.14 : 0.08, freq: big ? 600 : 1100, type: 'bandpass', q: 0.8 });
    this.tone({ freq: big ? 140 : 260, endFreq: 60, type: 'square', dur: 0.12, gain: 0.05 });
  }

  enemyDeath(big) {
    this.noise({ dur: big ? 0.7 : 0.45, gain: big ? 0.25 : 0.16, freq: big ? 500 : 900, slideTo: 90 });
    this.tone({ freq: big ? 90 : 150, endFreq: 30, type: 'sawtooth', dur: 0.5, gain: 0.12 });
  }

  explosion(scale = 1) {
    this.noise({ dur: 0.55 * scale, gain: 0.22 * scale, freq: 700 * scale, slideTo: 60 });
    this.tone({ freq: 110 * scale, endFreq: 24, type: 'sine', dur: 0.55 * scale, gain: 0.18 * scale });
  }

  slam() {
    this.tone({ freq: 90, endFreq: 28, type: 'sine', dur: 0.4, gain: 0.24 });
    this.noise({ dur: 0.35, gain: 0.18, freq: 300, slideTo: 50 });
  }

  playerHit() {
    this.tone({ freq: 220, endFreq: 70, type: 'sawtooth', dur: 0.26, gain: 0.14 });
    this.noise({ dur: 0.2, gain: 0.14, freq: 900, type: 'bandpass', q: 0.7 });
  }

  shieldHit() {
    this.tone({ freq: 880, endFreq: 1320, type: 'sine', dur: 0.18, gain: 0.07 });
    this.tone({ freq: 1320, endFreq: 660, type: 'triangle', dur: 0.24, gain: 0.05 });
  }

  jump() {
    this.tone({ freq: 220, endFreq: 520, type: 'triangle', dur: 0.16, gain: 0.08 });
    this.noise({ dur: 0.18, gain: 0.06, freq: 900, type: 'bandpass' });
  }

  jets() {
    this.noise({ dur: 0.5, gain: 0.14, freq: 1600, type: 'bandpass', q: 1.4 });
    this.tone({ freq: 160, endFreq: 620, type: 'sawtooth', dur: 0.3, gain: 0.06 });
  }

  land(impact) {
    this.noise({ dur: 0.22, gain: 0.08 + impact * 0.12, freq: 320, slideTo: 80 });
    this.tone({ freq: 90, endFreq: 45, type: 'sine', dur: 0.2, gain: 0.08 + impact * 0.08 });
  }

  transform(toVehicle) {
    this.noise({ dur: 0.42, gain: 0.1, freq: toVehicle ? 1600 : 700, slideTo: toVehicle ? 420 : 1900, type: 'bandpass', q: 1.8 });
    this.tone({ freq: toVehicle ? 190 : 380, endFreq: toVehicle ? 380 : 190, type: 'sawtooth', dur: 0.4, gain: 0.05, filter: 'lowpass' });
    for (let i = 0; i < 3; i++) {
      this.tone({ freq: 420 + i * 130, endFreq: 320, type: 'square', dur: 0.09, gain: 0.04, delay: i * 0.1 });
    }
  }

  transformClank() {
    this.noise({ dur: 0.12, gain: 0.18, freq: 700, type: 'bandpass', q: 1.4 });
    this.tone({ freq: 180, endFreq: 80, type: 'square', dur: 0.14, gain: 0.1 });
    this.tone({ freq: 640, endFreq: 420, type: 'triangle', dur: 0.2, gain: 0.05 });
  }

  weaponSwitch() {
    this.tone({ freq: 540, endFreq: 760, type: 'square', dur: 0.06, gain: 0.04 });
  }

  weaponReady() {
    this.tone({ freq: 660, endFreq: 990, type: 'triangle', dur: 0.12, gain: 0.06 });
  }

  overheat() {
    this.noise({ dur: 0.5, gain: 0.16, freq: 2000, slideTo: 280, type: 'bandpass', q: 2 });
    this.tone({ freq: 300, endFreq: 90, type: 'sawtooth', dur: 0.4, gain: 0.08 });
  }

  emp() {
    this.tone({ freq: 60, endFreq: 900, type: 'sawtooth', dur: 0.5, gain: 0.16, filter: 'lowpass' });
    this.noise({ dur: 0.7, gain: 0.2, freq: 2400, slideTo: 200, type: 'bandpass', q: 1.3 });
    this.tone({ freq: 1400, endFreq: 200, type: 'sine', dur: 0.7, gain: 0.08 });
  }

  relicPickup() {
    const notes = [392, 523.25, 659.25, 783.99];
    notes.forEach((f, i) => {
      this.tone({ freq: f, type: 'triangle', dur: 1.1, gain: 0.075, delay: i * 0.09, dest: this.music });
      this.tone({ freq: f * 2, type: 'sine', dur: 0.7, gain: 0.025, delay: i * 0.09 + 0.02, dest: this.music });
    });
    this.noise({ dur: 0.5, gain: 0.06, freq: 2200, type: 'bandpass', q: 1.5 });
  }

  healthPickup() {
    this.tone({ freq: 330, endFreq: 660, type: 'triangle', dur: 0.35, gain: 0.08 });
    this.tone({ freq: 494, endFreq: 988, type: 'sine', dur: 0.4, gain: 0.05, delay: 0.06 });
  }

  energyPickup() {
    this.tone({ freq: 620, endFreq: 1240, type: 'square', dur: 0.2, gain: 0.04 });
    this.tone({ freq: 930, endFreq: 1860, type: 'sine', dur: 0.3, gain: 0.04, delay: 0.06 });
  }

  shard() {
    this.tone({ freq: 1050 + Math.random() * 300, endFreq: 1600, type: 'sine', dur: 0.09, gain: 0.035 });
  }

  bossRoar() {
    if (!this.ready) return;
    this.tone({ freq: 70, endFreq: 38, type: 'sawtooth', dur: 1.6, gain: 0.24, filter: 'lowpass' });
    this.tone({ freq: 93, endFreq: 52, type: 'square', dur: 1.4, gain: 0.1, filter: 'lowpass' });
    this.noise({ dur: 1.8, gain: 0.16, freq: 520, slideTo: 80, type: 'bandpass', q: 1.1 });
    this.tone({ freq: 1400, endFreq: 700, type: 'sawtooth', dur: 0.9, gain: 0.035, delay: 0.2 });
  }

  bossShoot() {
    this.tone({ freq: 260, endFreq: 70, type: 'sawtooth', dur: 0.35, gain: 0.11 });
    this.noise({ dur: 0.25, gain: 0.1, freq: 1300, slideTo: 220 });
  }

  bossSlam() {
    this.tone({ freq: 55, endFreq: 20, type: 'sine', dur: 0.9, gain: 0.3 });
    this.noise({ dur: 0.7, gain: 0.24, freq: 280, slideTo: 40 });
    this.tone({ freq: 110, endFreq: 40, type: 'square', dur: 0.5, gain: 0.09 });
  }

  bossHit() {
    this.tone({ freq: 320, endFreq: 120, type: 'square', dur: 0.07, gain: 0.05 });
  }

  bossDeath() {
    if (!this.ready) return;
    for (let i = 0; i < 4; i++) {
      setTimeout(() => this.explosion(1.4), i * 240);
    }
    this.tone({ freq: 160, endFreq: 28, type: 'sawtooth', dur: 2.6, gain: 0.16, filter: 'lowpass' });
    this.setBossMode(false);
  }

  playerDeath() {
    this.tone({ freq: 330, endFreq: 40, type: 'sawtooth', dur: 1.1, gain: 0.17, filter: 'lowpass' });
    this.noise({ dur: 1, gain: 0.2, freq: 800, slideTo: 40 });
  }

  victory() {
    const chords = [[261.63, 329.63, 392], [349.23, 440, 523.25], [392, 493.88, 587.33], [523.25, 659.25, 783.99]];
    chords.forEach((chord, i) => {
      chord.forEach((f) => this.tone({ freq: f, type: 'triangle', dur: 1.3, gain: 0.045, delay: i * 0.28, dest: this.music }));
    });
  }

  update(dt) {
    if (!this.ready) return;
    this.ambientTimer = (this.ambientTimer || 0) - dt;
    if (this.ambientTimer <= 0 && !this.bossLayer) {
      this.ambientTimer = 5 + Math.random() * 11;
      const base = 700 + Math.random() * 800;
      this.tone({ freq: base, endFreq: base * 1.2, type: 'sine', dur: 0.5, gain: 0.012, dest: this.music });
      this.tone({ freq: base * 1.5, endFreq: base * 1.1, type: 'sine', dur: 0.4, gain: 0.008, delay: 0.12, dest: this.music });
    }
  }
}
