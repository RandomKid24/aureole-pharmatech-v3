
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MegaMenu from './MegaMenu';

interface DesktopNavProps {
    navLinks: any[];
    aboutDropdownOpen: boolean;
    productsDropdownOpen: boolean;
    handleMouseEnter: (menu: 'about' | 'products') => void;
    handleMouseLeave: () => void;
    handleNavClick: (href: string) => void;
    MegaMenu: React.ReactNode;
}

const DesktopNav: React.FC<Omit<DesktopNavProps, 'MegaMenu'>> = ({
    navLinks,
    aboutDropdownOpen,
    productsDropdownOpen,
    handleMouseEnter,
    handleMouseLeave,
    handleNavClick
}) => {
    const location = useLocation();

    return (
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
                const isActive = location.pathname === link.href ||
                    (link.name === 'About' && location.pathname.startsWith('/about')) ||
                    (link.name === 'Products' && location.pathname.startsWith('/products'));

                return (
                    <div key={link.name} className="relative group/link-container">
                        {link.name === 'Products' || link.name === 'About' ? (
                            <div
                                className={`relative flex items-center gap-1.5 cursor-pointer text-[10px] font-extrabold uppercase tracking-[0.25em] transition-colors py-2 leading-none ${isActive ? 'text-aureole-cyan' : 'text-aureole-slate hover:text-aureole-cyan'}`}
                                onMouseEnter={() => handleMouseEnter(link.name === 'About' ? 'about' : 'products')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    to={link.href}
                                    className="flex items-center gap-1.5 hover:text-aureole-cyan transition-colors"
                                >
                                    {link.name}
                                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${(link.name === 'About' ? aboutDropdownOpen : productsDropdownOpen) ? 'rotate-180' : ''}`} />
                                </Link>

                                <AnimatePresence>
                                    {link.name === 'About' && aboutDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            transition={{ duration: 0.2, ease: 'easeOut' }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-3 origin-top z-50"
                                            onMouseEnter={() => handleMouseEnter('about')}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-slate-100 p-4 rounded-2xl">
                                                <div className="flex flex-col gap-1">
                                                    {link.dropdown?.map((item: any) => (
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
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {link.name === 'Products' && (
                                    <MegaMenu
                                        isOpen={productsDropdownOpen}
                                        onClose={() => handleMouseEnter('products')} // Close on click
                                        onMouseEnter={() => handleMouseEnter('products')}
                                        onMouseLeave={handleMouseLeave}
                                    />
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
                                className={`text-[10px] font-extrabold uppercase tracking-[0.25em] transition-colors relative group/link py-2 flex items-center leading-none ${isActive ? 'text-aureole-cyan' : 'text-aureole-slate hover:text-aureole-cyan'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 h-[2px] bg-aureole-cyan transition-all ${isActive ? 'w-full' : 'w-0 group-hover/link:w-full'
                                    }`}></span>
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};

export default DesktopNav;
