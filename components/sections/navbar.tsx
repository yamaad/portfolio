"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Languages, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import navigation from "@/data/content/navigation";
import { cn } from "@/utils/cn";
import { TopSheet } from "./top-sheet";
import { LampContainer } from "../ui/lamp";

interface NavbarProps {
  locale: "en" | "ar";
  onLocaleChange: (locale: "en" | "ar") => void;
}

const Logo = () => (
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

const navItems = {
  en: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" }
  ],
  ar: [
    { label: "الرئيسية", href: "#home" },
    { label: "الخدمات", href: "#services" },
    { label: "الخبرة", href: "#experience" },
    { label: "المشاريع", href: "#projects" },
    { label: "الأسعار", href: "#pricing" },
    { label: "التواصل", href: "#contact" }
  ]
};

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

  const currentNavItems = navItems[locale];

  if (!mounted) return null;

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header
        dir="ltr"
        className="fixed top-0 w-full z-50 md:bg-transparent sm:bg-background/5 sm:backdrop-blur-lg md:backdrop:blur-0 sm:shadow-2xl md:shadow-none"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="h-20 relative flex items-center md:items-end md:pb-1 justify-between md:justify-normal">
            {/* Menu Toggle (Mobile) */}
            <div className="md:hidden bg-transparent ">
              <button className="p-2 rounded-md hover:bg-muted active:bg-transparent" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X className="w-6 h-6 bg-transparent" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Logo */}
            <div className="absolute left-1/2 -translate-x-1/2  md:left-0 md:transform-none">
              <Logo />
            </div>

            <div className="hidden md:block w-full">
              <nav className="relative">
                <ul className={cn("flex items-center justify-center", "px-4", "gap-4 lg:gap-8")}>
                  {currentNavItems.map(item => (
                    <motion.li key={item.href} className="whitespace-nowrap">
                      <motion.button
                        onClick={() => scrollToSection(item.href)}
                        className="text-lg lg:text-lg text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                      >
                        {item.label}
                      </motion.button>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right section with Theme and Language toggles */}
            <div className="md:absolute right-4 top-6  z-50  flex items-center gap-1 sm:gap-4">
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
      <TopSheet isOpen={isOpen} setIsOpen={setIsOpen} navItems={currentNavItems} locale={locale} onItemClick={scrollToSection} />
      <LampContainer className="hidden md:flex">
        <></>
      </LampContainer>
    </>
  );
};