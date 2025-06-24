
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();

  const socialPlatforms = [
    {
      name: t('fiverr'),
      url: '#', // ضع رابط ملفك الشخصي في Fiverr هنا
      logo: '🟢',
      description: 'Fiverr Profile'
    },
    {
      name: t('freelancer'),
      url: '#', // ضع رابط ملفك الشخصي في Freelancer هنا
      logo: '💼',
      description: 'Freelancer.com Profile'
    },
    {
      name: t('facebook'),
      url: '#', // ضع رابط صفحتك في Facebook هنا
      logo: '📘',
      description: 'Facebook Page'
    },
    {
      name: t('instagram'),
      url: '#', // ضع رابط حسابك في Instagram هنا
      logo: '📷',
      description: 'Instagram Profile'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{t('contactTitle')}</span>
          </h1>
          <p className="text-xl text-gray-400">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialPlatforms.map((platform, index) => (
            <a 
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="cyber-card group-hover:scale-105 transition-all duration-300 group-hover:border-cyber-blue/50">
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{platform.logo}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyber-blue transition-colors">
                        {platform.name}
                      </h3>
                      <p className="text-gray-400">{platform.description}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyber-blue transition-colors" />
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="cyber-card">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-cyber-blue mb-4">
                {language === 'ar' ? 'جاهز للبدء؟' : 'Ready to Start?'}
              </h2>
              <p className="text-gray-300 text-lg">
                {language === 'ar' 
                  ? 'تواصل معي عبر أي من المنصات أعلاه للحصول على استشارة مجانية وتقييم احتياجاتك الأمنية.'
                  : 'Contact me through any of the platforms above for a free consultation and assessment of your security needs.'
                }
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
