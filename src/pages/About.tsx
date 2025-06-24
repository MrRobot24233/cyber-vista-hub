
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Shield, Users, Globe, ExternalLink, Mail, Calendar } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Shield, title: 'CISSP Certified', description: 'Certified Information Systems Security Professional' },
    { icon: Award, title: 'CEH Certified', description: 'Certified Ethical Hacker with 5+ years experience' },
    { icon: Users, title: 'Security Researcher', description: 'Published research on emerging threats' },
    { icon: Globe, title: 'International Speaker', description: 'Presented at DefCon, BSides, and security conferences' }
  ];

  const experience = [
    {
      title: 'Senior Security Engineer',
      company: 'TechCorp Security',
      period: '2020 - Present',
      description: 'Leading security architecture and incident response for enterprise clients.',
      technologies: ['AWS Security', 'SIEM', 'Penetration Testing', 'DevSecOps']
    },
    {
      title: 'Cybersecurity Analyst',
      company: 'Global Financial Services',
      period: '2018 - 2020',
      description: 'Performed threat hunting and vulnerability assessments for financial infrastructure.',
      technologies: ['Splunk', 'Wireshark', 'Nessus', 'Incident Response']
    },
    {
      title: 'Security Consultant',
      company: 'Independent Practice',
      period: '2016 - 2018',
      description: 'Provided cybersecurity consulting for small and medium enterprises.',
      technologies: ['Risk Assessment', 'Compliance', 'Security Training', 'Policy Development']
    }
  ];

  const skills = [
    { category: 'Security Tools', items: ['Metasploit', 'Burp Suite', 'Nmap', 'Wireshark', 'Splunk'] },
    { category: 'Cloud Security', items: ['AWS Security', 'Azure Security', 'GCP Security', 'Kubernetes'] },
    { category: 'Programming', items: ['Python', 'PowerShell', 'Bash', 'JavaScript', 'Go'] },
    { category: 'Frameworks', items: ['NIST', 'ISO 27001', 'OWASP', 'CIS Controls'] }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Alex Chen</span>
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Cybersecurity Expert & Security Researcher
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30">
              CISSP
            </Badge>
            <Badge className="bg-cyber-green/20 text-cyber-green border-cyber-green/30">
              CEH
            </Badge>
            <Badge className="bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30">
              Security+
            </Badge>
          </div>
        </div>

        {/* Bio */}
        <Card className="cyber-card mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold gradient-text">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              With over 8 years of experience in cybersecurity, I've dedicated my career to protecting 
              organizations from evolving digital threats. My expertise spans from hands-on penetration 
              testing to strategic security architecture design.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm passionate about sharing knowledge and helping others enter the cybersecurity field. 
              Through this platform, I curate the latest security news, tools, and learning resources 
              to help professionals stay ahead of emerging threats.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not hunting threats or researching vulnerabilities, you can find me contributing 
              to open-source security projects, mentoring aspiring security professionals, or speaking 
              at cybersecurity conferences worldwide.
            </p>
          </div>
        </Card>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold gradient-text mb-6">Achievements & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="cyber-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-blue/20 rounded-lg">
                    <achievement.icon className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold gradient-text mb-6">Professional Experience</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="cyber-card">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                      <p className="text-cyber-blue">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {job.period}
                    </div>
                  </div>
                  
                  <p className="text-gray-300">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-cyber-green/30 text-cyber-green">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold gradient-text mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="cyber-card">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-black/40 text-gray-300 border-gray-600">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="cyber-card text-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold gradient-text">Mission Statement</h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              "To democratize cybersecurity knowledge and empower individuals and organizations 
              to protect themselves in an increasingly connected world. Through education, 
              collaboration, and innovation, we can build a more secure digital future for everyone."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="neon-button">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" className="border-cyber-purple/30 text-cyber-purple hover:bg-cyber-purple/20">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Portfolio
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
