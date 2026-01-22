
import React from 'react';
import { Monitor, Activity, ShieldCheck, Eye, Settings } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

const MonitoringControl: React.FC = () => {
    const architectureImg = "/software/architecture.png";

    return (
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
    );
};

export default MonitoringControl;
