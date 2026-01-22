
import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';

const PolicyFramework: React.FC = () => {
    const referencedStandards = [
        "IEC 60068 series (Environmental & humidity testing)",
        "ISO 14971:2019 (Risk management for medical devices)",
        "ISO 20417:2021 (Information supplied by manufacturer)",
        "IEC / EN 60601 series (Medical electrical equipment safety)",
        "IEC/TR 62366-2 (Usability engineering for medical devices)",
        "ASTM E595 (Outgassing test methods)"
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Standards Column */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-[1px] bg-aureole-blue"></span>
                            <h3 className="text-[11px] font-black font-heading uppercase tracking-[0.4em] text-aureole-blue">TECHNICAL FRAMEWORK</h3>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-[950] font-heading text-aureole-slate uppercase tracking-tighter mb-8 italic">REFERENCED STANDARDS</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {referencedStandards.map((std, i) => (
                                <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-sm hover:border-aureole-cyan transition-colors">
                                    <p className="text-[10px] font-black text-aureole-slate uppercase mb-1">{std.split(' (')[0]}</p>
                                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest line-clamp-1">{std.split(' (')[1]?.replace(')', '') || 'Framework'}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Policy Column */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-[1px] bg-slate-200"></span>
                            <h3 className="text-[11px] font-black font-heading uppercase tracking-[0.4em] text-slate-400">QUALITY COMMITMENT</h3>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-[950] font-heading text-aureole-slate uppercase tracking-tighter mb-8 italic">QUALITY POLICY</h2>
                        <p className="text-[14px] font-medium text-slate-500 leading-relaxed mb-8 text-justify">
                            Committed to total customer satisfaction. Our focus remains on continuous improvement and 100% accuracy across all manufacturing processes.
                        </p>
                        <div className="grid grid-cols-2 gap-px bg-slate-100 border border-slate-100 mb-8">
                            {["Customer Sat", "Modern Tech", "Accuracy", "Improvement"].map((item, i) => (
                                <div key={i} className="bg-white p-6 flex flex-col items-center text-center">
                                    <CheckCircle2 size={16} className={i % 2 === 0 ? "text-aureole-cyan mb-2" : "text-aureole-blue mb-2"} />
                                    <span className="text-[9px] font-black text-aureole-slate uppercase tracking-widest">{item}</span>
                                </div>
                            ))}
                        </div>
                        <a href="/compliance/Quality Policy.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-aureole-blue text-[10px] font-black uppercase tracking-widest hover:text-aureole-cyan transition-all">
                            <Download size={14} /> Get Full Policy PDF
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PolicyFramework;
