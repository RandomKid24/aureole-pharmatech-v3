import React from 'react';
import { Database, FileBarChart, Save, RefreshCw, FileText, Server } from 'lucide-react';

const DataReporting: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50 border-b border-slate-100">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="text-center mb-16">
                    <h3 className="text-3xl lg:text-4xl font-black font-heading tracking-tighter text-[#001529] mb-4">
                        Data Logging, Reports & Backup
                    </h3>
                    <p className="max-w-2xl mx-auto text-slate-500 font-medium leading-relaxed">
                        Comprehensive data visualization, automated reporting, and secure backup strategies ensure that your critical process data is always accessible, accurate, and protected.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Data Logging & Reports */}
                    <div className="bg-white p-8 border border-slate-100 shadow-lg group hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm mb-6 text-aureole-blue group-hover:bg-aureole-blue group-hover:text-white transition-colors">
                            <FileBarChart size={24} />
                        </div>
                        <h4 className="text-sm font-black tracking-widest text-[#001529] mb-4">
                            Advanced Reporting
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "Automated background data logging",
                                "Tabular & graphical report formats",
                                "MKT / MKRH reports with yearly graphs",
                                "24-hour alarm & event summary view"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[13px] text-slate-600 font-medium">
                                    <span className="w-1.5 h-1.5 bg-aureole-cyan rounded-full mt-1.5 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Dashboard Intelligence */}
                    <div className="bg-white p-8 border border-slate-100 shadow-lg group hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm mb-6 text-aureole-blue group-hover:bg-aureole-blue group-hover:text-white transition-colors">
                            <Server size={24} />
                        </div>
                        <h4 className="text-sm font-black tracking-widest text-[#001529] mb-4">
                            Dashboard Intelligence
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "Real-time & historical visualization",
                                "E-signature report status & counts",
                                "Live I/O (Input/Output) status display",
                                "Software & equipment health monitoring"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[13px] text-slate-600 font-medium">
                                    <span className="w-1.5 h-1.5 bg-aureole-cyan rounded-full mt-1.5 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Backup & Data Protection */}
                    <div className="bg-white p-8 border border-slate-100 shadow-lg group hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm mb-6 text-aureole-blue group-hover:bg-aureole-blue group-hover:text-white transition-colors">
                            <Database size={24} />
                        </div>
                        <h4 className="text-sm font-black tracking-widest text-[#001529] mb-4">
                            Backup & Data Security
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "Auto & Manual backup facility",
                                "Backup success/failure status indication",
                                "Secure restoration with traceability",
                                "No silent deletion or data overwrite",
                                "Compliance-ready data archival"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[13px] text-slate-600 font-medium">
                                    <span className="w-1.5 h-1.5 bg-aureole-cyan rounded-full mt-1.5 shrink-0" />
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

export default DataReporting;
