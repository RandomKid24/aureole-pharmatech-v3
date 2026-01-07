
import React from 'react';
import { Quote, Linkedin, FileText, Target, Compass, ArrowRight } from 'lucide-react';

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-20 items-center mb-32">
          {/* Executive Profile */}
          <div className="lg:col-span-5 relative">
             <div className="aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden border-b-[12px] border-[#001529]">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. Kiran Badgujar" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="mt-10">
                <h4 className="text-4xl font-black text-[#001529] uppercase tracking-tighter">Dr. Kiran Badgujar</h4>
                <div className="flex items-center gap-4 mt-2">
                   <div className="h-[2px] w-12 bg-[#0066CC]"></div>
                   <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#0066CC]">Managing Director</span>
                </div>
             </div>
          </div>

          {/* Narrative Block */}
          <div className="lg:col-span-7">
             <Quote className="w-20 h-20 text-slate-100 mb-8" />
             <h3 className="text-4xl lg:text-6xl font-black text-[#001529] uppercase tracking-tighter leading-[0.9] mb-12">
                "We engineer <span className="text-[#0066CC]">trust</span> through thermal precision."
             </h3>
             <p className="text-xl text-slate-600 font-medium leading-relaxed italic mb-12">
                "Our journey over the last three decades has been defined by a relentless pursuit of engineering excellence. At Aureole, we ensure that the pharmaceutical industry's most sensitive products are tested and stored under absolute environmental equilibrium."
             </p>
             <div className="flex gap-10">
                <button className="bg-[#001529] text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest flex items-center gap-4 hover:bg-[#0066CC] transition-colors">
                  Full Biography <FileText className="w-4 h-4" />
                </button>
                <a href="#" className="flex items-center gap-4 text-slate-400 hover:text-[#0066CC] transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Connect</span>
                </a>
             </div>
          </div>
        </div>

        {/* Mission & Goal Pillars with integrated industrial visuals */}
        <div className="grid md:grid-cols-2 gap-12 border-t border-slate-100 pt-20">
           <div className="group relative overflow-hidden p-12 bg-slate-50 min-h-[400px] flex flex-col justify-end">
              <img 
                src="https://images.unsplash.com/photo-1581093199185-ce4763e0ad6a?auto=format&fit=crop&q=80&w=800" 
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 group-hover:opacity-30 transition-all duration-1000 grayscale"
                alt="Mission Context"
              />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white shadow-xl flex items-center justify-center text-[#0066CC] mb-8 group-hover:bg-[#0066CC] group-hover:text-white transition-all">
                   <Target className="w-6 h-6" />
                </div>
                <h4 className="text-3xl font-black text-[#001529] uppercase tracking-tighter mb-4">Our Mission</h4>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-tight leading-relaxed max-w-sm mb-8">
                   To pioneer zero-tolerance thermal stability systems that empower pharmaceutical innovators to deliver safe medicines globally through 21 CFR compliant engineering.
                </p>
                <div className="w-12 h-1 bg-aureole-blue"></div>
              </div>
           </div>

           <div className="group relative overflow-hidden p-12 bg-slate-50 min-h-[400px] flex flex-col justify-end">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800" 
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 group-hover:opacity-30 transition-all duration-1000 grayscale"
                alt="Goal Context"
              />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white shadow-xl flex items-center justify-center text-[#0066CC] mb-8 group-hover:bg-[#0066CC] group-hover:text-white transition-all">
                   <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-3xl font-black text-[#001529] uppercase tracking-tighter mb-4">Strategic Goal</h4>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-tight leading-relaxed max-w-sm mb-8">
                   Becoming the primary global reference for environmental control machinery while maintaining a sustainable footprint across 50+ countries.
                </p>
                <div className="w-12 h-1 bg-aureole-blue"></div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
