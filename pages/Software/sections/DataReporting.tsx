
import React from 'react';
import { Database, FileBarChart, Eye, BarChart3, TrendingUp } from 'lucide-react';

const DataReporting: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-aureole-blue/5 -skew-x-12 translate-x-1/2"></div>

            <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mb-20">
                    <h2 className="text-5xl font-black font-heading tracking-tighter text-aureole-slate leading-none mb-6">
                        Data, Reports <br /> & <span className="text-aureole-cyan">Intelligence</span>
                    </h2>
                    <p className="text-xl font-sans text-slate-500 font-medium leading-relaxed">
                        Precision data management with automated logging, real-time intelligence, and secure architectural scalability.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    {/* Block 1: Logging - Large Vertical Block */}
                    <div className="lg:col-span-1 bg-white p-8 border-t-4 border-aureole-blue shadow-sm">
                        <h3 className="text-xl font-black font-heading text-aureole-slate tracking-wide mb-6">Data Logging</h3>
                        <ul className="space-y-3">
                            {[
                                "Automated background logging",
                                "Tabular & graphical reports",
                                "MKT / MKRH yearly reports",
                                "Real-time visualization"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-base font-sans text-slate-600 font-medium">
                                    <span className="mt-1 text-aureole-blue">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Block 2: Intelligence - Center Wide Block */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Sub-block: Dashboard */}
                        <div className="bg-white p-8 border-t-4 border-aureole-deep shadow-sm relative group">
                            <h3 className="text-xl font-black font-heading text-aureole-slate tracking-wide mb-6">Dashboard & Status Monitoring</h3>
                            <ul className="space-y-3 text-base font-sans text-slate-600 font-medium">
                                <li><span className="text-aureole-deep mr-2">•</span>E-signature status & counts</li>
                                <li><span className="text-aureole-deep mr-2">•</span>Live Input / Output display</li>
                                <li><span className="text-aureole-deep mr-2">•</span>24-hour alarm summary</li>
                                <li><span className="text-aureole-deep mr-2">•</span>Scrolling notifications</li>
                            </ul>
                        </div>

                        {/* Sub-block: Monitoring */}
                        <div className="bg-white p-8 border-b-4 border-aureole-cyan shadow-sm">
                            <h3 className="text-xl font-black font-heading text-aureole-slate tracking-wide mb-6">System Health</h3>
                            <ul className="space-y-3">
                                {[
                                    "Live chamber status",
                                    "User login tracking",
                                    "Alarm & event counts",
                                    "Equipment health"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-base font-sans font-medium text-slate-600">
                                        <span className="mt-1 text-aureole-cyan">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Block 3: Security & Scale - Right Block */}
                    <div className="lg:col-span-1 flex flex-col gap-4">
                        {/* Backup */}
                        <div className="flex-1 bg-white p-8 border-l-4 border-aureole-blue shadow-sm">
                            <Database className="w-6 h-6 mb-4 text-aureole-blue" />
                            <h4 className="text-xl font-black font-heading text-aureole-slate tracking-wide mb-4">Security</h4>
                            <p className="text-base font-sans font-medium text-slate-600">Auto/Manual backup, restoration traceability, and compliance archival.</p>
                        </div>
                        {/* Scalability */}
                        <div className="flex-1 bg-white p-8 border-r-4 border-aureole-cyan shadow-sm">
                            <TrendingUp className="w-6 h-6 text-aureole-cyan mb-4" />
                            <h4 className="text-xl font-black font-heading text-aureole-slate tracking-wide mb-4">Scalability</h4>
                            <p className="text-base font-sans text-slate-600 font-medium">Multi-PLC integration & expandable architecture for future chambers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataReporting;
