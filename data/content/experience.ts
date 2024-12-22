// data/content/experience.ts
import { LocalizedContent, ProfessionalExperience } from "@/types/content";

const experience: LocalizedContent<ProfessionalExperience[]> = {
  en: [
    {
      id: "engages-ai",
      type: "professional",
      company: "Engages.ai Pte Ltd.",
      role: "Software Developer",
      period: {
        start: new Date("2023-12"),
        end: null, // Current position
      },
      responsibilities: [
        "Lead frontend development for customer engagement platforms",
        "Design and implement real-time communication systems",
        "Develop AI-powered chatbot solutions",
        "Create reusable component libraries",
      ],
      impact: {
        metrics: [
          "Engineered 3 custom chatbots increasing customer support efficiency by 40%",
          "Reduced development time by 30% through reusable UI components",
          "Improved system response time by 25% through WebSocket implementation",
        ],
        achievements: [
          "Successfully implemented real-time communication features using RabbitMQ",
          "Developed comprehensive UI component library improving team efficiency",
          "Integrated advanced AI capabilities using OpenAI's LLM API",
        ],
      },
      technical: {
        architecture: "Microservices architecture with real-time communication layer",
        stack: ["React", "TypeScript", "Redux Toolkit", "Material UI", "WebSocket", "NestJS", "Express", "PostgreSQL", "TypeORM", "RabbitMQ"],
        highlights: [
          "Real-time WebSocket integration",
          "Custom chatbot development",
          "Microservices implementation",
          "State management optimization",
        ],
      },
      teamContext: {
        size: 8,
        role: "Frontend Lead",
        collaboration: ["Backend team for API integration", "UX team for component design", "DevOps for deployment pipelines"],
      },
    },
    {
      id: "revgen",
      type: "professional",
      company: "REVGEN Sdn. Bdn.",
      role: "Software Engineering Intern",
      period: {
        start: new Date("2022-10"),
        end: new Date("2023-03"),
      },
      responsibilities: [
        "Develop responsive web components",
        "Implement REST API integrations",
        "Collaborate on server-side development",
        "Maintain and optimize existing codebase",
      ],
      impact: {
        metrics: [
          "Improved component reusability by 50%",
          "Reduced API response times by 30%",
          "Contributed to 15% increase in development velocity",
        ],
        achievements: [
          "Successfully implemented responsive design patterns",
          "Enhanced API integration efficiency",
          "Improved development workflow with Docker",
        ],
      },
      technical: {
        architecture: "Monolithic application with REST API architecture",
        stack: ["React", "TypeScript", "Sass", "Docker", "Jira", "Bitbucket"],
        highlights: ["Responsive component development", "REST API integration", "Docker containerization", "Version control with Git"],
      },
      teamContext: {
        size: 5,
        role: "Software Engineering Intern",
        collaboration: ["Senior developers for code review", "Product team for feature planning", "QA team for testing"],
      },
    },
  ],
  ar: [
    {
      id: "engages-ai",
      type: "professional",
      company: "Engages.ai Pte Ltd.",
      role: "مطور برمجيات",
      period: {
        start: new Date("2023-12"),
        end: null,
      },
      responsibilities: [
        "قيادة تطوير الواجهة الأمامية لمنصات تفاعل العملاء",
        "تصميم وتنفيذ أنظمة الاتصال في الوقت الفعلي",
        "تطوير حلول روبوتات الدردشة المدعومة بالذكاء الاصطناعي",
        "إنشاء مكتبات المكونات القابلة لإعادة الاستخدام",
      ],
      impact: {
        metrics: [
          "تطوير 3 روبوتات دردشة مخصصة مما أدى إلى زيادة كفاءة دعم العملاء بنسبة 40%",
          "تقليل وقت التطوير بنسبة 30% من خلال مكونات واجهة المستخدم القابلة لإعادة الاستخدام",
          "تحسين وقت استجابة النظام بنسبة 25% من خلال تنفيذ WebSocket",
        ],
        achievements: [
          "نجاح في تنفيذ ميزات الاتصال في الوقت الفعلي باستخدام RabbitMQ",
          "تطوير مكتبة شاملة لمكونات واجهة المستخدم لتحسين كفاءة الفريق",
          "دمج قدرات الذكاء الاصطناعي المتقدمة باستخدام OpenAI's LLM API",
        ],
      },
      technical: {
        architecture: "بنية الخدمات المصغرة مع طبقة اتصال في الوقت الفعلي",
        stack: ["React", "TypeScript", "Redux Toolkit", "Material UI", "WebSocket", "NestJS", "Express", "PostgreSQL", "TypeORM", "RabbitMQ"],
        highlights: ["دمج WebSocket في الوقت الفعلي", "تطوير روبوت دردشة مخصص", "تنفيذ الخدمات المصغرة", "تحسين إدارة الحالة"],
      },
      teamContext: {
        size: 8,
        role: "قائد الواجهة الأمامية",
        collaboration: ["فريق الخلفية لتكامل API", "فريق تجربة المستخدم لتصميم المكونات", "فريق DevOps لخطوط النشر"],
      },
    },
    {
      id: "revgen",
      type: "professional",
      company: "REVGEN Sdn. Bdn.",
      role: "متدرب هندسة البرمجيات",
      period: {
        start: new Date("2022-10"),
        end: new Date("2023-03"),
      },
      responsibilities: ["تطوير مكونات ويب متجاوبة", "تنفيذ تكاملات REST API", "التعاون في تطوير جانب الخادم", "صيانة وتحسين الكود الحالي"],
      impact: {
        metrics: ["تحسين إعادة استخدام المكونات بنسبة 50%", "تقليل أوقات استجابة API بنسبة 30%", "المساهمة في زيادة سرعة التطوير بنسبة 15%"],
        achievements: ["نجاح في تنفيذ أنماط التصميم المتجاوب", "تحسين كفاءة تكامل API", "تحسين سير عمل التطوير باستخدام Docker"],
      },
      technical: {
        architecture: "تطبيق أحادي مع بنية REST API",
        stack: ["React", "TypeScript", "Sass", "Docker", "Jira", "Bitbucket"],
        highlights: ["تطوير مكونات متجاوبة", "تكامل REST API", "حاويات Docker", "التحكم في الإصدارات مع Git"],
      },
      teamContext: {
        size: 5,
        role: "متدرب هندسة البرمجيات",
        collaboration: ["المطورين المتقدمين لمراجعة الكود", "فريق المنتج لتخطيط الميزات", "فريق ضمان الجودة للاختبار"],
      },
    },
  ],
};

export default experience;
