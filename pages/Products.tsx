
import React, { useEffect } from 'react';
import { ChevronRight, Layers, Thermometer, Droplets, Zap, Ruler, Beaker, Shield, Activity, Award, Box, Wind, FlaskConical, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/urlUtils';
import { PRODUCT_CATALOG } from '../data/products';

const Products: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const animatedSections = document.querySelectorAll('section');
        animatedSections.forEach(sec => {
            sec.classList.add('reveal');
            observer.observe(sec);
        });

        return () => observer.disconnect();
    }, []);

    const complianceStandards = [
        {
            title: "ICH Guidelines",
            desc: "Quality Standards"
        },
        {
            title: "CE Approved",
            desc: "Safety Standards"
        },
        {
            title: "21 CFR Part 11",
            desc: "Data Integrity"
        }
    ];

    const getIcon = (subtypeId: string) => {
        switch (subtypeId) {
            case 'walk-in-units': return <Layers className="w-4 h-4 text-aureole-blue" />;
            case 'standalone-units': return <Box className="w-4 h-4 text-aureole-blue" />;
            case 'ultrasonic': return <Activity className="w-4 h-4 text-aureole-blue" />;
            case 'waterbaths': return <Droplets className="w-4 h-4 text-aureole-blue" />;
            case 'air-sampler': return <Wind className="w-4 h-4 text-aureole-blue" />;
            case 'ss-accessories': return <Award className="w-4 h-4 text-aureole-blue" />;
            case 'furniture-systems': return <Construction className="w-4 h-4 text-aureole-blue" />;
            case 'safety-storage': return <Shield className="w-4 h-4 text-aureole-blue" />;
            default: return <Activity className="w-4 h-4 text-aureole-blue" />;
        }
    };

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-24 sm:py-32 overflow-hidden border-b border-slate-100 bg-white">
                <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none">
                    <span className="text-[100px] lg:text-[150px] font-black text-[#001529] tracking-tighter leading-none uppercase">PRODUCTS</span>
                </div>

                <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center sm:text-left">
                    <div className="max-w-4xl">
                        <div className="flex items-center justify-center sm:justify-start gap-4 mb-10">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">PRODUCT CATALOG</h2>
                        </div>
                        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-[950] text-[#001529] uppercase tracking-tighter leading-[0.8] mb-12">
                            OUR <br /> <span className="text-aureole-cyan">COLLECTION.</span>
                        </h1>
                        <p className="text-slate-500 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] leading-relaxed max-w-lg mx-auto sm:mx-0">
                            Engineering precision for pharmaceutical excellence and global regulatory compliance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Product Catalog Hierarchy */}
            <section className="py-12 lg:py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-24">
                    <div className="space-y-16">
                        {PRODUCT_CATALOG.map((category, catIdx) => (
                            <div key={category.id} className="group/cat border-t border-slate-100 pt-12 first:border-0 first:pt-0">
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-10">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-black text-aureole-cyan uppercase tracking-[0.3em]">0{catIdx + 1}</span>
                                        <h2 className="text-2xl lg:text-4xl font-[950] text-[#001529] uppercase tracking-tighter leading-none group-hover/cat:translate-x-1 transition-transform duration-500">
                                            {category.title}
                                        </h2>
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest max-w-sm">
                                        {category.description}
                                    </p>
                                </div>

                                <div className={`grid grid-cols-1 ${category.subTypes.length > 1 ? 'md:grid-cols-2 xl:grid-cols-4' : 'grid-cols-1'} gap-6`}>
                                    {category.subTypes.map((subType) => {
                                        // Hide title if it's the exact same as the main category or a generic holder
                                        const isRedundant = subType.name.toLowerCase() === category.title.toLowerCase();

                                        return (
                                            <div key={subType.id} className={`bg-slate-50/50 p-6 border border-slate-100 transition-all duration-300 group/sub flex flex-col hover:bg-white ${category.subTypes.length === 1 ? 'col-span-full' : ''}`}>
                                                {!isRedundant && (
                                                    <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
                                                        <div className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 text-aureole-blue">
                                                            {getIcon(subType.id)}
                                                        </div>
                                                        <h4 className="text-[14px] font-[950] text-[#001529] uppercase tracking-tight">
                                                            {subType.name}
                                                        </h4>
                                                    </div>
                                                )}

                                                <div className={`grid ${category.subTypes.length === 1 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-x-8 gap-y-2`}>
                                                    {subType.products.map((productName, pIdx) => (
                                                        <Link
                                                            key={pIdx}
                                                            to={`/products/${slugify(productName)}`}
                                                            className="flex items-center group/item py-1"
                                                        >
                                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-aureole-cyan mr-3 transition-colors"></div>
                                                            <span className="text-[11px] font-bold text-slate-500 hover:text-aureole-cyan uppercase tracking-wider transition-colors truncate">
                                                                {productName}
                                                            </span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
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
