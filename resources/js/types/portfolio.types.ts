import { ReactNode } from 'react';

export interface Skill {
    name: string;
    level: number;
    icon: ReactNode;
}

export interface Achievement {
    id: number;
    title: string;
    year: string;
    description: string;
    icon: ReactNode;
    iconBg: string;
    iconColor: string;
    badgeColor: string;
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: string;
    github: string;
    demo: string;
}
