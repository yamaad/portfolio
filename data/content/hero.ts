// data/content/hero.ts
import { LocalizedContent } from "./site-content";

export interface HeroContent {
  title: string;
  flipWords: [string[], string[]]; // First array for left words, second for right words
  description: string;
  primaryCta: string;
  secondaryCta: string;
  highlights: string[];
  skills: Skill[];
}
export interface Skill {
  name: string;
  icon: string;
  color: string;
  category?: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "SiReact", color: "#61DAFB", category: "frontend" },
  { name: "Next.js", icon: "SiNextdotjs", color: "#000000", category: "frontend" },
  { name: "TypeScript", icon: "SiTypescript", color: "#3178C6", category: "frontend" },
  { name: "Redux", icon: "SiRedux", color: "#764ABC", category: "frontend" },
  { name: "Material UI", icon: "SiMui", color: "#007FFF", category: "frontend" },
  { name: "Framer Motion", icon: "SiFramer", color: "#0055FF", category: "frontend" },
  { name: "HTML", icon: "SiHtml5", color: "#E34F26", category: "frontend" },
  { name: "CSS", icon: "SiCss3", color: "#1572B6", category: "frontend" },
  { name: "Sass", icon: "SiSass", color: "#CC6699", category: "frontend" },
  { name: "Webflow", icon: "SiWebflow", color: "#4353FF", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "SiNodedotjs", color: "#339933", category: "backend" },
  { name: "Express", icon: "SiExpress", color: "#000000", category: "backend" },
  { name: "NestJS", icon: "SiNestjs", color: "#E0234E", category: "backend" },
  { name: "Socket.io", icon: "SiSocketdotio", color: "#010101", category: "backend" },
  { name: "REST APIs", icon: "SiOpenapiinitiative", color: "#38B832", category: "backend" },
  { name: "TypeORM", icon: "SiTypescript", color: "#3178C6", category: "backend" },
  { name: "RabbitMQ", icon: "SiRabbitmq", color: "#FF6600", category: "backend" },

  // Database
  { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1", category: "database" },
  { name: "MongoDB", icon: "SiMongodb", color: "#47A248", category: "database" },
  { name: "Mongoose", icon: "SiMongodb", color: "#880000", category: "database" },
  { name: "Firestore", icon: "SiFirebase", color: "#FFCA28", category: "database" },

  // Tools & Infrastructure
  { name: "Git", icon: "SiGit", color: "#F05032", category: "tools" },
  { name: "Docker", icon: "SiDocker", color: "#2496ED", category: "tools" },
  { name: "Jira", icon: "SiJira", color: "#0052CC", category: "tools" },
  { name: "Bitbucket", icon: "SiBitbucket", color: "#0052CC", category: "tools" },
  { name: "Vite", icon: "SiVite", color: "#646CFF", category: "tools" },

  // Mobile & Cross-platform
  { name: "Flutter", icon: "SiFlutter", color: "#02569B", category: "mobile" },
  { name: "Dart", icon: "SiDart", color: "#0175C2", category: "mobile" },

  // Cloud & Services
  { name: "Firebase", icon: "SiFirebase", color: "#FFCA28", category: "cloud" },
  { name: "Google Maps", icon: "SiGooglemaps", color: "#4285F4", category: "cloud" },
  { name: "OpenAI", icon: "SiOpenai", color: "#412991", category: "cloud" },
  { name: "Airtable", icon: "SiAirtable", color: "#18BFFF", category: "cloud" },
];
export const hero: LocalizedContent<HeroContent> = {
  en: {
    title: "Digital Solutions",
    flipWords: [
      ["Ideas", "Dreams", "Vision"],
      ["Digital Reality", "Success Story", "Innovation"],
    ],
    description: "Specializing in modern web technologies and digital experiences",
    primaryCta: "Explore My Work",
    secondaryCta: "Start a Project",
    highlights: ["Full-stack Development", "Responsive Design", "AI Integration", "Real-time Applications", "Multilingual Support"],
    skills,
  },
  ar: {
    title: "حلول رقمية",
    flipWords: [
      ["الأفكار", "الأحلام", "الرؤية", "المشاريع"],
      ["واقع رقمي", "قصة نجاح", "إبداع", "تميّز"],
    ],
    description: "متخصص في تقنيات الويب الحديثة والتجارب الرقمية المتميزة",
    primaryCta: "استكشف أعمالي",
    secondaryCta: "ابدأ مشروعًا",
    highlights: ["تطوير متكامل", "تصميم متجاوب", "تكامل الذكاء الاصطناعي", "تطبيقات فورية", "دعم متعدد اللغات"],
    skills,
  },
};