"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Bot, Zap, Smartphone, Globe, Database, Cloud, Shield } from "lucide-react";
import { cn } from "@/utils/cn";
import { Locale } from "@/data/content/site-content";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const services = {
  en: [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications that drive business growth and enhance user experience.",
      features: [
        "Custom web applications",
        "E-commerce solutions", 
        "Progressive web apps",
        "API development & integration",
        "Real-time features",
        "Performance optimization"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Integration",
      description: "Intelligent automation solutions that streamline operations and enhance customer experience.",
      features: [
        "Custom chatbot development",
        "AI-powered automation",
        "Natural language processing",
        "Machine learning integration",
        "OpenAI API implementation",
        "Intelligent data processing"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation Solutions",
      description: "Streamline your business processes with intelligent automation and workflow optimization.",
      features: [
        "Business process automation",
        "Workflow optimization",
        "Data processing & analytics",
        "Integration services",
        "Custom scripts & tools",
        "Performance monitoring"
      ],
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that reach your customers wherever they are.",
      features: [
        "Cross-platform applications",
        "Native app development",
        "Mobile-first solutions",
        "App store optimization",
        "Push notifications",
        "Offline functionality"
      ],
      gradient: "from-green-500 to-teal-600"
    }
  ],
  ar: [
    {
      icon: <Code className="w-8 h-8" />,
      title: "تطوير الويب",
      description: "تطبيقات ويب مخصصة تدفع نمو الأعمال وتعزز تجربة المستخدم.",
      features: [
        "تطبيقات ويب مخصصة",
        "حلول التجارة الإلكترونية",
        "تطبيقات الويب التقدمية",
        "تطوير وتكامل واجهات برمجة التطبيقات",
        "ميزات الوقت الفعلي",
        "تحسين الأداء"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "تكامل الذكاء الاصطناعي",
      description: "حلول الأتمتة الذكية التي تبسط العمليات وتعزز تجربة العملاء.",
      features: [
        "تطوير روبوتات الدردشة المخصصة",
        "الأتمتة المدعومة بالذكاء الاصطناعي",
        "معالجة اللغة الطبيعية",
        "تكامل التعلم الآلي",
        "تنفيذ واجهة برمجة تطبيقات OpenAI",
        "معالجة البيانات الذكية"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "حلول الأتمتة",
      description: "تبسيط عمليات عملك مع الأتمتة الذكية وتحسين سير العمل.",
      features: [
        "أتمتة العمليات التجارية",
        "تحسين سير العمل",
        "معالجة البيانات والتحليلات",
        "خدمات التكامل",
        "أدوات ونصوص مخصصة",
        "مراقبة الأداء"
      ],
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "تطوير الهاتف المحمول",
      description: "تطبيقات الهاتف المحمول متعددة المنصات التي تصل إلى عملائك أينما كانوا.",
      features: [
        "تطبيقات متعددة المنصات",
        "تطوير التطبيقات الأصلية",
        "حلول تركز على الهاتف المحمول",
        "تحسين متجر التطبيقات",
        "الإشعارات الفورية",
        "الوظائف دون اتصال"
      ],
      gradient: "from-green-500 to-teal-600"
    }
  ]
};

const ServiceCard = ({ service, index, locale }: { service: Service; index: number; locale: Locale }) => {
  const isRTL = locale === "ar";
  
  return (
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
        "hover:scale-[1.02] hover:-translate-y-2"
      )}
    >
      {/* Gradient overlay */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
        `bg-gradient-to-br ${service.gradient}`
      )} />
      
      <div className="relative p-8">
        {/* Icon */}
        <div className={cn(
          "inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6",
          `bg-gradient-to-br ${service.gradient}`,
          "text-white shadow-lg"
        )}>
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <ul className={cn("space-y-3", isRTL && "text-right")}>
          {service.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <span className={cn(
                "w-2 h-2 rounded-full flex-shrink-0",
                `bg-gradient-to-r ${service.gradient}`
              )} />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ServicesSection = ({ locale }: { locale: Locale }) => {
  const content = services[locale];
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
              {locale === "en" ? "Services" : "الخدمات"}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {locale === "en" 
              ? "Comprehensive digital solutions to transform your business and drive growth through cutting-edge technology."
              : "حلول رقمية شاملة لتحويل عملك ودفع النمو من خلال التكنولوجيا المتطورة."
            }
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;