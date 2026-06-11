import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import { resumeCardHover } from '../utils/resumeSound';
import { useTiltGlare } from '../hooks/useTiltGlare';
import './Skills.css';

const skillGroups = [
  {
    label: 'Core Expertise',
    value: 'React.js, React Native, Next.js, Mobile Application Development, Cross-platform Development, Enterprise Mobile Applications',
  },
  {
    label: 'Mobile',
    value: 'React Navigation, Redux, Context API, Custom Hooks, Deep Linking, Push Notifications, Biometrics Authentication, MFA, AsyncStorage, Secure Storage, WebViews, Lottie Animations, Firebase, App Performance Optimization, Native Modules, Turbo Modules, Expo, Reanimated',
  },
  {
    label: 'Web',
    value: 'REST APIs, Browser Internals, Performance Optimization, Accessibility, Security Best Practices, Responsive UI Development, Redux Toolkit, React Query, Tailwind CSS, SEO Optimization',
  },
  {
    label: 'Analytics & Monitoring',
    value: 'Firebase Analytics, Dynatrace, Production Monitoring, Crash Reporting, Performance Monitoring, User Analytics, Adobe Analytics',
  },
  {
    label: 'Leadership & Collaboration',
    value: 'Technical Demos, Knowledge Sharing Sessions, Team Mentoring, Stakeholder Communication, Team Bonding Activities, Cross-team Coordination, Technical Presentations, Problem Solving, Ownership & Delivery',
  },
  {
    label: 'Programming Languages',
    value: 'JavaScript, TypeScript, Java, ES6+',
  },
  {
    label: 'System & Engineering Practices',
    value: 'Monorepo Architecture (Nx), CI/CD Pipelines, Git & Version Control, Agile/Scrum Workflows, Platform-level Contributions, Cross-functional Collaboration, Code Reviews, Debugging & Crash Analysis, Firebase Crashlytics, Architecture Discussions, Scalable Component Design, System Design Fundamentals, Internationalization (i18n)',
  },
  {
    label: 'Cloud & Backend',
    value: 'AWS Fundamentals, NestJS, Backend APIs, BFF (Backend for Frontend), Microservices Architecture, API Gateway Concepts, Sidecars, Authentication & Authorization, Secure API Communication',
  },
  {
    label: 'AI & Productivity',
    value: 'Cursor AI, Generative AI-assisted Development, AI-powered Debugging, Engineering Productivity Workflows',
  },
];

const SkillCard = ({ group, index }) => {
  const ref = useRef(null);

  // Scroll-bound entrance: left-column cards swing in from the left,
  // right-column from the right, while standing up from a back-tilt.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.97', 'start 0.55'],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.4,
  });

  const side = index % 2 === 0 ? -1 : 1;
  const rotateX = useTransform(progress, [0, 1], [16, 0]);
  const rotateY = useTransform(progress, [0, 1], [9 * side, 0]);
  const y = useTransform(progress, [0, 1], [56, 0]);
  const scale = useTransform(progress, [0, 1], [0.96, 1]);
  const opacity = useTransform(progress, [0, 0.6, 1], [0, 0.85, 1]);

  const { reduceMotion, tiltStyle, glareStyle, onPointerMove, onPointerLeave } =
    useTiltGlare({ glareSize: 380 });

  const chips = group.value.split(', ');

  return (
    <div className="skill-stage" ref={ref}>
      <motion.div
        className="skill-3d"
        style={reduceMotion ? undefined : { rotateX, rotateY, y, scale, opacity }}
      >
        <motion.div
          className="skill-group"
          style={reduceMotion ? undefined : tiltStyle}
          onMouseEnter={resumeCardHover}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
        >
          <motion.span className="skill-glare" style={glareStyle} aria-hidden="true" />
          <div className="skill-group-head">
            <h3 className="skill-group-label">{group.label}</h3>
            <span className="skill-group-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <div className="skill-chips">
            {chips.map((chip) => (
              <span className="skill-chip" key={chip}>{chip}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="resume-section skills">
      <div className="resume-container">
        <motion.div
          className="resume-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="resume-eyebrow">Capabilities</span>
          <h2 className="resume-title">Skills &amp; <em>Expertise</em></h2>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.label} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
