// data/content/projects.ts
import { LocalizedContent } from "./site-content";

export interface Project {
  title: string;
  type: string;
  period: {
    startYear: Number;
    endYear?: Number;
  };
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  posterPortrait?: string;
  posterLandscape?: string;
  contributions?: string[];
}

export const projects: LocalizedContent<Project[]> = {
  en: [
    {
      title: "Edumize Website",
      type: "client",
      period: {
        startYear: 2024,
        endYear: 2024,
      },
      technologies: ["WebFlow", "Framer Motion", "Express", "Airtable", "React"],
      demoLink: "https://www.edumize.com/en/home",
      description:
        "The Edumize website serves as a comprehensive platform designed to assist international students in pursuing higher education opportunities in Malaysia.",
    },

    {
      title: "Personal Portfolio",
      type: "Personal",
      period: {
        startYear: 2025,
        endYear: 2025,
      },
      description: "A modern, bilingual portfolio website with cutting-edge animations and seamless content management",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Aceternity UI"],
      githubLink: "https://github.com/yamaad/portfolio",
      // demoLink: window.location.href,
    },
    {
      title: "Engages.ai",
      type: "Full-Time Role",
      period: {
        startYear: 2022,
      },
      description: "Engages.ai offers an AI-powered chatbot solution designed to improve business efficiency for CRM, inside sales, and marketing.",
      technologies: ["React", "TypeScript", "Redux Toolkit", "NestJS", "PostgreSQL", "WebSocket", "RabbitMQ", "Rasa Open Source", "OpenAI API"],
      posterLandscape: "/engagesai-landscape.png",
      posterPortrait: "/engagesai-portrait.png",
      demoLink: "https://chat.engages.ai/",
    },
  ],
  ar: [],
};
