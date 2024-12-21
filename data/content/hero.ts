// data/content/hero.ts
import { LocalizedContent, HeroContent } from "@/types/content";
import { skills } from "./skills";

const hero: LocalizedContent<HeroContent> = {
  en: {
    title: "Transforming Ideas into Digital Reality",
    subtitle: "Unlocking Your Business Potential with Technology",
    primaryCta: "Explore My Work",
    secondaryCta: "Start a Project",
    highlights: ["Full-stack Development", "Responsive Design", "AI Integration", "Real-time Applications", "Multilingual Support"],
    skills,
  },
  ar: {
    title: "تحويل الأفكار إلى واقع رقمي",
    subtitle: "إطلاق إمكانات عملك من خلال التكنولوجيا",
    primaryCta: "استكشف أعمالي",
    secondaryCta: "ابدأ مشروعًا",
    highlights: ["تطوير متكامل", "تصميم متجاوب", "تكامل الذكاء الاصطناعي", "تطبيقات فورية", "دعم متعدد اللغات"],
    skills,
  },
};

export default hero;
