
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface DesktopNavProps {
    navLinks: any[];
    aboutDropdownOpen: boolean;
    productsDropdownOpen: boolean;
    handleMouseEnter: (menu: 'about' | 'products') => void;
    handleMouseLeave: () => void;
    handleNavClick: (href: string) => void;
    MegaMenu: React.ReactNode;
}

const DesktopNav: React.FC<DesktopNavProps> = ({
    navLinks,
    aboutDropdownOpen,
    productsDropdownOpen,
    handleMouseEnter,
    handleMouseLeave,
    handleNavClick,
    MegaMenu
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
                                className={`flex items-center gap-1.5 cursor-pointer text-[10px] font-extrabold uppercase tracking-[0.25em] transition-colors py-4 leading-none ${isActive ? 'text-aureole-cyan' : 'text-aureole-slate hover:text-aureole-cyan'
                                    }`}
                                onMouseEnter={() => handleMouseEnter(link.name === 'About' ? 'about' : 'products')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link to={link.href || '#'} className="hover:text-aureole-cyan transition-colors">{link.name}</Link>
                                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${(link.name === 'About' ? aboutDropdownOpen : productsDropdownOpen) ? 'rotate-180' : ''}`} />

                                {link.name === 'About' && (
                                    <div
                                        className={`absolute top-full left-0 w-64 bg-white shadow-2xl border border-slate-100 p-4 transition-all duration-300 ${aboutDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                                        onMouseEnter={() => handleMouseEnter('about')}
                                        onMouseLeave={handleMouseLeave}
                                    >
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
                                )}

                                {link.name === 'Products' && MegaMenu}
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
                                className={`text-[10px] font-extrabold uppercase tracking-[0.25em] transition-colors relative group/link py-4 flex items-center leading-none ${isActive ? 'text-aureole-cyan' : 'text-aureole-slate hover:text-aureole-cyan'
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
