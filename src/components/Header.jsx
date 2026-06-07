import React from 'react';
import { motion } from 'framer-motion';
import { easeOut } from '../utils/motion';
import './Header.css';

const Header = () => {
  return (
    <header className="resume-header">
      <div className="resume-container">
        <motion.div
          className="resume-header-inner"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
        >
          <span className="resume-header-kicker">Curriculum Vitae</span>
          <h1 className="resume-header-name">Lokendra Singh</h1>
          <p className="resume-header-role">Senior Mobile Engineer · React Native</p>

          <div className="resume-header-contact">
            <a href="mailto:lokendras12@gmail.com" className="resume-header-link">
              lokendras12@gmail.com
            </a>
            <span className="resume-header-dot" />
            <a href="tel:+918837890243" className="resume-header-link">
              +91 88378 90243
            </a>
            <span className="resume-header-dot" />
            <span className="resume-header-loc">Bengaluru, India</span>
          </div>

          <div className="resume-header-links">
            <a
              href="https://www.linkedin.com/in/lokendras12"
              target="_blank"
              rel="noreferrer"
              className="resume-header-pill"
            >
              LinkedIn
            </a>
            <a href="/" className="resume-header-pill">
              Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
