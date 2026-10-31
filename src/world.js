import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  clamp, lerp, smoothstep, dist2D, distToSegment2D, makeNoise2D, fbm,
  mulberry32, TAU, makeGlowTexture, addWind, makeSprite
} from './utils.js';

export const WORLD_SIZE = 1600;
export const WORLD_HALF = WORLD_SIZE / 2;
export const WATER_LEVEL = -4;
export const PLAY_RADIUS = 600;
export const SPAWN = new THREE.Vector3(0, 0, 320);
export const BOSS_POS = new THREE.Vector3(10, 0, -470);

export const RELIC_DATA = [
  {
    id: 'repeater', name: 'ION REPEATER', kind: 'weapon', color: 0x62f3ff,
    x: 300, z: 185, desc: 'RAPID-FIRE ENERGON WEAPON ONLINE',
    blurb: 'A tri-barrel ion repeater. Hold fire to shred Decepticon plating.',
    icon: '▹'
  },
  {
    id: 'shield', name: 'AEGIS SHIELD', kind: 'ability', color: 0x5fb2ff,
    x: -310, z: 120, desc: 'HOLD Q TO PROJECT A HARD-LIGHT BARRIER',
    blurb: 'A hard-light barrier that absorbs incoming fire while it drains energon.',
    icon: '◈'
  },
  {
    id: 'jets', name: 'JUMP JETS', kind: 'ability', color: 0x9dff7d,
    x: -320, z: -80, desc: 'DOUBLE JUMP + AIR CONTROL ENABLED',
    blurb: 'Ventral thrusters. Jump again in mid-air and steer while airborne.',
    icon: '▲'
  },
  {
    id: 'mortar', name: 'PLASMA MORTAR', kind: 'weapon', color: 0xffa04f,
    x: 330, z: -120, desc: 'ARCING PLASMA SHELLS // SPLASH DAMAGE',
    blurb: 'Lob explosive plasma shells into enemy clusters. Watch the arc.',
    icon: '◉'
  },
  {
    id: 'emp', name: 'EMP BURST', kind: 'ability', color: 0xc58cff,
    x: -380, z: -260, desc: 'PRESS E TO DISCHARGE A STUNNING SHOCKWAVE',
    blurb: 'Discharge a radial electromagnetic pulse that stuns and damages nearby hostiles.',
    icon: '⌁'
  },
  {
    id: 'overdrive', name: 'OVERDRIVE CORE', kind: 'ability', color: 0xffd35e,
    x: 90, z: -300, desc: 'VEHICLE BOOST + RAM PLATING ONLINE',
    blurb: 'Overcharges your alternator. Boost harder and turn Decepticons into roadkill.',
    icon: '»'
  }
];

export const REGIONS = [
  { name: 'VERDANT BASIN', x: 0, z: 320, radius: 190 },
  { name: 'SUNKEN RELAY', x: -310, z: 120, radius: 200 },
  { name: 'WHISPERING PINES', x: -320, z: -80, radius: 230 },
  { name: 'EMBER RIDGE', x: 330, z: -120, radius: 220 },
  { name: 'FALLEN SPIRE', x: -380, z: -260, radius: 190 },
  { name: "TITAN'S REST", x: 10, z: -440, radius: 230 }
];

const _v1 = new THREE.Vector3();

export class World {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.noise = makeNoise2D(70513);
    this.noiseDetail = makeNoise2D(99821);
    this.noisePatch = makeNoise2D(31415);
    this.colliders = [];
    this.roadSamples = [];
    this.forestPoints = [];
    this.relicSites = [];
    this.elapsed = 0;
    this.windUniforms = { time: { value: 0 } };
    this.glowTexture = makeGlowTexture(128);
    this.waterUniforms = null;
    this.animated = [];

    this.relics = RELIC_DATA.map((d) => ({
      ...d,
      pos: new THREE.Vector3(d.x, 0, d.z),
      y: 0,
      collected: false,
      marker: null
    }));
    for (const r of this.relics) r.y = this._rawHeight(r.x, r.z);
    this.bossY = this._rawHeight(BOSS_POS.x, BOSS_POS.z);
    BOSS_POS.y = this.bossY;

    const spawnY = this.heightAt(SPAWN.x, SPAWN.z);
    SPAWN.y = spawnY;

