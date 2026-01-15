import React, { useState, useEffect } from 'react';

// Layout
import Layout from '../components/layout/Layout';
import { Skeleton } from '../components/ui/skeleton';

// Lazy-loaded components for code splitting
const HeroSection = React.lazy(() => import('../components/sections/HeroSection'));
const AboutSection = React.lazy(() => import('../components/sections/AboutSection'));
const SkillsSection = React.lazy(() => import('../components/sections/SkillsSection'));
const AchievementsSection = React.lazy(() => import('../components/sections/AchievementsSection'));
const ProjectsSection = React.lazy(() => import('../components/sections/ProjectsSection'));
const ContactSection = React.lazy(() => import('../components/sections/ContactSection'));

// Page-level loading skeleton
const PageSkeleton: React.FC = () => (
    <div className="min-h-screen bg-background">
        {/* Header skeleton */}
        <Skeleton className="h-12 w-full" />

        {/* Hero section skeleton */}
        <div className="py-20">
            <div className="container mx-auto px-6 text-center">
                <Skeleton className="h-4 w-32 mx-auto mb-6" />
                <Skeleton className="h-16 w-96 mx-auto mb-8" />
                <Skeleton className="h-6 w-80 mx-auto mb-12" />
                <div className="flex justify-center gap-6">
                    <Skeleton className="h-12 w-40" />
                    <Skeleton className="h-12 w-40" />
                </div>
            </div>
        </div>

        {/* Other sections placeholder */}
        {[...Array(5)].map((_, i) => (
            <div key={i} className="py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <Skeleton className="h-4 w-24 mx-auto mb-4" />
                        <Skeleton className="h-10 w-64 mx-auto mb-4" />
                        <Skeleton className="h-1 w-16 mx-auto" />
                    </div>
                    <Skeleton className="h-96 w-full max-w-4xl mx-auto rounded-lg" />
                </div>
            </div>
        ))}
    </div>
);

const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate minimum loading time to prevent flash
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Show page skeleton while loading
    if (isLoading) {
        return <PageSkeleton />;
    }

    // Render actual content without individual section skeletons
    return (
        <Layout>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <AchievementsSection />
            <ProjectsSection />
            <ContactSection />
        </Layout>
    );
};

export default Home;
