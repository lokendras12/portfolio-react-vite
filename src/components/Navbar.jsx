import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function ScrollProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      if (barRef.current) {
        barRef.current.style.width = `${Math.max(0, Math.min(1, progress)) * 100}%`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-bar-bg">
      <div className="scroll-progress-bar" ref={barRef} />
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Lokendra Singh</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-link">Resume</Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-link">Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
        </ul>
        <div className="navbar-progress-container">
          <ScrollProgressBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