    this.buildSky();
    this.buildTerrain();
    this.buildWater();
    this.buildRoads();
    this.buildForest();
    this.buildGrass();
    this.buildRocks();
    this.buildSpawnSite();
    this.buildShrines();
    this.buildBossArena();
    this.buildCrystals();
    this.buildMapCanvas();
  }

  /* ------------------------------------------------------------- height field */
  _rawHeight(x, z) {
    let h = fbm(this.noise, x * 0.0021, z * 0.0021, 5) * 105 - 18;
    h += fbm(this.noiseDetail, x * 0.0085 + 11, z * 0.0085 - 7, 3) * 12;
    h += fbm(this.noisePatch, x * 0.034, z * 0.034, 2) * 2.2;

    // Ember Ridge — a volcanic shoulder in the east.
    const dRidge = dist2D(x, z, 400, -160);
    h += 58 * Math.exp(-(dRidge * dRidge) / (2 * 150 * 150));

    // Sunken Relay lake, with a shrine island at its heart.
    const dLake = dist2D(x, z, -310, 120);
    h = lerp(h, -9.5, 1 - smoothstep(62, 195, dLake));
    h = lerp(h, 3.2, 1 - smoothstep(0, 43, dLake));

    // A narrow stone causeway to the island.
    const cw = distToSegment2D(x, z, -186, 120, -276, 120).dist;
    if (cw < 10) h = Math.max(h, -2.35 - cw * 0.05);

    // Spawn plateau.
    const dSpawn = dist2D(x, z, SPAWN.x, SPAWN.z);
    h = lerp(h, 6.2, 1 - smoothstep(38, 125, dSpawn));

    // Titan's Rest arena.
    const dBoss = dist2D(x, z, BOSS_POS.x, BOSS_POS.z);
    h = lerp(h, 7.5, 1 - smoothstep(48, 155, dBoss));

    // Ring of mountains that closes the playable basin.
    const r = Math.sqrt(x * x + z * z);
    const edge = smoothstep(PLAY_RADIUS + 10, WORLD_HALF - 20, r);
    h += edge * edge * 175 + edge * 35;

    return h;
  }

  heightAt(x, z) {
    let h = this._rawHeight(x, z);
    for (const site of this.relics) {
      const d = dist2D(x, z, site.x, site.z);
      if (d < 42) h = lerp(h, site.y, 1 - smoothstep(14, 42, d));
    }
    const dBoss = dist2D(x, z, BOSS_POS.x, BOSS_POS.z);
    if (dBoss < 160) h = lerp(h, this.bossY, 1 - smoothstep(45, 160, dBoss));
    return h;
  }

  slopeAt(x, z) {
    const e = 1.4;
    const hx = this.heightAt(x + e, z) - this.heightAt(x - e, z);
    const hz = this.heightAt(x, z + e) - this.heightAt(x, z - e);
    return Math.sqrt(hx * hx + hz * hz) / (2 * e);
  }

  normalAt(x, z, target = new THREE.Vector3()) {
    const e = 0.8;
    const hx = this.heightAt(x + e, z) - this.heightAt(x - e, z);
    const hz = this.heightAt(x, z + e) - this.heightAt(x, z - e);
    return target.set(-hx, 2 * e, -hz).normalize();
  }

  isWater(x, z) {
    return this.heightAt(x, z) < WATER_LEVEL + 0.15;
  }

  regionAt(x, z) {
    let best = REGIONS[0];
    let bestD = Infinity;
    for (const region of REGIONS) {
      const d = dist2D(x, z, region.x, region.z);
      if (d < region.radius && d < bestD) {
        best = region;
        bestD = d;
      }
    }
    return best.name;
  }

  addCollider(x, z, radius, y = 0, tag = '') {
    this.colliders.push({ x, z, radius, y, tag });
  }

  resolve(pos, radius) {
    let hit = false;
    const limit = PLAY_RADIUS - 2;
    if (Math.abs(pos.x) > limit || Math.abs(pos.z) > limit) {
      const len = Math.sqrt(pos.x * pos.x + pos.z * pos.z);
      if (len > limit) {
        pos.x = (pos.x / len) * limit;
        pos.z = (pos.z / len) * limit;
        hit = 'boundary';
      }
    }
    for (const c of this.colliders) {
      const dx = pos.x - c.x;
      const dz = pos.z - c.z;
      const rr = c.radius + radius;
      const d2 = dx * dx + dz * dz;
      if (d2 < rr * rr && d2 > 0.0001) {
        const d = Math.sqrt(d2);
        pos.x = c.x + (dx / d) * rr;
        pos.z = c.z + (dz / d) * rr;
        hit = true;
      }
    }
    return hit;
  }

  /* ------------------------------------------------------------------- sky */
  buildSky() {
    const uniforms = {
      uTop: { value: new THREE.Color(0x214e78) },
      uHorizon: { value: new THREE.Color(0xb9d9c9) },
      uSunColor: { value: new THREE.Color(0xffd6a0) },
      uSunDir: { value: new THREE.Vector3(-0.52, 0.38, -0.76).normalize() },
      uTime: { value: 0 }
    };
    this.sunDir = uniforms.uSunDir.value;
    const material = new THREE.ShaderMaterial({
      uniforms,
      side: THREE.BackSide,
      depthWrite: false,
      toneMapped: false,
      vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uTop;
        uniform vec3 uHorizon;
        uniform vec3 uSunColor;
        uniform vec3 uSunDir;
        uniform float uTime;
        varying vec3 vDir;

        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                     mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
        }
        float fbm(vec2 p) {
          float v = 0.0; float a = 0.5;
          for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + 13.7; a *= 0.5; }
          return v;
        }

        void main() {
          vec3 d = normalize(vDir);
          float sky = pow(clamp(d.y, 0.0, 1.0), 0.55);
          vec3 col = mix(uHorizon, uTop, sky);
          col = mix(vec3(0.035, 0.065, 0.06), col, smoothstep(-0.28, 0.05, d.y));

          float sun = max(dot(d, normalize(uSunDir)), 0.0);
          col += uSunColor * pow(sun, 1200.0) * 2.2;
          col += uSunColor * pow(sun, 18.0) * 0.18;
          col += uSunColor * pow(sun, 4.0) * 0.045;

          vec2 uv = d.xz / (max(d.y, 0.02) + 0.22);
          float clouds = fbm(uv * 1.35 + vec2(uTime * 0.004, uTime * 0.0015));
          float mask = smoothstep(0.54, 0.78, clouds) * smoothstep(0.02, 0.22, d.y);
          col = mix(col, vec3(0.76, 0.82, 0.81), mask * 0.5);
          float high = fbm(uv * 2.9 - vec2(uTime * 0.006, 0.0));
          col = mix(col, vec3(0.9, 0.93, 0.9), smoothstep(0.68, 0.9, high) * smoothstep(0.12, 0.45, d.y) * 0.22);

          float band = smoothstep(0.0, 0.015, abs(mod(d.y * 38.0 + sin(d.x * 5.0) * 0.8, 1.0) - 0.5));
          col += vec3(0.02, 0.05, 0.05) * (1.0 - band) * smoothstep(0.1, 0.5, d.y);

          gl_FragColor = vec4(col, 1.0);
        }
      `
    });
    this.skyUniforms = uniforms;
    this.skyGroup = new THREE.Group();
    this.skyGroup.renderOrder = -1000;
    const sky = new THREE.Mesh(new THREE.SphereGeometry(4200, 40, 24), material);
    sky.frustumCulled = false;
    this.skyGroup.add(sky);

    const sunSprite = makeSprite(this.glowTexture, 0xffe6b8, 520);
    sunSprite.position.copy(this.sunDir).multiplyScalar(3400);
    sunSprite.material.opacity = 0.6;
    this.skyGroup.add(sunSprite);
    const sunCore = makeSprite(this.glowTexture, 0xfff6e0, 160);
    sunCore.position.copy(this.sunDir).multiplyScalar(3390);
    this.skyGroup.add(sunCore);
    this.scene.add(this.skyGroup);

    this.scene.fog = new THREE.FogExp2(0x9fbdb2, 0.00125);
  }

  /* --------------------------------------------------------------- terrain */
  buildTerrain() {
    const segments = 220;
    const geometry = new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, segments, segments);
    geometry.rotateX(-Math.PI / 2);
    const pos = geometry.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const color = new THREE.Color();
    const darkGrass = new THREE.Color(0x2c4a27);
    const midGrass = new THREE.Color(0x496d33);
    const dryGrass = new THREE.Color(0x6e7d42);
    const forestFloor = new THREE.Color(0x263a22);
    const rock = new THREE.Color(0x666b63);
    const rockDark = new THREE.Color(0x414a45);
    const sand = new THREE.Color(0x6f694b);
    const mud = new THREE.Color(0x3c4230);

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const h = this.heightAt(x, z);
      pos.setY(i, h);
    }
    geometry.computeVertexNormals();
    const normal = geometry.attributes.normal;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const h = pos.getY(i);
      const slope = 1 - normal.getY(i);
      const patch = fbm(this.noisePatch, x * 0.015, z * 0.015, 2);
      const detail = fbm(this.noiseDetail, x * 0.11, z * 0.11, 2);
      const distCenter = Math.sqrt(x * x + z * z);

      if (h < WATER_LEVEL + 2.2) {
        color.copy(sand).lerp(mud, smoothstep(WATER_LEVEL - 2, WATER_LEVEL + 1, h));
      } else {
        color.copy(darkGrass).lerp(midGrass, smoothstep(-0.35, 0.4, patch) * 0.65 + detail * 0.18);
        color.lerp(dryGrass, smoothstep(0.3, 0.75, patch) * 0.32);
        color.lerp(forestFloor, smoothstep(0.4, 0.9, detail) * 0.2);
      }
      if (slope > 0.28) color.lerp(rockDark, smoothstep(0.28, 0.62, slope) * 0.75);
      if (slope > 0.5) color.lerp(rock, smoothstep(0.5, 0.85, slope) * 0.7);
      if (h > 60) color.lerp(rock, smoothstep(55, 100, h) * 0.55);
      if (h > 125) color.lerp(new THREE.Color(0x8c928a), smoothstep(120, 170, h) * 0.7);
      if (distCenter > PLAY_RADIUS + 50) color.lerp(rockDark, smoothstep(PLAY_RADIUS + 50, PLAY_RADIUS + 180, distCenter) * 0.55);
      const shade = 0.9 + detail * 0.12;
      colors[i * 3] = color.r * shade;
      colors[i * 3 + 1] = color.g * shade;
      colors[i * 3 + 2] = color.b * shade;
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const detailCanvas = document.createElement('canvas');
    detailCanvas.width = detailCanvas.height = 256;
    const ctx = detailCanvas.getContext('2d');
    ctx.fillStyle = '#d8d8d8';
    ctx.fillRect(0, 0, 256, 256);
    const img = ctx.getImageData(0, 0, 256, 256);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = 198 + Math.random() * 57;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    for (let i = 0; i < 900; i++) {
      const g = 120 + Math.random() * 120;
      ctx.fillStyle = `rgba(${g * 0.72},${g},${g * 0.6},${Math.random() * 0.24})`;
      ctx.fillRect(Math.random() * 256, Math.random() * 256, 1 + Math.random() * 3, 1 + Math.random() * 3);
    }
    const detailTex = new THREE.CanvasTexture(detailCanvas);
    detailTex.wrapS = detailTex.wrapT = THREE.RepeatWrapping;
    detailTex.repeat.set(110, 110);
    detailTex.colorSpace = THREE.SRGBColorSpace;
    detailTex.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());

    const material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.96,
      metalness: 0.0,
      map: detailTex
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    mesh.matrixAutoUpdate = false;
    this.scene.add(mesh);
    this.terrain = mesh;
  }

  buildWater() {
    const geometry = new THREE.PlaneGeometry(WORLD_SIZE + 200, WORLD_SIZE + 200, 1, 1);
    geometry.rotateX(-Math.PI / 2);
    const uniforms = {
      uTime: { value: 0 },
      uDeep: { value: new THREE.Color(0x0b3340) },
      uShallow: { value: new THREE.Color(0x2f7d80) },
      uSky: { value: new THREE.Color(0xa9cec4) },
      uSunDir: { value: this.sunDir.clone() },
      uSunColor: { value: new THREE.Color(0xffe0b0) },
      uFogColor: { value: new THREE.Color(0x9fbdb2) }
    };
    this.waterUniforms = uniforms;
    const material = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      depthWrite: false,
      toneMapped: false,
      vertexShader: `
        uniform float uTime;
        varying vec3 vWorld;
        void main() {
          vec3 p = position;
          p.y += sin(p.x * 0.075 + uTime * 0.85) * 0.13
               + cos(p.z * 0.105 - uTime * 0.62) * 0.1
               + sin((p.x + p.z) * 0.21 + uTime * 1.6) * 0.035;
          vec4 world = modelMatrix * vec4(p, 1.0);
          vWorld = world.xyz;
          gl_Position = projectionMatrix * viewMatrix * world;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uDeep;
        uniform vec3 uShallow;
        uniform vec3 uSky;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        uniform vec3 uFogColor;
        varying vec3 vWorld;

        void main() {
          float w1 = sin(vWorld.x * 0.075 + uTime * 0.85);
          float w2 = cos(vWorld.z * 0.105 - uTime * 0.62);
          float w3 = sin((vWorld.x + vWorld.z) * 0.21 + uTime * 1.6);
          vec3 n = normalize(vec3(-w1 * 0.075 * 0.9, 1.0, w2 * 0.105 * 0.8));
          vec3 view = normalize(cameraPosition - vWorld);
          float fres = pow(1.0 - max(dot(n, view), 0.0), 2.5);
          vec3 col = mix(uDeep, uShallow, 0.35 + w3 * 0.08);
          float spec = pow(max(dot(reflect(-normalize(uSunDir), n), view), 0.0), 90.0);
          col += uSunColor * spec * 1.15;
          col += uSunColor * pow(max(dot(n, normalize(uSunDir)), 0.0), 3.0) * 0.05;
          col = mix(col, uSky, fres * 0.62);
          float glint = smoothstep(0.965, 1.0, sin(vWorld.x * 0.55 + uTime * 1.4) * sin(vWorld.z * 0.49 - uTime * 1.1));
          col += glint * 0.09;
          float dist = distance(cameraPosition, vWorld);
          float fog = 1.0 - exp(-pow(dist * 0.00125, 2.0));
          col = mix(col, uFogColor, fog);
          gl_FragColor = vec4(col, 0.86);
        }
      `
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = WATER_LEVEL;
    mesh.renderOrder = 2;
    this.scene.add(mesh);
    this.water = mesh;
  }

  /* ------------------------------------------------------------------ roads */
  buildRoads() {
    const main = [
      [0, 360], [12, 292], [-24, 226], [-5, 160], [34, 96], [20, 18],
      [-30, -58], [-12, -138], [38, -214], [28, -286], [12, -362], [8, -470]
    ];
    const branch = [[-5, 160], [-88, 158], [-154, 142], [-208, 124]];
    this.makeRoad(main, 9.5, true);
    this.makeRoad(branch, 7, false);
  }

  makeRoad(points, width, castShadow) {
    const curve = new THREE.CatmullRomCurve3(points.map(([x, z]) => new THREE.Vector3(x, 0, z)), false, 'catmullrom', 0.35);
    const count = 260;
    const verts = [];
    const uvs = [];
    const indices = [];
    const samplePts = [];
    const up = new THREE.Vector3(0, 1, 0);
    for (let i = 0; i <= count; i++) {
      const t = i / count;
      const p = curve.getPoint(t);
      const tan = curve.getTangent(t);
      const side = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
      const yy = this.heightAt(p.x, p.z);
      const w = width * (0.9 + Math.sin(t * 19.3) * 0.06);
      for (const s of [-1, 1]) {
        const x = p.x + side.x * w * 0.5 * s;
        const z = p.z + side.z * w * 0.5 * s;
        verts.push(x, this.heightAt(x, z) + 0.13, z);
        uvs.push(s < 0 ? 0 : 1, t * 38);
      }
      samplePts.push({ x: p.x, z: p.z });
      if (i < count) {
        const a = i * 2;
        indices.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();

    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#5b4c39';
    ctx.fillRect(0, 0, 128, 256);
    for (let i = 0; i < 1800; i++) {
      const g = 45 + Math.random() * 60;
      ctx.fillStyle = `rgba(${g + 18},${g + 8},${g - 4},${0.15 + Math.random() * 0.3})`;
      ctx.fillRect(Math.random() * 128, Math.random() * 256, 1 + Math.random() * 3, 1 + Math.random() * 3);
    }
    for (const x of [38, 90]) {
      const grad = ctx.createLinearGradient(x - 8, 0, x + 8, 0);
      grad.addColorStop(0, 'rgba(35,26,18,0)');
      grad.addColorStop(0.5, 'rgba(35,26,18,0.45)');
      grad.addColorStop(1, 'rgba(35,26,18,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(x - 8, 0, 16, 256);
    }
    for (let i = 0; i < 60; i++) {
      ctx.fillStyle = `rgba(110,95,64,${Math.random() * 0.2})`;
      ctx.beginPath();
      ctx.arc(Math.random() * 128, Math.random() * 256, 2 + Math.random() * 4, 0, TAU);
      ctx.fill();
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 1, metalness: 0, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    mesh.castShadow = castShadow;
    this.scene.add(mesh);
    this.roadSamples.push(...samplePts);
    this.roadMeshes = this.roadMeshes || [];
    this.roadMeshes.push(mesh);
  }

  isNearRoad(x, z, extra = 0) {
    const threshold = 7 + extra;
    for (const p of this.roadSamples) {
      const dx = x - p.x;
      const dz = z - p.z;
      if (dx * dx + dz * dz < threshold * threshold) return true;
    }
    return false;
  }

  isNearSite(x, z, clearance = 18) {
    for (const site of this.relics) {
      if (dist2D(x, z, site.x, site.z) < clearance) return true;
    }
    return dist2D(x, z, BOSS_POS.x, BOSS_POS.z) < 72;
  }

  /* ----------------------------------------------------------------- forest */
  buildForest() {
    const random = mulberry32(447711);
    const pines = [];
    const broad = [];
    const attempts = 9000;
    for (let i = 0; i < attempts && pines.length < 1280; i++) {
      const angle = random() * TAU;
      const radius = Math.sqrt(random()) * (PLAY_RADIUS - 25);
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      if (this.isNearRoad(x, z, 4)) continue;
      if (this.isNearSite(x, z, 20)) continue;
      if (dist2D(x, z, SPAWN.x, SPAWN.z) < 34) continue;
      const h = this.heightAt(x, z);
      if (h < WATER_LEVEL + 1.6) continue;
      if (this.slopeAt(x, z) > 0.62) continue;
      const patch = fbm(this.noisePatch, x * 0.005, z * 0.005, 2);
      if (patch < -0.25 && random() < 0.55) continue;
      const scale = 0.78 + random() * 0.8;
      const entry = {
        x, z, y: h - 0.05,
        s: scale,
        sy: scale * (0.9 + random() * 0.25),
        rot: random() * TAU,
        tilt: (random() - 0.5) * 0.08,
        color: new THREE.Color().setHSL(0.27 + random() * 0.07, 0.32 + random() * 0.2, 0.17 + random() * 0.13)
      };
      if (random() < 0.26 && broad.length < 320) broad.push(entry);
      else pines.push(entry);
      this.forestPoints.push({ x, z });
      if (pines.length + broad.length >= 1540) break;
    }

    const dummy = new THREE.Object3D();

    // Pine trunk
    const trunkGeo = new THREE.CylinderGeometry(0.26, 0.48, 5.2, 6, 1);
    trunkGeo.translate(0, 2.6, 0);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, metalness: 0 });
    const trunkMesh = new THREE.InstancedMesh(trunkGeo, trunkMat, pines.length);
    // Pine canopy
    const c1 = new THREE.ConeGeometry(2.55, 4.8, 7); c1.translate(0, 5.4, 0);
    const c2 = new THREE.ConeGeometry(2.0, 4.0, 7); c2.translate(0, 7.5, 0);
    const c3 = new THREE.ConeGeometry(1.35, 3.2, 7); c3.translate(0, 9.2, 0);
    const pineGeo = mergeGeometries([c1, c2, c3]);
    const pineMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.88, metalness: 0, flatShading: true });
    addWind(pineMat, this.windUniforms, 0.012, 4.2);
    const pineMesh = new THREE.InstancedMesh(pineGeo, pineMat, pines.length);
    // Broadleaf
    const bTrunkGeo = new THREE.CylinderGeometry(0.3, 0.55, 4.6, 6, 1);
    bTrunkGeo.translate(0, 2.3, 0);
    const bTrunkMesh = new THREE.InstancedMesh(bTrunkGeo, trunkMat, broad.length);
    const b1 = new THREE.IcosahedronGeometry(2.7, 0); b1.translate(0, 6.1, 0);
    const b2 = new THREE.IcosahedronGeometry(2.0, 0); b2.translate(-1.7, 7.2, 0.6);
    const b3 = new THREE.IcosahedronGeometry(1.8, 0); b3.translate(1.6, 7.6, -0.4);
    const broadGeo = mergeGeometries([b1, b2, b3]);
    const broadMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, metalness: 0, flatShading: true });
    addWind(broadMat, this.windUniforms, 0.011, 4.0);
    const broadMesh = new THREE.InstancedMesh(broadGeo, broadMat, broad.length);

    pines.forEach((t, i) => {
      dummy.position.set(t.x, t.y, t.z);
      dummy.rotation.set(t.tilt, t.rot, t.tilt * 0.6);
      dummy.scale.set(t.s, t.sy, t.s);
      dummy.updateMatrix();
      trunkMesh.setMatrixAt(i, dummy.matrix);
      pineMesh.setMatrixAt(i, dummy.matrix);
      pineMesh.setColorAt(i, t.color);
      trunkMesh.setColorAt(i, new THREE.Color(0x4b3826).offsetHSL(0, 0, (Math.random() - 0.5) * 0.08));
    });
    broad.forEach((t, i) => {
      dummy.position.set(t.x, t.y, t.z);
      dummy.rotation.set(t.tilt, t.rot, t.tilt * 0.5);
      dummy.scale.set(t.s * 1.05, t.sy, t.s * 1.05);
      dummy.updateMatrix();
      bTrunkMesh.setMatrixAt(i, dummy.matrix);
      broadMesh.setMatrixAt(i, dummy.matrix);
      broadMesh.setColorAt(i, t.color.clone().offsetHSL(0.01, 0.03, 0.045));
      bTrunkMesh.setColorAt(i, new THREE.Color(0x4c3927));
    });

    for (const m of [trunkMesh, pineMesh, bTrunkMesh, broadMesh]) {
      m.instanceMatrix.needsUpdate = true;
      m.instanceColor.needsUpdate = true;
      m.castShadow = true;
      m.receiveShadow = true;
      this.scene.add(m);
    }
    this.trees = { pines, broad, meshes: [pineMesh, broadMesh] };
  }

  buildGrass() {
    const random = mulberry32(88213);
    const blades = [];
    for (let b = 0; b < 5; b++) {
      const angle = (b / 5) * TAU + random() * 0.6;
      const lean = 0.22 + random() * 0.35;
      const height = 0.55 + random() * 0.55;
      const width = 0.07 + random() * 0.05;
      const ox = (random() - 0.5) * 0.5;
      const oz = (random() - 0.5) * 0.5;
      const dx = Math.cos(angle) * width;
      const dz = Math.sin(angle) * width;
      const tipx = ox + Math.cos(angle) * lean;
      const tipz = oz + Math.sin(angle) * lean;
      blades.push(
        ox - dx, 0, oz - dz,
        ox + dx, 0, oz + dz,
        tipx, height, tipz
      );
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(blades, 3));
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, metalness: 0, side: THREE.DoubleSide });
    addWind(mat, this.windUniforms, 0.18, 0);
    const count = 2900;
    const mesh = new THREE.InstancedMesh(geo, mat, count);
    const dummy = new THREE.Object3D();
    let placed = 0;
    let guard = 0;
    while (placed < count && guard < count * 14) {
      guard++;
      const angle = random() * TAU;
      const radius = Math.sqrt(random()) * (PLAY_RADIUS - 30);
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      if (this.isNearRoad(x, z, 1)) continue;
      if (this.isNearSite(x, z, 12)) continue;
      const h = this.heightAt(x, z);
      if (h < WATER_LEVEL + 0.5 || this.slopeAt(x, z) > 0.7) continue;
      dummy.position.set(x, h + 0.02, z);
      dummy.rotation.y = random() * TAU;
      const s = 0.6 + random() * 1.15;
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.setMatrixAt(placed, dummy.matrix);
      mesh.setColorAt(placed, new THREE.Color().setHSL(0.2 + random() * 0.1, 0.42, 0.27 + random() * 0.18));
      placed++;
    }
    mesh.count = placed;
    mesh.instanceMatrix.needsUpdate = true;
    mesh.instanceColor.needsUpdate = true;
    mesh.receiveShadow = true;
    this.scene.add(mesh);
  }

  buildRocks() {
    const random = mulberry32(5571);
    const geo = new THREE.DodecahedronGeometry(1.2, 0);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.93, metalness: 0.02, flatShading: true });
    const count = 340;
    const mesh = new THREE.InstancedMesh(geo, mat, count);
    const dummy = new THREE.Object3D();
    let placed = 0;
    let guard = 0;
    while (placed < count && guard < count * 20) {
      guard++;
      const angle = random() * TAU;
      const radius = Math.sqrt(random()) * (PLAY_RADIUS - 10);
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      if (this.isNearRoad(x, z, 1.5)) continue;
      if (dist2D(x, z, SPAWN.x, SPAWN.z) < 16) continue;
      if (this.isNearSite(x, z, 15)) continue;
      const h = this.heightAt(x, z);
      if (h < WATER_LEVEL) continue;
      const s = 0.35 + Math.pow(random(), 2.6) * 3.2;
      dummy.position.set(x, h + s * 0.18, z);
      dummy.rotation.set(random() * 0.8, random() * TAU, random() * 0.8);
      dummy.scale.set(s * (0.7 + random() * 0.6), s * (0.55 + random() * 0.6), s * (0.7 + random() * 0.6));
      dummy.updateMatrix();
      mesh.setMatrixAt(placed, dummy.matrix);
      mesh.setColorAt(placed, new THREE.Color().setHSL(0.09, 0.03 + random() * 0.05, 0.24 + random() * 0.17));
      if (s > 1.9) this.addCollider(x, z, s * 0.8, h, 'rock');
      placed++;
    }
    mesh.count = placed;
    mesh.instanceMatrix.needsUpdate = true;
    mesh.instanceColor.needsUpdate = true;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.scene.add(mesh);
  }

  /* --------------------------------------------------------------- structures */
  makeMaterials() {
    if (this.mats) return this.mats;
    this.mats = {
      metal: new THREE.MeshStandardMaterial({ color: 0x2b3940, metalness: 0.82, roughness: 0.42 }),
      dark: new THREE.MeshStandardMaterial({ color: 0x121d23, metalness: 0.7, roughness: 0.55 }),
      light: new THREE.MeshStandardMaterial({ color: 0x7d8a8c, metalness: 0.85, roughness: 0.34 }),
      gold: new THREE.MeshStandardMaterial({ color: 0xb88937, metalness: 0.9, roughness: 0.32 }),
      glass: new THREE.MeshStandardMaterial({ color: 0x1b4752, metalness: 0.4, roughness: 0.12, emissive: 0x0d4850, emissiveIntensity: 0.45 }),
      burnt: new THREE.MeshStandardMaterial({ color: 0x1b1817, metalness: 0.55, roughness: 0.8 })
    };
    return this.mats;
  }

  buildSpawnSite() {
    const mats = this.makeMaterials();
    const group = new THREE.Group();
    const x = SPAWN.x + 14;
    const z = SPAWN.z + 8;
    const y = this.heightAt(x, z);

    const pod = new THREE.Group();
    const hull = new THREE.Mesh(new THREE.CylinderGeometry(2.7, 3.1, 8.5, 8, 1, false), mats.metal);
    hull.rotation.z = Math.PI / 2.2;
    hull.rotation.y = 0.4;
    hull.position.y = 2.7;
    hull.castShadow = hull.receiveShadow = true;
    pod.add(hull);
    const door = new THREE.Mesh(new THREE.BoxGeometry(0.3, 3.2, 3.4), mats.dark);
    door.position.set(2.6, 1.9, -0.7);
    door.rotation.z = -0.6;
    pod.add(door);
    const trim = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.16, 5, 12, Math.PI), mats.gold);
    trim.rotation.set(Math.PI / 2, 0, -0.2);
    trim.position.y = 2.5;
    pod.add(trim);
    const window = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.55, 0.2), mats.glass);
    window.position.set(0.3, 4.4, 2.3);
    pod.add(window);
    pod.position.set(x, y, z);
    group.add(pod);
    this.addCollider(x, z, 3.4, y, 'pod');

    // Beacon
    const bx = SPAWN.x - 12;
    const bz = SPAWN.z + 4;
    const by = this.heightAt(bx, bz);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.7, 0.65, 8), mats.dark);
    base.position.set(bx, by + 0.3, bz);
    base.receiveShadow = true;
    group.add(base);
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.35, 9, 6), mats.light);
    mast.position.set(bx, by + 5, bz);
    mast.castShadow = true;
    group.add(mast);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0x0a2630, emissive: 0x62f3ff, emissiveIntensity: 2.2, metalness: 0.6, roughness: 0.25 });
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.15 - i * 0.22, 0.055, 5, 20), ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(bx, by + 8.4 + i * 0.5, bz);
      group.add(ring);
    }
    const beamMat = new THREE.MeshBasicMaterial({ color: 0x62f3ff, transparent: true, opacity: 0.09, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 2.6, 95, 12, 1, true), beamMat);
    beam.position.set(bx, by + 48, bz);
    group.add(beam);
    const glow = makeSprite(this.glowTexture, 0x62f3ff, 22);
    glow.position.set(bx, by + 8.8, bz);
    group.add(glow);
    this.animated.push({ type: 'bob', obj: glow, baseY: by + 8.8, amp: 0.7, speed: 1.1 });
    this.scene.add(group);
    this.spawnBeacon = { x: bx, z: bz };
  }

  buildShrines() {
    const mats = this.makeMaterials();
    this.shrineGroup = new THREE.Group();
    const random = mulberry32(90210);

    for (const site of this.relics) {
      const group = new THREE.Group();
      const y = site.y;
      const emissiveMat = new THREE.MeshStandardMaterial({
        color: 0x0a161c, emissive: site.color, emissiveIntensity: 1.75,
        metalness: 0.55, roughness: 0.3
      });
      const dimEmissive = new THREE.MeshStandardMaterial({
        color: 0x0b171d, emissive: site.color, emissiveIntensity: 0.5,
        metalness: 0.6, roughness: 0.4
      });

      const dais = new THREE.Mesh(new THREE.CylinderGeometry(9.5, 10.4, 0.55, 8), mats.dark);
      dais.position.set(site.x, y + 0.15, site.z);
      dais.receiveShadow = true;
      group.add(dais);

      const ring = new THREE.Mesh(new THREE.RingGeometry(3.1, 3.45, 32), emissiveMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(site.x, y + 0.46, site.z);
      group.add(ring);

      // Pedestal
      const ped = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.9, 1.5, 6), mats.metal);
      ped.position.set(site.x, y + 1.05, site.z);
      ped.castShadow = ped.receiveShadow = true;
      group.add(ped);
      const pedTop = new THREE.Mesh(new THREE.CylinderGeometry(1.65, 1.45, 0.25, 6), mats.gold);
      pedTop.position.set(site.x, y + 1.9, site.z);
      pedTop.castShadow = true;
      group.add(pedTop);
      this.addCollider(site.x, site.z, 1.8, y + 1, 'pedestal');

      // Orangish rune bands on pedestal
      for (let i = 0; i < 3; i++) {
        const band = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.06, 0.12), dimEmissive);
        band.position.set(site.x, y + 0.65 + i * 0.35, site.z + 1.28);
        band.rotation.y = (i * Math.PI) / 3;
        group.add(band);
      }

      // Pillars around the shrine
      const pillarCount = 4;
      for (let i = 0; i < pillarCount; i++) {
        const a = (i / pillarCount) * TAU + 0.4;
        const r = 7.6;
        const px = site.x + Math.cos(a) * r;
        const pz = site.z + Math.sin(a) * r;
        const broken = i === 1 || i === 3;
        const h = broken ? 3.2 + random() * 1.8 : 6.6;
        const pillar = new THREE.Mesh(new THREE.BoxGeometry(1.1, h, 1.1), mats.metal);
        pillar.position.set(px, y + h * 0.5, pz);
        pillar.rotation.y = -a;
        pillar.rotation.z = broken ? (random() - 0.5) * 0.22 : (random() - 0.5) * 0.04;
        pillar.castShadow = pillar.receiveShadow = true;
        group.add(pillar);
        const cap = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.3, 1.5), mats.gold);
        cap.position.set(px, y + h + 0.1, pz);
        cap.rotation.y = -a;
        cap.castShadow = true;
        group.add(cap);
        const strip = new THREE.Mesh(new THREE.BoxGeometry(0.17, h * 0.68, 0.04), emissiveMat);
        strip.position.set(px + Math.cos(-a + Math.PI / 2) * 0.57, y + h * 0.52, pz + Math.sin(-a + Math.PI / 2) * 0.57);
        strip.rotation.y = -a;
        group.add(strip);
        this.addCollider(px, pz, 0.85, y, 'pillar');
      }

      // Broken walls / wreckage
      for (let i = 0; i < 3; i++) {
        const a = random() * TAU;
        const r = 14 + random() * 7;
        const wx = site.x + Math.cos(a) * r;
        const wz = site.z + Math.sin(a) * r;
        const wy = this.heightAt(wx, wz);
        const wall = new THREE.Mesh(new THREE.BoxGeometry(4 + random() * 5, 1.6 + random() * 2.6, 0.8), mats.dark);
        wall.position.set(wx, wy + 0.8, wz);
        wall.rotation.set((random() - 0.5) * 0.35, random() * TAU, (random() - 0.5) * 0.3);
        wall.castShadow = wall.receiveShadow = true;
        group.add(wall);
        this.addCollider(wx, wz, 1.5, wy, 'debris');
      }

      // Floating clue marker visible from afar
      const beamMat = new THREE.MeshBasicMaterial({
        color: site.color, transparent: true, opacity: 0.1,
        blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false
      });
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 1.6, 55, 8, 1, true), beamMat);
      beam.position.set(site.x, y + 28, site.z);
      group.add(beam);
      const glow = makeSprite(this.glowTexture, site.color, 5);
      glow.position.set(site.x, y + 4.2, site.z);
      group.add(glow);
      this.animated.push({ type: 'bob', obj: glow, baseY: y + 4.2, amp: 0.35, speed: 1.4 });
      this.animated.push({ type: 'spin', obj: ring, speed: 0.12 });
      site.marker = glow;
      site.beam = beam;
      site.emissiveMat = emissiveMat;
      this.shrineGroup.add(group);
      this.relicSites.push({ x: site.x, z: site.z, y });
    }
    this.scene.add(this.shrineGroup);
  }

  buildBossArena() {
    const mats = this.makeMaterials();
    const y = this.bossY;
    const group = new THREE.Group();
    const bx = BOSS_POS.x;
    const bz = BOSS_POS.z;

    // Scorched arena floor
    const scorch = new THREE.Mesh(new THREE.CircleGeometry(44, 40), new THREE.MeshStandardMaterial({
      color: 0x241f1b, roughness: 0.95, metalness: 0.08, transparent: true, opacity: 0.85
    }));
    scorch.rotation.x = -Math.PI / 2;
    scorch.position.set(bx, y + 0.24, bz);
    scorch.receiveShadow = true;
    group.add(scorch);

    const arenaRing = new THREE.Mesh(new THREE.RingGeometry(39, 41, 48), new THREE.MeshStandardMaterial({
      color: 0x0c1115, emissive: 0xff3b22, emissiveIntensity: 1.2, metalness: 0.7, roughness: 0.35, side: THREE.DoubleSide
    }));
    arenaRing.rotation.x = -Math.PI / 2;
    arenaRing.position.set(bx, y + 0.3, bz);
    group.add(arenaRing);

    // Crashed Decepticon cruiser, half sunk into the ridge.
    const ship = new THREE.Group();
    const hull = new THREE.Mesh(new THREE.CylinderGeometry(9.5, 13.5, 78, 7, 1), new THREE.MeshStandardMaterial({
      color: 0x23222a, metalness: 0.82, roughness: 0.46
    }));
    hull.rotation.z = Math.PI / 2;
    hull.rotation.y = 0.5;
    hull.position.set(bx - 34, y + 8, bz - 48);
    hull.castShadow = hull.receiveShadow = true;
    ship.add(hull);

    const spine = new THREE.Mesh(new THREE.BoxGeometry(62, 2.3, 4.4), mats.dark);
    spine.position.set(bx - 34, y + 17, bz - 48);
    spine.rotation.y = 0.5;
    spine.castShadow = true;
    ship.add(spine);

    const finMat = new THREE.MeshStandardMaterial({ color: 0x34202a, metalness: 0.75, roughness: 0.5 });
    for (const [fx, fz, rot, s] of [[-16, -30, 0.5, 1], [-46, -52, 0.5, 0.8], [6, -22, 0.5, 1.1]]) {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(20 * s, 0.9, 11 * s), finMat);
      fin.position.set(bx + fx, y + 16, bz + fz);
      fin.rotation.set(0.1, rot, -0.4);
      fin.castShadow = true;
      ship.add(fin);
    }

    const redMat = new THREE.MeshStandardMaterial({ color: 0x1a0c0d, emissive: 0xff2e1c, emissiveIntensity: 1.8, metalness: 0.6, roughness: 0.25 });
    for (let i = 0; i < 5; i++) {
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.22, 13), redMat);
      stripe.position.set(bx - 66 + i * 14, y + 15.5 - i * 0.2, bz - 24 + i * 1.5);
      stripe.rotation.y = 0.5;
      ship.add(stripe);
    }

    // Broken wing pieces on the ground.
    for (let i = 0; i < 7; i++) {
      const a = 2.1 + (i / 7) * 1.4;
      const r = 22 + i * 4.2;
      const px = bx + Math.cos(a) * r;
      const pz = bz + Math.sin(a) * r;
      const py = this.heightAt(px, pz);
      const debris = new THREE.Mesh(new THREE.BoxGeometry(4 + Math.random() * 9, 0.7, 2 + Math.random() * 3), mats.dark);
      debris.position.set(px, py + 0.5, pz);
      debris.rotation.set((Math.random() - 0.5) * 0.6, Math.random() * TAU, (Math.random() - 0.5) * 0.4);
      debris.castShadow = debris.receiveShadow = true;
      group.add(debris);
      if (i % 2 === 0) this.addCollider(px, pz, 2.6, py, 'wreck');
    }
    group.add(ship);
    this.addCollider(bx - 42, bz - 52, 15, y, 'hull');
    this.addCollider(bx - 22, bz - 36, 14, y, 'hull');
    this.addCollider(bx - 62, bz - 66, 15, y, 'hull');

    // Monoliths
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * TAU + 0.78;
      const r = 34;
      const px = bx + Math.cos(a) * r;
      const pz = bz + Math.sin(a) * r;
      const py = this.heightAt(px, pz);
      const mono = new THREE.Mesh(new THREE.BoxGeometry(2.8, 11 + i * 1.5, 2.4), mats.metal);
      mono.position.set(px, py + 5.5, pz);
      mono.rotation.set(0.05, -a, 0.07);
      mono.castShadow = mono.receiveShadow = true;
      group.add(mono);
      const em = new THREE.Mesh(new THREE.BoxGeometry(0.3, 7, 0.15), redMat);
      em.position.set(px + Math.cos(a + Math.PI / 2) * 1.42, py + 5.8, pz + Math.sin(a + Math.PI / 2) * 1.42);
      em.rotation.y = -a;
      group.add(em);
      this.addCollider(px, pz, 2, py, 'monolith');
    }

    // Energon vent at the arena edge.
    const vent = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 5, 1.2, 7), mats.burnt);
    vent.position.set(bx + 20, y + 0.2, bz + 10);
    group.add(vent);
    const ventGlow = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 3.1, 0.5, 7), new THREE.MeshBasicMaterial({
      color: 0xff4a2c, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, toneMapped: false
    }));
    ventGlow.position.set(bx + 20, y + 1, bz + 10);
    group.add(ventGlow);
    const ventLight = makeSprite(this.glowTexture, 0xff4a2c, 20);
    ventLight.position.set(bx + 20, y + 2.5, bz + 10);
    group.add(ventLight);
    this.animated.push({ type: 'pulse', obj: ventGlow, base: 1, amp: 0.25, speed: 2.2 });
    this.animated.push({ type: 'pulse', obj: ventLight.scale, base: 20, amp: 4, speed: 2.2, isScale: true });

    this.scene.add(group);
    this.bossArena = { group, x: bx, z: bz, y };
  }

  buildCrystals() {
    const random = mulberry32(77331);
    const crystalGeo = new THREE.OctahedronGeometry(0.5, 0);
    crystalGeo.scale(0.55, 1.9, 0.55);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x1a4b4c, emissive: 0x53e7ff, emissiveIntensity: 1.35,
      metalness: 0.35, roughness: 0.2, transparent: true, opacity: 0.92
    });
    const count = 150;
    const mesh = new THREE.InstancedMesh(crystalGeo, mat, count);
    const dummy = new THREE.Object3D();
    const sites = [...this.relics.map((r) => ({ x: r.x, z: r.z, color: r.color })), { x: BOSS_POS.x + 20, z: BOSS_POS.z + 10, color: 0xff4a2c }];
    let placed = 0;
    for (let i = 0; i < count; i++) {
      let x, z;
      if (i < 80) {
        const site = sites[i % sites.length];
        const a = random() * TAU;
        const r = 11 + random() * 20;
        x = site.x + Math.cos(a) * r;
        z = site.z + Math.sin(a) * r;
      } else {
        const a = random() * TAU;
        const r = Math.sqrt(random()) * (PLAY_RADIUS - 40);
        x = Math.cos(a) * r;
        z = Math.sin(a) * r;
      }
      const h = this.heightAt(x, z);
      if (h < WATER_LEVEL) continue;
      if (this.isNearRoad(x, z, 1)) continue;
      dummy.position.set(x, h + 0.1, z);
      dummy.rotation.set((random() - 0.5) * 0.4, random() * TAU, (random() - 0.5) * 0.4);
      const s = 0.45 + Math.pow(random(), 2) * 2.1;
      dummy.scale.set(s, s * (0.8 + random() * 0.8), s);
      dummy.updateMatrix();
      mesh.setMatrixAt(placed, dummy.matrix);
      placed++;
    }
    mesh.count = placed;
    mesh.instanceMatrix.needsUpdate = true;
    mesh.castShadow = true;
    this.scene.add(mesh);
  }

  /* ------------------------------------------------------------------- map */
  buildMapCanvas() {
    const size = 280;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    const heights = new Float32Array(size * size);
    for (let py = 0; py < size; py++) {
      for (let px = 0; px < size; px++) {
        const wx = (px / size - 0.5) * WORLD_SIZE;
        const wz = (py / size - 0.5) * WORLD_SIZE;
        heights[py * size + px] = this.heightAt(wx, wz);
      }
    }
    const img = ctx.createImageData(size, size);
    const light = new THREE.Vector3(-0.6, 0.7, -0.4).normalize();
    for (let py = 0; py < size; py++) {
      for (let px = 0; px < size; px++) {
        const idx = py * size + px;
        const h = heights[idx];
        let r, g, b;
        if (h < WATER_LEVEL) {
          const depth = smoothstep(WATER_LEVEL - 16, WATER_LEVEL, h);
          r = lerp(17, 34, depth);
          g = lerp(49, 86, depth);
          b = lerp(63, 104, depth);
        } else {
          const hx = heights[py * size + Math.min(size - 1, px + 1)] - h;
          const hz = heights[Math.min(size - 1, py + 1) * size + px] - h;
          const nx = -hx * 0.06;
          const nz = -hz * 0.06;
          const shade = clamp(0.66 + (nx * light.x + nz * light.z) * 2.1, 0.5, 1.25);
          const t = smoothstep(0, 1, clamp((h + 10) / 130, 0, 1));
          r = lerp(42, 68, t);
          g = lerp(84, 82, t);
          b = lerp(52, 69, t);
          if (h > 58) { r += 18; g += 15; b += 15; }
          if (Math.abs((h % 9) - 4.5) < 0.42) { r += 14; g += 20; b += 10; }
          r *= shade; g *= shade; b *= shade;
        }
        const dist = Math.sqrt(((px / size - 0.5) ** 2 + (py / size - 0.5) ** 2));
        const edge = 1 - smoothstep(0.32, 0.5, dist);
        const o = idx * 4;
        img.data[o] = r * edge;
        img.data[o + 1] = g * edge;
        img.data[o + 2] = b * edge;
        img.data[o + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);

    // Road overlay
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = 'rgba(170,146,102,0.6)';
    ctx.lineWidth = 2.1;
    ctx.beginPath();
    for (let i = 0; i < this.roadSamples.length; i++) {
      const p = this.roadSamples[i];
      const px = (p.x / WORLD_SIZE + 0.5) * size;
      const py = (p.z / WORLD_SIZE + 0.5) * size;
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Forest dots
    ctx.fillStyle = 'rgba(22,48,30,0.55)';
    for (const t of this.forestPoints) {
      const px = (t.x / WORLD_SIZE + 0.5) * size;
      const py = (t.z / WORLD_SIZE + 0.5) * size;
      ctx.fillRect(px, py, 1, 1);
    }

    // Shrine glows
    for (const s of this.relics) {
      const px = (s.x / WORLD_SIZE + 0.5) * size;
      const py = (s.z / WORLD_SIZE + 0.5) * size;
      const c = new THREE.Color(s.color);
      const grad = ctx.createRadialGradient(px, py, 0, px, py, 12);
      grad.addColorStop(0, `rgba(${c.r * 255 | 0},${c.g * 255 | 0},${c.b * 255 | 0},0.5)`);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(px - 12, py - 12, 24, 24);
    }

    this.mapCanvas = canvas;
    this.mapSize = size;
  }

  worldToMap(x, z, size = this.mapSize) {
    return [(x / WORLD_SIZE + 0.5) * size, (z / WORLD_SIZE + 0.5) * size];
  }

  /* ------------------------------------------------------------------ tick */
  update(dt, elapsed, camera) {
    this.elapsed = elapsed;
    this.windUniforms.time.value = elapsed;
    if (this.waterUniforms) this.waterUniforms.uTime.value = elapsed;
    if (this.skyUniforms) {
      this.skyUniforms.uTime.value = elapsed;
      this.skyGroup.position.copy(camera.position);
    }
    for (const a of this.animated) {
      if (a.type === 'bob') {
        a.obj.position.y = a.baseY + Math.sin(elapsed * a.speed + a.baseY) * a.amp;
      } else if (a.type === 'spin') {
        a.obj.rotation.z = elapsed * a.speed;
      } else if (a.type === 'pulse') {
        if (a.isScale) {
          const s = a.base + Math.sin(elapsed * a.speed) * a.amp;
          a.obj.set(s, s, s);
        } else {
          a.obj.scale.setScalar(a.base + Math.sin(elapsed * a.speed) * a.amp);
        }
      }
    }
    if (this.spawnBeacon) {
      // subtle beacon glow stutter
    }
    const pulse = 0.8 + Math.sin(elapsed * 2.1) * 0.2;
    for (const site of this.relics) {
      if (site.marker && !site.collected) {
        site.marker.material.opacity = 0.55 + pulse * 0.25;
      }
    }
  }
}
