// ./data/content/navigation.ts
import { LocalizedContent } from "./site-content";

export interface NavigationItem {
  label: string;
  href: string;
}

const navigation: LocalizedContent<{
  items: NavigationItem[];
}> = {
  en: {
    items: [{ label: "Home", href: "/" }],
  },
  ar: {
    items: [{ label: "الرئيسية", href: "/" }],
  },
};

export default navigation;
