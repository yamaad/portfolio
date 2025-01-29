import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { getLocalizedContent } from "@/utils/content";
import { projects } from "@/data/content/project";
import { Locale } from "@/data/content/site-content";
import { LinkPreview } from "../ui/link-preview";

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
  return (
    <div className="absolute right-0 top-16 w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={"landscape"}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.8, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-4 w-full h-full"
        >
          <Image
            src={project.posterLandscape!}
            width={600}
            height={400}
            alt={`${project.title}  preview`}
            className={cn(
              "absolute rounded-xl hover:opacity-100 transition-opacity duration-300",
              "-right-10 lg:-right-[5%] -bottom-1 object-contain"
            )}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "min-h-[400px] lg:min-h-[500px] min-w-[400px] flex-grow",
        "group relative rounded-xl bg-card",
        "border border-muted hover:border-primary/50",
        "transition-all duration-300 overflow-hidden",
        "hover:shadow-2xl hover:shadow-primary/20"
      )}
    >
      {/* Content Container */}
      <div className="z-10 flex flex-col">
        {/* Header */}
        <div className="flex p-6 justify-between ">
          <h3 className="text-xl lg:text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            {project.title}
          </h3>
          <div className="flex gap-4 items-center">
            {project.githubLink && (
              <LinkPreview url={project.githubLink} className="flex items-center gap-3 max-w-fit group">
                <motion.div rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="rounded-full hover:bg-muted">
                  <Github className="w-5 h-5" />
                </motion.div>
              </LinkPreview>
            )}
            {project.demoLink && (
              <LinkPreview url={project.demoLink} className="flex items-center gap-3 max-w-fit group">
                <motion.div rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="rounded-full hover:bg-muted">
                  <Globe className="w-5 h-5" />
                </motion.div>
              </LinkPreview>
            )}
            {/* Expand Icon */}
            <div className="text-muted-foreground/50 group-hover:text-primary/70 transition-colors h-fit">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:scale-110"
              >
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </div>
        </div>
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map(tech => (
            <span key={tech} className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">+{project.technologies.length - 3}</span>
          )}
        </div>
        {/* Project Image */}
        <div className=" flex-grow flex-shrink">
          <ProjectImages project={project} />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = ({ locale = "en" }: { locale: Locale }) => {
  const isRTL = locale === "ar";
  const localizedProjects = getLocalizedContent(projects, locale);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Explore my recent work showcasing technical expertise and creative solutions.</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-2 ">
          {localizedProjects.map((project, index) => {
            return <ProjectCard key={project.title} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
