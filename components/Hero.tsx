
import React from 'react';
import { ArrowDown, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white pt-52 pb-16 sm:pt-60">
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#0066CC_1px,transparent_1px)] [background-size:40px_40px]"></div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50/50 -z-10 hidden lg:block"></div>

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
              
              <h1 className="text-5xl md:text-7xl lg:text-[85px] xl:text-[95px] font-[950] leading-[0.95] tracking-tighter text-aureole-slate uppercase mb-12">
                PRECISION <br className="hidden md:block" />
                TEMPERATURE & <br className="hidden md:block" />
                HUMIDITY <span className="text-aureole-blue">CONTROL.</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-14">
                Advanced environmental machinery engineered for Pharmaceutical Stability and Cleanroom monitoring.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <button className="bg-aureole-blue text-white px-12 py-6 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-aureole-slate transition-all flex items-center gap-6 group shadow-2xl shadow-blue-500/10">
                  Core Portfolio <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
                <div className="flex items-center gap-8">
                   <div className="flex flex-col">
                      <div className="text-3xl font-black text-aureole-slate tracking-tighter leading-none">28+</div>
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Years</span>
                   </div>
                   <div className="w-px h-8 bg-slate-200"></div>
                   <div className="flex flex-col">
                      <div className="text-3xl font-black text-aureole-slate tracking-tighter leading-none">1500+</div>
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Deployments</span>
                   </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[480px] shrink-0">
              <div className="relative group grayscale hover:grayscale-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                  alt="Precision Machinery" 
                  className="w-full h-auto aspect-[4/5] object-cover rounded-sm shadow-2xl"
                />
                <div className="absolute inset-0 border-[20px] border-white/10 group-hover:border-aureole-blue/10 transition-colors"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
