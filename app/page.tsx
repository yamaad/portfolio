"use client";

import { Hero } from "@/components/sections/hero";
import { RootWrapper } from "@/app/root-wrapper";
import { useEffect, useState } from "react";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { useLocale } from "./locale-provider";
import ExperienceSection from "@/components/sections/experience";
import ServicesSection from "@/components/sections/services";
import ProjectsSection from "@/components/sections/projects";
import PricingSection from "@/components/sections/pricing";
import ContactSection from "@/components/sections/contact";
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
          {/* Hero Section */}
          <Hero locale={locale} />
          
          {/* Services Section */}
          <section className={cn("w-full", locale === "ar" && "rtl")}>
            <ServicesSection locale={locale} />
          </section>

          {/* Experience Section */}
          <section className={cn("max-w-2xl min-h-screen py-20 flex-grow", "flex items-start justify-center", locale === "ar" && "rtl")}>
            <ExperienceSection locale={locale} />
          </section>

          {/* Projects Section */}
          <section className={cn("w-full", locale === "ar" && "rtl")}>
            <ProjectsSection locale={locale} />
          </section>

          {/* Pricing Section */}
          <section className={cn("w-full", locale === "ar" && "rtl")}>
            <PricingSection locale={locale} />
          </section>

          {/* Contact Section */}
          <section className={cn("w-full", locale === "ar" && "rtl")}>
            <ContactSection locale={locale} />
          </section>
        </div>
      </RootWrapper>
    </ParticlesBackground>
  );
}