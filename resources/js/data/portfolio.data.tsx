import { FiCode, FiLayers, FiSmartphone, FiAward } from 'react-icons/fi';
import { Skill, Achievement, Project } from '@/types/portfolio.types';

export const skills: Skill[] = [
    { name: 'PHP', level: 85, icon: <FiCode className="w-5 h-5 text-purple-500" /> },
    { name: 'Laravel', level: 70, icon: <FiCode className="w-5 h-5 text-red-500" /> },
    { name: 'UI/UX', level: 65, icon: <FiSmartphone className="w-5 h-5 text-pink-500" /> },
    { name: 'Tailwind CSS', level: 50, icon: <FiSmartphone className="w-5 h-5 text-cyan-500" /> },
    { name: 'C#', level: 50, icon: <FiCode className="w-5 h-5 text-green-800" /> },
    { name: 'React', level: 45, icon: <FiLayers className="w-5 h-5 text-blue-500" /> },
    { name: 'Dart', level: 40, icon: <FiCode className="w-5 h-5 text-blue-400" /> },
    { name: 'TypeScript', level: 37, icon: <FiCode className="w-5 h-5 text-blue-600" /> },
    { name: 'JavaScript', level: 35, icon: <FiCode className="w-5 h-5 text-yellow-500" /> },
    { name: 'Node.js', level: 30, icon: <FiCode className="w-5 h-5 text-green-500" /> },
];

export const achievements: Achievement[] = [
    {
        id: 1,
        title: 'LKS Cloud Computing Certificate',
        year: '2025',
        description: 'Second place in LKS Cloud Computing Competition with an e-commerce project. Gained hands-on experience with various AWS services.',
        icon: <FiAward className="w-6 h-6" />,
        iconBg: 'bg-blue-100 dark:bg-blue-900/30',
        iconColor: 'text-blue-600 dark:text-blue-400',
        badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
    },
    {
        id: 2,
        title: 'TOEIC Certificate',
        year: '2025',
        description: 'Achieved a score of ..., demonstrating strong English communication skills.',
        icon: <FiAward className="w-6 h-6" />,
        iconBg: 'bg-green-100 dark:bg-green-900/30',
        iconColor: 'text-green-600 dark:text-green-400',
        badgeColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
    },
    {
        id: 3,
        title: 'Outstanding Student Developer',
        year: '2024',
        description: 'Recognized for exceptional performance and contributions to software development projects during academic studies.',
        icon: <FiAward className="w-6 h-6" />,
        iconBg: 'bg-purple-100 dark:bg-purple-900/30',
        iconColor: 'text-purple-600 dark:text-purple-400',
        badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
    }
];

export const projects: Project[] = [
    {
        title: 'PCMeister',
        description: 'An e-commerce platform built with PHP Native and Tailwind CSS. This is my first project using PHP Native ever. Showcase my ability to work with both frontend and backend systems.',
        tags: ['PHP', 'Tailwind CSS', 'MySQL'],
        image: 'images/pcmeister.png',
        github: 'https://github.com/farsy06/pcmeister',
        demo: ''
    },
    {
        title: 'Website Class XI 2024/2025',
        description: 'A class project for website class XI 2024/2025. This is my first project using also Laravel and Tailwind CSS too. Learned a lot from this project.',
        tags: ['Laravel', 'Tailwind CSS', 'MySQL'],
        image: 'images/kelas.png',
        github: 'https://github.com/farsy06/web_kelasrpl',
        demo: ''
    },
    {
        title: 'Digital Library',
        description: 'UI/UX Design for digital library. Well not coding yet, but Showcasing my UI/UX Design skills in Figma.',
        tags: ['UI/UX'],
        image: 'images/library.png',
        github: '',
        demo: ''
    },
];
