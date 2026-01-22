
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FaqSection: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const FAQ_DATA = [
        {
            question: "WHAT SERVICES DOES AUREOLE PHARMATECH PROVIDE?",
            answer: "Aureole PharmaTech provides comprehensive services including product consultation, installation support, preventive maintenance, troubleshooting, warranty support, and post-sales technical assistance."
        },
        {
            question: "HOW CAN I CONTACT AUREOLE PHARMATECH FOR SERVICE SUPPORT?",
            answer: "You can contact the service team through phone, email, or the website’s online inquiry form for prompt assistance."
        },
        {
            question: "DOES AUREOLE PHARMATECH OFFER AFTER-SALES SUPPORT?",
            answer: "Yes. The company provides complete after-sales support, including warranty services, safety notifications, product updates, and customer training where required."
        },
        {
            question: "HOW DOES AUREOLE PHARMATECH ENSURE PRODUCT QUALITY?",
            answer: "Product quality is ensured through strict regulatory compliance, multiple certifications, and rigorous internal quality control processes at every stage of manufacturing."
        },
        {
            question: "DOES AUREOLE PHARMATECH OPERATE INTERNATIONALLY?",
            answer: "Yes. Aureole PharmaTech serves clients in both domestic and international markets and adapts to different regulatory environments."
        },
        {
            question: "WHAT SUSTAINABILITY PRACTICES DOES AUREOLE PHARMATECH FOLLOW?",
            answer: "The company follows ethical sourcing, environmentally responsible production, and community engagement initiatives to promote sustainability."
        }
    ];

    return (
        <section className="py-24 border-t border-slate-100">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-4xl font-[950] font-heading uppercase tracking-tighter text-[#001529] mb-16 text-center leading-none">FAQS.</h3>
                    <div className="space-y-4">
                        {FAQ_DATA.map((faq, idx) => (
                            <div key={idx} className="bg-white border border-slate-100">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-8 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <span className="text-[11px] font-black uppercase tracking-widest text-[#001529]">{faq.question}</span>
                                    {openFaq === idx ? <Minus className="w-4 h-4 text-aureole-cyan" /> : <Plus className="w-4 h-4 text-aureole-blue" />}
                                </button>
                                <div className={`transition-all duration-500 overflow-hidden ${openFaq === idx ? 'max-h-[500px]' : 'max-h-0'}`}>
                                    <div className="p-8 pt-0 border-t border-slate-50">
                                        <p className="text-[15px] font-medium text-slate-500 tracking-tight leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
