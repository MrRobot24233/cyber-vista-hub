
import { Card } from '@/components/ui/card';
import { Shield, Bot, Bug, Zap, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Features = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t('penetrationTesting'),
      description: t('penetrationTestingDesc'),
      link: '/contact',
      color: 'text-cyber-blue'
    },
    {
      icon: Bot,
      title: t('smartChatbots'),
      description: t('smartChatbotsDesc'),
      link: '/contact',
      color: 'text-cyber-green'
    },
    {
      icon: Bug,
      title: t('bugBounty'),
      description: t('bugBountyDesc'),
      link: '/contact',
      color: 'text-cyber-purple'
    },
    {
      icon: Zap,
      title: t('performanceOptimization'),
      description: t('performanceOptimizationDesc'),
      link: '/contact',
      color: 'text-cyber-orange'
    },
    {
      icon: Users,
      title: t('securityConsultation'),
      description: t('securityConsultationDesc'),
      link: '/contact',
      color: 'text-cyber-red'
    },
    {
      icon: Award,
      title: t('postHackRepair'),
      description: t('postHackRepairDesc'),
      link: '/contact',
      color: 'text-cyber-blue'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('featuresTitle')}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('featuresSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link} className="group">
              <Card className="cyber-card h-full group-hover:scale-105 transition-transform duration-300">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-current to-transparent p-3 ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  <div className={`text-sm font-medium ${feature.color} group-hover:underline`}>
                    {t('requestService')} →
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
