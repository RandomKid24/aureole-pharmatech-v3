
import React, { useState } from 'react';
import {
    Plus,
    Minus,
    ShieldCheck,
    Monitor,
    Database,
    Layout,
    BarChart3,
    Link2,
    Shield,
    LifeBuoy,
    Lock,
    Activity,
    FileText,
    UserCheck,
    History,
    HardDrive,
    Eye,
    Settings,
    Cpu,
    Maximize2
} from 'lucide-react';
import Lightbox from '../components/Lightbox';

const FAQ_DATA = [
    {
        question: "WHAT TYPES OF SOFTWARE SOLUTIONS DOES AUREOLE PHARMATECH OFFER?",
        answer: "Aureole PharmaTech offers monitoring, control, data logging, and compliance-focused software solutions for pharmaceutical, laboratory, and research equipment."
    },
    {
        question: "IS AUREOLE PHARMATECH SOFTWARE COMPLIANT WITH REGULATORY STANDARDS?",
        answer: "Yes. The software is designed to support regulatory compliance, including data integrity, audit trails, secure access, and traceable records."
    },
    {
        question: "CAN THE SOFTWARE BE INTEGRATED WITH EXISTING EQUIPMENT?",
        answer: "Yes. Aureole PharmaTech software is designed for seamless integration with its equipment and can be adapted to existing systems where applicable."
    },
    {
        question: "DOES THE SOFTWARE SUPPORT ALARMS AND ALERTS?",
        answer: "Yes. Real-time alarms, notifications, and alerts are provided to ensure quick response to deviations or system events."
    },
    {
        question: "IS TECHNICAL SUPPORT AVAILABLE FOR THE SOFTWARE?",
        answer: "Yes. Aureole PharmaTech offers ongoing technical support, maintenance assistance, and software updates."
    },
    {
        question: "CAN REPORTS BE GENERATED FOR AUDITS AND DOCUMENTATION?",
        answer: "Yes. The software provides automated reports, graphical data trends, and exportable formats suitable for audits and compliance documentation."
    }
];

