
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, Linkedin, Facebook, Twitter, ChevronDown, Rocket, Building2, Users, ShieldCheck, Box, Thermometer, Activity, ArrowRight, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { slugify } from '../utils/urlUtils';
import { PRODUCT_CATALOG } from '../data/products';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(PRODUCT_CATALOG[0]?.id || '');

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    setProductsDropdownOpen(false);
    setMobileExpandedCat(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'Certification & Compliance', href: '/about/certification-compliance', icon: <ShieldCheck className="w-4 h-4" /> },
        { name: 'Plants', href: '/about/plants', icon: <Building2 className="w-4 h-4" /> },
        { name: 'Team', href: '/about/team', icon: <Users className="w-4 h-4" /> },
      ]
    },
    {
      name: 'Products',
      href: '/products',
      dropdown: [] // Handled via Mega Menu logic
    },
    { name: 'Service', href: '/service' },
    { name: 'Software', href: '/software' },
    { name: 'Events', href: '/events' },
    { name: 'Careers', href: '/careers' }
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

  const toggleMobileCat = (catId: string) => {
    setMobileExpandedCat(mobileExpandedCat === catId ? null : catId);
  };

  const handleMouseEnter = (menu: 'about' | 'products') => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (menu === 'about') {
      setAboutDropdownOpen(true);
      setProductsDropdownOpen(false);
    } else {
      setProductsDropdownOpen(true);
      setAboutDropdownOpen(false);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
      setProductsDropdownOpen(false);
    }, 300);
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-500">
      {/* Upper Technical Bar */}
      <div className={`hidden lg:flex bg-aureole-slate text-white py-2.5 transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
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
      <div className={`${isScrolled ? 'bg-white/95 shadow-xl py-2' : 'bg-white py-4'} transition-all duration-300 backdrop-blur-md border-b border-slate-100`}>
        <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/aureole-logo.png"
              alt="Aureole Pharma-Tech"
              className={`${isScrolled ? 'h-12' : 'h-16'} w-auto transition-all duration-300 group-hover:scale-105`}
            />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href ||
                (link.name === 'About' && location.pathname.startsWith('/about')) ||
                (link.name === 'Products' && location.pathname.startsWith('/products'));

              return (
                <div key={link.name} className="relative group/link-container">
                  {link.name === 'Products' || link.name === 'About' ? (
                    <div
                      className={`flex items-center gap-1.5 cursor-pointer text-[10px] font-extrabold uppercase tracking-[0.25em] transition-colors py-4 ${isActive ? 'text-aureole-cyan' : 'text-aureole-slate hover:text-aureole-cyan'
                        }`}
                      onMouseEnter={() => handleMouseEnter(link.name === 'About' ? 'about' : 'products')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link to={link.href || '#'} className="hover:text-aureole-cyan transition-colors">{link.name}</Link>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${(link.name === 'About' ? aboutDropdownOpen : productsDropdownOpen) ? 'rotate-180' : ''}`} />

                      {/* Standard Dropdown for 'About' */}
                      {link.name === 'About' && (
                        <div
                          className={`absolute top-full left-0 w-64 bg-white shadow-2xl border border-slate-100 p-4 transition-all duration-300 ${aboutDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                          onMouseEnter={() => handleMouseEnter('about')}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="flex flex-col gap-1">
                            {link.dropdown?.map((item) => (
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
                      )}

                      {/* Technical Ribbon Dropdown - Ultra Shallow & Horizontal */}
                      {link.name === 'Products' && (
                        <div
                          className={`absolute left-1/2 -translate-x-1/2 w-[780px] bg-white border border-slate-200 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-300 origin-top z-50 overflow-hidden ${productsDropdownOpen ? 'opacity-100 translate-y-2 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}
                          style={{ top: '100%' }}
                          onMouseEnter={() => handleMouseEnter('products')}
                          onMouseLeave={handleMouseLeave}
                        >
                          {/* Horizontal Category Selector */}
                          <div className="flex border-b border-slate-100 bg-slate-50/80">
                            {PRODUCT_CATALOG.map((cat) => {
                              const catUrl = cat.id === 'stability' ? '/products/stability-chambers' : cat.id === 'tabletop' ? '/products/table-top-instruments' : '/products/laboratory-furniture';
                              return (
                                <Link
                                  key={cat.id}
                                  to={catUrl}
                                  onMouseEnter={() => setActiveCategory(cat.id)}
                                  onClick={() => setProductsDropdownOpen(false)}
                                  className={`flex-1 flex items-center justify-center gap-3 py-4 transition-all relative group ${activeCategory === cat.id ? 'bg-white' : 'hover:bg-white/50'}`}
                                >
                                  <div className={`transition-colors ${activeCategory === cat.id ? 'text-aureole-cyan' : 'text-slate-300 group-hover:text-slate-400'}`}>
                                    {cat.id === 'stability' ? <Thermometer size={14} /> : cat.id === 'tabletop' ? <Activity size={14} /> : <Box size={14} />}
                                  </div>
                                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${activeCategory === cat.id ? 'text-aureole-slate' : 'text-slate-400 group-hover:text-slate-500'}`}>
                                    {cat.title}
                                  </span>
                                  {activeCategory === cat.id && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-aureole-cyan" />
                                  )}
                                </Link>
                              );
                            })}
                          </div>

                          {/* Horizontal Content Area */}
                          <div className="p-8 h-[250px] relative">
                            {PRODUCT_CATALOG.map((cat) => (
                              <div
                                key={cat.id}
                                className={`absolute inset-0 p-8 transition-all duration-300 ${activeCategory === cat.id ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}
                              >
                                <div className="grid grid-cols-3 gap-x-10 gap-y-3">
                                  {cat.subTypes.map((sub) => (
                                    <React.Fragment key={sub.id}>
                                      {sub.products.map((pName) => (
                                        <Link
                                          key={pName}
                                          to={`/products/${slugify(pName)}`}
                                          className="text-[10px] font-bold text-slate-500 hover:text-aureole-blue transition-all uppercase tracking-wide flex items-center gap-2 group/item truncate"
                                          title={pName}
                                          onClick={() => setProductsDropdownOpen(false)}
                                        >
                                          <div className="w-1 h-1 rounded-full bg-slate-200 group-hover/item:bg-aureole-cyan transition-colors flex-shrink-0" />
                                          <span className="truncate">{pName}</span>
                                        </Link>
                                      ))}
                                    </React.Fragment>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Ultra-Slim Footer Bar */}
                          <div className="bg-slate-50 border-t border-slate-100 px-8 py-3 flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-slate-400">
                            <div className="flex items-center gap-4">
                              <span>Industrial Grade Systems</span>
                              <div className="w-1 h-1 rounded-full bg-slate-300" />
                              <span>ISO Certified</span>
                            </div>
                            <Link to="/products" className="text-aureole-cyan hover:gap-3 transition-all flex items-center gap-2">
                              Explore All <ArrowRight size={10} />
                            </Link>
                          </div>
                        </div>
                      )}
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
                      className={`text-[10px] font-extrabold uppercase tracking-[0.25em] transition-colors relative group/link ${isActive ? 'text-aureole-cyan' : 'text-aureole-slate hover:text-aureole-cyan'
                        }`}
                    >
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 h-[2px] bg-aureole-cyan transition-all ${isActive ? 'w-full' : 'w-0 group-hover/link:w-full'
                        }`}></span>
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-aureole-slate" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[60] p-6 flex flex-col transition-all duration-500 transform ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
      >
        <div className="flex justify-between items-center mb-8">
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

        <div className="flex flex-col gap-6 overflow-y-auto pb-20 custom-scrollbar">
          {navLinks.map((link, idx) => (
            <div key={link.name} className="flex flex-col">
              {link.name === 'Products' ? (
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2 border-b border-slate-100 pb-2">{link.name}</span>
                  {/* Mobile Product Accordion */}
                  <div className="pl-4 flex flex-col gap-4">
                    {PRODUCT_CATALOG.map((cat) => (
                      <div key={cat.id} className="border-l-2 border-slate-100 pl-4">
                        <button
                          onClick={() => toggleMobileCat(cat.id)}
                          className="flex items-center justify-between w-full text-left mb-2 group"
                        >
                          <span className={`text-lg font-black uppercase tracking-tighter transition-colors ${mobileExpandedCat === cat.id ? 'text-aureole-cyan' : 'text-aureole-slate'}`}>{cat.title}</span>
                          <ChevronDown size={16} className={`text-slate-400 transition-transform ${mobileExpandedCat === cat.id ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Category Sub-Menu */}
                        <div className={`overflow-hidden transition-all duration-300 ${mobileExpandedCat === cat.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <Link
                            to={cat.id === 'stability' ? '/products/stability-chambers' : cat.id === 'tabletop' ? '/products/table-top-instruments' : '/products/laboratory-furniture'}
                            className="block text-[10px] font-bold uppercase tracking-widest text-aureole-blue mb-4 hover:text-aureole-cyan"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            View All Overview <ArrowRight size={10} className="inline ml-1" />
                          </Link>
                          <div className="flex flex-col gap-3 pb-4">
                            {cat.subTypes.map((sub) => (
                              <div key={sub.id}>
                                {(cat.subTypes.length > 1) && (
                                  <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">{sub.name}</h5>
                                )}
                                <div className="flex flex-col gap-2 pl-2">
                                  {sub.products.map(pName => (
                                    <Link
                                      key={pName}
                                      to={`/products/${slugify(pName)}`}
                                      className="text-[11px] font-black text-slate-600 hover:text-aureole-cyan uppercase tracking-wide truncate"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {pName}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : link.name === 'About' ? (
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2 border-b border-slate-100 pb-2">{link.name}</span>
                  <div className="pl-4 flex flex-col gap-4">
                    {link.dropdown?.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-center gap-3 text-lg font-black text-aureole-slate uppercase tracking-tighter hover:text-aureole-cyan transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="text-slate-400">{item.icon}</span>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.href}
                  className={`text-2xl font-black text-aureole-slate uppercase tracking-tighter border-b border-slate-50 pb-4 transition-all duration-500 delay-[${idx * 50}ms] ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
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
