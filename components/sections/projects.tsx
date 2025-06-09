"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Calendar, Users, Zap } from "lucide-react";
import { cn } from "@/utils/cn";
import { Locale } from "@/data/content/site-content";
import Image from "next/image";
import { createPortal } from "react-dom";

interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  metrics?: string[];
  links: {
    demo?: string;
    github?: string;
    case_study?: string;
  };
  image: string;
  gradient: string;
  status: "completed" | "ongoing" | "planned";
}

const projects = {
  en: [
    {
      id: "engages-platform",
      title: "Engages.ai Platform",
      type: "Full-time Development",
      description: "AI-powered chatbot solution for CRM, inside sales, and marketing automation.",
      longDescription: "A comprehensive platform that revolutionizes customer relationship management through intelligent automation. Built scalable chatbot solutions using advanced AI frameworks and real-time communication systems.",
      technologies: ["React", "TypeScript", "Redux Toolkit", "NestJS", "PostgreSQL", "WebSocket", "RabbitMQ", "Rasa", "OpenAI API"],
      features: [
        "Real-time chat interface with WebSocket integration",
        "AI-powered customer support automation",
        "Advanced CRM data management",
        "Multi-language chatbot support",
        "Analytics dashboard with real-time metrics",
        "Scalable microservices architecture"
      ],
      metrics: [
        "60% of core features modernized",
        "90% completion rate achieved",
        "50% improvement in customer response time",
        "3 custom chatbots deployed"
      ],
      links: {
        demo: "https://chat.engages.ai/",
        case_study: "#"
      },
      image: "/engagesai.svg",
      gradient: "from-blue-500 to-purple-600",
      status: "ongoing"
    },
    {
      id: "edumize-website",
      title: "Edumize Platform",
      type: "Client Project",
      description: "Comprehensive platform for international students pursuing higher education in Malaysia.",
      longDescription: "A full-featured educational platform that connects international students with Malaysian universities. Features advanced search, application tracking, and multilingual support.",
      technologies: ["WebFlow", "Framer Motion", "Express", "Airtable", "React", "Node.js"],
      features: [
        "University search and filtering system",
        "Application tracking dashboard",
        "Multilingual content management",
        "Student consultation booking",
        "Document upload and verification",
        "Real-time notifications"
      ],
      metrics: [
        "500+ universities listed",
        "1000+ student applications processed",
        "95% user satisfaction rate",
        "40% increase in conversion rate"
      ],
      links: {
        demo: "https://www.edumize.com/en/home"
      },
      image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg",
      gradient: "from-green-500 to-teal-600",
      status: "completed"
    },
    {
      id: "portfolio-website",
      title: "Personal Portfolio",
      type: "Personal Project",
      description: "Modern, bilingual portfolio with cutting-edge animations and responsive design.",
      longDescription: "A showcase of modern web development techniques featuring advanced animations, bilingual support, and optimized performance. Built with the latest Next.js features and design trends.",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Aceternity UI"],
      features: [
        "Bilingual support (English/Arabic)",
        "Advanced Framer Motion animations",
        "Responsive design across all devices",
        "Dark/light theme switching",
        "Interactive particle background",
        "Optimized performance and SEO"
      ],
      metrics: [
        "100% Lighthouse performance score",
        "Sub-second loading times",
        "Fully accessible (WCAG compliant)",
        "Mobile-first responsive design"
      ],
      links: {
        github: "https://github.com/username/portfolio"
      },
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
      gradient: "from-purple-500 to-pink-600",
      status: "completed"
    }
  ],
  ar: [
    {
      id: "engages-platform",
      title: "منصة Engages.ai",
      type: "تطوير بدوام كامل",
      description: "حل روبوت الدردشة المدعوم بالذكاء الاصطناعي لإدارة علاقات العملاء والمبيعات والتسويق.",
      longDescription: "منصة شاملة تحدث ثورة في إدارة علاقات العملاء من خلال الأتمتة الذكية. بناء حلول روبوتات الدردشة القابلة للتطوير باستخدام أطر الذكاء الاصطناعي المتقدمة وأنظمة الاتصال في الوقت الفعلي.",
      technologies: ["React", "TypeScript", "Redux Toolkit", "NestJS", "PostgreSQL", "WebSocket", "RabbitMQ", "Rasa", "OpenAI API"],
      features: [
        "واجهة دردشة في الوقت الفعلي مع تكامل WebSocket",
        "أتمتة دعم العملاء المدعومة بالذكاء الاصطناعي",
        "إدارة بيانات CRM المتقدمة",
        "دعم روبوت الدردشة متعدد اللغات",
        "لوحة تحليلات مع مقاييس الوقت الفعلي",
        "هندسة الخدمات المصغرة القابلة للتطوير"
      ],
      metrics: [
        "تحديث 60% من الميزات الأساسية",
        "تحقيق معدل إنجاز 90%",
        "تحسن 50% في وقت استجابة العملاء",
        "نشر 3 روبوتات دردشة مخصصة"
      ],
      links: {
        demo: "https://chat.engages.ai/",
        case_study: "#"
      },
      image: "/engagesai.svg",
      gradient: "from-blue-500 to-purple-600",
      status: "ongoing"
    },
    {
      id: "edumize-website",
      title: "منصة Edumize",
      type: "مشروع عميل",
      description: "منصة شاملة للطلاب الدوليين الساعين للحصول على التعليم العالي في ماليزيا.",
      longDescription: "منصة تعليمية متكاملة تربط الطلاب الدوليين بالجامعات الماليزية. تتميز بالبحث المتقدم وتتبع التطبيقات والدعم متعدد اللغات.",
      technologies: ["WebFlow", "Framer Motion", "Express", "Airtable", "React", "Node.js"],
      features: [
        "نظام البحث والتصفية للجامعات",
        "لوحة تتبع التطبيقات",
        "إدارة المحتوى متعدد اللغات",
        "حجز استشارات الطلاب",
        "رفع المستندات والتحقق منها",
        "الإشعارات في الوقت الفعلي"
      ],
      metrics: [
        "أكثر من 500 جامعة مدرجة",
        "معالجة أكثر من 1000 طلب طالب",
        "معدل رضا المستخدمين 95%",
        "زيادة 40% في معدل التحويل"
      ],
      links: {
        demo: "https://www.edumize.com/en/home"
      },
      image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg",
      gradient: "from-green-500 to-teal-600",
      status: "completed"
    },
    {
      id: "portfolio-website",
      title: "الموقع الشخصي",
      type: "مشروع شخصي",
      description: "موقع شخصي حديث ثنائي اللغة مع رسوم متحركة متطورة وتصميم متجاوب.",
      longDescription: "عرض لتقنيات تطوير الويب الحديثة يتميز بالرسوم المتحركة المتقدمة والدعم ثنائي اللغة والأداء المحسن. مبني بأحدث ميزات Next.js واتجاهات التصميم.",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Aceternity UI"],
      features: [
        "دعم ثنائي اللغة (الإنجليزية/العربية)",
        "رسوم متحركة متقدمة بـ Framer Motion",
        "تصميم متجاوب عبر جميع الأجهزة",
        "تبديل السمة المظلمة/الفاتحة",
        "خلفية جسيمات تفاعلية",
        "أداء محسن وتحسين محركات البحث"
      ],
      metrics: [
        "نتيجة أداء Lighthouse 100%",
        "أوقات تحميل أقل من ثانية",
        "قابلية وصول كاملة (متوافق مع WCAG)",
        "تصميم متجاوب يركز على الهاتف المحمول"
      ],
      links: {
        github: "https://github.com/username/portfolio"
      },
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
      gradient: "from-purple-500 to-pink-600",
      status: "completed"
    }
  ]
};

