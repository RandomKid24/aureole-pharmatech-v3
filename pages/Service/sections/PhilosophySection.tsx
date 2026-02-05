import React from 'react';

const PhilosophySection: React.FC = () => {

    return (
        <section className="py-24 bg-transparent">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="max-w-4xl mx-auto space-y-20">
                    <div>
                        <h3 className="text-4xl lg:text-5xl font-black font-heading tracking-tighter text-aureole-slate leading-[0.9] mb-6">
                            Diverse & Innovative <span className="text-aureole-cyan">Product Range</span>
                        </h3>
                        <p className="text-base font-sans font-medium text-slate-500 tracking-tight leading-relaxed text-left">
                            The product portfolio is both broad and forward-thinking. From essential pharmaceutical and laboratory equipment to advanced systems, each product is developed through a meticulous R&D process emphasizing safety, efficacy, and adaptability to dynamic healthcare needs.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-4xl lg:text-5xl font-black font-heading tracking-tighter text-aureole-slate leading-[0.9] mb-6">
                            Customer-Centric <span className="text-aureole-blue">Philosophy</span>
                        </h3>
                        <p className="text-base font-sans font-medium text-slate-500 tracking-tight leading-relaxed text-left">
                            Building long-term client relationships is central to Aureole PharmaTech’s strategy. Customer feedback is actively valued and used for continuous improvement. By proactively addressing requirements and consistently delivering on commitments, the company fosters trust and long-term loyalty.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
