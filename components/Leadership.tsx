
import React from 'react';
import { Quote, Linkedin, FileText, Target, Compass, ArrowRight } from 'lucide-react';

const Leadership: React.FC = () => {
   return (
      <section id="leadership" className="py-20 bg-white relative overflow-hidden">
         <div className="container mx-auto px-8 lg:px-16">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
               {/* Executive Profile */}
               <div className="lg:col-span-12 xl:col-span-5 relative mb-12 xl:mb-0">
                  <div className="aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden border-b-[12px] border-[#001529] bg-slate-50 relative">
                     <img
                        src="/about/md_profile.jpg"
                        alt="Dr. Kiran Badgujar"
                        className="w-full h-full object-cover object-top"
                     />
                  </div>
                  <div className="mt-8">
                     <h4 className="text-4xl font-black text-[#001529] uppercase tracking-tighter">Dr. Kiran Badgujar</h4>
                     <div className="flex items-center gap-4 mt-2">
                        <div className="h-[2px] w-12 bg-aureole-blue"></div>
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-blue">Managing Director</span>
                     </div>
                  </div>
               </div>

               {/* Narrative Block */}
               <div className="lg:col-span-12 xl:col-span-7">
                  <Quote className="w-16 h-16 text-slate-100 mb-6" />
                  <h3 className="text-4xl lg:text-5xl font-black text-[#001529] uppercase tracking-tighter leading-[0.9] mb-8">
                     "We engineer <span className="text-aureole-blue">trust</span> through thermal precision."
                  </h3>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed italic mb-8">
                     "Our journey over the last three decades has been defined by a relentless pursuit of engineering excellence. At Aureole, we ensure that the pharmaceutical industry's most sensitive products are tested and stored under absolute environmental equilibrium."
                  </p>

                  <div className="space-y-4 text-slate-500 text-xs font-medium leading-relaxed uppercase tracking-wider mb-10">
                     <p>
                        At Aureole PharmaTech, we believe in the power of inspiration. Our name, "Aureole", draws inspiration from the radiant halo or aura often associated with revered figures in spirituality. This symbolism holds a profound significance for us as our core values are inspired by it.
                     </p>
                     <p>
                        "Aureole" represents our unwavering commitment to excellence and distinction. Just as the halo symbolizes the sacred and divine, our name embodies a commitment to upholding the highest standards of quality, integrity, and innovation in the pharmaceutical industry.
                     </p>
                  </div>
                  <div className="flex gap-8">
                     <button className="bg-[#001529] text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest flex items-center gap-4 hover:bg-aureole-cyan transition-colors">
                        Full Biography <FileText className="w-4 h-4" />
                     </button>
                     <a href="#" className="flex items-center gap-4 text-slate-400 hover:text-aureole-cyan transition-colors">
                        <Linkedin className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Connect</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Leadership;
