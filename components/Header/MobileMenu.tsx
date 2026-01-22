
import React from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ArrowRight } from 'lucide-react';
import { PRODUCT_CATALOG } from '@/data/products';
import { slugify } from '@/utils/urlUtils';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navLinks: any[];
    mobileExpandedCat: string | null;
    toggleMobileCat: (catId: string) => void;
    handleNavClick: (href: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
    isOpen,
    onClose,
    navLinks,
    mobileExpandedCat,
    toggleMobileCat,
    handleNavClick
}) => {
    return (
        <div
            className={`fixed inset-0 bg-white z-[60] p-6 flex flex-col transition-all duration-500 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
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
                    onClick={onClose}
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

                                            <div className={`overflow-hidden transition-all duration-300 ${mobileExpandedCat === cat.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <Link
                                                    to={cat.id === 'stability' ? '/products/stability-chambers' : cat.id === 'tabletop' ? '/products/table-top-instruments' : '/products/laboratory-furniture'}
                                                    className="block text-[10px] font-bold uppercase tracking-widest text-aureole-blue mb-4 hover:text-aureole-cyan"
                                                    onClick={onClose}
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
                                                                        onClick={onClose}
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
                                    {link.dropdown?.map((item: any) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="flex items-center gap-3 text-lg font-black text-aureole-slate uppercase tracking-tighter hover:text-aureole-cyan transition-colors"
                                            onClick={onClose}
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
                                className={`text-2xl font-black text-aureole-slate uppercase tracking-tighter border-b border-slate-50 pb-4 transition-all duration-500`}
                                onClick={(e) => {
                                    onClose();
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
    );
};

export default MobileMenu;
