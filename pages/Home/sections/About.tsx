
import React from 'react';
import { AUREOLE_VALUES } from '@/constants';
import { Microscope } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import { founderYears } from '@/utils/experience';

/**
 * AboutSection: Redesigned for a high-density, compact 7-letter brand mnemonic grid.
 * Optimized with faster transitions for performance.
 */
const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-transparent relative overflow-hidden group/section">

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">

        {/* Brand Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="slant-mark" aria-hidden="true"></span>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-blue">ABOUT</h2>
            </div>
            <h3 className="text-4xl lg:text-6xl font-[950] text-aureole-slate uppercase tracking-tighter leading-[0.85] mb-6">
              {founderYears()}+ YEARS OF <br /> <span className="gt">FOUNDER EXPERTISE.</span>
            </h3>
            <div className="g-left p-8 pl-10 bg-white shadow-sm">
              <p className="text-lg lg:text-xl text-slate-700 font-bold leading-relaxed mb-6">
                When you choose Aureole PharmaTech, you're choosing a partner with 1,500+ successful installations across 15+ countries.
              </p>
              <p className="text-[15px] text-slate-500 font-medium leading-relaxed tracking-tight">
                Led by a founder with over {founderYears()} years of pharmaceutical engineering experience, we have delivered custom pharmaceutical technology and services to 70+ verified client entities. Our engineering adheres strictly to GxP compliance, ISO 9001:2015, CE, ZED Gold, with software that supports 21 CFR Part 11 electronic records requirements.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 relative group w-full frame-slant pr-5 pb-5">
            <div className="relative aspect-video lg:aspect-square overflow-hidden">
              <LazyImage
                src="/about/office-hq-v2.webp"
                alt="Aureole PharmaTech Nashik headquarters and office building"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-aureole-slate/15 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="flex flex-col gap-8">

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-5">
            {AUREOLE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="group p-6 border border-slate-100 bg-white transition-all duration-500 hover:border-aureole-cyan/30 hover:shadow-[0_20px_40px_rgba(0,166,214,0.08)] flex flex-col min-h-[220px] lg:min-h-[240px] relative overflow-hidden rounded-sm cursor-default g-top"
              >
                {/* Background Letter - Highlighting in Cyan on Hover */}
                <div className="text-8xl font-[950] font-heading text-slate-100 group-hover:text-aureole-cyan/10 transition-all duration-700 absolute -right-4 -top-4 select-none pointer-events-none group-hover:-translate-y-2 group-hover:-rotate-6">
                  {val.letter}
                </div>

                <div className="g-ico mb-6 relative z-10">
                  {React.cloneElement(val.icon as React.ReactElement<any>, { size: 20 })}
                </div>

                <h5 className="text-[11px] font-black text-aureole-slate uppercase tracking-[0.15em] mb-2 group-hover:text-aureole-cyan transition-colors relative z-10">
                  {val.title}
                </h5>

                <p className="text-slate-400 font-medium text-[11px] leading-relaxed tracking-wide group-hover:text-slate-500 transition-colors relative z-10">
                  {val.desc}
                </p>

                {/* Bottom Highlight Line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-aureole-cyan transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
