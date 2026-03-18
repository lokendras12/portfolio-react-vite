import React from 'react';
import './SkillsPage.css';

const skills = [
  {
    name: 'React Native',
    description: `Expert in building scalable, high-performance mobile apps using React Native. Deep experience with navigation, state management, custom native modules, and optimizing for both iOS and Android. Skilled in integrating native APIs, handling device-specific challenges, and delivering pixel-perfect UI/UX.`
  },
  {
    name: 'Architecture & Design',
    description: `Strong background in designing robust app architectures. Experienced with modular codebases, dependency injection, clean separation of concerns, and scalable patterns for large teams. Proficient in refactoring legacy code, implementing best practices, and ensuring maintainability.`
  },
  {
    name: 'Performance Optimization',
    description: `Specialized in profiling, debugging, and optimizing mobile apps for speed and responsiveness. Familiar with memory management, reducing bundle size, lazy loading, and minimizing re-renders. Adept at using tools like Flipper, React DevTools, and native profilers.`
  },
  {
    name: 'Secure Authentication',
    description: `Experienced in implementing secure authentication flows, including OAuth, biometric login, and custom token management. Skilled in protecting sensitive data, handling session management, and integrating with enterprise SSO solutions.`
  },
  {
    name: 'AI Workflows',
    description: `Proficient in integrating AI-powered features into mobile apps. Experience with chatbots, recommendation engines, and workflow automation using cloud APIs and custom models. Able to design seamless user experiences around AI-driven functionality.`
  },
  {
    name: 'QA & Testing',
    description: `Advocate for QA-driven development. Skilled in writing unit, integration, and end-to-end tests using Jest, Detox, and Appium. Experienced in setting up CI/CD pipelines, automating test runs, and ensuring high code quality across releases.`
  },
];

const SkillsPage = () => (
  <section className="skills-page">
    <div className="container">
      <h2>Skills & Expertise</h2>
      <div className="skills-list">
        {skills.map(skill => (
          <div className="skill-card" key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsPage;
