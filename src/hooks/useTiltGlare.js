import {
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion';

// Pointer-following 3D tilt + glare sheen for cards.
// Returns motion styles and pointer handlers to spread onto a motion element.
export const useTiltGlare = ({ maxTiltX = 4, maxTiltY = 5, glareSize = 460 } = {}) => {
  const reduceMotion = useReducedMotion();

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const sTiltX = useSpring(tiltX, { stiffness: 180, damping: 20, mass: 0.3 });
  const sTiltY = useSpring(tiltY, { stiffness: 180, damping: 20, mass: 0.3 });

  const glareX = useMotionValue(50);
  const glareY = useMotionValue(20);
  const glareOpacity = useMotionValue(0);
  const glare = useMotionTemplate`radial-gradient(${glareSize}px circle at ${glareX}% ${glareY}%, rgba(232, 218, 195, 0.09), transparent 62%)`;

  const onPointerMove = (e) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    tiltY.set((px - 0.5) * maxTiltY);
    tiltX.set((0.5 - py) * maxTiltX);
    glareX.set(px * 100);
    glareY.set(py * 100);
    glareOpacity.set(1);
  };

  const onPointerLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
    glareOpacity.set(0);
  };

  return {
    reduceMotion,
    tiltStyle: { rotateX: sTiltX, rotateY: sTiltY },
    glareStyle: { background: glare, opacity: glareOpacity },
    onPointerMove,
    onPointerLeave,
  };
};
