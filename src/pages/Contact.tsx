import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Contact = () => {
  const socialPlatforms = [
    {
      name: 'Fiverr',
      url: 'https://www.fiverr.com/s/42kB1ed',
      logo: '🟢',
      description: 'Fiverr Profile'
    },
    {
      name: 'Freelancer',
      url: 'https://www.freelancer.com/u/SecPulse?frm=SecPulse&sb=t',
      logo: '💼',
      description: 'Freelancer.com Profile'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100070026216872',
      logo: '📘',
      description: 'Facebook Page'
    },
    {
      name: 'Instagram',
      url: '#', // Replace with your Instagram profile URL
      logo: '📷',
      description: 'Instagram Profile'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Contact Me</span>
          </h1>
          <p className="text-xl text-gray-400">
            Ready to help you secure your website or develop a smart chatbot
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialPlatforms.map((platform, index) => (
            <a 
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="cyber-card group-hover:scale-105 transition-all duration-300 group-hover:border-cyber-blue/50">
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{platform.logo}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyber-blue transition-colors">
                        {platform.name}
                      </h3>
                      <p className="text-gray-400">{platform.description}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyber-blue transition-colors" />
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="cyber-card">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-cyber-blue mb-4">
                Ready to Start?
              </h2>
              <p className="text-gray-300 text-lg">
                Contact me through any of the platforms above for a free consultation and assessment of your security needs.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
