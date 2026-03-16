import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to my Portfolio</h1>
        <p>A showcase of my skills, projects, and experience.</p>
        <Link to="/resume" className="btn">View My Resume</Link>
      </div>
    </div>
  );
};

export default HomePage;
