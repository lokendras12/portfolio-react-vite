import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { storySections } from '../data/storyData';
import { useIntroReplay } from '../contexts/IntroContext';
import { useSoundMuted } from '../hooks/useSound';
import { sound } from '../utils/sound';
import './Navbar.css';

const SpeakerIcon = ({ muted }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 5 6 9H2v6h4l5 4z" />
    {muted ? (
      <>
        <line x1="22" y1="9" x2="16" y2="15" />
        <line x1="16" y1="9" x2="22" y2="15" />
      </>
    ) : (
      <>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </>
    )}
  </svg>
);

const ReplayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
  </svg>
);

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [muted, toggleMuted] = useSoundMuted();
  const replay = useIntroReplay();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    if (isHome) {
      sound.hover();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplay = () => {
    sound.click(0.6);
    replay();
  };

  return (
    <motion.nav
      className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar-inner">
        {isHome ? (
          <button
            type="button"
            className="navbar-brand"
            onClick={() => scrollTo('intro')}
          >
            Lokendra Singh
          </button>
        ) : (
          <Link to="/" className="navbar-brand">
            Lokendra Singh
          </Link>
        )}

        <ul className="navbar-nav">
          {isHome ? (
            storySections.map((section) => (
              <li key={section.id} className="nav-item">
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => scrollTo(section.id)}
                  onMouseEnter={() => sound.hover(0.4)}
                >
                  {section.label}
                </button>
              </li>
            ))
          ) : (
            <>
              <li className="nav-item">
                <Link to="/" className="nav-link">Story</Link>
              </li>
              <li className="nav-item">
                <Link to="/resume" className="nav-link">Resume</Link>
              </li>
            </>
          )}
        </ul>

        <div className="navbar-actions">
          {isHome && (
            <button
              type="button"
              className="navbar-icon-btn"
              onClick={handleReplay}
              aria-label="Replay intro"
              title="Replay intro"
            >
              <ReplayIcon />
            </button>
          )}
          <button
            type="button"
            className={`navbar-icon-btn${muted ? '' : ' navbar-icon-btn-active'}`}
            onClick={toggleMuted}
            aria-label={muted ? 'Enable sound' : 'Mute sound'}
            title={muted ? 'Enable sound' : 'Mute sound'}
          >
            <SpeakerIcon muted={muted} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
