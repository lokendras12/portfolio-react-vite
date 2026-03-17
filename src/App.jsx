import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import MouseTrail from './components/MouseTrail';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <Router basename="/portfolio-react-vite">
      <div className="App">
        <MouseTrail />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 Lokendra Singh. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
