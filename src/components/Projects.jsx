import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Key Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>MicrolandOne — Enterprise Collaboration Platform</h3>
            <p>
              An enterprise mobile platform used by 4000+ users for internal collaboration and productivity. Key features:
              <ul>
                <li>Real-time chat and messaging with mentions and hashtags</li>
                <li>Deep linking and secure WebViews for sensitive content</li>
                <li>Screenshot protection for confidential information</li>
                <li>Integration with enterprise authentication and SSO</li>
                <li>Push notifications and activity feeds</li>
                <li>Robust performance and QA-driven development</li>
              </ul>
              Built with React Native, Node.js, and secure REST APIs for scalable enterprise deployment.
            </p>
          </div>
          <div className="project-card">
            <h3>RankPedia — Learning Platform</h3>
            <p>
              A mobile learning application supporting interactive education and content delivery. Key features:
              <ul>
                <li>Video streaming and playback for courses</li>
                <li>Assignments, quizzes, and progress tracking</li>
                <li>Mathematical equation rendering inside WebViews</li>
                <li>Secure user authentication and profile management</li>
                <li>Push notifications for reminders and updates</li>
                <li>Responsive UI for both students and educators</li>
              </ul>
              Built with React Native, Node.js, and integrated with cloud-based content APIs.
            </p>
          </div>
          <div className="project-card">
            <h3>AcadsHR – Job Portal</h3>
            <p>
              A comprehensive job portal designed for seamless job search, tracking, and listing. Features include:
              <ul>
                <li>Advanced job search and filtering</li>
                <li>Job tracking dashboard for candidates</li>
                <li>Dynamic job listings with real-time updates</li>
                <li>Interview process tracking and scheduling</li>
                <li>Secure authentication and user management</li>
                <li>Integration with HR workflows and notifications</li>
              </ul>
              Built with React, Node.js, and REST APIs for robust performance and scalability.
            </p>
          </div>
          <div className="project-card">
            <h3>BoxSoccer — Soccer Social Media App</h3>
            <p>
              A social media platform for soccer enthusiasts, enabling users to register for mini soccer matches, form teams, and engage with match content. Key features:
              <ul>
                <li>User registration and team formation for local matches</li>
                <li>Recorded match highlights with video streaming (Vimeo integration)</li>
                <li>Interactive social features: comments, likes, and sharing</li>
                <li>Admin panel for uploading and managing match videos</li>
                <li>Push notifications for match updates and social activity</li>
                <li>Secure authentication and user profile management</li>
                <li>Responsive UI for both players and fans</li>
              </ul>
              Built with React Native, Node.js, and Vimeo APIs for robust video streaming and social engagement.
            </p>
          </div>
          <div className="project-card">
            <h3>Buzygo — Social Media App for Art, Product & Craft Listing</h3>
            <p>
              A platform connecting artists, vendors, and consumers for craft, art, and product promotion. Key features:
              <ul>
                <li>Vendor profiles for showcasing crafts, art, and products</li>
                <li>Consumer browsing and discovery of creative listings</li>
                <li>Direct messaging between vendors and consumers</li>
                <li>Order placement and tracking for crafts and products</li>
                <li>Two-sided experience: vendor promotion & consumer engagement</li>
                <li>Secure authentication and profile management</li>
                <li>Responsive UI for both vendor and consumer roles</li>
              </ul>
              Built with React Native, Node.js, and integrated messaging/order APIs for seamless social commerce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
