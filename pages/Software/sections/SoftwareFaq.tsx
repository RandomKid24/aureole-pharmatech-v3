
import React from 'react';

const SoftwareFaq: React.FC = () => {
    const FAQ_DATA = [
        {
            question: "WHAT TYPES OF SOFTWARE SOLUTIONS DOES AUREOLE PHARMATECH OFFER?",
            answer: "Aureole PharmaTech offers monitoring, control, data logging, and compliance-focused software solutions for pharmaceutical, laboratory, and research equipment."
        },
        {
            question: "IS AUREOLE PHARMATECH SOFTWARE COMPLIANT WITH REGULATORY STANDARDS?",
            answer: "Yes. The software is designed to support regulatory compliance, including data integrity, audit trails, secure access, and traceable records."
        },
        {
            question: "CAN THE SOFTWARE BE INTEGRATED WITH EXISTING EQUIPMENT?",
            answer: "Yes. Aureole PharmaTech software is designed for seamless integration with its equipment and can be adapted to existing systems where applicable."
        },
        {
            question: "DOES THE SOFTWARE SUPPORT ALARMS AND ALERTS?",
            answer: "Yes. Real-time alarms, notifications, and alerts are provided to ensure quick response to deviations or system events."
        },
        {
            question: "IS TECHNICAL SUPPORT AVAILABLE FOR THE SOFTWARE?",
            answer: "Yes. Aureole PharmaTech offers ongoing technical support, maintenance assistance, and software updates."
        },
        {
            question: "CAN REPORTS BE GENERATED FOR AUDITS AND DOCUMENTATION?",
            answer: "Yes. The software provides automated reports, graphical data trends, and exportable formats suitable for audits and compliance documentation."
        }
    ];

    return (
        <section className="py-24 border-t border-slate-100 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="max-w-4xl mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-12 h-[2px] bg-aureole-blue"></span>
                        <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">KNOWLEDGE BASE</h2>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none">
                        FREQUENTLY ASKED <span className="text-aureole-cyan uppercase tracking-normal">Questions.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {FAQ_DATA.map((faq, idx) => (
                        <div key={idx} className="bg-white p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                            <div className="absolute -top-4 -right-2 text-8xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity select-none pointer-events-none">
                                {idx + 1}
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-aureole-blue/5 flex-shrink-0 flex items-center justify-center text-aureole-blue font-black text-[10px]">
                                        Q
                                    </div>
                                    <h3 className="text-[13px] font-black uppercase tracking-wider text-[#001529] leading-snug">
                                        {faq.question}
                                    </h3>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-aureole-cyan/5 flex-shrink-0 flex items-center justify-center text-aureole-cyan font-black text-[10px]">
                                        A
                                    </div>
                                    <p className="text-[15px] font-medium text-slate-500 tracking-tight leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SoftwareFaq;
