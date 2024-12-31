import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "react-icons/si";
import { Skill } from "@/data/content/hero";

// Shared Icon Component
const SkillIcon = ({ iconName, color, size = 5 }: { iconName: string; color: string; size?: number }) => {
  const IconComponent = Icons[iconName as keyof typeof Icons];
  return IconComponent ? <IconComponent style={{ color }} className={`w-${size} h-${size}`} /> : null;
};

// Enhanced Alternating Rows with direction switching
export const AlternatingSkillRows = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="relative w-full overflow-hidden py-8 max-w-[100vw]">
      {/* Top Row */}
      <motion.div
        //TODO: Make
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
