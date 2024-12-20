// ./data/content/index.ts
import { SiteContent } from "@/types/content";
import services from "./services";
import hero from "./hero";

export const siteContent: SiteContent = {
  meta: {
    lastUpdated: "2024-12-20",
    author: "Maad Yasser",
  },
  hero,
  services,
  // projects,
  // testimonials,
  // about,
  // contact,
};

export default siteContent;
