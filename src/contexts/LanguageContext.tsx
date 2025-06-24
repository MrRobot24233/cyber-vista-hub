
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    news: 'الأخبار',
    tools: 'الأدوات',
    roadmap: 'خريطة التعلم',
    learning: 'التعلم',
    about: 'عني',
    contact: 'التواصل',
    
    // Hero
    heroTitle: 'SECPULSE',
    heroSubtitle: 'أمان المواقع والشات بوتات الذكية',
    heroDescription: 'خبير في اختبار الاختراق وتأمين المواقع وصناعة الشات بوتات المدعومة بالذكاء الاصطناعي. نحمي مواقعك ونطور حلول ذكية لأعمالك.',
    freeConsultation: 'احصل على استشارة مجانية',
    learnMore: 'تعرف على خدماتنا',
    
    // Stats
    securedSites: 'موقع تم تأمينه',
    smartBots: 'شات بوت ذكي',
    vulnerabilities: 'ثغرة تم اكتشافها',
    support: 'دعم فني',
    
    // Features
    featuresTitle: 'خدماتنا المتخصصة',
    featuresSubtitle: 'نقدم حلول شاملة في الأمن السيبراني وتطوير الشات بوتات الذكية',
    
    penetrationTesting: 'اختبار الاختراق',
    penetrationTestingDesc: 'اختبار شامل لأمان المواقع واكتشاف الثغرات الأمنية قبل أن يستغلها المخترقون.',
    
    smartChatbots: 'الشات بوتات الذكية',
    smartChatbotsDesc: 'تطوير شات بوتات مدعومة بالذكاء الاصطناعي يمكن دمجها في جميع المنصات والتطبيقات.',
    
    bugBounty: 'Bug Bounty',
    bugBountyDesc: 'خدمات البحث عن الثغرات والمشاركة في برامج Bug Bounty العالمية.',
    
    performanceOptimization: 'تحسين الأداء',
    performanceOptimizationDesc: 'تأمين المواقع وتحسين سرعتها وأدائها لضمان تجربة مستخدم مميزة.',
    
    securityConsultation: 'الاستشارات الأمنية',
    securityConsultationDesc: 'استشارات متخصصة في الأمن السيبراني وتقييم المخاطر الأمنية للمؤسسات.',
    
    postHackRepair: 'إصلاح بعد الاختراق',
    postHackRepairDesc: 'خدمات الطوارئ لإصلاح المواقع المخترقة واستعادة عملها بأمان تام.',
    
    requestService: 'اطلب الخدمة',
    
    // About
    aboutTitle: 'من أنا؟',
    aboutSubtitle: 'خبير الأمن السيبراني وتطوير الشات بوتات',
    aboutDescription: 'أنا متخصص في مجال الأمن السيبراني مع التركيز على أمان المواقع الإلكترونية وتطوير الشات بوتات الذكية المدعومة بالذكاء الاصطناعي.',
    
    // Contact
    contactTitle: 'تواصل معي',
    contactSubtitle: 'جاهز لمساعدتك في تأمين موقعك أو تطوير شات بوت ذكي',
    
    // Social Media
    fiverr: 'Fiverr',
    freelancer: 'Freelancer',
    facebook: 'Facebook',
    instagram: 'Instagram'
  },
  en: {
    // Navigation
    home: 'Home',
    news: 'News',
    tools: 'Tools',
    roadmap: 'Roadmap',
    learning: 'Learning',
    about: 'About',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'SECPULSE',
    heroSubtitle: 'Website Security & Smart Chatbots',
    heroDescription: 'Expert in penetration testing, website security, and AI-powered chatbot development. We protect your websites and develop smart solutions for your business.',
    freeConsultation: 'Get Free Consultation',
    learnMore: 'Learn About Our Services',
    
    // Stats
    securedSites: 'Secured Websites',
    smartBots: 'Smart Chatbots',
    vulnerabilities: 'Vulnerabilities Found',
    support: 'Support',
    
    // Features
    featuresTitle: 'Our Specialized Services',
    featuresSubtitle: 'We provide comprehensive cybersecurity solutions and smart chatbot development',
    
    penetrationTesting: 'Penetration Testing',
    penetrationTestingDesc: 'Comprehensive website security testing and vulnerability discovery before hackers exploit them.',
    
    smartChatbots: 'Smart Chatbots',
    smartChatbotsDesc: 'AI-powered chatbot development that can be integrated into all platforms and applications.',
    
    bugBounty: 'Bug Bounty',
    bugBountyDesc: 'Vulnerability research services and participation in global Bug Bounty programs.',
    
    performanceOptimization: 'Performance Optimization',
    performanceOptimizationDesc: 'Website security and speed optimization to ensure excellent user experience.',
    
    securityConsultation: 'Security Consultation',
    securityConsultationDesc: 'Specialized cybersecurity consulting and security risk assessment for organizations.',
    
    postHackRepair: 'Post-Hack Repair',
    postHackRepairDesc: 'Emergency services to repair hacked websites and restore their secure operation.',
    
    requestService: 'Request Service',
    
    // About
    aboutTitle: 'Who Am I?',
    aboutSubtitle: 'Cybersecurity Expert & Chatbot Developer',
    aboutDescription: 'I am a cybersecurity specialist focusing on website security and AI-powered smart chatbot development.',
    
    // Contact
    contactTitle: 'Contact Me',
    contactSubtitle: 'Ready to help you secure your website or develop a smart chatbot',
    
    // Social Media
    fiverr: 'Fiverr',
    freelancer: 'Freelancer',
    facebook: 'Facebook',
    instagram: 'Instagram'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
