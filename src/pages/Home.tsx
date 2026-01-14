import React, { useEffect } from 'react';

// Components
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
    useEffect(() => {
        document.title = 'Farisya';
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <AchievementsSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
};

export default Home;
