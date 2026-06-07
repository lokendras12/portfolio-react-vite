import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';
import heroPortrait from '../../assets/hero-portrait-cutout.png';

const TypingEffect = ({ text, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(displayText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(onComplete, 1000); // Wait a second before firing onComplete
    }
  }, [currentIndex, text, displayText, onComplete]);

  return <span>{displayText}</span>;
};

const HomePage = () => {
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });
  const cardTopRef = useRef(null);
  const [typingComplete, setTypingComplete] = useState(false);
  const [showStop, setShowStop] = useState(true);
  const navigate = useNavigate();

  const pages = ['/skills', '/projects', '/resume'];
  let pageIndex = 0;
  let intervalId = null;

  const startAutoNavigation = () => {
    intervalId = setInterval(() => {
      if (pageIndex < pages.length) {
        navigate(pages[pageIndex]);
        pageIndex++;
      } else {
        clearInterval(intervalId);
        setShowStop(false);
      }
    }, 3000);
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setShowStop(false);
  };
  
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
          <h1 className="hero-title">
            <TypingEffect text="Hi, I'm Lokendra Singh." onComplete={() => {
              setTypingComplete(true);
              startAutoNavigation();
            }} />
          </h1>
          {typingComplete && (
            <>
              <p className="hero-subtitle">
                I craft calm, high‑performing mobile experiences that scale. I help teams ship secure, reliable React Native apps—optimizing performance, simplifying architecture, and weaving AI‑powered workflows into everyday engineering.
              </p>
              <div className="hero-cta-row">
                <Link to="/projects" className="btn-primary">
                  View Projects
                </Link>
                <Link to="/resume" className="btn-ghost">
                  View Full Resume
                </Link>
                {showStop && <button onClick={handleStop} className="btn-secondary">Stop</button>}
              </div>
            </>
          )}
        </div>
        <aside className="hero-card">
          <div
            className="hero-card-top"
            ref={cardTopRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={heroPortrait}
              alt="Lokendra Singh"
              className="hero-photo hero-photo-floating"
            />
            <div
              className="hero-light-overlay"
              style={{
                background: `radial-gradient(circle at ${lightPos.x}% ${lightPos.y}%, rgba(100, 200, 255, 0.08) 0%, transparent 50%)`,
              }}
            />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
