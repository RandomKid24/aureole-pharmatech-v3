
import React from 'react';

const CertHero: React.FC = () => {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden border-b border-slate-100 bg-white">
            <div className="absolute top-1/2 -translate-y-1/2 right-10 opacity-[0.03] pointer-events-none select-none">
                <span className="text-[120px] lg:text-[150px] font-black font-heading text-aureole-slate tracking-tighter leading-none uppercase">VALIDATED</span>
            </div>

            <div className="container mx-auto px-6 sm:px-8 lg:px-24 relative z-10">
                <div className="max-w-4xl">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-12 h-[1px] bg-aureole-blue"></span>
                        <h2 className="text-[11px] font-black font-heading uppercase tracking-[0.4em] text-aureole-blue">CERTIFICATION & COMPLIANCE</h2>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-[950] font-heading text-aureole-slate uppercase tracking-tighter leading-[0.95] mb-8">
                        QUALITY <br /> <span className="text-aureole-cyan uppercase tracking-normal">Assured.</span>
                    </h1>
                    <p className="text-slate-500 text-[13px] font-medium tracking-tight leading-relaxed max-w-sm">
                        Authentication and regulatory compliance frameworks governing our precision engineering protocols.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CertHero;
