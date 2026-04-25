import React, { useState, useRef } from 'react';
import { Plus, Zap, Droplets, CheckCircle2, X, Cpu, Gauge } from 'lucide-react';

const InfrasArchitecture: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        if (isOpen) {
            // When closing, scroll to the section top
            sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        if (isOpen) {
            sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsOpen(false);
        }
    };

    return (
        <section ref={sectionRef} className="relative bg-white overflow-hidden border-t border-slate-100 my-12">
            {/* Trigger Section */}
            <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                <div
                    className="py-6 flex items-center justify-between cursor-pointer group/gate transition-all duration-500"
                    onClick={handleToggle}
                >
                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-white border border-slate-100 rounded-xl p-1.5 shadow-sm">
                            <img src="/infras/RHS.png" alt="RHS" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-black font-heading text-aureole-slate tracking-tighter leading-none mb-1 uppercase">
                                Introducing <span className="text-aureole-blue">RHS</span>
                            </h2>
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Rapid Humidification by Sonification</p>
                        </div>
                    </div>

                    <button className="flex items-center gap-4 group/btn">
                        <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover/gate:text-aureole-blue transition-colors hidden sm:block">
                            {isOpen ? 'COLLAPSE' : 'EXPLORE TECHNOLOGY'}
                        </span>
                        <div className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-700 ${isOpen ? 'bg-aureole-slate border-aureole-slate text-white rotate-45' : 'group-hover/gate:border-aureole-blue group-hover/gate:bg-aureole-blue group-hover/gate:text-white'}`}>
                            <Plus size={16} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Expandable Content */}
            <div className={`grid transition-[grid-template-rows,opacity] duration-[1000ms] ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div ref={contentRef} className="overflow-hidden">
                    <div className="bg-gradient-to-b from-slate-50 to-white py-10 lg:py-14 border-t border-slate-100">
                        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                            <div className="max-w-5xl mx-auto">
                                
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                                    
                                    {/* Left Side: Brand & Visual */}
                                    <div className="lg:col-span-4 space-y-6">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="w-16 h-16 bg-white border border-slate-100 rounded-xl p-2 shadow-sm shrink-0">
                                                <img src="/infras/RHS.png" alt="RHS" className="w-full h-full object-contain" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-black text-aureole-slate uppercase tracking-tighter leading-none mb-1 font-heading">RHS</h3>
                                                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-tight">Rapid Humidification <br /> by Sonification</p>
                                            </div>
                                        </div>

                                        <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                                            <div className="text-[10px] font-black text-aureole-blue uppercase tracking-widest mb-2 flex items-center gap-2">
                                                <Zap size={12} />
                                                Energy Efficiency
                                            </div>
                                            <div className="text-2xl font-black text-aureole-slate font-heading">70 to 75% <span className="text-xs block font-bold text-slate-400 uppercase tracking-normal">Less Energy Consumption</span></div>
                                        </div>
                                    </div>

                                    {/* Right Side: Original Data Content */}
                                    <div className="lg:col-span-8 space-y-10">
                                        <div>
                                            <h4 className="text-xs font-black text-aureole-blue uppercase tracking-widest mb-4 flex items-center gap-2">
                                                <div className="w-1 h-2 bg-aureole-blue rounded-full"></div>
                                                Technology
                                            </h4>
                                            <p className="text-base text-slate-600 leading-relaxed font-medium font-sans">
                                                Ultrasonic atomization with a piezoelectric transducer to produce fine, cool mist without heat. Enabling fast, precise RH control with minimal electrical input.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-xs font-black text-aureole-blue uppercase tracking-widest mb-4 flex items-center gap-2">
                                                <div className="w-1 h-2 bg-aureole-blue rounded-full"></div>
                                                Key Benefits
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                                {[
                                                    'Consume 70 to 75% less energy than conventional steam generators',
                                                    'Rapid mist modulation avoids lag and thermal load',
                                                    'Eliminates reheat cycles and reduces compressor load',
                                                    'Fin-type heaters and compressor capacity can be downsized'
                                                ].map((benefit, i) => (
                                                    <div key={i} className="flex items-start gap-3 group/item">
                                                        <div className="mt-1 text-aureole-blue">
                                                            <CheckCircle2 size={16} />
                                                        </div>
                                                        <span className="text-sm font-bold text-aureole-slate leading-tight font-heading">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Close Button */}
                                <div className="flex justify-center mt-12">
                                    <button
                                        onClick={handleClose}
                                        className="group/close relative px-8 py-3 bg-white border border-slate-200 rounded-full hover:border-aureole-blue transition-all duration-500 shadow-sm"
                                    >
                                        <div className="relative flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors duration-500">
                                            <X size={14} />
                                            <span>CLOSE DETAILS</span>
                                        </div>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 
                IFC Card - COMMENTED OUT FOR PATENT REASONS
                Visual Merger Indicator - COMMENTED OUT
                The Combined INFRAS System - COMMENTED OUT
            */}
        </section>
    );
};

export default InfrasArchitecture;
