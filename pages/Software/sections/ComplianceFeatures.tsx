
import React from 'react';
import { ShieldCheck, UserCheck, History, Lock, HardDrive } from 'lucide-react';

const ComplianceFeatures: React.FC = () => {
    return (
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
    );
};

export default ComplianceFeatures;
