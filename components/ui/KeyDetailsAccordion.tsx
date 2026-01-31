
import React, { useState, ReactNode } from 'react';

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
    accentLabel = "TECHNICAL ADVANTAGES",
    title = "KEY",
    accentTitle = "Highlights"
}) => {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <section className="py-20 bg-white border-y border-slate-100 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-24">
                {/* Header matching CategoryProductList Style */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[12px] font-black uppercase tracking-[0.4em] text-aureole-blue">{accentLabel}</h2>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none">
                            {title} <span className="text-aureole-cyan">{accentTitle}.</span>
                        </h2>
                    </div>

                    {/* Compact Category Selector */}
                    <div className="flex bg-slate-50 p-1 rounded-sm border border-slate-100 self-start lg:mb-2">
                        {navItems.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveSection(idx)}
                                className={`px-6 py-2.5 rounded-sm transition-all duration-300 flex items-center gap-2.5 ${activeSection === idx
                                    ? 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-aureole-blue ring-1 ring-slate-100'
                                    : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                <div className={`transition-colors duration-300 ${activeSection === idx ? 'text-aureole-cyan' : 'text-slate-300'}`}>
                                    {React.cloneElement(item.icon as React.ReactElement, { size: 14 })}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest">{item.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dense Grid - Compressed Layout */}
                <div key={activeSection} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    {sections[activeSection].items.map((item, i) => (
                        <div key={i} className="group p-5 bg-white border border-slate-50 hover:bg-slate-50 transition-all duration-300 flex items-start gap-4">
                            <div className="w-6 h-6 flex-shrink-0 bg-slate-100/50 rounded-sm flex items-center justify-center text-[10px] font-black text-slate-400 group-hover:bg-aureole-cyan/10 group-hover:text-aureole-cyan transition-colors">
                                {i + 1}
                            </div>
                            <p className="text-[14px] font-bold text-[#001529]/80 tracking-tight leading-snug group-hover:text-aureole-blue transition-colors">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Status Indicator */}
                <div className="mt-10 pt-6 border-t border-slate-50 flex items-center justify-between opacity-30">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-aureole-cyan" />
                            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">Aureole Information Matrix // {navItems[activeSection].title}</span>
                        </div>
                    </div>
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-[0.3em]">TS-REF-B26</span>
                </div>
            </div>
        </section>
    );
};

export default KeyDetailsAccordion;
