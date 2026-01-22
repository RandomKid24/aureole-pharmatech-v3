
import React from 'react';

const ProductsHero: React.FC = () => {
    return (
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
    );
};

export default ProductsHero;
