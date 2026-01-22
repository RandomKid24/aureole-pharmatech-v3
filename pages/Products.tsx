import React, { useEffect } from 'react';
import { Box, ChevronRight, Settings, FlaskConical, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/urlUtils';
import { PRODUCT_CATALOG, PRODUCT_DETAILS } from '../data/products';

const Products: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const ProductMarquee = ({ pNames, animationClass }: { pNames: string[], animationClass: string }) => {
        const displayProducts = [...pNames, ...pNames, ...pNames];

        return (
            <div className="flex overflow-hidden select-none py-10 bg-white border-y border-slate-200 group relative">
                <div className="absolute inset-y-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10 pointer-events-none"></div>

                <div className={`flex items-center gap-6 whitespace-nowrap ${animationClass} group-hover:[animation-play-state:paused]`}>
                    {displayProducts.map((pName, idx) => {
                        const productData = PRODUCT_DETAILS[pName];
                        const productImage = productData?.image || (productData?.images && productData.images[0]);

                        return (
                            <Link
                                key={idx}
                                to={`/products/${slugify(pName)}`}
                                className="flex items-center gap-6 p-6 bg-white border border-slate-200 hover:border-aureole-cyan hover:shadow-xl transition-all duration-300 w-[280px] sm:w-[400px] flex-shrink-0 group/card"
                            >
                                <div className="w-20 h-20 sm:w-28 sm:h-28 flex-shrink-0 bg-white rounded-sm overflow-hidden p-2 border border-slate-100 group-hover/card:border-aureole-cyan/30 group-hover/card:scale-105 transition-all duration-300">
                                    <img
                                        src={productImage}
                                        alt={pName}
                                        className="w-full h-full object-contain mix-blend-multiply"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex flex-col flex-grow min-w-0">
                                    <span className="text-[12px] sm:text-[14px] font-black tracking-[0.05em] text-slate-400 group-hover/card:text-aureole-blue uppercase transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                                        {pName}
                                    </span>
                                    <div className="mt-4 flex items-center gap-2 opacity-100 transition-opacity">
                                        <div className="w-1 h-1 bg-aureole-cyan rounded-full"></div>
                                        <span className="text-[10px] font-bold text-aureole-blue">View Technical Sheet</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* HERO - Ultra Compact */}
            <section className="relative py-16 sm:py-20 overflow-hidden border-b border-slate-100 bg-white">
                <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#0079ac_1px,transparent_1px)] [background-size:40px_40px]"></div>

                <div className="absolute top-20 right-20 opacity-[0.02] pointer-events-none select-none hidden lg:block">
                    <span className="text-[150px] font-black font-heading text-[#001529] tracking-tighter leading-none uppercase italic">AUREOLE</span>
                </div>

                <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center lg:text-left">
                    <div className="max-w-4xl mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">PRODUCT CATALOG</h2>
                        </div>
                        <h1 className="text-4xl sm:text-7xl lg:text-[100px] font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-[0.85] mb-6 sm:mb-8">
                            OUR <br /> <span className="text-aureole-cyan uppercase tracking-normal">COLLECTION.</span>
                        </h1>
                        <p className="text-slate-500 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl tracking-tight">
                            Engineering precision for pharmaceutical excellence and global regulatory compliance since 1996.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTIONS - Extreme Space Optimization & No Small Labels */}
            <section className="py-12 bg-[#f8fafc] space-y-16 relative">
                {PRODUCT_CATALOG.map((category, catIdx) => {
                    const productsWithImages = category.subTypes
                        .flatMap(sub => sub.products)
                        .filter(pName => {
                            const data = PRODUCT_DETAILS[pName];
                            return data?.image || (data?.images && data.images.length > 0);
                        });

                    const mainLink = `/products/${category.id === 'stability' ? 'stability-chambers' : category.id === 'tabletop' ? 'table-top-instruments' : 'laboratory-furniture'}`;

                    if (productsWithImages.length === 0) return null;

                    const animationClass = catIdx % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse';

                    return (
                        <div key={category.id} className="relative group/section">
                            <div className="container mx-auto px-6 lg:px-24 relative z-10">
                                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-6">
                                    <div className="max-w-3xl">
                                        {/* REMOVED: Small 'COLLECTION 0X' label as requested */}
                                        <h3 className="text-4xl lg:text-7xl font-[950] font-heading text-aureole-slate uppercase tracking-tighter leading-none mb-6">
                                            {category.title.split(' ').slice(0, -1).join(' ')} <br />
                                            <span className="text-aureole-blue">{category.title.split(' ').pop()}</span>
                                        </h3>
                                        <p className="text-slate-500 font-medium text-[14px] sm:text-[15px] tracking-tight max-w-2xl leading-relaxed">
                                            {category.description}
                                        </p>
                                    </div>

                                    <Link
                                        to={mainLink}
                                        className="group relative inline-flex items-center gap-8 px-12 py-5 bg-aureole-blue text-white overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-aureole-cyan/30"
                                    >
                                        <div className="absolute inset-0 w-0 bg-aureole-cyan transition-all duration-500 ease-out group-hover:w-full"></div>
                                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>

                                        <div className="relative z-10 flex items-center gap-4">
                                            <span className="text-[14px] font-black uppercase tracking-[0.3em] group-hover:tracking-[0.45em] transition-all duration-500">
                                                VIEW ALL
                                            </span>
                                            <div className="overflow-hidden w-6 h-6 flex items-center justify-center relative">
                                                <ArrowRight size={20} className="absolute group-hover:translate-x-8 transition-all duration-500" />
                                                <ArrowRight size={20} className="-translate-x-8 group-hover:translate-x-0 transition-all duration-500 delay-100" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="relative py-8 bg-slate-50/50 border-y border-slate-100">
                                <ProductMarquee
                                    pNames={productsWithImages}
                                    animationClass={animationClass}
                                />
                            </div>

                            {/* REMOVED: Subtype names row at the bottom as requested */}
                        </div>
                    );
                })}
            </section>

            {/* CONTACT FOOTER */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6 lg:px-24 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <span className="w-12 h-[1px] bg-aureole-blue"></span>
                            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-blue">CONNECT</h2>
                        </div>
                        <h3 className="text-4xl lg:text-7xl font-[950] font-heading text-aureole-slate uppercase tracking-tighter leading-tight mb-12">
                            A LEGACY OF <br /> <span className="text-aureole-cyan uppercase tracking-normal">ENGINEERING.</span>
                        </h3>

                        <Link
                            to="/about/plants"
                            className="group relative inline-flex items-center gap-6 px-14 py-5 bg-aureole-blue text-white overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-aureole-cyan/30"
                        >
                            <div className="absolute inset-0 w-0 bg-aureole-cyan transition-all duration-500 ease-out group-hover:w-full"></div>
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>

                            <div className="relative z-10 flex items-center gap-4">
                                <span className="text-[14px] font-[900] uppercase tracking-[0.4em] group-hover:tracking-[0.5em] transition-all duration-500">
                                    CONTACT US
                                </span>
                                <div className="relative">
                                    <ArrowRight size={20} className="transition-transform duration-500 group-hover:translate-x-2" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
