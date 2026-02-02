
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
    title = "Quick",
    accentTitle = "Overview"
}) => {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <section className="py-20 bg-white border-y border-slate-100">
            <div className="container mx-auto px-6 lg:px-24">
                {/* Header */}
                <div className="max-w-4xl mb-12 text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl font-black font-heading text-[#001529] tracking-tight leading-none">
                        {title} <span className="text-aureole-cyan font-bold">{accentTitle}.</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
                    {/* Navigation - Large Vertical Sidebar, matching info box height */}
                    <div className="lg:w-2/5 flex flex-col gap-4">
                        {navItems.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveSection(idx)}
                                className={`group flex-1 flex flex-col justify-center p-8 text-left border-l-[6px] transition-all duration-300 min-h-[120px] ${activeSection === idx
                                    ? 'bg-slate-50 border-aureole-cyan shadow-sm'
                                    : 'bg-transparent border-transparent grayscale opacity-50 hover:opacity-100 hover:grayscale-0 hover:bg-slate-50/50'
                                    }`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-16 h-16 rounded-sm flex items-center justify-center transition-all duration-300 ${activeSection === idx ? 'bg-white shadow-sm text-aureole-blue scale-110' : 'bg-slate-50 text-slate-400'}`}>
                                        {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                                    </div>
                                    <div>
                                        <h4 className={`text-2xl lg:text-3xl font-black uppercase tracking-tighter leading-none mb-1.5 transition-colors ${activeSection === idx ? 'text-[#001529]' : 'text-slate-500'}`}>
                                            {item.title}
                                        </h4>
                                        <p className={`text-xs font-black uppercase tracking-widest transition-colors ${activeSection === idx ? 'text-aureole-cyan' : 'text-slate-400'}`}>
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Unified Content Sheet - Compact Height */}
                    <div className="lg:w-3/5">
                        <div key={activeSection} className="h-full bg-slate-50 border border-slate-100 p-8 lg:p-12 shadow-sm relative overflow-hidden animate-in fade-in duration-500 min-h-[400px]">


                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex items-center gap-5 mb-8 border-b border-slate-200/60 pb-6">
                                    <div className="w-12 h-12 bg-white flex items-center justify-center text-aureole-blue shadow-sm border border-slate-100">
                                        {React.cloneElement(navItems[activeSection].icon as React.ReactElement, { size: 22 })}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl lg:text-3xl font-black text-[#001529] uppercase tracking-tight">{navItems[activeSection].title}</h3>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-y-4 overflow-hidden">
                                    {/* Limit points to make it more compact */}
                                    {sections[activeSection].items.slice(0, 8).map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 group">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full border-2 border-aureole-cyan flex-shrink-0 group-hover:bg-aureole-cyan transition-all" />
                                            <p className="text-base font-bold text-slate-600 leading-snug group-hover:text-[#001529] transition-colors tracking-tight">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-8 border-t border-slate-200/60 flex justify-between items-center opacity-30">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-aureole-cyan" />
                                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none">Aureole Insights</span>
                                    </div>
                                    <span className="text-xs font-black text-slate-300 uppercase tracking-widest">REF-2026</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyDetailsAccordion;
