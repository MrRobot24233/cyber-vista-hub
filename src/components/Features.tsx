
import { Card } from '@/components/ui/card';
import { Shield, Bot, Bug, Zap, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'اختبار الاختراق',
      description: 'اختبار شامل لأمان المواقع واكتشاف الثغرات الأمنية قبل أن يستغلها المخترقون.',
      link: '/contact',
      color: 'text-cyber-blue'
    },
    {
      icon: Bot,
      title: 'الشات بوتات الذكية',
      description: 'تطوير شات بوتات مدعومة بالذكاء الاصطناعي يمكن دمجها في جميع المنصات والتطبيقات.',
      link: '/contact',
      color: 'text-cyber-green'
    },
    {
      icon: Bug,
      title: 'Bug Bounty',
      description: 'خدمات البحث عن الثغرات والمشاركة في برامج Bug Bounty العالمية.',
      link: '/contact',
      color: 'text-cyber-purple'
    },
    {
      icon: Zap,
      title: 'تحسين الأداء',
      description: 'تأمين المواقع وتحسين سرعتها وأدائها لضمان تجربة مستخدم مميزة.',
      link: '/contact',
      color: 'text-cyber-orange'
    },
    {
      icon: Users,
      title: 'الاستشارات الأمنية',
      description: 'استشارات متخصصة في الأمن السيبراني وتقييم المخاطر الأمنية للمؤسسات.',
      link: '/contact',
      color: 'text-cyber-red'
    },
    {
      icon: Award,
      title: 'إصلاح بعد الاختراق',
      description: 'خدمات الطوارئ لإصلاح المواقع المخترقة واستعادة عملها بأمان تام.',
      link: '/contact',
      color: 'text-cyber-blue'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">خدماتنا المتخصصة</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            نقدم حلول شاملة في الأمن السيبراني وتطوير الشات بوتات الذكية
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
                    اطلب الخدمة →
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
