
import React from 'react';
import { AUREOLE_VALUES } from '../constants';
import { Microscope } from 'lucide-react';

/**
 * AboutSection: Redesigned for a high-density, compact 7-letter brand mnemonic grid.
 * Optimized with faster transitions for performance.
 */
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden border-y border-slate-100">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Brand Header */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-24">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-aureole-blue"></span>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-blue">ABOUT</h2>
            </div>
            <h3 className="text-4xl lg:text-6xl font-[950] text-aureole-slate uppercase tracking-tighter leading-[0.85] mb-6">
              THE RADIANT <br /> <span className="text-aureole-blue">PROTECTION.</span>
            </h3>
            <div className="p-8 border-l-[3px] border-aureole-blue/20 bg-slate-50/50">
               <p className="text-lg lg:text-xl text-slate-600 font-bold leading-relaxed italic mb-4">
                "Aureole represents the radiant halo of protection."
              </p>
              <p className="text-[11px] text-slate-500 font-bold leading-relaxed uppercase tracking-wider">
                Our machinery is engineered to surround and safeguard critical pharmaceutical formulations with absolute environmental equilibrium.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative group w-full">
            <div className="absolute -inset-10 bg-aureole-blue/5 rounded-full scale-75 group-hover:scale-100 transition-transform duration-500 opacity-20 blur-3xl"></div>
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-sm border border-slate-100 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=1200" 
                alt="Radiant Engineering" 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-aureole-slate/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Microscope className="text-white w-4 h-4" />
                </div>
                <div className="text-white">
                  <div className="text-[8px] font-black uppercase tracking-widest">Thermodynamic Unit</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between border-b border-slate-100 pb-6">
            <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">BRAND_MNEMONIC</h4>
            <div className="text-[9px] font-bold text-aureole-blue uppercase tracking-widest">CORE VALUES</div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-5">
            {AUREOLE_VALUES.map((val, idx) => (
              <div 
                key={idx} 
                className="group p-6 border border-slate-100 bg-white transition-all duration-300 hover:bg-aureole-slate hover:border-aureole-slate hover:shadow-xl hover:shadow-blue-900/10 flex flex-col min-h-[220px] lg:min-h-[240px] relative overflow-hidden rounded-sm"
              >
                <div className="text-6xl font-[950] text-slate-50 group-hover:text-white/5 transition-all duration-300 absolute -right-2 -top-1 select-none pointer-events-none">
                  {val.letter}
                </div>

                <div className="text-aureole-blue mb-6 group-hover:text-white transition-colors relative z-10">
                   {React.cloneElement(val.icon as React.ReactElement<any>, { size: 20 })}
                </div>

                <h5 className="text-[11px] font-black text-aureole-slate uppercase tracking-[0.15em] mb-3 group-hover:text-aureole-blue transition-colors relative z-10">
                  {val.title}
                </h5>
                
                <p className="text-slate-400 font-bold text-[9px] leading-relaxed uppercase tracking-wider group-hover:text-white/60 transition-colors mt-auto relative z-10">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
