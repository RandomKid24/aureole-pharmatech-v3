
import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Microscope, Hammer, ArrowRight } from 'lucide-react';
import { PRODUCT_CATALOG, PRODUCT_DETAILS } from '@/data/products';
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
            className={`absolute left-1/2 -translate-x-1/2 w-[800px] bg-white border border-slate-200 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-300 origin-top z-50 overflow-hidden ${isOpen ? 'opacity-100 translate-y-2 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}
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
                            className={`flex-1 flex items-center justify-center gap-3 py-4 transition-all relative group border-t-2 ${activeCategory === cat.id ? 'bg-white border-t-aureole-blue border-x border-slate-200 z-10 -mb-[1px]' : 'hover:bg-white/50 border-t-transparent border-x border-transparent opacity-60'}`}
                        >
                            <div className={`transition-colors ${activeCategory === cat.id ? 'text-aureole-cyan' : 'text-slate-400 group-hover:text-slate-500'}`}>
                                {cat.id === 'stability' ? <FlaskConical size={14} /> : cat.id === 'tabletop' ? <Microscope size={14} /> : <Hammer size={14} />}
                            </div>
                            <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${activeCategory === cat.id ? 'text-aureole-slate' : 'text-slate-400 group-hover:text-slate-500'}`}>
                                {cat.title}
                            </span>
                        </Link>
                    );
                })}
            </div>

            {/* Horizontal Content Area */}
            <div className="p-10 h-[210px] relative">
                {PRODUCT_CATALOG.map((cat) => (
                    <div
                        key={cat.id}
                        className={`absolute inset-0 p-10 transition-all duration-300 ${activeCategory === cat.id ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}
                    >
                        <div className="w-full">
                            <div className="grid grid-cols-3 gap-x-12 gap-y-4">
                                {cat.subTypes.map((sub) => (
                                    <React.Fragment key={sub.id}>
                                        {sub.products.map((pName) => {
                                            const linkTarget = cat.id === 'furniture' ? `/products/laboratory-furniture#${slugify(pName)}` : `/products/${slugify(pName)}`;
                                            return (
                                                <Link
                                                    key={pName}
                                                    to={linkTarget}
                                                    className="text-[11px] font-bold text-slate-500 hover:text-aureole-blue transition-all uppercase tracking-wide flex items-center gap-2.5 group/item truncate"
                                                    title={pName}
                                                    onClick={onClose}
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-aureole-cyan transition-colors flex-shrink-0" />
                                                    <span className="truncate">{pName}</span>
                                                </Link>
                                            );
                                        })}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Ultra-Slim Footer Bar */}
            <div className="bg-slate-50 border-t border-slate-100 px-8 py-3 flex justify-end items-center text-[9px] font-black uppercase tracking-widest text-slate-400">
                <Link
                    to={activeCategory === 'stability' ? '/products/stability-chambers' : activeCategory === 'tabletop' ? '/products/table-top-instruments' : '/products/laboratory-furniture'}
                    className="text-aureole-cyan hover:gap-3 transition-all flex items-center gap-2"
                    onClick={() => {
                        onClose();
                        window.scrollTo(0, 0);
                    }}
                >
                    Explore all {PRODUCT_CATALOG.find(c => c.id === activeCategory)?.title.toLowerCase()} <ArrowRight size={10} />
                </Link>
            </div>
        </div>
    );
};

export default MegaMenu;
