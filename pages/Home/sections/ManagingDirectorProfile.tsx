
import React from 'react';
import { Quote, Linkedin, FileText, Target, Compass, ArrowRight } from 'lucide-react';

const ManagingDirectorProfile: React.FC = () => {
   return (
      <section id="leadership" className="py-20 bg-white relative overflow-hidden">
         <div className="container mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
               {/* Executive Profile */}
               <div className="lg:col-span-12 xl:col-span-4 relative mb-12 xl:mb-0">
                  <div className="max-w-[420px] mx-auto xl:mx-0">
                     <div className="aspect-[3/4] transition-all duration-1000 overflow-hidden bg-slate-50 relative">
                        <img
                           src="/about/managing-director.jpg"
                           alt="Dr. Kiran Badgujar"
                           className="w-full h-full object-cover object-top"
                        />
                     </div>
                     <div className="mt-8">
                        <h4 className="text-3xl font-black text-[#001529] uppercase tracking-tighter">Dr. Kiran Badgujar</h4>
                        <div className="flex items-center gap-4 mt-2">
                           <div className="h-[2px] w-12 bg-aureole-blue"></div>
                           <span className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-blue">Managing Director</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Narrative Block */}
               <div className="lg:col-span-12 xl:col-span-8">
                  <Quote className="w-16 h-16 text-slate-100 mb-6" />
                  <h3 className="text-4xl lg:text-5xl font-black text-[#001529] uppercase tracking-tighter leading-[0.9] mb-8">
                     "We engineer <span className="text-aureole-blue">trust</span> through thermal precision."
                  </h3>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                     Over the past three decades, Aureole PharmaTech has been driven by a relentless pursuit of engineering excellence. We design and deliver solutions that ensure the pharmaceutical industry’s most sensitive products are tested and stored under absolute environmental equilibrium—where precision, reliability, and control are non-negotiable.
                  </p>

                  <div className="space-y-4 text-slate-600 text-lg font-medium leading-relaxed mb-10">
                     <p>
                        The name Aureole is inspired by the radiant halo or aura associated with revered figures in spirituality—a symbol of purity, distinction, and higher purpose. This symbolism reflects our core values and our unwavering commitment to the highest standards of quality, integrity, and innovation. Just as an aureole signifies excellence beyond the ordinary, our work is defined by precision, trust, and engineering mastery.
                     </p>
                  </div>
                  <div className="flex flex-wrap gap-6">
                     <button className="bg-[#001529] text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest flex items-center gap-4 hover:bg-aureole-cyan transition-colors">
                        Full Biography <FileText className="w-4 h-4" />
                     </button>
                     <a href="#" className="bg-aureole-cyan text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest flex items-center gap-4">
                        <Linkedin className="w-4 h-4" />
                        <span>Connect</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ManagingDirectorProfile;
