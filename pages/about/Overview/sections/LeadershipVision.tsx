
import React from 'react';
import { Award } from 'lucide-react';

const LeadershipVision: React.FC = () => {
    return (
        <section className="relative py-16 sm:py-24 bg-transparent group">


            <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-4 relative group">
                        <div className="frame-slant frame-slant-r pl-5 pt-5">
                            <div className="aspect-[3/4] overflow-hidden transition-all duration-1000 bg-slate-50">
                                <img
                                    src="/about/managing-director.webp"
                                    alt="Dr. Kiran Badgujar"
                                    className="w-full h-full object-cover object-top"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mt-8">
                            <h4 className="text-4xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none mb-2">Dr. Kiran Badgujar</h4>
                            <div className="flex items-center gap-4">
                                <span className="slant-mark" aria-hidden="true"></span>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-aureole-cyan">FOUNDER & DIRECTOR</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="flex flex-col mb-12">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="slant-mark" aria-hidden="true"></span>
                                <h2 className="text-[11px] font-black font-heading uppercase tracking-[0.4em] text-slate-400">LEADERSHIP VISION</h2>
                            </div>
                            <h3 className="text-4xl lg:text-6xl font-[950] font-heading text-[#001529] uppercase tracking-[0.02em] leading-[0.95]">
                                Directing <span className="gt">Excellence.</span>
                            </h3>
                        </div>

                        <div className="space-y-8 text-slate-600">
                            <p className="text-xl font-medium text-[#001529] leading-tight tracking-tight g-left pl-8">
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

                            <div className="grid grid-cols-2 gap-4 mt-12">
                                <div className="bg-white border border-slate-100 p-8 rounded-sm shadow-sm g-top">
                                    <div className="g-ico mb-4"><Award size={22} /></div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">India 500 CEO</p>
                                    <p className="text-[8px] font-black uppercase tracking-widest text-slate-500">Recognition 2022</p>
                                </div>
                                <div className="bg-white border border-slate-100 p-8 rounded-sm shadow-sm g-top">
                                    <div className="g-ico mb-4"><Award size={22} /></div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">Maharashtra Udyojakta</p>
                                    <p className="text-[8px] font-black uppercase tracking-widest text-slate-500">Impact Award 2025</p>
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
