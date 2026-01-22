
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
    Settings
} from 'lucide-react';
import LazyImage from '../components/LazyImage';

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

    const architectureImg = "/software/architecture.png";

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section - Standardized with Product Pages */}
            <section className="relative py-16 sm:py-32 overflow-hidden border-b border-slate-100 bg-white">
                <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none hidden lg:block">
                    <span className="text-[60px] md:text-[100px] lg:text-[150px] font-black font-heading text-[#001529] tracking-tighter leading-none uppercase italic">SIS-APP</span>
                </div>

                <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center lg:text-left">
                    <div className="max-w-5xl mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 sm:mb-10">
                            <span className="w-8 sm:w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">ADVANCED COMPLIANCE</h2>
                        </div>
                        <h1 className="text-4xl sm:text-7xl lg:text-[100px] font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-[0.9] mb-8 sm:mb-12">
                            INTRODUCING <br /> <span className="text-aureole-cyan uppercase tracking-normal">SIS-APP.</span>
                        </h1>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start pt-4">
                            <div className="space-y-6">
                                <p className="text-lg lg:text-xl text-slate-700 font-bold leading-tight uppercase tracking-tight">
                                    Secure and Integrated Solutions for <span className="text-aureole-cyan">Applications, Products, and Processes.</span>
                                </p>
                                <p className="text-slate-500 text-[15px] font-medium tracking-tight leading-relaxed">
                                    In the fast-paced landscape of today's business world, the need for secure and seamlessly integrated solutions has reached unprecedented levels. SIS-APP delivers the utmost protection and efficiency.
                                </p>
                            </div>
                            <div className="space-y-6 lg:pt-1">
                                <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-100 px-5 py-3 rounded-px">
                                    <ShieldCheck className="w-5 h-5 text-aureole-cyan" />
                                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#001529]">21-CFR Part 11 Compliant</span>
                                </div>
                                <p className="text-slate-500 text-[15px] font-medium tracking-tight leading-relaxed italic border-l-2 border-slate-200 pl-6">
                                    "Managing sensitive data across various applications while guaranteeing robust security and compliance with defined procedures."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* General software info moved here */}
            <section className="py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="max-w-4xl">
                        <p className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed mb-6">
                            In today’s regulated pharmaceutical and laboratory environment, reliable software is as critical as precision equipment. Aureole PharmaTech delivers intelligent, compliant, and user-friendly software solutions designed to enhance monitoring, control, data integrity, and operational efficiency.
                        </p>
                        <p className="text-[15px] text-slate-400 font-black uppercase tracking-[0.3em] leading-relaxed">
                            DEVELOPED TO MEET GLOBAL REGULATORY EXPECTATIONS
                        </p>
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
                            <p className="text-[15px] font-medium text-slate-500 tracking-tight leading-relaxed text-left">
                                Aureole PharmaTech software solutions are designed in alignment with international regulatory requirements. Emphasis is placed on data integrity, traceability, and security to support compliance with industry standards such as audit readiness and controlled documentation practices.
                            </p>
                        </div>

                        <div className="bg-white p-10 border border-slate-100 shadow-xl">
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
                                        <span className="text-[12px] font-black uppercase tracking-wide text-[#001529]">{item.text}</span>
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
                                <p className="text-[15px] font-medium text-slate-500 tracking-tight leading-relaxed text-left">
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
                                        <span className="text-[12px] font-black uppercase tracking-wide text-[#001529]">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            className="relative group overflow-hidden border border-slate-100 bg-white p-6 shadow-2xl transition-all duration-700 aspect-square flex items-center justify-center"
                        >
                            <LazyImage
                                src={architectureImg}
                                alt="Software Architecture Diagram"
                                className="w-full h-auto transition-all duration-1000 object-contain p-4"
                            />
                            <div className="absolute inset-0 bg-aureole-slate/5 pointer-events-none transition-opacity"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs - Unique Direct-Read Layout */}
            <section className="py-24 border-t border-slate-100 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="max-w-4xl mb-20">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">KNOWLEDGE BASE</h2>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none">
                            FREQUENTLY ASKED <span className="text-aureole-cyan uppercase tracking-normal">Questions.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {FAQ_DATA.map((faq, idx) => (
                            <div key={idx} className="bg-white p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                                {/* Large faint background number for uniqueness */}
                                <div className="absolute -top-4 -right-2 text-8xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity select-none pointer-events-none">
                                    {idx + 1}
                                </div>

                                <div className="relative z-10 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-aureole-blue/5 flex-shrink-0 flex items-center justify-center text-aureole-blue font-black text-[10px]">
                                            Q
                                        </div>
                                        <h3 className="text-[13px] font-black uppercase tracking-wider text-[#001529] leading-snug">
                                            {faq.question}
                                        </h3>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-aureole-cyan/5 flex-shrink-0 flex items-center justify-center text-aureole-cyan font-black text-[10px]">
                                            A
                                        </div>
                                        <p className="text-[15px] font-medium text-slate-500 tracking-tight leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Software;
