
import React from 'react';
import { Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
   const location = useLocation();

   const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   const handleHashScroll = (id: string) => {
      if (location.pathname === '/') {
         const element = document.getElementById(id);
         if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
         }
      }
   };

   return (
      <footer className="bg-aureole-slate text-white pt-16 pb-12 relative overflow-hidden">
         {/* Visual Header - Branding Mask Effect */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
            <h2 className="text-[31vw] font-bold tracking-tighter leading-none text-aureole-cyan opacity-[0.05]" style={{ fontFamily: '"Levenim MT", "Questrial", sans-serif' }}>
               aureole
            </h2>
         </div>

         <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

               <div className="space-y-10">
                  <Link to="/" onClick={handleScrollToTop}>
                     <img
                        src="/aureole-logo.png"
                        alt="Aureole Pharma-Tech"
                        className="h-20 w-auto"
                     />
                  </Link>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
                     Precision engineering leaders in environmental stabilization and thermal control solutions for global pharmaceutical manufacturing.
                  </p>
                  <div className="flex gap-3">
                     {[
                        { Icon: Linkedin, href: "https://www.linkedin.com/company/aureole-pharmatech/" },
                        { Icon: Instagram, href: "https://www.instagram.com/aureole_pharmatech" }
                     ].map((social, idx) => (
                        <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:bg-aureole-cyan hover:border-aureole-cyan transition-all">
                           <social.Icon className="w-4 h-4" />
                        </a>
                     ))}
                  </div>
               </div>

               <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-aureole-blue">Quick Links</h4>
                  <ul className="space-y-3">
                     {[
                        { name: 'Home', href: '/' },
                        { name: 'About', href: '/about' },
                        { name: 'Products', href: '/products' },
                        { name: 'Software', href: '/software' },
                        { name: 'Service', href: '/service' },
                        { name: 'Contact', href: '/#contact' }
                     ].map(item => (
                        <li key={item.name}>
                           {item.href.startsWith('/#') ? (
                              <Link
                                 to={item.href}
                                 className="text-slate-400 font-bold tracking-[0.1em] text-xs hover:text-white transition-colors flex items-center gap-3 group"
                                 onClick={() => handleHashScroll(item.href.substring(2))}
                              >
                                 <span className="w-1.5 h-[1px] bg-slate-700 group-hover:w-4 group-hover:bg-aureole-cyan transition-all"></span> {item.name}
                              </Link>
                           ) : (
                              <Link
                                 to={item.href}
                                 className="text-slate-400 font-bold tracking-[0.1em] text-xs hover:text-white transition-colors flex items-center gap-3 group"
                                 onClick={item.href === '/' ? handleScrollToTop : undefined}
                              >
                                 <span className="w-1.5 h-[1px] bg-slate-700 group-hover:w-4 group-hover:bg-aureole-cyan transition-all"></span> {item.name}
                              </Link>
                           )}
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-aureole-blue">Key Products</h4>
                  <ul className="space-y-3">
                     {[
                        { name: 'Humidity Chamber', href: '/products/humidity-chamber' },
                        { name: 'Walk-In Humidity Chamber', href: '/products/walk-in-humidity-chamber' },
                        { name: 'Cold Room', href: '/products/walk-in-cold-chamber' },
                        { name: 'Photostability Chamber', href: '/products/photostability-chamber' },
                        { name: 'Ultra Low Deep Freezer (-80°C)', href: '/products/ultra-low-deep-freezer-80c' },
                        { name: 'Ultrasonic Bath', href: '/products/ultrasonic-bath' }
                     ].map(item => (
                        <li key={item.name}>
                           <Link
                              to={item.href}
                              className="text-slate-400 font-bold tracking-[0.1em] text-xs hover:text-white transition-colors flex items-center gap-3 group"
                              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                           >
                              <span className="w-1.5 h-[1px] bg-slate-700 group-hover:w-4 group-hover:bg-aureole-cyan transition-all"></span> {item.name}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-aureole-blue">Headquarters</h4>
                  <div className="space-y-4 relative z-10">
                     <div className="flex gap-4">
                        <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                        <a
                           href="https://maps.google.com/?q=B-61, Dist, MIDC Area, Malegaon, Maharashtra 422113"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-slate-400 font-bold tracking-[0.1em] text-xs leading-relaxed hover:text-white transition-colors"
                        >
                           B-61, Dist, MIDC Area, Malegaon, Maharashtra 422113.
                        </a>
                     </div>
                     <div className="flex gap-4">
                        <Mail className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                        <a
                           href="mailto:enquiry@aureolepharmatech.com"
                           className="text-slate-400 font-bold tracking-[0.1em] text-xs hover:text-white transition-colors"
                        >
                           enquiry@aureolepharmatech.com
                        </a>
                     </div>
                     <div className="flex gap-4">
                        <Phone className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                        <a
                           href="tel:+918600522240"
                           className="text-lg font-bold tracking-tighter text-white hover:text-aureole-cyan transition-colors"
                        >
                           +91 86005 22240
                        </a>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </footer>
   );
};

export default Footer;
