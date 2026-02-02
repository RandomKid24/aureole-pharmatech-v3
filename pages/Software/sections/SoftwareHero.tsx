
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const SoftwareHero: React.FC = () => {
    return (
        <section className="relative py-16 sm:py-32 overflow-hidden border-b border-slate-100 bg-white group">


            <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center lg:text-left">
                <div className="max-w-5xl mx-auto lg:mx-0">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 sm:mb-10">
                        <span className="w-8 sm:w-12 h-[2px] bg-aureole-blue"></span>
                        <h2 className="text-xs font-black tracking-widest text-aureole-blue">Advanced Compliance</h2>
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-[#001529] tracking-tighter leading-none mb-8 sm:mb-12">
                        Introducing <br /> <span className="text-aureole-cyan tracking-normal">SIS-APP.</span>
                    </h1>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start pt-4">
                        <div className="space-y-6">
                            <p className="text-lg lg:text-xl text-slate-700 font-bold leading-tight tracking-tight">
                                Secure and Integrated Solutions for <span className="text-aureole-cyan">Applications, Products, and Processes.</span>
                            </p>
                            <p className="text-base font-medium text-slate-500 tracking-tight leading-relaxed">
                                In the fast-paced landscape of today's business world, the need for secure and seamlessly integrated solutions has reached unprecedented levels. SIS-APP delivers the utmost protection and efficiency.
                            </p>
                        </div>
                        <div className="space-y-6 lg:pt-1">
                            <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-100 px-5 py-3 rounded-px">
                                <ShieldCheck className="w-5 h-5 text-aureole-cyan" />
                                <span className="text-xs font-black tracking-widest text-[#001529]">21-CFR Part 11 Compliant</span>
                            </div>
                            <p className="text-base font-medium text-slate-500 tracking-tight leading-relaxed italic border-l-2 border-slate-200 pl-6">
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
