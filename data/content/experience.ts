// data/content/experience.ts
import { LocalizedContent } from "./index";
import engagesAi from "@/public/engagesai.svg";
export interface IExperience {
  company: string;
  companyLogo: string;
  companyUrl: string;
  role: string;
  overview: string;
  period: {
    start: Date;
    end: Date | null;
  };
  highlights: string[];
  impact: {
    metrics: string[];
    achievements: string[];
  };
  stack: string[];
  Projects?: Project[];
}

export const experience: LocalizedContent<IExperience[]> = {
  en: [
    {
      company: "Engages.ai",
      companyLogo: engagesAi,
      companyUrl: "https://engages.ai/",
      role: "Software Developer",
      overview:
        "A dynamic role focused on building scalable web applications and AI integrations, contributing to both frontend and backend development while maintaining high standards for code quality and user experience.",
      period: {
        start: new Date("2023-12-01"),
        end: null,
      },
      highlights: [
        "Led responsive transformation initiative for main web application",
        "Engineered custom chatbot solutions using Rasa and OpenAI's LLM API",
        "Implemented real-time features using WebSocket and RabbitMQ",
        "Developed scalable data management solutions with TypeORM",
      ],
      impact: {
        metrics: [
          "Modernized 60% of core features with 90% completion rate",
          "Engineered and integrated 50% of clients AI assistance",
          "Managed approximately 12% of team's total workload",
        ],
        achievements: [
          "Significantly improved development efficiency through reusable components",
          "Enhanced user engagement through automated customer support",
          "Streamlined business processes with intelligent automation",
          "Improved application responsiveness and user experience",
        ],
      },
      stack: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Material UI",
        "NestJS",
        "Express",
        "PostgreSQL",
        "TypeORM",
        "WebSocket",
        "RabbitMQ",
        "Rasa Framework",
        "OpenAI API",
      ],
    },
    {
      company: "Engages.ai",
      companyLogo: engagesAi,
      companyUrl: "https://engages.ai/",
      role: "Software Developer Intern",
      overview:
        "Contributed to developing and enhancing the company's web-based customer relationship management systems, focusing on building scalable frontend components and implementing robust backend features.",
      period: {
        start: new Date("2022-10-17"),
        end: new Date("2023-03-17"),
      },
      highlights: [
        "Created dynamic UI components for user management interfaces",
        "Developed organization management features with advanced filtering",
        "Built secure API endpoints for organization operations",
        "Implemented comprehensive search and filtering capabilities",
      ],
      impact: {
        metrics: [
          "Successfully delivered multiple core system components",
          "Enhanced data management capabilities",
          "Improved system usability through intuitive interfaces",
        ],
        achievements: [
          "Created reusable form components with advanced validation",
          "Developed responsive navigation systems",
          "Implemented dynamic data tables with sorting and filtering",
          "Contributed to establishment of development best practices",
        ],
      },
      stack: ["React", "TypeScript", "Material UI", "Express", "PostgreSQL", "Git", "Bitbucket", "Jira"],
    },
  ],
  ar: [
    {
      company: "Engages.ai",
      companyLogo: engagesAi,
      companyUrl: "https://engages.ai/",
      role: "مطور برمجيات",
      overview:
        "دور ديناميكي يركز على بناء تطبيقات ويب قابلة للتطوير وتكاملات الذكاء الاصطناعي، مع المساهمة في تطوير الواجهة الأمامية والخلفية مع الحفاظ على معايير عالية لجودة الكود وتجربة المستخدم.",
      period: {
        start: new Date("2023-12-01"),
        end: null,
      },
      highlights: [
        "قيادة مبادرة التحول التجاوبي للتطبيق الرئيسي",
        "تطوير حلول روبوتات الدردشة المخصصة باستخدام Rasa و OpenAI",
        "تنفيذ ميزات الوقت الفعلي باستخدام WebSocket و RabbitMQ",
        "تطوير حلول إدارة البيانات القابلة للتطوير مع TypeORM",
      ],
      impact: {
        metrics: [
          "تحديث 60% من الميزات الأساسية بمعدل إنجاز 90%",
          "المساهمة في 50% من تنفيذ مساعدة العملاء بالذكاء الاصطناعي",
          "إدارة حوالي 12% من إجمالي عبء عمل الفريق",
          "تطوير ودمج 3 روبوتات دردشة مخصصة",
        ],
        achievements: [
          "تحسين كفاءة التطوير بشكل كبير من خلال المكونات القابلة لإعادة الاستخدام",
          "تعزيز مشاركة المستخدم من خلال دعم العملاء الآلي",
          "تبسيط العمليات التجارية مع الأتمتة الذكية",
          "تحسين استجابة التطبيق وتجربة المستخدم",
        ],
      },
      stack: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Material UI",
        "NestJS",
        "Express",
        "PostgreSQL",
        "TypeORM",
        "WebSocket",
        "RabbitMQ",
        "Rasa Framework",
        "OpenAI API",
      ],
    },
    {
      company: "Engages.ai",
      companyLogo: engagesAi,
      companyUrl: "https://engages.ai/",
      role: "متدرب تطوير برمجيات",
      overview:
        "المساهمة في تطوير وتحسين أنظمة إدارة علاقات العملاء المستندة إلى الويب للشركة، مع التركيز على بناء مكونات الواجهة الأمامية القابلة للتطوير وتنفيذ ميزات الخلفية القوية.",
      period: {
        start: new Date("2022-10-01"),
        end: new Date("2023-03-01"),
      },
      highlights: [
        "إنشاء مكونات واجهة مستخدم ديناميكية لواجهات إدارة المستخدمين",
        "تطوير ميزات إدارة المؤسسات مع تصفية متقدمة",
        "بناء نقاط نهاية API آمنة لعمليات المؤسسة",
        "تنفيذ قدرات بحث وتصفية شاملة",
      ],
      impact: {
        metrics: ["تسليم العديد من مكونات النظام الأساسية بنجاح", "تعزيز قدرات إدارة البيانات", "تحسين قابلية استخدام النظام من خلال واجهات بديهية"],
        achievements: [
          "إنشاء مكونات نماذج قابلة لإعادة الاستخدام مع التحقق المتقدم",
          "تطوير أنظمة تنقل متجاوبة",
          "تنفيذ جداول بيانات ديناميكية مع الفرز والتصفية",
          "المساهمة في وضع أفضل ممارسات التطوير",
        ],
      },
      stack: ["React", "TypeScript", "Material UI", "Express", "PostgreSQL", "Git", "Bitbucket", "Jira"],
    },
  ],
};