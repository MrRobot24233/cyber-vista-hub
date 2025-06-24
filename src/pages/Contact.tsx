
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MessageSquare, Phone, MapPin, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'alex@cybervista.com',
      action: 'mailto:alex@cybervista.com',
      color: 'text-cyber-blue'
    },
    {
      icon: MessageSquare,
      title: 'Discord',
      description: 'Join our community',
      action: 'https://discord.gg/cybersecurity',
      color: 'text-cyber-purple'
    },
    {
      icon: Phone,
      title: 'LinkedIn',
      description: 'Professional network',
      action: 'https://linkedin.com/in/alexchen-security',
      color: 'text-cyber-green'
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'San Francisco, CA',
      action: null,
      color: 'text-cyber-orange'
    }
  ];

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/alexchen_sec', username: '@alexchen_sec' },
    { name: 'GitHub', url: 'https://github.com/alexchen-security', username: 'alexchen-security' },
    { name: 'Medium', url: 'https://medium.com/@alexchen-security', username: '@alexchen-security' },
    { name: 'YouTube', url: 'https://youtube.com/@CyberSecWithAlex', username: 'CyberSecWithAlex' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about cybersecurity? Want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="cyber-card">
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white">Contact Information</h2>
                
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-3 bg-black/40 rounded-lg ${method.color}`}>
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                      {method.action ? (
                        <a
                          href={method.action}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyber-blue transition-colors text-sm"
                        >
                          {method.description}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-sm">{method.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="cyber-card">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">Follow Me</h2>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-cyber-blue/10 transition-colors group"
                    >
                      <div>
                        <span className="font-medium text-white group-hover:text-cyber-blue transition-colors">
                          {social.name}
                        </span>
                        <p className="text-gray-400 text-sm">{social.username}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyber-blue transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick Response */}
            <Card className="cyber-card">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Quick Response</h3>
                <p className="text-gray-400 text-sm">
                  I typically respond to messages within 24-48 hours. For urgent security matters, 
                  please use the email contact method.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                  <span className="text-gray-400">Usually responds within a day</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="cyber-card">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-black/40 border-cyber-blue/30 text-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-black/40 border-cyber-blue/30 text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-black/40 border-cyber-blue/30 text-white"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-black/40 border-cyber-blue/30 text-white resize-none"
                      placeholder="Tell me more about your inquiry..."
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="neon-button flex-1 sm:flex-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-gray-500">
                      * Required fields
                    </p>
                  </div>
                </form>
              </div>
            </Card>

            {/* FAQ */}
            <Card className="cyber-card mt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyber-blue mb-2">Do you offer consultation services?</h4>
                    <p className="text-gray-400 text-sm">
                      Yes, I provide cybersecurity consulting for organizations of all sizes. 
                      Please include details about your requirements in your message.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyber-blue mb-2">Can you help with career guidance?</h4>
                    <p className="text-gray-400 text-sm">
                      Absolutely! I'm passionate about helping others enter and advance in cybersecurity. 
                      Feel free to reach out for mentorship and career advice.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyber-blue mb-2">Do you collaborate on research projects?</h4>
                    <p className="text-gray-400 text-sm">
                      I'm always interested in collaborating on security research and open-source projects. 
                      Send me details about your project or idea.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
