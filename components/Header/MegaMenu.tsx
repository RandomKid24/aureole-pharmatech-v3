
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
                    className="absolute left-0 w-60 bg-white border border-slate-200/60 origin-top z-50 shadow-xl"
                    style={{ top: '100%' }}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <div className="py-1.5">
                        {categories.map((cat, index) => (
                            <motion.div key={cat.id} variants={itemVariants}>
                                <Link
                                    to={cat.href}
                                    onClick={onClose}
                                    className={`group flex items-center justify-between px-4 py-3 transition-all duration-200 hover:bg-slate-50/80 hover:pl-5 ${index !== categories.length - 1 ? 'border-b border-slate-100/50' : ''}`}
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
                            </motion.div>
                        ))}
                    </div>

                    <motion.div variants={itemVariants} className="border-t border-slate-100/50 py-1.5">
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
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MegaMenu;
