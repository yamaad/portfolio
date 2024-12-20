"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiThreedotjs,
  SiFlutter,
} from "react-icons/si";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { Button } from "../ui/moving-border";
import hero from "@/data/content/hero";
import { cn } from "@/utils/cn";

const technologies = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiNestjs, name: "NestJS" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiThreedotjs, name: "Three.js" },
  { icon: SiFlutter, name: "Flutter" },
];

interface HeroProps {
  locale: "en" | "ar";
}

export const Hero = ({ locale }: HeroProps) => {
  const { theme } = useTheme();
  const content = hero[locale];
  const isRTL = locale === "ar";

  const words = content.title.split(" ").map(word => ({
    text: word,
    className: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary",
  }));

  return (
    <div className={cn("relative min-h-screen w-full flex items-center justify-center overflow-hidden", isRTL && "rtl")}>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Animated title */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8">
            <TypewriterEffect words={words} className="text-4xl sm:text-6xl lg:text-7xl font-bold" />
          </motion.div>

          {/* Subtitle */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-muted-foreground">{content.subtitle}</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button borderRadius="1.75rem" className="bg-primary text-white border-slate-800 dark:border-slate-200" href="#projects">
              {content.cta}
            </Button>
            <Button borderRadius="1.75rem" className="bg-secondary text-white border-slate-800 dark:border-slate-200" href="#contact">
              {locale === "en" ? "Book a Call" : "احجز مكالمة"}
            </Button>
          </motion.div>

          {/* Tech stack with logos */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-16">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-3xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 backdrop-blur-sm hover:bg-muted/80 transition-colors"
                >
                  <tech.icon className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;