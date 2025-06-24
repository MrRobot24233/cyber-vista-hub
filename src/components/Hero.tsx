

import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown, TrendingUp, Globe, Users, Zap } from 'lucide-react';

const Hero = () => {
  const attractiveStats = [
    {
      icon: Globe,
      number: '195+',
      label: 'Countries Served',
      color: 'text-cyber-blue'
    },
    {
      icon: Users,
      number: '10K+',
      label: 'Happy Clients',
      color: 'text-cyber-green'
    },
    {
      icon: TrendingUp,
      number: '99.9%',
      label: 'Success Rate',
      color: 'text-cyber-purple'
    },
    {
      icon: Zap,
      number: '<24h',
      label: 'Response Time',
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

          {/* Attractive Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
            {attractiveStats.map((stat, index) => (
              <div key={index} className="cyber-card text-center group hover:scale-110 transition-all duration-500">
                <div className="space-y-3">
                  <div className={`w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-current to-transparent p-4 ${stat.color} group-hover:animate-pulse`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
                    {stat.number}
                  </div>
                  <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
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

