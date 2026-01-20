
import React, { useEffect } from 'react';
import { Layers, Droplets, Activity, Award, Box, Wind, Construction, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/urlUtils';
import { PRODUCT_CATALOG } from '../data/products';

const Products: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getIcon = (subtypeId: string) => {
        switch (subtypeId) {
            case 'walk-in': return <Layers size={14} />;
            case 'standalone': return <Box size={14} />;
            case 'ultrasonic': return <Activity size={14} />;
            case 'waterbaths': return <Droplets size={14} />;
            case 'air-sampler': return <Wind size={14} />;
            case 'ss-accessories': return <Award size={14} />;
            case 'furniture-list': return <Construction size={14} />;
            default: return <Activity size={14} />;
        }
    };

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Standard Impactful Hero Section */}
            <section className="relative py-16 sm:py-32 overflow-hidden border-b border-slate-100 bg-white">
                <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none hidden lg:block">
                    <span className="text-[60px] md:text-[100px] lg:text-[150px] font-black font-heading text-[#001529] tracking-tighter leading-none uppercase">PRODUCTS</span>
                </div>

                <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center lg:text-left">
                    <div className="max-w-4xl mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 sm:mb-10">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">PRODUCT CATALOG</h2>
                        </div>
                        <h1 className="text-4xl sm:text-7xl lg:text-[100px] font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-[0.9] mb-8 sm:mb-12">
                            OUR <br /> <span className="text-aureole-cyan uppercase tracking-normal">COLLECTION.</span>
                        </h1>
                        <p className="text-slate-500 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl tracking-tight">
                            Engineering precision for pharmaceutical excellence and global regulatory compliance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Compressed 3-Column Catalog */}
            <section className="py-10 lg:py-16 bg-slate-50/50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-3 gap-6 xl:gap-8 items-start">
                        {PRODUCT_CATALOG.map((category) => (
                            <div key={category.id} className="bg-white border border-slate-100 p-6 lg:p-8 shadow-sm flex flex-col hover:shadow-lg transition-all duration-500">
                                {/* Tight Category Header */}
                                <div className="mb-6 pb-4 border-b border-slate-50">
                                    <h2 className="text-xl lg:text-2xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none mb-2">
                                        {category.title.split(' ').map((word, i) => (
                                            <span key={i} className={i === 0 ? 'text-[#001529]' : 'text-aureole-cyan'}>
                                                {word}{' '}
                                            </span>
                                        ))}
                                    </h2>
                                    <p className="text-[11px] font-medium text-slate-400 tracking-tight leading-tight italic">
                                        {category.description}
                                    </p>
                                </div>

                                {/* High-Density Product List */}
                                <div className="space-y-6">
                                    {category.subTypes.map((sub) => (
                                        <div key={sub.id} className="space-y-2">
                                            <div className="flex items-center gap-3 opacity-60">
                                                <div className="text-aureole-blue">
                                                    {getIcon(sub.id)}
                                                </div>
                                                <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-50 pb-0.5 w-full">
                                                    {sub.name}
                                                </h4>
                                            </div>

                                            <div className="flex flex-col">
                                                {sub.products.map((p, pIdx) => (
                                                    <Link
                                                        key={pIdx}
                                                        to={`/products/${slugify(p)}`}
                                                        className="flex items-center justify-between group py-1.5 px-2 -mx-2 hover:bg-slate-50 transition-all rounded-px"
                                                    >
                                                        <span className="text-[12px] font-bold text-slate-600 group-hover:text-[#001529] transition-colors tracking-tight">
                                                            {p}
                                                        </span>
                                                        <ChevronRight size={12} className="text-aureole-cyan opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Small Action Link */}
                                <div className="mt-8 pt-6 border-t border-slate-50">
                                    <Link
                                        to={`/products/${category.id === 'stability' ? 'stability-chambers' : category.id === 'tabletop' ? 'table-top-instruments' : 'laboratory-furniture'}`}
                                        className="flex items-center gap-3 group/btn text-[9px] font-black uppercase tracking-[0.2em] text-aureole-blue hover:text-aureole-cyan transition-colors"
                                    >
                                        Specifications <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
