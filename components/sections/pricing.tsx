"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Clock, Users, Zap, Star, ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { Locale } from "@/data/content/site-content";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  icon: React.ReactNode;
  gradient: string;
}

const pricing = {
  en: {
    title: "Investment in Your Success",
    subtitle: "Transparent pricing for exceptional digital solutions. Choose the engagement model that fits your project needs.",
    tiers: [
      {
        name: "Hourly Consultation",
        price: "RM150",
        period: "per hour",
        description: "Perfect for quick fixes, consultations, and small tasks.",
        features: [
          "Minimum 10 hours commitment",
          "Direct communication via WhatsApp",
          "Quick turnaround time",
          "Technical consultation included",
          "Code review and optimization",
          "Documentation provided"
        ],
        cta: "Start Consultation",
        icon: <Clock className="w-6 h-6" />,
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        name: "Project-Based",
        price: "RM3,000+",
        period: "per project",
        description: "Ideal for complete web applications and custom solutions.",
        features: [
          "Full project planning and analysis",
          "Custom web application development",
          "Responsive design across all devices",
          "Database design and implementation",
          "API development and integration",
          "Testing and quality assurance",
          "Deployment and launch support",
          "30 days post-launch support"
        ],
        highlighted: true,
        cta: "Discuss Your Project",
        icon: <Zap className="w-6 h-6" />,
        gradient: "from-purple-500 to-pink-500"
      },
      {
        name: "Monthly Retainer",
        price: "RM2,800+",
        period: "per month",
        description: "Ongoing development and maintenance for growing businesses.",
        features: [
          "20-80 hours monthly allocation",
          "Priority support and communication",
          "Ongoing feature development",
          "Performance monitoring",
          "Security updates and maintenance",
          "Monthly progress reports",
          "Flexible scope adjustments",
          "Dedicated development time"
        ],
        cta: "Start Partnership",
        icon: <Users className="w-6 h-6" />,
        gradient: "from-green-500 to-emerald-500"
      }
    ],
    retainerOptions: [
      { hours: 20, price: "RM2,800", savings: "Save RM200" },
      { hours: 40, price: "RM5,200", savings: "Save RM800" },
      { hours: 80, price: "RM9,600", savings: "Save RM2,400" }
    ],
    consultation: {
      title: "Free Initial Consultation",
      description: "30-minute complimentary session to discuss your project needs and explore how we can work together.",
      features: [
        "Project scope assessment",
        "Technology recommendations",
        "Timeline and budget estimation",
        "No obligation discussion"
      ]
    }
  },
  ar: {
    title: "استثمار في نجاحك",
    subtitle: "أسعار شفافة لحلول رقمية استثنائية. اختر نموذج التعامل الذي يناسب احتياجات مشروعك.",
    tiers: [
      {
        name: "استشارة بالساعة",
        price: "150 ريال",
        period: "في الساعة",
        description: "مثالي للإصلاحات السريعة والاستشارات والمهام الصغيرة.",
        features: [
          "التزام لمدة 10 ساعات كحد أدنى",
          "التواصل المباشر عبر واتساب",
          "وقت استجابة سريع",
          "استشارة تقنية مشمولة",
          "مراجعة وتحسين الكود",
          "توثيق مقدم"
        ],
        cta: "ابدأ الاستشارة",
        icon: <Clock className="w-6 h-6" />,
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        name: "على أساس المشروع",
        price: "3000+ ريال",
        period: "لكل مشروع",
        description: "مثالي لتطبيقات الويب الكاملة والحلول المخصصة.",
        features: [
          "تخطيط وتحليل كامل للمشروع",
          "تطوير تطبيق ويب مخصص",
          "تصميم متجاوب عبر جميع الأجهزة",
          "تصميم وتنفيذ قاعدة البيانات",
          "تطوير وتكامل واجهة برمجة التطبيقات",
          "الاختبار وضمان الجودة",
          "دعم النشر والإطلاق",
          "دعم لمدة 30 يومًا بعد الإطلاق"
        ],
        highlighted: true,
        cta: "ناقش مشروعك",
        icon: <Zap className="w-6 h-6" />,
        gradient: "from-purple-500 to-pink-500"
      },
      {
        name: "اشتراك شهري",
        price: "2800+ ريال",
        period: "في الشهر",
        description: "التطوير والصيانة المستمرة للشركات النامية.",
        features: [
          "تخصيص 20-80 ساعة شهريًا",
          "دعم وتواصل ذو أولوية",
          "تطوير الميزات المستمر",
          "مراقبة الأداء",
          "تحديثات الأمان والصيانة",
          "تقارير تقدم شهرية",
          "تعديلات نطاق مرنة",
          "وقت تطوير مخصص"
        ],
        cta: "ابدأ الشراكة",
        icon: <Users className="w-6 h-6" />,
        gradient: "from-green-500 to-emerald-500"
      }
    ],
    retainerOptions: [
      { hours: 20, price: "2800 ريال", savings: "وفر 200 ريال" },
      { hours: 40, price: "5200 ريال", savings: "وفر 800 ريال" },
      { hours: 80, price: "9600 ريال", savings: "وفر 2400 ريال" }
    ],
    consultation: {
      title: "استشارة أولية مجانية",
      description: "جلسة مجانية لمدة 30 دقيقة لمناقشة احتياجات مشروعك واستكشاف كيف يمكننا العمل معًا.",
      features: [
        "تقييم نطاق المشروع",
        "توصيات التكنولوجيا",
        "تقدير الجدول الزمني والميزانية",
        "مناقشة بدون التزام"
      ]
    }
  }
};

