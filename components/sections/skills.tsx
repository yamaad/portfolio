import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "react-icons/si";
import { Skill } from "@/types/content";
import { cn } from "@/utils/cn";

// Shared Icon Component
const SkillIcon = ({ iconName, color, size = 5 }: { iconName: string; color: string; size?: number }) => {
  const IconComponent = Icons[iconName as keyof typeof Icons];
  return IconComponent ? <IconComponent style={{ color }} className={`w-${size} h-${size}`} /> : null;
};

// space floating
export const SpaceFloatingSkills = ({ skills }: { skills: Skill[] }) => {
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      const container = document.getElementById("skills-container");
      if (container) {
        setContainerDimensions({
          width: container.clientWidth,
          height: container.clientHeight,
        });
      }
      setIsMobile(window.innerWidth < 768);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const getRandomPosition = (index: number) => {
    // Create a grid-like distribution for initial positions
    const columns = isMobile ? 2 : 4;
    const rows = Math.ceil(skills.length / columns);
    const column = index % columns;
    const row = Math.floor(index / columns);

    // Calculate base position within the grid
    const baseX = (column / columns) * 100;
    const baseY = (row / rows) * 100;

    // Add some randomness but keep within bounds
    const randomX = baseX + (Math.random() * 20 - 10);
    const randomY = baseY + (Math.random() * 20 - 10);

    return {
      left: `${Math.min(Math.max(randomX, 5), 95)}%`,
      top: `${Math.min(Math.max(randomY, 5), 95)}%`,
    };
  };

  const getFloatingAnimation = () => {
    const range = isMobile ? 20 : 50;
    return {
      x: [-range / 2, range / 2, -range / 2],
      y: [-range / 2, range / 2, -range / 2],
    };
  };

  return (
    <div id="skills-container" className="relative w-full overflow-hidden" style={{ height: isMobile ? "50vh" : "50vh" }}>
      <div className="relative h-full w-full">
        <AnimatePresence>
          {skills.map((skill, index) => {
            const position = getRandomPosition(index);
            const floatingAnimation = getFloatingAnimation();

            return (
              <motion.div
                key={skill.name}
                className="absolute"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  ...floatingAnimation,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.1,
                }}
                style={position}
              >
                <motion.div
                  className={cn(
                    "group flex items-center gap-2 px-2 py-1.5 sm:px-3 sm:py-2",
                    "rounded-lg backdrop-blur-sm cursor-pointer",
                    "bg-muted/30 hover:bg-muted/50",
                    "text-xs sm:text-sm"
                  )}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                >
                  <SkillIcon iconName={skill.icon} color={skill.color} />
                  <span className="whitespace-nowrap">{skill.name}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Enhanced Alternating Rows with direction switching
export const AlternatingSkillRows = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="relative w-full overflow-hidden py-8 max-w-[100vw]">
      {/* Top Row */}
      <motion.div
        className="flex gap-4 py-2"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-muted/30"
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <SkillIcon iconName={skill.icon} color={skill.color} />
            <span className="text-sm whitespace-nowrap">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Row */}
      <motion.div
        className="flex gap-4 py-4"
        animate={{
          x: [-1000, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-muted/30"
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <SkillIcon iconName={skill.icon} color={skill.color} />
            <span className="text-sm whitespace-nowrap">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
