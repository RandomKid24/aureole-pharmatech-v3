import React from 'react';
import { Mail, Phone, ArrowRight, MapPin } from 'lucide-react';

const ProductEnquiry: React.FC = () => {
    return (
        <section className="py-16 bg-slate-50 relative overflow-hidden border-t border-slate-200">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(#aureole-blue_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

            <div className="container mx-auto px-6 lg:px-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-blue">PRODUCT ENQUIRY</h2>
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-[950] font-heading text-slate-900 uppercase tracking-tighter leading-none mb-6">
                            REQUEST A <br /> <span className="text-aureole-blue">QUOTE</span> TODAY
                        </h3>
                        <p className="text-slate-600 text-base font-medium leading-relaxed max-w-lg mb-10">
                            Get a detailed price quote and technical specifications tailored to your lab's requirements. Our team is here to assist you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 text-aureole-blue">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-0.5">Email Us</p>
                                    <a href="mailto:info@aureolepharmatech.com" className="text-slate-900 text-[13px] font-bold tracking-wide hover:text-aureole-blue transition-colors">
                                        info@aureolepharmatech.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 text-aureole-blue">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-0.5">Call Us</p>
                                    <a href="tel:+912532381234" className="text-slate-900 text-[13px] font-bold tracking-wide hover:text-aureole-blue transition-colors">
                                        +91 253 2381234
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 shadow-2xl shadow-slate-200/50 relative rounded-sm border border-slate-100">
                        <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[12px] font-bold text-slate-700">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-[13px] font-medium text-slate-800 focus:border-aureole-blue focus:ring-0 transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[12px] font-bold text-slate-700">Company Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Organization"
                                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-[13px] font-medium text-slate-800 focus:border-aureole-blue focus:ring-0 transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[12px] font-bold text-slate-700">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-[13px] font-medium text-slate-800 focus:border-aureole-blue focus:ring-0 transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[12px] font-bold text-slate-700">Phone No</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-[13px] font-medium text-slate-800 focus:border-aureole-blue focus:ring-0 transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-1.5 sm:col-span-2">
                                    <label className="text-[12px] font-bold text-slate-700">Address / City</label>
                                    <input
                                        type="text"
                                        placeholder="City, State"
                                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-[13px] font-medium text-slate-800 focus:border-aureole-blue focus:ring-0 transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[12px] font-bold text-slate-700">Message / Requirements</label>
                                <textarea
                                    rows={3}
                                    placeholder="Tell us about your requirements..."
                                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-[13px] font-medium text-slate-800 focus:border-aureole-blue focus:ring-0 transition-all outline-none resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full group relative flex items-center justify-center gap-3 bg-aureole-blue text-white py-4 overflow-hidden transition-all duration-500 shadow-xl hover:shadow-aureole-blue/30">
                                <div className="absolute inset-0 w-0 bg-aureole-cyan transition-all duration-500 ease-out group-hover:w-full"></div>
                                <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.3em]">SEND ENQUIRY</span>
                                <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductEnquiry;
