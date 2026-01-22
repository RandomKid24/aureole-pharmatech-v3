
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const SoftwareHero: React.FC = () => {
    return (
        <section className="relative py-16 sm:py-32 overflow-hidden border-b border-slate-100 bg-white group">
            <div className="absolute top-10 right-10 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000 pointer-events-none select-none hidden lg:block">
                <span className="text-[180px] lg:text-[250px] font-black font-heading text-[#001529] group-hover:text-aureole-cyan tracking-tighter leading-none uppercase transition-colors duration-1000">SIS-APP</span>
            </div>

            <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center lg:text-left">
                <div className="max-w-5xl mx-auto lg:mx-0">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 sm:mb-10">
                        <span className="w-8 sm:w-12 h-[2px] bg-aureole-blue"></span>
                        <h2 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">ADVANCED COMPLIANCE</h2>
                    </div>
                    <h1 className="text-4xl sm:text-7xl lg:text-[100px] font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-[0.9] mb-8 sm:mb-12">
                        INTRODUCING <br /> <span className="text-aureole-cyan uppercase tracking-normal">SIS-APP.</span>
                    </h1>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start pt-4">
                        <div className="space-y-6">
                            <p className="text-lg lg:text-xl text-slate-700 font-bold leading-tight uppercase tracking-tight">
                                Secure and Integrated Solutions for <span className="text-aureole-cyan">Applications, Products, and Processes.</span>
                            </p>
                            <p className="text-slate-500 text-[15px] font-medium tracking-tight leading-relaxed">
                                In the fast-paced landscape of today's business world, the need for secure and seamlessly integrated solutions has reached unprecedented levels. SIS-APP delivers the utmost protection and efficiency.
                            </p>
                        </div>
                        <div className="space-y-6 lg:pt-1">
                            <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-100 px-5 py-3 rounded-px">
                                <ShieldCheck className="w-5 h-5 text-aureole-cyan" />
                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#001529]">21-CFR Part 11 Compliant</span>
                            </div>
                            <p className="text-slate-500 text-[15px] font-medium tracking-tight leading-relaxed italic border-l-2 border-slate-200 pl-6">
                                "Managing sensitive data across various applications while guaranteeing robust security and compliance with defined procedures."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SoftwareHero;
