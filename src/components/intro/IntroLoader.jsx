import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { sound } from '../../utils/sound';
import './IntroLoader.css';

const TYPED_TEXT = "Hi, I'm Lokendra Singh.";
const COUNT_DURATION = 1600;
const HOLD_AFTER_COUNT = 350;
const TYPING_SPEED = 70;
const HOLD_AFTER_TYPING = 900;

const easeOut = [0.22, 1, 0.36, 1];

const IntroLoader = ({ startPhase = 'counting', onComplete }) => {
  const [phase, setPhase] = useState(startPhase);
  const [count, setCount] = useState(startPhase === 'typing' ? 100 : 0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (phase !== 'counting') return;
    sound.whoosh(0.5);

    const start = performance.now();
    let frameId;
    let lastTickAt = -1;

    const tick = (now) => {
      const progress = Math.min((now - start) / COUNT_DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * 100);
      setCount(value);

      const bucket = Math.floor(value / 10);
      if (bucket !== lastTickAt) {
        lastTickAt = bucket;
        sound.tick(0.5);
      }

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          sound.whoosh(0.5);
          setPhase('typing');
        }, HOLD_AFTER_COUNT);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'typing') return;

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      const next = TYPED_TEXT.slice(0, index);
      setTyped(next);
      const lastChar = next[next.length - 1];
      if (lastChar && lastChar !== ' ') sound.key(0.7);

      if (index >= TYPED_TEXT.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, HOLD_AFTER_TYPING);
      }
    }, TYPING_SPEED);

    return () => clearInterval(interval);
  }, [phase, onComplete]);

  return (
    <motion.div
      className="intro-loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      <motion.div
        className="intro-grain"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.2 }}
      />

      <header className="intro-top">
        <motion.span
          className="intro-mark"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          LS · Portfolio
        </motion.span>
        <motion.span
          className="intro-meta"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
        >
          {new Date().getFullYear()} · Bengaluru
        </motion.span>
      </header>

      <div className="intro-stage">
        <AnimatePresence mode="wait">
          {phase === 'counting' && (
            <motion.div
              key="counter"
              className="intro-counter-block"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: easeOut }}
            >
              <span className="intro-counter-label">Loading</span>
              <span className="intro-counter">
                <span className="intro-counter-num">
                  {String(count).padStart(3, '0')}
                </span>
                <span className="intro-counter-pct">%</span>
              </span>
            </motion.div>
          )}

          {phase === 'typing' && (
            <motion.div
              key="typing"
              className="intro-typing-block"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: easeOut }}
            >
              <span className="intro-typing-label">Welcome</span>
              <h1 className="intro-typing">
                {typed}
                <span className="intro-caret" aria-hidden="true" />
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="intro-bar-wrap" aria-hidden="true">
        <motion.div
          className="intro-bar"
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: phase === 'counting' ? count / 100 : 1,
          }}
          transition={{ duration: 0.2, ease: 'linear' }}
        />
      </div>

      <footer className="intro-bottom">
        <span className="intro-tag">
          <span className="intro-tag-dot" />
          {phase === 'counting' ? 'Preparing the stage' : 'Curtain rising'}
        </span>
        <span className="intro-tag-right">Senior Mobile Engineer · React Native</span>
      </footer>
    </motion.div>
  );
};

export default IntroLoader;
