
import React from 'react';
import { Microscope, Boxes, Zap, Cpu } from 'lucide-react';

const CapabilityIcons: React.FC = () => {
    return (
        <section className="py-24 lg:py-40 bg-aureole-soft">
            <div className="container mx-auto px-6 sm:px-8 lg:px-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100">
                    {[
                        { icon: Microscope, label: "R&D HUB", val: "Applied" },
                        { icon: Boxes, label: "ASSEMBLY", val: "Precision" },
                        { icon: Zap, label: "ENERGY", val: "Optimized" },
                        { icon: Cpu, label: "CONTROL", val: "Digital" }
                    ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className="bg-white p-12 flex flex-col items-center text-center group hover:bg-slate-50 transition-colors">
                                <Icon className="text-slate-200 group-hover:text-aureole-cyan transition-colors mb-6" size={40} />
                                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-3">{item.label}</p>
                                <p className="text-sm font-[950] text-aureole-slate uppercase tracking-tight">{item.val}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default CapabilityIcons;
