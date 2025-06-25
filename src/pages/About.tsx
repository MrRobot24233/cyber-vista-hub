
import { Shield, Bot, Award, Users, Bug, Zap, Wrench } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const services = [
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Comprehensive website security testing and vulnerability discovery before hackers exploit them. I conduct thorough security assessments to identify weaknesses in your web applications.',
      color: 'text-cyber-blue'
    },
    {
      icon: Bot,
      title: 'Smart Chatbots',
      description: 'AI-powered chatbot development that can be integrated into all platforms and applications. I create intelligent conversational AI solutions that enhance customer experience.',
      color: 'text-cyber-green'
    },
    {
      icon: Bug,
      title: 'Bug Bounty',
      description: 'Vulnerability research services and participation in global Bug Bounty programs. I help organizations discover security flaws through ethical hacking.',
      color: 'text-cyber-purple'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Website security and speed optimization to ensure excellent user experience. I optimize your web applications for both security and performance.',
      color: 'text-cyber-orange'
    },
    {
      icon: Users,
      title: 'Security Consultation',
      description: 'Specialized cybersecurity consulting and security risk assessment for organizations. I provide expert guidance on security architecture and policy development.',
      color: 'text-red-400'
    },
    {
      icon: Wrench,
      title: 'Post-Hack Repair',
      description: 'Emergency services to repair hacked websites and restore their secure operation. I provide rapid response to security incidents and malware removal.',
      color: 'text-yellow-400'
    }
  ];

  const stats = [
    { number: '100+', label: 'Websites Secured' },
    { number: '50+', label: 'Chatbots Developed' },
    { number: '200+', label: 'Vulnerabilities Found' },
    { number: '24/7', label: 'Emergency Support' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Cybersecurity Expert & Smart Chatbot Developer
          </p>
        </div>

        {/* About Section */}
        <div className="mb-16">
          <Card className="cyber-card">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-cyber-blue mb-4">Who Am I?</h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                I am a dedicated cybersecurity specialist with extensive experience in website security and AI-powered smart chatbot development. My passion lies in protecting digital assets and creating intelligent solutions that drive business success.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                With years of experience in penetration testing, vulnerability research, and chatbot development, I help businesses secure their digital presence while implementing cutting-edge AI technologies to enhance customer interactions.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                My expertise spans across multiple domains including web application security, ethical hacking, bug bounty hunting, and conversational AI development. I stay updated with the latest security threats and AI advancements to provide the most effective solutions.
              </p>
            </div>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="cyber-card text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyber-blue">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">My Specialized Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="cyber-card group hover:scale-105 transition-transform duration-300">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-current to-transparent p-3 ${service.color}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Card className="cyber-card inline-block max-w-2xl">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyber-blue">Ready to Start?</h3>
              <p className="text-gray-400">
                Contact me for a free consultation and assessment of your security needs. 
                I'm available 24/7 for emergency security incidents.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
