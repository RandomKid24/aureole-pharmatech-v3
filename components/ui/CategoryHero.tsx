
import React, { ReactNode } from 'react';

interface CategoryHeroProps {
    title: ReactNode;
    subtitle: ReactNode;
    description?: string;
    watermark: string;
    image?: string;
    showAccent?: boolean;
}

const CategoryHero: React.FC<CategoryHeroProps> = ({ title, subtitle, description, watermark, image, showAccent = true }) => {
    return (
        <section className="relative py-16 lg:py-28 overflow-hidden border-b border-slate-100 bg-white group">
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#0079ac_1px,transparent_1px)] [background-size:40px_40px]"></div>

            {/* Watermark - Matches ProductsHero Style */}
            {/* Watermark - Adjusted for full visibility */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000 pointer-events-none select-none hidden lg:block overflow-visible w-full text-right pr-10">
                <span className="text-[10vw] font-black text-aureole-slate group-hover:text-aureole-cyan tracking-tighter leading-none uppercase transition-colors duration-1000 whitespace-nowrap">{watermark}</span>
            </div>

            {/* Imprinted Effect Sketch in Background - Integrated yet compact */}
            {image && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[90%] opacity-[0.8] pointer-events-none select-none z-0 overflow-visible hidden lg:block">
                    <img
                        src={image}
                        alt=""
                        className="w-full h-full object-contain object-center scale-100"
                    />
                </div>
            )}

            <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center lg:text-left">
                <div className="max-w-4xl mx-auto lg:mx-0">
                    {showAccent && (
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 sm:mb-8">
                            <span className="w-8 sm:w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">ENVIRONMENTAL CONTROL</h2>
                        </div>
                    )}

                    {/* Balanced Prominent Title */}
                    <h1 className="text-3xl sm:text-5xl lg:text-[72px] font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-[0.9] mb-6 sm:mb-10">
                        {title} <br /> <span className="uppercase tracking-normal">{subtitle}.</span>
                    </h1>

                    {description && (
                        <p className="text-slate-500 text-[14px] sm:text-lg font-medium tracking-tight leading-relaxed max-w-xl mx-auto lg:mx-0">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CategoryHero;
