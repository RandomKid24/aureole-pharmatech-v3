
import React, { useState } from 'react';
import { ChevronDown, Users2, ArrowRight } from 'lucide-react';
import ExecutiveHierarchy from '../../Team/sections/ExecutiveHierarchy';
import OperationalTeam from '../../Team/sections/OperationalTeam';

const TeamSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <section className="relative overflow-hidden bg-white">
            {!isVisible ? (
                <div className="py-16 lg:py-24 border-b border-slate-100 group cursor-pointer" onClick={() => setIsVisible(true)}>
                    <div className="absolute inset-0 bg-slate-50/50 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>

                    {/* Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-1000 pointer-events-none select-none w-full text-center">
                        <span className="text-[100px] lg:text-[200px] font-black font-heading text-[#001529] tracking-tighter leading-none uppercase">
                            PEOPLE
                        </span>
                    </div>

                    <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 mb-8 group-hover:border-aureole-blue group-hover:scale-110 transition-all duration-500 bg-white shadow-xl shadow-slate-200/50">
                            <Users2 className="text-slate-400 group-hover:text-aureole-blue transition-colors" size={24} />
                        </div>

                        <h2 className="text-4xl lg:text-7xl font-black font-heading text-[#001529] uppercase tracking-tighter leading-none mb-10 group-hover:scale-[1.02] transition-transform duration-700">
                            CHECK OUR <span className="text-aureole-blue">TEAM.</span>
                        </h2>

                        <button
                            className="inline-flex items-center gap-6 group/btn"
                        >
                            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 group-hover/btn:text-aureole-cyan transition-colors">
                                EXPLORE HIERARCHY
                            </span>
                            <div className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center group-hover/btn:bg-aureole-blue group-hover/btn:border-aureole-blue transition-all duration-500">
                                <ArrowRight className="text-slate-300 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" size={20} />
                            </div>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="animate-in fade-in slide-in-from-top-10 duration-1000">
                    <div className="sticky top-24 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 flex justify-center">
                        <button
                            onClick={() => {
                                setIsVisible(false);
                                window.scrollTo({
                                    top: document.getElementById('team-trigger')?.offsetTop || 0,
                                    behavior: 'smooth'
                                });
                            }}
                            className="flex items-center gap-3 px-6 py-2 rounded-full border border-slate-200 hover:border-aureole-blue transition-all group"
                        >
                            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-aureole-blue">Close Team View</span>
                            <ChevronDown className="text-slate-300 group-hover:text-aureole-blue rotate-180 transition-transform" size={14} />
                        </button>
                    </div>
                    <div id="team-content">
                        <ExecutiveHierarchy />
                        <OperationalTeam />
                    </div>
                </div>
            )}
            <div id="team-trigger" className="absolute top-0 w-full h-px pointer-events-none"></div>
        </section>
    );
};

export default TeamSection;
