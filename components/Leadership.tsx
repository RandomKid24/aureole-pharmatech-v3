
import React from 'react';
import { Quote, Linkedin, FileText, Target, Compass, ArrowRight } from 'lucide-react';

const Leadership: React.FC = () => {
   return (
      <section id="leadership" className="py-32 bg-white relative overflow-hidden">
         <div className="container mx-auto px-8 lg:px-16">
            <div className="grid lg:grid-cols-12 gap-20 items-center mb-32">
               {/* Executive Profile */}
               <div className="lg:col-span-5 relative">
                  <div className="aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden border-b-[12px] border-[#001529] bg-slate-50 relative">
                     <img
                        src="/about/md_profile.jpg"
                        alt="Dr. Kiran Badgujar"
                        className="w-full h-full object-cover object-top"
                     />
                  </div>
                  <div className="mt-10">
                     <h4 className="text-4xl font-black text-[#001529] uppercase tracking-tighter">Dr. Kiran Badgujar</h4>
                     <div className="flex items-center gap-4 mt-2">
                        <div className="h-[2px] w-12 bg-aureole-blue"></div>
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-blue">Managing Director</span>
                     </div>
                  </div>
               </div>

               {/* Narrative Block */}
               <div className="lg:col-span-7">
                  <Quote className="w-20 h-20 text-slate-100 mb-8" />
                  <h3 className="text-4xl lg:text-6xl font-black text-[#001529] uppercase tracking-tighter leading-[0.9] mb-12">
                     "We engineer <span className="text-aureole-blue">trust</span> through thermal precision."
                  </h3>
                  <p className="text-xl text-slate-600 font-medium leading-relaxed italic mb-12">
                     "Our journey over the last three decades has been defined by a relentless pursuit of engineering excellence. At Aureole, we ensure that the pharmaceutical industry's most sensitive products are tested and stored under absolute environmental equilibrium."
                  </p>
                  <div className="flex gap-10">
                     <button className="bg-[#001529] text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest flex items-center gap-4 hover:bg-aureole-cyan transition-colors">
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
