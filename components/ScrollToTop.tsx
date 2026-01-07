
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * ScrollToTop: A persistent technical button for navigating back to the top.
 * Designed with the Aureole Pharmatech industrial aesthetic.
 */
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-90 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="group relative w-14 h-14 bg-aureole-slate flex items-center justify-center border border-white/10 shadow-2xl hover:bg-aureole-cyan hover:border-aureole-cyan transition-all duration-300"
      >
        {/* Technical Corner Details */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-white transition-colors"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-white transition-colors"></div>

        <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform duration-300" />

        {/* Label appearing on hover (Desktop) */}
        <span className="absolute right-full mr-4 px-3 py-1 bg-aureole-slate text-[8px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none hidden md:block">
          TOP_LEVEL_NAV
        </span>
      </button>
    </div>
  );
};

export default ScrollToTop;
