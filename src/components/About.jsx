import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="resume-section about">
      <motion.div
        className="resume-container"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="resume-head">
          <span className="resume-eyebrow">Profile</span>
          <h2 className="resume-title">About</h2>
        </div>

        <div className="resume-card about-content">
          <p className="about-lede">
            I&apos;m a Senior React Native Engineer with 5+ years of experience building calm, resilient
            mobile applications for both enterprise and consumer products. I care deeply about clear
            architecture, predictable performance, and experiences that simply feel good in hand.
          </p>
          <p className="about-footnote">
            My work blends mobile engineering, performance tuning, and secure authentication
            (Biometrics, MFA) with a strong QA background and Generative AI workflows. I regularly lead
            demos, mentor developers, and partner closely with product, design, backend, and QA teams to
            ship features that are thoughtful, measurable, and reliable in production.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
