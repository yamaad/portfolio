// ./data/content/services.ts
import { LocalizedContent, Service } from "@/types/content";

const services: LocalizedContent<Service[]> = {
  en: [
    {
      id: "web-development",
      title: "Web Development",
      description: "Building modern, responsive web applications",
      features: ["Custom web applications", "E-commerce solutions", "Progressive Web Apps"],
      technologies: ["React", "Next.js", "Node.js"],
      icon: "web",
    },
    // More services...
  ],
  ar: [
    {
      id: "web-development",
      title: "تطوير المواقع",
      description: "بناء تطبيقات ويب حديثة ومتجاوبة",
      features: ["تطبيقات ويب مخصصة", "حلول التجارة الإلكترونية", "تطبيقات الويب التقدمية"],
      technologies: ["React", "Next.js", "Node.js"],
      icon: "web",
    },
    // More services...
  ],
};

export default services;
