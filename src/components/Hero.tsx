
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown, Shield, Zap, Bot, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 via-cyan-50/40 to-yellow-100/30" />
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl animate-bounce-slow" style={{ animationDelay: '2s' }} />
      
      {/* Floating icons */}
      <div className="absolute top-32 right-1/4 text-cyber-blue/30 animate-float">
        <Shield className="w-12 h-12" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 text-cyber-purple/30 animate-float" style={{ animationDelay: '1.5s' }}>
        <Zap className="w-10 h-10" />
      </div>
      <div className="absolute top-1/3 right-1/3 text-cyber-green/30 animate-float" style={{ animationDelay: '3s' }}>
        <Bot className="w-14 h-14" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-8">
          {/* Main headline with enhanced styling */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="gradient-text">SEC</span>
              <span className="text-slate-800">PULSE</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-600">
              {t('heroSubtitle')}
            </h2>
          </div>

          {/* Enhanced subtitle */}
          <p className="text-xl md:text-2xl text-slate-500 max-w-4xl mx-auto leading-relaxed">
            {t('heroDescription')}
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link to="/contact">
              <Button className="neon-button text-lg px-10 py-5 rounded-xl shadow-2xl">
                {t('freeConsultation')}
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-2 border-pink-400 text-pink-600 hover:bg-pink-50 hover:text-pink-700 text-lg px-10 py-5 rounded-xl shadow-lg">
                {t('learnMore')}
              </Button>
            </Link>
          </div>

          {/* Enhanced Stats with vibrant styling */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
            <div className="vibrant-card text-center group">
              <div className="text-4xl font-bold text-cyber-blue mb-2 group-hover:scale-110 transition-transform">100+</div>
              <div className="text-slate-600">{t('securedSites')}</div>
            </div>
            <div className="vibrant-card text-center group">
              <div className="text-4xl font-bold text-cyber-green mb-2 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-slate-600">{t('smartBots')}</div>
            </div>
            <div className="vibrant-card text-center group">
              <div className="text-4xl font-bold text-cyber-purple mb-2 group-hover:scale-110 transition-transform">200+</div>
              <div className="text-slate-600">{t('vulnerabilities')}</div>
            </div>
            <div className="vibrant-card text-center group">
              <div className="text-4xl font-bold text-cyber-orange mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-slate-600">{t('support')}</div>
            </div>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="p-3 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple shadow-lg">
              <ArrowDown className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
