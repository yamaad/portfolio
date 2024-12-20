"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Languages, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import navigation from "@/data/content/navigation";
import { cn } from "@/utils/cn";
import { Logo } from "./logo";
import { TopSheet } from "./top-sheet";

interface NavbarProps {
  locale: "en" | "ar";
  onLocaleChange: (locale: "en" | "ar") => void;
}

export const Navbar = ({ locale, onLocaleChange }: NavbarProps) => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (!mounted && browserLang.startsWith("ar") && locale !== "ar") {
      onLocaleChange("ar");
    }
    setMounted(true);
  }, [mounted, locale, onLocaleChange]);

  const navItems = navigation[locale].items;

  if (!mounted) return null;

  return (
    <>
      <header dir="ltr" className="fixed top-0 w-full z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 relative flex items-center justify-between md:justify-normal">
            {/* Menu Toggle (Mobile) */}
            <div className="md:hidden">
              <button className="p-2 rounded-md hover:bg-muted" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Logo - Centered on mobile, Left on desktop */}
            <div className="absolute left-1/2 -translate-x-1/2 md:static md:left-0 md:transform-none">
              <Logo />
            </div>

            {/* Center Navigation (Desktop) */}
            <div className="hidden md:block flex-1 px-4 max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-md" />
                  <div className="absolute inset-0 bg-background/40" />
                  <div className="absolute inset-0 rounded-full border border-white/10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                </div>

                <nav className="relative">
                  <ul className={cn("flex items-center justify-center", "px-4 py-2", "gap-4 lg:gap-8")}>
                    {navItems.map(item => (
                      <motion.li key={item.href} className="whitespace-nowrap">
                        <motion.a
                          href={item.href}
                          className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors"
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
            </div>

            {/* Right section with Theme and Language toggles */}
            <div className="flex items-center gap-2 sm:gap-4">
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
            </div>
          </div>
        </div>
      </header>

      {/* Top Sheet Mobile Menu */}
      <TopSheet isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} locale={locale} />
    </>
  );
};
