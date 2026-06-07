import React, { useEffect } from 'react';

import Header from '../components/Header';
import { sound } from '../utils/sound';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import './Resume.css';

const ResumePage = () => {
  useEffect(() => {
    const prime = () => sound.primeContext();
    window.addEventListener('pointerdown', prime, { once: true, passive: true });
    return () => window.removeEventListener('pointerdown', prime);
  }, []);

  return (
    <div className="resume-page">
      <Header />
      <div className="resume-divider" />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </div>
  );
};

export default ResumePage;
