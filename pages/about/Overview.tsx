
import React, { useEffect } from 'react';
import { Shield, Target, Eye, Award, Building2, ExternalLink, ArrowRight } from 'lucide-react';

const Overview: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const ventures = [
        {
            year: "2012",
            name: "Adityam Foundation",
            sub: "Kiran Aashecha",
            desc: "An NGO driving social welfare, education, healthcare, and rural development initiatives in Nashik, Maharashtra. Dedicated to improving lives through compassion-driven initiatives.",
            img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
        },
        {
            year: "2012",
            name: "Mack Auraa Healthcare",
            sub: "Veterinary Care",
            desc: "Focuses on veterinary healthcare, producing products that enhance livestock well-being and farm productivity across the region.",
            img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"
        },
        {
            year: "2019",
            name: "Aureole Process Equipment",
            sub: "Industrial Hardware",
            desc: "Specializes in high-quality process equipment for the pharmaceutical and biotech industries, supplying autoclaves and distillation plants.",
            img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
        },
        {
            year: "2021",
            name: "Aureole Pharma",
            sub: "Precision Tech",
            desc: "Manufactures advanced pharmaceutical equipment, including stability chambers and lab instruments, serving top-tier clients across India.",
            img: "https://images.unsplash.com/photo-1579154273154-1886105370cc?auto=format&fit=crop&q=80&w=800"
        },
        {
            year: "2024",
            name: "Swapnkiran Resort",
            sub: "Agro-Tourism",
            desc: "An eco-friendly agro-tourism resort near Trimbakeshwar, Nashik, offering serene stays and sustainable farm experiences.",
            img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white selection:bg-aureole-blue selection:text-white">
            {/* High-Impact Hero */}
            <section className="relative py-24 sm:py-32 overflow-hidden border-b border-slate-100">
                <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none select-none">
                    <span className="text-[180px] lg:text-[250px] font-black text-[#001529] tracking-tighter leading-none uppercase">GROUP</span>
                </div>

                <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-blue">CORPORATE OVERVIEW</h2>
                        </div>
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-[950] text-[#001529] uppercase tracking-tighter leading-[0.85] mb-12">
                            A DYNAMIC <br /> FAMILY OF <span className="text-aureole-cyan">COMPANIES.</span>
                        </h1>
                        <div className="p-8 sm:p-12 border-l-[4px] border-aureole-blue bg-slate-50/50 max-w-3xl">
                            <p className="text-xl sm:text-2xl text-[#001529] font-black uppercase tracking-tight leading-[1.1] mb-6">
                                Pharmaceutical solutions, process equipment, healthcare, and hospitality—all grounded in quality, innovation, and integrity.
                            </p>
                            <p className="text-[11px] text-slate-500 font-bold leading-relaxed uppercase tracking-[0.15em] text-justify max-w-2xl">
                                What began as a vision has today flourished into a globally recognized family of ventures, redefined by our habit of excellence and our commitment to improving lives with purpose.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Director's Desk - Brutalist Style */}
            <section className="py-24 lg:py-40 bg-white">
                <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-5 relative group">
                            <div className="aspect-[3/4] overflow-hidden grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000 border-b-[20px] border-[#001529] shadow-2xl">
                                <img
                                    src="/about/md_profile.jpg"
                                    alt="Dr. Kiran Badgujar"
                                    className="w-full h-full object-cover object-top"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                                    }}
                                />
                            </div>
                            <div className="mt-8">
                                <h4 className="text-4xl font-[950] text-[#001529] uppercase tracking-tighter leading-none mb-2">Dr. Kiran Badgujar</h4>
                                <div className="flex items-center gap-4">
                                    <div className="h-[1px] w-12 bg-aureole-cyan"></div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-aureole-cyan">FOUNDER & DIRECTOR</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-12 h-[1px] bg-slate-200"></span>
                                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">DIRECTOR'S DESK</h2>
                            </div>
                            <h3 className="text-4xl lg:text-6xl font-[950] text-[#001529] uppercase tracking-tighter leading-[0.85] mb-10">
                                EXCELLENCE IS NOT <br /> AN ACT, BUT A <span className="text-aureole-blue">HABIT.</span>
                            </h3>

                            <div className="space-y-8 text-slate-600">
                                <p className="text-xl font-bold text-[#001529] leading-tight uppercase tracking-tight italic border-l-2 border-aureole-cyan pl-6">
                                    "It gives me immense pride to address you from the Director's Desk at Aureole Group. Our mission remains steadfast—to improve lives with purpose."
                                </p>
                                <div className="text-[12px] font-bold leading-relaxed uppercase tracking-wider text-justify space-y-6">
                                    <p>
                                        With over 27 years of experience in the pharmaceutical industry, my journey has been driven by the belief that innovation and compassion must go hand in hand. Whether it's through cutting-edge technologies or social initiatives via Adityam Foundation, we strive for impact.
                                    </p>
                                    <p>
                                        In 2022, we were honored with the India 500 CEO Award, and I'm thrilled to share our latest recognition: the Maharashtra Udyojakta Puraskar 2025, celebrating our entrepreneurial spirit and industry impact.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-px bg-slate-100 border border-slate-100 mt-12">
                                    <div className="bg-white p-8 group hover:bg-aureole-blue transition-all duration-500">
                                        <Award className="text-aureole-cyan mb-4 group-hover:text-white" size={32} />
                                        <p className="text-[10px] font-black uppercase tracking-widest text-[#001529] group-hover:text-white">India 500 CEO</p>
                                        <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white/60">Recognition 2022</p>
                                    </div>
                                    <div className="bg-white p-8 group hover:bg-aureole-blue transition-all duration-500">
                                        <Award className="text-aureole-cyan mb-4 group-hover:text-white" size={32} />
                                        <p className="text-[10px] font-black uppercase tracking-widest text-[#001529] group-hover:text-white">Maharashtra Udyojakta</p>
                                        <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white/60">Impact Award 2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Grid */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                    <div className="grid md:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
                        {[
                            { title: "Our Vision", desc: "To be at the forefront of the pharmaceutical industry, redefining excellence through innovation, quality, and sustainability.", icon: <Eye size={32} /> },
                            { title: "Our Mission", desc: "To lead with innovation, uphold the highest quality standards, and promote sustainability in pharmaceutical solutions through integrity.", icon: <Shield size={32} /> },
                            { title: "Our Goal", desc: "To revolutionize multiple industries by consistently delivering innovative solutions and unmatched quality in pharmaceutical services.", icon: <Target size={32} /> }
                        ].map((box, i) => (
                            <div key={i} className="bg-white p-12 lg:p-16 group hover:bg-aureole-blue cursor-default transition-all duration-700">
                                <div className="text-aureole-cyan group-hover:text-white mb-8 transition-colors">
                                    {box.icon}
                                </div>
                                <h4 className="text-3xl font-[950] text-[#001529] uppercase tracking-tighter mb-4 group-hover:text-white transition-colors">
                                    {box.title}
                                </h4>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed group-hover:text-white/80 transition-colors">
                                    {box.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ventures - Typographic Slot Design */}
            <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
                <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none select-none">
                    <span className="text-[150px] font-black text-[#001529] tracking-tighter leading-none uppercase italic">VENTURE</span>
                </div>

                <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                    <div className="flex items-center gap-4 mb-20">
                        <span className="w-12 h-[2px] bg-aureole-blue"></span>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-blue">OPERATIONAL ENTITIES</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-slate-100 bg-slate-100">
                        {ventures.map((v, idx) => (
                            <div key={idx} className="bg-white p-10 group hover:bg-aureole-blue transition-all duration-700 flex flex-col min-h-[450px] border-r border-b border-slate-100">
                                <div className="mb-12">
                                    <span className="text-5xl font-[950] text-slate-100 group-hover:text-white/20 transition-all duration-700 block mb-2 leading-none">
                                        {v.year}
                                    </span>
                                    <div className="w-8 h-[2px] bg-aureole-cyan group-hover:bg-white transition-colors"></div>
                                </div>

                                <div className="flex-grow flex flex-col">
                                    <h4 className="text-2xl font-[950] text-[#001529] group-hover:text-white uppercase tracking-tighter leading-none mb-4 transition-colors">
                                        {v.name}
                                    </h4>
                                    <p className="text-[9px] font-black text-aureole-cyan uppercase tracking-widest mb-8 group-hover:text-white/80 transition-colors">
                                        {v.sub}
                                    </p>
                                    <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider leading-relaxed group-hover:text-white/60 transition-all text-justify">
                                        {v.desc}
                                    </p>
                                </div>

                                <div className="mt-12 pt-8 border-t border-slate-50 group-hover:border-white/10 flex justify-between items-center transition-colors">
                                    <div className="p-3 border border-slate-100 group-hover:border-white/20 bg-slate-50 group-hover:bg-white/5 transition-all">
                                        <Building2 className="text-slate-300 group-hover:text-white" size={18} />
                                    </div>
                                    <ArrowRight size={18} className="text-slate-200 group-hover:text-aureole-cyan group-hover:translate-x-2 transition-all" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Overview;
