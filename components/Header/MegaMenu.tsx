
import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Microscope, Hammer, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
            title: 'Stability Testing Equipments',
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

    const menuVariants = {
        hidden: { opacity: 0, y: 8 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.2, ease: 'easeOut', staggerChildren: 0.04 }
        },
        exit: { opacity: 0, y: 8, transition: { duration: 0.15, ease: 'easeIn' } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -6 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.18, ease: 'easeOut' } }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[280px] pt-3 origin-top z-50"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <div className="bg-white border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden text-left">
                        <div className="flex flex-col">
                            {categories.map((cat, index) => (
                                <motion.div key={cat.id} variants={itemVariants} className="bg-white">
                                    <Link
                                        to={cat.href}
                                        onClick={onClose}
                                        className={`group flex items-center gap-4 px-5 py-4 transition-all duration-300 hover:bg-slate-50 ${index !== categories.length - 1 ? 'border-b border-slate-50' : ''}`}
                                    >
                                        <div className="flex-shrink-0 text-slate-400 group-hover:text-aureole-blue transition-all duration-300 group-hover:scale-110">
                                            {cat.icon}
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-aureole-slate group-hover:text-aureole-blue transition-colors">
                                            {cat.title}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={itemVariants} className="bg-slate-50 border-t border-slate-100">
                            <Link
                                to="/products"
                                onClick={onClose}
                                className="group flex items-center justify-center gap-2 w-full py-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-aureole-blue transition-all duration-300"
                            >
                                <span>View All</span>
                                <ArrowRight
                                    size={10}
                                    strokeWidth={3}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MegaMenu;
