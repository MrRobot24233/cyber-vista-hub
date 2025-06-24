
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown, Shield, Code, Bug, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const tasks = [
    "حماية المواقع الإلكترونية",
    "تطوير الروبوتات الذكية", 
    "اختبار الاختراق",
    "إصلاح الثغرات الأمنية",
    "تطوير التطبيقات",
    "استشارات الأمن السيبراني"
  ];

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenTasks = 2000;

    const timer = setTimeout(() => {
      const currentTask = tasks[currentTaskIndex];
      
      if (!isDeleting) {
        if (currentText.length < currentTask.length) {
          setCurrentText(currentTask.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenTasks);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentTask.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTaskIndex, tasks]);

  const features = [
    {
      icon: Shield,
      title: 'أمان عالي',
      description: 'حماية شاملة',
      color: 'text-cyber-blue'
    },
    {
      icon: Code,
      title: 'تطوير متقدم',
      description: 'حلول مبتكرة',
      color: 'text-cyber-green'
    },
    {
      icon: Bug,
      title: 'اختبار دقيق',
      description: 'فحص شامل',
      color: 'text-cyber-purple'
    },
    {
      icon: Zap,
      title: 'استجابة سريعة',
      description: 'خدمة فورية',
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

          {/* Typewriter Effect */}
          <div className="py-8">
            <div className="text-xl md:text-2xl text-gray-400 mb-4">
              نحن متخصصون في:
            </div>
            <div className="text-2xl md:text-4xl font-bold gradient-text min-h-[3rem] flex items-center justify-center">
              {currentText}
              <span className="animate-pulse ml-1">|</span>
            </div>
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

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card text-center group hover:scale-110 transition-all duration-500">
                <div className="space-y-3">
                  <div className={`w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-current to-transparent p-4 ${feature.color} group-hover:animate-pulse`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-lg font-bold ${feature.color}`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium">{feature.description}</p>
                </div>
              </div>
            ))}
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