const PricingCard = ({ tier, index, locale }: { tier: PricingTier; index: number; locale: Locale }) => {
  const isRTL = locale === "ar";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-card/50 to-card",
        "border border-border/40",
        tier.highlighted ? "shadow-2xl shadow-primary/20 scale-105" : "shadow-xl shadow-primary/10",
        "hover:shadow-xl hover:shadow-primary/20",
        "transition-all duration-500",
        "hover:scale-[1.02] hover:-translate-y-2"
      )}
    >
      {/* Highlighted badge */}
      {tier.highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className={cn(
            "px-4 py-1 rounded-full text-sm font-medium text-white",
            `bg-gradient-to-r ${tier.gradient}`
          )}>
            <Star className="w-4 h-4 inline mr-1" />
            {locale === "en" ? "Most Popular" : "الأكثر شعبية"}
          </div>
        </div>
      )}

      {/* Gradient overlay */}
      <div className={cn(
        "absolute inset-0 opacity-0 hover:opacity-5 transition-opacity duration-500",
        `bg-gradient-to-br ${tier.gradient}`
      )} />

      <div className="relative p-8">
        {/* Icon */}
        <div className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6",
          `bg-gradient-to-br ${tier.gradient}`,
          "text-white"
        )}>
          {tier.icon}
        </div>

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-3xl font-bold">{tier.price}</span>
            <span className="text-muted-foreground">{tier.period}</span>
          </div>
          <p className="text-muted-foreground">{tier.description}</p>
        </div>

        {/* Features */}
        <ul className={cn("space-y-3 mb-8", isRTL && "text-right")}>
          {tier.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className={cn(
          "w-full py-3 px-6 rounded-xl font-medium transition-all duration-300",
          "flex items-center justify-center gap-2",
          tier.highlighted
            ? `bg-gradient-to-r ${tier.gradient} text-white hover:scale-105`
            : "border border-border hover:bg-muted"
        )}>
          {tier.cta}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

const PricingSection = ({ locale }: { locale: Locale }) => {
  const content = pricing[locale];
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
              {content.title}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {content.subtitle}
          </motion.p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {content.tiers.map((tier, index) => (
            <PricingCard
              key={tier.name}
              tier={tier}
              index={index}
              locale={locale}
            />
          ))}
        </div>

        {/* Retainer Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-card/50 to-card rounded-2xl border border-border/40 p-8 mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            {locale === "en" ? "Monthly Retainer Options" : "خيارات الاشتراك الشهري"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.retainerOptions.map((option, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-border/40 hover:bg-muted/50 transition-colors"
              >
                <div className="text-2xl font-bold mb-2">{option.hours} {locale === "en" ? "hours" : "ساعة"}</div>
                <div className="text-xl text-primary font-semibold mb-2">{option.price}</div>
                <div className="text-sm text-green-500">{option.savings}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Free Consultation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">{content.consultation.title}</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {content.consultation.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {content.consultation.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 justify-center">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-medium hover:scale-105 transition-transform">
            {locale === "en" ? "Book Free Consultation" : "احجز استشارة مجانية"}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;