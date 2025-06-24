
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle, Clock, Star, BookOpen, Award, Users } from 'lucide-react';

const Roadmap = () => {
  const roadmapPaths = [
    {
      title: 'Security Analyst',
      description: 'Entry-level cybersecurity role focusing on monitoring and incident response',
      duration: '6-12 months',
      difficulty: 'Beginner',
      salary: '$50K - $70K',
      color: 'cyber-blue',
      steps: [
        { title: 'Networking Fundamentals', completed: true, duration: '4 weeks' },
        { title: 'Operating Systems Security', completed: true, duration: '3 weeks' },
        { title: 'Security Tools & SIEM', completed: false, duration: '6 weeks' },
        { title: 'Incident Response', completed: false, duration: '4 weeks' },
        { title: 'Compliance & Frameworks', completed: false, duration: '3 weeks' }
      ]
    },
    {
      title: 'Penetration Tester',
      description: 'Ethical hacker who identifies vulnerabilities through authorized testing',
      duration: '12-18 months',
      difficulty: 'Intermediate',
      salary: '$70K - $100K',
      color: 'cyber-green',
      steps: [
        { title: 'Linux & Command Line', completed: true, duration: '4 weeks' },
        { title: 'Network Security', completed: false, duration: '6 weeks' },
        { title: 'Web Application Security', completed: false, duration: '8 weeks' },
        { title: 'Penetration Testing Tools', completed: false, duration: '10 weeks' },
        { title: 'Report Writing & Communication', completed: false, duration: '2 weeks' }
      ]
    },
    {
      title: 'Security Engineer',
      description: 'Design and implement security solutions and architectures',
      duration: '18-24 months',
      difficulty: 'Advanced',
      salary: '$90K - $130K',
      color: 'cyber-purple',
      steps: [
        { title: 'Security Architecture', completed: false, duration: '8 weeks' },
        { title: 'Cloud Security (AWS/Azure)', completed: false, duration: '10 weeks' },
        { title: 'DevSecOps & CI/CD', completed: false, duration: '8 weeks' },
        { title: 'Cryptography & PKI', completed: false, duration: '6 weeks' },
        { title: 'Security Automation', completed: false, duration: '8 weeks' }
      ]
    },
    {
      title: 'Security Consultant',
      description: 'Provide strategic security guidance to organizations',
      duration: '24+ months',
      difficulty: 'Expert',
      salary: '$100K - $150K+',
      color: 'cyber-orange',
      steps: [
        { title: 'Risk Management', completed: false, duration: '6 weeks' },
        { title: 'Business Strategy', completed: false, duration: '8 weeks' },
        { title: 'Compliance & Audit', completed: false, duration: '10 weeks' },
        { title: 'Project Management', completed: false, duration: '4 weeks' },
        { title: 'Client Relations', completed: false, duration: '6 weeks' }
      ]
    }
  ];

  const certifications = [
    { name: 'CompTIA Security+', level: 'Entry', provider: 'CompTIA', cost: '$370' },
    { name: 'CISSP', level: 'Advanced', provider: 'ISC2', cost: '$749' },
    { name: 'CEH', level: 'Intermediate', provider: 'EC-Council', cost: '$1,199' },
    { name: 'OSCP', level: 'Advanced', provider: 'Offensive Security', cost: '$1,499' },
    { name: 'CISM', level: 'Management', provider: 'ISACA', cost: '$760' },
    { name: 'GCIH', level: 'Intermediate', provider: 'GIAC', cost: '$7,000+' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    const colors: { [key: string]: string } = {
      'Beginner': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Intermediate': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Advanced': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'Expert': 'bg-red-500/20 text-red-300 border-red-500/30'
    };
    return colors[difficulty] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  const getCertLevelColor = (level: string) => {
    const colors: { [key: string]: string } = {
      'Entry': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Intermediate': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Advanced': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'Management': 'bg-orange-500/20 text-orange-300 border-orange-500/30'
    };
    return colors[level] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  const calculateProgress = (steps: any[]) => {
    const completed = steps.filter(step => step.completed).length;
    return (completed / steps.length) * 100;
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Career Roadmap</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Structured learning paths to advance your cybersecurity career from beginner to expert
          </p>
        </div>

        {/* Career Paths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {roadmapPaths.map((path, index) => (
            <Card key={index} className="cyber-card">
              <div className="space-y-6">
                {/* Path Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">{path.title}</h3>
                    <Badge className={getDifficultyColor(path.difficulty)}>
                      {path.difficulty}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-400">{path.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyber-blue" />
                      <span className="text-gray-300">{path.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-cyber-green" />
                      <span className="text-gray-300">{path.salary}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-gray-300">{calculateProgress(path.steps).toFixed(0)}%</span>
                    </div>
                    <Progress value={calculateProgress(path.steps)} className="h-2" />
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Learning Steps</h4>
                  {path.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center gap-3 p-3 bg-black/20 rounded-lg">
                      {step.completed ? (
                        <CheckCircle className="w-5 h-5 text-cyber-green flex-shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <span className={`font-medium ${step.completed ? 'text-white' : 'text-gray-400'}`}>
                          {step.title}
                        </span>
                        <div className="text-xs text-gray-500 mt-1">{step.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Popular Certifications</span>
            </h2>
            <p className="text-gray-400">Industry-recognized certifications to validate your skills</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="cyber-card text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{cert.provider}</p>
                    <Badge className={getCertLevelColor(cert.level)}>
                      {cert.level}
                    </Badge>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-700">
                    <span className="text-cyber-blue font-semibold">{cert.cost}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Resources */}
        <div className="text-center">
          <Card className="cyber-card inline-block max-w-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Users className="w-8 h-8 text-cyber-blue" />
                <h3 className="text-2xl font-bold">Join the Community</h3>
              </div>
              
              <p className="text-gray-400">
                Connect with fellow cybersecurity professionals, share experiences, and get guidance 
                on your career journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="w-4 h-4 text-cyber-green" />
                  <span>Study groups</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-cyber-blue" />
                  <span>Mentorship</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-cyber-purple" />
                  <span>Job referrals</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
