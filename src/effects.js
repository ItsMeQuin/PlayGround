import * as THREE from 'three';
import { clamp, makeGlowTexture } from './utils.js';

const _c = new THREE.Color();
const _v = new THREE.Vector3();

class ParticlePool {
  constructor(scene, texture, capacity, additive = true) {
    this.capacity = capacity;
    this.cursor = 0;
    this.items = [];
    this.positions = new Float32Array(capacity * 3);
    this.colors = new Float32Array(capacity * 3);
    this.sizes = new Float32Array(capacity);
    this.alphas = new Float32Array(capacity);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.colors, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.sizes, 1));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1));
    this.geometry = geo;
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTex: { value: texture },
        uScale: { value: 720 },
        uAdditive: { value: additive ? 1 : 0 }
      },
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      toneMapped: false,
      vertexShader: `
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aAlpha;
        uniform float uScale;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = aColor;
          vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = clamp(aSize * uScale / max(1.0, -mv.z), 0.0, 48.0);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform sampler2D uTex;
        uniform float uAdditive;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(uTex, gl_PointCoord);
          float a = tex.a * vAlpha;
          if (a < 0.005) discard;
          gl_FragColor = vec4(vColor, a);
        }
      `
    });
    this.points = new THREE.Points(geo, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 9;
    scene.add(this.points);
    for (let i = 0; i < capacity; i++) {
      this.positions[i * 3 + 1] = -9999;
      this.items.push({ alive: false, life: 0, maxLife: 1, vx: 0, vy: 0, vz: 0, gravity: 0, drag: 0, size: 0, grow: 0, alpha: 1, color: new THREE.Color() });
    }
  }

  spawn(x, y, z, vx, vy, vz, color, size, life, options = {}) {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.capacity;
    const p = this.items[i];
    p.alive = true;
    p.life = life;
    p.maxLife = life;
    p.vx = vx;
    p.vy = vy;
    p.vz = vz;
    p.gravity = options.gravity ?? 0;
    p.drag = options.drag ?? 1.2;
    p.size = size;
    p.grow = options.grow ?? 0;
    p.alpha = options.alpha ?? 1;
    p.color.set(color);
    this.positions[i * 3] = x;
    this.positions[i * 3 + 1] = y;
    this.positions[i * 3 + 2] = z;
    this.sizes[i] = size;
    this.colors[i * 3] = p.color.r;
    this.colors[i * 3 + 1] = p.color.g;
    this.colors[i * 3 + 2] = p.color.b;
    this.alphas[i] = p.alpha;
  }

  update(dt) {
    for (let i = 0; i < this.capacity; i++) {
      const p = this.items[i];
      if (!p.alive) continue;
      p.life -= dt;
      if (p.life <= 0) {
        p.alive = false;
        this.positions[i * 3 + 1] = -9999;
        this.alphas[i] = 0;
        continue;
      }
      const drag = Math.max(0, 1 - p.drag * dt);
      p.vx *= drag; p.vz *= drag;
      p.vy = p.vy * drag - p.gravity * dt;
      this.positions[i * 3] += p.vx * dt;
      this.positions[i * 3 + 1] += p.vy * dt;
      this.positions[i * 3 + 2] += p.vz * dt;
      this.sizes[i] = Math.max(0.0001, this.sizes[i] + p.grow * dt);
      const t = p.life / p.maxLife;
      this.alphas[i] = p.alpha * (t > 0.8 ? (1 - t) * 5 : t / 0.8);
    }
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.aColor.needsUpdate = true;
    this.geometry.attributes.aSize.needsUpdate = true;
    this.geometry.attributes.aAlpha.needsUpdate = true;
  }
}

