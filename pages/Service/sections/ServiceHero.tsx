
import React from 'react';

const ServiceHero: React.FC = () => {
    return (
        <section className="relative overflow-hidden border-b border-slate-100 bg-white py-24 lg:py-40 group">
            <div className="absolute top-10 right-10 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000 pointer-events-none select-none hidden lg:block">
                <span className="text-[150px] font-black text-aureole-slate group-hover:text-aureole-cyan tracking-tighter leading-none uppercase transition-colors duration-1000">SERVICE</span>
            </div>

            <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center lg:text-left">
                <div className="max-w-5xl mx-auto lg:mx-0">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                        <span className="w-12 h-[2px] bg-aureole-blue"></span>
                        <h1 className="text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">SUPPORT SERVICES</h1>
                    </div>

                    <h2 className="text-4xl lg:text-[85px] font-[950] text-[#001529] uppercase tracking-tighter leading-[0.95] mb-12">
                        SUPPORT <br />
                        <span className="text-aureole-cyan uppercase tracking-normal">Services.</span>
                    </h2>

                    <div className="max-w-3xl border-l-[3px] border-aureole-blue/20 bg-slate-50/50 p-10 mx-auto lg:mx-0">
                        <p className="text-lg lg:text-xl text-slate-700 font-medium leading-relaxed mb-8">
                            In the ever-evolving pharmaceutical and laboratory equipment landscape, quality and customer service are the cornerstones of success. Aureole PharmaTech stands as a beacon of excellence in this competitive industry, delivering reliable products backed by responsive and comprehensive support services.
                        </p>
                        <p className="text-[15px] text-slate-500 font-medium leading-relaxed tracking-tight">
                            Founded with a mission to provide high-quality pharmaceutical products and equipment, the company operates on core values of integrity, innovation, and customer focus.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
