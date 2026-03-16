import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import heroPortrait from '../../assets/hero-portrait-cutout.png';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="hero-dot" />
            <span>Senior React Native Engineer</span>
          </div>
          <h1 className="hero-title">
            I craft calm, high‑performing
            {' '}
            <span className="hero-highlight">mobile experiences</span>
            {' '}
            that scale.
          </h1>
          <p className="hero-subtitle">
            I help teams ship secure, reliable React Native apps—optimizing performance, simplifying
            architecture, and weaving AI‑powered workflows into everyday engineering.
          </p>
          <div className="hero-cta-row">
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link to="/resume" className="btn-ghost">
              View Full Resume
            </Link>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-block">
              <span>Experience</span>
              <strong>5+ years in React Native, QA‑driven</strong>
            </div>
            <div className="hero-meta-block">
              <span>Focus</span>
              <strong>Performance, architecture, secure auth</strong>
            </div>
            <div className="hero-meta-block">
              <span>Location</span>
              <strong>Bengaluru, India</strong>
            </div>
          </div>
        </div>
        <aside className="hero-card">
          <div className="hero-orbit" />
          <div className="hero-card-top">
            {/* <div className="hero-card-slot" /> */}
          
            <img src={heroPortrait} alt="Lokendra Singh" className="hero-photo hero-photo-floating" />
          </div>
          <div className="hero-card-bottom">
         
            <div className="hero-card-body">
                <div className="hero-card-tag">
              <span>Available for opportunities</span>
            </div>
              <h3>Engineering with empathy and precision</h3>
              <p>
                Blending React Native, secure architecture, and QA‑driven thinking to ship calm,
                high‑performing mobile apps that feel great in hand.
              </p>
              <div className="hero-pill-row">
                <span className="hero-pill">React Native</span>
                <span className="hero-pill">Architecture</span>
                <span className="hero-pill">Performance</span>
                <span className="hero-pill">AI Workflows</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
