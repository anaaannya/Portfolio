
import { Project, Certification, Skill, Experience } from './types';

export const SKILLS: Skill[] = [
  { name: 'HTML5', level: 95, category: 'Development' },
  { name: 'CSS3', level: 95, category: 'Development' },
  { name: 'Bootstrap 4', level: 92, category: 'Development' },
  { name: 'Figma UI/UX', level: 88, category: 'Design' },
  { name: 'WordPress (No-Code)', level: 90, category: 'Development' },
  { name: 'Responsive Web Design', level: 98, category: 'Development' },
  { name: 'Canva Pro', level: 95, category: 'Design' },
  { name: 'Network Security', level: 60, category: 'Security' },
  { name: 'Web PenTesting', level: 55, category: 'Security' },
  { name: 'Linux Fundamentals', level: 70, category: 'Security' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Enterprise Dashboard System',
    category: 'UI/UX',
    description: 'A data-heavy financial tracking system designed for scale. Focused on accessibility and complex state visualization.',
    tags: ['Figma', 'UX Research', 'Prototyping', 'Design Systems'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Responsive Retail Hub',
    category: 'Frontend',
    description: 'A fully responsive e-commerce storefront with optimized mobile navigation and fast-loading assets.',
    tags: ['Bootstrap 4', 'HTML5', 'CSS3', 'Mobile-First'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Professional Service Portal',
    category: 'WordPress',
    description: 'Custom-themed WordPress site built for a consulting firm using no-code principles and optimized for SEO.',
    tags: ['WordPress', 'Elementor', 'No-Code', 'SEO'],
    imageUrl: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Creative Agency Showcase',
    category: 'Graphic',
    description: 'Comprehensive visual branding package including social media assets and pitch deck templates.',
    tags: ['Canva Pro', 'Branding', 'Visual Identity', 'Typography'],
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
  },
];

export const CERTIFICATIONS: Certification[] = [
  { id: 'c1', title: 'Pre-Security Path', issuer: 'TryHackMe', date: '2024', type: 'Security' },
  { id: 'c2', title: 'Intro to Cyber Security', issuer: 'TryHackMe', date: '2024', type: 'Security' },
  { id: 'c3', title: 'Web Development Path', issuer: 'Coursera', date: '2022', type: 'Frontend' },
  { id: 'c4', title: 'Advanced Responsive UI', issuer: 'IDF', date: '2023', type: 'Frontend' },
  { id: 'c5', title: 'Junior Pentester Path', issuer: 'TryHackMe', date: 'Active', type: 'Security' },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    role: 'Mid-Level Frontend Executive',
    company: 'TechSolutions India',
    period: '2022 - Present',
    description: 'Spearheading frontend architecture and hardening UI/UX delivery for enterprise web applications using modern CSS and Figma.',
    isCurrent: true
  },
  {
    id: 'e2',
    role: 'UI/UX Designer',
    company: 'Creative Pixel Agency',
    period: '2020 - 2022',
    description: 'Crafted user-centric designs and managed WordPress ecosystems for diverse global clients.',
    isCurrent: false
  }
];

export const EXTERNAL_LINKS = {
  reviews: 'https://reviews.ananyasarkar.dev',
  securityNotes: 'https://notes.ananyasarkar.dev/cyber'
};
