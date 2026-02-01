
import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Microscope, Hammer, ArrowRight } from 'lucide-react';

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
    isOpen,
    onClose,
    onMouseEnter,
    onMouseLeave
}) => {
    const categories = [
        {
            id: 'stability',
            title: 'Stability Chambers',
            href: '/products/stability-chambers',
            icon: <FlaskConical size={18} />,
            color: 'text-aureole-blue',
            bg: 'bg-aureole-blue/5'
        },
        {
            id: 'tabletop',
            title: 'Table Top Instruments',
            href: '/products/table-top-instruments',
            icon: <Microscope size={18} />,
            color: 'text-aureole-cyan',
            bg: 'bg-aureole-cyan/5'
        },
        {
            id: 'furniture',
            title: 'Laboratory Furniture',
            href: '/products/laboratory-furniture',
            icon: <Hammer size={18} />,
            color: 'text-slate-500',
            bg: 'bg-slate-100'
        }
    ];

    return (
        <div
            className={`absolute left-0 w-[280px] bg-white shadow-2xl border border-slate-100 p-3 transition-all duration-300 origin-top z-50 rounded-xl overflow-hidden ${isOpen ? 'opacity-100 translate-y-2 visible' : 'opacity-0 translate-y-4 invisible pointer-events-none'}`}
            style={{ top: '100%' }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex flex-col gap-1.5">
                <div className="px-3 py-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Our Categories</span>
                </div>
                {categories.map((cat) => (
                    <Link
                        key={cat.id}
                        to={cat.href}
                        onClick={onClose}
                        className="group flex items-center gap-4 p-3.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                    >
                        <div className={`p-2.5 rounded-lg transition-all group-hover:scale-110 ${cat.bg} ${cat.color}`}>
                            {cat.icon}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[11px] font-black uppercase tracking-wider text-aureole-slate group-hover:text-aureole-cyan transition-colors">
                                {cat.title}
                            </span>
                        </div>
                    </Link>
                ))}

                <div className="mt-2 pt-2 border-t border-slate-50">
                    <Link
                        to="/products"
                        onClick={onClose}
                        className="flex items-center justify-center gap-2 p-3 text-[9px] font-black uppercase tracking-widest text-aureole-cyan hover:bg-aureole-cyan hover:text-white rounded-lg transition-all"
                    >
                        View All Products <ArrowRight size={12} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;
