// data/content/hero.ts
import { LocalizedContent, HeroContent } from "@/types/content";
import { skills } from "./skills";

const hero: LocalizedContent<HeroContent> = {
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
export default hero;
