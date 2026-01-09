
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Linkedin, Facebook, Twitter, ShieldCheck } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Software', href: '#video' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#industries' },
    { name: 'Events', href: '#clients' },
    { name: 'Careers', href: '#contact' }
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-500">
      {/* Upper Technical Bar - Visible only on LG and up */}
      <div className={`hidden lg:flex bg-aureole-slate text-white py-2.5 transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="container mx-auto px-16 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex gap-10 items-center">
            <a href="tel:+918600522240" className="flex items-center gap-3 hover:text-aureole-cyan transition-colors">
              <Phone className="w-3.5 h-3.5" /> +91 86005 22240
            </a>
            <div className="w-[1px] h-3 bg-blue-800/30"></div>
            <a href="mailto:enquiry@aureolepharmatech.com" className="flex items-center gap-3 hover:text-aureole-cyan transition-colors">
              <Mail className="w-3.5 h-3.5" /> enquiry@aureolepharmatech.com
            </a>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              <a href="#" className="hover:text-aureole-cyan transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-aureole-cyan transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-aureole-cyan transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Visible on LG and up */}
      <div className={`${isScrolled ? 'bg-white/95 shadow-xl py-1' : 'bg-white py-2'} transition-all duration-300 backdrop-blur-md border-b border-slate-100`}>
        <div className="container mx-auto px-8 lg:px-16 flex justify-between items-center">
          <div className="flex items-center gap-5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/aureole-logo.png"
              alt="Aureole Pharma-Tech"
              className={`${isScrolled ? 'h-16' : 'h-20'} w-auto transition-all duration-300 group-hover:scale-105`}
            />
          </div>

          {/* Desktop Links - Updated breakpoint to LG */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-aureole-slate hover:text-aureole-cyan transition-colors relative group/link"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-aureole-blue transition-all group-hover/link:w-full"></span>
              </a>
            ))}
            <button className="bg-aureole-blue text-white px-8 py-3.5 text-[10px] font-black uppercase tracking-widest hover:bg-aureole-slate transition-all shadow-lg shadow-blue-500/10 ml-4">
              Technical Inquiry
            </button>
          </nav>

          {/* Mobile Menu Button - Visible below LG */}
          <button className="lg:hidden p-2 text-aureole-slate" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white z-[60] p-10 flex flex-col">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-3">
              <img
                src="/aureole-logo.png"
                alt="Aureole Pharma-Tech"
                className="h-10 w-auto"
              />
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full"><X className="w-5 h-5" /></button>
          </div>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-3xl font-black text-aureole-slate uppercase tracking-tighter border-b border-slate-50 pb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-auto space-y-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global HQ</span>
              <span className="text-sm font-bold text-aureole-slate">+91 86005 22240</span>
            </div>
            <button className="w-full bg-aureole-blue text-white py-5 font-black uppercase tracking-widest text-xs">Contact Headquarters</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
