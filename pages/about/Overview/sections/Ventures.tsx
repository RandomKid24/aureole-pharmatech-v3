
import React from 'react';
import { ExternalLink, Building2, History } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const Ventures: React.FC = () => {
    const ventures = [
        {
            year: "1999",
            name: "Mack Pharmatech",
            sub: "THE FOUNDATION (LEGACY)",
            desc: "The initial engineering milestone that sparked a revolution in stability chamber technology. This foundational period laid the technical groundwork before transitioning to the specialized Aureole brand.",
            url: "http://mackpharmatech.com/",
            logo: "/ventures-logos/mack-pharmatech.png",
            isLegacy: true
        },
        {
            year: "2012",
            name: "Adityam Foundation",
            sub: "",
            desc: "A compassionate NGO initiative dedicated to social welfare, education, and healthcare across rural Maharashtra, embodying the group's commitment to community impact.",
            url: "https://adityamfoundation.org/",
            logo: "/ventures-logos/adityam-foundation-logo.png"
        },
        {
            year: "2012",
            name: "Mack Auraa Healthcare",
            sub: "",
            desc: "An advanced healthcare entity specializing in veterinary products, enhancing livestock wellness and agricultural productivity through precision medicine.",
            url: "https://mackauraahealthcare.com/",
            logo: "/ventures-logos/mack-auraa-logo.png"
        },
        {
            year: "2019",
            name: "Aureole Process Equipment",
            sub: "",
            desc: "Engineering excellence in heavy-duty pharmaceutical process systems, including autoclaves, distillation plants, and high-capacity industrial equipment.",
            url: "https://aureoleproequip.com/",
            logo: "/ventures-logos/aureole-process-logo.png"
        },
        {
            year: "2021",
            name: "Aureole Pharma",
            sub: "",
            desc: "The current flagship brand driving global innovation in environmental testing. Specializing in high-precision stability chambers and advanced laboratory instrumentation.",
            logo: "/aureole-logo.png",
            isCurrent: true
        },
        {
            year: "2024",
            name: "Swapnkiran Resort",
            sub: "",
            desc: "A premium eco-friendly resort near Trimbakeshwar, offering a sustainable escape that integrates nature, hospitality, and regenerative farming.",
            url: "https://swapnkiranagrofarm.com/",
            logo: "/ventures-logos/swapnkiran-resort-logo.png"
        }
    ];

    return (
        <section className="py-24 lg:py-40 bg-white relative overflow-hidden group/section">
            {/* Standard Watermark - matching design system */}
            <div className="absolute top-10 right-10 opacity-[0.02] group-hover/section:opacity-[0.08] transition-all duration-1000 pointer-events-none select-none hidden lg:block">
                <span className="text-[150px] font-black text-aureole-slate group-hover/section:text-aureole-cyan tracking-tighter leading-none uppercase transition-colors duration-1000">VENTURE</span>
            </div>

            <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                <SectionHeading
                    label="GROUP ECOSYSTEM"
                    title="Our"
                    accentTitle="Ventures"
                    className="mb-20"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-100 bg-slate-100">
                    {ventures.map((v, idx) => (
                        <div key={idx} className={`bg-white p-10 group transition-all duration-700 flex flex-col border-r border-b border-slate-100 relative overflow-hidden ${v.isLegacy ? 'border-dashed border-slate-300 bg-slate-50/30' : 'hover:shadow-2xl hover:shadow-slate-200'}`}>
                            {/* Logo Slot */}
                            <div className="h-24 w-full mb-10 flex items-center justify-center p-4 bg-slate-50/50 group-hover:bg-white transition-all duration-500 rounded-sm border border-slate-50 group-hover:border-aureole-cyan/20">
                                {v.logo ? (
                                    <img
                                        src={v.logo}
                                        alt={`${v.name} logo`}
                                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                    />
                                ) : v.isLegacy ? (
                                    <div className="flex items-center justify-center">
                                        <span className="text-[14px] font-[1000] text-slate-300 group-hover:text-aureole-blue tracking-tighter uppercase transition-colors leading-none">
                                            {v.name}
                                        </span>
                                    </div>
                                ) : (
                                    <Building2 size={32} className="text-slate-200" />
                                )}
                            </div>

                            <div className="mb-6">
                                <span className={`text-3xl font-[950] font-heading ${v.isLegacy ? 'text-slate-300' : 'text-slate-400'} group-hover:text-aureole-blue transition-all duration-500 block mb-1 leading-none group-hover:scale-105 origin-left`}>
                                    {v.year}
                                </span>
                                <div className="w-8 h-[2px] bg-aureole-cyan opacity-40 group-hover:w-16 group-hover:opacity-100 transition-all duration-500"></div>
                            </div>

                            <div className="flex-grow flex flex-col">
                                <h4 className="text-lg font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-tight mb-2 transition-colors">
                                    {v.name}
                                </h4>
                                {(v.sub || v.isCurrent) && (
                                    <p className={`text-[10px] font-black uppercase tracking-widest mb-6 ${v.isLegacy ? 'text-slate-400' : 'text-aureole-cyan'}`}>
                                        {v.sub} {v.isCurrent && <span className="inline-block w-1 h-1 bg-aureole-blue rounded-full ml-1 animate-pulse"></span>}
                                    </p>
                                )}
                                <p className="text-[12px] text-slate-500 font-medium tracking-wider leading-relaxed text-left">
                                    {v.desc}
                                </p>
                            </div>

                            {!v.isLegacy && (
                                <div className="mt-12 pt-8 border-t border-slate-50 flex justify-between items-center transition-colors">
                                    {v.url ? (
                                        <a
                                            href={v.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-between group/visit"
                                        >
                                            <span className="text-[10px] font-black uppercase tracking-widest text-aureole-blue group-hover/visit:text-aureole-cyan transition-colors">
                                                Visit Website
                                            </span>
                                            <div className="p-2 bg-slate-50 group-hover/visit:bg-aureole-cyan transition-all">
                                                <ExternalLink size={14} className="text-slate-300 group-hover/visit:text-white transition-colors" />
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="w-full flex items-center justify-between opacity-50">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-[#001529]">
                                                CURRENT VENTURE
                                            </span>
                                            <div className="p-2 bg-slate-50">
                                                <Building2 size={14} className="text-slate-300" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ventures;
