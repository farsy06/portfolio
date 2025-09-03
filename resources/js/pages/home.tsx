// Core React
import { useState, useEffect, lazy, Suspense } from 'react';

// Routing & State
import { Head } from '@inertiajs/react';

// Animation
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';

// Icons (Dynamically imported)
const FiGithub = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiGithub })));
const FiLinkedin = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiLinkedin })));
const FiMail = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiMail })));
const FiInstagram = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiInstagram })));
const FiArrowRight = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiArrowRight })));
const FiExternalLink = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiExternalLink })));
const FiMenu = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiMenu })));
const FiX = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiX })));
const FiMoon = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiMoon })));
const FiSun = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiSun })));

// Components (Dynamically imported)
const Cursor = lazy(() => import('@/components/cursor'));
const TypewriterEffect = lazy(() => import('@/components/typewriter-effect'));
const LoadingFallback = lazy(() => import('@/components/loading-fallback'));

// Hooks
import { useDarkMode } from '@/hooks/use-dark-mode';

// Data
import { skills, achievements, projects } from '@/data/portfolio.data';

const Home = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    return (
        <Suspense fallback={<LoadingFallback />}>
            <LazyMotion features={domAnimation}>
                <Head title="Farisya">
                <style>{`
                  * {
                    cursor: none !important;
                  }

                  @media (pointer: coarse) {
                    * {
                      cursor: auto !important;
                    }
                    .cursor {
                      display: none !important;
                    }
                  }
                `}</style>
            </Head>
            <Cursor headerHeight={72} />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
                {/* Navigation */}
                <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
                    <div className="container mx-auto px-4 sm:px-6 py-2">
                        <div className="flex justify-between items-center h-12">
                            <motion.a
                                href="#"
                                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent block"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 15,
                                    duration: 0.3
                                }}
                            >
                                FF
                            </motion.a>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex space-x-6">
                                {['#home', '#about', '#skills', '#achievements', '#projects', '#contact'].map((item, i) => (
                                    <motion.a
                                        key={i}
                                        href={item}
                                        className="relative text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-md group"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: i * 0.05 + 0.2,
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 15,
                                            duration: 0.3
                                        }}
                                        whileHover={{ y: -1 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <span className="relative">
                                            {item.substring(1).charAt(0).toUpperCase() + item.substring(2)}
                                            <motion.span
                                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                                                initial={{ width: 0 }}
                                                whileHover={{ width: '100%' }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            />
                                        </span>
                                    </motion.a>
                                ))}
                            </div>

                            <div className="flex items-center space-x-2">
                                {/* Theme Toggle - Visible on all screen sizes */}
                                <div className="flex items-center">
                                    <motion.button
                                        onClick={toggleDarkMode}
                                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                                        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            rotate: darkMode ? 180 : 0
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 15,
                                            duration: 0.3
                                        }}
                                    >
                                        {darkMode ? (
                                            <FiSun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                                        ) : (
                                            <FiMoon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                                        )}
                                    </motion.button>
                                </div>

                                {/* Mobile menu button */}
                                <motion.div
                                    className="md:hidden flex items-center"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.3,
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 15,
                                        duration: 0.3
                                    }}
                                >
                                    <motion.button
                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                        className="inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                                        aria-expanded={isMobileMenuOpen}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 15,
                                            duration: 0.3
                                        }}
                                    >
                                        <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
                                        <motion.div
                                            animate={isMobileMenuOpen ? 'open' : 'closed'}
                                            variants={{
                                                open: { rotate: 180 },
                                                closed: { rotate: 0 }
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {isMobileMenuOpen ? (
                                                <FiX className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                                            ) : (
                                                <FiMenu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                                            )}
                                        </motion.div>
                                    </motion.button>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                className="md:hidden fixed w-full z-40 top-16 left-0 right-0"
                                initial={{ opacity: 0, y: -20, height: 0 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    height: 'auto',
                                    transition: {
                                        type: 'spring',
                                        damping: 25,
                                        stiffness: 300
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -20,
                                    height: 0,
                                    transition: {
                                        duration: 0.2,
                                        ease: 'easeInOut'
                                    }
                                }}
                            >
                                <motion.div
                                    className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg border-t border-gray-200 dark:border-gray-700"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    {['#home', '#about', '#skills', '#achievements', '#projects', '#contact'].map((item, i) => (
                                        <motion.a
                                            key={i}
                                            href={item}
                                            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:text-blue-400 dark:hover:bg-gray-800 transition-colors duration-200 ease-in-out"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                                transition: {
                                                    delay: 0.1 + (i * 0.05),
                                                    type: 'spring',
                                                    stiffness: 300
                                                }
                                            }}
                                            whileHover={{ x: 4 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {item.substring(1).charAt(0).toUpperCase() + item.substring(2)}
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>

                {/* Hero Section */}
                <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-200 ease-in-out">
                    <div className="container mx-auto px-6 py-20 text-center">
                        <motion.div
                            initial={false}
                            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-4xl mx-auto transition-colors duration-200 ease-in-out"
                        >
                            <motion.p
                                className="text-blue-600 dark:text-blue-400 font-mono mb-4 transition-colors duration-200 ease-in-out"
                                initial={false}
                                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                Hi there, my name is
                            </motion.p>
                            <motion.h1
                                className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 transition-colors duration-200 ease-in-out"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    opacity: { duration: 0.6, ease: 'easeOut' },
                                    y: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                                    delay: 0.3
                                }}
                            >
                                <span className="relative inline-block">
                                    <motion.span
                                        className="relative z-10"
                                        initial={{ backgroundPosition: '200% 0' }}
                                        animate={{
                                            backgroundPosition: '-200% 0',
                                            transition: {
                                                repeat: Infinity,
                                                repeatType: 'loop',
                                                duration: 3,
                                                ease: 'linear'
                                            }
                                        }}
                                    >
                                        Farisya Fatanansyah.
                                        <motion.span
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100"
                                            style={{
                                                transform: 'rotate(3deg) scale(1.2, 1)',
                                                filter: 'blur(4px)',
                                                backgroundSize: '200% 100%'
                                            }}
                                            initial={{ x: '-100%' }}
                                            animate={{
                                                x: '100%',
                                                transition: {
                                                    repeat: Infinity,
                                                    repeatType: 'loop',
                                                    duration: 2,
                                                    ease: 'easeInOut'
                                                }
                                            }}
                                        />
                                    </motion.span>
                                </span>
                            </motion.h1>
                            <motion.h2
                                className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-8 transition-colors duration-200 ease-in-out"
                                initial={false}
                                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <TypewriterEffect
                                    texts={['I build things for the web.', 'I create full-stack applications.', 'I love solving problems.']}
                                />
                            </motion.h2>
                            <motion.p
                                className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed transition-colors duration-200 ease-in-out"
                                initial={false}
                                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                                I'm a <TypewriterEffect texts={['Full Stack', 'Game', 'Mobile', 'Web']} className="font-semibold text-blue-600 dark:text-blue-400" /> Developer specializing in building exceptional digital experiences. Currently, I'm student class XII RPL in{' '}
                                <a
                                    href="https://smktelkom1medan.sch.id"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200 ease-in-out inline-flex items-center gap-1"
                                >
                                    SMK Telkom 1 Medan
                                    <FiExternalLink className="w-3 h-3" />
                                </a>.
                            </motion.p>
                            <motion.div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                initial={false}
                                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    Get In Touch
                                    <FiArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-200 ease-in-out flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    View My Work
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* About Me Section */}
                <section id="about" className="py-24 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-2 inline-block">Get To Know</span>
                            <h2 className="text-4xl font-bold">About Me</h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
                        </motion.div>

                        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                            <motion.div
                                className="w-full lg:w-1/2"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >
                                <div className="relative">
                                    <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl overflow-hidden">
                                        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                            <img src="/images/myself.jpg" alt="Farisya Fatanansyah" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="w-full lg:w-1/2"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                            >
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Who I Am</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    I'm a versatile developer from Indonesia, specializing in <TypewriterEffect texts={['Full Stack', 'Game', 'Mobile', 'Web']} className="font-semibold text-blue-600 dark:text-blue-400" /> development. I bring ideas to life across multiple platforms, creating engaging digital experiences that users love.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    In the <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack</span> world, I build robust web applications from front to back. For <span className="font-semibold text-blue-600 dark:text-blue-400">Game Development</span>, I create interactive experiences that combine creativity with technical expertise. And in <span className="font-semibold text-blue-600 dark:text-blue-400">Mobile Development</span>, I craft smooth, responsive apps that feel native on any device.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                    With 2 years of hands-on experience, I've worked with technologies like React, Node.js, Unity, and Flutter to deliver high-quality solutions. I'm passionate about clean code, intuitive design, and creating seamless user experiences across all platforms. Let's build something amazing together!
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {['PHP', 'Laravel', 'React', 'Node.js', 'Tailwind CSS', 'JavaScript', 'C#', 'Dart', 'TypeScript'].map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-24 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-2 inline-block">What I Know</span>
                            <h2 className="text-4xl font-bold">My Skills</h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                                >
                                    <div className="w-12 h-12 mb-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{skill.name}</h3>
                                    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                                        <motion.div
                                            className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                        <span>Proficiency</span>
                                        <span className="font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Achievements Section */}
                <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-2 inline-block">Milestones</span>
                            <h2 className="text-4xl font-bold mb-4">Achievements</h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
                        </motion.div>

                        <div className="max-w-3xl mx-auto">
                            <div className="space-y-8">
                                {achievements.map((achievement) => (
                                    <motion.div
                                        key={achievement.id}
                                        className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mr-4">
                                                <div className={`w-12 h-12 rounded-lg ${achievement.iconBg} flex items-center justify-center ${achievement.iconColor}`}>
                                                    {achievement.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                        {achievement.title}
                                                    </h3>
                                                    <span className={`px-3 py-1 text-xs font-medium ${achievement.badgeColor} rounded-full`}>
                                                        {achievement.year}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-300">
                                                    {achievement.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-24 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-2 inline-block">My Work</span>
                            <h2 className="text-4xl font-bold">Featured Projects</h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-4 sm:px-0 lg:px-4">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: 0.1 * index,
                                            duration: 0.5,
                                            ease: "easeOut"
                                        }
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -3 }}
                                >
                                    <div className="relative overflow-hidden aspect-video">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all text-xs sm:text-sm font-medium border border-white/20"
                                                    >
                                                        <FiGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4"/>
                                                        Code
                                                    </a>
                                                )}
                                                {project.demo && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all text-xs sm:text-sm font-medium"
                                                    >
                                                        <FiExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4"/>
                                                        Live Demo
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">{project.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full whitespace-nowrap"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-2 inline-block">Get In Touch</span>
                            <h2 className="text-4xl font-bold">Contact Me</h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
                        </motion.div>

                        <div className="max-w-2xl mx-auto">
                            <motion.div
                                className="text-center mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
                                </p>
                                <a
                                    href="mailto:ffatanansyah@gmail.com"
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
                                >
                                    Say Hello
                                </a>
                            </motion.div>

                            <motion.div
                                className="flex justify-center gap-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                {[
                                    { icon: <FiGithub className="w-6 h-6" />, url: 'https://github.com/farsy06', label: 'GitHub' },
                                    { icon: <FiLinkedin className="w-6 h-6" />, url: 'https://linkedin.com/in/farisya-fatanansyah-0a69372bb', label: 'LinkedIn' },
                                    { icon: <FiMail className="w-6 h-6" />, url: 'mailto:ffatanansyah@gmail.com', label: 'Email' },
                                    { icon: <FiInstagram className="w-6 h-6" />, url: 'https://instagram.com/fatanansyah', label: 'Instagram' }
                                ].map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ease-in-out"
                                        aria-label={item.label}
                                        whileHover={{ y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.icon}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    <footer className="mt-24 text-center text-gray-500 dark:text-gray-400 text-sm">
                        <div className="container mx-auto px-6">
                            <p>Designed & Built by Farisya Fatanansyah</p>
                            <p className="mt-2">Made with ❤️ from Indonesia</p>
                            <p className="mt-2">{new Date().getFullYear()} - All rights reserved</p>
                        </div>
                    </footer>
                </section>
                </div>
            </LazyMotion>
        </Suspense>
    );
};

export default Home;
