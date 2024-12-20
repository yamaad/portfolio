"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import hero from "@/data/content/hero";
import { cn } from "@/utils/cn";

interface HeroProps {
  locale: "en" | "ar";
}

export const Hero = ({ locale }: HeroProps) => {
  const { theme } = useTheme();
  const content = hero[locale];
  const isRTL = locale === "ar";

  return (
    <div className={cn("relative min-h-screen flex items-center justify-center overflow-hidden", isRTL && "rtl")}>
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full bg-background">
        <div className="absolute inset-0 w-full h-full bg-grid-white/[0.2] bg-grid-[rgba(255,255,255,0.2)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {content.title}
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-muted-foreground">{content.subtitle}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-10">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full bg-primary text-white transition duration-300 ease-out hover:bg-primary/90"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-primary group-hover:skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-primary -rotate-12"></span>
              <span className="relative">{content.cta}</span>
            </a>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            {["React", "Next.js", "TypeScript", "Node.js", "Three.js"].map(tech => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
