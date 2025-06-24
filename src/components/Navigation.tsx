
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Home, Calendar, Wrench, Book, Contact, FileText } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'الرئيسية', path: '/', icon: Home },
    { name: 'الأخبار', path: '/news', icon: Calendar },
    { name: 'الأدوات', path: '/tools', icon: Wrench },
    { name: 'خريطة التعلم', path: '/roadmap', icon: FileText },
    { name: 'التعلم', path: '/learning', icon: Book },
    { name: 'عني', path: '/about', icon: Contact },
    { name: 'التواصل', path: '/contact', icon: Contact },
  ];

  const NavLink = ({ item, mobile = false }: { item: any; mobile?: boolean }) => {
    const isActive = location.pathname === item.path;
    const Icon = item.icon;
    
    return (
      <Link
        to={item.path}
        className={`${
          mobile ? 'flex items-center space-x-3 px-4 py-3' : 'px-4 py-2'
        } rounded-lg transition-all duration-300 ${
          isActive
            ? 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30'
            : 'text-gray-300 hover:text-cyber-blue hover:bg-cyber-blue/10'
        }`}
        onClick={() => mobile && setIsOpen(false)}
      >
        {mobile && <Icon className="w-5 h-5" />}
        <span className="font-medium">{item.name}</span>
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-cyber-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-neon-gradient rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold gradient-text">SECPULSE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-cyber-blue/30">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-cyber-dark border-cyber-blue/20">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 mb-8">
                  <div className="w-8 h-8 bg-neon-gradient rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-lg">S</span>
                  </div>
                  <span className="text-xl font-bold gradient-text">SECPULSE</span>
                </div>
                {navItems.map((item) => (
                  <NavLink key={item.name} item={item} mobile />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
