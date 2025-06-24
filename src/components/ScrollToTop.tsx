
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Scroll to top button - positioned in bottom left corner */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 p-3 bg-cyber-blue/20 backdrop-blur-sm border border-cyber-blue/30 rounded-full hover:bg-cyber-blue hover:text-black transition-all duration-300 group hover:scale-110 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-cyber-blue group-hover:text-black animate-bounce" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
