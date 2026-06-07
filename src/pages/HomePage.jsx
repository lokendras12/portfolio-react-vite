import React from 'react';
import StoryChrome from '../components/story/StoryChrome';
import IntroSection from '../components/story/IntroSection';
import SkillsSection from '../components/story/SkillsSection';
import ProjectsSection from '../components/story/ProjectsSection';
import HobbiesSection from '../components/story/HobbiesSection';
import './Story.css';

const HomePage = () => {
  return (
    <div className="story-page">
      <StoryChrome />
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <HobbiesSection />
    </div>
  );
};

export default HomePage;
