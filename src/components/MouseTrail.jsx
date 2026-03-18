import React, { useEffect, useRef } from 'react';
import './MouseTrail.css';

const MAX_POINTS = 30;
const FADE_ALPHA = 0.08;
const MIN_DELTA = 4;
const POINT_LIFE = 32;

const MouseTrail = () => {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const pointerRef = useRef({ x: null, y: null, isActive: false });
  const pointsRef = useRef([]);
  const sizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { width, height };
    };

    const addPoint = (x, y) => {
      const points = pointsRef.current;
      const last = points[points.length - 1];
      if (last && Math.hypot(last.x - x, last.y - y) < MIN_DELTA) return;

      points.push({ x, y, age: 0 });
      if (points.length > MAX_POINTS) points.shift();
    };

    const onPointerMove = (event) => {
      pointerRef.current = {
        x: event.clientX,
        y: event.clientY,
        isActive: true,
      };
      addPoint(event.clientX, event.clientY);
    };

    const onPointerLeave = () => {
      pointerRef.current.isActive = false;
    };

    const drawPath = (points, options) => {
      if (points.length < 2) return;

      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.shadowBlur = options.shadowBlur;
      ctx.shadowColor = options.shadowColor;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      ctx.strokeStyle = options.strokeFn(options.alpha);
      ctx.globalAlpha = options.alpha;

      const segmentCount = points.length - 1;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      for (let i = 1; i < points.length; i += 1) {
        const progress = i / segmentCount;
        const coneTaper = (1 - progress) * (1 - progress);
        ctx.lineWidth = options.lineWidth * coneTaper;
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();
    };

    const draw = () => {
      const { width, height } = sizeRef.current;
      ctx.fillStyle = `rgba(0, 0, 0, ${FADE_ALPHA})`;
      ctx.fillRect(0, 0, width, height);

      const points = pointsRef.current;
      for (let i = 0; i < points.length; i += 1) {
        points[i].age += 1;
      }

      // Remove old points
      pointsRef.current = points.filter((p) => p.age < POINT_LIFE);

      if (pointsRef.current.length > 1) {
        const strength = 1 - pointsRef.current[0].age / POINT_LIFE;
        const alpha = Math.max(0.1, strength);

        ctx.save();
        
        // Single clean white cone line
        drawPath(pointsRef.current, {
          strokeFn: () => 'rgba(255, 255, 255, 0.9)',
          alpha,
          lineWidth: 3.5,
          shadowBlur: 8,
          shadowColor: 'rgba(0, 200, 255, 0.6)',
        });

        ctx.restore();
      }

      // Draw head (bright neon star)
      if (pointerRef.current.isActive && pointerRef.current.x !== null) {
        const { x, y } = pointerRef.current;
        
        ctx.save();
        
        // Neon glow halo
        ctx.globalAlpha = 0.25;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(0, 200, 255, 0.8)';
        ctx.fillStyle = 'rgba(0, 200, 255, 0.15)';
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fill();

        // Core bright star
        ctx.globalAlpha = 0.9;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerleave', onPointerLeave);
    frameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="mouse-trail-canvas" aria-hidden="true" />;
};

export default MouseTrail;
