
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-cyber-blue/30 bg-black/50">
          <Globe className="h-4 w-4 text-cyber-blue" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-cyber-dark border-cyber-blue/20 text-white min-w-[120px]"
      >
        <DropdownMenuItem 
          onClick={() => setLanguage('ar')}
          className={`cursor-pointer hover:bg-cyber-blue/20 ${
            language === 'ar' ? 'bg-cyber-blue/10 text-cyber-blue' : ''
          }`}
        >
          🇸🇦 العربية
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className={`cursor-pointer hover:bg-cyber-blue/20 ${
            language === 'en' ? 'bg-cyber-blue/10 text-cyber-blue' : ''
          }`}
        >
          🇺🇸 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
