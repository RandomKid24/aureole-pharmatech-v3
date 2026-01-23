
import React, { useState, useRef } from 'react';
import { Linkedin, IdCard, Users2, ShieldCheck, Cpu, Globe, ChevronDown, Plus } from 'lucide-react';

const TeamArchitecture: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const coreTeam = [
        {
            name: "Bipin Badgujar",
            role: "Chief Executive Officer",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Jitendra Tajanpure",
            role: "VP Finance & Accounts",
            img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Harshal Ghoge",
            role: "VP - Marketing & Projects",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Sandeep Kale",
            role: "VP - Strategy & Biz Dev",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Shubham Badgujar",
            role: "Manager - IBD",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const regionalTeams = [
        { name: "Mr Rohan Gujrathi", role: "Regional Sales Head - West (GJ)" },
        { name: "Mr Vikrant Deshpande", role: "Regional Sales Head - North" },
        { name: "Mr Dnyaneshwar Gaikwad", role: "Regional Sales Head - South" },
        { name: "Mr. Samir Ekhande", role: "Logistics and Supply Chain Manager" },
        { name: "Mr Sagar Ranmale", role: "Manager - Design & Product Engineering" },
        { name: "Mr Vijay Mahajan", role: "Manager - Production Planning & Manufacturing" },
        { name: "Mrs Anita Kanse", role: "Assistant Manager - Accounts" },
        { name: "Mr. Roshan Patil", role: "Regional Head - CS&S - South" },
        { name: "Mr. Rahul Khairnar", role: "Assistant Manger - Technical support - CS&S" },
        { name: "Mr Ramesh Mali", role: "Assistant Manager - Purchase and Store" },
        { name: "Mr. Yash Gujarathi", role: "Regional Sales Head - West (GJ)" },
        { name: "Mr. Vikrant Shewale", role: "Head Technical Services and Quality Assurance" },
        { name: "Mr. Roshan Patil", role: "Head Customer Service and Quality Control" },
        { name: "Mr. Rohan Gujarathi", role: "Head - AMC & After Sales" },
        { name: "Mr. Vikas Patole", role: "Resources & Business Development Corporate Social Responsibility" }
    ];

    return (
        <section className="relative bg-white overflow-hidden group/team">
            {/* Minimalist Multi-state Gate */}
            <div
                id="team-gate"
                className={`transition-all duration-700 ease-in-out border-b border-slate-100 ${isOpen ? 'bg-slate-50' : 'bg-white hover:bg-slate-50'}`}
            >
                <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                    <div
                        className="py-12 flex flex-col md:flex-row items-center justify-between gap-8 cursor-pointer group/gate"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="flex items-center gap-6">
                            <div className={`w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-aureole-blue border-aureole-blue rotate-45' : 'group-hover/gate:border-aureole-cyan group-hover/gate:rotate-90'}`}>
                                <Plus size={20} className={isOpen ? 'text-white' : 'text-slate-400 group-hover/gate:text-aureole-cyan'} />
                            </div>
                            <div>
                                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-1">ORGANIZATIONAL HIERARCHY</h3>
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl lg:text-4xl font-[950] font-heading text-[#001529] uppercase tracking-tighter">
                                        The <span className="text-aureole-blue">Aureole</span> Team
                                    </span>
                                    <div className={`px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-full border transition-all ${isOpen ? 'bg-aureole-cyan/10 border-aureole-cyan text-aureole-cyan' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                                        {isOpen ? 'Expanded' : 'Hidden'}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="hidden lg:flex items-center -space-x-4">
                                {coreTeam.map((m, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg hover:z-10 transition-transform hover:scale-110">
                                        <img src={m.img} alt="" className="w-full h-full object-cover grayscale" />
                                    </div>
                                ))}
                            </div>

                            <div className="h-10 w-px bg-slate-200 hidden md:block"></div>

                            <button
                                className={`flex items-center gap-4 px-6 py-3 rounded-full transition-all duration-500 relative group/btn overflow-hidden ${isOpen
                                    ? 'bg-slate-100 text-slate-600'
                                    : 'bg-[#001529] text-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,102,255,0.2)] hover:-translate-y-0.5'
                                    }`}
                            >
                                {/* Vivid Blue Pulse Effect when closed */}
                                {!isOpen && (
                                    <div className="absolute inset-0 rounded-full bg-aureole-blue animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-60 pointer-events-none group-hover/btn:opacity-0 transition-opacity"></div>
                                )}

                                <span className={`text-[10px] font-black uppercase tracking-[0.25em] relative z-10 transition-colors ${isOpen ? 'group-hover/btn:text-aureole-blue' : 'text-white'}`}>
                                    {isOpen ? 'COLLAPSE' : 'DISCOVER TEAM'}
                                </span>

                                <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all relative z-10 ${isOpen
                                    ? 'bg-slate-200 text-slate-400 group-hover/btn:bg-aureole-blue group-hover/btn:text-white'
                                    : 'bg-white/10 text-white group-hover/btn:bg-aureole-blue group-hover/btn:text-white'
                                    }`}>
                                    <ChevronDown size={14} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : 'group-hover/btn:translate-y-0.5'}`} />
                                </div>

                                {/* Hover Shine Effect */}
                                <div className="absolute inset-0 w-1/2 h-full bg-white/5 skew-x-[45deg] -translate-x-full group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-in-out"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expandable Content Area - Tree Structure */}
            <div
                ref={contentRef}
                className={`transition-all duration-1000 ease-in-out overflow-hidden ${isOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="bg-aureole-soft py-8 lg:py-12">
                    <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                        <div className="text-center mb-24">
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <span className="w-12 h-[1px] bg-slate-200"></span>
                                <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400">EXECUTIVE ARCHITECTURE</h4>
                                <span className="w-12 h-[1px] bg-slate-200"></span>
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none">
                                LEADERSHIP <span className="text-aureole-blue">TREE.</span>
                            </h2>
                        </div>

                        {/* The Tree Layout */}
                        <div className="relative py-20 pb-0">
                            {/* Vertical Connector Line */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 hidden lg:block"></div>

                            <div className="space-y-12">
                                {/* Level 1: CEO Line */}
                                <div className="relative z-10 flex justify-center">
                                    <div className="group relative bg-white border border-slate-200 p-6 sm:p-8 w-full max-w-xl flex flex-col sm:flex-row gap-8 hover:border-aureole-blue transition-all duration-500 overflow-hidden shadow-xl shadow-slate-200/50">
                                        <div className="absolute top-0 right-0 flex">
                                            <a href="#" className="w-12 h-12 flex items-center justify-center bg-slate-50 border-b border-l border-slate-200 hover:bg-aureole-blue text-[#001529] hover:text-white transition-all">
                                                <Linkedin size={18} />
                                            </a>
                                        </div>

                                        <div className="w-full sm:w-1/3 aspect-[3/4] overflow-hidden border border-slate-100 shadow-inner">
                                            <img src={coreTeam[0].img} alt={coreTeam[0].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                        </div>
                                        <div className="w-full sm:w-2/3 flex flex-col pt-2">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="text-[9px] font-black text-aureole-cyan uppercase tracking-[0.4em]">CHIEF EXECUTIVE</span>
                                                <div className="h-px flex-grow bg-slate-100"></div>
                                            </div>
                                            <h4 className="text-3xl lg:text-4xl font-[950] text-[#001529] uppercase tracking-tighter leading-none mb-3">{coreTeam[0].name}</h4>
                                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{coreTeam[0].role}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Level 2: Functional Core */}
                                <div className="relative">
                                    {/* Horizontal Connector Line */}
                                    <div className="absolute top-0 left-12 right-12 h-px bg-slate-200 hidden lg:block"></div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
                                        {coreTeam.slice(1).map((member, idx) => (
                                            <div key={idx} className="group bg-white flex flex-col transition-all duration-500 hover:bg-slate-50 relative z-10 p-8">
                                                {/* Connecting Stub */}
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-px h-10 bg-slate-200 hidden lg:block"></div>

                                                <div className="aspect-square mb-6 overflow-hidden border border-slate-100 shadow-sm relative group/img">
                                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-700" />
                                                    <div className="absolute inset-0 bg-aureole-blue/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-aureole-blue hover:bg-aureole-blue hover:text-white transition-all shadow-md">
                                                            <Linkedin size={16} />
                                                        </a>
                                                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-aureole-cyan hover:bg-aureole-cyan hover:text-white transition-all shadow-md">
                                                            <IdCard size={16} />
                                                        </a>
                                                    </div>
                                                </div>

                                                <h5 className="text-xl font-[950] text-[#001529] uppercase tracking-tighter leading-none mb-2">{member.name}</h5>
                                                <p className="text-[9px] font-black text-aureole-cyan uppercase tracking-widest opacity-80">{member.role}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Operational Network Section */}
                        {/* Vertical Spacer to main collapse action */}
                        <div className="mt-8 border-t border-slate-200"></div>

                        <div className="mt-8 flex flex-col items-center">
                            <div className="relative h-32 w-32 flex items-center justify-center group/anchor">
                                {/* Focused Ripple Effects */}
                                <div className="absolute inset-0 rounded-full border border-slate-100 group-hover/anchor:scale-105 group-hover/anchor:border-aureole-blue/20 transition-all duration-700"></div>
                                <div className="absolute inset-4 rounded-full border border-slate-200/40 group-hover/anchor:scale-110 group-hover/anchor:border-aureole-cyan/10 transition-all duration-700 delay-75"></div>

                                {/* Soft Glow Backdrop */}
                                <div className="absolute inset-8 bg-gradient-to-tr from-aureole-blue/5 to-aureole-cyan/5 rounded-full blur-xl group-hover/anchor:opacity-100 opacity-0 transition-opacity duration-500"></div>

                                {/* Main Action Button */}
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        const gate = document.getElementById('team-gate');
                                        if (gate) {
                                            window.scrollTo({
                                                top: gate.offsetTop,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                    className="relative w-24 h-24 bg-white border border-slate-100 rounded-full flex flex-col items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,102,255,0.08)] hover:border-aureole-blue/30 transition-all duration-500 z-10 overflow-hidden"
                                >
                                    {/* Subtle Glass Highlight */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 opacity-40"></div>

                                    <div className="relative z-10 flex flex-col items-center pt-1">
                                        <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center mb-1.5 group-hover/anchor:bg-aureole-blue group-hover/anchor:text-white transition-all duration-500">
                                            <ChevronDown size={18} className="rotate-180 transition-transform group-hover/anchor:-translate-y-0.5" />
                                        </div>
                                        <span className="text-[8px] font-black text-slate-400 group-hover/anchor:text-aureole-blue transition-colors uppercase tracking-[0.3em]">COLLAPSE</span>
                                    </div>

                                    {/* Soft Progress Line */}
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-aureole-blue to-aureole-cyan group-hover/anchor:w-full transition-all duration-700 delay-100"></div>
                                </button>

                                {/* Minimalist Side Accents */}
                                <div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-4 h-[1px] bg-slate-200 group-hover/anchor:w-8 group-hover/anchor:bg-aureole-blue/30 transition-all duration-700"></div>
                                <div className="absolute right-[-15px] top-1/2 -translate-x-1/2 w-4 h-[1px] bg-slate-200 group-hover/anchor:w-8 group-hover/anchor:bg-aureole-blue/30 transition-all duration-700"></div>
                            </div>

                            <p className="mt-8 text-[7px] font-bold text-slate-300 uppercase tracking-[0.5em] group-hover/anchor:text-slate-400 transition-colors">
                                Return to Overview
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="team-trigger" className="absolute top-0 w-full h-px pointer-events-none"></div>
        </section>
    );
};

export default TeamArchitecture;
