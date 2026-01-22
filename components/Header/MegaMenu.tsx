
import React from 'react';
import { Link } from 'react-router-dom';
import { Thermometer, Activity, Box, ArrowRight } from 'lucide-react';
import { PRODUCT_CATALOG } from '@/data/products';
import { slugify } from '@/utils/urlUtils';

interface MegaMenuProps {
    isOpen: boolean;
    activeCategory: string;
    setActiveCategory: (id: string) => void;
    onClose: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
    isOpen,
    activeCategory,
    setActiveCategory,
    onClose,
    onMouseEnter,
    onMouseLeave
}) => {
    return (
        <div
            className={`absolute left-1/2 -translate-x-1/2 w-[780px] bg-white border border-slate-200 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-300 origin-top z-50 overflow-hidden ${isOpen ? 'opacity-100 translate-y-2 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}
            style={{ top: '100%' }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
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
                            onClick={onClose}
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
                                            onClick={onClose}
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
                <Link to="/products" className="text-aureole-cyan hover:gap-3 transition-all flex items-center gap-2" onClick={onClose}>
                    Explore All <ArrowRight size={10} />
                </Link>
            </div>
        </div>
    );
};

export default MegaMenu;
