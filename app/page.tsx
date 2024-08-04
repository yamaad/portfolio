"use client";
import Hero from "@/components/Hero";
import { LampContainer } from "@/components/ui/lamp";
import { Navbar } from "@/components/ui/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative dark:bg-black-100 flex justify-center items-center flex-col mx-auto">
      <div className="max-w-7xl w-full">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 10 }}
            transition={{
              delay: 0.3,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl "
          >
            Welcome Aboard!
          </motion.h1>
        </LampContainer>
        <Navbar
          navItems={[
            { name: "Top", link: "#" },
            { name: "Top", link: "#" },
            { name: "Top", link: "#" },
          ]}
        />
        <Hero />
      </div>
    </main>
  );
}
