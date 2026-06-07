import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/motion';
import './Experience.css';

const roles = [
  {
    company: 'Cigna Healthcare',
    title: 'Software Engineering Analyst',
    date: 'Aug 2024 – Present',
    location: 'Bengaluru, India',
    points: [
      'Leading architecture discussions with product, backend, and security teams to design scalable React Native mobile applications for enterprise healthcare solutions.',
      'Implemented secure authentication mechanisms, including Biometrics and Multi-Factor Authentication (MFA), improving authentication reliability and reducing unauthorized access risks.',
      'Improved application performance by 15% through optimized rendering, reusable component architecture, and efficient state management strategies.',
      'Reduced production downtime by 10% by proactively identifying deployment issues and improving release stability across environments.',
      'Introduced Generative AI-assisted workflows using Cursor, accelerating development productivity and improving engineering efficiency across the team.',
      'Acted as the front-facing presenter for technical demos, feature walkthroughs, and architecture discussions across engineering and stakeholder groups.',
      'Leveraged Firebase and Dynatrace for crash analysis, production monitoring, and performance optimization, reducing debugging turnaround time significantly.',
      'Contributed to platform-level improvements and reusable engineering standards, improving development consistency and maintainability across projects.',
      'Conducted knowledge-sharing sessions and mentored developers on React Native best practices, debugging strategies, and scalable architecture approaches.',
      'Designed and drove mobile architecture and system design strategies for enterprise React Native applications, ensuring scalability, modularity, and cross-platform best practices.',
      'Designed and maintained CI/CD pipelines for React Native mobile applications, automating build, test, and deployment workflows to reduce release cycle time by 30%.',
      'Influenced Agile/Scrum best practices, driving process improvements that increased sprint delivery efficiency by 20% through refined estimation and streamlined workflows.',
      'Wrote and maintained comprehensive unit and integration test suites using Jest, achieving 80%+ code coverage across React Native application modules.',
      'Developed custom native modules in Kotlin and Java to bridge native-level functionality, enabling platform-specific configurations and seamless JS-to-native communication.',
      'Diagnosed and resolved memory leaks and performance bottlenecks using Xcode Instruments, Android Profiler, and Chrome DevTools — optimizing image caching, FlatList recycling, and object retention to eliminate out-of-memory crashes on low-end devices.',
    ],
  },
  {
    company: 'Microland',
    title: 'Senior Developer – Applications',
    date: 'Sep 2022 – May 2024',
    location: 'Bengaluru, India',
    points: [
      'Developed and enhanced MicrolandOne, an enterprise collaboration platform used by 4000+ users to improve internal communication and productivity.',
      'Built complex React Native modules, including mentions, hashtags, deep linking, secure WebViews, screenshot prevention, and chat integrations.',
      'Implemented fraud detection and simulator detection mechanisms, strengthening mobile application security and reliability.',
      'Improved application responsiveness and rendering efficiency by 10% through code refactoring, optimization techniques, and efficient Redux state management.',
      'Reduced production issue resolution time by actively collaborating with cross-functional teams during deployments and release cycles.',
      'Led technical demos and stakeholder walkthroughs explaining architecture decisions, implementation strategies, and feature capabilities.',
      'Participated in deployment management, code reviews, debugging production issues, and Android/iOS release coordination.',
      'Implemented robust unit and integration test coverage using Jest, maintaining 90%+ code coverage across React Native modules.',
      'Integrated CodePush for over-the-air React Native updates, enabling rapid JS bundle deployments without full app store release cycles and reducing time-to-fix for critical bugs.',
    ],
  },
  {
    company: 'Codewave Technologies',
    title: 'Software Engineer',
    date: 'Nov 2020 – Jul 2022',
    location: 'Bengaluru, India',
    points: [
      'Developed scalable React and React Native applications for multiple client projects using modern JavaScript and TypeScript ecosystems.',
      'Built reusable component libraries, custom hooks, and shared architecture templates, improving development speed by 30% across projects.',
      'Implemented complex UI interactions and optimized rendering performance using Lottie animations and modern UI optimization techniques.',
      'Collaborated with designers and backend teams to convert product requirements into scalable, production-ready applications.',
      'Developed reusable state management solutions using Redux and Context API, reducing duplicate implementation efforts across teams.',
      'Improved maintainability and onboarding efficiency by establishing reusable coding standards and architecture practices.',
    ],
  },
  {
    company: 'IOR Moblty',
    title: 'QA Automation Engineer',
    date: 'Mar 2019 – Nov 2019',
    location: 'Jalandhar, India',
    points: [
      'Developed automated testing frameworks and scripts using Selenium, Java, and WebDriver for mobile and web applications.',
      'Reduced manual testing efforts and improved deployment efficiency by 15% through automation-driven workflows and bug reporting systems.',
      'Collaborated closely with developers to identify, debug, and resolve critical production issues before release cycles.',
      'Built strong expertise in debugging, edge-case analysis, and quality assurance, contributing significantly to long-term engineering quality practices.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="resume-section experience">
      <motion.div
        className="resume-container"
        variants={staggerContainer(0.14)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="resume-head" variants={fadeUp}>
          <span className="resume-eyebrow">Career</span>
          <h2 className="resume-title">Professional <em>Experience</em></h2>
        </motion.div>

        <div className="timeline">
          {roles.map((role) => (
            <motion.article className="timeline-item" key={role.company} variants={fadeUp}>
              <span className="timeline-node" aria-hidden="true" />
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-date">{role.date}</span>
                  <span className="timeline-meta-dot" />
                  <span className="timeline-location">{role.location}</span>
                </div>
                <h3 className="timeline-role">{role.title}</h3>
                <p className="timeline-company">{role.company}</p>
                <ul className="timeline-points">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
