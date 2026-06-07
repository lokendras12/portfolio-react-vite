import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import IntroLoader from './components/intro/IntroLoader';
import IntroHero from './components/intro/IntroHero';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import { IntroContext } from './contexts/IntroContext';
import { sound } from './utils/sound';

const SESSION_KEY = 'intro-shown';

const hasSeenIntro = () => {
  if (typeof window === 'undefined') return false;
  try {
    return Boolean(window.sessionStorage.getItem(SESSION_KEY));
  } catch {
    return false;
  }
};

const markIntroSeen = () => {
  try {
    window.sessionStorage.setItem(SESSION_KEY, '1');
  } catch {
    // ignore
  }
};

function App() {
  const [introPhase, setIntroPhase] = useState(() =>
    hasSeenIntro() ? 'done' : 'counting',
  );

  useEffect(() => {
    if (introPhase !== 'done') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [introPhase]);

  const handleLoaderComplete = () => {
    setIntroPhase('hero');
  };

  const handleHeroContinue = () => {
    markIntroSeen();
    setIntroPhase('done');
  };

  const replay = () => {
    sound.primeContext();
    window.scrollTo({ top: 0, behavior: 'auto' });
    setIntroPhase('typing');
  };

  const contextValue = {
    ready: introPhase === 'done',
    replay,
  };

  const isLoading = introPhase === 'counting' || introPhase === 'typing';

  return (
    <IntroContext.Provider value={contextValue}>
      <Router basename="/portfolio-react-vite">
        <AnimatePresence mode="wait">
          {isLoading && (
            <IntroLoader
              key={`loader-${introPhase}`}
              startPhase={introPhase}
              onComplete={handleLoaderComplete}
            />
          )}
          {introPhase === 'hero' && (
            <IntroHero key="hero" onContinue={handleHeroContinue} />
          )}
        </AnimatePresence>
        <div className={`App${introPhase === 'done' ? '' : ' app-locked'}`}>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </IntroContext.Provider>
  );
}

export default App;
