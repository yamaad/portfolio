import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatDateToString } from "@/utils/date";
import { getLocalizedContent } from "@/utils/content";
import { experience, Experience } from "@/data/content/experience";
import { Building2, ExternalLink } from "lucide-react";
import { cn } from "@/utils/cn";
import { Locale } from "@/data/content";

interface ExperienceSectionProps {
  locale: Locale;
}

const ExperienceCard: React.FC<{
  experience: Experience;
  isPresent: boolean;
  locale: Locale;
  index: number;
}> = ({ experience: exp, isPresent, locale, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isRTL = locale === "ar";

  // Only show first 5 tech stack items when collapsed
  const collapsedStack = exp.stack.slice(0, 5);

  return (
    <div className="relative group">
      {/* Date Marker */}
      <div className="absolute left-0 -translate-x-[calc(100%+1.5rem)] top-6 w-24 text-right">
        <span className="text-sm font-medium text-muted-foreground">{formatDateToString(exp.period.start, locale === "en" ? "en-US" : "ar-SA")}</span>
      </div>

      {/* Timeline Dot */}
      <div className="absolute left-0 -translate-x-[6px] top-7">
        {isPresent ? (
          <div className="relative">
            <div className="absolute w-3 h-3 bg-primary/50 rounded-full animate-ping" />
            <div className="relative w-3 h-3 bg-primary rounded-full ring-4 ring-background" />
          </div>
        ) : (
          <div className="w-3 h-3 bg-muted-foreground rounded-full ring-4 ring-background" />
        )}
      </div>

      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        className={cn(
          "relative ml-8 rounded-xl transition-all duration-300",
          "bg-gradient-to-br from-card/50 to-card",
          "border border-border/40",
          "hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20",
          "transform-gpu perspective-1000",
          isExpanded && "scale-[1.02] shadow-xl shadow-primary/5 z-10"
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="p-6">
          {/* Company Header - Always Visible */}
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-muted rounded-lg p-2">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <div
              className="flex items-center gap-2 group/company cursor-pointer"
              onClick={e => {
                e.stopPropagation();
                // window.open(exp.companyUrl, "_blank");
              }}
            >
              <h4 className="text-base font-medium text-primary/80 hover:text-primary">{exp.company}</h4>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover/company:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Role & Overview - Always Visible */}
          <h3 className="text-lg font-semibold text-foreground mb-3">{exp.role}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.overview}</p>

          {!isExpanded && (
            <>
              {/* Collapsed Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {collapsedStack.map(tech => (
                  <span key={tech} className="px-3 py-1 text-xs rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors">
                    {tech}
                  </span>
                ))}
                {exp.stack.length > 5 && (
                  <span className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">+{exp.stack.length - 5} more</span>
                )}
              </div>

              {/* Collapsed Highlights */}
              <div className="space-y-2 text-sm text-muted-foreground">
                {exp.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
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
                    {exp.highlights.map((highlight, i) => (
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
                      {exp.impact.metrics.map((metric, i) => (
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
                      {exp.impact.achievements.map((achievement, i) => (
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
                    {exp.stack.map((tech, i) => (
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
    </div>
  );
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ locale = "en" }) => {
  const experiences: Experience[] = getLocalizedContent(experience, locale);
  const isRTL = locale === "ar";

  return (
    <section className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {locale === "en" ? "Professional Journey" : "المسيرة المهنية"}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {locale === "en" ? "Building digital solutions that drive business growth" : "بناء حلول رقمية تدفع نمو الأعمال"}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className={cn("relative", isRTL && "rtl")}>
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 h-full w-px bg-border" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={`${exp.company}-${exp.period.start}`}
                experience={exp}
                isPresent={exp.period.end === null}
                locale={locale}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
