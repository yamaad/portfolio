import { Timeline } from "@/components/ui/timeline";
import { getLocalizedContent } from "@/utils/content";
import { experience, IExperience } from "@/data/content/experience";
import { AnimatePresence, motion } from "framer-motion";
import { Locale } from "@/data/content";
import { useState } from "react";
import { cn } from "@/utils/cn";
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

  const cardVariants = {
    hidden: { opacity: 0, x: isRTL ? 50 : -34 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "relative rounded-xl",
        "bg-gradient-to-br from-card/50 to-card",
        "border border-border/40",
        "shadow-2xl shadow-primary/15 border-primary/20",
        "transform-gpu perspective-1000 transition-all duration-300",
        "hover:shadow-xl hover:shadow-primary/5 hover:scale-[1.02]",
        "cursor-pointer select-none",
        isExpanded && "z-10"
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        {/* Company Section */}
        <LinkPreview url={experience.companyUrl} className="flex items-center gap-3 mb-4 max-w-fit group">
          <div className="w-8 h-8 overflow-hidden rounded-md">
            <Image src={experience.companyLogo} alt={`${experience.company} logo`} width={32} height={32} className="w-full h-full object-cover" />
          </div>
          <h4 className="text-base font-medium text-primary/80 group-hover:text-primary transition-colors">{experience.company}</h4>
          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </LinkPreview>

        {/* Role & Overview */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{experience.overview}</p>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div variants={contentVariants} initial="hidden" animate="visible" exit="exit" className="mt-6 space-y-6">
              {/* Highlights Section */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm text-foreground">{locale === "en" ? "Key Highlights" : "النقاط الرئيسية"}</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {experience.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      <span>{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Impact & Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Metrics Column */}
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-foreground">{locale === "en" ? "Impact & Metrics" : "التأثير والقياسات"}</h4>
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

                {/* Achievements Column */}
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-foreground">{locale === "en" ? "Key Achievements" : "الإنجازات الرئيسية"}</h4>
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ExperienceSection = ({ locale }: { locale: Locale }) => {
  // TODO Sort data base on the date
  const localizedExperience = getLocalizedContent(experience, locale);
  const isRTL = locale === "ar";
  const timelineData = localizedExperience.map((exp, index) => ({
    period: exp.period,
    logo: exp.companyLogo,
    company: exp.company,
    role: exp.role,
    companyUrl: exp.companyUrl,
    content: <ExperienceCard experience={exp} locale={locale} index={index} />,
  }));

  return (
    <section className={cn("w-full min-h-screen py-20", "flex flex-col items-center justify-center", isRTL && "rtl")}>
      <div className="container mx-auto px-4 max-w-6xl">
        <Timeline data={timelineData} locale={locale} />
      </div>
    </section>
  );
};

export default ExperienceSection;
