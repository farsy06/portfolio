import {
  SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiLaravel, SiUnity, SiFlutter, SiCss, SiHtml5, SiTailwindcss, SiMysql, SiGit, SiDart, SiShadcnui, SiPhp, SiPython, SiVite, SiExpress, SiBootstrap, SiDotnet, SiOpenjdk
} from '@icons-pack/react-simple-icons';

export const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'PHP', icon: SiPhp },
      { name: 'Python', icon: SiPython },
      { name: 'C#', icon: SiDotnet },
      { name: 'Java', icon: SiOpenjdk },
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
    ]
  }
];

export const achievements = [
  {
    id: 1,
    title: 'Completed Full Stack Web Development',
    year: '2023',
    description: 'Developed multiple web applications using React, Node.js, and Laravel.',
    icon: '🏆',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    badgeColor: 'bg-yellow-100 text-yellow-800',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    year: '2023',
    description: 'Created cross-platform mobile apps with Flutter.',
    icon: '📱',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    badgeColor: 'bg-blue-100 text-blue-800',
  },
  {
    id: 3,
    title: 'Game Development',
    year: '2024',
    description: 'Built interactive games using Unity and C#.',
    icon: '🎮',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    badgeColor: 'bg-green-100 text-green-800',
  },
];

export const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React frontend and Laravel backend.',
    image: '/images/project1.jpg',
    tags: ['React', 'Laravel', 'MySQL'],
    github: 'https://github.com/farsy06/ecommerce',
    demo: 'https://demo.ecommerce.com',
  },
  {
    title: 'Task Management App',
    description: 'A productivity app built with Flutter for cross-platform mobile experience.',
    image: '/images/project2.jpg',
    tags: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/farsy06/taskapp',
    demo: 'https://demo.taskapp.com',
  },
  {
    title: '2D Platformer Game',
    description: 'An exciting 2D platformer game developed with Unity.',
    image: '/images/project3.jpg',
    tags: ['Unity', 'C#', 'Game Development'],
    github: 'https://github.com/farsy06/platformer',
    demo: 'https://demo.platformer.com',
  },
];
