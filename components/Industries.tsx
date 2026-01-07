
import React from 'react';
import { Microscope, Activity, FlaskConical, ArrowRight, Binary, Gauge, ShieldCheck } from 'lucide-react';

const SECTORS_DATA = [
  { 
    id: '01', 
    name: 'PHARMACEUTICAL', 
    icon: <Microscope className="w-8 h-8" />, 
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=1600', 
    desc: 'Specialized thermal stabilization for ICH Q1A compliance and long-term drug validation protocols.',
    capabilities: ['ICH Q1A/Q1B', '21 CFR Part 11', 'Stability Testing']
  },
  { 
    id: '02', 
    name: 'BIOTECHNOLOGY', 
    icon: <FlaskConical className="w-8 h-8" />, 
    image: 'https://images.unsplash.com/photo-1532187875605-1838d73706d4?auto=format&fit=crop&q=80&w=1600', 
    desc: 'Ultra-precise controlled environments for cell culture, enzyme research, and bio-processing equilibrium.',
    capabilities: ['Cell Culture', 'Enzyme Storage', 'Aseptic Logic']
  },
  { 
    id: '03', 
    name: 'LIFE SCIENCES', 
    icon: <Activity className="w-8 h-8" />, 
    image: 'https://images.unsplash.com/photo-1579154273105-08197771746f?auto=format&fit=crop&q=80&w=1600', 
    desc: 'Advanced incubation and thermal mapping systems for clinical diagnostics and next-gen healthcare research.',
    capabilities: ['Clinical Trials', 'Thermal Mapping', 'Incubation']
  },
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-8 lg:px-20 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-aureole-blue"></span>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-blue">SECTORS</h2>
            </div>
            <h3 className="text-5xl lg:text-7xl font-[950] text-aureole-slate uppercase tracking-tighter leading-none">
              SECTOR <span className="text-aureole-blue">EXPERTISE</span>
            </h3>
          </div>
          <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] text-right">
            Active Globally
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SECTORS_DATA.map((sector) => (
            <div 
              key={sector.id}
              className="group relative h-[600px] overflow-hidden bg-aureole-slate border border-slate-100 rounded-sm"
            >
              <img 
                src={sector.image} 
                alt={sector.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aureole-slate via-aureole-slate/40 to-transparent"></div>
              <div className="absolute inset-0 p-12 flex flex-col justify-between z-20">
                <div className="flex justify-between items-start">
                  <div className="text-white bg-aureole-blue/20 p-4 backdrop-blur-md rounded-sm border border-white/10 group-hover:bg-aureole-blue group-hover:border-aureole-blue transition-all duration-500">
                    {sector.icon}
                  </div>
                  <span className="text-[10px] font-mono font-black tracking-widest text-aureole-blue">
                    UNIT_{sector.id}
                  </span>
                </div>

                <div className="relative">
                  <h4 className="text-4xl font-[950] text-white uppercase tracking-tighter mb-6">
                    {sector.name}
                  </h4>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest leading-relaxed mb-8 max-w-xs">
                    {sector.desc}
                  </p>
                  <div className="space-y-4 pt-8 border-t border-white/10 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex flex-wrap gap-2">
                      {sector.capabilities.map((cap, i) => (
                        <span key={i} className="text-[8px] font-black text-white/40 border border-white/10 px-3 py-1.5 uppercase tracking-widest">
                          {cap}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-4 text-[10px] font-black text-aureole-blue uppercase tracking-[0.4em] hover:text-white transition-colors group/btn">
                      VIEW PROTOCOLS <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
