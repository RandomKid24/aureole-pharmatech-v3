
import React from 'react';

const CareersHero: React.FC = () => {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden border-b border-slate-100 bg-white group">
            <div className="absolute top-10 right-10 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000 pointer-events-none select-none hidden lg:block">
                <span className="text-[180px] lg:text-[250px] font-black font-heading text-aureole-slate group-hover:text-aureole-cyan tracking-tighter leading-none uppercase transition-colors duration-1000">JOIN CAREERS</span>
            </div>

            <div className="container mx-auto px-6 lg:px-24 relative z-10">
                <div className="max-w-4xl text-center lg:text-left mx-auto lg:mx-0">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                        <span className="w-10 h-[2px] bg-aureole-blue"></span>
                        <h2 className="text-[10px] font-black font-heading uppercase tracking-[0.5em] text-aureole-blue">PEOPLE & CULTURE</h2>
                    </div>
                    <h1 className="text-5xl lg:text-8xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none mb-10">
                        Careers.
                    </h1>
                    <p className="text-slate-500 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl text-justify tracking-tight">
                        The character of any organization, encompassing its work culture, objectives, and vision, is essentially a mirror image of its team and employees. We firmly believe that fostering a supportive environment leads to individual growth and contributions to the organization’s progress.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CareersHero;
