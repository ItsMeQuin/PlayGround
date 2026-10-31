import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import {
  clamp, lerp, damp, dampAngle, TAU, makeGlowTexture, makeSprite
} from './utils.js';
import { SPAWN, WATER_LEVEL } from './world.js';

export const WEAPONS = [
  {
    id: 'pistol', name: 'ENERGON PISTOL', desc: 'SEMI-AUTO // INFINITE CELL',
    damage: 12, speed: 105, cooldown: 0.22, heat: 7, spread: 0.004, color: 0x62f3ff,
    projectile: 'bolt', shake: 0.9
  },
  {
    id: 'repeater', name: 'ION REPEATER', desc: 'TRI-BARREL // RAPID FIRE',
    damage: 8.5, speed: 135, cooldown: 0.072, heat: 3.1, spread: 0.014, color: 0x7dffd7,
    projectile: 'bolt', shake: 0.45
  },
  {
    id: 'mortar', name: 'PLASMA MORTAR', desc: 'ARCING SHELL // SPLASH DAMAGE',
    damage: 34, speed: 62, cooldown: 1.15, heat: 26, spread: 0.002, color: 0xffa04f,
    projectile: 'mortar', splash: 52, gravity: 16, shake: 2.2
  }
];

function metal(color, metalness = 0.85, roughness = 0.36, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, metalness, roughness, ...extra });
}

export class Player {
  constructor(scene, world, effects, audio) {
    this.scene = scene;
    this.world = world;
    this.effects = effects;
    this.audio = audio;
    this.glowTexture = makeGlowTexture(128);
    this.root = new THREE.Group();
    this.root.position.copy(SPAWN);
    this.position = this.root.position;
    this.velocity = new THREE.Vector3();
    this.yaw = Math.PI;
    this.mode = 'robot';
    this.health = 100;
    this.maxHealth = 100;
    this.energon = 100;
    this.maxEnergon = 100;
    this.score = 0;
    this.kills = 0;
    this.relics = 0;
    this.dead = false;
    this.grounded = true;
    this.speed = 0;
    this.moving = false;
    this.boosting = false;
    this.shieldActive = false;
    this.invuln = 0;
    this.timeSinceDamage = 99;
    this.empCooldown = 0;
    this.heat = 0;
    this.overheated = 0;
    this.fireCooldown = 0;
    this.weaponIndex = 0;
    this.unlocked = new Set(['pistol']);
    this.abilities = { shield: false, jets: false, emp: false, overdrive: false };
    this.inWater = false;
    this.walkPhase = 0;
    this.dustTimer = 0;
    this.trailTimer = 0;
    this.airJumpUsed = false;
    this.aiming = false;
    this.transformT = 0;
    this.transforming = false;
    this.transformDir = 1;
    this.transformFlashDone = false;
    this.landingSquash = 0;
    this.meleeTimer = 0;
    this.cameraShake = 0;
    this.deathTimer = 0;
    this.firstPerson = false;
    this.viewRecoil = 0;
    this.fpCamera = null;

    this.buildRobot();
    this.buildVehicle();
    this.buildShield();
    this.buildViewModel();
    this.root.rotation.y = this.yaw;
    scene.add(this.root);
    this.rideHeight = 0;
    this.colliderRadius = 1.35;
    this.aimPoint = new THREE.Vector3();
    this.combat = null;
    this.onEMP = null;
    this.onDeath = null;
    this.onDamage = null;
  }

