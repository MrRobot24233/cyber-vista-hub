
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Bot, Bug, Zap, Users, Award, ExternalLink, Mail, Calendar } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Shield, title: 'خبير أمن المواقع', description: 'متخصص في اختبار الاختراق وتأمين المواقع' },
    { icon: Bot, title: 'مطور شات بوتات', description: 'خبرة في تطوير الشات بوتات بالذكاء الاصطناعي' },
    { icon: Bug, title: 'Bug Bounty Hunter', description: 'مشارك نشط في برامج Bug Bounty العالمية' },
    { icon: Zap, title: 'محسن الأداء', description: 'متخصص في تحسين سرعة وأداء المواقع' }
  ];

  const experience = [
    {
      title: 'خبير أمن المواقع',
      company: 'SECPULSE',
      period: '2020 - الآن',
      description: 'تقديم خدمات اختبار الاختراق وتأمين المواقع لعملاء من جميع أنحاء العالم.',
      technologies: ['Penetration Testing', 'Web Security', 'Vulnerability Assessment', 'Bug Bounty']
    },
    {
      title: 'مطور الشات بوتات الذكية',
      company: 'SECPULSE',
      period: '2019 - الآن',
      description: 'تطوير شات بوتات مدعومة بالذكاء الاصطناعي للمنصات المختلفة.',
      technologies: ['AI Chatbots', 'NLP', 'Machine Learning', 'API Integration']
    },
    {
      title: 'مستشار أمني',
      company: 'العمل الحر',
      period: '2018 - الآن',
      description: 'تقديم الاستشارات الأمنية وإصلاح المواقع بعد الاختراق.',
      technologies: ['Security Consultation', 'Incident Response', 'Recovery', 'Risk Assessment']
    }
  ];

  const skills = [
    { category: 'أدوات الأمان', items: ['Burp Suite', 'OWASP ZAP', 'Nmap', 'Metasploit', 'Wireshark'] },
    { category: 'تطوير الشات بوتات', items: ['Python', 'TensorFlow', 'OpenAI API', 'Dialogflow', 'Rasa'] },
    { category: 'لغات البرمجة', items: ['Python', 'JavaScript', 'PHP', 'Node.js', 'React'] },
    { category: 'منصات التكامل', items: ['WhatsApp', 'Telegram', 'Discord', 'Facebook Messenger', 'Slack'] }
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
            <span className="gradient-text">SECPULSE</span>
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            خبير الأمن السيبراني ومطور الشات بوتات الذكية
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30">
              Penetration Testing
            </Badge>
            <Badge className="bg-cyber-green/20 text-cyber-green border-cyber-green/30">
              AI Chatbots
            </Badge>
            <Badge className="bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30">
              Bug Bounty
            </Badge>
          </div>
        </div>

        {/* Bio */}
        <Card className="cyber-card mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold gradient-text">من أنا</h2>
            <p className="text-gray-300 leading-relaxed">
              أنا خبير في الأمن السيبراني متخصص في تأمين المواقع الإلكترونية وتطوير الشات بوتات المدعومة 
              بالذكاء الاصطناعي. أقدم خدمات شاملة تشمل اختبار الاختراق، تقييم الثغرات، وتطوير حلول ذكية 
              للتفاعل مع العملاء.
            </p>
            <p className="text-gray-300 leading-relaxed">
              خبرتي تمتد لسنوات في مجال الأمن السيبراني مع التركيز على حماية المواقع من التهديدات المختلفة. 
              كما أتخصص في تطوير شات بوتات ذكية يمكن دمجها في معظم المنصات الرقمية لتحسين تجربة المستخدم 
              وأتمتة خدمة العملاء.
            </p>
            <p className="text-gray-300 leading-relaxed">
              أشارك بنشاط في برامج Bug Bounty العالمية وأساعد الشركات في اكتشاف وإصلاح الثغرات الأمنية. 
              أقدم أيضاً خدمات الطوارئ لإصلاح المواقع بعد الاختراق واستعادة عملها بأمان.
            </p>
          </div>
        </Card>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold gradient-text mb-6">التخصصات والخبرات</h2>
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
          <h2 className="text-2xl font-bold gradient-text mb-6">الخبرة المهنية</h2>
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
          <h2 className="text-2xl font-bold gradient-text mb-6">المهارات التقنية</h2>
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
            <h2 className="text-2xl font-bold gradient-text">رسالتي</h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              "هدفي هو جعل الإنترنت مكاناً أكثر أماناً من خلال تقديم خدمات أمنية متطورة وحلول ذكية 
              تساعد الأعمال على النمو بأمان. أؤمن بأن الأمان والابتكار يمكن أن يسيرا جنباً إلى جنب 
              لخلق تجارب رقمية استثنائية."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="neon-button">
                <Mail className="w-4 h-4 mr-2" />
                تواصل معي
              </Button>
              <Button variant="outline" className="border-cyber-purple/30 text-cyber-purple hover:bg-cyber-purple/20">
                <ExternalLink className="w-4 h-4 mr-2" />
                اطلب خدمة
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
