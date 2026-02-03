
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
                        <h3 className="text-xs font-black font-heading text-aureole-cyan tracking-widest mb-6">Data Logging</h3>
                        <ul className="space-y-4">
                            {[
                                "Automated background logging",
                                "Tabular & graphical reports",
                                "MKT / MKRH yearly reports",
                                "Real-time visualization"
                            ].map((item, i) => (
                                <li key={i} className="text-base font-sans text-slate-600 font-medium leading-tight pb-3 border-b border-slate-100 last:border-0">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Block 2: Intelligence - Center Wide Block */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Sub-block: Dashboard */}
                        <div className="bg-aureole-deep p-8 text-white relative group">
                            <h3 className="text-xs font-black font-heading text-aureole-cyan tracking-widest mb-4">Intelligence</h3>
                            <p className="text-xl font-black font-heading mb-6 leading-tight">Dashboard & Status Monitoring</p>
                            <ul className="space-y-2 text-base font-sans text-slate-300 font-medium">
                                <li>• E-signature status & counts</li>
                                <li>• Live Input / Output display</li>
                                <li>• 24-hour alarm summary</li>
                                <li>• Scrolling notifications</li>
                            </ul>
                        </div>

                        {/* Sub-block: Monitoring */}
                        <div className="bg-white p-8 border-b-4 border-aureole-cyan shadow-sm text-aureole-slate">
                            <h3 className="text-xs font-black font-heading text-slate-400 tracking-widest mb-4">System Health</h3>
                            <ul className="space-y-2">
                                {[
                                    "Live chamber status",
                                    "User login tracking",
                                    "Alarm & event counts",
                                    "Equipment health"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-base font-sans font-medium">
                                        <span className="mt-1">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Block 3: Security & Scale - Right Block */}
                    <div className="lg:col-span-1 flex flex-col gap-4">
                        {/* Backup */}
                        <div className="flex-1 bg-aureole-blue p-8 text-white">
                            <Database className="w-6 h-6 mb-4" />
                            <h4 className="text-xs font-black font-heading text-aureole-cyan tracking-widest mb-2">Security</h4>
                            <p className="text-base font-sans font-medium opacity-90">Auto/Manual backup, restoration traceability, and compliance archival.</p>
                        </div>
                        {/* Scalability */}
                        <div className="flex-1 bg-white p-8 border-r-4 border-aureole-blue shadow-sm">
                            <TrendingUp className="w-6 h-6 text-aureole-blue mb-4" />
                            <h4 className="text-xs font-black font-heading text-aureole-cyan tracking-widest mb-2">Scalability</h4>
                            <p className="text-base font-sans text-slate-500 font-medium">Multi-PLC integration & expandable architecture for future chambers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataReporting;
