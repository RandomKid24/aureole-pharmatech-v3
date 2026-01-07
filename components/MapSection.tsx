
import React from 'react';
import { MapPin, ArrowRight, ChevronDown, Activity } from 'lucide-react';

const MapSection: React.FC = () => {
  return (
    <section id="contact" className="py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-[#0066CC]"></span>
              <h2 className="text-[12px] font-black uppercase tracking-[0.4em] text-[#0066CC]">HEADQUARTERS</h2>
            </div>
            <h3 className="text-7xl lg:text-[100px] font-black text-[#001529] leading-[0.85] tracking-tighter uppercase mb-16">
              GET IN <br /> <span className="text-[#0066CC]">TOUCH</span>
            </h3>

            <div className="mb-16 rounded-sm overflow-hidden h-32 relative group border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                alt="Technical Support"
              />
              <div className="absolute inset-0 bg-aureole-slate/20"></div>
              <div className="absolute inset-0 flex items-center px-8 justify-between">
                <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Support Desk</span>
                <Activity className="text-aureole-blue w-5 h-5 animate-pulse" />
              </div>
            </div>

            <div className="space-y-12 mb-16">
              <div className="border-l-[3px] border-[#0066CC] pl-8">
                <div className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-3">Email</div>
                <div className="text-2xl font-black text-[#001529]">enquiry@aureolepharmatech.com</div>
              </div>
              
              <div className="border-l-[3px] border-[#0066CC] pl-8">
                <div className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-3">Phone</div>
                <div className="text-2xl font-black text-[#001529]">+91 86005 22240</div>
              </div>

              <div className="border-l-[3px] border-[#0066CC] pl-8">
                <div className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-3">Unit</div>
                <div className="text-md font-bold text-slate-600 uppercase leading-relaxed max-w-xs">
                  Sinnar Industrial Area, Nashik, India.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#F8FAFC] shadow-2xl rounded-[60px] p-12 lg:p-20 border border-slate-200 relative overflow-hidden">
             <div className="relative z-10">
               <h4 className="text-4xl font-black text-[#001529] mb-4 uppercase tracking-tighter">CONTACT <span className="text-[#0066CC]">US.</span></h4>
               <p className="text-slate-500 text-sm font-bold mb-12 uppercase tracking-widest">Request a technical consultation.</p>
               
               <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">Name</label>
                      <input type="text" placeholder="FULL NAME" className="w-full bg-transparent border-b-2 border-slate-300 py-3 text-[11px] font-black uppercase tracking-widest text-[#001529] focus:outline-none focus:border-[#0066CC] transition-all" />
                    </div>
                    <div className="relative group">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">Email</label>
                      <input type="email" placeholder="OFFICIAL EMAIL" className="w-full bg-transparent border-b-2 border-slate-300 py-3 text-[11px] font-black uppercase tracking-widest text-[#001529] focus:outline-none focus:border-[#0066CC] transition-all" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">Product</label>
                    <select className="w-full bg-transparent border-b-2 border-slate-300 py-3 text-[11px] font-black uppercase tracking-widest text-[#001529] appearance-none focus:outline-none focus:border-[#0066CC] transition-all cursor-pointer">
                      <option>SELECT CATEGORY</option>
                      <option>STABILITY CHAMBERS</option>
                      <option>PHOTOSTABILITY</option>
                      <option>COLD ROOMS</option>
                    </select>
                    <ChevronDown className="absolute right-0 bottom-3 w-4 h-4 text-slate-500 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">Message</label>
                    <textarea rows={4} placeholder="DESCRIBE YOUR REQUIREMENTS..." className="w-full bg-transparent border-b-2 border-slate-300 py-3 text-[11px] font-black uppercase tracking-widest text-[#001529] focus:outline-none focus:border-[#0066CC] transition-all resize-none"></textarea>
                  </div>

                  <button className="flex items-center gap-8 group mt-8">
                     <div className="w-20 h-20 bg-[#0066CC] rounded-full flex items-center justify-center text-white transition-all group-hover:scale-110 shadow-xl shadow-blue-500/20">
                        <ArrowRight className="w-8 h-8" />
                     </div>
                     <div className="text-left">
                       <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">REVIEW</div>
                       <div className="text-[14px] font-black text-[#001529] uppercase tracking-[0.3em]">SEND MESSAGE</div>
                     </div>
                  </button>
               </form>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapSection;
