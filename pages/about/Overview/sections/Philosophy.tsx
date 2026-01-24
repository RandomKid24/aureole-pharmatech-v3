
import React from 'react';
import { Eye, Shield, Target } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const Philosophy: React.FC = () => {
    const ethos = [
        { title: "Our Vision", desc: "To be at the forefront of the pharmaceutical industry, redefining excellence through innovation, quality, and sustainability.", icon: <Eye size={32} /> },
        { title: "Our Mission", desc: "To lead with innovation, uphold the highest quality standards, and promote sustainability in pharmaceutical solutions through integrity.", icon: <Shield size={32} /> },
        { title: "Our Goal", desc: "To revolutionize multiple industries by consistently delivering innovative solutions and unmatched quality in pharmaceutical services.", icon: <Target size={32} /> }
    ];

    return (
        <section className="py-24 sm:py-32 bg-slate-50/50 relative overflow-hidden group/section">
            <div className="absolute top-10 right-10 opacity-[0.02] group-hover/section:opacity-[0.08] transition-all duration-1000 pointer-events-none select-none hidden lg:block">
                <span className="text-[150px] font-black text-aureole-slate group-hover/section:text-aureole-cyan tracking-tighter leading-none uppercase transition-colors duration-1000">ETHOS</span>
            </div>
            <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                <SectionHeading
                    label="CORPORATE PHILOSOPHY"
                    title="Our Core"
                    accentTitle="Ethos"
                    centered
                    className="mb-20"
                />

                <div className="grid lg:grid-cols-3 gap-16 lg:gap-12">
                    {ethos.map((box, i) => (
                        <div key={i} className="group flex flex-col items-center text-center">
                            {/* Elegant Circular Icon */}
                            <div className="relative mb-10">
                                <div className="absolute inset-0 bg-aureole-blue/5 rounded-full scale-150 blur-2xl group-hover:bg-aureole-blue/10 transition-colors duration-700"></div>
                                <div className="relative w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-slate-50 text-aureole-blue group-hover:text-aureole-cyan transition-colors duration-500">
                                    <div className="transform group-hover:scale-110 transition-transform duration-500">
                                        {box.icon}
                                    </div>
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border border-slate-100 rounded-full shadow-sm flex items-center justify-center text-[10px] font-bold text-slate-300">
                                    0{i + 1}
                                </div>
                            </div>

                            <h4 className="text-2xl font-extrabold font-heading text-[#001529] uppercase tracking-tight mb-6">
                                {box.title}
                            </h4>

                            <p className="text-slate-500 text-[15px] font-medium leading-relaxed max-w-sm">
                                {box.desc}
                            </p>

                            <div className="mt-10 flex gap-1.5 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="w-1 h-1 rounded-full bg-aureole-cyan"></div>
                                <div className="w-8 h-[1px] bg-slate-300 self-center"></div>
                                <div className="w-1 h-1 rounded-full bg-aureole-cyan"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
