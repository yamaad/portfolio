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

export interface SiteContent {
  meta: MetaData;
  hero: LocalizedContent<HeroContent>;
}
