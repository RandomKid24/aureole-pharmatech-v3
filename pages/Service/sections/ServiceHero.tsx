
import React from 'react';

const ServiceHero: React.FC = () => {
    return (
        <section className="relative overflow-hidden border-b border-slate-100 bg-white py-24 lg:py-40 group">


            <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center lg:text-left">
                <div className="max-w-5xl mx-auto lg:mx-0">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                        <span className="w-12 h-[2px] bg-aureole-blue"></span>
                        <h1 className="text-xs font-black font-heading text-aureole-blue tracking-widest">Support Services</h1>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black font-heading text-aureole-slate tracking-tighter leading-none mb-12 uppercase">
                        Comprehensive Support <span className="text-aureole-cyan">Services</span>
                    </h1>

                    <div className="max-w-3xl border-l-[3px] border-aureole-blue/20 bg-slate-50/50 p-10 mx-auto lg:mx-0">
                        <p className="text-lg lg:text-xl text-slate-700 font-sans font-medium leading-relaxed">
                            Aureole PharmaTech stands as a beacon of excellence in the pharmaceutical landscape, delivering high-quality equipment backed by a relentless focus on integrity, innovation, and responsive customer support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
