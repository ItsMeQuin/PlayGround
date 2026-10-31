import { clamp } from './utils.js';

export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.pressed = new Set();
    this.mouseDX = 0;
    this.mouseDY = 0;
    this.mouseFire = false;
    this.mouseLocked = false;
    this.enabled = false;
    this.sensitivity = 0.0022;
    this.touchSensitivity = 0.005;
    this.joystick = { x: 0, y: 0, active: false, pointerId: null };
    this.touchFire = false;
    this.touchAbility = false;
    this.jumpPressed = false;
    this.weaponCycle = false;
    this.isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    this.dragging = false;
    this.dragPointer = null;
    this.lastDragX = 0;
    this.lastDragY = 0;
    this.onPauseRequest = null;
    this.onLockChange = null;
    this.wasLocked = false;

    this.bindKeyboard();
    this.bindMouse();
    this.bindTouch();
  }

  get moveX() {
    let value = 0;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) value += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) value -= 1;
    value += this.joystick.x;
    return clamp(value, -1, 1);
  }

  get moveZ() {
    let value = 0;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) value += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) value -= 1;
    value += -this.joystick.y;
    const x = this.moveX;
    const len = Math.hypot(x, value);
    if (len > 1) {
      value /= len;
    }
    return clamp(value, -1, 1);
  }

  get sprint() {
    return this.keys.has('ShiftLeft') || this.keys.has('ShiftRight');
  }

  bindKeyboard() {
    window.addEventListener('keydown', (event) => {
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.code)) event.preventDefault();
      if (event.code === 'Escape') {
        if (this.onPauseRequest) this.onPauseRequest();
        return;
      }
      if (!this.enabled) return;
      if (event.repeat) return;
      this.keys.add(event.code);
      this.pressed.add(event.code);
      if (event.code === 'Space') this.jumpPressed = true;
      if (event.code === 'KeyM') {
        // handled by the game through pressed set
      }
    });
    window.addEventListener('keyup', (event) => {
      this.keys.delete(event.code);
    });
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.mouseFire = false;
    });
  }

  bindMouse() {
    this.canvas.addEventListener('mousedown', (event) => {
      if (!this.enabled) return;
      if (event.button === 0) {
        this.mouseFire = true;
        if (!this.isTouch && !this.mouseLocked) this.requestPointerLock();
      }
    });
    window.addEventListener('mouseup', (event) => {
      if (event.button === 0) this.mouseFire = false;
    });
    window.addEventListener('mousemove', (event) => {
      if (!this.enabled) return;
      if (this.mouseLocked) {
        this.mouseDX += event.movementX || 0;
        this.mouseDY += event.movementY || 0;
      } else if (this.dragging && event.pointerType !== 'touch') {
        this.mouseDX += event.clientX - this.lastDragX;
        this.mouseDY += event.clientY - this.lastDragY;
        this.lastDragX = event.clientX;
        this.lastDragY = event.clientY;
      }
    });
    this.canvas.addEventListener('mousedown', (event) => {
      if (!this.enabled || event.button !== 0 || this.mouseLocked || this.isTouch) return;
      this.dragging = true;
      this.lastDragX = event.clientX;
      this.lastDragY = event.clientY;
    });
    window.addEventListener('mouseup', () => { this.dragging = false; });
    this.canvas.addEventListener('contextmenu', (event) => event.preventDefault());
    window.addEventListener('wheel', (event) => {
      if (!this.enabled) return;
      this.weaponCycle = true;
    }, { passive: true });
    document.addEventListener('pointerlockchange', () => {
      this.mouseLocked = document.pointerLockElement === this.canvas;
      this.canvas.classList.toggle('locked', this.mouseLocked);
      if (this.onLockChange) this.onLockChange(this.mouseLocked, this.wasLocked);
      this.wasLocked = this.mouseLocked;
    });
  }

  requestPointerLock() {
    if (this.isTouch) return;
    this.canvas.requestPointerLock?.();
  }

  exitPointerLock() {
    if (document.pointerLockElement) document.exitPointerLock?.();
  }

  bindTouch() {
    const joy = document.getElementById('joystick');
    const stick = document.getElementById('joystick-stick');
    if (joy) {
      const radius = 46;
      const updateStick = (dx, dy) => {
        const len = Math.hypot(dx, dy);
        const clamped = len > radius ? radius / len : 1;
        const x = dx * clamped;
        const y = dy * clamped;
        stick.style.transform = `translate(${x}px, ${y}px)`;
        this.joystick.x = x / radius;
        this.joystick.y = y / radius;
      };
      joy.addEventListener('pointerdown', (event) => {
        if (!this.enabled) return;
        event.preventDefault();
        event.stopPropagation();
        this.joystick.active = true;
        this.joystick.pointerId = event.pointerId;
        joy.setPointerCapture(event.pointerId);
        const rect = joy.getBoundingClientRect();
        updateStick(event.clientX - (rect.left + rect.width / 2), event.clientY - (rect.top + rect.height / 2));
      });
      joy.addEventListener('pointermove', (event) => {
        if (!this.joystick.active || event.pointerId !== this.joystick.pointerId) return;
        event.preventDefault();
        const rect = joy.getBoundingClientRect();
        updateStick(event.clientX - (rect.left + rect.width / 2), event.clientY - (rect.top + rect.height / 2));
      });
      const end = (event) => {
        if (event.pointerId !== this.joystick.pointerId) return;
        this.joystick.active = false;
        this.joystick.pointerId = null;
        this.joystick.x = 0;
        this.joystick.y = 0;
        stick.style.transform = 'translate(0px, 0px)';
      };
      joy.addEventListener('pointerup', end);
      joy.addEventListener('pointercancel', end);
      joy.addEventListener('lostpointercapture', end);
    }

    const hold = (id, onDown, onUp) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('pointerdown', (event) => {
        if (!this.enabled) return;
        event.preventDefault();
        event.stopPropagation();
        el.classList.add('down');
        el.setPointerCapture(event.pointerId);
        onDown();
      });
      const up = (event) => {
        event.preventDefault();
        event.stopPropagation();
        el.classList.remove('down');
        onUp?.();
      };
      el.addEventListener('pointerup', up);
      el.addEventListener('pointercancel', up);
      el.addEventListener('lostpointercapture', () => el.classList.remove('down'));
    };
    hold('btn-fire', () => { this.touchFire = true; }, () => { this.touchFire = false; });
    hold('btn-ability', () => { this.touchAbility = true; }, () => { this.touchAbility = false; });
    hold('btn-jump', () => { this.jumpPressed = true; });
    hold('btn-transform', () => { this.pressed.add('KeyF'); });
    hold('btn-weapon', () => { this.weaponCycle = true; });

    // Camera look drag on the canvas (right side / anywhere not on controls).
    this.canvas.addEventListener('pointerdown', (event) => {
      if (!this.enabled || !this.isTouch || event.pointerType !== 'touch') return;
      this.dragging = true;
      this.dragPointer = event.pointerId;
      this.lastDragX = event.clientX;
      this.lastDragY = event.clientY;
    });
    this.canvas.addEventListener('pointermove', (event) => {
      if (!this.enabled || !this.dragging || event.pointerId !== this.dragPointer) return;
      const dx = event.clientX - this.lastDragX;
      const dy = event.clientY - this.lastDragY;
      this.lastDragX = event.clientX;
      this.lastDragY = event.clientY;
      this.mouseDX += dx;
      this.mouseDY += dy;
    });
    const endDrag = (event) => {
      if (event.pointerId === this.dragPointer) {
        this.dragging = false;
        this.dragPointer = null;
      }
    };
    this.canvas.addEventListener('pointerup', endDrag);
    this.canvas.addEventListener('pointercancel', endDrag);
  }

  get ability() {
    return this.keys.has('KeyQ') || this.touchAbility;
  }

  get fire() {
    return this.mouseFire || this.touchFire;
  }

  update() {
    this.jumpPressed = this.jumpPressed || this.pressed.has('Space');
  }

  endFrame() {
    this.pressed.clear();
    this.jumpPressed = false;
    this.weaponCycle = false;
    this.mouseDX = 0;
    this.mouseDY = 0;
  }

  clear() {
    this.keys.clear();
    this.pressed.clear();
    this.mouseFire = false;
    this.touchFire = false;
    this.touchAbility = false;
    this.joystick.x = 0;
    this.joystick.y = 0;
    this.mouseDX = 0;
    this.mouseDY = 0;
  }

  showTouchUI(show) {
    const ui = document.getElementById('touch-ui');
    if (!ui) return;
    const shouldShow = show && this.isTouch;
    ui.classList.toggle('hidden', !shouldShow);
    document.body.classList.toggle('touch', shouldShow);
  }
}
