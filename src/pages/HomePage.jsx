import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import heroPortrait from '../../assets/hero-portrait-cutout.png';

const HomePage = () => {
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });
  const cardTopRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardTopRef.current) return;

    const rect = cardTopRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setLightPos({ x, y });
  };

  const handleMouseLeave = () => {
    setLightPos({ x: 50, y: 50 });
  };

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
          <div
            className="hero-card-top"
            ref={cardTopRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* <div className="hero-card-slot" /> */}

            <img
              src={heroPortrait}
              alt="Lokendra Singh"
              className="hero-photo hero-photo-floating"
              style={{
                filter: `drop-shadow(${lightPos.x - 50}px ${lightPos.y - 50}px 20px rgba(56, 189, 248, 0.5)) 
                         drop-shadow(${(lightPos.x - 50) * 0.3}px ${(lightPos.y - 50) * 0.3}px 10px rgba(0, 200, 255, 0.4))`,
              }}
            />
            <div
              className="hero-light-overlay"
              style={{
                background: `radial-gradient(circle at ${lightPos.x}% ${lightPos.y}%, rgba(100, 200, 255, 0.08) 0%, transparent 50%)`,
              }}
            />
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
