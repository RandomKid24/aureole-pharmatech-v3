
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Layers } from 'lucide-react';
import { slugify } from '../utils/urlUtils';
import { PRODUCT_CATALOG } from '../data/products';

const LaboratoryFurniture: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const furnitureCategory = PRODUCT_CATALOG.find(cat => cat.id === 'furniture');

    if (!furnitureCategory) return null;

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-32 overflow-hidden border-b border-slate-100 bg-white">
                <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none">
                    <span className="text-[60px] md:text-[100px] lg:text-[150px] font-black font-heading text-[#001529] tracking-tighter leading-none uppercase">FURNITURE</span>
                </div>

                <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center lg:text-left">
                    <div className="max-w-4xl mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 sm:mb-10">
                            <span className="w-8 sm:w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">MODULAR SYSTEMS</h2>
                        </div>
                        <h1 className="text-4xl sm:text-7xl lg:text-[100px] font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-[0.9] mb-8 sm:mb-12">
                            LABORATORY <br /> <span className="text-aureole-cyan uppercase tracking-normal">Furniture.</span>
                        </h1>
                        <p className="text-slate-500 text-[14px] sm:text-[15px] font-bold tracking-tight leading-relaxed max-w-xl mx-auto lg:mx-0">
                            {furnitureCategory.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Product List */}
            <section className="py-16 sm:py-24 bg-aureole-soft border-t border-slate-100">
                <div className="container mx-auto px-6 lg:px-24">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-[2px] bg-aureole-blue"></span>
                                <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">PRODUCT RANGE</h2>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none">
                                AVAILABLE <span className="text-aureole-cyan uppercase tracking-normal">Models.</span>
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-16">
                        {furnitureCategory.subTypes.map((sub, sIdx) => (
                            <div key={sIdx} className="bg-white border border-slate-100 p-8 lg:p-12">
                                <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-100">
                                    <div className="w-2 h-2 rounded-full bg-aureole-blue"></div>
                                    <h3 className="text-2xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none">
                                        {sub.name}
                                    </h3>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {sub.products.map((pName, pIdx) => (
                                        <Link
                                            key={pIdx}
                                            to={`/products/${slugify(pName)}`}
                                            className="group flex flex-col gap-6 p-6 border border-slate-100 transition-all duration-300"
                                        >
                                            <div className="w-10 h-10 flex items-center justify-center border border-slate-100 bg-white text-slate-400 transition-all duration-300">
                                                {sIdx === 0 ? <Box size={18} /> : <Layers size={18} />}
                                            </div>
                                            <div className="space-y-3">
                                                <span className="text-[11px] font-[900] text-[#001529] uppercase tracking-widest transition-colors leading-relaxed block">
                                                    {pName}
                                                </span>
                                                <div className="flex items-center gap-2 text-aureole-blue">
                                                    <span className="text-[8px] font-black uppercase tracking-[0.2em]">View Details</span>
                                                    <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LaboratoryFurniture;
