
import React from 'react';
import { Monitor, Bell, Settings } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

const MonitoringControl: React.FC = () => {
    const architectureImg = "/software/architecture.webp";

    return (
        <section className="py-24 bg-transparent">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Info */}
                    <div className="max-w-xl">
                        <div className="mb-6">
                            <h2 className="text-5xl font-black font-heading tracking-tighter text-aureole-slate leading-none">
                                Equipment & Chamber <span className="text-aureole-cyan">Management</span>
                            </h2>
                        </div>

                        <p className="text-base font-sans text-slate-500 font-medium leading-relaxed mb-10">
                            Real-time monitoring and intelligent control systems for pharmaceutical equipment, ensuring precise operation and immediate notification.
                        </p>

                        <div className="space-y-8">
                            {/* Equipment Control */}
                            <div>
                                <div className="mb-4">
                                    <h3 className="text-xs font-black font-heading text-aureole-cyan tracking-widest">
                                        Equipment Control
                                    </h3>
                                </div>
                                <ul className="grid grid-cols-1 gap-x-6 gap-y-2">
                                    {[
                                        "Multi-chamber configuration",
                                        "Live status dashboard",
                                        "Door operation control",
                                        "Secure PID access"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-base font-sans text-slate-500 font-medium">
                                            <span className="text-aureole-cyan">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Alarms */}
                            <div>
                                <div className="mb-4">
                                    <h3 className="text-xs font-black font-heading text-aureole-deep tracking-widest">
                                        Alarm & Notifications
                                    </h3>
                                </div>
                                <ul className="grid grid-cols-1 gap-x-6 gap-y-2">
                                    {[
                                        "Instant event recording",
                                        "Secure acknowledgment",
                                        "SMS & Email alerts",
                                        "Live scrolling status"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-base font-sans text-slate-500 font-medium">
                                            <span className="text-aureole-cyan">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative">
                        <div className="bg-slate-50 p-6 border border-slate-200 shadow-sm">
                            <LazyImage
                                src={architectureImg}
                                alt="Software Architecture Diagram"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MonitoringControl;
