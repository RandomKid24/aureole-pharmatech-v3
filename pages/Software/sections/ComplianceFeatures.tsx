
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
                            <h3 className="text-3xl lg:text-4xl font-black font-heading tracking-tighter text-[#001529] leading-none">Regulatory Compliance & Data Integrity</h3>
                        </div>
                        <div className="space-y-4 text-[15px] font-medium text-slate-500 tracking-tight leading-relaxed text-left">
                            <p>
                                <strong>21 CFR Part 11 Compliant Software:</strong> Fully compliant with 21 CFR Part 11 requirements, ensuring secure electronic records and electronic signatures (E-records / E-sign).
                            </p>
                            <p>
                                <strong>Electronic Signatures & Approval Controls:</strong> Features a 3-Level E-Signature workflow (Prepared / Checked / Approved) with mandatory reasons and remarks. Complete paperless operation with controlled approvals and traceability even after role changes.
                            </p>
                            <p>
                                <strong>Audit Trails:</strong> Secure, computer-generated audit trails for every action (User, Equipment, Alarm, Event, SMS & Email) including Who, What, When, and Why (timestamped, non-editable).
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-10 border border-slate-100 shadow-xl">
                        <h4 className="text-[11px] font-black tracking-[0.3em] text-aureole-blue mb-8">User Management & Security</h4>
                        <div className="space-y-4">
                            {[
                                { text: "Unlimited User Creation & Groups", icon: <UserCheck className="w-4 h-4" /> },
                                { text: "Role-Based Access Control", icon: <Lock className="w-4 h-4" /> },
                                { text: "Alphanumeric Password Policy", icon: <ShieldCheck className="w-4 h-4" /> },
                                { text: "Auto-Logout & Startup Lock", icon: <HardDrive className="w-4 h-4" /> },
                                { text: "Built-In Biometric Integration", icon: <UserCheck className="w-4 h-4" /> },
                                { text: "Lifetime License (No Forced Renewal)", icon: <History className="w-4 h-4" /> }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="text-aureole-cyan transition-all group-hover:scale-110">{item.icon}</div>
                                    <span className="text-[12px] font-black tracking-wide text-[#001529]">{item.text}</span>
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
