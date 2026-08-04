
import React from 'react';
import { Check } from 'lucide-react';

const reasons = [
  "Specialized in Stability & Environmental Chambers",
  "GMP & Regulatory Compliance Focused",
  "Experienced Validation & Service Engineers",
  "Pan-India Service Support",
  "Customized AMC & Validation Packages",
  "Fast Response & Reliable Technical Assistance",
  "Complete Lifecycle Support (Installation to Upgradation)"
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-24 bg-white border-b border-slate-100 bg-[url('/wavebg.webp')] bg-cover bg-fixed">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-8 group">
                            <span className="w-12 h-[2px] bg-aureole-cyan"></span>
                            <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-aureole-cyan">Service Excellence</h6>
                        </div>
                        <h2 className="text-5xl font-black font-heading tracking-tighter text-aureole-slate uppercase mb-10 leading-[0.85]">
                            WHY CHOOSE <br />
                            <span className="text-aureole-cyan">AUREOLE PHARMATECH SERVICES?</span>
                        </h2>
                        <div className="space-y-4">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex items-start gap-4 p-5 border-l-4 border-slate-100 bg-slate-50/50 hover:border-aureole-cyan transition-colors group">
                                    <div className="mt-1">
                                        <Check className="w-5 h-5 text-aureole-cyan group-hover:scale-110 transition-transform" />
                                    </div>
                                    <p className="text-base font-sans font-medium text-aureole-slate tracking-tight text-left">
                                        {reason}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-white p-12 lg:p-16 border-t-4 border-aureole-blue shadow-lg">
                            <h3 className="text-3xl font-black font-heading text-aureole-slate uppercase mb-8 tracking-tight leading-none">TECHNICAL <br /><span className="text-aureole-cyan">COMMITMENT</span></h3>
                            <p className="text-slate-500 font-sans font-medium leading-relaxed text-base text-left">
                                Ensuring accurate performance, regulatory compliance, and long-term reliability for all pharmaceutical environmental control systems.
                            </p>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-aureole-blue -z-10 opacity-5"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
