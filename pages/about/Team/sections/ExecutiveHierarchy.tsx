
import React from 'react';
import { Linkedin, IdCard } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const ExecutiveHierarchy: React.FC = () => {
    const coreTeam = [
        {
            name: "Dr. Kiran Badgujar",
            role: "Founder & Director",
            company: "Aureole Pharma Pvt. Ltd.",
            quote: "Individuals constitute the invaluable cornerstone of any organization. It is through their contributions that we establish processes, vision, and foster collaborations.",
            img: "/about/managing-director.jpg"
        },
        {
            name: "Bipin Badgujar",
            role: "Chief Executive Officer",
            company: "Aureole Pharma Pvt. Ltd.",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Jitendra Tajanpure",
            role: "VP Finance & Accounts",
            company: "Aureole Pharma Pvt. Ltd.",
            img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Harshal Ghoge",
            role: "VP - Marketing & Projects",
            company: "Aureole Pharma Pvt. Ltd.",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Sandeep Kale",
            role: "VP - Strategy & Biz Dev",
            company: "Aureole Pharma Pvt. Ltd.",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Shubham Badgujar",
            role: "Manager - IBD",
            company: "Aureole Pharma Pvt. Ltd.",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section className="py-24 lg:py-40 relative overflow-hidden bg-aureole-soft group">
            <div className="absolute top-10 right-10 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000 pointer-events-none select-none hidden lg:block">
                <span className="text-[150px] font-black text-aureole-slate group-hover:text-aureole-cyan tracking-tighter leading-none uppercase transition-colors duration-1000">CORE</span>
            </div>

            <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                <SectionHeading
                    label="STRATEGIC HIERARCHY"
                    title="EXECUTIVE"
                    accentTitle="ARCHITECTURE"
                    description="A tiered leadership structure driving global vision through specialized functional expertise."
                    className="mb-24"
                />


                {/* Hierarchical Leadership Tree */}
                <div className="relative py-20 pb-0 shadow-[0_0_100px_rgba(0,0,0,0.02)]">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-100 hidden lg:block"></div>

                    <div className="space-y-32">
                        {/* Level 1: CEO Line */}
                        <div className="relative z-10 flex justify-center">
                            {coreTeam.slice(1, 2).map((member, idx) => (
                                <div key={idx} className="group relative bg-white border border-slate-200 p-10 w-full max-w-2xl flex gap-12 hover:border-aureole-blue transition-all duration-500 overflow-hidden">
                                    <div className="absolute top-0 right-0 flex">
                                        <a href="#" className="w-16 h-16 flex items-center justify-center bg-slate-50 border-b border-l border-slate-200 hover:bg-aureole-blue text-[#001529] hover:text-white transition-all group/link">
                                            <Linkedin size={24} />
                                        </a>
                                        <a href="#" className="w-16 h-16 flex items-center justify-center bg-aureole-cyan/10 border-b border-l border-aureole-cyan/20 hover:bg-aureole-cyan text-aureole-cyan hover:text-[#001529] transition-all group/card">
                                            <IdCard size={24} />
                                        </a>
                                    </div>

                                    <div className="w-1/3 aspect-[3/4] overflow-hidden transition-all duration-700 border border-slate-100">
                                        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-2/3 flex flex-col pt-6">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="text-[10px] font-black text-aureole-cyan uppercase tracking-[0.4em]">EXECUTIVE LEADERSHIP</span>
                                            <div className="h-px flex-grow bg-slate-100"></div>
                                        </div>
                                        <h4 className="text-5xl font-[950] text-[#001529] uppercase tracking-tighter leading-none mb-4">{member.name}</h4>
                                        <p className="text-sm font-medium text-slate-400 uppercase tracking-widest leading-relaxed">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Level 2: Functional Core */}
                        <div className="relative">
                            <div className="absolute top-0 left-12 right-12 h-px bg-slate-100 hidden lg:block"></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100">
                                {coreTeam.slice(2, 6).map((member, idx) => (
                                    <div key={idx} className="group bg-white flex flex-col transition-all duration-500 hover:bg-slate-50/50 relative z-10">
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-px h-10 bg-slate-100 hidden lg:block"></div>
                                        <div className="p-10 flex-grow">
                                            <div className="aspect-[4/5] mb-10 overflow-hidden transition-all duration-700 border border-slate-100">
                                                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                            </div>
                                            <h4 className="text-2xl font-[950] text-[#001529] uppercase tracking-tighter leading-none mb-3">{member.name}</h4>
                                            <p className="text-[10px] font-black text-aureole-cyan uppercase tracking-widest mb-6 leading-tight min-h-[40px] opacity-80">{member.role}</p>
                                        </div>
                                        <div className="flex border-t border-slate-100 bg-white">
                                            <a href="#" className="flex-1 py-5 flex items-center justify-center border-r border-slate-100 hover:bg-aureole-blue hover:text-white transition-all text-[#001529] group/link">
                                                <Linkedin size={20} />
                                            </a>
                                            <a href="#" className="flex-1 py-5 flex items-center justify-center hover:bg-aureole-cyan hover:text-[#001529] transition-all text-aureole-cyan group/card">
                                                <IdCard size={20} />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExecutiveHierarchy;
