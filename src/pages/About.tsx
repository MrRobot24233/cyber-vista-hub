
import { Shield, Bot, Award, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  const expertise = [
    {
      icon: Shield,
      title: t('penetrationTesting'),
      color: 'text-cyber-blue'
    },
    {
      icon: Bot,
      title: t('smartChatbots'),
      color: 'text-cyber-green'
    },
    {
      icon: Award,
      title: t('bugBounty'),
      color: 'text-cyber-purple'
    },
    {
      icon: Users,
      title: t('securityConsultation'),
      color: 'text-cyber-orange'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{t('aboutTitle')}</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            {t('aboutSubtitle')}
          </p>
        </div>

        <div className="space-y-8">
          <Card className="cyber-card">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-cyber-blue mb-4">{t('aboutTitle')}</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t('aboutDescription')}
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <Card key={index} className="cyber-card group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-current to-transparent p-3 ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
