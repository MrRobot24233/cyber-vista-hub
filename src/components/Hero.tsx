
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-purple/5" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyber-blue/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyber-purple/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-8">
          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">SEC</span>
              <span className="text-white">PULSE</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
              {t('heroSubtitle')}
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('heroDescription')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/contact">
              <Button className="neon-button text-lg px-8 py-4">
                {t('freeConsultation')}
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-black text-lg px-8 py-4">
                {t('learnMore')}
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            <div className="cyber-card text-center">
              <div className="text-3xl font-bold text-cyber-blue">100+</div>
              <div className="text-gray-400">{t('securedSites')}</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-3xl font-bold text-cyber-green">50+</div>
              <div className="text-gray-400">{t('smartBots')}</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-3xl font-bold text-cyber-purple">200+</div>
              <div className="text-gray-400">{t('vulnerabilities')}</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-3xl font-bold text-cyber-orange">24/7</div>
              <div className="text-gray-400">{t('support')}</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-cyber-blue" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
