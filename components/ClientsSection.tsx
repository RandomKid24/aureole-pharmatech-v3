
import React from 'react';
import { CLIENTS } from '../constants';

const ClientsSection: React.FC = () => {
  // Splitting the massive list into 3 rows for high-density impact
  const count = CLIENTS.length;
  const split = Math.ceil(count / 3);

  const row1 = CLIENTS.slice(0, split);
  const row2 = CLIENTS.slice(split, split * 2);
  const row3 = CLIENTS.slice(split * 2);

  const MarqueeRow = ({ items, animationClass }: { items: typeof row1, animationClass: string }) => (
    <div className="flex overflow-hidden select-none mb-4 sm:mb-6 last:mb-0">
      <div className={`flex items-center gap-6 sm:gap-12 whitespace-nowrap ${animationClass}`}>
        {[...items, ...items].map((client, idx) => (
          <div key={idx} className="flex items-center gap-4 sm:gap-6 group grayscale hover:grayscale-0 transition-all duration-300">
            <div className="w-24 h-12 sm:w-28 sm:h-14 flex-shrink-0 bg-white rounded-sm overflow-hidden p-2 border border-slate-100 group-hover:border-aureole-blue/30 group-hover:scale-105 transition-all duration-300">
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <span className="text-[9px] sm:text-[10px] font-black tracking-[0.15em] text-slate-300 group-hover:text-aureole-blue uppercase transition-colors">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="clients" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none select-none hidden lg:block">
        <span className="text-[180px] font-black text-aureole-slate tracking-tighter uppercase leading-none">TRUST</span>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-20 relative z-10 mb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-aureole-blue"></span>
            <h2 className="text-[9px] font-black uppercase tracking-[0.4em] text-aureole-blue">PARTNERS</h2>
          </div>
          <h3 className="text-4xl sm:text-6xl lg:text-7xl font-[950] text-aureole-slate tracking-tighter leading-[0.9] uppercase mb-8">
            GLOBAL <br /> <span className="text-aureole-blue">VALIDATION.</span>
          </h3>
          <p className="text-slate-500 font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.3em] max-w-2xl leading-relaxed">
            A comprehensive network of {CLIENTS.length} verified pharmaceutical entities utilizing Aureole's precision engineering.
          </p>
        </div>
      </div>

      <div className="relative py-10 bg-slate-50/50 border-y border-slate-100">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        <div className="flex flex-col">
          <MarqueeRow items={row1} animationClass="animate-marquee" />
          <MarqueeRow items={row2} animationClass="animate-marquee-reverse" />
          <MarqueeRow items={row3} animationClass="animate-marquee-fast" />
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-20 mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'INSTALLED BASE', value: '1500+ Units' },
            { label: 'GEOGRAPHIES', value: '45+ Countries' },
            { label: 'CLIENT RETENTION', value: '98.5% Index' },
            { label: 'SERVICE RATIO', value: '24/7 Global' }
          ].map((cert, idx) => (
            <div key={idx} className="border-l border-slate-200 pl-6 hover:border-aureole-blue transition-colors">
              <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{cert.label}</div>
              <div className="text-lg font-black text-aureole-slate uppercase tracking-tight">{cert.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
