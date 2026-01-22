
import React from 'react';
import { Award } from 'lucide-react';

const LeadershipVision: React.FC = () => {
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden border-b border-slate-100 bg-white">
            <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none select-none">
                <span className="text-[180px] lg:text-[250px] font-black font-heading text-[#001529] tracking-tighter leading-none uppercase">GROUP</span>
            </div>

            <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5 relative group">
                        <div className="aspect-[3/4] overflow-hidden transition-all duration-1000 border-b-[20px] border-[#001529] shadow-2xl bg-slate-50">
                            <img
                                src="/about/managing-director.jpg"
                                alt="Dr. Kiran Badgujar"
                                className="w-full h-full object-cover object-top"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                                }}
                            />
                        </div>
                        <div className="mt-8">
                            <h4 className="text-4xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none mb-2">Dr. Kiran Badgujar</h4>
                            <div className="flex items-center gap-4">
                                <div className="h-[1px] w-12 bg-aureole-cyan"></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-aureole-cyan">FOUNDER & DIRECTOR</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="flex flex-col mb-12">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="w-12 h-[1px] bg-slate-200"></span>
                                <h2 className="text-[11px] font-black font-heading uppercase tracking-[0.4em] text-slate-400">LEADERSHIP VISION</h2>
                            </div>
                            <h3 className="text-4xl lg:text-6xl font-[950] font-heading text-[#001529] uppercase tracking-[0.02em] leading-[0.95]">
                                Directing <span className="text-aureole-blue">Excellence.</span>
                            </h3>
                        </div>

                        <div className="space-y-8 text-slate-600">
                            <p className="text-xl font-medium text-[#001529] leading-tight tracking-tight border-l-2 border-aureole-cyan pl-6">
                                "It gives me immense pride to address you from the Director's Desk at Aureole Group. Our mission remains steadfast—to improve lives with purpose."
                            </p>
                            <div className="text-[15px] font-medium leading-relaxed tracking-tight text-justify space-y-6">
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
    );
};

export default LeadershipVision;
