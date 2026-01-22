
import React from 'react';
import LazyImage from '@/components/LazyImage';

const PlantsHero: React.FC = () => {
    return (
        <section className="relative h-[70vh] flex items-center overflow-hidden bg-aureole-slate">
            <div className="absolute inset-0 z-0">
                <LazyImage
                    src="/plants/DJI_20240723121709_0011_D.JPG"
                    alt="Aureole Manufacturing Aerial View"
                    className="w-full h-full object-cover opacity-50 shadow-inner"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-aureole-slate/90 via-aureole-slate/40 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 sm:px-8 lg:px-24 relative z-10">
                <div className="max-w-4xl">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="w-12 h-[2px] bg-aureole-cyan"></span>
                        <h2 className="text-[10px] font-black font-heading uppercase tracking-[0.5em] text-aureole-cyan">AUREOLE INFRASTRUCTURE</h2>
                    </div>
                    <h1 className="text-5xl sm:text-7xl lg:text-[85px] font-[950] font-heading text-white uppercase tracking-tighter leading-[0.9] mb-12">
                        OUR <br /> <span className="text-aureole-cyan uppercase tracking-normal">Plants.</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-300 font-medium leading-relaxed max-w-xl">
                        Our manufacturing facilities are equipped with precision engineering systems to ensure global compliance and quality standards for pharmaceutical laboratory equipment.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PlantsHero;
