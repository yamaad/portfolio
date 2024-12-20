// components/sections/ui/typewriter-effect.tsx
"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map(word => ({
    ...word,
    text: word.text + " ",
  }));

  return (
    <div className={cn("inline-block", className)}>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="inline-block">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word.text + idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: idx * 0.2,
              duration: 0.5,
              ease: "easeOut",
            }}
            className={cn("inline-block", word.className)}
          >
            {word.text}
          </motion.span>
        ))}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn("inline-block rounded-sm w-[2px] h-4 -mb-1 ml-1 bg-primary", cursorClassName)}
      />
    </div>
  );
};