const Software: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const architectureImg = "/software/architecture.png";

    return (
        <div className="pt-24 lg:pt-32 pb-20 bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-slate-100 bg-white py-24 lg:py-40">
                <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none hidden lg:block">
                    <span className="text-[180px] lg:text-[250px] font-black font-heading text-aureole-slate tracking-tighter leading-none uppercase">SOFTWARE</span>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center lg:text-left">
                    <div className="max-w-5xl mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h1 className="text-[11px] font-black font-heading uppercase tracking-[0.5em] text-aureole-blue">SOFTWARE SOLUTIONS</h1>
                        </div>

                        <h2 className="text-4xl lg:text-[85px] font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-[0.95] mb-12">
                            SOFTWARE <br />
                            <span className="text-aureole-cyan uppercase tracking-normal">Solutions.</span>
                        </h2>

                        <div className="max-w-3xl border-l-[3px] border-aureole-blue/20 bg-slate-50/50 p-10 mx-auto lg:mx-0">
                            <p className="text-lg lg:text-xl text-[#001529] font-bold leading-relaxed mb-8">
                                In today’s regulated pharmaceutical and laboratory environment, reliable software is as critical as precision equipment. Aureole PharmaTech delivers intelligent, compliant, and user-friendly software solutions designed to enhance monitoring, control, data integrity, and operational efficiency.
                            </p>
                            <p className="text-[11px] text-slate-500 font-bold leading-loose tracking-widest">
                                Aureole PharmaTech software solutions are developed to meet global regulatory expectations while ensuring ease of use, accuracy, and long-term reliability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Regulatory Compliance & Data Integrity */}
            <section className="py-24 border-b border-slate-100 bg-aureole-soft">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <ShieldCheck className="w-8 h-8 text-aureole-blue" />
                                <h3 className="text-3xl lg:text-4xl font-black font-heading uppercase tracking-tighter text-[#001529] leading-none">REGULATORY COMPLIANCE & DATA INTEGRITY</h3>
                            </div>
                            <p className="text-[11px] font-bold text-slate-500 tracking-widest leading-relaxed text-left">
                                Aureole PharmaTech software solutions are designed in alignment with international regulatory requirements. Emphasis is placed on data integrity, traceability, and security to support compliance with industry standards such as audit readiness and controlled documentation practices.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-10 border border-slate-100">
                            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-aureole-blue mb-8">KEY COMPLIANCE FEATURES INCLUDE:</h4>
                            <div className="space-y-6">
                                {[
                                    { text: "SECURE USER ACCESS AND ROLE MANAGEMENT", icon: <UserCheck className="w-4 h-4" /> },
                                    { text: "AUDIT TRAILS FOR TRACEABILITY", icon: <History className="w-4 h-4" /> },
                                    { text: "TAMPER-PROOF DATA RECORDING", icon: <Lock className="w-4 h-4" /> },
                                    { text: "RELIABLE DATA STORAGE AND RETRIEVAL", icon: <HardDrive className="w-4 h-4" /> }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="text-aureole-cyan transition-all group-hover:scale-110">{item.icon}</div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#001529]">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced Monitoring & Control */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <Monitor className="w-8 h-8 text-aureole-cyan" />
                                    <h3 className="text-3xl lg:text-5xl font-black font-heading uppercase tracking-tighter text-[#001529] leading-[0.9]">ADVANCED MONITORING <br /> & CONTROL</h3>
                                </div>
                                <p className="text-[11px] font-bold text-slate-500 tracking-widest leading-loose text-left">
                                    The software enables precise monitoring and control of critical parameters such as temperature, humidity, pressure, and alarms. Real-time data visualization and automated alerts help ensure consistent environmental conditions and rapid response to deviations.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { text: "STABILITY STUDIES", icon: <Activity className="w-4 h-4" /> },
                                    { text: "QUALITY CONTROL PROCESSES", icon: <ShieldCheck className="w-4 h-4" /> },
                                    { text: "LABORATORY AND CLEANROOM MONITORING", icon: <Eye className="w-4 h-4" /> },
                                    { text: "EQUIPMENT PERFORMANCE TRACKING", icon: <Settings className="w-4 h-4" /> }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-slate-100">
                                        <div className="text-aureole-blue">{item.icon}</div>
                                        <span className="text-[9px] font-black uppercase tracking-widest text-[#001529]">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            className="relative group overflow-hidden border border-slate-100 bg-white p-6 shadow-2xl transition-all duration-700 aspect-square flex items-center justify-center cursor-zoom-in"
                            onClick={() => setIsLightboxOpen(true)}
                        >
                            <img
                                src={architectureImg}
                                alt="Software Architecture Diagram"
                                className="w-full h-auto transition-all duration-1000 object-contain p-4"
                            />
                            <div className="absolute inset-0 bg-aureole-slate/5 pointer-events-none transition-opacity"></div>
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-white p-3 shadow-xl">
                                    <Maximize2 size={24} className="text-aureole-blue" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 border-t border-slate-100 bg-aureole-soft">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-4xl font-[950] font-heading uppercase tracking-tighter text-[#001529] mb-16 text-center leading-none">FAQS.</h3>
                        <div className="space-y-4">
                            {FAQ_DATA.map((faq, idx) => (
                                <div key={idx} className="bg-white border border-slate-100">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-8 text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <span className="text-[11px] font-black uppercase tracking-widest text-[#001529]">{faq.question}</span>
                                        {openFaq === idx ? <Minus className="w-4 h-4 text-aureole-cyan" /> : <Plus className="w-4 h-4 text-aureole-blue" />}
                                    </button>
                                    <div className={`transition-all duration-500 overflow-hidden ${openFaq === idx ? 'max-h-[500px]' : 'max-h-0'}`}>
                                        <div className="p-8 pt-0 border-t border-slate-50">
                                            <p className="text-[10px] font-bold text-slate-500 tracking-[0.2em] leading-loose">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Lightbox
                images={[architectureImg]}
                currentIndex={0}
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
                onNext={() => { }}
                onPrev={() => { }}
                title="Software Architecture Ecosystem"
            />
        </div>
    );
};

export default Software;
