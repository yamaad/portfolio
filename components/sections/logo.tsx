// ./components/logo.tsx
import React from "react";
import { motion } from "framer-motion";

export const Logo = () => (
  <motion.div className="flex items-center flex-col" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <svg className="h-8 w-8" viewBox="0 0 100 100">
      {/* Hexagon background */}
      <motion.path
        d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"
        className="stroke-primary"
        fill="none"
        strokeWidth="4"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Stylized Y */}
      <path
        d="M35 25 L50 45 L65 25 M50 45 L50 75"
        className="stroke-primary"
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    {/* Text part */}
    <span className="font-bold text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Yamaad</span>
  </motion.div>
);
