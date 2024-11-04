"use client";
import Hero from "@/components/Hero";
import { LampContainer } from "@/components/ui/lamp";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <LampContainer>
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
        </LampContainer> */}
        <FloatingNav
          navItems={[
            { name: "Home", link: "#", icon: <FaHome /> },
            { name: "About", link: "#", icon: <FaUser /> },
            { name: "Projects", link: "#", icon: <FaBriefcase /> },
            { name: "Contact", link: "#", icon: <FaEnvelope /> },
          ]}
        />
        <Hero />
      </div>
    </main>
  );
}
