import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About</h2>
        <div className="about-content">
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
      </div>
    </section>
  );
};

export default About;
