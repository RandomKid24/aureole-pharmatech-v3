
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Linkedin, Facebook, Twitter, ChevronDown, Rocket, Building2, Users, ShieldCheck } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      dropdown: [
        { name: 'Overview', href: '/about/overview', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Certification & Compliance', href: '/about/certification-compliance', icon: <ShieldCheck className="w-4 h-4" /> },
        { name: 'Plants', href: '/about/plants', icon: <Building2 className="w-4 h-4" /> },
        { name: 'Team', href: '/about/team', icon: <Users className="w-4 h-4" /> },
      ]
    },
    { name: 'Precision Systems', href: '/#products' },
    { name: 'Industries', href: '/#industries' },
    { name: 'Partners', href: '/#clients' },
    { name: 'Contact', href: '/#contact' }
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.split('#')[1];
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-500">
      {/* Upper Technical Bar */}
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

      {/* Main Navigation */}
      <div className={`${isScrolled ? 'bg-white/95 shadow-xl py-1' : 'bg-white py-2'} transition-all duration-300 backdrop-blur-md border-b border-slate-100`}>
        <div className="container mx-auto px-8 lg:px-16 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/aureole-logo.png"
              alt="Aureole Pharma-Tech"
              className={`${isScrolled ? 'h-16' : 'h-20'} w-auto transition-all duration-300 group-hover:scale-105`}
            />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/link-container">
                {link.dropdown ? (
                  <div
                    className="flex items-center gap-1.5 cursor-pointer text-[10px] font-extrabold uppercase tracking-[0.25em] text-aureole-slate hover:text-aureole-cyan transition-colors py-4"
                    onMouseEnter={() => setAboutDropdownOpen(true)}
                    onMouseLeave={() => setAboutDropdownOpen(false)}
                  >
                    {link.name}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />

                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 w-64 bg-white shadow-2xl border border-slate-100 p-4 transition-all duration-300 ${aboutDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                      <div className="flex flex-col gap-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors group/item"
                          >
                            <div className="text-slate-400 group-hover/item:text-aureole-blue transition-colors">
                              {item.icon}
                            </div>
                            <span className="text-[9px] font-black uppercase tracking-widest text-aureole-slate group-hover/item:text-aureole-blue">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    onClick={(e) => {
                      if (link.href.includes('#')) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }
                    }}
                    className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-aureole-slate hover:text-aureole-cyan transition-colors relative group/link"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-aureole-blue transition-all group-hover/link:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
            <button className="bg-aureole-blue text-white px-8 py-3.5 text-[10px] font-black uppercase tracking-widest hover:bg-aureole-slate transition-all shadow-lg shadow-blue-500/10 ml-4">
              Technical Inquiry
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-aureole-slate" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-[60] p-6 flex flex-col transition-all duration-500 transform ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <img
              src="/aureole-logo.png"
              alt="Aureole Pharma-Tech"
              className="h-10 w-auto"
            />
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-3 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-6 h-6 text-aureole-slate" />
          </button>
        </div>

        <div className="flex flex-col gap-6 overflow-y-auto">
          {navLinks.map((link, idx) => (
            <div key={link.name} className="flex flex-col">
              {link.dropdown ? (
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">{link.name}</span>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-2xl font-black text-aureole-slate uppercase tracking-tighter hover:text-aureole-cyan transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  to={link.href}
                  className={`text-2xl font-black text-aureole-slate uppercase tracking-tighter border-b border-slate-50 pb-4 transition-all duration-500 delay-[${idx * 50}ms] ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (link.href.includes('#')) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
