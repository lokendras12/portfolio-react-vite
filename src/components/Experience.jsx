import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Cigna Healthcare — Software Engineering Analyst</h3>
              <p className="date">Aug 2024 – Present</p>
              <ul>
                <li>Led architecture discussions with product, backend, and security teams to design scalable React Native mobile applications.</li>
                <li>Implemented secure authentication flows including Biometrics and Multi‑Factor Authentication (MFA).</li>
                <li>Improved application performance by 15% through optimized rendering and efficient state management.</li>
                <li>Adopted Generative AI tools (Cursor) and introduced best practices to improve engineering productivity.</li>
                <li>Used analytics tools such as Dynatrace and Firebase to monitor production performance and debug critical issues.</li>
                <li>Led engineering demos and presented technical solutions to cross-functional stakeholders.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Microland — Senior Developer (Applications)</h3>
              <p className="date">Sep 2022 – May 2024</p>
              <ul>
                <li>Developed enterprise collaboration mobile platform used by 4000+ employees.</li>
                <li>Built complex UI features including mentions, hashtags, deep linking, chat integrations, and secure WebViews.</li>
                <li>Implemented security protections including fraud detection and simulator detection.</li>
                <li>Improved application performance by 10% through code refactoring and performance optimization.</li>
                <li>Participated in stakeholder discussions and technical demos explaining architecture and product features.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Codewave Technologies — Software Engineer</h3>
              <p className="date">Nov 2020 – Jul 2022</p>
              <ul>
                <li>Developed scalable React and React Native applications using modern JavaScript frameworks.</li>
                <li>Built reusable component libraries and custom hooks improving development efficiency.</li>
                <li>Implemented complex UI animations using Lottie and optimized rendering performance.</li>
                <li>Created reusable project architecture templates improving development speed by 30%.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>IOR Moblty — QA Automation Engineer</h3>
              <p className="date">Mar 2019 – Nov 2019</p>
              <ul>
                <li>Developed automation test scripts using Selenium and WebDriver for web and mobile applications.</li>
                <li>Improved testing efficiency and release cycles through automation frameworks.</li>
                <li>Collaborated closely with developers to identify and fix critical issues before production deployment.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
