
import React from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ArrowRight } from 'lucide-react';
import { PRODUCT_CATALOG } from '@/data/products';
import { slugify } from '@/utils/urlUtils';
import { motion, AnimatePresence } from 'framer-motion';

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
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed inset-0 bg-white z-[60] p-6 flex flex-col"
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

                    <motion.div 
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={{
                            open: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                            closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                        }}
                        className="flex flex-col gap-6 overflow-y-auto pb-20 custom-scrollbar"
                    >
                        {navLinks.map((link, idx) => (
                            <motion.div 
                                key={link.name}
                                variants={{
                                    open: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } },
                                    closed: { y: 20, opacity: 0, transition: { duration: 0.2 } }
                                }}
                                className="flex flex-col"
                            >
                        {link.name === 'Products' ? (
                            <div className="flex flex-col gap-4">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2 border-b border-slate-100 pb-2">{link.name}</span>
                                <div className="pl-4 flex flex-col gap-4">
                                    {PRODUCT_CATALOG.map((cat) => (
                                        <Link
                                            key={cat.id}
                                            to={cat.id === 'stability' ? '/products/stability-chambers' : cat.id === 'tabletop' ? '/products/table-top-instruments' : '/products/laboratory-furniture'}
                                            className="text-lg font-black text-aureole-slate uppercase tracking-tighter hover:text-aureole-cyan transition-colors"
                                            onClick={() => {
                                                onClose();
                                                window.scrollTo(0, 0);
                                            }}
                                        >
                                            {cat.title}
                                        </Link>
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
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
