import React, { useState, useRef } from 'react';
import { Plus, Zap, Snowflake, ArrowDown, CheckCircle2, X } from 'lucide-react';

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
        <section ref={sectionRef} className="relative bg-white overflow-hidden border-t border-slate-100">
            {/* Trigger Section */}
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 border-b border-slate-200">
                <div
                    className="py-6 flex items-center justify-between cursor-pointer group/gate"
                    onClick={handleToggle}
                >
                    <div className="flex items-center gap-4">
                        <h2 className="text-4xl lg:text-5xl font-[950] font-heading text-[#001529] tracking-tight leading-none">
                            Introducing <span className="text-aureole-blue font-[950]">INFRAS</span>
                        </h2>
                        <div className="w-14 h-14 bg-white border border-slate-100 rounded-lg p-1 shadow-sm">
                            <img src="/infras/INFRAS.png" alt="INFRAS" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    <button className="flex items-center gap-3 group/btn">
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#001529]">
                            {isOpen ? 'Click to Collapse' : 'Click to Expand'}
                        </span>
                        <div className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-700 ${isOpen ? 'bg-[#001529] border-[#001529] text-white rotate-45' : 'group-hover/gate:border-aureole-blue group-hover/gate:bg-aureole-blue group-hover/gate:text-white'}`}>
                            <Plus size={16} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Expandable Content */}
            <div className={`grid transition-[grid-template-rows,opacity] duration-[1500ms] ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div ref={contentRef} className="overflow-hidden">
                    <div className="bg-slate-50/30 py-12">
                        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                            <div className="max-w-7xl mx-auto">

                                {/* The Two Source Systems */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">

                                    {/* RHS Card */}
                                    <div className="bg-white border border-aureole-blue/20 rounded-lg p-6 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-aureole-blue/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                                        <div className="flex items-center gap-4 mb-4 relative z-10">
                                            <div className="w-16 h-16 bg-white border border-slate-100 rounded-lg p-1 shadow-sm shrink-0">
                                                <img src="/infras/RHS.png" alt="RHS" className="w-full h-full object-contain" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-[950] text-[#001529] uppercase tracking-tighter leading-none">RHS</h3>
                                                <p className="text-xs text-slate-500 font-medium mt-0.5">Rapid Humidification by Sonification</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4 relative z-10">
                                            <div>
                                                <h4 className="text-xs font-black text-[#001529] uppercase tracking-wider mb-2 flex items-center gap-2">
                                                    <div className="w-1 h-2 bg-aureole-blue rounded-full"></div>
                                                    Technology
                                                </h4>
                                                <p className="text-sm text-slate-600 leading-relaxed">
                                                    Ultrasonic atomization with a piezoelectric transducer to produce fine, cool mist without heat. Enabling fast, precise RH control with minimal electrical input.
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="text-xs font-black text-[#001529] uppercase tracking-wider mb-2 flex items-center gap-2">
                                                    <div className="w-1 h-2 bg-aureole-blue rounded-full"></div>
                                                    Key Benefits
                                                </h4>
                                                <ul className="space-y-2">
                                                    {[
                                                        'Consume 70 to 75% less energy than conventional steam generators',
                                                        'Rapid mist modulation avoids lag and thermal load',
                                                        'Eliminates reheat cycles and reduces compressor load',
                                                        'Fin-type heaters and compressor capacity can be downsized'
                                                    ].map((benefit, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                            <Zap size={14} className="text-aureole-blue mt-0.5 shrink-0" />
                                                            {benefit}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* IFC Card */}
                                    <div className="bg-white border border-aureole-cyan/20 rounded-lg p-6 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-aureole-cyan/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                                        <div className="flex items-center gap-4 mb-4 relative z-10">
                                            <div className="w-16 h-16 bg-white border border-slate-100 rounded-lg p-1 shadow-sm shrink-0">
                                                <img src="/infras/IFC.png" alt="IFC" className="w-full h-full object-contain" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-[950] text-[#001529] uppercase tracking-tighter leading-none">IFC</h3>
                                                <p className="text-xs text-slate-500 font-medium mt-0.5">Infused Fluid Cooling</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4 relative z-10">
                                            <div>
                                                <h4 className="text-xs font-black text-[#001529] uppercase tracking-wider mb-2 flex items-center gap-2">
                                                    <div className="w-1 h-2 bg-aureole-cyan rounded-full"></div>
                                                    Technology
                                                </h4>
                                                <p className="text-sm text-slate-600 leading-relaxed">
                                                    Closed-loop fluid-to-air cooling system with a chilled-liquid storage tank. By decoupling cooling delivery from compressor cycling, IFC smooths thermal transients and improves PV trace stability.
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="text-xs font-black text-[#001529] uppercase tracking-wider mb-2 flex items-center gap-2">
                                                    <div className="w-1 h-2 bg-aureole-cyan rounded-full"></div>
                                                    Key Benefits
                                                </h4>
                                                <ul className="space-y-2">
                                                    {[
                                                        'Thermal storage reduces compressor runtime and electrical peaks',
                                                        'Dual-pump setup for redundancy and continuous circulation',
                                                        'Instant cooling capacity to handle load spikes',
                                                        'Primary and secondary coils reduce frosting risk'
                                                    ].map((benefit, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                            <Snowflake size={14} className="text-aureole-cyan mt-0.5 shrink-0" />
                                                            {benefit}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Visual Merger Indicator */}
                                <div className="flex flex-col items-center my-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-aureole-blue to-transparent"></div>
                                        <ArrowDown size={16} className="text-aureole-blue" />
                                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-aureole-cyan to-transparent"></div>
                                    </div>
                                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.5em]">INTEGRATED INTO</span>
                                </div>

                                {/* The Combined INFRAS System */}
                                <div className="bg-gradient-to-br from-white to-slate-50 border-2 border-aureole-blue rounded-lg p-8 shadow-lg">
                                    <div className="flex flex-col lg:flex-row items-start gap-6 mb-6">
                                        <div className="w-24 h-24 bg-white border border-slate-100 rounded-lg p-1 shadow-sm shrink-0">
                                            <img src="/infras/INFRAS.png" alt="INFRAS" className="w-full h-full object-contain" />
                                        </div>

                                        <div className="flex-grow">
                                            <h3 className="text-2xl lg:text-3xl font-[950] text-[#001529] uppercase tracking-tighter leading-tight mb-3">
                                                INFRAS™ SYSTEM
                                            </h3>
                                            <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                                INFRAS is an integrated architecture combining <span className="font-bold text-aureole-blue">RHS ultrasonic humidification</span> with <span className="font-bold text-aureole-cyan">IFC infused fluid cooling</span>. It solves the core conflict between humidification and cooling, avoiding the energy-wasting "tug-of-war" seen in traditional steam-based systems.
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {[
                                                    { label: 'Energy Savings', value: 'RHS uses 70-75% less power than steam' },
                                                    { label: 'Control Precision', value: 'Minimal overshoot and cycling' },
                                                    { label: 'System Efficiency', value: 'Lowers instantaneous power draw' },
                                                    { label: 'Stability', value: 'Flattened PV waveform for stringent protocols' }
                                                ].map((stat, i) => (
                                                    <div key={i} className="flex items-start gap-2">
                                                        <CheckCircle2 size={14} className="text-aureole-blue mt-0.5 shrink-0" />
                                                        <div>
                                                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block mb-0.5">{stat.label}</span>
                                                            <span className="text-[11px] font-bold text-[#001529]">{stat.value}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-slate-200 pt-4">
                                        <h4 className="text-[9px] font-black text-[#001529] uppercase tracking-wider mb-3">Why It Matters</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                            {[
                                                { title: 'Coordinated Response', desc: 'Synchronized humidity and cooling eliminates conflicts' },
                                                { title: 'Reduced Cycling', desc: 'Minimized compressor runtime and heater activation' },
                                                { title: 'Enhanced Compliance', desc: 'Superior stability for stringent protocols' }
                                            ].map((adv, i) => (
                                                <div key={i} className="bg-white/50 rounded-lg p-3 border border-slate-100">
                                                    <h5 className="text-xs font-bold text-[#001529] tracking-tight mb-1">{adv.title}</h5>
                                                    <p className="text-[10px] text-slate-500 leading-relaxed">{adv.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Close Button at Bottom */}
                                <div className="flex flex-col items-center mt-8">
                                    <button
                                        onClick={handleClose}
                                        className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-slate-200 rounded-full hover:border-aureole-blue hover:bg-aureole-blue hover:text-white transition-all duration-500 shadow-md group/close"
                                    >
                                        <X size={18} className="group-hover/close:rotate-90 transition-transform duration-500" />
                                        <span className="text-[9px] font-black uppercase tracking-[0.3em]">CLOSE DETAILS</span>
                                    </button>
                                    <p className="text-[8px] font-black text-slate-300 uppercase tracking-[0.6em] mt-4">AUREOLE LABS INNOVATION</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfrasArchitecture;
