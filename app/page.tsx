"use client";

import { Hero } from "@/components/sections/hero";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { locale } = useLocale();

  // Ensure hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden">
      <Hero locale={locale} />
      {/* Other sections will go here */}
    </main>
  );
}
