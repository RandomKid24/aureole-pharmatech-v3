
import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

const ServiceCTA: React.FC = () => {
    return (
        <section className="py-16 bg-white border-t border-slate-100 bg-[url('/wavebg.png')] bg-cover bg-fixed">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-5xl font-black font-heading tracking-tighter text-aureole-blue uppercase mb-12 leading-[0.85]">
                        CONTACT SERVICE TEAM
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-10 border-y border-slate-100/60">
                        <a 
                            href="tel:+918600522240" 
                            className="flex items-center gap-4 group transition-all"
                        >
                            <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-aureole-blue group-hover:border-aureole-blue transition-all">
                                <Phone className="w-4 h-4 text-aureole-slate group-hover:text-white transition-colors" />
                            </div>
                            <div className="text-left">
                                <p className="text-lg font-black font-heading text-aureole-slate tracking-tight leading-none mb-1.5">+91 86005 22240</p>
                                <p className="text-[10px] font-black text-slate-400 tracking-[0.2em] group-hover:text-aureole-blue transition-colors">Direct Support</p>
                            </div>
                        </a>
                        
                        <div className="hidden md:block w-px h-12 bg-slate-200"></div>

                        <a 
                            href="mailto:service.support@aureolepharmatech.com" 
                            className="flex items-center gap-4 group transition-all"
                        >
                            <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-aureole-blue group-hover:border-aureole-blue transition-all">
                                <Mail className="w-4 h-4 text-aureole-slate group-hover:text-white transition-colors" />
                            </div>
                            <div className="text-left">
                                <p className="text-lg font-black font-heading text-aureole-slate tracking-tight lowercase leading-none mb-1.5">service.support@aureolepharmatech.com</p>
                                <p className="text-[10px] font-black text-slate-400 tracking-[0.2em] group-hover:text-aureole-blue transition-colors">Email Support</p>
                            </div>
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-4 pt-12">
                        <Globe className="w-5 h-5 text-aureole-blue" />
                        <p className="text-[10px] font-black font-heading text-aureole-blue tracking-[0.4em]">
                            Service support available across India & globally
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceCTA;
