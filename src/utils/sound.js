const STORAGE_KEY = 'lk-sound-muted';

class SoundManager {
  constructor() {
    this.ctx = null;
    this.master = null;
    this._muted = false;
    this._listeners = new Set();

    if (typeof window !== 'undefined') {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored !== null) {
          this._muted = stored === '1';
        }
      } catch {
        // ignore
      }
    }
  }

  get muted() {
    return this._muted;
  }

  setMuted(value) {
    this._muted = Boolean(value);
    try {
      window.localStorage.setItem(STORAGE_KEY, this._muted ? '1' : '0');
    } catch {
      // ignore
    }
    this._listeners.forEach((fn) => fn(this._muted));
  }

  toggle() {
    this.setMuted(!this._muted);
    if (!this._muted) this.click(0.6);
  }

  subscribe(fn) {
    this._listeners.add(fn);
    return () => this._listeners.delete(fn);
  }

  _ensureCtx() {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try {
        this.ctx = new AC();
        this.master = this.ctx.createGain();
        this.master.gain.value = 0.65;
        this.master.connect(this.ctx.destination);
      } catch {
        return null;
      }
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  _envelope(node, gain, attack, decay, ctx, startAt = 0) {
    const t = ctx.currentTime + startAt;
    node.gain.cancelScheduledValues(t);
    node.gain.setValueAtTime(0.0001, t);
    node.gain.exponentialRampToValueAtTime(gain, t + attack);
    node.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
  }

  tick(volume = 1) {
    if (this._muted) return;
    const ctx = this._ensureCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.08);
    this._envelope(gain, 0.05 * volume, 0.005, 0.07, ctx);
    osc.connect(gain).connect(this.master);
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  }

  key(volume = 1) {
    if (this._muted) return;
    const ctx = this._ensureCtx();
    if (!ctx) return;
    const bufferSize = 512;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 1600;
    const gain = ctx.createGain();
    this._envelope(gain, 0.04 * volume, 0.002, 0.05, ctx);
    src.connect(hp).connect(gain).connect(this.master);
    src.start();
    src.stop(ctx.currentTime + 0.08);
  }

  whoosh(volume = 1) {
    if (this._muted) return;
    const ctx = this._ensureCtx();
    if (!ctx) return;
    const dur = 0.7;
    const bufferSize = Math.floor(ctx.sampleRate * dur);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i += 1) {
      const envelope = Math.sin((i / bufferSize) * Math.PI);
      data[i] = (Math.random() * 2 - 1) * envelope;
    }
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.value = 0.9;
    filter.frequency.setValueAtTime(300, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(2400, ctx.currentTime + dur);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.07 * volume, ctx.currentTime + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    src.connect(filter).connect(gain).connect(this.master);
    src.start();
    src.stop(ctx.currentTime + dur);
  }

  chime(volume = 1) {
    if (this._muted) return;
    const ctx = this._ensureCtx();
    if (!ctx) return;
    const notes = [523.25, 659.25, 987.77];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.value = freq;
      const start = i * 0.06;
      const t = ctx.currentTime + start;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.06 * volume, t + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
      osc.connect(gain).connect(this.master);
      osc.start(t);
      osc.stop(t + 1.7);
    });
  }

  click(volume = 1) {
    if (this._muted) return;
    const ctx = this._ensureCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(620, ctx.currentTime + 0.06);
    this._envelope(gain, 0.07 * volume, 0.003, 0.06, ctx);
    osc.connect(gain).connect(this.master);
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  }

  hover(volume = 1) {
    if (this._muted) return;
    const ctx = this._ensureCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 1800;
    this._envelope(gain, 0.025 * volume, 0.002, 0.04, ctx);
    osc.connect(gain).connect(this.master);
    osc.start();
    osc.stop(ctx.currentTime + 0.06);
  }

  primeContext() {
    this._ensureCtx();
  }
}

export const sound = new SoundManager();
