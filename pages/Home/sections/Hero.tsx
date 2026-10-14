
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowDown, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

// Same sequence the old GSAP timeline played: subtitle, then the three headline lines, then the intro paragraph.
const EASE = [0.22, 1, 0.36, 1] as const; // ~ power4.out
const subtitle: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.8, ease: EASE } },
};
const line: Variants = {
  hidden: { y: '100%', opacity: 0 },
  show: (i: number) => ({ y: '0%', opacity: 1, transition: { delay: 0.6 + i * 0.15, duration: 1.2, ease: EASE } }),
};
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay: 1.3, duration: 1.2, ease: EASE } },
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center bg-transparent pt-32 pb-16 sm:pt-40 lg:pt-48 z-10 overflow-hidden">
      {/* Background Grid Removed to lead with wavebg.webp */}

      {/* Massive Washed Out Logo - Static, on top of background */}
      <div
        className="absolute top-[45%] -right-24 md:-right-48 w-[700px] md:w-[1000px] lg:w-[1200px] opacity-[0.05] pointer-events-none z-10 select-none -translate-y-1/2"
      >
        <img
          src="/aureole-logo.webp"
          alt="Aureole Pharma Tech watermark logo"
          className="w-full h-auto grayscale brightness-0"
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-24 relative z-20">
        <div className="max-w-7xl">
          {/* Validation Tags Removed for cleaner hero as requested previously */}

          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24">
            <div className="flex-1">
              <motion.div variants={subtitle} initial="hidden" animate="show" className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[2px] bg-aureole-blue"></span>
                <span className="text-xs font-black uppercase tracking-widest text-aureole-blue">PHARMA ENGINEERING</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter text-aureole-slate uppercase mb-12 flex flex-col gap-1 md:gap-2">
                <span className="overflow-hidden pb-1"><motion.span variants={line} custom={0} initial="hidden" animate="show" className="block">PRECISION</motion.span></span>
                <span className="overflow-hidden pb-1"><motion.span variants={line} custom={1} initial="hidden" animate="show" className="block">TEMPERATURE &</motion.span></span>
                <span className="overflow-hidden pb-1"><motion.span variants={line} custom={2} initial="hidden" animate="show" className="block">HUMIDITY <span className="text-aureole-cyan">CONTROL.</span></motion.span></span>
              </h1>

              <motion.p variants={fadeIn} initial="hidden" animate="show" className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-14">
                <span className="text-aureole-slate font-bold block mb-3 text-base">Aureole Pharmatech is a premier pharmaceutical engineering manufacturer that helps pharmaceutical companies and laboratories achieve precise temperature and humidity control through advanced environmental machinery.</span>
                Engineered for Pharmaceutical Stability and specialized laboratory instrumentation.
              </motion.p>


            </div>

            {/* Hero Image Removed as requested */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
