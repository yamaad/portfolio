import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { getLocalizedContent } from "@/utils/content";
import { projects } from "@/data/content/project";
import { Locale } from "@/data/content/site-content";
import { LinkPreview } from "../ui/link-preview";
import { encode } from "querystring";

interface Project {
  title: string;
  type: string;
  period: {
    startYear: Number;
    endYear?: Number;
  };
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  posterPortrait?: string;
  posterLandscape?: string;
}

const ProjectImages = ({ project }: { project: Project }) => {
  const getDemoLinkScreenshot = (isForMobile: boolean) => {
    if (true || (!project.posterLandscape && !project.posterPortrait && project.demoLink)) {
      const mobileAttributes = isForMobile
        ? {
            "viewport.isMobile": true,
            "viewport.width": 375, // iPhone X width
            "viewport.height": 812, // iPhone X height
            "viewport.deviceScaleFactor": 2, // Retina display
          }
        : {
            "viewport.isMobile": false,
          };
      const params = encode({
        url: project.demoLink,
        screenshot: true,
        meta: false,
        embed: "screenshot.url",
        colorScheme: "dark",
        waitForTimeout: 5000,
        ...mobileAttributes,
      });
      return `https://api.microlink.io/?${params}`;
    } else return;
  };
  const demoLinkScreenshotPortrait = getDemoLinkScreenshot(true);
  const demoLinkScreenshotLandscape = getDemoLinkScreenshot(false);
  return (
    <div className="relative mt-2 w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        {(project.posterPortrait || demoLinkScreenshotPortrait) && (
          <motion.div
            key={"landscape"}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 0.7, x: 0 }}
            whileHover={{ opacity: 1 }}
            whileFocus={{ opacity: 0.7, x: 0 }}
            whileTap={{ opacity: 0.7, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={cn(
              "absolute rounded-xl hover:opacity-100 transition-opacity duration-300 overflow-hidden",
              "right-[70%] lg:right-[70%] -bottom-[12%]"
            )}
          >
            <Image
              src={project.posterPortrait || demoLinkScreenshotPortrait!}
              width={200}
              height={600}
              alt={`${project.title}  preview`}
              className="object-contain"
            />
          </motion.div>
        )}
        {(project.posterLandscape || demoLinkScreenshotLandscape) && (
          <motion.div
            key={"landscape"}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 0.7, x: 0 }}
            whileFocus={{ opacity: 0.7, x: 0 }}
            whileTap={{ opacity: 0.7, x: 0 }}
            viewport={{ amount: 1, once: true }}
            whileHover={{ opacity: 1 }}
            exit={{ opacity: 1, x: 100 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <Image
              src={project.posterLandscape || demoLinkScreenshotLandscape!}
              width={600}
              height={400}
              alt={`${project.title}  preview`}
              className={cn(
                "absolute rounded-xl hover:opacity-100 transition-opacity duration-300",
                "-right-[31%] lg:-right-[31%] -bottom-[15%] object-contain"
              )}
            />
          </motion.div>
        )}
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
        "min-h-[400px]  min-w-full  md:min-w-[500px] max-w-full",
        "group relative rounded-xl bg-card",
        "border border-muted hover:border-primary/50",
        "transition-all duration-300 overflow-hidden",
        "hover:shadow-2xl hover:shadow-primary/20"
      )}
    >
      {/* Content Container */}
      <div className="z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex px-6 pt-6 pb-2 justify-between items-center">
          <div className="flex gap-2 items-center">
            <h3 className="text-xl lg:text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 text-end">
              {project.title}
            </h3>
            <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">{project.type}</span>
            <span className="text-xs text-muted-foreground">
              {project.period.startYear.toString()}
              {project.period.endYear && project.period.endYear !== project.period.startYear ? ` - ${project.period.endYear}` : " - present"}
            </span>
          </div>
          <div className="flex gap-4 items-center">
            {project.githubLink && (
              <LinkPreview url={project.githubLink} className="flex items-center gap-3 max-w-fit group">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="rounded-full hover:bg-muted">
                  <Github className="w-5 h-5" />
                </motion.div>
              </LinkPreview>
            )}
            {project.demoLink && (
              <LinkPreview url={project.demoLink} className="flex items-center gap-3 max-w-fit group">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="rounded-full hover:bg-muted">
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
        <div className="px-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map(tech => (
            <span key={tech} className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">+{project.technologies.length - 4}</span>
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 w-full">
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

        <div className="flex flex-row gap-4 overflow-x-scroll">
          {localizedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
