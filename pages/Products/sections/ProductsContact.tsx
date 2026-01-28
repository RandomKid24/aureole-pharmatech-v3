
import React from 'react';
import { Mail, Phone, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

const ProductsContact: React.FC = () => {
    return (
        <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 translate-x-1/2"></div>

            <div className="container mx-auto px-6 lg:px-24 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    <div className="lg:col-span-12 mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-blue">TECHNICAL ENQUIRY</h2>
                        </div>
                        <h3 className="text-4xl lg:text-7xl font-[950] font-heading text-aureole-slate uppercase tracking-tighter leading-none mb-4">
                            PRECISION IS JUST A <br /> <span className="text-aureole-cyan">MESSAGE AWAY.</span>
                        </h3>
                    </div>

                    <div className="lg:col-span-5 space-y-12">
                        <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-lg">
                            Whether you need a custom-built walk-in stability chamber or a fleet of laboratory instruments, our clinical engineering team provides end-to-step consultation.
                        </p>

                        <div className="space-y-6">
                            {[
                                "Custom Engineering Consultation",
                                "Global Regulatory (ICH/FDA) Advisory",
                                "Installation & DQ/IQ/OQ/PQ Support",
                                "24/7 Technical Service Backbone"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="w-6 h-6 rounded-full bg-aureole-blue/10 flex items-center justify-center text-aureole-blue transition-colors group-hover:bg-aureole-blue group-hover:text-white">
                                        <CheckCircle2 size={12} />
                                    </div>
                                    <span className="text-[12px] font-black text-aureole-slate uppercase tracking-wider">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                            <div>
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Direct Lines</h4>
                                <div className="space-y-3">
                                    <a href="tel:+912532381234" className="flex items-center gap-3 text-[13px] font-bold text-aureole-blue hover:text-aureole-cyan transition-colors">
                                        <Phone size={14} /> +91 253 2381234
                                    </a>
                                    <a href="mailto:info@aureolepharmatech.com" className="flex items-center gap-3 text-[13px] font-bold text-aureole-blue hover:text-aureole-cyan transition-colors">
                                        <Mail size={14} /> info@aureolepharmatech.com
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Global HQ</h4>
                                <p className="text-[13px] font-bold text-aureole-slate leading-relaxed">
                                    Survey No. 25, Nashik-Puna Road, <br />
                                    Nashik, Maharashtra 422001
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 bg-white p-8 sm:p-12 shadow-2xl border border-slate-100 relative group/form">
                        <div className="absolute inset-0 bg-aureole-blue/[0.02] translate-x-2 translate-y-2 -z-10 group-hover/form:translate-x-3 group-hover/form:translate-y-3 transition-transform"></div>

                        <form className="grid sm:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Client Name</label>
                                <input type="text" className="w-full border-b-2 border-slate-100 focus:border-aureole-cyan py-3 text-[13px] font-bold outline-none transition-colors bg-transparent" placeholder="Authorized Personnel" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Organization</label>
                                <input type="text" className="w-full border-b-2 border-slate-100 focus:border-aureole-cyan py-3 text-[13px] font-bold outline-none transition-colors bg-transparent" placeholder="Pharma / Lab Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Endpoint</label>
                                <input type="email" className="w-full border-b-2 border-slate-100 focus:border-aureole-cyan py-3 text-[13px] font-bold outline-none transition-colors bg-transparent" placeholder="corporate@domain.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Subject Line</label>
                                <select className="w-full border-b-2 border-slate-100 focus:border-aureole-cyan py-3 text-[13px] font-bold outline-none transition-colors bg-transparent cursor-pointer">
                                    <option>Technical Consultation</option>
                                    <option>Bulk/Custom Quotation</option>
                                    <option>Annual Service Contract</option>
                                    <option>Validation Support</option>
                                </select>
                            </div>
                            <div className="sm:col-span-2 space-y-2">
                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Requirement Blueprint</label>
                                <textarea className="w-full border-b-2 border-slate-100 focus:border-aureole-cyan py-3 text-[13px] font-bold outline-none transition-colors bg-transparent resize-none h-32" placeholder="Specify model numbers, dimensions or custom specs..."></textarea>
                            </div>

                            <div className="sm:col-span-2 pt-4">
                                <button className="w-full group relative flex items-center justify-center gap-6 bg-aureole-blue text-white py-6 overflow-hidden transition-all duration-500 shadow-xl hover:shadow-aureole-cyan/30">
                                    <div className="absolute inset-0 w-0 bg-aureole-cyan transition-all duration-500 ease-right group-hover:w-full"></div>
                                    <span className="relative z-10 text-[13px] font-black uppercase tracking-[0.4em]">INITIATE PROTOCOL</span>
                                    <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-2" />
                                </button>
                                <p className="mt-6 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
                                    <ShieldCheck size={12} className="text-aureole-cyan" /> Secure AES-256 Encrypted Transmission
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsContact;
