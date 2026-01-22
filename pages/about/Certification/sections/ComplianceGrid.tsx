
import React from 'react';
import { CheckCircle2, Download, ScrollText } from 'lucide-react';

const ComplianceGrid: React.FC = () => {
    const isoDetails = {
        id: "305024011910Q",
        location: "Plot No. B-61, Malegaon MIDC, Sinnar, Nashik – 422113, Maharashtra",
        certDate: "19 January 2024",
        expiry: "18 January 2027",
        file: "/compliance/ISO 9001 2015 Certificaten Annex. III.pdf"
    };

    const ceDetails = {
        issuer: "Geotek Global Certification Pvt. Ltd.",
        file: "/compliance/CE Certificate Annex. III.pdf"
    };

    const ceProducts = [
        "Humidity Chamber", "Walk-in Humidity Chamber", "BOD Incubator",
        "Walk-in BOD Incubator", "Cold Chamber", "Walk-in Cold Chamber"
    ];

    return (
        <section className="py-20 bg-slate-50/50 border-b border-slate-100">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
                    {/* CE Certificate Column */}
                    <div className="bg-white p-10 lg:p-14">
                        <div className="flex items-center gap-3 mb-8">
                            <h3 className="text-[11px] font-black font-heading uppercase tracking-[0.3em] text-aureole-cyan">TECHNICAL COMPLIANCE</h3>
                        </div>
                        <h2 className="text-3xl font-[950] font-heading text-aureole-slate uppercase tracking-tighter mb-8 italic">CE CERTIFICATION</h2>

                        <div className="space-y-6 mb-12">
                            <div className="p-5 bg-slate-50 border-l-2 border-aureole-cyan rounded-r-sm">
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest block mb-1">Directive</span>
                                <p className="text-sm font-black text-aureole-slate uppercase tracking-tighter">2007/47/EC (MDR)</p>
                            </div>
                            <div className="p-5 bg-slate-50 border-l-2 border-slate-200 rounded-r-sm">
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest block mb-1">Issuer</span>
                                <p className="text-[11px] font-semibold text-slate-500 tracking-tight">{ceDetails.issuer}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {ceProducts.map((p, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <CheckCircle2 size={12} className="text-aureole-cyan" />
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest truncate">{p}</span>
                                </div>
                            ))}
                        </div>

                        <a href={ceDetails.file} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-aureole-cyan text-[10px] font-black uppercase tracking-widest hover:text-aureole-blue transition-all group">
                            <Download size={14} className="group-hover:-translate-y-1 transition-transform" /> Download CE Documentation
                        </a>
                    </div>

                    {/* ISO Certificate Column */}
                    <div className="bg-white p-10 lg:p-14">
                        <div className="flex items-center gap-3 mb-8">
                            <h3 className="text-[11px] font-black font-heading uppercase tracking-[0.3em] text-aureole-blue">QUALITY SYSTEM</h3>
                        </div>
                        <h2 className="text-3xl font-[950] font-heading text-aureole-slate uppercase tracking-tighter mb-8 italic">ISO 9001:2015</h2>

                        <div className="space-y-6 mb-12">
                            <div className="p-5 bg-slate-50 border-l-2 border-aureole-blue rounded-r-sm">
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest block mb-1">Registration No.</span>
                                <p className="text-sm font-black text-aureole-slate uppercase tracking-tighter">{isoDetails.id}</p>
                            </div>
                            <div className="p-5 bg-slate-50 border-l-2 border-slate-200 rounded-r-sm">
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest block mb-1">Certified Location</span>
                                <p className="text-[11px] font-semibold text-slate-500 tracking-tight line-clamp-1">{isoDetails.location}</p>
                            </div>
                        </div>

                        <div className="flex gap-8 mb-10 pb-10 border-b border-slate-50">
                            <div>
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest block mb-1">Initial Date</span>
                                <span className="text-[11px] font-black text-aureole-slate uppercase">{isoDetails.certDate}</span>
                            </div>
                            <div>
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest block mb-1">Expiry Date</span>
                                <span className="text-[11px] font-black text-aureole-slate uppercase">{isoDetails.expiry}</span>
                            </div>
                        </div>

                        <a href={isoDetails.file} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-aureole-blue text-[10px] font-black uppercase tracking-widest hover:text-aureole-cyan transition-all group">
                            <ScrollText size={14} className="group-hover:rotate-12 transition-transform" /> View ISO Registration
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComplianceGrid;
