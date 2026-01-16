
import React from 'react';
import { ArrowDown, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white pt-32 pb-16 sm:pt-52 lg:pt-60">
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#0079ac_1px,transparent_1px)] [background-size:40px_40px]"></div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50/50 -z-10 hidden lg:block"></div>

      {/* Large Logo Watermark on Right Side */}
      <div className="absolute -right-48 top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none select-none hidden lg:block">
        <img
          src="/aureole-logo.png"
          alt=""
          className="h-[150vh] w-auto opacity-[0.03]"
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-24 relative z-10">
        <div className="max-w-7xl">
          {/* Lightened Validation Tags */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-4 mb-12 animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="flex items-center gap-3 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-aureole-blue" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">ISO 9001</span>
            </div>
            <div className="flex items-center gap-3 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
              <Award className="w-3.5 h-3.5 text-aureole-blue" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">GMP COMPLIANT</span>
            </div>
            <div className="flex items-center gap-3 bg-blue-50/30 border border-blue-100/50 px-4 py-2 rounded-full shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-aureole-blue" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-aureole-blue uppercase">ESTD. 1996</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[2px] bg-aureole-blue"></span>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-blue">PHARMA ENGINEERING</span>
              </div>

              <h1 className="text-4xl xs:text-5xl md:text-7xl lg:text-[85px] xl:text-[95px] font-[950] leading-[0.95] tracking-tighter text-aureole-slate uppercase mb-12">
                PRECISION <br className="hidden md:block" />
                TEMPERATURE & <br className="hidden md:block" />
                HUMIDITY <span className="text-aureole-cyan">CONTROL.</span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-14">
                Advanced environmental machinery engineered for Pharmaceutical Stability and Cleanroom monitoring.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <button className="bg-aureole-blue text-white px-12 py-6 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-aureole-slate transition-all flex items-center gap-6 group shadow-2xl shadow-blue-500/10">
                  Explore Machinery <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Hero Image Removed as requested */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
