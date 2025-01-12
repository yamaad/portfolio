import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { Project } from "@/data/content/project";

const ProjectCard = ({ project }: { project: Project }) => {
  const [imageHeight, setImageHeight] = React.useState(0);
  const [imageWidth, setImageWidth] = React.useState(0);
  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.target as HTMLImageElement;
    setImageHeight(img.naturalHeight);
    setImageWidth(img.naturalWidth);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group relative rounded-xl bg-card",
        "border border-muted hover:border-primary/50",
        "transition-all duration-300 overflow-hidden",
        "hover:shadow-2xl hover:shadow-primary/20",
        " w-fit h-fit "
      )}
    >
      {/* Content Container */}
      <div className=" h-fit w-fit  z-10 flex flex-col">
        {/* Header */}
        <div className="flex px-6 pt-6 justify-between items-start">
          <h3 className="text-xl lg:text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-muted"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
            {project.demoLink && (
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-muted"
              >
                <Globe className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className=" h-fit max-w-fit  flex pl-6 justify-between ">
          <div className="flex-grow">
            <p className="mt-4 max-w-96 px-6 text-muted-foreground text-wrap">{project.description}</p>
            {/* Features */}
            <div className="mt-6 space-y-2">
              <h4 className="font-medium text-primary/80">Key Features:</h4>
              {/* <ul className="space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 mt-0.5 text-primary/60" />
                    {feature}
                  </li>
                ))}
              </ul> */}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.technologies.map(tech => (
                <span key={tech} className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Image */}

          <div className={cn("relative w-[300px] h-[300px] self-end  overflow-hidden rounded-2xl transition-transform duration-300")}>
            <div
              className={cn(
                "absolute -bottom-0 -right-0 h-full w-full place-content-end items-end rounded-2xl transition-transform duration-300 object-contain hover:scale-75 flex"
              )}
            >
              {project.posterLandscape && (
                <Image
                  src={project.posterLandscape}
                  width={0}
                  height={0}
                  quality={100}
                  sizes="100%"
                  onLoad={handleImageLoad}
                  style={{ width: imageHeight > imageWidth ? "auto" : "100%", height: imageHeight > imageWidth ? "100%" : "auto" }}
                  // style={{ width: imageWidth + "px", height: imageHeight + "px" }}
                  alt={`${project.title} screenshot`}
                  className="object-contain rounded-2xl"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = ({ projects, locale = "en" }: { projects: Project[]; locale: string }) => {
  const isRTL = locale === "ar";

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
          {projects.map((project, index) => {
            return <ProjectCard key={project.title} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
