
import React from 'react';

interface CategoryHeroProps {
    title: string;
    subtitle: string;
    description: string;
    watermark: string;
}

const CategoryHero: React.FC<CategoryHeroProps> = ({ title, subtitle, description, watermark }) => {
    return (
        <section className="relative py-16 sm:py-32 overflow-hidden border-b border-slate-100 bg-white">
            <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none">
                <span className="text-[60px] md:text-[100px] lg:text-[150px] font-black font-heading text-[#001529] tracking-tighter leading-none uppercase">{watermark}</span>
            </div>

            <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center lg:text-left">
                <div className="max-w-4xl mx-auto lg:mx-0">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 sm:mb-10">
                        <span className="w-8 sm:w-12 h-[2px] bg-aureole-blue"></span>
                        <h2 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">ENVIRONMENTAL CONTROL</h2>
                    </div>
                    <h1 className="text-4xl sm:text-7xl lg:text-[100px] font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-[0.9] mb-8 sm:mb-12">
                        {title} <br /> <span className="text-aureole-cyan uppercase tracking-normal">{subtitle}.</span>
                    </h1>
                    <p className="text-slate-500 text-[15px] font-medium tracking-tight leading-relaxed max-w-xl mx-auto lg:mx-0">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CategoryHero;
