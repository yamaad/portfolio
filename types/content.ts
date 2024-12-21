// ./types/content.ts
export type Locale = "en" | "ar";

export interface LocalizedContent<T> {
  en: T;
  ar: T;
}

export interface MetaData {
  lastUpdated: string;
  author: string;
}
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

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  outcomes: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  content: string;
  rating: number;
  imageUrl?: string;
}

export interface SiteContent {
  meta: MetaData;
  hero: LocalizedContent<HeroContent>;
  services: LocalizedContent<Service[]>;
  // projects: LocalizedContent<Project[]>;
  // testimonials: LocalizedContent<Testimonial[]>;
  // about: LocalizedContent<{
  //   title: string;
  //   description: string;
  //   highlights: string[];
  // }>;
  // contact: LocalizedContent<{
  //   title: string;
  //   description: string;
  //   cta: string;
  //   email: string;
  //   phone: string;
  // }>;
}
