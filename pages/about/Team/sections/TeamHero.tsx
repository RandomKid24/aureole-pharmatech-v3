
import React from 'react';

const TeamHero: React.FC = () => {
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden border-b border-slate-100 group">
            <div className="absolute top-10 right-10 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000 pointer-events-none select-none">
                <span className="text-[180px] lg:text-[250px] font-black font-heading text-[#001529] group-hover:text-aureole-cyan tracking-tighter leading-none uppercase transition-colors duration-1000">TEAM</span>
            </div>

            <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                <div className="max-w-4xl">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="w-12 h-[2px] bg-aureole-blue"></span>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-blue">ORGANIZATIONAL TALENT</h2>
                    </div>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-[0.85] mb-12">
                        PRECISION <br /> MINDSET, <span className="text-aureole-cyan">COLLECTIVE IMPACT.</span>
                    </h1>
                    <p className="text-slate-500 text-[12px] font-medium tracking-[0.2em] leading-relaxed max-w-sm">
                        The driving force behind our precision engineering <br /> and global innovation excellence.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TeamHero;
