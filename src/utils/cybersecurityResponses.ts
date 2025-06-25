
export const getCybersecurityResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  // Cybersecurity specific responses in Arabic and English
  const responses = {
    'penetration testing': 'اختبار الاختراق هو عملية محاكاة هجمات إلكترونية للعثور على نقاط الضعف في النظام. أقدم خدمات اختبار الاختراق الشاملة لحماية موقعك من المخترقين.',
    'chatbot': 'أقوم بتطوير chatbots ذكية باستخدام الذكاء الاصطناعي يمكن دمجها في جميع المنصات. هذه الـ chatbots يمكنها فهم العملاء والرد عليهم بذكاء.',
    'bug bounty': 'برامج Bug Bounty هي طريقة لاكتشاف الثغرات الأمنية من خلال الهاكرز الأخلاقيين. أشارك في برامج Bug Bounty العالمية وأقدم خدمات البحث عن الثغرات.',
    'website security': 'أمان المواقع يتطلب عدة طبقات من الحماية: تشفير البيانات، حماية قواعد البيانات، تحديث الأنظمة، ومراقبة التهديدات. أقدم تقييم شامل لأمان موقعك.',
    'malware': 'البرامج الضارة تشمل الفيروسات وأحصنة طروادة وبرامج الفدية. أقدم خدمات إزالة البرمجيات الخبيثة وحماية الأنظمة منها.',
    'phishing': 'التصيد الإلكتروني هو محاولة سرقة المعلومات الشخصية عبر رسائل مزيفة. أقدم تدريب للموظفين وحلول تقنية لمنع هجمات التصيد.',
    'encryption': 'التشفير هو عملية تحويل البيانات إلى شكل غير قابل للقراءة لحمايتها. أنصح باستخدام تشفير AES-256 لحماية البيانات الحساسة.',
    'firewall': 'جدار الحماية هو خط الدفاع الأول ضد الهجمات الإلكترونية. يجب تكوينه بعناية لحجب الوصول غير المصرح به.',
    'password': 'كلمات المرور القوية يجب أن تحتوي على 12 حرف على الأقل مع أرقام ورموز. أنصح بالمصادقة الثنائية لحماية إضافية.',
    'backup': 'النسخ الاحتياطية ضرورية لاستعادة البيانات عند الهجمات. أنصح بنسخ احتياطية يومية مع تشفير واختبار دوري للاستعادة.'
  };

  // Check for Arabic keywords
  if (message.includes('اختبار') || message.includes('اختراق')) {
    return responses['penetration testing'];
  }
  if (message.includes('شات') || message.includes('بوت') || message.includes('ذكي')) {
    return responses['chatbot'];
  }
  if (message.includes('ثغر') || message.includes('باج')) {
    return responses['bug bounty'];
  }
  if (message.includes('أمان') || message.includes('حماية') || message.includes('موقع')) {
    return responses['website security'];
  }

  // Check for English keywords
  for (const [keyword, response] of Object.entries(responses)) {
    if (message.includes(keyword)) {
      return response;
    }
  }

  // Default responses
  const defaultResponses = [
    'أنا متخصص في الأمن السيبراني وتطوير الـ chatbots الذكية. يمكنني مساعدتك في: اختبار الاختراق، حماية المواقع، البحث عن الثغرات، وتطوير chatbots ذكية.',
    'كخبير في الأمن السيبراني، أقدم خدمات شاملة لحماية موقعك والبحث عن الثغرات الأمنية قبل أن يستغلها المخترقون.',
    'أطور chatbots ذكية يمكنها فهم العملاء والرد عليهم بذكاء. كما أقدم خدمات الأمن السيبراني للمؤسسات.',
    'هل تحتاج مساعدة في أمان موقعك؟ أم تريد تطوير chatbot ذكي لعملك؟ أنا هنا لمساعدتك!'
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};
