
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
    setIsClicked(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Reset animation state after it completes
    setTimeout(() => setIsClicked(false), 800);
  };

  return (
    <div className={`fixed bottom-8 right-8 z-40 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-90 pointer-events-none'
      }`}>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`group relative w-12 h-12 sm:w-14 sm:h-14 bg-[#001529] flex items-center justify-center border border-white/5 shadow-2xl hover:bg-aureole-blue transition-all duration-300 ${isClicked ? '-translate-y-96 opacity-0 transition-all duration-700 ease-in-out' : ''
          }`}
      >
        {/* Technical Corner Accents - Matching your image */}
        <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-white/40 group-hover:border-white transition-colors"></div>
        <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-white/40 group-hover:border-white transition-colors"></div>

        <ArrowUp className={`w-5 h-5 text-white transition-all duration-500 ${isClicked ? 'scale-150' : 'group-hover:-translate-y-1'
          }`} />

        {/* Dynamic Label */}
        <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none hidden md:block">
          <div className="bg-aureole-blue text-[9px] font-black text-white px-4 py-2 uppercase tracking-[0.3em] whitespace-nowrap shadow-xl">
            BACK TO TOP
          </div>
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;
