import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { hobbies } from '../../data/storyData';
import { fadeUp, staggerContainer } from '../../utils/motion';

const HobbiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-12%' });

  return (
    <section id="hobbies" className="story-section story-hobbies" ref={ref}>
      <div className="story-section-inner">
        <motion.div
          className="story-section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.12)}
        >
          <motion.span className="story-chapter" variants={fadeUp}>
            Chapter 04 · The end
          </motion.span>
          <motion.h2 className="story-section-title" variants={fadeUp}>
            <span>Beyond</span>
            <span className="story-title-accent"> the code</span>
          </motion.h2>
          <motion.p className="story-section-subtitle" variants={fadeUp}>
            What keeps me curious, grounded, and inspired when I&apos;m not shipping
            the next release.
          </motion.p>
        </motion.div>

        <motion.div
          className="story-hobbies-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.08, 0.3)}
        >
          {hobbies.map((hobby) => (
            <motion.article
              key={hobby.id}
              className="story-hobby-card"
              variants={fadeUp}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <span className="story-hobby-emoji" aria-hidden="true">
                {hobby.emoji}
              </span>
              <h3 className="story-hobby-name">{hobby.name}</h3>
              <p className="story-hobby-desc">{hobby.description}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.footer
          className="story-outro"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <p className="story-outro-text">
            Let&apos;s build something remarkable together.
          </p>
          <div className="story-outro-links">
            <a href="mailto:lokendras12@gmail.com" className="story-cta">
              Get in touch
            </a>
            <Link to="/resume" className="story-cta story-cta-ghost">
              Full resume
            </Link>
          </div>
          <p className="story-copyright">
            &copy; {new Date().getFullYear()} Lokendra Singh
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default HobbiesSection;
