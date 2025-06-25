
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Send, Bot, User, Minimize2, Maximize2, X } from 'lucide-react';
import { pipeline } from '@huggingface/transformers';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'مرحباً! أنا مساعد ذكي متخصص في الأمن السيبراني. كيف يمكنني مساعدتك اليوم؟',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [generator, setGenerator] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize the AI model
  useEffect(() => {
    const initializeAI = async () => {
      try {
        console.log('Loading AI model...');
        const pipe = await pipeline('text-generation', 'Xenova/distilgpt2', {
          device: 'webgpu'
        });
        setGenerator(pipe);
        console.log('AI model loaded successfully');
      } catch (error) {
        console.log('WebGPU not available, falling back to CPU');
        try {
          const pipe = await pipeline('text-generation', 'Xenova/distilgpt2');
          setGenerator(pipe);
          console.log('AI model loaded on CPU');
        } catch (cpuError) {
          console.error('Failed to load AI model:', cpuError);
        }
      }
    };

    initializeAI();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getCybersecurityResponse = (userMessage: string): string => {
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

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // First try cybersecurity specific response
    const cybersecResponse = getCybersecurityResponse(userMessage);
    if (cybersecResponse !== getCybersecurityResponse('default')) {
      return cybersecResponse;
    }

    // If no specific match and AI model is available, use it
    if (generator) {
      try {
        const prompt = `User: ${userMessage}\nCybersecurity Expert:`;
        const result = await generator(prompt, {
          max_new_tokens: 50,
          temperature: 0.7,
          do_sample: true,
        });
        
        if (Array.isArray(result) && result[0]?.generated_text) {
          const response = result[0].generated_text.split('Cybersecurity Expert:')[1]?.trim();
          if (response && response.length > 10) {
            return response;
          }
        }
      } catch (error) {
        console.error('AI generation error:', error);
      }
    }

    // Fallback to cybersecurity default
    return getCybersecurityResponse('default');
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await generateAIResponse(input);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'عذراً، حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="neon-button w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <Bot className="w-8 h-8" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`cyber-card transition-all duration-300 ${
        isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'
      } flex flex-col`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-cyber-blue/20">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-cyber-blue" />
            <span className="font-semibold text-white">SECPULSE Assistant</span>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-8 w-8 p-0 hover:bg-cyber-blue/20"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 hover:bg-red-500/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-cyber-blue text-black'
                        : 'bg-gray-700 text-white'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && <Bot className="w-4 h-4 mt-0.5 text-cyber-blue flex-shrink-0" />}
                      {message.sender === 'user' && <User className="w-4 h-4 mt-0.5 text-black flex-shrink-0" />}
                      <span className="text-sm leading-relaxed">{message.text}</span>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-white p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-cyber-blue" />
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-cyber-blue rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-cyber-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-cyber-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-cyber-blue/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="اكتب رسالتك هنا..."
                  className="flex-1 bg-gray-800 border border-cyber-blue/30 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="neon-button px-3"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default Chatbot;
