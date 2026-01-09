
import React from 'react';
import { AUREOLE_VALUES } from '../constants';
import { Microscope } from 'lucide-react';

/**
 * AboutSection: Redesigned for a high-density, compact 7-letter brand mnemonic grid.
 * Optimized with faster transitions for performance.
 */
const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white relative overflow-hidden border-y border-slate-100">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">

        {/* Brand Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-aureole-blue"></span>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-blue">ABOUT</h2>
            </div>
            <h3 className="text-4xl lg:text-6xl font-[950] text-aureole-slate uppercase tracking-tighter leading-[0.85] mb-6">
              28 YEARS OF <br /> <span className="text-aureole-cyan">PRECISION STANDARD.</span>
            </h3>
            <div className="p-8 border-l-[3px] border-aureole-blue/20 bg-slate-50/50">
              <p className="text-lg lg:text-xl text-slate-700 font-bold leading-relaxed mb-6">
                When you choose Aureole PharmaTech, you're choosing a partner dedicated to the pursuit of excellence.
              </p>
              <p className="text-[11px] text-slate-500 font-bold leading-relaxed uppercase tracking-widest text-justify">
                Our name reflects our promise to deliver pharmaceutical technology and services that are nothing short of exceptional. With us, you'll find the brilliance of innovation and the radiance of excellence in every aspect of our work.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 relative group w-full">
            <div className="absolute -inset-10 bg-aureole-blue/5 rounded-full scale-75 group-hover:scale-100 transition-transform duration-500 opacity-20 blur-3xl"></div>
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-sm border border-slate-100 shadow-xl">
              <img
                src="/about/office-hq-v2.jpg"
                alt="Radiant Engineering"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-aureole-slate/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="flex flex-col gap-8">

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-5">
            {AUREOLE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="group p-6 border border-slate-100 bg-white transition-all duration-300 hover:border-aureole-cyan hover:shadow-2xl hover:shadow-cyan-100 flex flex-col min-h-[220px] lg:min-h-[240px] relative overflow-hidden rounded-sm cursor-default"
              >
                {/* Background Letter - Highlighting in Cyan on Hover */}
                <div className="text-8xl font-[950] text-slate-400 group-hover:text-aureole-cyan/40 transition-all duration-500 absolute -right-4 -top-4 select-none pointer-events-none group-hover:scale-125 group-hover:-rotate-12">
                  {val.letter}
                </div>

                <div className="text-aureole-blue mb-6 group-hover:text-aureole-cyan transition-colors relative z-10 duration-300">
                  {React.cloneElement(val.icon as React.ReactElement<any>, { size: 24 })}
                </div>

                <h5 className="text-[11px] font-black text-aureole-slate uppercase tracking-[0.15em] mb-3 group-hover:text-aureole-cyan transition-colors relative z-10">
                  {val.title}
                </h5>

                <p className="text-slate-400 font-bold text-[9px] leading-relaxed uppercase tracking-wider group-hover:text-slate-600 transition-colors mt-auto relative z-10">
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

export default About;
