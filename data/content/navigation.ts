// ./data/content/navigation.ts
import { LocalizedContent } from "@/types/content";

export interface NavigationItem {
  label: string;
  href: string;
}

const navigation: LocalizedContent<{
  items: NavigationItem[];
}> = {
  en: {
    items: [
      { label: "Home", href: "/" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  ar: {
    items: [
      { label: "الرئيسية", href: "/" },
      { label: "الخدمات", href: "#services" },
      { label: "المشاريع", href: "#projects" },
      { label: "حولي", href: "#about" },
      { label: "تواصل", href: "#contact" },
    ],
  },
};

export default navigation;
