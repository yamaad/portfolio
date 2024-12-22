// ./data/content/work.ts
import { LocalizedContent, WorkItem } from "@/types/content";
const work: LocalizedContent<WorkItem[]> = {
  en: [
    {
      id: "engages-ai",
      type: "professional",
      title: "Software Developer at Engages.ai",
      period: "December 2023 - Present",
      brief: "Full-stack developer focusing on real-time applications and AI integration",
      impact: {
        metrics: [
          "Engineered 3 custom chatbots enhancing customer support efficiency",
          "Improved development efficiency through reusable UI components",
          "Implemented real-time features reducing response times",
        ],
        achievements: [
          "Successfully integrated OpenAI's LLM API for automated responses",
          "Developed robust real-time communication system using RabbitMQ",
          "Created maintainable component library improving team productivity",
        ],
      },
      technical: {
        architecture: "Microservices architecture with event-driven communication",
        stack: ["React", "TypeScript", "Redux Toolkit", "Material UI", "WebSocket", "NestJS", "Express", "PostgreSQL", "TypeORM", "RabbitMQ"],
        highlights: [
          "Event-driven architecture implementation",
          "Real-time data synchronization",
          "Custom chatbot development",
          "AI integration with OpenAI's API",
        ],
      },
      case_study: {
        challenge: "Need for scalable real-time communication system with AI capabilities",
        approach: "Implemented event-driven architecture using RabbitMQ and WebSocket",
        solution: "Created modular system with custom chatbots and real-time features",
        outcomes: [
          "Enhanced customer support efficiency",
          "Reduced system response times",
          "Improved development team productivity",
          "Scalable architecture supporting future growth",
        ],
      },
    },
    {
      id: "revgen",
      type: "professional",
      title: "Software Engineering Intern at REVGEN",
      period: "October 2022 - March 2023",
      brief: "Focused on frontend development and API integrations",
      impact: {
        metrics: ["Developed multiple interactive web components", "Implemented responsive design patterns", "Integrated various REST APIs"],
        achievements: [
          "Successfully delivered all assigned projects within deadlines",
          "Received positive feedback for code quality and documentation",
          "Contributed to team's development workflow improvements",
        ],
      },
      technical: {
        stack: ["React", "TypeScript", "Sass", "Docker", "REST APIs"],
        highlights: ["Component-based architecture", "Responsive design implementation", "API integration patterns", "Docker containerization"],
      },
      case_study: {
        challenge: "Need for maintainable and responsive web components",
        approach: "Utilized component-based architecture with TypeScript",
        solution: "Created reusable components with comprehensive documentation",
        outcomes: ["Improved development efficiency", "Enhanced code maintainability", "Better team collaboration"],
      },
    },

    // Projects
    {
      id: "portfolio",
      type: "project",
      title: "Modern Portfolio Website",
      period: "2024",
      brief: "A multilingual, modern portfolio website with advanced UI/UX features",
      impact: {
        metrics: ["Bilingual support (English/Arabic)", "High performance scores", "Seamless responsive design"],
        achievements: [
          "Implemented advanced animations and transitions",
          "Created maintainable content management system",
          "Developed robust RTL support",
        ],
      },
      technical: {
        architecture: "Next.js with static site generation and client-side interactions",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Aceternity UI"],
        highlights: [
          "Multilingual system with RTL support",
          "Advanced animations and interactions",
          "Responsive design system",
          "Performance optimization",
        ],
      },
      case_study: {
        challenge: "Creating an engaging portfolio that balances visual appeal with performance",
        approach: "Utilized modern web technologies with focus on performance and user experience",
        solution: "Developed modular, maintainable system with seamless language switching",
        outcomes: [
          "Highly performant website with engaging animations",
          "Seamless bilingual experience",
          "Maintainable content management",
          "Scalable architecture for future additions",
        ],
      },
    },
    {
      id: "edumize",
      type: "project",
      title: "Edumize Website",
      period: "2023",
      brief: "CMS integration and Webflow migration system",
      impact: {
        metrics: ["Successful data migration", "Improved content management workflow", "Enhanced user experience"],
        achievements: ["Seamless CMS integration", "Automated data management", "Responsive UI implementation"],
      },
      technical: {
        stack: ["Webflow", "Vite", "React", "Framer Motion", "Material UI", "Redux Toolkit", "TypeScript", "Airtable", "Express"],
        highlights: ["CMS integration", "Data migration system", "Animated components", "Automated workflows"],
      },
      case_study: {
        challenge: "Migrating existing system to modern tech stack with CMS",
        approach: "Implemented gradual migration with automated data handling",
        solution: "Created robust integration between Webflow and custom systems",
        outcomes: ["Streamlined content management", "Improved user experience", "Enhanced maintainability", "Automated workflows"],
      },
    },
    {
      id: "smart-buddy",
      type: "project",
      title: "Smart Buddy - AI WhatsApp Assistant",
      period: "2023",
      brief: "WhatsApp-based AI assistant for business automation",
      impact: {
        metrics: ["Handled multiple concurrent conversations", "Automated response generation", "Business system integration"],
        achievements: ["Successful OpenAI API integration", "Concurrent conversation handling", "System automation implementation"],
      },
      technical: {
        stack: ["Express", "React", "JavaScript", "OpenAI API", "Alibaba Chatapp service"],
        highlights: ["AI integration", "Concurrent processing", "Business automation", "WhatsApp API integration"],
      },
      case_study: {
        challenge: "Creating scalable AI-powered WhatsApp business assistant",
        approach: "Leveraged OpenAI's API with custom conversation management",
        solution: "Developed robust system handling multiple concurrent conversations",
        outcomes: ["Automated customer interactions", "Improved response times", "Enhanced business efficiency", "Scalable conversation handling"],
      },
    },
  ],
  ar: [
    // Professional Experience (Arabic translations)
    {
      id: "engages-ai",
      type: "professional",
      title: "مطور برمجيات في Engages.ai",
      period: "ديسمبر 2023 - الحالي",
      brief: "مطور شامل متخصص في التطبيقات الفورية ودمج الذكاء الاصطناعي",
      impact: {
        metrics: [
          "تطوير 3 روبوتات دردشة مخصصة لتحسين كفاءة دعم العملاء",
          "تحسين كفاءة التطوير من خلال مكونات واجهة المستخدم القابلة لإعادة الاستخدام",
          "تنفيذ ميزات في الوقت الفعلي لتقليل أوقات الاستجابة",
        ],
        achievements: [
          "دمج ناجح لواجهة برمجة تطبيقات OpenAI LLM للردود الآلية",
          "تطوير نظام اتصال قوي في الوقت الفعلي باستخدام RabbitMQ",
          "إنشاء مكتبة مكونات قابلة للصيانة لتحسين إنتاجية الفريق",
        ],
      },
      technical: {
        architecture: "بنية الخدمات المصغرة مع التواصل المدفوع بالأحداث",
        stack: ["React", "TypeScript", "Redux Toolkit", "Material UI", "WebSocket", "NestJS", "Express", "PostgreSQL", "TypeORM", "RabbitMQ"],
        highlights: [
          "تنفيذ البنية المدفوعة بالأحداث",
          "مزامنة البيانات في الوقت الفعلي",
          "تطوير روبوت دردشة مخصص",
          "دمج الذكاء الاصطناعي مع واجهة برمجة تطبيقات OpenAI",
        ],
      },
      case_study: {
        challenge: "الحاجة إلى نظام اتصال قابل للتطوير في الوقت الفعلي مع قدرات الذكاء الاصطناعي",
        approach: "تنفيذ بنية مدفوعة بالأحداث باستخدام RabbitMQ و WebSocket",
        solution: "إنشاء نظام معياري مع روبوتات دردشة مخصصة وميزات في الوقت الفعلي",
        outcomes: ["تعزيز كفاءة دعم العملاء", "تقليل أوقات استجابة النظام", "تحسين إنتاجية فريق التطوير", "بنية قابلة للتطوير تدعم النمو المستقبلي"],
      },
    },
    // Add other Arabic translations similarly...
  ],
};

export default work;
