
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
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
              <span className="gradient-text">Cyber</span>
              <span className="text-white">Security</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
              Vista Hub
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive platform for cybersecurity news, tools, learning resources, 
            and career roadmaps. Stay ahead of threats and advance your cybersecurity journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/news">
              <Button className="neon-button text-lg px-8 py-4">
                Explore Latest News
              </Button>
            </Link>
            <Link to="/learning">
              <Button variant="outline" className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-black text-lg px-8 py-4">
                Start Learning
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            <div className="cyber-card text-center">
              <div className="text-3xl font-bold text-cyber-blue">1000+</div>
              <div className="text-gray-400">News Articles</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-3xl font-bold text-cyber-green">50+</div>
              <div className="text-gray-400">Security Tools</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-3xl font-bold text-cyber-purple">100+</div>
              <div className="text-gray-400">Learning Resources</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-3xl font-bold text-cyber-orange">24/7</div>
              <div className="text-gray-400">Auto Updates</div>
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
