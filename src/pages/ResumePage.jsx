import React from 'react';

import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import './Resume.css';

const ResumePage = () => {
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
