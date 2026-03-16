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
            <p>Enterprise mobile platform used by 4000+ users enabling internal collaboration and productivity. Implemented mentions, hashtags, chat integrations, deep linking, secure WebViews, and screenshot protection.</p>
          </div>
          <div className="project-card">
            <h3>RankPedia — Learning Platform</h3>
            <p>Mobile learning application supporting video streaming, assignments, quizzes, and mathematical equation rendering inside WebViews.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
