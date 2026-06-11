import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../../data/storyData';
import { fadeUp, staggerContainer } from '../../utils/motion';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-12%' });

  return (
    <section id="projects" className="story-section story-projects" ref={ref}>
      <div className="story-section-inner">
        <motion.div
          className="story-section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.12)}
        >
          <motion.span className="story-chapter" variants={fadeUp}>
            Chapter 03
          </motion.span>
          <motion.h2 className="story-section-title" variants={fadeUp}>
            <span>Selected</span>
            <span className="story-title-accent"> projects</span>
          </motion.h2>
          <motion.p className="story-section-subtitle" variants={fadeUp}>
            Enterprise platforms, learning apps, and social products — each built
            with performance, security, and scale in mind.
          </motion.p>
        </motion.div>

        <motion.div
          className="story-projects-list"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.1, 0.25)}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="story-project-card"
              variants={fadeUp}
              whileHover={{ x: 8, transition: { duration: 0.35 } }}
            >
              <div className="story-project-index">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="story-project-body">
                <div className="story-project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="story-project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="story-project-title">{project.title}</h3>
                <p className="story-project-subtitle">{project.subtitle}</p>
                <p className="story-project-desc">{project.description}</p>
                <ul className="story-project-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
