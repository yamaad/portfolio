import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { WobbleCard } from "../ui/wobble-card";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { cn } from "@/utils/cn";
import { projects } from "@/data/content/project";
import { getLocalizedContent } from "@/utils/content";
import { Locale } from "@/data/content/site-content";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  posterPortrait?: string;
  posterLandscape?: string;
}

const ProjectImages = ({ project }: { project: Project }) => {
  const [showPortrait, setShowPortrait] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPortrait(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute right-0 bottom-0 w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={showPortrait ? "portrait" : "landscape"}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.8, x: showPortrait ? -90 : 0 }}
          exit={{ opacity: 0, x: showPortrait ? -300 : 100 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="absolute right-0 bottom-0 w-full h-full"
        >
          <Image
            src={showPortrait ? project.posterPortrait! : project.posterLandscape!}
            width={showPortrait ? 240 : 600}
            height={showPortrait ? 400 : 400}
            alt={`${project.title} ${showPortrait ? "portrait" : "landscape"} preview`}
            className={cn(
              "absolute rounded-xl hover:opacity-100 transition-opacity duration-300",
              showPortrait
                ? "-right-10 lg:-right-[15%] -bottom-10 max-h-[80%] w-auto object-contain"
                : "-right-20 lg:-right-[20%] -bottom-10 object-contain"
            )}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export function FeaturedProjects({ locale = "en" }: { locale: Locale }) {
  const LocalizedProjects = getLocalizedContent(projects, locale);
  return (
    <div className="flex flex-wrap gap-4 max-w-7xl mx-auto w-full ">
      {LocalizedProjects.map((project, index) => (
        <div key={project.title} className="flex-grow">
          <WobbleCard
            containerClassName={cn(
              "min-h-[400px] lg:min-h-[500px]",
              "group relative rounded-xl bg-card",
              "relative h-full flex flex-col justify-between z-10",
              "hover:border-primary/50",
              "transition-all duration-300 overflow-hidden",
              "hover:shadow-2xl hover:shadow-primary/20"
            )}
          >
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
              <p className="text-neutral-200 max-w-md">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-300 transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              )}
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-300 transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
              )}
            </div>

            <ProjectImages project={project} />
          </WobbleCard>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProjects;
