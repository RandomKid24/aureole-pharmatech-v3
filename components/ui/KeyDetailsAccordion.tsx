
import React, { useState, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface KeyDetailsItem {
    title: string;
    subtitle: string;
    icon: ReactNode;
}

interface KeyDetailsSection {
    items: string[];
}

interface KeyDetailsAccordionProps {
    navItems: KeyDetailsItem[];
    sections: KeyDetailsSection[];
    accentLabel?: string;
    title?: string;
    accentTitle?: string;
}

const KeyDetailsAccordion: React.FC<KeyDetailsAccordionProps> = ({
    navItems,
    sections,
    accentLabel = "Overview",
    title = "KEY",
    accentTitle = "Details"
}) => {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <section className="py-16 sm:py-24 bg-aureole-soft relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-aureole-cyan/20 to-transparent"></div>

            <div className="container mx-auto px-6 lg:px-24">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Selector Column */}
                    <div className="lg:col-span-4 space-y-3">
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[1px] bg-aureole-blue/30"></span>
                                <h3 className="text-[10px] font-black font-heading text-aureole-blue uppercase tracking-[0.4em]">{accentLabel}</h3>
                            </div>
                            <h2 className="text-5xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none">
                                {title} <br /> <span className="text-aureole-cyan uppercase tracking-normal">{accentTitle}.</span>
                            </h2>
                        </div>

                        <div className="space-y-4 relative">
                            {navItems.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveSection(idx)}
                                    className={`group w-full text-left p-8 transition-all duration-500 border relative overflow-hidden ${activeSection === idx
                                        ? 'bg-white border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,166,214,0.1)]'
                                        : 'bg-transparent border-transparent opacity-40 hover:opacity-100'
                                        }`}
                                >
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-aureole-cyan transition-transform duration-700 ease-in-out origin-top ${activeSection === idx ? 'scale-y-100' : 'scale-y-0'
                                        }`} />

                                    <div className="flex items-center justify-between pointer-events-none relative z-10">
                                        <div className="flex items-center gap-6">
                                            <div className={`transition-all duration-500 ${activeSection === idx ? 'text-aureole-cyan scale-110' : 'text-slate-400'}`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className={`text-2xl font-black uppercase tracking-tighter leading-none mb-2 transition-colors duration-500 ${activeSection === idx ? 'text-[#001529]' : 'text-slate-500'}`}>
                                                    {item.title}
                                                </div>
                                                <div className={`text-[12px] font-black uppercase tracking-widest transition-colors duration-500 ${activeSection === idx ? 'text-aureole-cyan' : 'text-slate-400'}`}>
                                                    {item.subtitle}
                                                </div>
                                            </div>
                                        </div>
                                        <ArrowRight size={20} className={`transition-all duration-500 ${activeSection === idx ? 'text-aureole-cyan translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-8 bg-white border border-slate-100 p-8 lg:p-16 relative overflow-hidden flex flex-col min-h-[550px] shadow-sm">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.04] pointer-events-none font-black font-heading text-[120px] lg:text-[180px] text-aureole-slate uppercase tracking-tighter leading-none select-none">
                            {navItems[activeSection].title}
                        </div>

                        <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-50 overflow-hidden">
                            <div className="h-full bg-aureole-cyan transition-all duration-1000 ease-in-out" style={{ width: `${((activeSection + 1) / navItems.length) * 100}%` }}></div>
                        </div>

                        <div className="relative z-10 flex-grow">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-10 h-10 rounded-full bg-aureole-soft flex items-center justify-center text-aureole-cyan ring-1 ring-aureole-cyan/20">
                                    {navItems[activeSection].icon}
                                </div>
                                <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-aureole-blue">
                                    {navItems[activeSection].subtitle}
                                </h4>
                            </div>

                            <div key={activeSection} className="grid sm:grid-cols-2 gap-x-12 gap-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                {sections[activeSection].items.map((item, i) => (
                                    <div key={i} className="flex gap-5 group/item">
                                        <div className="mt-2.5 min-w-[6px] h-[6px] rounded-full bg-aureole-cyan group-hover/item:scale-150 transition-transform duration-300"></div>
                                        <p className="text-[15px] font-medium text-slate-600 tracking-tight leading-relaxed group-hover/item:text-[#001529] transition-colors">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto pt-12 flex items-center justify-between border-t border-slate-50 opacity-60">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-aureole-blue animate-pulse"></div>
                                <span className="text-[9px] font-black text-[#001529] uppercase tracking-[0.3em]">Precision Standards / {navItems[activeSection].title}</span>
                            </div>
                            <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">0{activeSection + 1} / 0{navItems.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyDetailsAccordion;
