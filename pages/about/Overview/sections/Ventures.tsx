
import React from 'react';
import { ExternalLink, Building2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const Ventures: React.FC = () => {
    const ventures = [
        {
            year: "2012",
            name: "Adityam Foundation",
            sub: "Kiran Aashecha",
            desc: "An NGO driving social welfare, education, healthcare, and rural development initiatives in Nashik, Maharashtra. Dedicated to improving lives through compassion-driven initiatives.",
            img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
            url: "https://adityamfoundation.org/",
            logo: "/ventures-logos/adityam-foundation-logo.png"
        },
        {
            year: "2012",
            name: "Mack Auraa Healthcare",
            sub: "Veterinary Care",
            desc: "Focuses on veterinary healthcare, producing products that enhance livestock well-being and farm productivity across the region.",
            img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
            url: "https://mackauraahealthcare.com/",
            logo: "/ventures-logos/mack-auraa-logo.png"
        },
        {
            year: "2019",
            name: "Aureole Process Equipment",
            sub: "Industrial Hardware",
            desc: "Specializes in high-quality process equipment for the pharmaceutical and biotech industries, supplying autoclaves and distillation plants.",
            img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
            url: "https://aureoleproequip.com/",
            logo: "/ventures-logos/aureole-process-logo.png"
        },
        {
            year: "2021",
            name: "Aureole Pharma",
            sub: "Precision Tech",
            desc: "Manufactures advanced pharmaceutical equipment, including stability chambers and lab instruments, serving top-tier clients across India.",
            img: "https://images.unsplash.com/photo-1579154273154-1886105370cc?auto=format&fit=crop&q=80&w=800",
            logo: "/aureole-logo.png"
        },
        {
            year: "2024",
            name: "Swapnkiran Resort",
            sub: "Agro-Tourism",
            desc: "An eco-friendly agro-tourism resort near Trimbakeshwar, Nashik, offering serene stays and sustainable farm experiences.",
            img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
            url: "https://swapnkiranagrofarm.com/",
            logo: "/ventures-logos/swapnkiran-resort-logo.png"
        }
    ];

    return (
        <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
            <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none select-none">
                <span className="text-[150px] font-black font-heading text-[#001529] tracking-tighter leading-none uppercase">VENTURE</span>
            </div>

            <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                <SectionHeading
                    label="GROUP ECOSYSTEM"
                    title="Our"
                    accentTitle="Ventures"
                    className="mb-20"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-slate-100 bg-slate-100">
                    {ventures.map((v, idx) => (
                        <div key={idx} className="bg-white p-10 group transition-all duration-700 flex flex-col border-r border-b border-slate-100 relative overflow-hidden hover:shadow-2xl hover:shadow-slate-200">
                            {/* Clear Logo Slot at Top */}
                            <div className="h-24 w-full mb-10 flex items-center justify-center p-4 bg-slate-50/50 group-hover:bg-white transition-all duration-500 rounded-sm border border-slate-50 group-hover:border-aureole-cyan/20">
                                <img
                                    src={v.logo}
                                    alt={`${v.name} logo`}
                                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="mb-6">
                                <span className="text-3xl font-[950] font-heading text-slate-100 group-hover:text-aureole-blue/10 transition-all duration-700 block mb-1 leading-none">
                                    {v.year}
                                </span>
                                <div className="w-8 h-[2px] bg-aureole-cyan opacity-40"></div>
                            </div>

                            <div className="flex-grow flex flex-col">
                                <h4 className="text-lg font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-tight mb-2 transition-colors">
                                    {v.name}
                                </h4>
                                <p className="text-[10px] font-black text-aureole-cyan uppercase tracking-widest mb-6">
                                    {v.sub}
                                </p>
                                <p className="text-[12px] text-slate-500 font-medium tracking-wider leading-relaxed text-justify">
                                    {v.desc}
                                </p>
                            </div>

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
                                            Current Entity
                                        </span>
                                        <div className="p-2 bg-slate-50">
                                            <Building2 size={14} className="text-slate-300" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ventures;
