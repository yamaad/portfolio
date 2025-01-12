// data/content/projects.ts
import { LocalizedContent } from "./site-content";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  posterPortrait?: string;
  posterLandscape?: string;
}

export const projects: LocalizedContent<Project[]> = {
  en: [
    {
      title: "Edumize Website",
      description:
        "The Edumize website serves as a comprehensive platform designed to assist international students in pursuing higher education opportunities in Malaysia.",
      technologies: ["WebFlow", "Framer Motion", "Express", "Airtable", "React"],
      githubLink: "",
      posterLandscape: "",
      posterPortrait: "",
      demoLink: "https://www.edumize.com/en/home",
    },

    {
      title: "Personal Portfolio",
      description: "A modern, bilingual portfolio website with cutting-edge animations and seamless content management",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Aceternity UI"],
      githubLink: "",
      demoLink: "",
      posterLandscape: "",
    },
    {
      title: "Engages.ai",
      description: "Engages.ai offers an AI-powered chatbot solution designed to improve business efficiency for CRM, inside sales, and marketing.",
      technologies: ["React", "TypeScript", "Redux Toolkit", "NestJS", "PostgreSQL", "WebSocket", "RabbitMQ", "Rasa Open Source", "OpenAI API"],
      posterLandscape: "/engagesai-landscape.png",
      posterPortrait: "/engagesai-portrait.png",
      demoLink: "https://chat.engages.ai/",
    },
  ],
  ar: [],
};
