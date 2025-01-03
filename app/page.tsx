"use client";

import { Hero } from "@/components/sections/hero";
import { RootWrapper } from "@/app/root-wrapper";
import { useEffect, useState } from "react";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { useLocale } from "./locale-provider";
import ExperienceSection from "@/components/sections/experience";
import { cn } from "@/utils/cn";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { locale } = useLocale();

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
          <section className={cn("max-w-2xl min-h-screen py-20 flex-grow", "flex  items-start justify-center", locale === "ar" && "rtl")}>
            <ExperienceSection locale={locale} />
          </section>
          {/* Other sections will go here */}
        </div>
      </RootWrapper>
    </ParticlesBackground>
  );
}
