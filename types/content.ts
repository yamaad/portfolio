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

export type WorkItemType = "professional" | "project";
export interface TimePeriod {
  start: Date;
  end: Date | null; // null indicates current/ongoing
}

// Shared metrics and impact tracking
export interface Impact {
  metrics: string[]; // Quantifiable achievements
  achievements: string[]; // Qualitative achievements
}

// Technical details shared between experiences and projects
export interface Technical {
  architecture: string; // System/solution architecture
  stack: string[]; // Technologies used
  highlights: string[]; // Key technical features/implementations
}

// For professional experiences
export interface ProfessionalExperience {
  id: string;
  type: "professional";
  company: string;
  role: string;
  period: TimePeriod;
  responsibilities: string[]; // Key areas of responsibility
  impact: Impact;
  technical: Technical;
  teamContext?: {
    // Optional team context
    size: number;
    role: string;
    collaboration: string[];
  };
}

// For projects
export interface Project {
  id: string;
  type: "project";
  title: string;
  period: TimePeriod;
  status: "completed" | "in-progress" | "planned";
  brief: string;
  challenge: {
    description: string;
    constraints: string[];
  };
  solution: {
    approach: string;
    implementation: string;
    innovations: string[];
  };
  impact: Impact;
  technical: Technical;
  visuals?: {
    // Optional visual assets
    current?: string;
    planned?: string;
    mockups?: string[];
    demo?: string;
    github?: string;
  };
}

// Combined type for work items
export type WorkItem = ProfessionalExperience | Project;

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  icon?: string;
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
  professional: LocalizedContent<ProfessionalExperience[]>;
  projects: LocalizedContent<Project[]>;
  services: LocalizedContent<Service[]>;
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
