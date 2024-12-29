// ./data/content/site-content.ts
import { hero, HeroContent } from "./hero";
export interface MetaData {
  lastUpdated: string;
  author: string;
}
export type Locale = "en" | "ar";

export interface LocalizedContent<T> {
  en: T;
  ar: T;
}
export interface SiteContent {
  meta: MetaData;
  hero: LocalizedContent<HeroContent>;
}
export const siteContent: SiteContent = {
  meta: {
    lastUpdated: "2024-12-20",
    author: "Maad Yasser",
  },
  hero,
};
