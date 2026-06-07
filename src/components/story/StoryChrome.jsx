import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { storySections } from '../../data/storyData';
import { useActiveSection } from '../../hooks/useActiveSection';

const StoryChrome = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const sectionIds = storySections.map((s) => s.id);
  const activeId = useActiveSection(sectionIds);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  const progressWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const handleMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="story-progress">
        <motion.div className="story-progress-fill" style={{ width: progressWidth }} />
      </div>

      <nav className="story-dots" aria-label="Story sections">
        {storySections.map((section) => (
          <button
            key={section.id}
            type="button"
            className={`story-dot${activeId === section.id ? ' is-active' : ''}`}
            onClick={() => scrollTo(section.id)}
            aria-label={`Go to ${section.label}`}
            aria-current={activeId === section.id ? 'true' : undefined}
          >
            <span className="story-dot-label">{section.label}</span>
          </button>
        ))}
      </nav>

      <div className="story-hud" aria-hidden="true">
        <span>X {Math.round(cursor.x)}</span>
        <span>Y {Math.round(cursor.y)}</span>
        <span>
          {storySections.find((s) => s.id === activeId)?.label ?? 'Intro'}
        </span>
      </div>
    </>
  );
};

export default StoryChrome;
