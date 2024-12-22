// data/content/projects.ts
import { LocalizedContent, Project } from "@/types/content";

const projects: LocalizedContent<Project[]> = {
  en: [
    {
      id: "edumize",
      type: "project",
      title: "Edumize Website",
      period: {
        start: new Date("2023-09"),
        end: new Date("2023-11"),
      },
      status: "completed",
      brief: "A modern educational platform combining CMS flexibility with optimized performance",
      challenge: {
        description: "Create a scalable education platform that maintains high performance while handling dynamic content and complex animations",
        constraints: [
          "Content must be easily manageable by non-technical staff",
          "Complex animations without compromising performance",
          "Seamless integration between CMS and frontend",
        ],
      },
      solution: {
        approach: "Implemented a hybrid solution using Webflow for content management and custom React components for enhanced functionality",
        implementation: "Developed a custom migration system and built optimized UI components with animation support",
        innovations: [
          "Custom Webflow to React migration system",
          "Optimized animation system using Framer Motion",
          "Automated data synchronization between CMS and frontend",
        ],
      },
      impact: {
        metrics: ["Reduced page load time by 40%", "Improved content update time by 70%", "Achieved 95+ Lighthouse performance score"],
        achievements: [
          "Successfully integrated complex animations while maintaining performance",
          "Created intuitive content management workflow",
          "Implemented responsive design supporting all device sizes",
        ],
      },
      technical: {
        architecture: "Jamstack architecture with headless CMS",
        stack: ["React", "TypeScript", "Framer Motion", "Material UI", "Redux Toolkit", "Express", "Airtable"],
        highlights: ["Custom animation system", "Responsive component library", "Automated data synchronization", "Performance optimization"],
      },
      visuals: {
        current: "/projects/edumize/current.png",
        demo: "https://edumize.com",
        github: "https://github.com/username/edumize",
      },
    },
    {
      id: "smart-buddy",
      type: "project",
      title: "Smart Buddy - AI-Powered WhatsApp Assistant",
      period: {
        start: new Date("2023-06"),
        end: new Date("2023-08"),
      },
      status: "completed",
      brief: "An intelligent WhatsApp business assistant that automates customer interactions using AI",
      challenge: {
        description:
          "Develop a scalable WhatsApp automation system that maintains natural conversation flow while handling multiple concurrent users",
        constraints: ["Handle multiple concurrent conversations", "Maintain context across conversations", "Ensure fast response times"],
      },
      solution: {
        approach: "Built a modular system integrating OpenAI's LLM with WhatsApp Business API",
        implementation: "Created a robust conversation management system with context awareness",
        innovations: ["Context-aware conversation system", "Dynamic response generation", "Automated business process integration"],
      },
      impact: {
        metrics: ["Handles 500+ concurrent conversations", "90% reduction in response time", "75% decrease in support workload"],
        achievements: [
          "Successfully automated common customer inquiries",
          "Integrated with business systems for real-time updates",
          "Maintained high user satisfaction scores",
        ],
      },
      technical: {
        architecture: "Microservices architecture with event-driven design",
        stack: ["Express", "React", "JavaScript", "OpenAI API", "Alibaba Chatapp"],
        highlights: ["Real-time message processing", "Context management system", "Integration with business systems"],
      },
      visuals: {
        current: "/projects/smart-buddy/demo.gif",
        demo: "https://smart-buddy-demo.com",
      },
    },
    {
      id: "chat-widget",
      type: "project",
      title: "Real-time Chat Widget",
      period: {
        start: new Date("2023-03"),
        end: new Date("2023-05"),
      },
      status: "completed",
      brief: "A customizable real-time chat widget for seamless website integration",
      challenge: {
        description: "Create a lightweight, performant chat widget that can be easily integrated into any website",
        constraints: ["Minimal impact on host website performance", "Cross-browser compatibility", "Real-time message delivery"],
      },
      solution: {
        approach: "Developed a modular widget using WebSocket for real-time communication",
        implementation: "Built a standalone widget with easy integration options",
        innovations: ["Custom WebSocket implementation", "Efficient message queuing system", "Adaptive styling system"],
      },
      impact: {
        metrics: ["Under 50KB bundle size", "99.9% message delivery rate", "Sub-100ms message latency"],
        achievements: ["Created highly reusable component", "Implemented efficient real-time communication", "Developed flexible styling system"],
      },
      technical: {
        architecture: "Modular widget architecture with WebSocket integration",
        stack: ["Express", "React", "TypeScript", "MongoDB", "Socket.io", "Material UI"],
        highlights: ["Real-time messaging system", "Custom styling system", "Cross-browser compatibility"],
      },
      visuals: {
        current: "/projects/chat-widget/preview.png",
        github: "https://github.com/username/chat-widget",
      },
    },
    {
      id: "motorbike-services",
      type: "project",
      title: "Motorbike Services Mobile App",
      period: {
        start: new Date("2023-01"),
        end: new Date("2023-04"),
      },
      status: "completed",
      brief: "A cross-platform mobile application for real-time motorbike service booking and tracking",
      challenge: {
        description: "Develop a reliable mobile application for connecting motorcycle owners with service providers in real-time",
        constraints: ["Real-time location tracking", "Cross-platform compatibility", "Offline functionality"],
      },
      solution: {
        approach: "Built using Flutter for cross-platform support with Firebase for real-time features",
        implementation: "Created a robust booking system with real-time tracking capabilities",
        innovations: ["Real-time location tracking system", "Offline-first architecture", "Automated service matching"],
      },
      impact: {
        metrics: ["4.8/5 user rating", "500+ daily active users", "30% reduction in service response time"],
        achievements: [
          "Successfully launched on both iOS and Android",
          "Implemented efficient service provider matching",
          "Created intuitive booking flow",
        ],
      },
      technical: {
        architecture: "Cross-platform mobile architecture with real-time capabilities",
        stack: ["Flutter", "Dart", "Firebase", "Google Maps API", "Geolocation"],
        highlights: ["Real-time tracking system", "Offline support", "Cross-platform compatibility"],
      },
      visuals: {
        current: "/projects/motorbike-services/screenshot.png",
        demo: "https://motorbike-services.com",
      },
    },
  ],
  ar: [
    {
      id: "edumize",
      type: "project",
      title: "موقع Edumize",
      period: {
        start: new Date("2023-09"),
        end: new Date("2023-11"),
      },
      status: "completed",
      brief: "منصة تعليمية حديثة تجمع بين مرونة نظام إدارة المحتوى والأداء المحسّن",
      challenge: {
        description: "إنشاء منصة تعليمية قابلة للتوسع تحافظ على أداء عالٍ أثناء التعامل مع المحتوى الديناميكي والرسوم المتحركة المعقدة",
        constraints: [
          "يجب أن يكون المحتوى سهل الإدارة من قبل الموظفين غير التقنيين",
          "رسوم متحركة معقدة دون المساس بالأداء",
          "تكامل سلس بين نظام إدارة المحتوى وواجهة المستخدم",
        ],
      },
      solution: {
        approach: "تنفيذ حل هجين باستخدام Webflow لإدارة المحتوى ومكونات React مخصصة لوظائف محسنة",
        implementation: "تطوير نظام ترحيل مخصص وبناء مكونات واجهة مستخدم محسّنة مع دعم الرسوم المتحركة",
        innovations: [
          "نظام ترحيل مخصص من Webflow إلى React",
          "نظام رسوم متحركة محسّن باستخدام Framer Motion",
          "مزامنة البيانات التلقائية بين نظام إدارة المحتوى وواجهة المستخدم",
        ],
      },
      impact: {
        metrics: ["تقليل وقت تحميل الصفحة بنسبة 40%", "تحسين وقت تحديث المحتوى بنسبة 70%", "تحقيق درجة أداء +95 في Lighthouse"],
        achievements: [
          "نجاح في دمج الرسوم المتحركة المعقدة مع الحفاظ على الأداء",
          "إنشاء سير عمل بديهي لإدارة المحتوى",
          "تنفيذ تصميم متجاوب يدعم جميع أحجام الأجهزة",
        ],
      },
      technical: {
        architecture: "بنية Jamstack مع نظام إدارة محتوى headless",
        stack: ["React", "TypeScript", "Framer Motion", "Material UI", "Redux Toolkit", "Express", "Airtable"],
        highlights: ["نظام رسوم متحركة مخصص", "مكتبة مكونات متجاوبة", "مزامنة البيانات التلقائية", "تحسين الأداء"],
      },
      visuals: {
        current: "/projects/edumize/current.png",
        demo: "https://edumize.com",
        github: "https://github.com/username/edumize",
      },
    },
    {
      id: "smart-buddy",
      type: "project",
      title: "سمارت بادي - مساعد واتساب ذكي",
      period: {
        start: new Date("2023-06"),
        end: new Date("2023-08"),
      },
      status: "completed",
      brief: "مساعد أعمال ذكي على واتساب يقوم بأتمتة تفاعلات العملاء باستخدام الذكاء الاصطناعي",
      challenge: {
        description: "تطوير نظام أتمتة واتساب قابل للتوسع يحافظ على تدفق محادثة طبيعي مع التعامل مع العديد من المستخدمين المتزامنين",
        constraints: ["التعامل مع محادثات متعددة متزامنة", "الحفاظ على السياق عبر المحادثات", "ضمان أوقات استجابة سريعة"],
      },
      solution: {
        approach: "بناء نظام معياري يدمج OpenAI's LLM مع واجهة برمجة تطبيقات واتساب للأعمال",
        implementation: "إنشاء نظام إدارة محادثات قوي مع وعي بالسياق",
        innovations: ["نظام محادثة واعٍ بالسياق", "توليد استجابة ديناميكي", "تكامل عمليات الأعمال الآلية"],
      },
      impact: {
        metrics: ["يتعامل مع +500 محادثة متزامنة", "تخفيض وقت الاستجابة بنسبة 90%", "انخفاض عبء الدعم بنسبة 75%"],
        achievements: [
          "نجاح في أتمتة استفسارات العملاء الشائعة",
          "التكامل مع أنظمة الأعمال للتحديثات في الوقت الفعلي",
          "الحفاظ على درجات رضا عالية للمستخدم",
        ],
      },
      technical: {
        architecture: "بنية خدمات مصغرة مع تصميم مدفوع بالأحداث",
        stack: ["Express", "React", "JavaScript", "OpenAI API", "Alibaba Chatapp"],
        highlights: ["معالجة الرسائل في الوقت الفعلي", "نظام إدارة السياق", "التكامل مع أنظمة الأعمال"],
      },
      visuals: {
        current: "/projects/smart-buddy/demo.gif",
        demo: "https://smart-buddy-demo.com",
      },
    },
    {
      id: "chat-widget",
      type: "project",
      title: "أداة الدردشة المباشرة",
      period: {
        start: new Date("2023-03"),
        end: new Date("2023-05"),
      },
      status: "completed",
      brief: "أداة دردشة مباشرة قابلة للتخصيص للتكامل السلس مع المواقع",
      challenge: {
        description: "إنشاء أداة دردشة خفيفة وعالية الأداء يمكن دمجها بسهولة في أي موقع",
        constraints: ["تأثير ضminimal على أداء الموقع المستضيف", "التوافق مع جميع المتصفحات", "تسليم الرسائل في الوقت الفعلي"],
      },
      solution: {
        approach: "تطوير أداة معيارية باستخدام WebSocket للتواصل في الوقت الفعلي",
        implementation: "بناء أداة مستقلة مع خيارات تكامل سهلة",
        innovations: ["تنفيذ WebSocket مخصص", "نظام طابور رسائل فعال", "نظام أنماط تكيفي"],
      },
      impact: {
        metrics: ["حجم حزمة أقل من 50 كيلوبايت", "معدل تسليم رسائل 99.9%", "زمن تأخير للرسائل أقل من 100 مللي ثانية"],
        achievements: ["إنشاء مكون عالي القابلية لإعادة الاستخدام", "تنفيذ تواصل فعال في الوقت الفعلي", "تطوير نظام أنماط مرن"],
      },
      technical: {
        architecture: "بنية أداة معيارية مع تكامل WebSocket",
        stack: ["Express", "React", "TypeScript", "MongoDB", "Socket.io", "Material UI"],
        highlights: ["نظام رسائل في الوقت الفعلي", "نظام أنماط مخصص", "التوافق مع جميع المتصفحات"],
      },
      visuals: { current: "/projects/chat-widget/preview.png", github: "https://github.com/username/chat-widget" },
    },
  ],
};

export default projects;
