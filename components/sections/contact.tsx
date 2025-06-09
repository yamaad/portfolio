"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { cn } from "@/utils/cn";
import { Locale } from "@/data/content/site-content";

const contact = {
  en: {
    title: "Let's Build Something Amazing Together",
    subtitle: "Ready to transform your ideas into digital reality? Get in touch and let's discuss your project.",
    form: {
      name: "Full Name",
      email: "Email Address",
      company: "Company (Optional)",
      project: "Project Type",
      budget: "Budget Range",
      message: "Tell me about your project",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!"
    },
    projectTypes: [
      "Web Application",
      "E-commerce Solution",
      "AI Integration",
      "Mobile App",
      "Automation System",
      "Consultation",
      "Other"
    ],
    budgetRanges: [
      "Under RM5,000",
      "RM5,000 - RM15,000",
      "RM15,000 - RM30,000",
      "RM30,000 - RM50,000",
      "Above RM50,000",
      "Let's discuss"
    ],
    info: {
      location: {
        title: "Location",
        value: "Kuala Lumpur, Malaysia"
      },
      availability: {
        title: "Availability",
        value: "Monday - Friday, 9 AM - 6 PM MYT"
      },
      response: {
        title: "Response Time",
        value: "Within 24 hours"
      }
    },
    whatsapp: "WhatsApp",
    email: "Email"
  },
  ar: {
    title: "لنبني شيئًا مذهلاً معًا",
    subtitle: "مستعد لتحويل أفكارك إلى واقع رقمي؟ تواصل معي ولنناقش مشروعك.",
    form: {
      name: "الاسم الكامل",
      email: "عنوان البريد الإلكتروني",
      company: "الشركة (اختياري)",
      project: "نوع المشروع",
      budget: "نطاق الميزانية",
      message: "أخبرني عن مشروعك",
      submit: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      success: "تم إرسال الرسالة بنجاح!"
    },
    projectTypes: [
      "تطبيق ويب",
      "حل التجارة الإلكترونية",
      "تكامل الذكاء الاصطناعي",
      "تطبيق الهاتف المحمول",
      "نظام الأتمتة",
      "استشارة",
      "أخرى"
    ],
    budgetRanges: [
      "أقل من 5000 ريال",
      "5000 - 15000 ريال",
      "15000 - 30000 ريال",
      "30000 - 50000 ريال",
      "أكثر من 50000 ريال",
      "لنناقش الأمر"
    ],
    info: {
      location: {
        title: "الموقع",
        value: "كوالالمبور، ماليزيا"
      },
      availability: {
        title: "التوفر",
        value: "الاثنين - الجمعة، 9 صباحًا - 6 مساءً بتوقيت ماليزيا"
      },
      response: {
        title: "وقت الاستجابة",
        value: "خلال 24 ساعة"
      }
    },
    whatsapp: "واتساب",
    email: "البريد الإلكتروني"
  }
};

const ContactSection = ({ locale }: { locale: Locale }) => {
  const content = contact[locale];
  const isRTL = locale === "ar";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        budget: "",
        message: ""
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-card/50 to-card rounded-2xl border border-border/40 p-8 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {content.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {content.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {content.form.company}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Project Type and Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {content.form.project}
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select project type</option>
                      {content.projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {content.form.budget}
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select budget range</option>
                      {content.budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {content.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder={locale === "en" ? "Describe your project, goals, and any specific requirements..." : "اوصف مشروعك وأهدافك وأي متطلبات محددة..."}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={cn(
                    "w-full py-4 px-6 rounded-lg font-medium transition-all duration-300",
                    "flex items-center justify-center gap-2",
                    isSubmitted
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-primary to-secondary text-white hover:scale-[1.02]",
                    (isSubmitting || isSubmitted) && "cursor-not-allowed"
                  )}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      {content.form.success}
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {content.form.sending}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {content.form.submit}
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-card/50 to-card rounded-2xl border border-border/40 p-6 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6">
                {locale === "en" ? "Quick Contact" : "تواصل سريع"}
              </h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/60123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {content.whatsapp}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {locale === "en" ? "Instant messaging" : "رسائل فورية"}
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:hello@maadyasser.com"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {content.email}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      hello@maadyasser.com
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-card/50 to-card rounded-2xl border border-border/40 p-6 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6">
                {locale === "en" ? "Contact Information" : "معلومات الاتصال"}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <div className="font-medium">{content.info.location.title}</div>
                    <div className="text-muted-foreground">{content.info.location.value}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <div className="font-medium">{content.info.availability.title}</div>
                    <div className="text-muted-foreground">{content.info.availability.value}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Send className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <div className="font-medium">{content.info.response.title}</div>
                    <div className="text-muted-foreground">{content.info.response.value}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;