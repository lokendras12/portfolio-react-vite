import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import { resumeCardHover } from '../utils/resumeSound';
import { useTiltGlare } from '../hooks/useTiltGlare';
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

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);

  // Scroll-bound 3D entrance, alternating swing direction per card
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.97', 'start 0.5'],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.4,
  });

  const side = index % 2 === 0 ? -1 : 1;
  const rotateX = useTransform(progress, [0, 1], [20, 0]);
  const rotateY = useTransform(progress, [0, 1], [10 * side, 0]);
  const y = useTransform(progress, [0, 1], [70, 0]);
  const scale = useTransform(progress, [0, 1], [0.95, 1]);
  const opacity = useTransform(progress, [0, 0.6, 1], [0, 0.85, 1]);

  const { reduceMotion, tiltStyle, glareStyle, onPointerMove, onPointerLeave } =
    useTiltGlare({ glareSize: 420 });

  return (
    <div className="project-stage" ref={ref}>
      <motion.div
        className="project-3d"
        style={reduceMotion ? undefined : { rotateX, rotateY, y, scale, opacity }}
      >
        <motion.article
          className="project-card"
          style={reduceMotion ? undefined : tiltStyle}
          onMouseEnter={resumeCardHover}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
        >
          <motion.span className="project-glare" style={glareStyle} aria-hidden="true" />
          <span className="project-ghost-index" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>

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
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="resume-section projects">
      <div className="resume-container">
        <motion.div
          className="resume-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="resume-eyebrow">Selected Work</span>
          <h2 className="resume-title">Key <em>Projects</em></h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