const ProjectModal = ({ project, locale, onClose }: { project: Project; locale: Locale; onClose: () => void }) => {
  const isRTL = locale === "ar";

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

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className={cn(
          "relative w-full max-w-4xl max-h-[90vh] overflow-y-auto",
          "bg-card rounded-2xl border border-border/40",
          "shadow-2xl shadow-primary/20",
          isRTL && "rtl"
        )}
      >
        {/* Header */}
        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <div className={cn("absolute inset-0 bg-gradient-to-br", project.gradient, "opacity-90")} />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            ×
          </button>
          
          {/* Title overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm">
                {project.type}
              </span>
              <span className={cn(
                "px-3 py-1 rounded-full text-sm",
                project.status === "completed" ? "bg-green-500/20 text-green-300" :
                project.status === "ongoing" ? "bg-blue-500/20 text-blue-300" :
                "bg-yellow-500/20 text-yellow-300"
              )}>
                {project.status === "completed" ? (locale === "en" ? "Completed" : "مكتمل") :
                 project.status === "ongoing" ? (locale === "en" ? "Ongoing" : "جاري") :
                 (locale === "en" ? "Planned" : "مخطط")}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {locale === "en" ? "Overview" : "نظرة عامة"}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Features & Metrics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {locale === "en" ? "Key Features" : "الميزات الرئيسية"}
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={cn(
                      "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                      `bg-gradient-to-r ${project.gradient}`
                    )} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {locale === "en" ? "Impact & Results" : "التأثير والنتائج"}
                </h3>
                <ul className="space-y-3">
                  {project.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Zap className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {locale === "en" ? "Technologies Used" : "التقنيات المستخدمة"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-border/40">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-lg",
                  `bg-gradient-to-r ${project.gradient}`,
                  "text-white font-medium hover:scale-105 transition-transform"
                )}
              >
                <ExternalLink className="w-4 h-4" />
                {locale === "en" ? "View Live Demo" : "عرض المشروع"}
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <Github className="w-4 h-4" />
                {locale === "en" ? "View Code" : "عرض الكود"}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};

const ProjectCard = ({ project, index, locale }: { project: Project; index: number; locale: Locale }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isRTL = locale === "ar";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={cn(
          "group relative overflow-hidden rounded-2xl",
          "bg-gradient-to-br from-card/50 to-card",
          "border border-border/40",
          "shadow-2xl shadow-primary/10",
          "hover:shadow-xl hover:shadow-primary/20",
          "transition-all duration-500",
          "hover:scale-[1.02] hover:-translate-y-2",
          "cursor-pointer"
        )}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-60",
            project.gradient
          )} />
          
          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span className={cn(
              "px-3 py-1 rounded-full text-sm font-medium",
              project.status === "completed" ? "bg-green-500/20 text-green-300" :
              project.status === "ongoing" ? "bg-blue-500/20 text-blue-300" :
              "bg-yellow-500/20 text-yellow-300"
            )}>
              {project.status === "completed" ? (locale === "en" ? "Completed" : "مكتمل") :
               project.status === "ongoing" ? (locale === "en" ? "Ongoing" : "جاري") :
               (locale === "en" ? "Planned" : "مخطط")}
            </span>
          </div>

          {/* Expand indicator */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-2">
            <span className="text-sm text-primary font-medium">{project.type}</span>
          </div>
          
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack preview */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-2">
            {project.links.demo && (
              <span className="text-sm text-primary hover:underline">
                {locale === "en" ? "Live Demo" : "عرض مباشر"}
              </span>
            )}
            {project.links.github && (
              <span className="text-sm text-muted-foreground hover:text-foreground">
                {locale === "en" ? "Source Code" : "الكود المصدري"}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <ProjectModal
            project={project}
            locale={locale}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const ProjectsSection = ({ locale }: { locale: Locale }) => {
  const content = projects[locale];
  const isRTL = locale === "ar";

  return (
    <section className={cn("py-20 px-4", isRTL && "rtl")}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {locale === "en" ? "Featured Projects" : "المشاريع المميزة"}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {locale === "en" 
              ? "A showcase of successful projects that demonstrate expertise in modern web development and AI integration."
              : "عرض للمشاريع الناجحة التي تُظهر الخبرة في تطوير الويب الحديث وتكامل الذكاء الاصطناعي."
            }
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;