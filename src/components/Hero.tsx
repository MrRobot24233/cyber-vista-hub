
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowUp, Shield, Bot, Bug, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const keyServices = [
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Website security assessment',
      color: 'text-cyber-blue'
    },
    {
      icon: Bot,
      title: 'Smart Chatbots',
      description: 'AI-powered solutions',
      color: 'text-cyber-green'
    },
    {
      icon: Bug,
      title: 'Bug Bounty',
      description: 'Vulnerability research',
      color: 'text-cyber-purple'
    },
    {
      icon: Zap,
      title: 'Quick Response',
      description: '24/7 emergency support',
      color: 'text-cyber-orange'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
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
              Website Security & Smart Chatbots
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Expert in penetration testing, website security, and AI-powered chatbot development. We protect your websites and develop smart solutions for your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/contact">
              <Button className="neon-button text-lg px-8 py-4">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-black text-lg px-8 py-4">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Key Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16">
            {keyServices.map((service, index) => (
              <div key={index} className="cyber-card text-center group hover:scale-105 transition-all duration-300">
                <div className="space-y-3">
                  <div className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-current to-transparent p-3 ${service.color}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top button - positioned in bottom left corner */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 p-3 bg-cyber-blue/20 backdrop-blur-sm border border-cyber-blue/30 rounded-full hover:bg-cyber-blue hover:text-black transition-all duration-300 group hover:scale-110 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-cyber-blue group-hover:text-black animate-bounce" />
        </button>
      )}
    </section>
  );
};

export default Hero;
