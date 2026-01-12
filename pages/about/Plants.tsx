
import React, { useEffect } from 'react';
import { Factory, MapPin, Construction, Shield, Cpu, Gauge } from 'lucide-react';

const Plants: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero */}
            <section className="relative py-24 sm:py-32 overflow-hidden border-b border-slate-100 bg-white">
                <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none select-none">
                    <span className="text-[180px] lg:text-[250px] font-black text-[#001529] tracking-tighter leading-none uppercase italic">PLANTS</span>
                </div>

                <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-blue">MANUFACTURING HUBS</h2>
                        </div>
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-[950] text-[#001529] uppercase tracking-tighter leading-[0.85] mb-12 italic">
                            ENGINEERING <br /> THE <span className="text-aureole-cyan">FUTURE.</span>
                        </h1>
                        <p className="text-slate-500 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed max-w-sm">
                            State-of-the-art production facilities optimized for precision thermal and environmental stabilization.
                        </p>
                    </div>
                </div>
            </section>

            {/* Grid Content Placeholder */}
            <section className="py-24 lg:py-40 bg-white">
                <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                    <div className="grid md:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
                        {[
                            { id: 'UNIT 01', loc: 'MALEGAON, MH', type: 'Precision Engineering' },
                            { id: 'UNIT 02', loc: 'NASHIK, MH', type: 'Assembly & R&D' }
                        ].map((plant, i) => (
                            <div key={i} className="bg-white p-12 lg:p-20 group hover:bg-slate-50 transition-all duration-700">
                                <div className="flex justify-between items-start mb-16">
                                    <div className="p-4 border border-slate-100 group-hover:border-aureole-cyan transition-colors">
                                        <Factory className="text-slate-300 group-hover:text-aureole-cyan" size={40} />
                                    </div>
                                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{plant.type}</span>
                                </div>

                                <div className="aspect-video bg-slate-50 mb-12 flex items-center justify-center grayscale opacity-40 border border-slate-100 group-hover:opacity-60 transition-opacity">
                                    <Construction size={48} className="text-slate-200" />
                                </div>

                                <h4 className="text-4xl lg:text-6xl font-[950] text-[#001529] uppercase tracking-tighter leading-none mb-6">
                                    {plant.id}
                                </h4>

                                <div className="flex items-center gap-4 mb-12">
                                    <MapPin className="text-aureole-cyan" size={18} />
                                    <span className="text-[12px] font-black uppercase tracking-[0.2em] text-aureole-slate">{plant.loc}</span>
                                </div>

                                <div className="grid grid-cols-3 gap-8 pt-10 border-t border-slate-100">
                                    <div>
                                        <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-2">Standards</p>
                                        <Shield size={16} className="text-slate-400" />
                                    </div>
                                    <div>
                                        <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-2">Control</p>
                                        <Cpu size={16} className="text-slate-400" />
                                    </div>
                                    <div>
                                        <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-2">SCADA</p>
                                        <Gauge size={16} className="text-slate-400" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-32 max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-[950] text-[#001529] uppercase tracking-tighter mb-6">INTEGRATED FACILITY MANAGEMENT.</h3>
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.2em] leading-relaxed">
                            We are currently documenting our facility layouts and production line visuals. High-definition galleries for our manufacturing units will be available shortly.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Plants;
