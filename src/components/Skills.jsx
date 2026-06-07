import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/motion';
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

const Skills = () => {
  return (
    <section id="skills" className="resume-section skills">
      <motion.div
        className="resume-container"
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="resume-head" variants={fadeUp}>
          <span className="resume-eyebrow">Capabilities</span>
          <h2 className="resume-title">Skills &amp; <em>Expertise</em></h2>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <motion.div className="resume-card skill-group" key={group.label} variants={fadeUp}>
              <h3 className="skill-group-label">{group.label}</h3>
              <p className="skill-group-value">{group.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
