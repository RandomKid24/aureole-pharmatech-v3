
import React from 'react';

const SoftwareHero: React.FC = () => {
    return (
        <section className="relative min-h-[50vh] flex items-center bg-white pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden border-b border-slate-200">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#0079ac_1px,transparent_1px)] [background-size:40px_40px]"></div>

            <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 flex items-center justify-between">
                <div className="max-w-4xl">
                    {/* 21 CFR Badge - Unique Design */}
                    <div className="inline-flex items-center gap-3 mb-8 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-aureole-blue/20 blur-xl"></div>
                            <div className="relative px-6 py-2 bg-gradient-to-r from-aureole-blue to-aureole-cyan">
                                <p className="text-xs font-black font-heading text-white tracking-[0.3em]">
                                    21 CFR PART 11
                                </p>
                            </div>
                        </div>
                        <span className="text-xs font-bold font-sans text-slate-500 tracking-wider">Compliant</span>
                    </div>

                    {/* Title - Display Size */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-heading text-aureole-slate tracking-tighter leading-none mb-6">
                        SIS-<span className="text-aureole-cyan">APP</span>
                    </h1>

                    {/* Subtitle - Subtitle Size */}
                    <p className="text-xl font-bold font-heading text-aureole-cyan mb-6 tracking-tight">
                        Pharmaceutical Monitoring Software
                    </p>

                    {/* Description - Body Size */}
                    <p className="text-base font-sans text-slate-500 font-medium leading-relaxed max-w-2xl">
                        Advanced monitoring software for pharmaceutical stability chambers and specialized laboratory systems. Features secure e-records, e-signatures, comprehensive audit trails, and unlimited scalability.
                    </p>
                </div>

                {/* Washed out Logo Decoration - Fully Visible */}
                <div className="hidden lg:block relative z-0 opacity-[0.05] grayscale pointer-events-none select-none ml-12">
                    <img
                        src="/certification-logos/21CFRpart11.png"
                        alt="21 CFR Part 11 Background"
                        className="w-[550px] h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default SoftwareHero;
