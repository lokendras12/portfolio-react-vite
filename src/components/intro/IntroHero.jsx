import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { sound } from '../../utils/sound';
import Constellation from './Constellation';
import './IntroHero.css';

const easeOut = [0.22, 1, 0.36, 1];

const IntroHero = ({ onContinue }) => {
  useEffect(() => {
    sound.chime();
  }, []);

  const handleContinue = () => {
    sound.click();
    sound.whoosh(0.7);
    onContinue();
  };

  return (
    <motion.div
      className="intro-hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
      transition={{ duration: 0.9, ease: easeOut }}
    >
      <Constellation />

      <div className="intro-hero-grain" aria-hidden="true" />

      <span className="intro-hero-corner intro-hero-corner-tl">+</span>
      <span className="intro-hero-corner intro-hero-corner-tr">+</span>
      <span className="intro-hero-corner intro-hero-corner-bl">+</span>
      <span className="intro-hero-corner intro-hero-corner-br">+</span>

      <header className="intro-hero-top">
        <motion.div
          className="intro-hero-mark"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
        >
          <svg viewBox="0 0 28 18" width="28" height="18" aria-hidden="true">
            <path d="M2 16 L10 2 L18 16 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <path d="M10 16 L18 2 L26 16" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </motion.div>
      </header>

      <div className="intro-hero-content">
        <motion.h1
          className="intro-hero-headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: easeOut }}
        >
          <span>
            Mobile <span className="intro-hero-x">×</span> Native
          </span>
          <span>for performance,</span>
          <span className="intro-hero-headline-accent">scale &amp; security</span>
        </motion.h1>

        <motion.p
          className="intro-hero-subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: easeOut }}
        >
          I build calm, high-performing React Native apps for teams where every
          release matters — from enterprise platforms to consumer products.
        </motion.p>

        <motion.div
          className="intro-hero-cta-frame"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: easeOut }}
        >
          <span className="intro-hero-cta-tick intro-hero-cta-tick-tl">+</span>
          <span className="intro-hero-cta-tick intro-hero-cta-tick-tr">+</span>
          <span className="intro-hero-cta-tick intro-hero-cta-tick-bl">+</span>
          <span className="intro-hero-cta-tick intro-hero-cta-tick-br">+</span>
          <button
            type="button"
            className="intro-hero-cta"
            onClick={handleContinue}
            onMouseEnter={() => sound.hover()}
          >
            <span>Enter the story</span>
            <span className="intro-hero-cta-arrow">→</span>
          </button>
        </motion.div>
      </div>

      <motion.div
        className="intro-hero-meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <span>Lokendra Singh</span>
        <span className="intro-hero-meta-dot" />
        <span>Senior Mobile Engineer</span>
        <span className="intro-hero-meta-dot" />
        <span>Bengaluru, IN</span>
      </motion.div>
    </motion.div>
  );
};

export default IntroHero;
