"use client";

import { Hero } from "@/components/sections/hero";
import { RootWrapper } from "@/components/sections/root-wrapper";
import { useLocale } from "@/components/providers/locale-provider";
import { useEffect, useState } from "react";
import { ParticlesBackground } from "@/components/ui/particles-background";

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
          {/* Other sections will go here */}
        </div>
      </RootWrapper>
    </ParticlesBackground>
  );
}
