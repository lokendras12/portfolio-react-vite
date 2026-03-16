import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Key Impact & Leadership</h3>
            <ul>
              <li>Improved mobile application performance by 15% through rendering optimizations, modular architecture, and efficient state management.</li>
              <li>Introduced Generative AI development workflows using Cursor, improving developer productivity and accelerating feature development.</li>
              <li>Acted as the primary presenter for engineering demos and architecture walkthroughs for larger teams and stakeholders.</li>
              <li>Led multiple knowledge-sharing sessions on React Native best practices, performance optimization, and development workflows.</li>
              <li>Served as a critical cross‑functional bridge between product, backend, QA, and design teams to ensure smooth feature delivery.</li>
              <li>Leveraged QA automation background to maintain exceptional attention to detail and improve release stability.</li>
              <li>Contributed to platform-level improvements and engineering standards within the mobile development team.</li>
              <li>Motivated and supported team members through mentorship, collaboration, and organizing team bonding initiatives.</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              <p><span>Mobile Development:</span> React Native, React.js, Android, iOS, React Navigation, Deep Linking, Push Notifications</p>
              <p><span>Architecture:</span> Modular Architecture, Reusable Component Design, Scalable State Management</p>
              <p><span>State Management:</span> Redux, Context API, Custom Hooks</p>
              <p><span>Security:</span> Biometrics Authentication, MFA, Secure Token Handling</p>
              <p><span>Analytics & Monitoring:</span> Firebase Analytics, Dynatrace, Crash Monitoring, Performance Monitoring</p>
              <p><span>AI Productivity:</span> Cursor IDE, Generative AI Workflows, AI‑assisted development</p>
              <p><span>Backend & APIs:</span> REST APIs, Firebase, NestJS</p>
              <p><span>Languages:</span> JavaScript, TypeScript, ES6+</p>
              <p><span>Tools:</span> Xcode, Android Studio, VSCode, Git, Figma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
