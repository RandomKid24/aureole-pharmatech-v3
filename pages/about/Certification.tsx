
import React, { useEffect } from 'react';
import { ShieldCheck, Award, FileText, CheckCircle2, Globe, ArrowRight } from 'lucide-react';

const Certification: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero */}
            <section className="relative py-24 sm:py-32 overflow-hidden border-b border-slate-100">
                <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none select-none">
                    <span className="text-[180px] lg:text-[250px] font-black text-[#001529] tracking-tighter leading-none uppercase">CERT</span>
                </div>

                <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-blue">REGULATORY COMPLIANCE</h2>
                        </div>
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-[950] text-[#001529] uppercase tracking-tighter leading-[0.85] mb-12">
                            UPLIFTING <br /> GLOBAL <span className="text-aureole-cyan">STANDARDS.</span>
                        </h1>
                        <p className="text-slate-500 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed max-w-sm">
                            Commitment to ICH guidelines, 21 CFR Part 11, and ISO excellence across all engineering units.
                        </p>
                    </div>
                </div>
            </section>

            {/* Grid Content Placeholder */}
            <section className="py-24 lg:py-40">
                <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
                        {[
                            { id: 'ISO 9001:2015', cat: 'Quality Management' },
                            { id: 'CE CERTIFIED', cat: 'Safety Standards' },
                            { id: '21 CFR PART 11', cat: 'Data Compliance' },
                            { id: 'ICH GUIDELINES', cat: 'Pharmaceutical Stability' },
                            { id: 'WHO-GMP', cat: 'Manufacturing Std' },
                            { id: 'ISO 14001:2015', cat: 'Environment' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-12 group hover:bg-aureole-blue transition-all duration-500">
                                <div className="flex justify-between items-start mb-10">
                                    <CheckCircle2 className="text-slate-200 group-hover:text-aureole-cyan transition-colors" size={32} />
                                    <span className="text-[8px] font-black text-slate-300 group-hover:text-white/40 uppercase tracking-widest italic font-serif">Aureole Unit Precision</span>
                                </div>
                                <h4 className="text-3xl font-[950] text-[#001529] group-hover:text-white uppercase tracking-tighter leading-none mb-3">
                                    {item.id}
                                </h4>
                                <p className="text-[10px] font-black text-aureole-cyan uppercase tracking-widest mb-10 group-hover:text-white/60">
                                    {item.cat}
                                </p>
                                <div className="w-full h-1 bg-slate-50 group-hover:bg-white/10 transition-colors mb-6"></div>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest group-hover:text-white/40">
                                    Documentation & Artifacts pending for this section.
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 flex flex-col items-center text-center">
                        <div className="w-px h-24 bg-slate-200 mb-10"></div>
                        <p className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-300 mb-4 italic">COMING SOON</p>
                        <h3 className="text-4xl font-[950] text-[#001529] uppercase tracking-tighter italic">VALIDATED EXCELLENCE.</h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certification;
