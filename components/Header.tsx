
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ShieldCheck, Building2, Users } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import TechnicalBar from './Header/TechnicalBar';
import MegaMenu from './Header/MegaMenu';
import MobileMenu from './Header/MobileMenu';
import DesktopNav from './Header/DesktopNav';
import { PRODUCT_CATALOG } from '@/data/products';

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
    { name: 'Products', href: '/products' },
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

  const toggleMobileCat = (catId: string) => {
    setMobileExpandedCat(mobileExpandedCat === catId ? null : catId);
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-500">
      <TechnicalBar isScrolled={isScrolled} />

      <div className={`${isScrolled ? 'bg-white/95 shadow-xl py-2' : 'bg-white py-4'} transition-all duration-300 backdrop-blur-md border-b border-slate-100`}>
        <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/aureole-logo.png"
              alt="Aureole Pharma-Tech"
              className={`${isScrolled ? 'h-12' : 'h-16'} w-auto transition-all duration-300 group-hover:scale-105`}
            />
          </Link>

          <DesktopNav
            navLinks={navLinks}
            aboutDropdownOpen={aboutDropdownOpen}
            productsDropdownOpen={productsDropdownOpen}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleNavClick={handleNavClick}
            MegaMenu={
              <MegaMenu
                isOpen={productsDropdownOpen}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                onClose={() => setProductsDropdownOpen(false)}
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              />
            }
          />

          <button className="lg:hidden p-2 text-aureole-slate" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        mobileExpandedCat={mobileExpandedCat}
        toggleMobileCat={toggleMobileCat}
        handleNavClick={handleNavClick}
      />
    </header>
  );
};

export default Header;
