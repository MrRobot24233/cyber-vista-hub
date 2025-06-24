
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, Download, Shield, Search, Network, Lock, Bug, Eye, Terminal } from 'lucide-react';

const Tools = () => {
  const toolCategories = [
    {
      name: 'Vulnerability Assessment',
      icon: Bug,
      tools: [
        {
          name: 'Nessus',
          description: 'Comprehensive vulnerability scanner for identifying security issues',
          type: 'Commercial',
          rating: 4.8,
          link: 'https://www.tenable.com/products/nessus',
          features: ['Network scanning', 'Web app testing', 'Compliance checks']
        },
        {
          name: 'OpenVAS',
          description: 'Open-source vulnerability assessment and management platform',
          type: 'Free',
          rating: 4.5,
          link: 'https://www.openvas.org/',
          features: ['Network vulnerability tests', 'Authenticated scanning', 'Reporting']
        },
        {
          name: 'Nikto',
          description: 'Web server scanner for dangerous files and misconfigurations',
          type: 'Free',
          rating: 4.3,
          link: 'https://cirt.net/Nikto2',
          features: ['Web server testing', 'CGI scanning', 'Plugin support']
        }
      ]
    },
    {
      name: 'Network Security',
      icon: Network,
      tools: [
        {
          name: 'Wireshark',
          description: 'World\'s foremost network protocol analyzer',
          type: 'Free',
          rating: 4.9,
          link: 'https://www.wireshark.org/',
          features: ['Packet capture', 'Protocol analysis', 'Network troubleshooting']
        },
        {
          name: 'Nmap',
          description: 'Network discovery and security auditing utility',
          type: 'Free',
          rating: 4.8,
          link: 'https://nmap.org/',
          features: ['Port scanning', 'OS detection', 'Service enumeration']
        },
        {
          name: 'pfSense',
          description: 'Open-source firewall and router platform',
          type: 'Free',
          rating: 4.6,
          link: 'https://www.pfsense.org/',
          features: ['Firewall', 'VPN', 'Traffic shaping']
        }
      ]
    },
    {
      name: 'Penetration Testing',
      icon: Shield,
      tools: [
        {
          name: 'Metasploit',
          description: 'Penetration testing framework for finding and exploiting vulnerabilities',
          type: 'Freemium',
          rating: 4.7,
          link: 'https://www.metasploit.com/',
          features: ['Exploit development', 'Payload generation', 'Post-exploitation']
        },
        {
          name: 'Burp Suite',
          description: 'Integrated platform for web application security testing',
          type: 'Freemium',
          rating: 4.8,
          link: 'https://portswigger.net/burp',
          features: ['Web app scanning', 'Proxy tools', 'Manual testing']
        },
        {
          name: 'OWASP ZAP',
          description: 'Free security testing proxy for web applications',
          type: 'Free',
          rating: 4.4,
          link: 'https://www.zaproxy.org/',
          features: ['Automated scanning', 'Manual tools', 'API testing']
        }
      ]
    },
    {
      name: 'Encryption & Privacy',
      icon: Lock,
      tools: [
        {
          name: 'VeraCrypt',
          description: 'Strong encryption software for securing sensitive data',
          type: 'Free',
          rating: 4.6,
          link: 'https://www.veracrypt.fr/',
          features: ['Disk encryption', 'Hidden volumes', 'Cross-platform']
        },
        {
          name: 'GnuPG',
          description: 'Complete implementation of the OpenPGP standard',
          type: 'Free',
          rating: 4.5,
          link: 'https://gnupg.org/',
          features: ['Email encryption', 'File signing', 'Key management']
        },
        {
          name: 'KeePass',
          description: 'Secure password manager with strong encryption',
          type: 'Free',
          rating: 4.7,
          link: 'https://keepass.info/',
          features: ['Password storage', 'Auto-type', 'Plugin support']
        }
      ]
    },
    {
      name: 'Monitoring & Analysis',
      icon: Eye,
      tools: [
        {
          name: 'Splunk',
          description: 'Platform for searching, monitoring, and analyzing machine data',
          type: 'Commercial',
          rating: 4.5,
          link: 'https://www.splunk.com/',
          features: ['Log analysis', 'Real-time monitoring', 'Machine learning']
        },
        {
          name: 'ELK Stack',
          description: 'Elasticsearch, Logstash, and Kibana for log analysis',
          type: 'Free',
          rating: 4.4,
          link: 'https://www.elastic.co/elk-stack',
          features: ['Log aggregation', 'Search', 'Visualization']
        },
        {
          name: 'OSSEC',
          description: 'Host-based intrusion detection system',
          type: 'Free',
          rating: 4.2,
          link: 'https://www.ossec.net/',
          features: ['File integrity', 'Log analysis', 'Rootkit detection']
        }
      ]
    },
    {
      name: 'Forensics',
      icon: Search,
      tools: [
        {
          name: 'Autopsy',
          description: 'Digital forensics platform for analyzing hard drives and mobile devices',
          type: 'Free',
          rating: 4.3,
          link: 'https://www.sleuthkit.org/autopsy/',
          features: ['Disk analysis', 'Timeline creation', 'Keyword search']
        },
        {
          name: 'Volatility',
          description: 'Memory forensics framework for incident response',
          type: 'Free',
          rating: 4.4,
          link: 'https://www.volatilityfoundation.org/',
          features: ['Memory analysis', 'Malware detection', 'Process investigation']
        },
        {
          name: 'EnCase',
          description: 'Digital investigation platform for forensic analysis',
          type: 'Commercial',
          rating: 4.1,
          link: 'https://www.opentext.com/products/encase-forensic',
          features: ['Evidence acquisition', 'Analysis', 'Reporting']
        }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Free': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Freemium': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Commercial': 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    };
    return colors[type] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Security Tools</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Curated collection of essential cybersecurity tools for professionals and enthusiasts
          </p>
        </div>

        {/* Tool Categories */}
        {toolCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-cyber-blue/20 rounded-lg">
                <category.icon className="w-6 h-6 text-cyber-blue" />
              </div>
              <h2 className="text-2xl font-bold text-white">{category.name}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool, toolIndex) => (
                <Card key={toolIndex} className="cyber-card group hover:scale-105 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyber-blue transition-colors mb-2">
                          {tool.name}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-3">
                          {tool.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getTypeColor(tool.type)}>
                        {tool.type}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{tool.rating}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-medium text-gray-300">Key Features:</h4>
                      <ul className="space-y-1">
                        {tool.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-gray-400 flex items-center gap-2">
                            <div className="w-1 h-1 bg-cyber-blue rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30 hover:bg-cyber-blue hover:text-black"
                        onClick={() => window.open(tool.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Site
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-cyber-green/30 text-cyber-green hover:bg-cyber-green/20"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <div className="cyber-card inline-block max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-cyber-blue" />
              <h3 className="text-xl font-semibold">Need More Tools?</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Looking for specialized tools or have suggestions? We're constantly updating our collection 
              based on the latest security trends and community feedback.
            </p>
            <Button className="neon-button">
              Submit Tool Suggestion
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
