"use client";

import { Hero } from "@/components/sections/hero";
import { RootWrapper } from "@/app/root-wrapper";
import { useEffect, useState } from "react";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { useLocale } from "./locale-provider";
import ExperienceSection from "@/components/sections/experience";
import { cn } from "@/utils/cn";
// import FeaturedProjects from "@/components/sections/project";
import { getLocalizedContent } from "@/utils/content";
import FeaturedProjects from "@/components/sections/Featured-project";
// import { projects } from "@/data/content/project";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { locale } = useLocale();
  // const localizedProjects = getLocalizedContent(projects, locale);
  // Ensure hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ParticlesBackground>
      <RootWrapper>
        <div className="relative flex justify-center items-center flex-col">
          <Hero locale={locale} />
          {/* <FeaturedProjects projects={localizedProjects} locale={locale} /> */}
          <FeaturedProjects locale={locale} />
          <section
            className={cn(
              "min-h-screen py-20 flex-grow",
              "flex items-start justify-center sm:flex-col-reverse lg:flex-row",
              locale === "ar" && "rtl"
            )}
          >
            <ExperienceSection locale={locale} />
          </section>
          {/* Other sections will go here */}
        </div>
      </RootWrapper>
    </ParticlesBackground>
  );
}
