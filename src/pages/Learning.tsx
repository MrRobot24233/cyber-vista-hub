
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Video, FileText, ExternalLink, Clock, Users, Star, Award, Play } from 'lucide-react';

const Learning = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      title: 'Introduction to Cybersecurity',
      provider: 'Cybrary',
      type: 'Free',
      duration: '8 hours',
      level: 'Beginner',
      rating: 4.7,
      students: '50K+',
      description: 'Comprehensive introduction to cybersecurity fundamentals and core concepts.',
      link: 'https://www.cybrary.it/course/introduction-to-cybersecurity',
      category: 'fundamentals'
    },
    {
      title: 'Ethical Hacking and Penetration Testing',
      provider: 'Udemy',
      type: 'Paid',
      duration: '16 hours',
      level: 'Intermediate',
      rating: 4.8,
      students: '100K+',
      description: 'Learn ethical hacking techniques and penetration testing methodologies.',
      link: 'https://www.udemy.com/course/learn-ethical-hacking-from-scratch/',
      category: 'pentesting'
    },
    {
      title: 'CompTIA Security+ Complete Course',
      provider: 'Professor Messer',
      type: 'Free',
      duration: '20+ hours',
      level: 'Intermediate',
      rating: 4.9,
      students: '200K+',
      description: 'Complete Security+ certification preparation course.',
      link: 'https://www.professormesser.com/security-plus/sy0-601-security-plus-course/',
      category: 'certifications'
    },
    {
      title: 'Cloud Security Fundamentals',
      provider: 'AWS Training',
      type: 'Free',
      duration: '6 hours',
      level: 'Intermediate',
      rating: 4.6,
      students: '75K+',
      description: 'Learn cloud security best practices and AWS security services.',
      link: 'https://aws.amazon.com/training/digital/aws-cloud-security-fundamentals/',
      category: 'cloud'
    },
    {
      title: 'Digital Forensics Essentials',
      provider: 'SANS',
      type: 'Paid',
      duration: '40 hours',
      level: 'Advanced',
      rating: 4.8,
      students: '25K+',
      description: 'Comprehensive digital forensics and incident response training.',
      link: 'https://www.sans.org/cyber-security-courses/digital-forensics-essentials/',
      category: 'forensics'
    },
    {
      title: 'Network Security Monitoring',
      provider: 'Coursera',
      type: 'Free',
      duration: '12 hours',
      level: 'Intermediate',
      rating: 4.5,
      students: '40K+',
      description: 'Learn network monitoring techniques and tools for threat detection.',
      link: 'https://www.coursera.org/learn/network-security-monitoring',
      category: 'network'
    }
  ];

  const resources = [
    {
      title: 'OWASP Top 10',
      type: 'Guide',
      description: 'Most critical security risks to web applications',
      link: 'https://owasp.org/www-project-top-ten/',
      icon: FileText,
      category: 'webapp'
    },
    {
      title: 'NIST Cybersecurity Framework',
      type: 'Framework',
      description: 'Comprehensive cybersecurity framework for organizations',
      link: 'https://www.nist.gov/cyberframework',
      icon: BookOpen,
      category: 'frameworks'
    },
    {
      title: 'CIS Controls',
      type: 'Controls',
      description: 'Prioritized set of actions for cyber defense',
      link: 'https://www.cisecurity.org/controls',
      icon: FileText,
      category: 'frameworks'
    },
    {
      title: 'Krebs on Security Blog',
      type: 'Blog',
      description: 'In-depth security news and investigation',
      link: 'https://krebsonsecurity.com/',
      icon: BookOpen,
      category: 'news'
    },
    {
      title: 'SANS Reading Room',
      type: 'Papers',
      description: 'Collection of information security research papers',
      link: 'https://www.sans.org/reading-room/',
      icon: FileText,
      category: 'research'
    },
    {
      title: 'Cybersecurity Podcasts',
      type: 'Podcast',
      description: 'Curated list of top cybersecurity podcasts',
      link: '#',
      icon: Play,
      category: 'media'
    }
  ];

  const labs = [
    {
      title: 'TryHackMe',
      description: 'Hands-on cybersecurity challenges and learning paths',
      type: 'Interactive',
      link: 'https://tryhackme.com/',
      difficulty: 'All Levels'
    },
    {
      title: 'HackTheBox',
      description: 'Penetration testing labs and challenges',
      type: 'Lab',
      link: 'https://www.hackthebox.eu/',
      difficulty: 'Intermediate+'
    },
    {
      title: 'OverTheWire',
      description: 'Wargames for learning security concepts',
      type: 'Wargames',
      link: 'https://overthewire.org/',
      difficulty: 'Beginner+'
    },
    {
      title: 'CyberDefenders',
      description: 'Blue team challenges and incident response scenarios',
      type: 'Blue Team',
      link: 'https://cyberdefenders.org/',
      difficulty: 'All Levels'
    },
    {
      title: 'VulnHub',
      description: 'Vulnerable virtual machines for penetration testing',
      type: 'VMs',
      link: 'https://www.vulnhub.com/',
      difficulty: 'Intermediate+'
    },
    {
      title: 'DVWA',
      description: 'Deliberately vulnerable web application for learning',
      type: 'Web App',
      link: 'https://dvwa.co.uk/',
      difficulty: 'Beginner'
    }
  ];

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Free': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Paid': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Freemium': 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    };
    return colors[type] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  const getLevelColor = (level: string) => {
    const colors: { [key: string]: string } = {
      'Beginner': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Intermediate': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Advanced': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'All Levels': 'bg-orange-500/20 text-orange-300 border-orange-500/30'
    };
    return colors[level] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Learning Hub</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive educational resources, courses, and hands-on labs for cybersecurity learning
          </p>
        </div>

        <Tabs defaultValue="courses" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-black/40">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="labs">Hands-on Labs</TabsTrigger>
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge className={getTypeColor(course.type)}>
                        {course.type}
                      </Badge>
                      <Badge className={getLevelColor(course.level)}>
                        {course.level}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyber-blue transition-colors mb-2">
                        {course.title}
                      </h3>
                      <p className="text-cyber-blue text-sm mb-2">{course.provider}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{course.rating}</span>
                      </div>
                      <Button
                        size="sm"
                        className="bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30 hover:bg-cyber-blue hover:text-black"
                        onClick={() => window.open(course.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Enroll
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-cyber-blue/20 rounded-lg">
                        <resource.icon className="w-5 h-5 text-cyber-blue" />
                      </div>
                      <Badge variant="outline" className="border-cyber-green/30 text-cyber-green">
                        {resource.type}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyber-blue transition-colors mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {resource.description}
                      </p>
                    </div>

                    <Button
                      size="sm"
                      className="w-full bg-cyber-green/20 text-cyber-green border border-cyber-green/30 hover:bg-cyber-green hover:text-black"
                      onClick={() => window.open(resource.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Access Resource
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Labs Tab */}
          <TabsContent value="labs" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {labs.map((lab, index) => (
                <Card key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="border-cyber-purple/30 text-cyber-purple">
                        {lab.type}
                      </Badge>
                      <Badge className={getLevelColor(lab.difficulty)}>
                        {lab.difficulty}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyber-blue transition-colors mb-2">
                        {lab.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {lab.description}
                      </p>
                    </div>

                    <Button
                      size="sm"
                      className="w-full bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 hover:bg-cyber-purple hover:text-black"
                      onClick={() => window.open(lab.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Start Lab
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Learning Path Recommendation */}
        <div className="mt-16">
          <Card className="cyber-card">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-cyber-blue" />
                <h3 className="text-2xl font-bold">Personalized Learning Path</h3>
              </div>
              
              <p className="text-gray-400 max-w-2xl mx-auto">
                Not sure where to start? Take our skills assessment to get a personalized learning 
                path tailored to your current knowledge and career goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="neon-button">
                  Take Skills Assessment
                </Button>
                <Button variant="outline" className="border-cyber-purple/30 text-cyber-purple hover:bg-cyber-purple/20">
                  Browse All Resources
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Learning;
