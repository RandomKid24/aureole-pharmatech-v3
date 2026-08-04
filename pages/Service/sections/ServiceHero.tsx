import React from "react";
import { DotLottiePlayer } from '@dotlottie/react-player';

const ServiceHero: React.FC = () => {
    return (
        <section className="relative bg-transparent py-24 lg:py-40 group bg-[url('/wavebg.webp')] bg-cover bg-fixed overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div className="max-w-5xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-aureole-blue">Stability Lifecycle & Technical Support</h6>
                        </div>

                        <h1 className="text-5xl lg:text-8xl font-black font-heading text-aureole-slate uppercase tracking-tighter leading-[0.85] mb-12">
                            SERVICE & <br/><span className="text-aureole-cyan">SUPPORT</span>
                        </h1>

                        <div className="max-w-4xl border-l-[4px] border-aureole-blue/30 bg-white p-12 shadow-2xl shadow-slate-200/50">
                            <h3 className="text-xl lg:text-2xl text-aureole-slate font-black font-heading leading-tight mb-8 uppercase tracking-tight">
                                Engineering Compliance. <br/>
                                <span className="text-aureole-blue">Optimizing Reliability.</span>
                            </h3>
                            <p className="text-base lg:text-lg text-slate-500 font-sans font-medium leading-relaxed max-w-2xl">
                                We provide comprehensive technical ecosystems for Stability Chambers, Environmental Rooms, and Cold-Chain equipment. Aureole Pharmatech ensures your mission-critical systems remain audit-ready and operationally superior—strictly aligned with global cGMP, USFDA, EU-GMP, and 21 CFR Part 11 standards.
                            </p>
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] relative">
                            {/* Inner Glow Effect */}
                            <div className="absolute inset-0 bg-aureole-cyan/5 rounded-full blur-3xl scale-125"></div>
                            <DotLottiePlayer
                                src="/Customer service.lottie"
                                autoplay
                                loop
                                className="w-full h-full relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
