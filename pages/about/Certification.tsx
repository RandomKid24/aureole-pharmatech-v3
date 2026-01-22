
import React, { useEffect } from 'react';
import { ShieldCheck, Award, CheckCircle2, Download, ScrollText, CheckSquare, Globe, MapPin, Calendar, Hash, Building2 } from 'lucide-react';

const Certification: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isoDetails = {
        title: "ISO 9001:2015",
        subtitle: "Quality Management System",
        issuer: "Quality Research Organization (QRO)",
        id: "305024011910Q",
        location: "Plot No. B-61, Malegaon MIDC, Sinnar, Nashik – 422113, Maharashtra",
        certDate: "19 January 2024",
        expiry: "18 January 2027",
        surveillance: [
            { label: "1st Surveillance Audit", date: "18 January 2025" },
            { label: "2nd Surveillance Audit", date: "18 January 2026" }
        ],
        scope: "Manufacturing of pharma industry laboratory equipment",
        file: "/compliance/ISO 9001 2015 Certificaten Annex. III.pdf"
    };

    const ceDetails = {
        title: "CE CERTIFICATE",
        issuer: "Geotek Global Certification Pvt. Ltd.",
        id: "23GGCSIN 300393",
        directive: "2007/47/EC as amended by Regulation (EU) 2017/745 (MDR)",
        validTill: "11 January 2029",
        certDate: "12 January 2024",
        file: "/compliance/CE Certificate Annex. III.pdf"
    };

    const ceProducts = [
        "Humidity Chamber", "Walk-in Humidity Chamber", "BOD Incubator",
        "Walk-in BOD Incubator", "Cold Chamber", "Walk-in Cold Chamber",
        "Deep Freezer", "Walk-in Deep Freezer", "Water Bath",
        "Muffle Furnace", "Bacteriological Incubator", "Hot Air Oven",
        "Vacuum Oven", "Photostability Chamber"
    ];

    const referencedStandards = [
        "IEC 60068 series (Environmental & humidity testing)",
        "ISO 14971:2019 (Risk management for medical devices)",
        "ISO 20417:2021 (Information supplied by manufacturer)",
        "IEC / EN 60601 series (Medical electrical equipment safety)",
        "IEC/TR 62366-2 (Usability engineering for medical devices)",
        "ASTM E595 (Outgassing test methods)"
    ];

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section - Refined & Compact */}
            <section className="relative py-20 lg:py-28 overflow-hidden border-b border-slate-100 bg-white">
                <div className="absolute top-1/2 -translate-y-1/2 right-10 opacity-[0.03] pointer-events-none select-none">
                    <span className="text-[120px] lg:text-[150px] font-black font-heading text-aureole-slate tracking-tighter leading-none uppercase">VALIDATED</span>
                </div>

                <div className="container mx-auto px-6 sm:px-8 lg:px-24 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-aureole-blue"></span>
                            <h2 className="text-[11px] font-black font-heading uppercase tracking-[0.4em] text-aureole-blue">CERTIFICATION & COMPLIANCE</h2>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-[950] font-heading text-aureole-slate uppercase tracking-tighter leading-[0.95] mb-8">
                            QUALITY <br /> <span className="text-aureole-cyan uppercase tracking-normal">Assured.</span>
                        </h1>
                        <p className="text-slate-500 text-[13px] font-medium tracking-tight leading-relaxed max-w-sm">
                            Authentication and regulatory compliance frameworks governing our precision engineering protocols.
                        </p>
                    </div>
                </div>
            </section>

            {/* Certifications Grid - Combined & Compact */}
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
                                {ceProducts.slice(0, 6).map((p, i) => (
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

            {/* Standards & Policy Grid - Two column compact */}
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
        </div>
    );
};

export default Certification;
