
import React from 'react';
import { Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
   const location = useLocation();
   const currentYear = new Date().getFullYear();

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
      <footer className="bg-aureole-primary text-white pt-16 relative overflow-hidden">
         {/* Visual Header - Branding Mask Effect */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
            <h2 className="text-[31vw] font-bold tracking-tighter leading-none text-aureole-accent opacity-[0.07]" style={{ fontFamily: '"Levenim MT", "Questrial", sans-serif' }}>
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
                        className="h-24 w-auto brightness-[1.25] contrast-[1.1] saturate-[1.1]"
                     />
                  </Link>
                  <p className="text-blue-50/90 text-sm font-medium leading-relaxed max-w-xs">
                     Precision engineering leaders in environmental stabilization and thermal control solutions for global pharmaceutical manufacturing.
                  </p>
                  <div className="flex gap-3">
                     {[
                        { Icon: Linkedin, href: "https://www.linkedin.com/company/aureole-pharmatech/" },
                        { Icon: Instagram, href: "https://www.instagram.com/aureole_pharmatech" }
                     ].map((social, idx) => (
                        <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:bg-aureole-accent hover:border-aureole-accent transition-all">
                           <social.Icon className="w-4 h-4" />
                        </a>
                     ))}
                  </div>
               </div>

               <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-aureole-accent">Quick Links</h4>
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
                                 className="text-blue-50/80 font-bold tracking-[0.1em] text-xs hover:text-white transition-colors flex items-center gap-3 group"
                                 onClick={() => handleHashScroll(item.href.substring(2))}
                              >
                               <span className="w-1.5 h-[1px] bg-white/10 group-hover:w-4 group-hover:bg-aureole-accent transition-all"></span> {item.name}
                              </Link>
                           ) : (
                              <Link
                                 to={item.href}
                                 className="text-blue-50/80 font-bold tracking-[0.1em] text-xs hover:text-white transition-colors flex items-center gap-3 group"
                                 onClick={item.href === '/' ? handleScrollToTop : undefined}
                              >
                               <span className="w-1.5 h-[1px] bg-white/10 group-hover:w-4 group-hover:bg-aureole-accent transition-all"></span> {item.name}
                              </Link>
                           )}
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-aureole-accent">Key Products</h4>
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
                              className="text-blue-50/80 font-bold tracking-[0.1em] text-xs hover:text-white transition-colors flex items-center gap-3 group"
                              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                           >
                              <span className="w-1.5 h-[1px] bg-white/10 group-hover:w-4 group-hover:bg-aureole-accent transition-all"></span> {item.name}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-aureole-accent">Corporate Offices</h4>
                  <div className="space-y-6 relative z-10 text-blue-50/90 font-bold tracking-[0.1em] text-xs leading-relaxed">
                     
                     {/* Thane Head Office */}
                     <div className="space-y-1.5">
                        <div className="text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-aureole-accent"></span> Thane Head Office
                        </div>
                        <div className="flex gap-3">
                           <MapPin className="w-4 h-4 text-blue-100/70 shrink-0 mt-0.5" />
                           <a
                              href="https://maps.google.com/?q=Unit+No+-+103,+1st+Floor,+Centura+Square,+Wagale+Industrial+Estate,+Thane"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-white transition-colors"
                           >
                              Unit No - 103, 1st Floor, Centura Square, Wagale Industrial Estate, Thane.
                           </a>
                        </div>
                     </div>

                     {/* Nashik Corporate Office */}
                     <div className="space-y-1.5">
                        <div className="text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-aureole-accent"></span> Nashik Corporate Office
                        </div>
                        <div className="flex gap-3">
                           <MapPin className="w-4 h-4 text-blue-100/70 shrink-0 mt-0.5" />
                           <a
                              href="https://maps.google.com/?q=Office+No.+6004,+Satyanarayan+Mall,+Near+City+Centre+Mall,+Lawate+Nagar,+Nashik"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-white transition-colors"
                           >
                              Office No. 6004, Satyanarayan Mall, Near City Centre Mall, Lawate Nagar, Nashik.
                           </a>
                        </div>
                     </div>

                     {/* Email and Phone */}
                     <div className="pt-4 border-t border-white/5 space-y-3">
                        <div className="flex gap-3">
                           <Mail className="w-4 h-4 text-blue-100/70 shrink-0 mt-0.5" />
                           <a
                              href="mailto:enquiry@aureolepharmatech.com"
                              className="hover:text-white transition-colors"
                           >
                              enquiry@aureolepharmatech.com
                           </a>
                        </div>
                        <div className="flex gap-3">
                           <Phone className="w-4 h-4 text-blue-100/70 shrink-0 mt-0.5" />
                           <a
                              href="tel:+918600522240"
                              className="text-lg font-bold tracking-tighter text-white hover:text-aureole-accent transition-colors"
                           >
                              +91 86005 22240
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Integrated Copyright Section */}
            <div className="border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/60 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
                  <span>© {currentYear} <span className="text-white">Aureole Pharmatech Pvt Ltd.</span></span>
                  <span className="hidden md:inline opacity-20">|</span>
                  <span>All Rights Reserved.</span>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