  /* ----------------------------------------------------------------- models */
  buildRobot() {
    const navy = metal(0x172b4d, 0.9, 0.34);
    const red = metal(0xb3362b, 0.82, 0.38);
    const darkRed = metal(0x6e1d18, 0.8, 0.42);
    const silver = metal(0xc2ccd2, 0.95, 0.24);
    const gold = metal(0xd8a33f, 0.92, 0.3);
    const dark = metal(0x0d151c, 0.75, 0.5);
    const glass = new THREE.MeshStandardMaterial({
      color: 0x1a5f70, emissive: 0x3feaff, emissiveIntensity: 0.9, metalness: 0.6, roughness: 0.15
    });
    const glow = new THREE.MeshStandardMaterial({
      color: 0x0a3038, emissive: 0x62f3ff, emissiveIntensity: 2.4, metalness: 0.4, roughness: 0.2
    });
    this.robotMats = { navy, red, darkRed, silver, gold, dark, glass, glow };

    const robot = new THREE.Group();
    const rig = new THREE.Group();
    robot.add(rig);
    this.robot = robot;
    this.rig = rig;

    // Pelvis
    const pelvis = new THREE.Mesh(new RoundedBoxGeometry(1.3, 0.62, 0.92, 2, 0.08), navy);
    pelvis.position.y = 2.34;
    rig.add(pelvis);
    const belt = new THREE.Mesh(new THREE.BoxGeometry(1.42, 0.2, 0.98), gold);
    belt.position.y = 2.58;
    rig.add(belt);
    for (const s of [-1, 1]) {
      const hipPlate = new THREE.Mesh(new RoundedBoxGeometry(0.34, 0.66, 0.74, 2, 0.06), red);
      hipPlate.position.set(s * 0.76, 2.32, 0.02);
      hipPlate.rotation.z = s * 0.15;
      rig.add(hipPlate);
    }

    // Torso group (bobs, leans)
    const body = new THREE.Group();
    body.position.y = 2.6;
    rig.add(body);
    this.body = body;

    const chest = new THREE.Mesh(new RoundedBoxGeometry(1.95, 1.5, 1.12, 3, 0.12), navy);
    chest.position.y = 0.82;
    body.add(chest);

    const chestPlateL = new THREE.Mesh(new RoundedBoxGeometry(0.8, 1.05, 0.22, 2, 0.06), red);
    chestPlateL.position.set(-0.52, 0.86, 0.55);
    chestPlateL.rotation.z = 0.06;
    body.add(chestPlateL);
    const chestPlateR = chestPlateL.clone();
    chestPlateR.position.x = 0.52;
    chestPlateR.rotation.z = -0.06;
    body.add(chestPlateR);

    const cockpit = new THREE.Mesh(new RoundedBoxGeometry(0.62, 0.7, 0.18, 2, 0.05), glass);
    cockpit.position.set(0, 0.94, 0.61);
    cockpit.rotation.x = -0.12;
    body.add(cockpit);

    const coreRing = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.055, 6, 18), gold);
    coreRing.position.set(0, 0.46, 0.63);
    body.add(coreRing);
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 10), glow);
    core.position.set(0, 0.46, 0.66);
    body.add(core);
    this.core = core;

    // Chest emblem — a stylized angular crest
    const crest = new THREE.Group();
    const crestShape = new THREE.Shape();
    crestShape.moveTo(0, 0.24); crestShape.lineTo(0.19, 0.04); crestShape.lineTo(0.11, -0.19);
    crestShape.lineTo(0, -0.06); crestShape.lineTo(-0.11, -0.19); crestShape.lineTo(-0.19, 0.04);
    crestShape.closePath();
    const crestGeo = new THREE.ExtrudeGeometry(crestShape, { depth: 0.05, bevelEnabled: true, bevelSize: 0.012, bevelThickness: 0.01, bevelSegments: 1 });
    const crestMesh = new THREE.Mesh(crestGeo, gold);
    crestMesh.position.set(0, 0.08, 0);
    crest.add(crestMesh);
    crest.position.set(0, 1.32, 0.61);
    body.add(crest);

    // Ab section
    const abs = new THREE.Mesh(new THREE.BoxGeometry(1.16, 0.4, 0.7), dark);
    abs.position.y = 0.13;
    body.add(abs);
    for (let i = 0; i < 2; i++) {
      const vent = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.055, 0.06), gold);
      vent.position.set(0, 0.04 + i * 0.16, 0.37);
      body.add(vent);
    }

    // Neck + head
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.24, 8), silver);
    neck.position.y = 1.65;
    body.add(neck);
    const head = new THREE.Group();
    head.position.y = 1.98;
    body.add(head);
    this.head = head;
    const skull = new THREE.Mesh(new RoundedBoxGeometry(0.7, 0.6, 0.66, 2, 0.08), navy);
    head.add(skull);
    const face = new THREE.Mesh(new RoundedBoxGeometry(0.52, 0.4, 0.14, 2, 0.04), silver);
    face.position.set(0, -0.04, 0.32);
    head.add(face);
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.09, 0.06), glow);
    visor.position.set(0, 0.08, 0.39);
    head.add(visor);
    for (const s of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.05), glass);
      eye.position.set(s * 0.13, -0.03, 0.4);
      head.add(eye);
      const ear = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.36, 0.3), red);
      ear.position.set(s * 0.4, 0.04, 0.0);
      ear.rotation.z = s * 0.1;
      head.add(ear);
      const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.03, 0.32, 5), silver);
      antenna.position.set(s * 0.28, 0.4, -0.04);
      antenna.rotation.z = s * -0.22;
      head.add(antenna);
    }
    const headCrest = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.5), gold);
    headCrest.position.set(0, 0.35, 0.03);
    head.add(headCrest);

    // Back thrusters
    for (const s of [-1, 1]) {
      const pod = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.26, 0.8, 8), dark);
      pod.position.set(s * 0.5, 0.9, -0.68);
      pod.rotation.x = 0.25;
      body.add(pod);
      const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.22, 0.15, 8), glow);
      nozzle.position.set(s * 0.5, 0.49, -0.77);
      nozzle.rotation.x = 0.25;
      body.add(nozzle);
    }

    // Arms
    this.arms = {};
    for (const s of [-1, 1]) {
      const shoulder = new THREE.Group();
      shoulder.position.set(s * 1.18, 1.34, 0);
      body.add(shoulder);
      const pauldron = new THREE.Mesh(new RoundedBoxGeometry(0.76, 0.62, 0.8, 2, 0.08), red);
      pauldron.position.set(s * 0.08, 0.06, 0);
      shoulder.add(pauldron);
      const trim = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.06, 0.68), gold);
      trim.position.set(s * 0.08, 0.3, 0);
      shoulder.add(trim);

      const upper = new THREE.Mesh(new RoundedBoxGeometry(0.46, 0.92, 0.5, 2, 0.06), navy);
      upper.position.y = -0.58;
      shoulder.add(upper);
      const elbow = new THREE.Group();
      elbow.position.y = -1.05;
      shoulder.add(elbow);
      const elbowMesh = new THREE.Mesh(new THREE.SphereGeometry(0.25, 10, 8), silver);
      elbow.add(elbowMesh);
      const fore = new THREE.Mesh(new RoundedBoxGeometry(0.54, 0.9, 0.58, 2, 0.07), red);
      fore.position.y = -0.52;
      elbow.add(fore);
      const wrist = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.24, 0.14, 8), gold);
      wrist.position.y = -0.98;
      elbow.add(wrist);
      const hand = new THREE.Mesh(new RoundedBoxGeometry(0.36, 0.38, 0.42, 2, 0.05), silver);
      hand.position.y = -1.2;
      elbow.add(hand);

      if (s > 0) {
        // Right arm ion cannon
        const cannon = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.23, 1.05, 8), dark);
        cannon.rotation.x = Math.PI / 2;
        cannon.position.set(0, -0.42, 0.55);
        elbow.add(cannon);
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.15, 0.6, 8), glow);
        barrel.rotation.x = Math.PI / 2;
        barrel.position.set(0, -0.42, 1.25);
        elbow.add(barrel);
        const muzzle = new THREE.Object3D();
        muzzle.position.set(0, -0.42, 1.58);
        elbow.add(muzzle);
        this.muzzleRobot = muzzle;
        this.armR = shoulder;
        this.elbowR = elbow;
        this.forearmR = fore;
      } else {
        // Left shield emitter
        const emitter = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.06, 6, 16), glow);
        emitter.position.set(0, -0.48, 0.3);
        elbow.add(emitter);
        this.armL = shoulder;
        this.elbowL = elbow;
        this.emitter = emitter;
      }
      this.arms[s > 0 ? 'right' : 'left'] = { shoulder, elbow, fore };
    }

    // Legs
    this.legs = {};
    for (const s of [-1, 1]) {
      const hip = new THREE.Group();
      hip.position.set(s * 0.52, 2.28, 0);
      rig.add(hip);
      const thigh = new THREE.Mesh(new RoundedBoxGeometry(0.62, 1.02, 0.7, 2, 0.07), navy);
      thigh.position.y = -0.58;
      hip.add(thigh);
      const thighPlate = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.66, 0.14), red);
      thighPlate.position.set(0, -0.5, 0.36);
      hip.add(thighPlate);
      const knee = new THREE.Group();
      knee.position.y = -1.12;
      hip.add(knee);
      const kneeMesh = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 8), silver);
      knee.add(kneeMesh);
      const shin = new THREE.Mesh(new RoundedBoxGeometry(0.58, 1.02, 0.64, 2, 0.06), navy);
      shin.position.y = -0.55;
      knee.add(shin);
      const shinPlate = new THREE.Mesh(new RoundedBoxGeometry(0.46, 0.7, 0.16, 2, 0.04), red);
      shinPlate.position.set(0, -0.34, 0.36);
      knee.add(shinPlate);
      const foot = new THREE.Mesh(new RoundedBoxGeometry(0.64, 0.3, 1.05, 2, 0.06), silver);
      foot.position.set(0, -1.14, 0.2);
      knee.add(foot);
      const toe = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.12, 0.24), gold);
      toe.position.set(0, -1.22, 0.72);
      knee.add(toe);
      this.legs[s > 0 ? 'right' : 'left'] = { hip, knee, foot };
    }

    // Jet glow sprites
    this.jetSprites = [];
    for (const s of [-1, 1]) {
      const sp = makeSprite(this.glowTexture, 0x64e8ff, 2.2);
      sp.position.set(s * 0.5, 2.9, -0.9);
      sp.material.opacity = 0;
      robot.add(sp);
      this.jetSprites.push(sp);
    }

    robot.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
    this.robotBaseY = 0;
    this.root.add(robot);
  }

  buildVehicle() {
    const car = new THREE.Group();
    car.visible = false;
    const navy = this.robotMats.navy;
    const red = this.robotMats.red;
    const silver = this.robotMats.silver;
    const gold = this.robotMats.gold;
    const dark = this.robotMats.dark;
    const glass = this.robotMats.glass;
    const glow = this.robotMats.glow;

    const paint = metal(0xb3362b, 0.92, 0.28);
    const paintDark = metal(0x7c211b, 0.9, 0.34);
    this.carMats = { paint, paintDark };

    const chassis = new THREE.Mesh(new RoundedBoxGeometry(2.16, 0.52, 4.5, 3, 0.12), paint);
    chassis.position.y = 0.78;
    car.add(chassis);
    const lower = new THREE.Mesh(new RoundedBoxGeometry(1.98, 0.28, 4.2, 2, 0.06), dark);
    lower.position.y = 0.48;
    car.add(lower);
    const nose = new THREE.Mesh(new RoundedBoxGeometry(2.0, 0.3, 1.25, 2, 0.08), paintDark);
    nose.position.set(0, 1.0, 1.66);
    nose.rotation.x = 0.06;
    car.add(nose);
    const hood = new THREE.Mesh(new RoundedBoxGeometry(1.7, 0.12, 1.45, 2, 0.05), navy);
    hood.position.set(0, 1.13, 1.32);
    hood.rotation.x = 0.08;
    car.add(hood);
    const cabin = new THREE.Mesh(new RoundedBoxGeometry(1.72, 0.62, 1.55, 3, 0.1), glass);
    cabin.position.set(0, 1.28, -0.28);
    cabin.rotation.x = -0.04;
    car.add(cabin);
    const roof = new THREE.Mesh(new RoundedBoxGeometry(1.54, 0.18, 1.15, 2, 0.06), paint);
    roof.position.set(0, 1.6, -0.5);
    car.add(roof);
    const rear = new THREE.Mesh(new RoundedBoxGeometry(2.02, 0.4, 1.2, 2, 0.07), paintDark);
    rear.position.set(0, 1.0, -1.78);
    car.add(rear);

    // Side skirts and stripes
    for (const s of [-1, 1]) {
      const skirt = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.28, 2.8), silver);
      skirt.position.set(s * 1.08, 0.56, -0.05);
      car.add(skirt);
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 3.2), gold);
      stripe.position.set(s * 0.62, 1.06, 0.05);
      car.add(stripe);
      const headlight = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.15, 0.1), glow);
      headlight.position.set(s * 0.62, 1.0, 2.28);
      car.add(headlight);
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.13, 0.08), new THREE.MeshStandardMaterial({
        color: 0x350808, emissive: 0xff2e1c, emissiveIntensity: 2.2, metalness: 0.5, roughness: 0.2
      }));
      tail.position.set(s * 0.64, 1.06, -2.36);
      car.add(tail);
    }

    // Splitter + spoiler
    const splitter = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.08, 0.5), silver);
    splitter.position.set(0, 0.5, 2.3);
    car.add(splitter);
    const wing = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.1, 0.55), paintDark);
    wing.position.set(0, 1.4, -2.12);
    wing.rotation.x = -0.1;
    car.add(wing);
    for (const s of [-1, 1]) {
      const strut = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.35, 0.2), dark);
      strut.position.set(s * 0.75, 1.22, -2.12);
      car.add(strut);
    }

    // Wheels
    this.wheels = [];
    const tireGeo = new THREE.CylinderGeometry(0.46, 0.46, 0.36, 14);
    tireGeo.rotateZ(Math.PI / 2);
    const hubGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.38, 8);
    hubGeo.rotateZ(Math.PI / 2);
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x0c0e10, roughness: 0.85, metalness: 0.1 });
    for (const z of [1.48, -1.45]) {
      for (const x of [-1.02, 1.02]) {
        const wheelGroup = new THREE.Group();
        wheelGroup.position.set(x, 0.5, z);
        const tire = new THREE.Mesh(tireGeo, tireMat);
        tire.castShadow = true;
        wheelGroup.add(tire);
        const hub = new THREE.Mesh(hubGeo, silver);
        wheelGroup.add(hub);
        const spokes = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.1, 0.1), gold);
        spokes.position.x = x > 0 ? 0.01 : -0.01;
        wheelGroup.add(spokes);
        car.add(wheelGroup);
        this.wheels.push({ group: wheelGroup, front: z > 0, x });
      }
    }

    // Underglow
    const under = makeSprite(this.glowTexture, 0x62f3ff, 4.6);
    under.rotation.x = -Math.PI / 2;
    under.position.set(0, 0.32, 0);
    under.material.opacity = 0.35;
    car.add(under);

    // Exhausts
    this.exhausts = [];
    this.carMuzzles = [];
    for (const s of [-1, 1]) {
      const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.3, 6), silver);
      pipe.rotation.x = Math.PI / 2;
      pipe.position.set(s * 0.66, 0.72, -2.3);
      car.add(pipe);
      const flame = makeSprite(this.glowTexture, 0x6fefff, 1.6);
      flame.position.set(s * 0.66, 0.72, -2.5);
      flame.material.opacity = 0;
      car.add(flame);
      this.exhausts.push(flame);

      const muzzle = new THREE.Object3D();
      muzzle.position.set(s * 0.62, 1.12, 2.15);
      car.add(muzzle);
      this.carMuzzles.push(muzzle);
    }

    car.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
    this.car = car;
    this.root.add(car);
  }

  buildShield() {
    const shield = new THREE.Group();
    const sphere = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.9, 2),
      new THREE.MeshBasicMaterial({
        color: 0x62f3ff, transparent: true, opacity: 0.11,
        blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false
      })
    );
    shield.add(sphere);
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.95, 1)),
      new THREE.LineBasicMaterial({ color: 0x9cf8ff, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    shield.add(edges);
    shield.visible = false;
    shield.position.y = 2.4;
    this.root.add(shield);
    this.shieldMesh = shield;
    this.shieldSphere = sphere;
    this.shieldEdges = edges;
  }

  /* ------------------------------------------------------------------ state */
  attachViewModel(camera) {
    this.fpCamera = camera;
    camera.add(this.viewModel);
    camera.add(this.hoodModel);
  }

  buildViewModel() {
    const group = new THREE.Group();
    const navy = new THREE.MeshStandardMaterial({ color: 0x223a5e, metalness: 0.72, roughness: 0.38, emissive: 0x06101d, emissiveIntensity: 1 });
    const red = new THREE.MeshStandardMaterial({ color: 0xb43a2d, metalness: 0.68, roughness: 0.42, emissive: 0x220503, emissiveIntensity: 1 });
    const silver = new THREE.MeshStandardMaterial({ color: 0xaebac2, metalness: 0.9, roughness: 0.28, emissive: 0x0c1114, emissiveIntensity: 1 });
    const gold = new THREE.MeshStandardMaterial({ color: 0xc79734, metalness: 0.88, roughness: 0.32, emissive: 0x1b1202, emissiveIntensity: 1 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x0d151d, metalness: 0.7, roughness: 0.5 });
    const glow = new THREE.MeshStandardMaterial({ color: 0x0a3038, emissive: 0x62f3ff, emissiveIntensity: 0.9, metalness: 0.4, roughness: 0.2 });

    const arm = new THREE.Group();
    arm.position.set(0.5, -0.4, -0.82);
    arm.rotation.set(0.08, -0.08, 0);
    arm.scale.setScalar(0.62);

    const forearm = new THREE.Mesh(new RoundedBoxGeometry(0.2, 0.22, 0.52, 2, 0.05), navy);
    forearm.position.set(0, 0, -0.16);
    forearm.rotation.x = -0.08;
    arm.add(forearm);
    const bracer = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.3, 0.24), red);
    bracer.position.set(0, 0.02, -0.47);
    arm.add(bracer);
    const wrist = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 0.12, 8), gold);
    wrist.rotation.x = Math.PI / 2;
    wrist.position.set(0, -0.01, -0.64);
    arm.add(wrist);
    const fist = new THREE.Mesh(new RoundedBoxGeometry(0.2, 0.2, 0.22, 2, 0.04), silver);
    fist.position.set(0.02, -0.1, -0.78);
    fist.rotation.x = 0.2;
    arm.add(fist);

    const cannon = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 0.68, 8), dark);
    cannon.rotation.x = Math.PI / 2;
    cannon.position.set(-0.06, 0.09, -0.48);
    arm.add(cannon);
    const shroud = new THREE.Mesh(new RoundedBoxGeometry(0.25, 0.21, 0.4, 2, 0.035), red);
    shroud.position.set(-0.06, 0.09, -0.34);
    arm.add(shroud);
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.075, 0.3, 8), glow);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(-0.06, 0.09, -0.96);
    arm.add(barrel);
    const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.07, 8), dark);
    tip.rotation.x = Math.PI / 2;
    tip.position.set(-0.06, 0.09, -1.08);
    arm.add(tip);
    const muzzle = new THREE.Object3D();
    muzzle.position.set(-0.06, 0.09, -1.14);
    arm.add(muzzle);

    group.add(arm);
    group.position.set(0, 0, 0);
    group.visible = false;
    group.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = false;
        o.receiveShadow = false;
      }
    });

    this.viewModel = group;
    this.viewArm = arm;
    this.viewBarrel = barrel;
    this.viewMuzzle = muzzle;
    this.viewBase = arm.position.clone();

    this.buildVehicleHood();
  }

  buildVehicleHood() {
    const hood = new THREE.Group();
    const paint = new THREE.MeshStandardMaterial({ color: 0x9e2c22, metalness: 0.86, roughness: 0.3, emissive: 0x1b0503, emissiveIntensity: 0.9 });
    const paintDark = new THREE.MeshStandardMaterial({ color: 0x5f1814, metalness: 0.82, roughness: 0.36, emissive: 0x0f0302, emissiveIntensity: 0.8 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x111821, metalness: 0.7, roughness: 0.45 });
    const silver = new THREE.MeshStandardMaterial({ color: 0xbcc7ce, metalness: 0.92, roughness: 0.26 });
    const glow = new THREE.MeshStandardMaterial({ color: 0x0a3038, emissive: 0x7fefff, emissiveIntensity: 1.1, metalness: 0.4, roughness: 0.2 });

    const panel = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.07, 0.92), paint);
    panel.position.set(0, -0.5, -1.12);
    panel.rotation.x = -0.07;
    hood.add(panel);
    const centre = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.09, 0.66), paintDark);
    centre.position.set(0, -0.475, -1.2);
    centre.rotation.x = -0.07;
    hood.add(centre);
    const scoop = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.1, 0.24), dark);
    scoop.position.set(0, -0.44, -0.86);
    scoop.rotation.x = -0.07;
    hood.add(scoop);
    for (const s of [-1, 1]) {
      const vent = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.02, 0.08), silver);
      vent.position.set(s * 0.5, -0.46, -1.02);
      vent.rotation.x = -0.07;
      hood.add(vent);
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.025, 0.04), glow);
      strip.position.set(s * 0.62, -0.5, -1.54);
      hood.add(strip);
    }
    const dash = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.18, 0.26), dark);
    dash.position.set(0, -0.4, -0.48);
    hood.add(dash);
    const dashGlow = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.035, 0.03), glow);
    dashGlow.position.set(0, -0.34, -0.37);
    hood.add(dashGlow);

    hood.visible = false;
    hood.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = false;
        o.receiveShadow = false;
      }
    });
    this.hoodModel = hood;
  }

  setFirstPerson(active) {
    this.firstPerson = active;
    this.syncVisibility();
  }

  syncVisibility() {
    const transforming = this.transforming;
    const showRobot = !this.firstPerson && this.mode === 'robot' && !this.dead && (!transforming || this.transformT < 0.58);
    const showCar = !this.firstPerson && this.mode === 'vehicle' && !this.dead && (!transforming || this.transformT >= 0.58);
    this.robot.visible = showRobot;
    this.car.visible = showCar;
    if (this.viewModel) this.viewModel.visible = this.firstPerson && this.mode === 'robot' && !this.dead && !transforming;
    if (this.hoodModel) this.hoodModel.visible = this.firstPerson && this.mode === 'vehicle' && !this.dead && !transforming;
    if (this.shieldMesh) this.shieldMesh.visible = this.shieldActive && !this.firstPerson;
  }

  reset(full = true) {
    this.position.copy(SPAWN);
    this.velocity.set(0, 0, 0);
    this.yaw = Math.PI;
    this.mode = 'robot';
    this.robot.visible = !this.firstPerson;
    this.car.visible = false;
    if (this.hoodModel) this.hoodModel.visible = false;
    this.transformT = 0;
    this.transforming = false;
    this.health = this.maxHealth;
    this.energon = this.maxEnergon;
    this.heat = 0;
    this.overheated = 0;
    this.fireCooldown = 0;
    this.dead = false;
    this.invuln = 1.5;
    this.shieldActive = false;
    this.shieldMesh.visible = false;
    this.airJumpUsed = false;
    this.colliderRadius = 1.35;
    this.rideHeight = 0;
    this.deathTimer = 0;
    this.timeSinceDamage = 0;
    if (full) {
      this.weaponIndex = 0;
      this.unlocked = new Set(['pistol']);
      this.abilities = { shield: false, jets: false, emp: false, overdrive: false };
      this.relics = 0;
      this.score = 0;
      this.kills = 0;
      this.empCooldown = 0;
    }
    this.root.position.copy(this.position);
    this.root.rotation.y = this.yaw;
    this.robot.position.y = 0;
    this.car.position.y = 0;
    this.robot.scale.set(1, 1, 1);
    this.car.scale.setScalar(1);
  }

  get weapon() {
    return WEAPONS[this.weaponIndex];
  }

  unlockRelic(relic) {
    this.relics++;
    if (relic.id === 'repeater') {
      this.unlocked.add('repeater');
      this.weaponIndex = 1;
    } else if (relic.id === 'mortar') {
      this.unlocked.add('mortar');
      this.weaponIndex = 2;
    } else if (relic.id === 'shield') {
      this.abilities.shield = true;
    } else if (relic.id === 'jets') {
      this.abilities.jets = true;
    } else if (relic.id === 'emp') {
      this.abilities.emp = true;
    } else if (relic.id === 'overdrive') {
      this.abilities.overdrive = true;
    }
  }

  get availableWeapons() {
    return WEAPONS.map((w, i) => ({ ...w, index: i, unlocked: this.unlocked.has(w.id) }));
  }

  switchWeapon(index) {
    if (index === this.weaponIndex) return;
    const weapon = WEAPONS[index];
    if (!weapon || !this.unlocked.has(weapon.id)) return;
    this.weaponIndex = index;
    this.fireCooldown = Math.max(this.fireCooldown, 0.18);
    this.audio?.weaponSwitch();
  }

  cycleWeapon() {
    const unlocked = WEAPONS.map((w, i) => ({ w, i })).filter(({ w }) => this.unlocked.has(w.id));
    if (unlocked.length < 2) return;
    const idx = unlocked.findIndex(({ i }) => i === this.weaponIndex);
    const next = unlocked[(idx + 1) % unlocked.length];
    this.weaponIndex = next.i;
    this.fireCooldown = Math.max(this.fireCooldown, 0.18);
    this.audio?.weaponSwitch();
  }

  /* ------------------------------------------------------------------ update */
  update(dt, input, camYaw, aimPoint, contextCamera) {
    if (this.dead) {
      this.deathTimer += dt;
      return;
    }
    this.aimPoint.copy(aimPoint);
    this.timeSinceDamage += dt;
    this.invuln = Math.max(0, this.invuln - dt);
    this.fireCooldown = Math.max(0, this.fireCooldown - dt);
    this.empCooldown = Math.max(0, this.empCooldown - dt);
    this.landingSquash = damp(this.landingSquash, 0, 10, dt);

    // Weapons heat
    if (this.overheated > 0) {
      this.overheated -= dt;
      this.heat = Math.max(0, this.heat - 44 * dt);
      if (this.overheated <= 0) {
        this.heat = Math.min(this.heat, 30);
        this.audio?.weaponReady();
      }
    } else {
      this.heat = Math.max(0, this.heat - 22 * dt);
    }

    // Energon + repair
    const wantShield = this.abilities.shield && input.ability && !this.transforming;
    if (wantShield && this.energon > 0.5) {
      this.shieldActive = true;
      this.energon = Math.max(0, this.energon - 20 * dt);
      if (this.energon <= 0.5) this.shieldActive = false;
    } else {
      this.shieldActive = false;
      if (this.timeSinceDamage > 1.4) this.energon = Math.min(this.maxEnergon, this.energon + 11 * dt);
    }
    this.shieldMesh.visible = this.shieldActive && !this.firstPerson;
    if (this.shieldActive) {
      const s = 1 + Math.sin(this.timeSinceDamage * 0 + performance.now() * 0.006) * 0.02;
      this.shieldMesh.scale.setScalar(s);
      this.shieldSphere.material.opacity = 0.1 + Math.sin(performance.now() * 0.006) * 0.035;
      this.shieldEdges.rotation.y += dt * 0.4;
      this.shieldEdges.rotation.x += dt * 0.12;
    }
    if (this.timeSinceDamage > 9 && this.health < this.maxHealth) {
      this.health = Math.min(this.maxHealth, this.health + 2.2 * dt);
    }

    if (this.transforming) {
      this.updateTransform(dt);
      this.animate(dt);
      this.updateJetVisuals(dt);
      return;
    }

    if (input.pressed.has('KeyF') && this.mode !== 'vehicle' || input.pressed.has('KeyF') && this.mode === 'vehicle') {
      this.startTransform();
      input.pressed.delete('KeyF');
      return;
    }
    // Weapon switching
    for (let i = 0; i < 3; i++) {
      if (input.pressed.has(`Digit${i + 1}`)) this.switchWeapon(i);
    }
    if (input.weaponCycle) this.cycleWeapon();

    if (input.abilityPressed && !input.ability) { /* shield is hold */ }

    if (this.abilities.emp && input.pressed.has('KeyE') && this.empCooldown <= 0 && this.energon >= 30) {
      this.triggerEMP();
    }

    if (this.mode === 'robot') this.updateRobot(dt, input, camYaw);
    else this.updateVehicle(dt, input, camYaw);

    // World collision and ground
    const hit = this.world.resolve(this.position, this.colliderRadius);
    if (hit === 'boundary' && this.moving) {
      this.velocity.x *= 0.4;
      this.velocity.z *= 0.4;
    }
    this.updateGround(dt);
    this.root.position.copy(this.position);
    this.root.rotation.y = this.yaw;

    this.updateAimPose(dt);
    this.animate(dt);
    this.updateWeapons(dt, input);
    this.updateJetVisuals(dt);
    this.updateParticles(dt);
    this.inWater = this.position.y < WATER_LEVEL - 0.2;
    this.moving = Math.abs(this.velocity.x) + Math.abs(this.velocity.z) > 1.3;
  }

  updateRobot(dt, input, camYaw) {
    const fx = -Math.sin(camYaw);
    const fz = -Math.cos(camYaw);
    const rx = Math.cos(camYaw);
    const rz = -Math.sin(camYaw);
    let wishX = fx * input.moveZ + rx * input.moveX;
    let wishZ = fz * input.moveZ + rz * input.moveX;
    const len = Math.hypot(wishX, wishZ);
    if (len > 1) { wishX /= len; wishZ /= len; }

    const sprint = input.sprint;
    let maxSpeed = sprint ? 15.5 : 8.6;
    if (this.inWater) maxSpeed *= 0.5;
    if (len > 0.01) {
      const targetYaw = Math.atan2(wishX, wishZ);
      this.yaw = dampAngle(this.yaw, targetYaw, 12, dt);
      this.velocity.x = damp(this.velocity.x, wishX * maxSpeed, 7.5, dt);
      this.velocity.z = damp(this.velocity.z, wishZ * maxSpeed, 7.5, dt);
    } else {
      this.velocity.x = damp(this.velocity.x, 0, 8.5, dt);
      this.velocity.z = damp(this.velocity.z, 0, 8.5, dt);
    }

    if (input.jumpPressed) {
      if (this.grounded) {
        this.velocity.y = 13.5;
        this.grounded = false;
        this.audio?.jump();
        this.effects.dust(this.position, 8, 0x8a805f, 1.1);
      } else if (this.abilities.jets && !this.airJumpUsed) {
        this.airJumpUsed = true;
        this.velocity.y = 11.5;
        this.audio?.jets();
        this.effects.jetBurst(this.position, 0x62f3ff, 18);
        this.effects.addShake(0.8);
      }
    }

    this.velocity.y -= 31 * dt;
    this.position.x += this.velocity.x * dt;
    this.position.z += this.velocity.z * dt;
    this.position.y += this.velocity.y * dt;

    // Speed-scaled camera rumble when sprinting
    if (sprint && len > 0.5 && this.grounded) this.cameraShake = 0.25;
  }

  updateVehicle(dt, input, camYaw) {
    const throttle = input.moveZ;
    const steer = input.moveX;
    let maxSpeed = 33;
    if (this.abilities.overdrive && input.sprint && throttle > 0.1) {
      maxSpeed = 48;
      this.boosting = true;
    } else {
      this.boosting = false;
    }
    if (this.inWater) maxSpeed *= 0.45;

    if (throttle !== 0) {
      const accel = throttle > 0 ? (this.boosting ? 22 : 13) : 20;
      this.speed = damp(this.speed, throttle * maxSpeed, throttle > 0 ? 1.7 : 3.2, dt);
      if (Math.abs(this.speed) < 0.4 && throttle !== 0) this.speed = throttle * 0.4;
    } else {
      this.speed = damp(this.speed, 0, 0.85, dt);
    }
    this.speed = clamp(this.speed, -13, maxSpeed);

    const speedFactor = clamp(Math.abs(this.speed) / maxSpeed, 0, 1);
    if (Math.abs(this.speed) > 1.2) {
      const direction = Math.sign(this.speed);
      this.yaw -= steer * (0.9 + speedFactor * 1.45) * direction * dt;
    }
    // Drift / lateral damping, arcade grip
    const fwdX = Math.sin(this.yaw);
    const fwdZ = Math.cos(this.yaw);
    this.velocity.x = damp(this.velocity.x, fwdX * this.speed, 5.5, dt);
    this.velocity.z = damp(this.velocity.z, fwdZ * this.speed, 5.5, dt);

    if (input.jumpPressed) {
      if (this.grounded) {
        this.velocity.y = 11.5;
        this.grounded = false;
        this.audio?.jump();
        this.effects.dust(this.position, 10, 0x8a805f, 1.5);
      } else if (this.abilities.jets && !this.airJumpUsed) {
        this.airJumpUsed = true;
        this.velocity.y = 10;
        this.audio?.jets();
        this.effects.jetBurst(this.position, 0x62f3ff, 22);
      }
    }
    this.velocity.y -= 31 * dt;
    this.position.x += this.velocity.x * dt;
    this.position.z += this.velocity.z * dt;
    this.position.y += this.velocity.y * dt;

    // Slope tilt
    const ground = this.world.heightAt(this.position.x, this.position.z);
    const fx = Math.sin(this.yaw);
    const fz = Math.cos(this.yaw);
    const hf = this.world.heightAt(this.position.x + fx * 2.1, this.position.z + fz * 2.1);
    const hb = this.world.heightAt(this.position.x - fx * 2.1, this.position.z - fz * 2.1);
    const hl = this.world.heightAt(this.position.x - fz * 1.0, this.position.z + fx * 1.0);
    const hr = this.world.heightAt(this.position.x + fz * 1.0, this.position.z - fx * 1.0);
    const pitch = this.grounded ? -Math.atan2(hf - hb, 4.2) : clamp(this.velocity.y * 0.02, -0.25, 0.25);
    const roll = this.grounded ? Math.atan2(hr - hl, 2.0) * 0.7 : 0;
    this.car.rotation.x = damp(this.car.rotation.x, pitch, 8, dt);
    this.car.rotation.z = damp(this.car.rotation.z, roll, 8, dt);
    this.car.position.y = damp(this.car.position.y, Math.min(0, ground - this.position.y) * 0.25 + 0.02, 10, dt);

    for (const wheel of this.wheels) {
      wheel.group.rotation.x += this.speed * dt * 2.1;
      if (wheel.front) wheel.group.rotation.y = damp(wheel.group.rotation.y, -steer * 0.45, 10, dt);
    }
    const under = this.car.children.find((c) => c.isSprite);
    if (under) under.material.opacity = 0.25 + speedFactor * 0.3;
    this.boosting && this.speed > 20 ? this.audio?.setBoost(true) : this.audio?.setBoost(false);

    if (this.boosting && this.speed > 8) this.cameraShake = 0.35;
  }

  updateGround(dt) {
    const ground = this.world.heightAt(this.position.x, this.position.z);
    const wasGrounded = this.grounded;
    if (this.position.y <= ground + 0.02) {
      if (!wasGrounded && this.velocity.y < -8) {
        const impact = clamp(-this.velocity.y / 22, 0, 1);
        this.landingSquash = impact * 0.14;
        this.effects.dust(this.position, 10 + impact * 12, this.inWater ? 0x9fd3d8 : 0x8a805f, 1.4 + impact);
        this.effects.addShake(impact * 1.8);
        this.audio?.land(impact);
        if (impact > 0.5) this.cameraShake = impact * 1.2;
      }
      this.position.y = ground;
      this.velocity.y = 0;
      this.grounded = true;
      this.airJumpUsed = false;
    } else {
      this.grounded = false;
    }
    if (this.grounded && this.inWater) this.audio?.setWater(true);
    else this.audio?.setWater(false);
  }

  updateAimPose(dt) {
    if (this.mode !== 'robot') {
      this.aiming = false;
      return;
    }
    const aiming = this.fireCooldown > 0.02 || (this.firingRecently || 0) > 0;
    this.aiming = aiming;
    const recoil = clamp(this.fireCooldown / 0.2, 0, 1);
    if (this.armR) {
      const targetX = this.aiming ? -1.45 - recoil * 0.16 : 0;
      const targetZ = this.aiming ? -0.1 : 0.14;
      this.armR.rotation.x = damp(this.armR.rotation.x, targetX, 12, dt);
      this.armR.rotation.z = damp(this.armR.rotation.z, targetZ, 10, dt);
    }
    if (this.armL) {
      this.armL.rotation.z = damp(this.armL.rotation.z, 0.12, 8, dt);
    }
  }

  updateWeapons(dt, input) {
    const weapon = this.weapon;
    if (this.fireCooldown <= 0 && this.overheated <= 0 && input.fire && !this.transforming) {
      this.fire(weapon);
    }
    if (input.fire && weapon?.id === 'pistol' && this.fireCooldown <= 0 && this.overheated <= 0) {
      // handled above; kept for clarity
    }
  }

  fire(weapon) {
    if (!this.combat) return;
    const muzzle = this.getMuzzle();
    const dir = new THREE.Vector3().subVectors(this.aimPoint, muzzle).normalize();
    if (weapon.spread) {
      dir.x += (Math.random() - 0.5) * weapon.spread * 2;
      dir.y += (Math.random() - 0.5) * weapon.spread * 2;
      dir.z += (Math.random() - 0.5) * weapon.spread * 2;
      dir.normalize();
    }
    this.combat.spawnPlayerProjectile({
      origin: muzzle,
      direction: dir,
      weapon,
      owner: this
    });
    this.fireCooldown = weapon.cooldown;
    this.heat = Math.min(120, this.heat + weapon.heat);
    this.firingRecently = 0.4;
    if (this.heat >= 100) {
      this.overheated = 2.3;
      this.audio?.overheat();
      this.effects.addShake(0.4);
    }
    this.effects.muzzleFlash(muzzle, weapon.color, weapon.id === 'mortar' ? 3.4 : 1.8);
    this.effects.addShake(weapon.shake * 0.35);
    this.audio?.shoot(weapon.id);
    this.animRecoil = 1;
    this.viewRecoil = 1;
  }

  getMuzzle() {
    if (this.firstPerson && this.viewModel?.visible) {
      this.fpCamera?.updateMatrixWorld(true);
      return this.viewMuzzle.getWorldPosition(new THREE.Vector3());
    }
    const muzzle = this.mode === 'vehicle' ? this.carMuzzles[this.fireToggle ? 0 : 1] : this.muzzleRobot;
    this.fireToggle = !this.fireToggle;
    if (!muzzle) return this.position.clone().add(new THREE.Vector3(0, 2.5, 0));
    this.root.updateMatrixWorld(true);
    return muzzle.getWorldPosition(new THREE.Vector3());
  }

  triggerEMP() {
    this.empCooldown = 10;
    this.energon = Math.max(0, this.energon - 30);
    const pos = this.position.clone();
    pos.y += 1.2;
    this.effects.empWave(pos);
    this.effects.addShake(2.2);
    this.audio?.emp();
    if (this.onEMP) this.onEMP(pos);
  }

  startTransform() {
    if (this.transforming) return;
    this.transforming = true;
    this.transformDir = this.mode === 'robot' ? 1 : -1;
    this.transformFlashDone = false;
    this.audio?.transform(this.transformDir > 0);
    this.effects.addShake(0.8);
    this.effects.sparks(this.position.clone().add(new THREE.Vector3(0, 2, 0)), 14, 0x8fe9ff, 1);
  }

  updateTransform(dt) {
    this.transformT = clamp(this.transformT + dt * 1.85 * this.transformDir, 0, 1);
    const t = this.transformT;
    this.robot.visible = !this.firstPerson && t < 0.58;
    this.car.visible = !this.firstPerson && t >= 0.58;
    if (this.viewModel) this.viewModel.visible = false;
    if (this.hoodModel) this.hoodModel.visible = false;
    this.robot.rotation.x = t * 0.9;
    this.robot.position.y = -t * 0.6;
    this.robot.scale.set(1 - t * 0.18, 1 - t * 0.45, 1 - t * 0.1);
    this.car.scale.setScalar(0.72 + clamp((t - 0.58) / 0.42, 0, 1) * 0.28);
    this.car.rotation.x = 0;
    this.car.rotation.z = 0;
    this.rig.rotation.x = t * 0.2;
    this.car.position.y = 0;
    if (this.muzzleRobot) this.muzzleRobot.visible = t < 0.3;
    if (!this.transformFlashDone && Math.abs(t - 0.58) < 0.09) {
      this.transformFlashDone = true;
      const p = this.position.clone().add(new THREE.Vector3(0, 1.7, 0));
      this.effects.transformFlash(p, 0x8defff);
      this.effects.sparks(p, 26, 0x9df6ff, 1.6);
      this.audio?.transformClank();
      this.effects.addShake(1.4);
    }
    if (t >= 1 && this.transformDir > 0) {
      this.transforming = false;
      this.mode = 'vehicle';
      this.transformT = 1;
      this.robot.visible = false;
      this.car.visible = !this.firstPerson;
      this.car.scale.setScalar(1);
      if (this.viewModel) this.viewModel.visible = false;
      if (this.hoodModel) this.hoodModel.visible = this.firstPerson;
      this.colliderRadius = 1.9;
      this.speed = 0;
      this.velocity.set(0, this.velocity.y, 0);
      this.audio?.setEngine(true);
      this.robot.rotation.x = 0;
      this.robot.position.y = 0;
    } else if (t <= 0 && this.transformDir < 0) {
      this.transforming = false;
      this.mode = 'robot';
      this.transformT = 0;
      this.robot.visible = !this.firstPerson;
      this.car.visible = false;
      this.robot.rotation.x = 0;
      this.robot.position.y = 0;
      this.robot.scale.set(1, 1, 1);
      if (this.viewModel) this.viewModel.visible = this.firstPerson;
      if (this.hoodModel) this.hoodModel.visible = false;
      this.rig.rotation.x = 0;
      this.colliderRadius = 1.35;
      this.speed = 0;
      this.velocity.set(0, this.velocity.y, 0);
      this.audio?.setEngine(false);
      this.audio?.setBoost(false);
    }
    if (this.mode === 'vehicle') this.root.rotation.y = this.yaw;
  }

  animate(dt) {
    if (this.mode === 'robot' && !this.transforming) {
      const planar = Math.hypot(this.velocity.x, this.velocity.z);
      const phaseSpeed = clamp(planar, 0, 16) * 1.6;
      this.walkPhase += dt * (2.2 + phaseSpeed);
      const amp = clamp(planar / 12, 0, 1) * 0.62;
      const swing = Math.sin(this.walkPhase);
      const swing2 = Math.sin(this.walkPhase + Math.PI);
      const squash = this.landingSquash;
      this.rig.position.y = Math.abs(Math.sin(this.walkPhase * 2)) * amp * 0.045 - squash;
      this.rig.rotation.z = Math.sin(this.walkPhase) * amp * 0.03;
      this.legs.left.hip.rotation.x = swing * amp;
      this.legs.right.hip.rotation.x = swing2 * amp;
      this.legs.left.knee.rotation.x = Math.max(0, -swing) * amp * 1.25 + squash * 1.5;
      this.legs.right.knee.rotation.x = Math.max(0, -swing2) * amp * 1.25 + squash * 1.5;
      this.legs.left.foot.rotation.x = -Math.max(0, -swing) * amp * 0.5;
      this.legs.right.foot.rotation.x = -Math.max(0, -swing2) * amp * 0.5;
      if (this.arms) {
        this.arms.left.shoulder.rotation.x = this.aiming ? -0.3 : swing2 * amp * 0.55;
        this.arms.left.elbow.rotation.x = this.aiming ? -0.3 : -0.25 - Math.max(0, swing2) * 0.35;
        if (!this.aiming) {
          this.arms.right.shoulder.rotation.x = swing * amp * 0.55;
          this.arms.right.elbow.rotation.x = -0.25 - Math.max(0, swing) * 0.35;
        }
      }
      this.body.position.y = 2.6 + Math.sin(this.walkPhase * 2) * amp * 0.035;
      this.body.rotation.x = damp(this.body.rotation.x, this.aiming ? 0.04 : (this.grounded ? 0 : 0.12), 6, dt);
      this.body.rotation.z = -Math.sin(this.walkPhase) * amp * 0.025;
      this.head.rotation.x = damp(this.head.rotation.x, this.aiming ? 0.12 : 0, 6, dt);
      this.core.scale.setScalar(1 + Math.sin(this.walkPhase * 0.5) * 0.06);
      if (!this.grounded && this.legs) {
        const tuck = clamp(this.velocity.y / 14, -1, 1);
        this.legs.left.hip.rotation.x = 0.5 + tuck * 0.25;
        this.legs.right.hip.rotation.x = 0.35 + tuck * 0.2;
        this.legs.left.knee.rotation.x = 0.9;
        this.legs.right.knee.rotation.x = 0.8;
      }
    } else if (this.mode === 'vehicle' && !this.transforming) {
      this.rig.position.y = 0;
      const speedFactor = clamp(Math.abs(this.speed) / 40, 0, 1);
      this.car.position.y = 0.02 + Math.sin(performance.now() * 0.012) * 0.01 * speedFactor;
      this.body.position.y = 2.6;
    }
    this.updateViewModel(dt);
    this.firingRecently = Math.max(0, (this.firingRecently || 0) - dt);
  }

  updateViewModel(dt) {
    if (!this.viewModel || !this.viewModel.visible) return;
    this.viewRecoil = Math.max(0, this.viewRecoil - dt * 8.5);
    const planar = Math.hypot(this.velocity.x, this.velocity.z);
    const bobAmt = clamp(planar / 12, 0, 1);
    const swayX = Math.sin(this.walkPhase) * 0.009 * bobAmt;
    const swayY = Math.abs(Math.sin(this.walkPhase * 2)) * 0.008 * bobAmt;
    const recoil = this.viewRecoil;
    this.viewArm.position.set(
      this.viewBase.x + swayX,
      this.viewBase.y + swayY - this.landingSquash * 0.3 - recoil * 0.02,
      this.viewBase.z + recoil * 0.12
    );
    this.viewArm.rotation.set(0.08 - recoil * 0.2, -0.08, Math.sin(this.walkPhase) * 0.012 * bobAmt);
    if (this.viewBarrel) {
      const color = this.weapon.color;
      if (this.viewBarrel.material.emissive.getHex() !== color) {
        this.viewBarrel.material.emissive.setHex(color);
      }
    }
  }

  updateJetVisuals(dt) {
    const flying = !this.grounded || this.boosting;
    const intensity = this.boosting ? 1 : !this.grounded ? 0.7 : 0;
    for (const s of this.jetSprites) {
      s.material.opacity = damp(s.material.opacity, intensity, 8, dt);
      s.scale.setScalar((0.9 + Math.random() * 0.5) * (this.boosting ? 2.2 : 1.5));
    }
    if (this.mode === 'robot') {
      for (let i = 0; i < this.jetSprites.length; i++) {
        this.jetSprites[i].visible = this.robot.visible && intensity > 0.05;
      }
    } else {
      for (const s of this.jetSprites) s.visible = false;
      for (const e of this.exhausts) {
        const target = this.boosting ? 0.85 : Math.abs(this.speed) > 10 ? 0.3 : 0.12;
        e.material.opacity = damp(e.material.opacity, target, 6, dt);
        e.scale.setScalar(this.boosting ? 2.6 + Math.random() * 0.6 : 1.2 + Math.abs(this.speed) * 0.03);
      }
    }
    if (this.boostParticlesTimer === undefined) this.boostParticlesTimer = 0;
    this.boostParticlesTimer -= dt;
    if (this.mode === 'vehicle' && this.boosting && this.boostParticlesTimer <= 0) {
      this.boostParticlesTimer = 0.045;
      const back = new THREE.Vector3(-Math.sin(this.yaw), 0.7, -Math.cos(this.yaw));
      const p = this.position.clone().addScaledVector(back, 2.7);
      this.effects.sparks(p, 3, 0x7feaff, 0.7);
    }
    if (this.mode === 'robot' && !this.grounded && this.abilities.jets && this.boostParticlesTimer <= 0) {
      this.boostParticlesTimer = 0.07;
      this.effects.sparks(this.position.clone().add(new THREE.Vector3(0, 0.6, 0)), 2, 0x7feaff, 0.7);
    }
  }

  updateParticles(dt) {
    this.dustTimer -= dt;
    const planar = Math.hypot(this.velocity.x, this.velocity.z);
    if (this.dustTimer <= 0 && this.grounded && planar > 4) {
      this.dustTimer = this.mode === 'vehicle' ? 0.055 : 0.16;
      const back = this.mode === 'vehicle'
        ? new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)).multiplyScalar(2.2)
        : new THREE.Vector3(0, 0.2, 0);
      const p = this.position.clone().add(back);
      this.effects.dust(p, this.mode === 'vehicle' ? 4 : 2, this.inWater ? 0x9fd3d8 : 0x8b7b58, this.mode === 'vehicle' ? 1.4 : 0.8);
    }
    if (this.mode === 'vehicle') {
      this.trailTimer -= dt;
      if (this.trailTimer <= 0) {
        this.trailTimer = 0.14;
        for (const w of this.wheels) {
          if (w.front) continue;
          const p = w.group.getWorldPosition(new THREE.Vector3());
          this.effects.dust(p, 1, this.inWater ? 0x9fd3d8 : 0x8b7b58, 0.5);
        }
      }
    }
    this.cameraShake = damp(this.cameraShake, 0, 5, dt);
  }

  takeDamage(amount, sourcePos) {
    if (this.dead || this.invuln > 0) return;
    let dmg = amount;
    if (this.shieldActive) {
      dmg *= 0.16;
      this.energon = Math.max(0, this.energon - amount * 0.55);
      this.shieldSphere.material.opacity = 0.35;
      this.effects.shieldImpact(this.position.clone().add(new THREE.Vector3(0, 2.3, 0)), 0x62f3ff);
      this.audio?.shieldHit();
    }
    this.health = Math.max(0, this.health - dmg);
    this.timeSinceDamage = 0;
    this.invuln = 0.35;
    this.cameraShake = Math.max(this.cameraShake, 0.9);
    this.effects.hitFlash(sourcePos, 0xff4a35);
    this.audio?.playerHit();
    if (this.onDamage) this.onDamage(dmg);
    if (this.health <= 0) this.die();
  }

  die() {
    if (this.dead) return;
    this.dead = true;
    this.deathTimer = 0;
    this.shieldActive = false;
    this.shieldMesh.visible = false;
    this.effects.explosion(this.position.clone().add(new THREE.Vector3(0, 1.8, 0)), 0xff6a45, 2.4);
    this.effects.sparks(this.position.clone().add(new THREE.Vector3(0, 2, 0)), 60, 0xffc07a, 2.5);
    this.audio?.playerDeath();
    this.audio?.setEngine(false);
    this.audio?.setBoost(false);
    this.robot.visible = false;
    this.car.visible = false;
    if (this.viewModel) this.viewModel.visible = false;
    if (this.hoodModel) this.hoodModel.visible = false;
    if (this.onDeath) this.onDeath();
  }

  revive() {
    this.reset(false);
    this.health = this.maxHealth;
    this.energon = this.maxEnergon;
    this.robot.visible = !this.firstPerson;
    this.car.visible = false;
    if (this.viewModel) this.viewModel.visible = this.firstPerson;
    if (this.hoodModel) this.hoodModel.visible = false;
    this.mode = 'robot';
    this.colliderRadius = 1.35;
    this.root.rotation.y = this.yaw;
  }

  addScore(n) {
    this.score += n;
  }
}
