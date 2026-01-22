
import React from 'react';

const ProductsHero: React.FC = () => {
    return (
        <section className="relative py-16 sm:py-20 overflow-hidden border-b border-slate-100 bg-white group">
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#0079ac_1px,transparent_1px)] [background-size:40px_40px]"></div>

            <div className="absolute top-10 right-10 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000 pointer-events-none select-none hidden lg:block">
                <span className="text-[180px] lg:text-[250px] font-black font-heading text-[#001529] group-hover:text-aureole-cyan tracking-tighter leading-none uppercase transition-colors duration-1000">AUREOLE</span>
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
