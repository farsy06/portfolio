import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiArrowRight, FiCode, FiLayers, FiSmartphone, FiExternalLink, FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const Home = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    const skills = [
        { name: 'PHP', level: 85, icon: <FiCode className="w-5 h-5 text-blue-600" /> },
        { name: 'Laravel', level: 80, icon: <FiCode className="w-5 h-5 text-red-500" /> },
        { name: 'React', level: 90, icon: <FiLayers className="w-5 h-5 text-blue-500" /> },
        { name: 'TypeScript', level: 85, icon: <FiCode className="w-5 h-5 text-blue-600" /> },
        { name: 'Node.js', level: 75, icon: <FiCode className="w-5 h-5 text-green-500" /> },
        { name: 'Tailwind CSS', level: 85, icon: <FiSmartphone className="w-5 h-5 text-cyan-500" /> },
        { name: 'JavaScript', level: 80, icon: <FiCode className="w-5 h-5 text-yellow-500" /> },
    ];

    const projects = [
        {
            title: 'PCMeister',
            description: 'An e-commerce platform built with PHP Native and Tailwind CSS. This is my first project using PHP Native ever. Showcase my ability to work with both frontend and backend systems.',
            tags: ['PHP', 'Tailwind CSS', 'MySQL'],
            link: '#',
            image: 'images/pcmeister.png',
            github: 'https://github.com/farsy06/pcmeister',
            demo: '#'
        },
        {
            title: 'Website Class XI 2024/2025',
            description: 'A class project for website class XI 2024/2025. This is my first project using also Laravel and Tailwind CSS too. Learned a lot from this project.',
            tags: ['Laravel', 'Tailwind CSS', 'MySQL'],
            link: '#',
            image: 'images/kelas.png',
            github: 'https://github.com/farsy06/web_kelasrpl',
            demo: '#'
        },
    ];

    return (
        <>
            <Head title="Farisya" />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
                {/* Navigation */}
                <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
                    <div className="container mx-auto px-4 sm:px-6 py-2">
                        <div className="flex justify-between items-center h-12">
                            <motion.a
                                href="#"
                                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                FF
                            </motion.a>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex space-x-6">
                                {['#home', '#about', '#skills', '#achievements', '#projects', '#contact'].map((item, i) => (
                                    <motion.a
                                        key={i}
                                        href={item}
                                        className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors px-3 py-2 rounded-md"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 + 0.3 }}
                                    >
                                        {item.substring(1).charAt(0).toUpperCase() + item.substring(2)}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden flex items-center">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 focus:outline-none"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {isMobileMenuOpen ? (
                                        <FiX className="block h-6 w-6" />
                                    ) : (
                                        <FiMenu className="block h-6 w-6" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 shadow-lg">
                            {['#home', '#about', '#skills', '#achievements', '#projects', '#contact'].map((item, i) => (
                                <a
                                    key={i}
                                    href={item}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.substring(1).charAt(0).toUpperCase() + item.substring(2)}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section id="home" className="min-h-screen flex items-center justify-center pt-20">
                    <div className="container mx-auto px-6 py-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <motion.p
                                className="text-blue-600 dark:text-blue-400 font-mono mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Hi, my name is
                            </motion.p>
                            <motion.h1
                                className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.2 }}
                            >
                                Farisya Fatanansyah.
                            </motion.h1>
                            <motion.h2
                                className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.3 }}
                            >
                                I build things for the web.
                            </motion.h2>
                            <motion.p
                                className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.4 }}
                            >
                                I'm a Full Stack Developer specializing in building exceptional digital experiences. Currently, I'm student class XII RPL in <a href="https://smktelkom1medan.sch.id" className="text-blue-600 dark:text-blue-400">SMK Telkom 1 Medan</a>.
                            </motion.p>
                            <motion.div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.5 }}
                            >
                                <a
                                    href="#contact"
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 flex items-center justify-center gap-2"
                                >
                                    Get In Touch
                                    <FiArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="#projects"
                                    className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors flex items-center justify-center gap-2"
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
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
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
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Who I Am</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies.
                                    I love turning ideas into reality through clean, efficient, and scalable code.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    My journey in web development started 2 years ago, and since then, I've had the privilege of working
                                    on various projects that have honed my skills in [mention key technologies].
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                    When I'm not coding, you can find me [hobbies or interests], exploring new technologies, or
                                    contributing to open-source projects.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {['PHP', 'Laravel', 'React', 'Node.js', 'Tailwind CSS', 'JavaScript'].map((tech, i) => (
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
                                {/* Achievement 1 */}
                                <motion.div
                                    className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">LKS Cloud Computing Certification</h3>
                                                <span className="ml-3 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">2025</span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300">Second place in LKS Cloud Computing Certification with an e-commerce project. Gained hands-on experience with various AWS services.</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Achievement 2 */}
                                <motion.div
                                    className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">LKS Web Technologies</h3>
                                                <span className="ml-3 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">2024</span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300">Participated in LKS Web Technologies competition, showcasing expertise in modern web development technologies and frameworks.</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Achievement 3 */}
                                <motion.div
                                    className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Outstanding Student Developer</h3>
                                                <span className="ml-3 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">2021</span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300">Awarded for exceptional performance and significant contributions to student development projects.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-24 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-2 inline-block">My Work</span>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                            {projects.map((project, index) => (
                                <motion.article
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px 0px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full hover:-translate-y-1"
                                >
                                    <div className="relative overflow-hidden rounded-t-2xl">
                                        <img
                                            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                                            src={project.image}
                                            alt={project.title}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <div className="flex flex-wrap gap-3 w-full">
                                                <div className="flex space-x-3">
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
                                                    >
                                                        <FiGithub className="w-4 h-4 mr-2 flex-shrink-0" />
                                                        <span>View Code</span>
                                                    </a>
                                                    {project.demo && (
                                                        <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center px-5 py-2.5 bg-white text-gray-900 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:scale-105 transform transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
                                                        >
                                                            <FiExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
                                                            <span>Live Demo</span>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent -z-0"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-2 inline-block">What's Next?</span>
                            <h2 className="text-4xl font-bold">Get In Touch</h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
                        </motion.div>

                        <div className="max-w-2xl mx-auto text-center">
                            <motion.p
                                className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                                I'll get back to you as soon as possible!
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="inline-block"
                            >
                                <a
                                    href="mailto:ffatanansyah@gmail.com"
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 flex items-center gap-2 text-lg font-medium"
                                >
                                    Say Hello
                                    <FiArrowRight className="w-5 h-5" />
                                </a>
                            </motion.div>

                            <motion.div
                                className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <p className="text-gray-500 dark:text-gray-400 mb-6">Or find me on these platforms</p>
                                <div className="flex justify-center space-x-6">
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
                                            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                            aria-label={item.label}
                                            whileHover={{ y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {item.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <footer className="mt-24 text-center text-gray-500 dark:text-gray-400 text-sm">
                        <div className="container mx-auto px-6">
                            <p>Designed & Built by Farisya Fatanansyah</p>
                            <p className="mt-2"> {new Date().getFullYear()} - All rights reserved</p>
                        </div>
                    </footer>
                </section>
            </div>
        </>
    );
};

export default Home;
