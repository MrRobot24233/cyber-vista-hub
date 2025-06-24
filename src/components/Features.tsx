
import { Card } from '@/components/ui/card';
import { Calendar, Tools, Book, FileText, News, Contact } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: News,
      title: 'Auto News Feed',
      description: 'Real-time cybersecurity news from trusted sources, updated every hour automatically.',
      link: '/news',
      color: 'text-cyber-blue'
    },
    {
      icon: Tools,
      title: 'Security Tools',
      description: 'Curated collection of essential cybersecurity tools and utilities for professionals.',
      link: '/tools',
      color: 'text-cyber-green'
    },
    {
      icon: FileText,
      title: 'Career Roadmap',
      description: 'Structured learning paths and career guidance for cybersecurity professionals.',
      link: '/roadmap',
      color: 'text-cyber-purple'
    },
    {
      icon: Book,
      title: 'Learning Hub',
      description: 'Comprehensive educational resources, courses, and certifications.',
      link: '/learning',
      color: 'text-cyber-orange'
    },
    {
      icon: Calendar,
      title: 'Daily Updates',
      description: 'Fresh content delivered daily from leading cybersecurity sources worldwide.',
      link: '/news',
      color: 'text-cyber-red'
    },
    {
      icon: Contact,
      title: 'Expert Network',
      description: 'Connect with cybersecurity professionals and expand your network.',
      link: '/contact',
      color: 'text-cyber-blue'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Platform Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to stay informed and advance your cybersecurity career
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
                    Learn more →
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
