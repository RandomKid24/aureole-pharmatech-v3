
import React, { useEffect } from 'react';
import { Linkedin, Mail, Contact, ArrowUpRight, User, IdCard, Globe } from 'lucide-react';

const Team: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const coreTeam = [
        {
            name: "Dr. Kiran Badgujar",
            role: "Founder & Director",
            company: "Aureole Pharma Pvt. Ltd.",
            quote: "Individuals constitute the invaluable cornerstone of any organization. It is through their contributions that we establish processes, vision, and foster collaborations.",
            img: "/about/md_profile.jpg"
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
        <div className="pt-24 min-h-screen bg-white">
            {/* Leadership Hero */}
            <section className="relative py-24 sm:py-32 overflow-hidden border-b border-slate-100">
                <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none">
                    <span className="text-[180px] lg:text-[250px] font-black text-[#001529] tracking-tighter leading-none uppercase italic">TEAM</span>
                </div>

                <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-blue">ORGANIZATIONAL TALENT</h2>
                        </div>
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-[950] text-[#001529] uppercase tracking-tighter leading-[0.85] mb-12">
                            PRECISION <br /> MINDSET, <span className="text-aureole-cyan">COLLECTIVE IMPACT.</span>
                        </h1>
                        <p className="text-slate-500 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed max-w-sm">
                            The driving force behind our precision engineering <br /> and global innovation excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership Section - Strategic Tree */}
            <section className="py-24 lg:py-40 relative overflow-hidden bg-white">
                {/* Section Watermark */}
                <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none select-none">
                    <span className="text-[150px] font-black text-[#001529] tracking-tighter leading-none uppercase italic">CORE</span>
                </div>

                <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                    <div className="max-w-4xl mb-24">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-blue">STRATEGIC HIERARCHY</h2>
                        </div>
                        <h3 className="text-5xl lg:text-7xl font-[950] text-[#001529] uppercase tracking-tighter leading-[0.85] mb-8">
                            EXECUTIVE <br /> <span className="text-aureole-cyan">ARCHITECTURE.</span>
                        </h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed max-w-sm">
                            A tiered leadership structure driving global vision through specialized functional expertise.
                        </p>
                    </div>

                    {/* Spotlight MD */}
                    <div className="grid lg:grid-cols-12 gap-16 items-center mb-32 border-b border-slate-100 pb-32">
                        <div className="lg:col-span-4">
                            <div className="aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-1000 border-b-[15px] border-[#001529] shadow-2xl overflow-hidden bg-slate-50">
                                <img
                                    src={coreTeam[0].img}
                                    alt={coreTeam[0].name}
                                    className="w-full h-full object-cover object-top"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800";
                                    }}
                                />
                            </div>
                            <div className="mt-8">
                                <h4 className="text-3xl font-[950] text-[#001529] uppercase tracking-tighter mb-2">{coreTeam[0].name}</h4>
                                <div className="flex items-center gap-4">
                                    <div className="h-[1px] w-12 bg-aureole-blue"></div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-aureole-blue">FOUNDER & DIRECTOR</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="relative mb-10">
                                <span className="text-8xl text-slate-100 font-serif absolute -top-12 -left-4 select-none">"</span>
                                <p className="text-2xl lg:text-4xl font-[950] text-[#001529] tracking-tighter leading-[0.9] relative z-10 border-l-4 border-aureole-cyan pl-10">
                                    "{coreTeam[0].quote}"
                                </p>
                            </div>
                            <p className="text-slate-500 text-[12px] font-bold tracking-widest leading-relaxed max-w-2xl text-justify mb-12">
                                Our latest endeavor, Aureole Pharma, marks the commencement of a journey characterized by a fresh vision and state-of-the-art technology, undertaken alongside my trusted team. I consistently hold the conviction that individuals constitute the invaluable cornerstone of any organization.
                            </p>
                            <div className="flex gap-6">
                                <button className="bg-aureole-blue text-white p-5 hover:bg-aureole-cyan transition-colors border border-aureole-blue">
                                    <Linkedin size={20} />
                                </button>
                                <button className="px-10 py-5 bg-white border border-slate-200 text-[#001529] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-4 hover:border-aureole-blue transition-all group">
                                    Virtual Card <IdCard size={18} className="group-hover:text-aureole-blue" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Hierarchical Leadership Tree */}
                    <div className="relative py-20 pb-0 shadow-[0_0_100px_rgba(0,0,0,0.02)]">
                        {/* Connecting Line - Vertical Base */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-100 hidden lg:block"></div>

                        <div className="space-y-32">
                            {/* Level 1: CEO Line */}
                            <div className="relative z-10 flex justify-center">
                                {coreTeam.slice(1, 2).map((member, idx) => (
                                    <div key={idx} className="group relative bg-white border border-slate-200 p-10 w-full max-w-2xl flex gap-12 hover:border-aureole-blue transition-all duration-500 overflow-hidden">

                                        {/* Premium Action Block */}
                                        <div className="absolute top-0 right-0 flex">
                                            <a href="#" className="w-16 h-16 flex items-center justify-center bg-slate-50 border-b border-l border-slate-200 hover:bg-aureole-blue text-[#001529] hover:text-white transition-all group/link">
                                                <Linkedin size={24} />
                                            </a>
                                            <a href="#" className="w-16 h-16 flex items-center justify-center bg-aureole-cyan/10 border-b border-l border-aureole-cyan/20 hover:bg-aureole-cyan text-aureole-cyan hover:text-[#001529] transition-all group/card">
                                                <IdCard size={24} />
                                            </a>
                                        </div>

                                        <div className="w-1/3 aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-slate-100">
                                            <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-2/3 flex flex-col pt-6">
                                            <div className="flex items-center gap-3 mb-6">
                                                <span className="text-[10px] font-black text-aureole-cyan uppercase tracking-[0.4em]">EXECUTIVE LEADERSHIP</span>
                                                <div className="h-px flex-grow bg-slate-100"></div>
                                            </div>
                                            <h4 className="text-5xl font-[950] text-[#001529] uppercase tracking-tighter leading-none mb-4">{member.name}</h4>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">{member.role}</p>

                                            <div className="mt-auto flex items-center gap-6">
                                                <div className="flex flex-col">
                                                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">AUREOLE IDENTITY</span>
                                                    <span className="text-[10px] font-black text-[#001529] uppercase tracking-tight">VERIFIED CORE MEMBER</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Level 2: Functional Core (Grid of 4) */}
                            <div className="relative">
                                {/* Horizontal Cross Line */}
                                <div className="absolute top-0 left-12 right-12 h-px bg-slate-100 hidden lg:block"></div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100">
                                    {coreTeam.slice(2, 6).map((member, idx) => (
                                        <div key={idx} className="group bg-white flex flex-col transition-all duration-500 hover:bg-slate-50/50 relative z-10">
                                            {/* Vertical Connectors */}
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-px h-10 bg-slate-100 hidden lg:block"></div>

                                            <div className="p-10 flex-grow">
                                                <div className="aspect-[4/5] mb-10 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-slate-100">
                                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                                </div>
                                                <h4 className="text-2xl font-[950] text-[#001529] uppercase tracking-tighter leading-none mb-3">{member.name}</h4>
                                                <p className="text-[10px] font-black text-aureole-cyan uppercase tracking-widest mb-6 leading-tight min-h-[40px] opacity-80">{member.role}</p>
                                            </div>

                                            {/* Integrated Action Strip */}
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

            {/* Operational Team - Spatial Corner Layout */}
            <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
                {/* Minimal Watermark */}
                <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none">
                    <span className="text-[150px] font-black text-[#001529] tracking-tighter leading-none uppercase italic">TEAM</span>
                </div>

                <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-12">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-12 h-[2px] bg-aureole-blue"></span>
                                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-blue">OPERATIONAL HUB</h2>
                            </div>
                            <h3 className="text-6xl lg:text-7xl font-[950] text-[#001529] uppercase tracking-tighter leading-[0.8] mb-10">
                                MEET THE <br /> <span className="text-aureole-cyan">OPERATIONAL TEAM.</span>
                            </h3>
                        </div>
                        <div className="lg:max-w-xs pt-4">
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                                A nationwide network of specialists delivering precision and excellence across every regional touchpoint.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
                        {regionalTeams.map((member, idx) => (
                            <div key={idx} className="group relative bg-white border border-slate-100 p-10 min-h-[220px] flex flex-col justify-between hover:border-aureole-blue/30 transition-all duration-500 overflow-hidden">

                                {/* Top Section: Name and Action */}
                                <div className="flex justify-between items-start relative z-10">
                                    <div className="max-w-[70%]">
                                        <h5 className="text-2xl font-[950] text-[#001529] uppercase tracking-tighter leading-tight group-hover:text-aureole-blue transition-colors">
                                            {member.name}
                                        </h5>
                                    </div>

                                    {/* Virtual Card Action - Top Right Corner */}
                                    <a href="#" className="w-12 h-12 flex items-center justify-center border border-slate-100 bg-slate-50 hover:bg-aureole-cyan hover:border-aureole-cyan transition-all text-slate-300 hover:text-[#001529] group/card relative z-20">
                                        <IdCard size={20} />
                                    </a>
                                </div>

                                {/* Bottom Section: Role/Designation */}
                                <div className="pt-8 border-t border-slate-50 flex items-end justify-between relative z-10">
                                    <div className="space-y-2">
                                        <span className="text-[8px] font-black text-slate-300 uppercase tracking-[0.3em]">DESIGNATION</span>
                                        <p className="text-[11px] font-black text-aureole-cyan uppercase tracking-widest leading-tight">
                                            {member.role}
                                        </p>
                                    </div>

                                    {/* Subtle Corner Accent */}
                                    <div className="w-2 h-2 bg-slate-100 group-hover:bg-aureole-blue transition-colors"></div>
                                </div>

                                {/* Background Spatial Decal (Index) - Subtle enough not to be taken as strict hierarchy */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] font-black text-slate-50 opacity-[0.4] pointer-events-none select-none tracking-tighter uppercase italic group-hover:text-aureole-cyan/[0.03] transition-colors leading-none">
                                    {(idx + 1).toString().padStart(2, '0')}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
