"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Languages, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import navigation from "@/data/content/navigation";
import { cn } from "@/utils/cn";
import { Logo } from "./logo";

interface NavbarProps {
  locale: "en" | "ar";
  onLocaleChange: (locale: "en" | "ar") => void;
}

export const Navbar = ({ locale, onLocaleChange }: NavbarProps) => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle initial mount
  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (!mounted && browserLang.startsWith("ar") && locale !== "ar") {
      onLocaleChange("ar");
    }
    setMounted(true);
  }, [mounted, locale, onLocaleChange]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  const navItems = navigation[locale].items;

  if (!mounted) return null;

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 grid grid-cols-3 items-center">
          {/* Logo - Always on left */}
          <div className="flex justify-start">
            <Logo />
          </div>

          {/* Center Navigation with gradient glass background */}
          <div className="hidden md:block relative">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              {/* Gradient glass effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-md" />
              <div className="absolute inset-0 bg-background/40" />
              {/* Subtle border */}
              <div className="absolute inset-0 rounded-full border border-white/10" />
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            </div>

            <nav className="relative px-6 py-2">
              <ul className={cn("flex items-center justify-center gap-8", locale === "ar" ? "rtl" : "ltr")}>
                {navItems.map(item => (
                  <motion.li key={item.href}>
                    <motion.a
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      {item.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Actions - Always on right */}
          <div className="flex justify-end items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-muted"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-slate-800" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onLocaleChange(locale === "en" ? "ar" : "en")}
              className="p-2 rounded-full hover:bg-muted"
              aria-label="Toggle language"
            >
              <Languages className="w-5 h-5" />
            </motion.button>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-md hover:bg-muted" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div initial="closed" animate={isOpen ? "open" : "closed"} variants={menuVariants} className="md:hidden">
        <nav
          className={cn(
            "px-4 py-3 border-y border-white/10",
            "bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10",
            "backdrop-blur-md bg-background/40"
          )}
        >
          <ul className={cn("space-y-2", locale === "ar" ? "rtl" : "ltr")}>
            {navItems.map(item => (
              <li key={item.href}>
                <motion.a
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};
