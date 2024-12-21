"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const translations = {
  en: {
    transform: "Transform",
    into: "into",
    and: "and",
    unlockPotential: "Unlock Your Business Potential with Technology",
  },
  ar: {
    transform: "حول",
    into: "إلى",
    and: "و",
    unlockPotential: "أطلق إمكانات عملك من خلال التكنولوجيا",
  },
};

export const FlipWords = ({
  words,
  className = "",
  repeatDelay = 2000,
  locale = "en",
}: {
  words: [string[], string[]];
  className?: string;
  repeatDelay?: number;
  locale: "en" | "ar";
}) => {
  const [[leftWordIndex, rightWordIndex], setIndices] = useState([0, 0]);
  const t = translations[locale];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndices(([leftIndex, rightIndex]) => [(leftIndex + 1) % words[0].length, (rightIndex + 1) % words[1].length]);
    }, repeatDelay);

    return () => clearInterval(interval);
  }, [words, repeatDelay]);

  return (
    <div className={`${className} flex flex-col items-center justify-center `}>
      <div className="flex items-baseline justify-center flex-wrap text-lg sm:text-xl lg:text-2xl gap-x-1">
        <span className="text-muted-foreground">{t.transform}</span>

        {/* First flipping word */}
        <div className="text-center inline-block">
          <AnimatePresence mode="wait">
            <motion.span
              key={leftWordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80"
            >
              {words[0][leftWordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <span className="text-muted-foreground">{t.into}</span>

        {/* Second flipping word */}
        <div className=" text-start inline-block">
          <AnimatePresence mode="wait">
            <motion.span
              key={rightWordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/80 to-secondary"
            >
              {words[1][rightWordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {locale === "en" && <div className="text-sm sm:text-lg text-muted-foreground">{t.and}</div>}

      <div className="text-lg sm:text-xl lg:text-2xl text-muted-foreground">
        {locale === "ar" && t.and}
        {t.unlockPotential}
      </div>
    </div>
  );
};