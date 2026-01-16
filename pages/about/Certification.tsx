
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
            {/* Hero Section */}
            <section className="relative py-24 sm:py-32 overflow-hidden border-b border-slate-100 bg-white">
                <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none select-none">
                    <span className="text-[180px] lg:text-[250px] font-black text-aureole-slate tracking-tighter leading-none uppercase">VALIDATED</span>
                </div>

                <div className="container mx-auto px-6 sm:px-8 lg:px-24 relative z-10 text-center lg:text-left">
                    <div className="max-w-4xl mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-blue">CERTIFICATION & COMPLIANCE</h2>
                        </div>
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-[950] text-aureole-slate uppercase tracking-tighter leading-[0.85] mb-12">
                            QUALITY <br /> <span className="text-aureole-cyan uppercase tracking-normal">Assured.</span>
                        </h1>
                        <p className="text-slate-500 text-[11px] font-bold tracking-[0.2em] leading-relaxed max-w-sm mx-auto lg:mx-0">
                            Authentication and regulatory compliance frameworks governing our precision engineering protocols.
                        </p>
                    </div>
                </div>
            </section>

            {/* CE Compliance */}
            <section className="py-24 lg:py-40 bg-aureole-soft">
                <div className="container mx-auto px-6 sm:px-8 lg:px-24">
                    <div className="max-w-3xl mb-24 text-center lg:text-left mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                            <span className="w-12 h-[2px] bg-aureole-cyan"></span>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-cyan">CE STANDARDS</h3>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-[950] text-aureole-slate uppercase tracking-tighter leading-[0.9] mb-8">
                            TECHNICAL <br /> <span className="text-aureole-blue uppercase tracking-normal">Certification.</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-px bg-white border border-slate-100 shadow-xl shadow-slate-100/50">
                        <div className="bg-white p-12 lg:p-16 lg:col-span-1">
                            <div className="mb-12">
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest block mb-4">Directive</span>
                                <p className="text-xl font-black text-aureole-slate uppercase tracking-tighter italic">2007/47/EC (MDR)</p>
                            </div>
                            <div className="mb-12">
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest block mb-4">Issuer</span>
                                <p className="text-[11px] font-bold text-slate-500 tracking-widest leading-relaxed">{ceDetails.issuer}</p>
                            </div>
                            <a
                                href={ceDetails.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-aureole-cyan text-[10px] font-black uppercase tracking-widest hover:text-aureole-blue transition-colors"
                            >
                                <Download size={16} /> Download CE Doc
                            </a>
                        </div>
                        <div className="bg-white p-12 lg:p-16 lg:col-span-2">
                            <h4 className="text-[11px] font-black text-aureole-blue uppercase tracking-[0.2em] mb-12">Certified Product Line</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                {ceProducts.map((p, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-1 h-1 bg-aureole-cyan group-hover:w-4 transition-all"></div>
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-aureole-slate transition-colors">{p}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ISO Certification (QRO Registration) */}
            <section className="py-24 lg:py-40 bg-white">
                <div className="container mx-auto px-6 sm:px-8 lg:px-24">
                    <div className="max-w-3xl mb-24 text-center lg:text-left mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-blue">ISO 9001:2015</h3>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-[950] text-aureole-slate uppercase tracking-tighter leading-[0.9] mb-8">
                            QRO <span className="text-aureole-cyan uppercase tracking-normal">Registration.</span>
                        </h2>
                    </div>

                    <div className="bg-white p-12 lg:p-20 shadow-2xl shadow-slate-200/50 border border-slate-100">
                        <div className="grid lg:grid-cols-2 gap-16">
                            <div className="space-y-10">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Registration No.</span>
                                    <span className="text-xl font-black text-aureole-slate uppercase tracking-tighter">{isoDetails.id}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Certified Location</span>
                                    <span className="text-[12px] font-bold text-slate-600 tracking-wider">{isoDetails.location}</span>
                                </div>
                                <div className="pt-10 border-t border-slate-50 flex gap-8">
                                    <div>
                                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest block mb-2">Initial Date</span>
                                        <span className="text-[11px] font-black text-aureole-slate uppercase">{isoDetails.certDate}</span>
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest block mb-2">Expiry Date</span>
                                        <span className="text-[11px] font-black text-aureole-slate uppercase">{isoDetails.expiry}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-10 flex flex-col justify-between">
                                <div className="space-y-6">
                                    <h4 className="text-[11px] font-black text-aureole-blue uppercase tracking-[0.2em] mb-4">Surveillance Schedule</h4>
                                    {isoDetails.surveillance.map((s, i) => (
                                        <div key={i} className="flex justify-between items-center py-4 border-b border-white">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.label}</span>
                                            <span className="text-[10px] font-black text-aureole-slate uppercase">{s.date}</span>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href={isoDetails.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-10 flex items-center justify-center gap-4 px-6 py-4 border-2 border-aureole-blue text-aureole-blue text-[10px] font-black uppercase tracking-widest hover:bg-aureole-blue hover:text-white transition-all"
                                >
                                    <ScrollText size={16} /> View Certificate
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Referenced Standards */}
            <section className="py-24 lg:py-40 bg-aureole-soft relative overflow-hidden">
                <div className="container mx-auto px-6 sm:px-8 lg:px-24 relative z-10">
                    <div className="max-w-3xl mb-24 text-center lg:text-left mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">TECHNICAL FRAMEWORK</h3>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-[950] text-aureole-slate uppercase tracking-tighter leading-[0.9] mb-8">
                            REFERENCED <br /> GLOBAL <span className="text-aureole-cyan uppercase tracking-normal">Standards.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
                        {referencedStandards.map((std, i) => (
                            <div
                                key={i}
                                className="group relative bg-white p-12 lg:p-16 flex flex-col justify-between min-h-[320px] transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute -right-4 -bottom-8 select-none pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700">
                                    <span className="text-[180px] font-black text-aureole-slate italic leading-none">
                                        0{i + 1}
                                    </span>
                                </div>

                                <div>
                                    <Globe className="text-slate-200 group-hover:text-aureole-cyan transition-colors duration-500 mb-10" size={32} />
                                    <h4 className="text-2xl lg:text-3xl font-black text-aureole-slate uppercase tracking-tighter leading-none mb-6 group-hover:text-aureole-blue transition-colors">
                                        {std.split(' (')[0]}
                                    </h4>
                                    <p className="text-[11px] font-bold text-slate-400 tracking-[0.15em] leading-relaxed group-hover:text-slate-500 transition-colors">
                                        {std.split(' (')[1]?.replace(')', '') || 'TECHNICAL COMPLIANCE FRAMEWORK'}
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-aureole-cyan group-hover:w-full transition-all duration-700 ease-in-out"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Policy */}
            <section className="py-24 lg:py-40 bg-white">
                <div className="container mx-auto px-6 sm:px-8 lg:px-24">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-12 h-[2px] bg-slate-200"></span>
                                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">QUALITY FRAMEWORK</h3>
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-[950] text-aureole-slate uppercase tracking-tighter leading-[0.9] mb-8">
                                QUALITY <br /> <span className="text-aureole-blue uppercase tracking-normal">Policy.</span>
                            </h2>
                            <div className="mb-10 p-6 bg-slate-50 border-l-4 border-aureole-blue">
                                <p className="text-[14px] font-[900] text-aureole-slate uppercase tracking-wider mb-2">Aureole Pharma Pvt. Ltd.</p>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Issue Date: 05-10-2023 | Managing Director: Dr. Kiran Badgujar</p>
                            </div>
                            <p className="text-[12px] font-bold text-slate-500 tracking-widest leading-relaxed mb-12 text-justify">
                                We are committed to achieving total customer satisfaction in domestic and international markets by providing the best available modern instrumentation technology. Our focus remains on continuous improvement, adherence to government and international norms, and maintaining 100% accuracy and employee responsibility across all manufacturing processes.
                            </p>
                            <a
                                href="/compliance/Quality Policy.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 px-10 py-5 bg-aureole-slate text-white text-[10px] font-black uppercase tracking-widest hover:bg-aureole-blue transition-all"
                            >
                                <Download size={16} /> Download Quality Policy
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-px bg-slate-100 border border-slate-100">
                            {[
                                { title: "Customer Sat", icon: <CheckCircle2 className="text-aureole-cyan" /> },
                                { title: "Modern Tech", icon: <CheckCircle2 className="text-aureole-blue" /> },
                                { title: "Accuracy", icon: <CheckCircle2 className="text-aureole-cyan" /> },
                                { title: "Improvement", icon: <CheckCircle2 className="text-aureole-blue" /> }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-12 flex flex-col items-center text-center group hover:bg-slate-50 transition-colors">
                                    <div className="mb-6 transform group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] font-black text-aureole-slate uppercase tracking-widest">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certification;
