
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
        <section className="relative min-h-[60vh] flex items-center bg-transparent pt-32 pb-16 lg:pt-40 lg:pb-24">
            {/* Background Image - Sketch / Overlay */}
            {image && (
                <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] md:w-[800px] lg:w-[1000px] flex items-center justify-end pointer-events-none select-none z-0 mix-blend-multiply translate-x-[15%]"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 40%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)'
                    }}
                >
                    <img
                        src={image}
                        alt=""
                        className="w-full h-auto object-contain opacity-50"
                    />
                </div>
            )}

            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#0079ac_1px,transparent_1px)] [background-size:40px_40px]"></div>

            <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
                <div className="max-w-4xl">
                    {showAccent && (
                        <div className="flex items-center gap-4 mb-6 sm:mb-8">
                            <span className="w-10 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.5em] text-aureole-blue">ENVIRONMENTAL CONTROL</h2>
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-heading text-aureole-slate uppercase tracking-tighter leading-none mb-6 sm:mb-10">
                        {title} <br /> <span className="uppercase tracking-normal">{subtitle}.</span>
                    </h1>

                    {description && (
                        <p className="text-slate-500 text-base sm:text-lg lg:text-xl font-medium tracking-tight leading-relaxed max-w-2xl">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CategoryHero;