export class Effects {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.glowTexture = makeGlowTexture(128);
    this.sparksPool = new ParticlePool(scene, this.glowTexture, 900, true);
    this.smokePool = new ParticlePool(scene, this.glowTexture, 420, false);
    this.shake = 0;
    this.flashes = [];
    this.debris = [];
    this.rings = [];
    this.lightFade = 0;
    this.buildFlashes();
    this.buildDebris();
    this.buildRings();
  }

  setViewport(heightPx, fovDeg = 62) {
    const scale = (heightPx * 0.5) / Math.tan((fovDeg * Math.PI) / 360);
    this.sparksPool.material.uniforms.uScale.value = scale;
    this.smokePool.material.uniforms.uScale.value = scale;
  }

  buildFlashes() {
    for (let i = 0; i < 34; i++) {
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.glowTexture, color: 0xffffff, transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false, depthTest: true, toneMapped: false
      }));
      sprite.visible = false;
      sprite.renderOrder = 10;
      this.scene.add(sprite);
      this.flashes.push({ sprite, life: 0, maxLife: 1, grow: 1, start: 1, alpha: 1 });
    }
    this.flashCursor = 0;
  }

  buildDebris() {
    const geo = new THREE.BoxGeometry(0.28, 0.28, 0.28);
    const palette = [0x2a3a44, 0x6b241d, 0x9b8e78, 0x615b52, 0x1b2830];
    for (let i = 0; i < 48; i++) {
      const mat = new THREE.MeshStandardMaterial({ color: palette[i % palette.length], metalness: 0.7, roughness: 0.55 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.visible = false;
      mesh.castShadow = true;
      this.scene.add(mesh);
      this.debris.push({ mesh, vel: new THREE.Vector3(), spin: new THREE.Vector3(), life: 0, maxLife: 1 });
    }
    this.debrisCursor = 0;
  }

  buildRings() {
    const geo = new THREE.RingGeometry(0.86, 1, 64);
    for (let i = 0; i < 12; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0x62f3ff, transparent: true, opacity: 0, side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.visible = false;
      mesh.renderOrder = 8;
      this.scene.add(mesh);
      this.rings.push({ mesh, life: 0, maxLife: 1, radius: 1, thickness: 1 });
    }
    this.ringCursor = 0;
  }

  flash(pos, color, scale, life = 0.18, grow = 1.6) {
    const f = this.flashes[this.flashCursor];
    this.flashCursor = (this.flashCursor + 1) % this.flashes.length;
    f.sprite.visible = true;
    f.sprite.position.copy(pos);
    f.sprite.material.color.set(color);
    f.sprite.material.opacity = 0.95;
    f.start = scale;
    f.sprite.scale.setScalar(scale);
    f.life = life;
    f.maxLife = life;
    f.grow = grow;
    return f;
  }

  muzzleFlash(pos, color = 0x62f3ff, scale = 1.8) {
    this.flash(pos, color, scale, 0.07, 1.4);
    const dir = new THREE.Vector3(Math.random() - 0.5, Math.random() * 0.4, Math.random() - 0.5);
    for (let i = 0; i < 5; i++) {
      this.sparksPool.spawn(pos.x, pos.y, pos.z,
        dir.x * 8, dir.y * 8 + 1, dir.z * 8,
        color, 0.11, 0.14, { drag: 4, gravity: 4 });
    }
    this.shake = Math.max(this.shake, 0.22);
  }

  sparks(pos, count, color = 0xffcf6a, speed = 1, options = {}) {
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const s = (0.6 + Math.random() * 1.4) * speed;
      const vx = Math.sin(phi) * Math.cos(theta) * s;
      const vy = Math.abs(Math.cos(phi)) * s * 0.9 + 0.6;
      const vz = Math.sin(phi) * Math.sin(theta) * s;
      this.sparksPool.spawn(
        pos.x + (Math.random() - 0.5) * 0.3,
        pos.y + (Math.random() - 0.5) * 0.3,
        pos.z + (Math.random() - 0.5) * 0.3,
        vx, vy, vz, color,
        (options.size ?? 0.12) * (0.6 + Math.random() * 0.9),
        (options.life ?? 0.5) * (0.5 + Math.random() * 0.8),
        { gravity: options.gravity ?? 9, drag: options.drag ?? 1.5 }
      );
    }
  }

  jetBurst(pos, color = 0x7feaff, count = 20) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * 0.7;
      this.sparksPool.spawn(
        pos.x + Math.cos(a) * r, pos.y + 0.35, pos.z + Math.sin(a) * r,
        Math.cos(a) * 3, -3 - Math.random() * 5, Math.sin(a) * 3,
        color, 0.18 + Math.random() * 0.18, 0.5 + Math.random() * 0.3,
        { gravity: 2, drag: 2.2 }
      );
    }
    this.flash(pos.clone().add(new THREE.Vector3(0, 0.4, 0)), color, 2.6, 0.12);
  }

  dust(pos, count = 5, color = 0x8a805f, scale = 1) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = (0.6 + Math.random() * 1.6) * scale;
      this.smokePool.spawn(
        pos.x + (Math.random() - 0.5) * 0.8,
        pos.y + 0.1 + Math.random() * 0.3,
        pos.z + (Math.random() - 0.5) * 0.8,
        Math.cos(a) * s, 0.7 + Math.random() * 1.1, Math.sin(a) * s,
        color, (0.3 + Math.random() * 0.5) * scale, 0.55 + Math.random() * 0.6,
        { gravity: -0.4, drag: 2.2, alpha: 0.28 * clamp(scale, 0.3, 1.2), grow: 0.8 }
      );
    }
  }

  hitFlash(sourcePos, color = 0xff4a35) {
    if (!sourcePos) return;
    this.flash(sourcePos.clone(), color, 2.4, 0.14, 1.3);
    this.sparks(sourcePos.clone(), 6, color, 0.8, { life: 0.3 });
  }

  shieldImpact(pos, color = 0x62f3ff) {
    this.flash(pos, color, 3.2, 0.16, 1.5);
    for (let i = 0; i < 12; i++) {
      const a = Math.random() * Math.PI * 2;
      this.sparksPool.spawn(
        pos.x + Math.cos(a) * 2.4, pos.y + (Math.random() - 0.5) * 2, pos.z + Math.sin(a) * 2.4,
        Math.cos(a) * 1.4, (Math.random() - 0.3) * 2, Math.sin(a) * 1.4,
        color, 0.13, 0.34, { gravity: 1.5, drag: 2 }
      );
    }
  }

  bulletImpact(pos, color = 0xffa05a) {
    this.sparks(pos, 7, color, 0.7, { life: 0.32, size: 0.09 });
    this.flash(pos, color, 0.9, 0.08, 1.2);
  }

  explosion(pos, color = 0xff8a45, scale = 1) {
    this.flash(pos, 0xffe4b0, 5.5 * scale, 0.2, 2.2);
    this.flash(pos, color, 4.2 * scale, 0.36, 2.8);
    for (let i = 0; i < 38 * scale; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const s = (4 + Math.random() * 12) * scale;
      this.sparksPool.spawn(
        pos.x, pos.y, pos.z,
        Math.sin(phi) * Math.cos(theta) * s,
        Math.cos(phi) * s + 2,
        Math.sin(phi) * Math.sin(theta) * s,
        Math.random() > 0.4 ? color : 0xfff0b0,
        0.18 + Math.random() * 0.22, 0.5 + Math.random() * 0.7,
        { gravity: 12, drag: 1.2 }
      );
    }
    for (let i = 0; i < 22 * scale; i++) {
      const a = Math.random() * Math.PI * 2;
      this.smokePool.spawn(
        pos.x, pos.y + Math.random() * 1.5, pos.z,
        Math.cos(a) * (1 + Math.random() * 3), 1.5 + Math.random() * 3, Math.sin(a) * (1 + Math.random() * 3),
        Math.random() > 0.5 ? 0x2d2a26 : 0x514a40,
        0.8 + Math.random() * 1.4, 1 + Math.random() * 1.2,
        { gravity: -0.8, drag: 1.5, alpha: 0.34, grow: 2.4 }
      );
    }
    this.ring(pos.clone().setY(pos.y - 0.4), color, 9 * scale, 0.5, 1.0);
    this.spawnDebris(pos, Math.floor(10 * scale), 7 * scale);
    this.shake = Math.max(this.shake, 2.4 * scale);
  }

  spawnDebris(pos, count, speed) {
    for (let i = 0; i < count; i++) {
      const d = this.debris[this.debrisCursor];
      this.debrisCursor = (this.debrisCursor + 1) % this.debris.length;
      d.mesh.visible = true;
      d.mesh.position.copy(pos);
      d.mesh.scale.setScalar(0.5 + Math.random() * 1.6);
      d.vel.set((Math.random() - 0.5) * speed, 3 + Math.random() * speed, (Math.random() - 0.5) * speed);
      d.spin.set((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12);
      d.life = 1.4 + Math.random() * 1.2;
      d.maxLife = d.life;
    }
  }

  ring(pos, color, radius, life = 0.5, thickness = 1) {
    const r = this.rings[this.ringCursor];
    this.ringCursor = (this.ringCursor + 1) % this.rings.length;
    r.mesh.visible = true;
    r.mesh.position.copy(pos);
    r.mesh.position.y += 0.25;
    r.mesh.material.color.set(color);
    r.mesh.material.opacity = 0.8;
    r.mesh.scale.setScalar(0.4);
    r.life = life;
    r.maxLife = life;
    r.radius = radius;
    r.thickness = thickness;
    return r;
  }

  empWave(pos) {
    this.ring(pos, 0xb58cff, 26, 0.85, 1.2);
    this.ring(pos, 0x7feaff, 20, 0.65, 1.6);
    this.flash(pos, 0xd8b8ff, 9, 0.3, 3);
    for (let i = 0; i < 48; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 5 + Math.random() * 12;
      this.sparksPool.spawn(
        pos.x, pos.y, pos.z,
        Math.cos(a) * s, (Math.random() - 0.2) * 3, Math.sin(a) * s,
        0xc58cff, 0.14 + Math.random() * 0.2, 0.5 + Math.random() * 0.5,
        { gravity: 0, drag: 1.6 }
      );
    }
    for (let i = 0; i < 12; i++) {
      const a = Math.random() * Math.PI * 2;
      const nx = pos.x + Math.cos(a) * 4.5;
      const nz = pos.z + Math.sin(a) * 4.5;
      this.flash(new THREE.Vector3(nx, pos.y + Math.random() * 3, nz), 0xc58cff, 1.8, 0.4, 1.2);
    }
  }

  transformFlash(pos, color = 0x8defff) {
    this.flash(pos, 0xffffff, 7, 0.25, 2.2);
    this.flash(pos, color, 5, 0.4, 2.8);
    this.ring(pos, color, 8, 0.5, 1);
    this.shake = Math.max(this.shake, 1.2);
    for (let i = 0; i < 30; i++) {
      const a = Math.random() * Math.PI * 2;
      this.sparksPool.spawn(
        pos.x + Math.cos(a) * 0.6, pos.y + (Math.random() - 0.5) * 2.4, pos.z + Math.sin(a) * 0.6,
        Math.cos(a) * (2 + Math.random() * 5), (Math.random() - 0.2) * 4, Math.sin(a) * (2 + Math.random() * 5),
        color, 0.1 + Math.random() * 0.18, 0.4 + Math.random() * 0.4,
        { gravity: 3, drag: 2.3 }
      );
    }
  }

  pickupBurst(pos, color) {
    this.flash(pos, color, 4.2, 0.3, 2);
    this.ring(pos, color, 7, 0.6, 1.2);
    for (let i = 0; i < 36; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 1.5 + Math.random() * 5;
      this.sparksPool.spawn(
        pos.x, pos.y, pos.z,
        Math.cos(a) * s, 1 + Math.random() * 4, Math.sin(a) * s,
        color, 0.12 + Math.random() * 0.16, 0.6 + Math.random() * 0.8,
        { gravity: 4, drag: 1.8 }
      );
    }
  }

  healBurst(pos) {
    for (let i = 0; i < 24; i++) {
      const a = Math.random() * Math.PI * 2;
      this.sparksPool.spawn(
        pos.x + Math.cos(a) * 0.6, pos.y + Math.random() * 2, pos.z + Math.sin(a) * 0.6,
        Math.cos(a) * 0.6, 1.5 + Math.random() * 2.5, Math.sin(a) * 0.6,
        0x74f7a8, 0.1 + Math.random() * 0.12, 0.7 + Math.random() * 0.6,
        { gravity: -2, drag: 1.2 }
      );
    }
  }

  addShake(amount) {
    this.shake = Math.max(this.shake, amount);
  }

  update(dt) {
    this.sparksPool.update(dt);
    this.smokePool.update(dt);
    this.shake = Math.max(0, this.shake - dt * 3.4);

    for (const f of this.flashes) {
      if (!f.sprite.visible) continue;
      f.life -= dt;
      if (f.life <= 0) {
        f.sprite.visible = false;
        continue;
      }
      const t = 1 - f.life / f.maxLife;
      f.sprite.material.opacity = 0.95 * (1 - t);
      f.sprite.scale.setScalar(f.start * (1 + t * f.grow));
    }

    for (const d of this.debris) {
      if (!d.mesh.visible) continue;
      d.life -= dt;
      if (d.life <= 0) {
        d.mesh.visible = false;
        continue;
      }
      d.vel.y -= 22 * dt;
      d.mesh.position.addScaledVector(d.vel, dt);
      d.mesh.rotation.x += d.spin.x * dt;
      d.mesh.rotation.y += d.spin.y * dt;
      d.mesh.rotation.z += d.spin.z * dt;
      const ground = this.world ? this.world.heightAt(d.mesh.position.x, d.mesh.position.z) : 0;
      if (d.mesh.position.y < ground + 0.15) {
        d.mesh.position.y = ground + 0.15;
        d.vel.y *= -0.35;
        d.vel.x *= 0.65;
        d.vel.z *= 0.65;
        d.spin.multiplyScalar(0.7);
      }
      if (d.life < 0.3) d.mesh.scale.multiplyScalar(0.94);
    }

    for (const r of this.rings) {
      if (!r.mesh.visible) continue;
      r.life -= dt;
      if (r.life <= 0) {
        r.mesh.visible = false;
        continue;
      }
      const t = 1 - r.life / r.maxLife;
      const e = 1 - Math.pow(1 - t, 2.6);
      r.mesh.scale.setScalar(0.4 + e * r.radius);
      r.mesh.material.opacity = (1 - t) * 0.85 * r.thickness;
    }
  }
}
