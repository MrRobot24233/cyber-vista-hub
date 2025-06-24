
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MessageSquare, Phone, MapPin, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "تم إرسال الرسالة!",
      description: "شكراً لك على رسالتك. سأقوم بالرد عليك في أقرب وقت ممكن.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      description: 'info@secpulse.com',
      action: 'mailto:info@secpulse.com',
      color: 'text-cyber-blue'
    },
    {
      icon: MessageSquare,
      title: 'واتساب',
      description: 'تواصل سريع',
      action: 'https://wa.me/1234567890',
      color: 'text-cyber-green'
    },
    {
      icon: Phone,
      title: 'هاتف',
      description: 'استشارة مباشرة',
      action: 'tel:+1234567890',
      color: 'text-cyber-purple'
    },
    {
      icon: MapPin,
      title: 'الموقع',
      description: 'خدمات عن بُعد',
      action: null,
      color: 'text-cyber-orange'
    }
  ];

  const socialLinks = [
    { 
      name: 'Fiverr', 
      url: 'https://fiverr.com/your-profile', 
      username: 'secpulse_expert',
      logo: '🎯'
    },
    { 
      name: 'Freelancer.com', 
      url: 'https://freelancer.com/your-profile', 
      username: 'secpulse',
      logo: '💼'
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/your-profile', 
      username: 'SECPULSE',
      logo: '📘'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/your-profile', 
      username: '@secpulse',
      logo: '📷'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">تواصل معي</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            هل لديك مشروع تريد تأمينه؟ أم تحتاج شات بوت ذكي؟ دعنا نتحدث ونجد الحل المناسب لك.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="cyber-card">
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white">معلومات التواصل</h2>
                
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-3 bg-black/40 rounded-lg ${method.color}`}>
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                      {method.action ? (
                        <a
                          href={method.action}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyber-blue transition-colors text-sm"
                        >
                          {method.description}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-sm">{method.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="cyber-card">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">ملفاتي الشخصية</h2>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-cyber-blue/10 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{social.logo}</span>
                        <div>
                          <span className="font-medium text-white group-hover:text-cyber-blue transition-colors">
                            {social.name}
                          </span>
                          <p className="text-gray-400 text-sm">{social.username}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyber-blue transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick Response */}
            <Card className="cyber-card">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">سرعة الاستجابة</h3>
                <p className="text-gray-400 text-sm">
                  أرد عادة على الرسائل خلال 24 ساعة. للحالات الطارئة، 
                  يرجى استخدام الواتساب للتواصل السريع.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                  <span className="text-gray-400">متاح للمشاريع الجديدة</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="cyber-card">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">أرسل رسالة</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        الاسم الكامل *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-black/40 border-cyber-blue/30 text-white"
                        placeholder="اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        البريد الإلكتروني *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-black/40 border-cyber-blue/30 text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      الموضوع *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-black/40 border-cyber-blue/30 text-white"
                      placeholder="موضوع رسالتك"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      الرسالة *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-black/40 border-cyber-blue/30 text-white resize-none"
                      placeholder="اكتب تفاصيل مشروعك أو استفسارك..."
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="neon-button flex-1 sm:flex-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          جارٍ الإرسال...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          إرسال الرسالة
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-gray-500">
                      * الحقول المطلوبة
                    </p>
                  </div>
                </form>
              </div>
            </Card>

            {/* Services FAQ */}
            <Card className="cyber-card mt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">الأسئلة الشائعة</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyber-blue mb-2">كم تستغرق عملية اختبار الاختراق؟</h4>
                    <p className="text-gray-400 text-sm">
                      يعتمد على حجم وتعقيد الموقع، عادة من 3-7 أيام عمل للمواقع المتوسطة.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyber-blue mb-2">هل يمكن دمج الشات بوت في أي منصة؟</h4>
                    <p className="text-gray-400 text-sm">
                      نعم، أطور شات بوتات تعمل على WhatsApp، Telegram، Facebook، المواقع، والتطبيقات.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyber-blue mb-2">ما هو الضمان المقدم للخدمات؟</h4>
                    <p className="text-gray-400 text-sm">
                      أقدم ضمان لمدة شهر على جميع الخدمات مع دعم فني مجاني لمدة 3 أشهر.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
