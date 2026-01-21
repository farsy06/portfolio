import { FaJava } from 'react-icons/fa6';
import {
  SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiLaravel, SiUnity, SiFlutter, SiCss3, SiHtml5, SiTailwindcss, SiMysql, SiGit, SiDart, SiShadcnui, SiPhp, SiPython, SiVite, SiExpress, SiBootstrap, SiFigma,
  SiGithub
} from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";

export const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'PHP', icon: SiPhp },
      { name: 'Python', icon: SiPython },
      { name: 'C#', icon: TbBrandCSharp },
      { name: 'Java', icon: FaJava },
      { name: 'Dart', icon: SiDart },
    ]
  },
  {
    category: 'Libraries & Frameworks',
    items: [
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'React', icon: SiReact },
      { name: 'Laravel', icon: SiLaravel },
      { name: 'Flutter', icon: SiFlutter },
      { name: 'Shadcn UI', icon: SiShadcnui },
      { name: 'Express.js', icon: SiExpress },
    ]
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Vite', icon: SiVite },
      { name: 'Unity', icon: SiUnity },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Figma', icon: SiFigma },
    ]
  }
];

export const certificates = [
  {
    id: 1,
    title: 'DIGIUP 2025 Laravel Web Programmer',
    year: '2025',
    description: 'Awarded certificate for completing the DIGIUP 2025 Laravel Web Programmer course.',
    pdfPath: '/docs/DIGIUP2025.pdf',
    icon: '/images/digiup.png',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
  },
  {
    id: 2,
    title: 'TOEIC Certificate',
    year: '2025',
    description: 'Achieved a score of 815, demonstrating strong English communication skills.',
    pdfPath: '/docs/TOEIC2025.pdf',
    icon: '/images/toeic.png',
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
    badgeColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
  }
];

export const projects = [
  {
    title: 'PCMeister',
    description: 'An e-commerce platform built with PHP Native and Tailwind CSS. Building with scratch to understand the fundamentals of web development.',
    image: 'images/pcmeister.png',
    tags: ['HTML5', 'CSS3', 'PHP', 'Tailwind CSS', 'MySQL'],
    github: 'https://github.com/farsy06/pcmeister',
    demo: ''
  },
  {
    title: 'Website Class XI 2024/2025',
    description: 'My group project for class XI 2024/2025. My role is Backend Developer. Very incomplete for backend and frontend. But learned a lot from this project.',
    image: 'images/kelas.png',
    tags: ['Laravel', 'Tailwind CSS', 'MySQL'],
    github: 'https://github.com/farsy06/web_kelasrpl',
    demo: ''
  },
  {
    title: 'Digital Library',
    description: 'UI/UX Design for digital library. Showcasing my UI/UX Design skills in Figma.',
    image: 'images/library.png',
    tags: ['UI/UX', 'Figma'],
    github: '',
    demo: '',
  },
    {
    title: 'Portfolio Website',
    description: 'My personal portfolio website showcasing my projects and skills. Which you are currently viewing.',
    image: 'images/portfolio.png',
    tags: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
    github: 'https://github.com/farsy06/portfolio',
    demo: '',
  }
];
