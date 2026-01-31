
import React, { useEffect } from 'react';
import { PRODUCT_DETAILS } from '@/data/products';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { slugify } from '@/utils/urlUtils';

const FURNITURE_PRODUCTS = [
    "C-Frame System",
    "H-Frame System",
    "Plinth & Pedestal System",
    "Laboratory Worktops",
    "Fume Cupboards",
    "Laboratory Fittings",
    "Hardware",
    "Storage Cabinets",
    "Lab Accessories"
];

const FurnitureProductsGrid: React.FC = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-24 relative">

                <div className="grid gap-24 lg:gap-32">
                    {FURNITURE_PRODUCTS.map((pName, idx) => {
                        const product = PRODUCT_DETAILS[pName];
                        if (!product) return null;

                        return (
                            <div
                                key={pName}
                                id={slugify(pName)}
                                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center group scroll-mt-32`}
                            >
                                <div className="w-full lg:w-5/12">
                                    <div className="relative aspect-[3/2] max-h-[400px] bg-slate-50/50 overflow-hidden transition-all duration-500 border border-slate-100 p-6 flex items-center justify-center rounded-sm">
                                        <img
                                            src={product.image}
                                            alt={pName}
                                            className="max-h-[85%] max-w-[85%] object-contain filter z-10 drop-shadow-sm"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/f8fafc/001529?text=' + encodeURIComponent(pName);
                                            }}
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-[#001529] border border-slate-100 shadow-sm z-20">
                                            0{idx + 1} / MODEL
                                        </div>

                                        {/* Decorative watermark */}
                                        <div className="absolute -bottom-4 -right-4 opacity-[0.02] select-none pointer-events-none z-0">
                                            <span className="text-[100px] font-black text-aureole-slate uppercase tracking-tighter leading-none">
                                                {pName.split(' ')[0]}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-7/12 space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="w-6 h-[1px] bg-aureole-cyan"></span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-aureole-cyan">Product Specifications</span>
                                        </div>
                                        <h3 className="text-3xl lg:text-[60px] font-[950] font-heading text-aureole-slate uppercase tracking-tighter leading-none mb-8">
                                            {pName.split(' ').slice(0, -1).join(' ')} <span className="text-aureole-blue">{pName.split(' ').slice(-1)}</span>
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-lg pt-4">
                                            {product.description}
                                        </p>
                                    </div>

                                    {product.keyFeatures && product.keyFeatures.length > 0 && (
                                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 py-8 border-y border-slate-100">
                                            {product.keyFeatures.slice(0, 8).map((feature, fIdx) => (
                                                <div key={fIdx} className="flex items-center gap-3 group/feat">
                                                    <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center group-hover/feat:bg-aureole-cyan/10 transition-colors">
                                                        <CheckCircle2 size={12} className="text-aureole-cyan shrink-0" />
                                                    </div>
                                                    <span className="text-[10px] font-black font-heading uppercase tracking-wider text-slate-500 group-hover/feat:text-aureole-slate transition-colors">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center gap-6">
                                        <button className="group relative px-10 py-5 bg-aureole-blue text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 overflow-hidden transition-all duration-500 shadow-xl hover:shadow-aureole-cyan/20 rounded-sm">
                                            <div className="absolute inset-0 w-0 bg-aureole-cyan transition-all duration-500 ease-out group-hover:w-full"></div>
                                            <span className="relative z-10 flex items-center gap-3">
                                                Enquire Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FurnitureProductsGrid;
