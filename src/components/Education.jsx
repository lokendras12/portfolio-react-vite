import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import { resumeCardHover } from '../utils/resumeSound';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="resume-section education">
      <motion.div
        className="resume-container"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="resume-head">
          <span className="resume-eyebrow">Foundation</span>
          <h2 className="resume-title">Education</h2>
        </div>

        <div className="resume-card education-item" onMouseEnter={resumeCardHover}>
          <div className="education-body">
            <h3 className="education-degree">Computer Science &amp; Engineering</h3>
            <p className="education-school">Lovely Professional University · Jalandhar, India</p>
          </div>
          <span className="education-years">2015 – 2019</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
