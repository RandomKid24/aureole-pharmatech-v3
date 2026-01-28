
import React from 'react';
import { Mail, Phone, MessageSquare, ArrowRight, ShieldCheck, Clock, Globe } from 'lucide-react';

const ProductEnquiry: React.FC = () => {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
            <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-aureole-blue/20 rounded-full blur-[120px]"></div>
            <div className="absolute -left-24 -top-24 w-96 h-96 bg-aureole-cyan/10 rounded-full blur-[120px]"></div>

            <div className="container mx-auto px-6 lg:px-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-[2px] bg-aureole-cyan"></span>
                            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-cyan">PRODUCT ENQUIRY</h2>
                        </div>
                        <h3 className="text-4xl lg:text-6xl font-[950] font-heading text-white uppercase tracking-tighter leading-none mb-8">
                            READY TO <br /> <span className="text-aureole-cyan">OPTIMIZE</span> YOUR LAB?
                        </h3>
                        <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-xl mb-12">
                            Our technical experts are ready to assist you with custom configurations, detailed quotations, and technical consultations for your specific pharmaceutical requirements.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    <ShieldCheck className="text-aureole-cyan" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white text-[12px] font-black uppercase tracking-widest mb-1">Quality Guaranteed</h4>
                                    <p className="text-slate-500 text-[11px] font-bold uppercase tracking-tight">ISO 9001:2015 Certified</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    <Clock className="text-aureole-cyan" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white text-[12px] font-black uppercase tracking-widest mb-1">Fast Response</h4>
                                    <p className="text-slate-500 text-[11px] font-bold uppercase tracking-tight">Within 24 Business Hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 lg:p-12 shadow-2xl relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-aureole-blue/5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>

                        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-slate-50 border border-slate-200 px-4 py-4 text-[12px] font-bold focus:border-aureole-blue focus:ring-0 transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-slate-50 border border-slate-200 px-4 py-4 text-[12px] font-bold focus:border-aureole-blue focus:ring-0 transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Company / Institution</label>
                                <input
                                    type="text"
                                    placeholder="Enter your organization"
                                    className="w-full bg-slate-50 border border-slate-200 px-4 py-4 text-[12px] font-bold focus:border-aureole-blue focus:ring-0 transition-all outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Message / Requirements</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your requirements..."
                                    className="w-full bg-slate-50 border border-slate-200 px-4 py-4 text-[12px] font-bold focus:border-aureole-blue focus:ring-0 transition-all outline-none resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full group relative flex items-center justify-center gap-4 bg-aureole-blue text-white py-5 overflow-hidden transition-all duration-500 shadow-xl hover:shadow-aureole-cyan/20">
                                <div className="absolute inset-0 w-0 bg-aureole-cyan transition-all duration-500 ease-out group-hover:w-full"></div>
                                <span className="relative z-10 text-[12px] font-black uppercase tracking-[0.3em]">SEND ENQUIRY</span>
                                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-2" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-white/10 grid sm:grid-cols-3 gap-12 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                            <Mail className="text-aureole-cyan" size={20} />
                        </div>
                        <div>
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Email Us</p>
                            <p className="text-white text-[13px] font-bold">info@aureolepharmatech.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                            <Phone className="text-aureole-cyan" size={20} />
                        </div>
                        <div>
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Call Us</p>
                            <p className="text-white text-[13px] font-bold">+91 253 2381234</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                            <Globe className="text-aureole-cyan" size={20} />
                        </div>
                        <div>
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Location</p>
                            <p className="text-white text-[13px] font-bold">Nashik, Maharashtra, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductEnquiry;
