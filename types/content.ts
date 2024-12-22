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
export interface WorkItem {
  id: string;
  type: WorkItemType;
  title: string;
  period: string;
  brief: string;
  impact: {
    metrics: string[];
    achievements: string[];
  };
  technical: {
    architecture?: string;
    stack: string[];
    highlights: string[];
  };
  case_study: {
    challenge: string;
    approach: string;
    solution: string;
    outcomes: string[];
  };
  visuals?: {
    current?: string;
    planned?: string;
    // For projects under improvement
    mockups?: string[];
  };
}
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
  work: LocalizedContent<WorkItem[]>;
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
