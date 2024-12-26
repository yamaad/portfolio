// data/content/experience.ts
import { LocalizedContent } from "./index";

export interface Experience {
  company: string;
  role: string;
  overview: string;
  period: {
    start: Date;
    end: Date;
  };
  highlights: string[];
  impact: {
    metrics: string[];
    achievements: string[];
  };
  stack: string[];
  Projects?: Project[];
}
export const experience: LocalizedContent<Experience[]> = {};
