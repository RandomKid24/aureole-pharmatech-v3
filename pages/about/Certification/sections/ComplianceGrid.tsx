
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
                    <div className="bg-white p-10 lg:p-14 relative overflow-hidden group border-r border-slate-100">
                        <div className="flex justify-between items-start mb-10">
                            <div>
                                <h3 className="text-[11px] font-black font-heading uppercase tracking-[0.3em] text-aureole-cyan mb-2">TECHNICAL COMPLIANCE</h3>
                                <h2 className="text-3xl font-[950] font-heading text-aureole-slate uppercase tracking-tighter">CE CERTIFICATION</h2>
                            </div>
                            {/* Proper CE Logo - Using Uploaded Image */}
                            <div className="w-28 h-20 flex items-center justify-center">
                                <img
                                    src="/certification-logos/cer logo.png"
                                    alt="CE Certification"
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        </div>

                        <div className="space-y-6 mb-12 relative z-10">
                            <div className="p-5 bg-slate-50 border-l-2 border-aureole-cyan rounded-r-sm">
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest block mb-1">Directive</span>
                                <p className="text-sm font-black text-aureole-slate uppercase tracking-tighter">2007/47/EC (MDR)</p>
                            </div>
                        </div>

                        <a href={ceDetails.file} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-aureole-cyan text-[10px] font-black uppercase tracking-widest hover:text-aureole-blue transition-all group/link">
                            <Download size={14} className="group-hover/link:-translate-y-1 transition-transform" /> Download CE Documentation
                        </a>
                    </div>

                    {/* ISO Certificate Column */}
                    <div className="bg-white p-10 lg:p-14 relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-10">
                            <div>
                                <h3 className="text-[11px] font-black font-heading uppercase tracking-[0.3em] text-aureole-blue mb-2">QUALITY SYSTEM</h3>
                                <h2 className="text-3xl font-[950] font-heading text-aureole-slate uppercase tracking-tighter">ISO 9001:2015</h2>
                            </div>
                            {/* Proper ISO Logo - Using Uploaded Image */}
                            <div className="w-28 h-28 flex items-center justify-center">
                                <img
                                    src="/certification-logos/ISO certification logo.png"
                                    alt="ISO 9001:2015 Certification"
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        </div>

                        <div className="space-y-6 mb-12 relative z-10">
                            <div className="p-5 bg-slate-50 border-l-2 border-aureole-blue rounded-r-sm">
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest block mb-1">Registration No.</span>
                                <p className="text-sm font-black text-aureole-slate uppercase tracking-tighter">{isoDetails.id}</p>
                            </div>
                        </div>

                        <a href={isoDetails.file} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-aureole-blue text-[10px] font-black uppercase tracking-widest hover:text-aureole-cyan transition-all group/link">
                            <ScrollText size={14} className="group-hover/link:rotate-12 transition-transform" /> View ISO Registration
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComplianceGrid;
