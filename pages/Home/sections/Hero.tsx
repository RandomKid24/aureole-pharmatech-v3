
import React, { useRef } from 'react';
import { ArrowDown, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

    gsap.set('.hero-line-inner', { y: '100%', opacity: 0 });
    gsap.set('.hero-fade-in', { opacity: 0, y: 20 });
    gsap.set('.hero-subtitle', { opacity: 0, x: -20 });

    tl.to('.hero-subtitle', { opacity: 1, x: 0, duration: 0.8 }, 0.2);
    tl.to('.hero-line-inner', { y: '0%', opacity: 1, stagger: 0.15 }, '-=0.4');
    tl.to('.hero-fade-in', { opacity: 1, y: 0, stagger: 0.2 }, '-=0.8');
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative min-h-[95vh] flex items-center bg-transparent pt-32 pb-16 sm:pt-40 lg:pt-48 z-10 overflow-hidden">
      {/* Background Grid Removed to lead with wavebg.png */}

      {/* Massive Washed Out Logo - Static, on top of background */}
      <div
        className="absolute top-[45%] -right-24 md:-right-48 w-[700px] md:w-[1000px] lg:w-[1200px] opacity-[0.05] pointer-events-none z-10 select-none -translate-y-1/2"
      >
        <img
          src="/aureole-logo.png"
          alt="Aureole Pharma Tech watermark logo"
          className="w-full h-auto grayscale brightness-0"
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-24 relative z-20">
        <div className="max-w-7xl">
          {/* Validation Tags Removed for cleaner hero as requested previously */}

          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 hero-subtitle">
                <span className="w-10 h-[2px] bg-aureole-blue"></span>
                <span className="text-xs font-black uppercase tracking-widest text-aureole-blue">PHARMA ENGINEERING</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter text-aureole-slate uppercase mb-12 flex flex-col gap-1 md:gap-2">
                <span className="overflow-hidden pb-1"><span className="block hero-line-inner">PRECISION</span></span>
                <span className="overflow-hidden pb-1"><span className="block hero-line-inner">TEMPERATURE &</span></span>
                <span className="overflow-hidden pb-1"><span className="block hero-line-inner">HUMIDITY <span className="text-aureole-cyan">CONTROL.</span></span></span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-14 hero-fade-in">
                <span className="text-aureole-slate font-bold block mb-3 text-base">Aureole Pharmatech is a premier pharmaceutical engineering manufacturer that helps pharmaceutical companies and laboratories achieve precise temperature and humidity control through advanced environmental machinery.</span>
                Engineered for Pharmaceutical Stability and specialized laboratory instrumentation.
              </p>


            </div>

            {/* Hero Image Removed as requested */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
