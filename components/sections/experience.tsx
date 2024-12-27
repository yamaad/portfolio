import { Timeline } from "@/components/ui/timeline";
import { getLocalizedContent } from "@/utils/content";
import { experience, IExperience } from "@/data/content/experience";
import { AnimatePresence, motion } from "framer-motion";
import { Locale } from "@/data/content";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { formatDateToString } from "@/utils/date";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { LinkPreview } from "../ui/link-preview";

interface ExperienceCardProps {
  experience: IExperience;
  locale: Locale;
  index: number;
}

const ExperienceCard = ({ experience, locale, index }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isRTL = locale === "ar";

  // Only show first 5 tech stack items when collapsed
  const collapsedStack = experience.stack.slice(0, 5);
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className={cn(
        "relative ml-8 rounded-xl transition-all duration-300",
        "bg-gradient-to-br from-card/50 to-card",
        "border border-border/40",
        "shadow-2xl shadow-primary/15 border-primary/20",
        "transform-gpu perspective-1000",
        isExpanded && "scale-[1.02] shadow-xl shadow-primary/5 z-10"
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        {/* Company Header - Always Visible */}
        <div>
          <LinkPreview url={experience.companyUrl} className="flex items-center gap-3 mb-4 max-w-fit">
            <div className="w-8 h-8">
              <Image src={experience.companyLogo} alt={`${experience.company} logo`} className="w-full h-full" width={500} height={500} />
            </div>

            <h4 className="text-base font-medium text-primary/80 hover:text-primary">{experience.company}</h4>
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover/company:opacity-100 transition-opacity" />
          </LinkPreview>
        </div>

        {/* Role & Overview - Always Visible */}
        <h3 className="text-lg font-semibold text-foreground mb-3">{experience.role}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{experience.overview}</p>

        {!isExpanded && (
          <>
            {/* Collapsed Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {collapsedStack.map(tech => (
                <span key={tech} className="px-3 py-1 text-xs rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors">
                  {tech}
                </span>
              ))}
              {experience.stack.length > 5 && (
                <span className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">+{experience.stack.length - 5} more</span>
              )}
            </div>
          </>
        )}

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="mt-4"
            >
              {/* Highlights */}
              <div className="mb-6">
                <h4 className="font-medium text-sm text-foreground mb-3">{locale === "en" ? "Key Highlights" : "النقاط الرئيسية"}</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {experience.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact & Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-foreground mb-3">{locale === "en" ? "Impact & Metrics" : "التأثير والقياسات"}</h4>
                  <div className="space-y-2">
                    {experience.impact.metrics.map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                        <span>{metric}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-foreground mb-3">{locale === "en" ? "Key Achievements" : "الإنجازات الرئيسية"}</h4>
                  <div className="space-y-2">
                    {experience.impact.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Full Tech Stack */}
              <div>
                <h4 className="font-medium text-sm text-foreground mb-3">{locale === "en" ? "Technologies" : "التقنيات"}</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.stack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ExperienceSection = ({ locale }: { locale: Locale }) => {
  // TODO Sort data base on the data
  const localizedExperience = getLocalizedContent(experience, locale);

  const timelineData = localizedExperience.map((exp, index) => ({
    title: exp.period.end
      ? formatDateToString(exp.period.end, locale === "en" ? "en-US" : "ar-SA")
      : (locale === "en" && "present") || "الوقت الحاضر",
    content: <ExperienceCard experience={exp} locale={locale} index={index} />,
  }));

  return (
    <section className="w-full min-h-screen py-10">
      <div className="container mx-auto px-4">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default ExperienceSection;
