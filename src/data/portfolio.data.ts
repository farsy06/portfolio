import {
  SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiLaravel, SiUnity, SiFlutter, SiCss, SiHtml5, SiTailwindcss, SiMysql, SiGit, SiDart, SiShadcnui, SiPhp, SiPython, SiVite, SiExpress, SiBootstrap, SiDotnet, SiOpenjdk, SiFigma
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
      { name: 'Figma', icon: SiFigma },
    ]
  }
];

export const achievements = [
  {
    id: 1,
    title: 'LKS Cloud Computing Certificate',
    year: '2025',
    description: 'Second place in LKS Cloud Computing Competition with an e-commerce project. Gained hands-on experience with various AWS services.',
    icon: '🏆',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
  },
  {
    id: 2,
    title: 'TOEIC Certificate',
    year: '2025',
    description: 'Achieved a score of 815, demonstrating strong English communication skills.',
    icon: '📜',
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
    badgeColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
  },
  {
    id: 3,
    title: 'Outstanding Student Developer',
    year: '2024',
    description: 'Recognized for exceptional performance and contributions to software development projects during academic studies.',
    icon: '⭐',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
    badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
  }
];

export const projects = [
  {
    title: 'PCMeister',
    description: 'An e-commerce platform built with PHP Native and Tailwind CSS. This is my first project using PHP Native ever. Showcase my ability to work with both frontend and backend systems.',
    image: 'images/pcmeister.png',
    tags: ['PHP', 'Tailwind CSS', 'MySQL'],
    github: 'https://github.com/farsy06/pcmeister',
    demo: ''
  },
  {
    title: 'Website Class XI 2024/2025',
    description: 'A class project for website class XI 2024/2025. This is my first project using also Laravel and Tailwind CSS too. Learned a lot from this project.',
    image: 'images/kelas.png',
    tags: ['Laravel', 'Tailwind CSS', 'MySQL'],
    github: 'https://github.com/farsy06/web_kelasrpl',
    demo: ''
  },
  {
    title: 'Digital Library',
    description: 'UI/UX Design for digital library. Well not coding yet, but Showcasing my UI/UX Design skills in Figma.',
    image: 'images/library.png',
    tags: ['UI/UX'],
    github: '',
    demo: '',
  },
];
