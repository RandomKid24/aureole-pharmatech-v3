
import React from 'react';
import { ArrowDown, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white pt-32 pb-16 sm:pt-52 lg:pt-60 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#0079ac_1px,transparent_1px)] [background-size:40px_40px]"></div>

      {/* Massive Washed Out Logo - Faint and bleeding off-screen */}
      <div
        className="absolute -right-64 top-0 w-full h-full opacity-[0.06] pointer-events-none select-none z-0"
        style={{
          backgroundImage: 'url(/aureole-logo.png)',
          backgroundSize: '150vh',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-24 relative z-10">
        <div className="max-w-7xl">
          {/* Validation Tags Removed for cleaner hero as requested previously */}

          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[2px] bg-aureole-blue"></span>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-blue">PHARMA ENGINEERING</span>
              </div>

              <h1 className="text-4xl xs:text-5xl md:text-7xl lg:text-[85px] xl:text-[95px] 3xl:text-[120px] font-[950] leading-[0.95] tracking-tighter text-aureole-slate uppercase mb-12">
                PRECISION <br className="hidden md:block" />
                TEMPERATURE & <br className="hidden md:block" />
                HUMIDITY <span className="text-aureole-cyan">CONTROL.</span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-14">
                Advanced environmental machinery engineered for Pharmaceutical Stability and Cleanroom monitoring.
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
