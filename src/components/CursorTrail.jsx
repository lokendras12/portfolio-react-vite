import React, { useEffect, useRef } from 'react';
import './CursorTrail.css';

// Champagne stardust cursor trail — a soft lagging aura plus tiny star
// particles shed along the pointer's path, echoing the constellation theme.
// Canvas-based for performance; disabled on touch devices & reduced motion.

const PALETTE = [
  [232, 218, 195], // champagne
  [255, 250, 235], // warm white
  [196, 181, 160], // muted gold
  [180, 200, 230], // rare cool blue
];

const pickColor = () => {
  const r = Math.random();
  if (r > 0.92) return PALETTE[3];
  if (r > 0.6) return PALETTE[1];
  if (r > 0.3) return PALETTE[0];
  return PALETTE[2];
};

const CursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return undefined;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const mouse = { x: -200, y: -200 };
    const aura = { x: -200, y: -200, r: 24, targetR: 24 };
    const last = { x: -200, y: -200 };
    let particles = [];
    let active = false;

    const spawn = (x, y, vx, vy, boost = 1) => {
      const [r, g, b] = pickColor();
      particles.push({
        x,
        y,
        vx: vx + (Math.random() - 0.5) * 0.5,
        vy: vy + (Math.random() - 0.5) * 0.5,
        size: (0.6 + Math.random() * 1.5) * boost,
        life: 1,
        decay: 0.015 + Math.random() * 0.025,
        color: `${r}, ${g}, ${b}`,
        twinkle: Math.random() * Math.PI * 2,
      });
    };

    const onMove = (e) => {
      active = true;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Larger aura while over interactive elements
      const interactive = e.target.closest?.(
        'a, button, [role="button"], input, textarea, select',
      );
      aura.targetR = interactive ? 42 : 24;

      // Shed stardust along the path, denser when moving faster
      const dx = mouse.x - last.x;
      const dy = mouse.y - last.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 10) {
        const speed = Math.min(dist / 28, 1.6);
        // Drift gently against the direction of travel
        spawn(mouse.x, mouse.y, -dx * 0.012, -dy * 0.012 - 0.08, speed);
        if (dist > 36) {
          spawn(
            mouse.x - dx * 0.5,
            mouse.y - dy * 0.5,
            -dx * 0.008,
            -dy * 0.008 - 0.06,
            speed * 0.8,
          );
        }
        last.x = mouse.x;
        last.y = mouse.y;
      }
    };

    // Small starburst on click — pairs with the click sound
    const onDown = (e) => {
      for (let i = 0; i < 9; i += 1) {
        const angle = (i / 9) * Math.PI * 2 + Math.random() * 0.4;
        const speed = 0.9 + Math.random() * 1.3;
        spawn(
          e.clientX,
          e.clientY,
          Math.cos(angle) * speed,
          Math.sin(angle) * speed,
          1.15,
        );
      }
    };

    const onLeave = () => {
      active = false;
    };

    const frame = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Lagging aura — soft champagne light that chases the cursor
      aura.x += (mouse.x - aura.x) * 0.11;
      aura.y += (mouse.y - aura.y) * 0.11;
      aura.r += (aura.targetR - aura.r) * 0.1;

      if (active) {
        const gradient = ctx.createRadialGradient(
          aura.x, aura.y, 0,
          aura.x, aura.y, aura.r,
        );
        gradient.addColorStop(0, 'rgba(232, 218, 195, 0.10)');
        gradient.addColorStop(0.5, 'rgba(232, 218, 195, 0.045)');
        gradient.addColorStop(1, 'rgba(232, 218, 195, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(aura.x, aura.y, aura.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Stardust
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.962;
        p.vy *= 0.962;
        p.life -= p.decay;
        p.twinkle += 0.18;
        if (p.life <= 0) continue;

        const flicker = 0.75 + Math.sin(p.twinkle) * 0.25;
        const alpha = p.life * p.life * 0.85 * flicker;
        const size = p.size * (0.4 + p.life * 0.6);

        ctx.fillStyle = `rgba(${p.color}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Faint halo around the brighter motes
        if (p.size > 1.5) {
          ctx.fillStyle = `rgba(${p.color}, ${alpha * 0.22})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 2.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      particles = particles.filter((p) => p.life > 0);
      if (particles.length > 140) {
        particles.splice(0, particles.length - 140);
      }

      raf = window.requestAnimationFrame(frame);
    };
    raf = window.requestAnimationFrame(frame);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('resize', resize);
    document.documentElement.addEventListener('mouseleave', onLeave);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('resize', resize);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-trail" aria-hidden="true" />;
};

export default CursorTrail;
