
import React from 'react';
import LazyImage from '@/components/LazyImage';

const PhilosophySection: React.FC = () => {
    const serviceImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200";

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div
                        className="relative overflow-hidden border border-slate-100 shadow-2xl group transition-all duration-700 aspect-video lg:aspect-square flex items-center justify-center p-6"
                    >
                        <LazyImage
                            src={serviceImage}
                            alt="MANUFACTURING"
                            className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-aureole-slate/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="space-y-16">
                        <div>
                            <h3 className="text-4xl lg:text-5xl font-black font-heading uppercase tracking-tighter text-[#001529] leading-[0.9] mb-6">DIVERSE & INNOVATIVE <br /><span className="text-aureole-cyan">PRODUCT RANGE.</span></h3>
                            <p className="text-[15px] font-medium text-slate-500 tracking-tight leading-relaxed text-left">
                                The product portfolio is both broad and forward-thinking. From essential pharmaceutical and laboratory equipment to advanced systems, each product is developed through a meticulous R&D process emphasizing safety, efficacy, and adaptability to dynamic healthcare needs.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-4xl lg:text-5xl font-black font-heading uppercase tracking-tighter text-[#001529] leading-[0.9] mb-6">CUSTOMER-CENTRIC <br /><span className="text-aureole-blue">PHILOSOPHY.</span></h3>
                            <p className="text-[15px] font-medium text-slate-500 tracking-tight leading-relaxed text-left">
                                Building long-term client relationships is central to Aureole PharmaTech’s strategy. Customer feedback is actively valued and used for continuous improvement. By proactively addressing requirements and consistently delivering on commitments, the company fosters trust and long-term loyalty.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
