import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const ProductsContact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        const apiData = {
            data: {
                full_name_0: formData.fullName,
                company_name_1: formData.companyName,
                email_address_2: formData.email,
                phone_number_3: formData.phone,
                address_4: formData.address,
                message_5: formData.message
            }
        };

        try {
            const response = await fetch("https://hrms.aureolegroup.com/api/forms/enquiry-form/submit/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(apiData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    fullName: '',
                    companyName: '',
                    email: '',
                    phone: '',
                    address: '',
                    message: ''
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section className="py-16 bg-transparent relative">

            <div className="container mx-auto px-6 lg:px-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-blue">TECHNICAL ENQUIRY</h2>
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-[950] font-heading text-slate-900 uppercase tracking-tighter leading-none mb-6">
                            PRECISION IS JUST A <br /> <span className="text-aureole-blue">MESSAGE</span> AWAY.
                        </h3>
                        <p className="text-slate-600 text-base font-medium leading-relaxed max-w-lg mb-10">
                            Whether you need a custom-built walk-in stability testing equipment or a fleet of laboratory instruments, our clinical engineering team provides end-to-step consultation.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 text-aureole-blue">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-0.5">Email Us</p>
                                    <a href="mailto:enquiry@aureolepharmatech.com" className="text-slate-900 text-[13px] font-bold tracking-wide hover:text-aureole-blue transition-colors">
                                        enquiry@aureolepharmatech.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 text-aureole-blue">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-0.5">Call Us</p>
                                    <a href="tel:+918600522240" className="text-slate-900 text-[13px] font-bold tracking-wide hover:text-aureole-blue transition-colors">
                                        +91 86005 22240
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 shadow-2xl shadow-slate-200/50 relative rounded-sm border border-slate-100">
                        {status === 'success' ? (
                            <div className="py-12 text-center space-y-4">
                                <div className="flex justify-center">
                                    <CheckCircle2 size={64} className="text-green-500" />
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Enquiry Sent!</h4>
                                <p className="text-slate-600 font-medium">Thank you for your interest. Our technical team will contact you shortly.</p>
                                <button 
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 text-[10px] font-black text-aureole-blue uppercase tracking-widest hover:text-aureole-cyan"
                                >
                                    Send another enquiry
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
                                {status === 'error' && (
                                    <div className="bg-red-50 border border-red-100 p-4 flex items-center gap-3 text-red-600 text-sm font-bold mb-6">
                                        <AlertCircle size={18} />
                                        <span>Something went wrong. Please try again or call us directly.</span>
                                    </div>
                                )}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[12px] font-bold text-slate-700">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-[13px] font-medium text-slate-800 focus:border-aureole-blue focus:ring-0 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[12px] font-bold text-slate-700">Company Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            placeholder="Your Organization"
                                            className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-[13px] font-medium text-slate-800 focus:border-aureole-blue focus:ring-0 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[12px] font-bold text-slate-700">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@company.com"
                                            className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-[13px] font-medium text-slate-800 focus:border-aureole-blue focus:ring-0 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[12px] font-bold text-slate-700">Phone No</label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-[13px] font-medium text-slate-800 focus:border-aureole-blue focus:ring-0 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-1.5 sm:col-span-2">
                                        <label className="text-[12px] font-bold text-slate-700">Address / City</label>
                                        <input
                                            required
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            placeholder="City, State"
                                            className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-[13px] font-medium text-slate-800 focus:border-aureole-blue focus:ring-0 transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[12px] font-bold text-slate-700">Message / Requirements</label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="Tell us about your requirements..."
                                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-[13px] font-medium text-slate-800 focus:border-aureole-blue focus:ring-0 transition-all outline-none resize-none"
                                    ></textarea>
                                </div>

                                <button 
                                    className="w-full group relative flex items-center justify-center gap-3 bg-aureole-blue text-white py-4 overflow-hidden transition-all duration-500 shadow-xl hover:shadow-aureole-blue/30 disabled:opacity-70"
                                    disabled={status === 'loading'}
                                >
                                    <div className="absolute inset-0 w-0 bg-aureole-cyan transition-all duration-500 ease-out group-hover:w-full"></div>
                                    <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.3em]">
                                        {status === 'loading' ? 'SUBMITTING...' : 'SEND ENQUIRY'}
                                    </span>
                                    {status === 'loading' ? (
                                        <Loader2 size={16} className="relative z-10 animate-spin" />
                                    ) : (
                                        <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-2" />
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsContact;
