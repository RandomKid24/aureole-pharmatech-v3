
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FaqSection: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const FAQ_DATA = [
        {
            question: "What services does Aureole PharmaTech provide?",
            answer: "Aureole PharmaTech provides comprehensive services including product consultation, installation support, preventive maintenance, troubleshooting, warranty support, and post-sales technical assistance."
        },
        {
            question: "How can I contact Aureole PharmaTech for service support?",
            answer: "You can contact the service team through phone, email, or the website’s online inquiry form for prompt assistance."
        },
        {
            question: "Does Aureole PharmaTech offer after-sales support?",
            answer: "Yes. The company provides complete after-sales support, including warranty services, safety notifications, product updates, and customer training where required."
        },
        {
            question: "How does Aureole PharmaTech ensure product quality?",
            answer: "Product quality is ensured through strict regulatory compliance, multiple certifications, and rigorous internal quality control processes at every stage of manufacturing."
        },
        {
            question: "Does Aureole PharmaTech operate internationally?",
            answer: "Yes. Aureole PharmaTech serves clients in both domestic and international markets and adapts to different regulatory environments."
        },
        {
            question: "What sustainability practices does Aureole PharmaTech follow?",
            answer: "The company follows ethical sourcing, environmentally responsible production, and community engagement initiatives to promote sustainability."
        }
    ];

    return (
        <section className="py-24 border-t border-slate-100 bg-white">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-4xl font-[950] font-heading tracking-tighter text-aureole-slate mb-16 text-center leading-none">
                        Frequently Asked <span className="text-aureole-cyan">Questions</span>
                    </h3>
                    <div className="space-y-4">
                        {FAQ_DATA.map((faq, idx) => (
                            <div key={idx} className="bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-7 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <span className="text-base font-bold font-heading text-aureole-slate tracking-tight">{faq.question}</span>
                                    {openFaq === idx ? <Minus className="w-5 h-5 text-aureole-cyan" /> : <Plus className="w-5 h-5 text-aureole-blue" />}
                                </button>
                                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-7 pt-0 border-t border-slate-50">
                                        <p className="text-base font-sans font-medium text-slate-500 tracking-tight leading-relaxed">
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
