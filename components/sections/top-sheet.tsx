"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

interface TopSheetProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: any[];
  locale: "en" | "ar";
}

export const TopSheet = ({ isOpen, setIsOpen, navItems, locale }: TopSheetProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          />

          {/* Top Sheet */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed top-20 inset-x-0 z-40 bg-gradient-to-b from-background/95 to-background/50 backdrop-blur-lg border-b border-border"
          >
            <div className="overflow-y-auto px-6 py-6">
              {/* Menu Items with Staggered Animation */}
              <nav>
                <ul className={cn("space-y-1", locale === "ar" ? "rtl" : "ltr")}>
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="overflow-hidden rounded-lg text-center"
                    >
                      <motion.a
                        href={item.href}
                        className="block px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                        onClick={() => setIsOpen(false)}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.label}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};