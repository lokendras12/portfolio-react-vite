import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <footer className="footer">
        <p>&copy; 2024 Lokendra Singh. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
