// ./data/content/hero.ts
import { LocalizedContent } from "@/types/content";

const hero: LocalizedContent<{
  title: string;
  subtitle: string;
  cta: string;
}> = {
  en: {
    title: "Building Digital Experiences",
    subtitle: "Full Stack Developer specializing in modern web technologies",
    cta: "View My Work",
  },
  ar: {
    title: "بناء التجارب الرقمية",
    subtitle: "مطور ويب متكامل متخصص في تقنيات الويب الحديثة",
    cta: "تصفح أعمالي",
  },
};

export default hero;
