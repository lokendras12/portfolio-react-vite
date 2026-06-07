import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../data/storyData';
import { fadeUp, staggerContainer } from '../../utils/motion';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section id="skills" className="story-section story-skills" ref={ref}>
      <div className="story-section-inner">
        <motion.div
          className="story-section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.12)}
        >
          <motion.span className="story-chapter" variants={fadeUp}>
            Chapter 02
          </motion.span>
          <motion.h2 className="story-section-title" variants={fadeUp}>
            <span>Skills &</span>
            <span className="story-title-accent"> expertise</span>
          </motion.h2>
          <motion.p className="story-section-subtitle" variants={fadeUp}>
            Six pillars of craft — from architecture to AI — honed over 5+ years
            building mobile products for enterprise and consumer teams.
          </motion.p>
        </motion.div>

        <motion.div
          className="story-skills-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.08, 0.3)}
        >
          {skills.map((skill, index) => (
            <motion.article
              key={skill.id}
              className="story-skill-card"
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="story-skill-index">{String(index + 1).padStart(2, '0')}</div>
              <span className="story-skill-tag">{skill.tag}</span>
              <h3 className="story-skill-name">{skill.name}</h3>
              <p className="story-skill-desc">{skill.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
