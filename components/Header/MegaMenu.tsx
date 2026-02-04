
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
            icon: <FlaskConical size={16} strokeWidth={1} />,
        },
        {
            id: 'tabletop',
            title: 'Table Top Instruments',
            href: '/products/table-top-instruments',
            icon: <Microscope size={16} strokeWidth={1} />,
        },
        {
            id: 'furniture',
            title: 'Laboratory Furniture',
            href: '/products/laboratory-furniture',
            icon: <Hammer size={16} strokeWidth={1} />,
        }
    ];

    return (
        <div
            className={`absolute left-0 w-60 bg-white border border-slate-200/60 transition-all duration-200 origin-top z-50 ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}`}
            style={{ top: '100%' }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="py-1.5">
                {categories.map((cat, index) => (
                    <Link
                        key={cat.id}
                        to={cat.href}
                        onClick={onClose}
                        className={`group flex items-center justify-between px-4 py-3 transition-all duration-200 hover:bg-slate-50/80 hover:pl-5 ${index !== categories.length - 1 ? 'border-b border-slate-100/50' : ''}`}
                        style={{
                            transitionDelay: isOpen ? `${index * 30}ms` : '0ms',
                            transform: isOpen ? 'translateX(0)' : 'translateX(-8px)',
                            opacity: isOpen ? 1 : 0
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 text-slate-400 group-hover:text-aureole-blue transition-all duration-200 group-hover:scale-110">
                                {cat.icon}
                            </div>
                            <span className="text-sm font-sans text-slate-600 group-hover:text-aureole-slate transition-colors duration-200">
                                {cat.title}
                            </span>
                        </div>
                        <ArrowRight
                            size={14}
                            strokeWidth={1.5}
                            className="text-slate-300 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5"
                        />
                    </Link>
                ))}
            </div>

            <div className="border-t border-slate-100/50 py-1.5">
                <Link
                    to="/products"
                    onClick={onClose}
                    className="group flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-sans text-slate-500 hover:text-aureole-blue transition-all duration-200"
                >
                    <span>View all products</span>
                    <ArrowRight
                        size={12}
                        strokeWidth={1.5}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                </Link>
            </div>
        </div>
    );
};

export default MegaMenu;
