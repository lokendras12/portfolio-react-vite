import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/motion';
import { resumeCardHover } from '../utils/resumeSound';
import './Projects.css';

const projects = [
  {
    title: 'MicrolandOne',
    subtitle: 'Enterprise Collaboration Platform',
    blurb: 'An enterprise mobile platform used by 4000+ users for internal collaboration and productivity.',
    features: [
      'Real-time chat and messaging with mentions and hashtags',
      'Deep linking and secure WebViews for sensitive content',
      'Screenshot protection for confidential information',
      'Integration with enterprise authentication and SSO',
      'Push notifications and activity feeds',
    ],
    stack: ['React Native', 'Node.js', 'Secure REST APIs'],
  },
  {
    title: 'RankPedia',
    subtitle: 'Learning Platform',
    blurb: 'A mobile learning application supporting interactive education and content delivery.',
    features: [
      'Video streaming and playback for courses',
      'Assignments, quizzes, and progress tracking',
      'Mathematical equation rendering inside WebViews',
      'Secure user authentication and profile management',
      'Push notifications for reminders and updates',
    ],
    stack: ['React Native', 'Node.js', 'Cloud Content APIs'],
  },
  {
    title: 'AcadsHR',
    subtitle: 'Job Portal',
    blurb: 'A comprehensive job portal designed for seamless job search, tracking, and listing.',
    features: [
      'Advanced job search and filtering',
      'Job tracking dashboard for candidates',
      'Dynamic job listings with real-time updates',
      'Interview process tracking and scheduling',
      'Secure authentication and user management',
    ],
    stack: ['React', 'Node.js', 'REST APIs'],
  },
  {
    title: 'BoxSoccer',
    subtitle: 'Soccer Social Media App',
    blurb: 'A social platform for soccer enthusiasts to register for matches, form teams, and engage with match content.',
    features: [
      'User registration and team formation for local matches',
      'Recorded match highlights with video streaming (Vimeo)',
      'Interactive social features: comments, likes, and sharing',
      'Admin panel for uploading and managing match videos',
      'Push notifications for match updates and social activity',
    ],
    stack: ['React Native', 'Node.js', 'Vimeo APIs'],
  },
  {
    title: 'Buzygo',
    subtitle: 'Art, Product & Craft Marketplace',
    blurb: 'A platform connecting artists, vendors, and consumers for craft, art, and product promotion.',
    features: [
      'Vendor profiles for showcasing crafts, art, and products',
      'Consumer browsing and discovery of creative listings',
      'Direct messaging between vendors and consumers',
      'Order placement and tracking for crafts and products',
      'Secure authentication and profile management',
    ],
    stack: ['React Native', 'Node.js', 'Messaging APIs'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="resume-section projects">
      <motion.div
        className="resume-container"
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="resume-head" variants={fadeUp}>
          <span className="resume-eyebrow">Selected Work</span>
          <h2 className="resume-title">Key <em>Projects</em></h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.article
              className="resume-card project-card"
              key={project.title}
              variants={fadeUp}
              onMouseEnter={resumeCardHover}
            >
              <div className="project-card-head">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
              <p className="project-blurb">{project.blurb}</p>
              <ul className="project-features">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span className="project-tag" key={tech}>{tech}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
