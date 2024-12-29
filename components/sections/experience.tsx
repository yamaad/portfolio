import { Timeline } from "@/components/ui/timeline";
import { getLocalizedContent } from "@/utils/content";
import { experience, IExperience } from "@/data/content/experience";
import { AnimatePresence, motion } from "framer-motion";
import { Locale } from "@/data/content/site-content";
import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { LinkPreview } from "../ui/link-preview";
import { createPortal } from "react-dom";

interface ExperienceCardProps {
  experience: IExperience;
  locale: Locale;
  index: number;
}

const ExperiencePopout = ({ experience, locale, onClose }: { experience: IExperience; locale: Locale; onClose: () => void }) => {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.3,
          },
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.95,
          transition: { duration: 0.2 },
        }}
        className={cn(
          "relative",
          "w-full max-w-2xl",
          "max-h-[85vh] overflow-y-auto",
          "bg-card rounded-xl",
          "border border-border/40",
          "shadow-2xl shadow-primary/15",
          "z-50 p-6"
        )}
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors">
          <X className="w-5 h-5" />
        </button>

        {/* Company Header */}
        <LinkPreview url={experience.companyUrl} className="flex items-center gap-3 mb-6 max-w-fit group">
          <div className="w-12 h-12 overflow-hidden rounded-md">
            <Image src={experience.companyLogo} alt={`${experience.company} logo`} width={48} height={48} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-medium text-primary/80 group-hover:text-primary transition-colors">{experience.company}</h3>
            <p className="text-sm text-muted-foreground">{experience.role}</p>
          </div>
        </LinkPreview>

        {/* Overview */}
        <p className="text-muted-foreground text-base leading-relaxed mb-8">{experience.overview}</p>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Highlights Section */}
          <div className="space-y-4">
            <h4 className="font-medium text-base text-foreground">{locale === "en" ? "Key Highlights" : "النقاط الرئيسية"}</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              {experience.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Impact & Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Metrics Column */}
            <div className="space-y-4">
              <h4 className="font-medium text-base text-foreground">{locale === "en" ? "Impact & Metrics" : "التأثير والقياسات"}</h4>
              <div className="space-y-3">
                {experience.impact.metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                    <span>{metric}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements Column */}
            <div className="space-y-4">
              <h4 className="font-medium text-base text-foreground">{locale === "en" ? "Key Achievements" : "الإنجازات الرئيسية"}</h4>
              <div className="space-y-3">
                {experience.impact.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                    <span>{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};

const ExperienceCard = ({ experience, locale, index }: ExperienceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className={cn(
          "relative rounded-xl",
          "bg-gradient-to-br from-card/50 to-card",
          "border border-border/40",
          "shadow-2xl shadow-primary/15 border-primary/20",
          "transform-gpu perspective-1000 transition-all duration-300",
          "hover:shadow-xl hover:shadow-primary/5 hover:scale-[1.02]",
          "cursor-pointer select-none"
        )}
        onClick={() => setIsOpen(true)}
      >
        <div className="p-6 relative group">
          {/* Expand Indicator */}
          <div className="absolute top-4 right-4 text-muted-foreground/50 group-hover:text-primary/70 transition-colors">
            <div className="flex items-center gap-2 text-sm">
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
        </div>
      </motion.div>

      <AnimatePresence>{isOpen && <ExperiencePopout experience={experience} locale={locale} onClose={() => setIsOpen(false)} />}</AnimatePresence>
    </>
  );
};

const ExperienceSection = ({ locale }: { locale: Locale }) => {
  // TODO Sort data base on the period start date
  const totalTime = 2; // TODO: calculate the duration from the period start date of the first array item to the period end of the last array item

  const localizedExperience = getLocalizedContent(experience, locale);
  const timelineData = localizedExperience.map((exp, index) => ({
    period: exp.period,
    role: exp.role,
    content: <ExperienceCard experience={exp} locale={locale} index={index} />,
  }));

  return (
    <div className="container mx-auto pl-4 max-w-6xl">
      <div className="max-w-7xl mx-auto py-2 text-center sm:text-start">
        <h2 className="text-4xl font-bold mb-4 text-black dark:text-white max-w-4xl">
          {locale === "en" ? "Changelog from my journey" : "مسيرتي المهنية"}
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-base">
          {locale === "en"
            ? `I've been working in digital solutions for the past ${totalTime} years. Here's a timeline of my professional journey.`
            : `لقد عملت في مجال الحلول الرقمية لمدة ${totalTime} سنوات. إليكم الجدول الزمني لرحلتي المهنية.`}
        </p>
      </div>
      <Timeline data={timelineData} locale={locale} />
    </div>
  );
};

export default ExperienceSection;