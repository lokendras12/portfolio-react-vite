import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { sound } from '../../utils/sound';
import './Constellation.css';

const easeOut = [0.22, 1, 0.36, 1];

// Deterministic PRNG so star positions stay stable across renders / replays.
const mulberry32 = (seed) => {
  let t = seed;
  return () => {
    t |= 0;
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
};

const STAR_COUNT = 260;
const BG_STARS = (() => {
  const rng = mulberry32(91);
  return Array.from({ length: STAR_COUNT }, () => {
    const r = rng();
    return {
      x: rng() * 100,
      y: rng() * 100,
      size: 0.4 + (r < 0.93 ? rng() * 1.3 : 1.6 + rng() * 1.6),
      brightness: 0.18 + rng() * 0.7,
      twinkleDelay: rng() * 6,
      twinkleDuration: 2.6 + rng() * 4,
      // ~5% chance of being a tinted "warm" star, ~3% a cool one
      tint: r > 0.95 ? 'warm' : r < 0.03 ? 'cool' : 'neutral',
    };
  });
})();

// Skills are anchored to deliberately asymmetric base positions — different
// heights, different distances from the edges, and the top of the screen
// also gets used so the layout isn't a mirror. Heights, gaps, and
// in/out depths are all intentionally uneven between sides.
const SKILL_BASE = [
  // Loose "left wing" — 4 stars, varied depths
  { id: 'rn',    label: 'React Native',   x: 18, y: 14 },   // top-left, high
  { id: 'ios',   label: 'iOS / Android',  x: 13, y: 38 },   // far-left, dropped
  { id: 'ts',    label: 'TypeScript',     x: 21, y: 60 },   // inward
  { id: 'ai',    label: 'AI Workflows',   x: 30, y: 82 },   // lower, well inward

  // "Right wing" — 4 stars at completely different vertical rhythm
  { id: 'arch',  label: 'Architecture',   x: 76, y: 12 },   // top-right, higher than rn
  { id: 'perf',  label: 'Performance',    x: 84, y: 32 },   // far-right (kept off edge)
  { id: 'auth',  label: 'Secure Auth',    x: 78, y: 56 },   // tucked inward
  { id: 'qa',    label: 'QA & Testing',   x: 82, y: 84 },   // lower-right
];

// Safe bounds keep the (centered, nowrap) labels from clipping at the
// viewport edges even after jitter is applied.
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const X_MIN = 13;
const X_MAX = 84;
const Y_MIN = 12;
const Y_MAX = 86;

// Larger jitter + varied magnitudes for a more organic, hand-stamped feel.
// Re-seed the PRNG (the integer below) to remix the entire layout.
const SKILL_NODES = (() => {
  const rng = mulberry32(8741);
  return SKILL_BASE.map((node) => ({
    ...node,
    x: clamp(node.x + (rng() - 0.5) * 7, X_MIN, X_MAX),  // ±3.5% jitter, clamped
    y: clamp(node.y + (rng() - 0.5) * 6, Y_MIN, Y_MAX),  // ±3% jitter, clamped
    size: 5 + rng() * 8,                  // 5–13px core (wider range)
    brightness: 0.72 + rng() * 0.28,      // 0.72–1
  }));
})();

const findNode = (id) => SKILL_NODES.find((n) => n.id === id);

// Two clusters with deliberately different edge counts and topologies so
// they never read as "the same constellation, mirrored". Left is dense
// (5 edges with cross-braces); right is a sparser, more open chain.
const CONSTELLATION_EDGES = [
  // Left — dense kite + diagonals
  ['rn', 'ios'],
  ['ios', 'ts'],
  ['ts', 'ai'],
  ['rn', 'ts'],   // long diagonal brace
  ['ios', 'ai'],  // cross-brace

  // Right — sparse, irregular open chain (no closed shape)
  ['arch', 'perf'],
  ['perf', 'auth'],
  ['auth', 'qa'],
];

const SkillNode = ({ node, index }) => (
  <motion.button
    type="button"
    className="skill-node"
    style={{
      left: `${node.x}%`,
      top: `${node.y}%`,
      '--star-size': `${node.size}px`,
      '--star-glow': `${node.size * 3.6}px`,
      '--star-ray': `${Math.max(28, node.size * 4.2)}px`,
      '--star-opacity': node.brightness,
    }}
    initial={{ opacity: 0, scale: 0.4 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 1.0 + index * 0.12, ease: easeOut }}
    whileHover={{ scale: 1.08 }}
    onHoverStart={() => sound.hover(0.6)}
    aria-label={node.label}
  >
    <span className="skill-node-star">
      <span className="skill-node-star-glow" />
      <span className="skill-node-star-ray skill-node-star-ray-h" />
      <span className="skill-node-star-ray skill-node-star-ray-v" />
      <span className="skill-node-star-core" />
    </span>
    <span className="skill-node-label">{node.label}</span>
  </motion.button>
);

const Constellation = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 22, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 22, mass: 0.6 });

  useEffect(() => {
    const handler = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  const backX = useTransform(smoothX, (v) => v * 10);
  const backY = useTransform(smoothY, (v) => v * 10);
  const midX = useTransform(smoothX, (v) => v * 24);
  const midY = useTransform(smoothY, (v) => v * 24);
  const frontX = useTransform(smoothX, (v) => v * 38);
  const frontY = useTransform(smoothY, (v) => v * 38);

  return (
    <div className="constellation-field" aria-hidden="false">
      <div className="nebula nebula-violet" aria-hidden="true" />
      <div className="nebula nebula-amber" aria-hidden="true" />
      <div className="nebula nebula-deep" aria-hidden="true" />

      <motion.div className="constellation-layer" style={{ x: backX, y: backY }}>
        {BG_STARS.map((star, i) => (
          <span
            key={i}
            className={`bg-star bg-star-${star.tint}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              '--star-opacity': star.brightness,
              animationDelay: `${star.twinkleDelay}s`,
              animationDuration: `${star.twinkleDuration}s`,
            }}
          />
        ))}
      </motion.div>

      <motion.svg
        className="constellation-layer constellation-lines"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ x: midX, y: midY }}
      >
        {CONSTELLATION_EDGES.map(([fromId, toId], i) => {
          const from = findNode(fromId);
          const to = findNode(toId);
          if (!from || !to) return null;
          return (
            <motion.path
              key={`${fromId}-${toId}`}
              d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
              fill="none"
              stroke="rgba(232, 218, 195, 0.26)"
              strokeWidth="0.08"
              strokeDasharray="0.45 0.55"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 1.4, delay: 1.1 + i * 0.12, ease: easeOut },
                opacity: { duration: 0.7, delay: 1.1 + i * 0.12 },
              }}
            />
          );
        })}
      </motion.svg>

      <motion.div className="constellation-layer" style={{ x: frontX, y: frontY }}>
        {SKILL_NODES.map((node, i) => (
          <SkillNode key={node.id} node={node} index={i} />
        ))}
      </motion.div>

      <div className="shooting-star shooting-star-1" />
      <div className="shooting-star shooting-star-2" />
      <div className="shooting-star shooting-star-3" />
    </div>
  );
};

export default Constellation;
