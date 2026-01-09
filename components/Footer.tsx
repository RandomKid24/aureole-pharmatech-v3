
import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, MapPin, Mail, Phone, Globe, Shield } from 'lucide-react';

const Footer: React.FC = () => {
   return (
      <footer className="bg-aureole-slate text-white pt-24 pb-16 relative overflow-hidden">
         {/* Visual Header - Branding Mask Effect */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
            <h2 className="text-[31vw] font-bold tracking-tighter leading-none text-aureole-cyan opacity-[0.05]" style={{ fontFamily: '"Levenim MT", "Questrial", sans-serif' }}>
               aureole
            </h2>
         </div>

         <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">

               <div className="space-y-10">
                  <img
                     src="/aureole-logo.png"
                     alt="Aureole Pharma-Tech"
                     className="h-20 w-auto"
                  />
                  <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
                     Precision engineering leaders in environmental stabilization and thermal control solutions for global pharmaceutical manufacturing.
                  </p>
                  <div className="flex gap-3">
                     {[Linkedin, Twitter, Facebook, Instagram].map((Icon, idx) => (
                        <a key={idx} href="#" className="w-12 h-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:bg-aureole-cyan hover:border-aureole-cyan transition-all">
                           <Icon className="w-4 h-4" />
                        </a>
                     ))}
                  </div>
               </div>

               <div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-aureole-blue">Quick Links</h4>
                  <ul className="space-y-5">
                     {['Home', 'About', 'Leadership', 'Precision Systems', 'Industries', 'Partners', 'Contact'].map(item => (
                        <li key={item}>
                           <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-slate-400 font-bold uppercase tracking-[0.15em] text-[10px] hover:text-white transition-colors flex items-center gap-3 group">
                              <span className="w-1.5 h-[1px] bg-slate-700 group-hover:w-4 group-hover:bg-aureole-cyan transition-all"></span> {item}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-aureole-blue">Key Products</h4>
                  <ul className="space-y-5">
                     {['Walk-in Chambers', 'Air Samplers', 'Stability Chambers', 'Photostability', 'Cold Storage'].map(item => (
                        <li key={item}>
                           <a href="#" className="text-slate-400 font-bold uppercase tracking-[0.15em] text-[10px] hover:text-white transition-colors flex items-center gap-3 group">
                              <span className="w-1.5 h-[1px] bg-slate-700 group-hover:w-4 group-hover:bg-aureole-cyan transition-all"></span> {item}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-aureole-blue">Headquarters</h4>
                  <div className="space-y-6 relative z-10">
                     <div className="flex gap-4">
                        <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                        <span className="text-slate-400 font-bold uppercase tracking-[0.15em] text-[10px] leading-relaxed">
                           B-61, Dist, MIDC Area, Malegaon, Maharashtra 422113.
                        </span>
                     </div>
                     <div className="flex gap-4">
                        <Mail className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                        <span className="text-slate-400 font-bold uppercase tracking-[0.15em] text-[10px]">
                           enquiry@aureolepharmatech.com
                        </span>
                     </div>
                     <div className="flex gap-4">
                        <Phone className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                        <span className="text-lg font-bold tracking-tighter text-white">
                           +91 86005 22240
                        </span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex items-center gap-8">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">© 2025 Aureole Pharmatech Pvt Ltd</span>
                  <div className="hidden md:flex gap-8">
                     <div className="flex items-center gap-2 opacity-40">
                        <Shield className="w-3 h-3 text-aureole-blue" />
                        <span className="text-[8px] font-black uppercase tracking-widest">ISO 9001:2015</span>
                     </div>
                     <div className="flex items-center gap-2 opacity-40">
                        <Globe className="w-3 h-3 text-aureole-blue" />
                        <span className="text-[8px] font-black uppercase tracking-widest">Validated Unit</span>
                     </div>
                  </div>
               </div>
               <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-[9px] font-black uppercase tracking-[0.4em] text-aureole-cyan hover:text-white transition-all"
               >
                  Back to top
               </button>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
