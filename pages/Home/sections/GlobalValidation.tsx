
import React from 'react';
import { CLIENTS } from '@/constants';
import LazyImage from '@/components/LazyImage';

const GlobalValidation: React.FC = () => {
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
          <div key={idx} className="flex items-center gap-6 sm:gap-10 group transition-all duration-300 w-[240px] sm:w-[450px] flex-shrink-0">
            <div className="w-20 h-10 sm:w-32 sm:h-16 flex-shrink-0 bg-white rounded-sm overflow-hidden p-2 border border-slate-100 group-hover:border-aureole-cyan/30 group-hover:scale-105 transition-all duration-300">
              <LazyImage
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain transition-opacity"
              />
            </div>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.15em] text-slate-300 group-hover:text-aureole-cyan uppercase transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="clients" className="py-16 sm:py-20 bg-aureole-soft relative overflow-hidden border-t border-slate-100 group/section">
      <div className="absolute top-10 right-10 opacity-[0.02] group-hover/section:opacity-[0.08] transition-all duration-1000 pointer-events-none select-none hidden lg:block">
        <span className="text-[150px] font-black text-aureole-slate group-hover/section:text-aureole-cyan tracking-tighter uppercase leading-none transition-colors duration-1000">TRUST</span>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-20 relative z-10 mb-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-aureole-blue"></span>
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-blue">PARTNERS</h2>
          </div>
          <h3 className="text-4xl sm:text-6xl lg:text-7xl font-[950] text-aureole-slate uppercase tracking-tighter leading-[0.9] mb-8">
            GLOBAL <br /> <span className="text-aureole-blue">VALIDATION.</span>
          </h3>
          <p className="text-slate-500 font-medium text-[14px] sm:text-[15px] tracking-tight max-w-2xl leading-relaxed">
            A comprehensive network of {CLIENTS.length} verified pharmaceutical entities utilizing Aureole's precision engineering.
          </p>
        </div>
      </div>

      <div className="relative py-10 bg-slate-50/50 border-y border-slate-100">
        <div className="absolute inset-y-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="flex flex-col">
          <MarqueeRow items={row1} animationClass="animate-marquee" />
          <MarqueeRow items={row2} animationClass="animate-marquee-reverse" />
          <MarqueeRow items={row3} animationClass="animate-marquee-fast" />
        </div>
      </div>
    </section>
  );
};

export default GlobalValidation;
