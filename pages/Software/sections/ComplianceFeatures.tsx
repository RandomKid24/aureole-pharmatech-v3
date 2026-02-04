
import React from 'react';
import { ShieldCheck, UserCheck, Lock, FileCheck } from 'lucide-react';

const ComplianceFeatures: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                {/* Section Header */}
                <div className="max-w-4xl mb-20">
                    <h2 className="text-5xl font-black font-heading tracking-tighter text-aureole-slate leading-none mb-6">
                        Regulatory Compliance & <span className="text-aureole-cyan">Data Integrity</span>
                    </h2>
                    <p className="text-xl font-sans text-slate-500 font-medium leading-relaxed">
                        Complete 21 CFR Part 11 compliance with secure electronic records, signatures, and audit trails.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Electronic Signatures - Featured Card */}
                    <div className="lg:col-span-2 bg-white p-8 border-t-4 border-aureole-blue shadow-sm">
                        <div className="mb-6">
                            <h3 className="text-xl font-black font-heading tracking-wide text-aureole-slate">
                                Electronic Signatures
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ul className="space-y-3">
                                {[
                                    "3-Level E-Signature workflow",
                                    "Prepared / Checked / Approved",
                                    "Mandatory reason & remarks"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-base font-sans font-medium text-slate-600">
                                        <span className="mt-1 text-aureole-blue">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-3">
                                {[
                                    "Complete paperless operation",
                                    "Traceable after role changes",
                                    "Multi-level enforcement"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-base font-sans font-medium text-slate-600">
                                        <span className="mt-1 text-aureole-blue">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Audit Trails - Side Card */}
                    <div className="bg-white p-8 border-l-4 border-aureole-cyan shadow-sm">
                        <div className="mb-6">
                            <h3 className="text-xl font-black font-heading tracking-wide text-aureole-slate">
                                Audit Trails
                            </h3>
                        </div>
                        <ul className="space-y-3 relative z-10">
                            {[
                                "Computer-generated for every action",
                                "Tracks User, Equipment, Alarm, Event",
                                "Timestamped and non-editable",
                                "Who, What, When, Why"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-base font-sans font-medium text-slate-600">
                                    <span className="text-aureole-cyan mt-1">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Grid - User Management & Approval Controls */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* User Management */}
                    <div className="bg-white p-8 border-b-4 border-aureole-deep shadow-sm">
                        <div className="mb-6">
                            <h3 className="text-xl font-black font-heading text-aureole-slate tracking-wide">
                                User Management & Security
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                "Unlimited users & groups",
                                "Role-based access control",
                                "Password policy & expiry",
                                "Auto-logout & locking",
                                "Biometric integration",
                                "Lifetime license key"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <span className="text-aureole-blue mt-1">•</span>
                                    <span className="text-base font-sans text-slate-600 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Approval Controls */}
                    <div className="bg-white p-8 border-r-4 border-aureole-blue shadow-sm">
                        <div className="mb-6">
                            <h3 className="text-xl font-black font-heading tracking-wide text-aureole-slate">
                                Approval Controls
                            </h3>
                        </div>
                        <ul className="space-y-3 relative z-10">
                            {[
                                "Multi-level signature enforcement",
                                "Mandatory remarks for alarms",
                                "Secure configuration updates",
                                "Complete approval workflow"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-base font-sans font-medium text-slate-600">
                                    <span className="mt-1 text-aureole-deep">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComplianceFeatures;
