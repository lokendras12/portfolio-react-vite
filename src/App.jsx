import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Lokendra Singh</h1>
        <h2>Senior Mobile Engineer (React Native)</h2>
        <p>Bengaluru, India | +91 XXXXX XXXXX | <a href="mailto:forever.lokendra@gmail.com">forever.lokendra@gmail.com</a></p>
      </header>

      <section>
        <h3>Professional Summary</h3>
        <p>
          Senior React Native Engineer with 5+ years of experience building scalable mobile applications for enterprise and consumer platforms. Expertise in mobile architecture, performance optimization, secure authentication (Biometrics, MFA), and cross-platform engineering. Known for driving engineering productivity through Generative AI workflows, leading high‑visibility demos, mentoring developers, and influencing platform-level engineering practices. Strong cross-functional collaborator with experience working closely with product, design, backend, and QA teams.
        </p>
      </section>

      <section>
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
      </section>

      <section>
        <h3>Technical Skills</h3>
        <p><strong>Mobile Development:</strong> React Native, React.js, Android, iOS, React Navigation, Deep Linking, Push Notifications</p>
        <p><strong>Architecture:</strong> Modular Architecture, Reusable Component Design, Scalable State Management</p>
        <p><strong>State Management:</strong> Redux, Context API, Custom Hooks</p>
        <p><strong>Security:</strong> Biometrics Authentication, MFA, Secure Token Handling</p>
        <p><strong>Analytics & Monitoring:</strong> Firebase Analytics, Dynatrace, Crash Monitoring, Performance Monitoring</p>
        <p><strong>AI Productivity:</strong> Cursor IDE, Generative AI Workflows, AI‑assisted development</p>
        <p><strong>Backend & APIs:</strong> REST APIs, Firebase, NestJS</p>
        <p><strong>Languages:</strong> JavaScript, TypeScript, ES6+</p>
        <p><strong>Tools:</strong> Xcode, Android Studio, VSCode, Git, Figma</p>
      </section>

      <section>
        <h3>Professional Experience</h3>
        <div className="job">
          <h4>Cigna Healthcare — Software Engineering Analyst | Aug 2024 – Present</h4>
          <ul>
            <li>Led architecture discussions with product, backend, and security teams to design scalable React Native mobile applications.</li>
            <li>Implemented secure authentication flows including Biometrics and Multi‑Factor Authentication (MFA).</li>
            <li>Improved application performance by 15% through optimized rendering and efficient state management.</li>
            <li>Adopted Generative AI tools (Cursor) and introduced best practices to improve engineering productivity.</li>
            <li>Used analytics tools such as Dynatrace and Firebase to monitor production performance and debug critical issues.</li>
            <li>Led engineering demos and presented technical solutions to cross-functional stakeholders.</li>
          </ul>
        </div>
        <div className="job">
          <h4>Microland — Senior Developer (Applications) | Sep 2022 – May 2024</h4>
          <ul>
            <li>Developed enterprise collaboration mobile platform used by 4000+ employees.</li>
            <li>Built complex UI features including mentions, hashtags, deep linking, chat integrations, and secure WebViews.</li>
            <li>Implemented security protections including fraud detection and simulator detection.</li>
            <li>Improved application performance by 10% through code refactoring and performance optimization.</li>
            <li>Participated in stakeholder discussions and technical demos explaining architecture and product features.</li>
          </ul>
        </div>
        <div className="job">
          <h4>Codewave Technologies — Software Engineer | Nov 2020 – Jul 2022</h4>
          <ul>
            <li>Developed scalable React and React Native applications using modern JavaScript frameworks.</li>
            <li>Built reusable component libraries and custom hooks improving development efficiency.</li>
            <li>Implemented complex UI animations using Lottie and optimized rendering performance.</li>
            <li>Created reusable project architecture templates improving development speed by 30%.</li>
          </ul>
        </div>
        <div className="job">
          <h4>IOR Mobility — QA Automation Engineer | Mar 2019 – Nov 2019</h4>
          <ul>
            <li>Developed automation test scripts using Selenium and WebDriver for web and mobile applications.</li>
            <li>Improved testing efficiency and release cycles through automation frameworks.</li>
            <li>Collaborated closely with developers to identify and fix critical issues before production deployment.</li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Key Projects</h3>
        <div className="project">
          <h4>MicrolandOne — Enterprise Collaboration Platform</h4>
          <p>Enterprise mobile platform used by 4000+ users enabling internal collaboration and productivity. Implemented mentions, hashtags, chat integrations, deep linking, secure WebViews, and screenshot protection.</p>
        </div>
        <div className="project">
          <h4>RankPedia — Learning Platform</h4>
          <p>Mobile learning application supporting video streaming, assignments, quizzes, and mathematical equation rendering inside WebViews.</p>
        </div>
      </section>

      <section>
        <h3>Education</h3>
        <p>B.Tech – Computer Science Engineering | Lovely Professional University | 2015 – 2019</p>
      </section>
    </div>
  );
}

export default App;
