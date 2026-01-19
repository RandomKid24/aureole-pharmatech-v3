
import React, { useState } from 'react';
import {
    Plus,
    Minus,
    MapPin,
    ShieldCheck,
    Factory,
    Globe,
    Leaf,
    CheckCircle2,
    Settings,
    Package,
    Wrench,
    Layers,
    Microscope,
    Activity,
    Maximize2
} from 'lucide-react';
import Lightbox from '../components/Lightbox';

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

const SERVICE_CENTERS = [
    "BADDI", "DEHRADUN", "DELHI", "HARIDWAR", "GUWAHATI",
    "AHMEDABAD", "VADODARA", "VAPI", "PITHAMPUR", "NASHIK",
    "MUMBAI", "PUNE", "AURANGABAD", "GOA", "HYDERABAD",
    "BANGALORE", "VISAKHAPATNAM", "CHENNAI"
];

const Service: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const serviceImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200";

    return (
        <div className="pt-24 lg:pt-32 pb-20 bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-slate-100 bg-white py-24 lg:py-40">
                <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none hidden lg:block">
                    <span className="text-[180px] lg:text-[250px] font-black text-aureole-slate tracking-tighter leading-none uppercase">SERVICE</span>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center lg:text-left">
                    <div className="max-w-5xl mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h1 className="text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">SUPPORT SERVICES</h1>
                        </div>

                        <h2 className="text-4xl lg:text-[85px] font-[950] text-[#001529] uppercase tracking-tighter leading-[0.95] mb-12">
                            SUPPORT <br />
                            <span className="text-aureole-cyan uppercase tracking-normal">Services.</span>
                        </h2>

                        <div className="max-w-3xl border-l-[3px] border-aureole-blue/20 bg-slate-50/50 p-10 mx-auto lg:mx-0">
                            <p className="text-lg lg:text-xl text-slate-700 font-medium leading-relaxed mb-8">
                                In the ever-evolving pharmaceutical and laboratory equipment landscape, quality and customer service are the cornerstones of success. Aureole PharmaTech stands as a beacon of excellence in this competitive industry, delivering reliable products backed by responsive and comprehensive support services.
                            </p>
                            <p className="text-[15px] text-slate-500 font-medium leading-relaxed tracking-tight">
                                Founded with a mission to provide high-quality pharmaceutical products and equipment, the company operates on core values of integrity, innovation, and customer focus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Excellence Grid */}
            <section className="py-24 border-b border-slate-100 bg-aureole-soft">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Quality Standards */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <ShieldCheck className="w-8 h-8 text-aureole-blue" />
                                <h3 className="text-3xl lg:text-4xl font-black font-heading uppercase tracking-tighter text-[#001529] leading-none">QUALITY STANDARDS</h3>
                            </div>
                            <p className="text-[15px] font-medium text-slate-500 tracking-tight leading-relaxed text-left">
                                Quality is uncompromising at Aureole PharmaTech. The company maintains stringent regulatory compliance and holds multiple certifications that reflect international quality benchmarks. Internally enforced quality control processes ensure that every product dispatched is safe, effective, and reliable.
                            </p>
                        </div>

                        {/* Manufacturing Excellence */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <Factory className="w-8 h-8 text-aureole-cyan" />
                                <h3 className="text-3xl lg:text-4xl font-black font-heading uppercase tracking-tighter text-[#001529] leading-none">MANUFACTURING EXCELLENCE</h3>
                            </div>
                            <p className="text-[15px] font-medium text-slate-500 tracking-tight leading-relaxed text-left">
                                Aureole PharmaTech leverages advanced manufacturing facilities equipped with state-of-the-art technology. Supported by a skilled workforce and continuous training programs, the manufacturing process ensures precision, consistency, and adherence to the highest quality standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Range & Philosophy */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div
                            className="relative overflow-hidden border border-slate-100 shadow-2xl group transition-all duration-700 aspect-video lg:aspect-square cursor-zoom-in"
                            onClick={() => setIsLightboxOpen(true)}
                        >
                            <img
                                src={serviceImage}
                                alt="MANUFACTURING"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-aureole-slate/10 group-hover:bg-transparent transition-colors"></div>
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-white p-3 shadow-xl">
                                    <Maximize2 size={24} className="text-aureole-blue" />
                                </div>
                            </div>
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

            {/* Service Centers */}
            <section className="py-24 bg-aureole-soft">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex flex-col mb-16 text-center lg:text-left">
                        <h3 className="text-5xl lg:text-7xl font-[950] font-heading uppercase tracking-tighter text-[#001529] leading-none mb-6">SERVICE <span className="text-aureole-cyan tracking-normal">Centers.</span></h3>
                        <p className="text-[15px] font-medium text-slate-400 tracking-tight max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            An extensive service network across India ensures prompt and localized support:
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {SERVICE_CENTERS.map((city, idx) => (
                            <div key={idx} className="bg-white border border-slate-100 p-6 hover:bg-aureole-cyan hover:border-aureole-cyan group transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-3 h-3 text-aureole-blue group-hover:text-white transition-colors" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#001529] group-hover:text-white transition-colors">{city}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
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

            <Lightbox
                images={[serviceImage]}
                currentIndex={0}
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
                onNext={() => { }}
                onPrev={() => { }}
                title="Aureole Manufacturing Excellence"
            />
        </div>
    );
};

export default Service;
