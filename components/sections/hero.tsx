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
  SiRedux,
  SiMui,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiSass,
  SiWebflow,
  SiSocketdotio,
  SiOpenapiinitiative,
  SiRabbitmq,
  SiGit,
  SiJira,
  SiBitbucket,
  SiVite,
  SiDart,
  SiGooglemaps,
  SiOpenai,
  SiAirtable,
} from "react-icons/si";
import { Button } from "../ui/moving-border";
import hero from "@/data/content/hero";
import { cn } from "@/utils/cn";
import { type Skill } from "@/types/content";
import { FlipWords } from "../ui/flip-words";

const iconMap = {
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
  SiRedux,
  SiMui,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiSass,
  SiWebflow,
  SiSocketdotio,
  SiOpenapiinitiative,
  SiRabbitmq,
  SiGit,
  SiJira,
  SiBitbucket,
  SiVite,
  SiDart,
  SiGooglemaps,
  SiOpenai,
  SiAirtable,
};

interface HeroProps {
  locale: "en" | "ar";
}

export const Hero = ({ locale }: HeroProps) => {
  const { theme } = useTheme();
  const content = hero[locale];
  const isRTL = locale === "ar";

  const SkillIcon = ({ skill }: { skill: Skill }) => {
    const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="w-6 h-6" style={{ color: skill.color }} /> : null;
  };

  return (
    <div className={cn("relative min-h-screen w-full flex items-center justify-center overflow-hidden", isRTL && "rtl")}>
      <div className="relative z-10  px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <div className="text-center space-y-8">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-tight"
          >
            {content.title}
          </motion.h1>

          {/* Dynamic Subtitle with FlipWords */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground font-semibold "
          >
            <FlipWords words={content.flipWords} className="py0" repeatDelay={4000} locale={locale} />
          </motion.div>

          {/* Description */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {content.description}
          </motion.p> */}

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4">
            {content.highlights.map((highlight, index) => (
              <motion.span
                key={highlight}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="px-4 py-2 rounded-full bg-muted/50 text-muted-foreground backdrop-blur-sm"
              >
                {highlight}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button borderRadius="1.75rem" className="bg-primary text-white border-slate-800 dark:border-slate-200" href="#projects">
              {content.primaryCta}
            </Button>
            <Button borderRadius="1.75rem" className="bg-secondary text-white border-slate-800 dark:border-slate-200" href="#contact">
              {content.secondaryCta}
            </Button>
          </div>

          {/* Skills Grid */}
          <div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-3xl mx-auto">
              {content.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (index % 6) }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 backdrop-blur-sm hover:bg-muted/80 transition-colors group"
                >
                  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                    <SkillIcon skill={skill} />
                  </motion.div>
                  <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;