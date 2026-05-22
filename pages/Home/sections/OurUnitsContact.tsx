import React, { useState, useRef, useEffect } from 'react';
import { MapPin, ArrowRight, ChevronDown, Activity, CheckCircle2, AlertCircle, Loader2, Globe, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const COUNTRY_CODES = [
  { code: '+91', label: 'India', flag: '🇮🇳' },
  { code: '+1', label: 'United States', flag: '🇺🇸' },
  { code: '+44', label: 'United Kingdom', flag: '🇬🇧' },
  { code: '+971', label: 'UAE', flag: '🇦🇪' },
  { code: '+49', label: 'Germany', flag: '🇩🇪' },
  { code: '+33', label: 'France', flag: '🇫🇷' },
  { code: '+81', label: 'Japan', flag: '🇯🇵' },
  { code: '+61', label: 'Australia', flag: '🇦🇺' },
  { code: '+65', label: 'Singapore', flag: '🇸🇬' },
  { code: '+86', label: 'China', flag: '🇨🇳' },
  { code: '+966', label: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+7', label: 'Russia', flag: '🇷🇺' },
  { code: '+55', label: 'Brazil', flag: '🇧🇷' },
  { code: '+27', label: 'South Africa', flag: '🇿🇦' },
  { code: '+82', label: 'South Korea', flag: '🇰🇷' },
  { code: '+39', label: 'Italy', flag: '🇮🇹' },
  { code: '+34', label: 'Spain', flag: '🇪🇸' },
  { code: '+1', label: 'Canada', flag: '🇨🇦' },
  { code: '+41', label: 'Switzerland', flag: '🇨🇭' },
  { code: '+31', label: 'Netherlands', flag: '🇳🇱' },
  { code: '+46', label: 'Sweden', flag: '🇸🇪' },
  { code: '+47', label: 'Norway', flag: '🇳🇴' },
  { code: '+45', label: 'Denmark', flag: '🇩🇰' },
  { code: '+358', label: 'Finland', flag: '🇫🇮' },
  { code: '+32', label: 'Belgium', flag: '🇧🇪' },
  { code: '+43', label: 'Austria', flag: '🇦🇹' },
  { code: '+353', label: 'Ireland', flag: '🇮🇪' },
  { code: '+64', label: 'New Zealand', flag: '🇳🇿' },
  { code: '+60', label: 'Malaysia', flag: '🇲🇾' },
  { code: '+66', label: 'Thailand', flag: '🇹🇭' },
  { code: '+62', label: 'Indonesia', flag: '🇮🇩' },
  { code: '+63', label: 'Philippines', flag: '🇵🇭' },
  { code: '+84', label: 'Vietnam', flag: '🇻🇳' },
  { code: '+90', label: 'Turkey', flag: '🇹🇷' },
  { code: '+20', label: 'Egypt', flag: '🇪🇬' },
  { code: '+234', label: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', label: 'Kenya', flag: '🇰🇪' },
  { code: '+212', label: 'Morocco', flag: '🇲🇦' },
  { code: '+54', label: 'Argentina', flag: '🇦🇷' },
  { code: '+56', label: 'Chile', flag: '🇨🇱' },
  { code: '+57', label: 'Colombia', flag: '🇨🇴' },
  { code: '+51', label: 'Peru', flag: '🇵🇪' },
  { code: '+52', label: 'Mexico', flag: '🇲🇽' },
  { code: '+92', label: 'Pakistan', flag: '🇵🇰' },
  { code: '+880', label: 'Bangladesh', flag: '🇧🇩' },
  { code: '+94', label: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+977', label: 'Nepal', flag: '🇳🇵' },
  { code: '+974', label: 'Qatar', flag: '🇶🇦' },
  { code: '+965', label: 'Kuwait', flag: '🇰🇼' },
  { code: '+968', label: 'Oman', flag: '🇴🇲' },
  { code: '+973', label: 'Bahrain', flag: '🇧🇭' },
  { code: '+962', label: 'Jordan', flag: '🇯🇴' },
  { code: '+961', label: 'Lebanon', flag: '🇱🇧' }
];

const OurUnitsContact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    countryCode: '+91',
    email: '',
    product: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry = COUNTRY_CODES.find(c => c.code === formData.countryCode) || COUNTRY_CODES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Phone validation (at least 7 digits)
    const phoneRegex = /^\d{7,15}$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.fullName) newErrors.fullName = 'Name is required';
    if (!formData.companyName) newErrors.companyName = 'Company name is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('loading');

    const apiData = {
      data: {
        full_name_0: formData.fullName,
        company_name_1: formData.companyName,
        email_address_2: formData.email,
        phone_number_3: `${formData.countryCode} ${formData.phone}`,
        address_4: formData.product, // Using address_4 for product interest as per common index usage
        message_5: formData.message
      }
    };

    try {
      const response = await fetch("https://hrms.encryptedbar.com/api/forms/enquiry-form/submit/", {
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
          phone: '',
          countryCode: '+91',
          email: '',
          product: '',
          message: ''
        });
        setErrors({});
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
    <section id="contact" className="py-12 lg:py-16 bg-transparent relative overflow-hidden group/section">

      <div className="container mx-auto px-4 sm:px-8 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          <div className="lg:col-span-12 xl:col-span-4 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-aureole-blue"></span>
              <h2 className="text-[12px] font-black tracking-[0.4em] text-aureole-blue">LOCATION</h2>
            </div>
            <h3 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#001529] leading-[0.85] tracking-tighter mb-12">
              Our <br /> <span className="text-aureole-blue">Unit</span>
            </h3>

            <div className="w-full flex-1 min-h-[400px] sm:min-h-[500px] rounded-sm overflow-hidden border border-slate-100 shadow-2xl transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.939773140443!2d73.975841775226!3d19.884764881493496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddbbc51726bf65%3A0x1346993e205c4667!2sAureole%20Pharma-Tech%20(Mfg.of%20Stability%20Chambers%20%2C%20autoclave%20and%20table%20top%20equipments)!5e0!3m2!1sen!2sin!4v1767930922662!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-8 bg-white/40 backdrop-blur-md shadow-xl rounded-3xl sm:rounded-[50px] p-6 sm:p-10 lg:p-14 border border-white/20 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 mb-10 border-b border-slate-200 pb-10">
                <div>
                  <h4 className="text-[10px] font-black text-aureole-blue tracking-widest mb-2">Email</h4>
                  <a href="mailto:enquiry@aureolepharmatech.com" className="text-lg font-black text-[#001529] hover:text-aureole-cyan transition-colors break-all sm:break-normal">enquiry@aureolepharmatech.com</a>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-aureole-blue tracking-widest mb-2">Phone</h4>
                  <a href="tel:+918600522240" className="text-lg font-black text-[#001529] hover:text-aureole-cyan transition-colors">+91 86005 22240</a>
                </div>
              </div>

              <h4 className="text-3xl font-black text-[#001529] mb-3 tracking-tighter">Contact <span className="text-aureole-blue">Us.</span></h4>
              <p className="text-slate-500 text-[10px] font-bold mb-10 tracking-widest">Request a technical consultation.</p>

              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="flex justify-center">
                    <CheckCircle2 size={64} className="text-green-500" />
                  </div>
                  <h4 className="text-2xl font-black text-[#001529] tracking-tighter">Message Sent!</h4>
                  <p className="text-slate-600 font-medium">Thank you for reaching out. Our team will contact you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-[10px] font-black text-aureole-blue tracking-widest hover:text-aureole-cyan"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-100 p-4 flex items-center gap-3 text-red-600 text-[10px] font-black tracking-widest mb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                      <AlertCircle size={16} />
                      <span>Submission failed. Please verify fields and retry.</span>
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="relative group">
                      <label className="text-[10px] font-black text-slate-400 tracking-[0.2em] block mb-2 transition-colors group-focus-within:text-aureole-blue uppercase">Full Name</label>
                      <div className={`flex items-center h-11 relative border-b-2 ${errors.fullName ? 'border-red-400' : 'border-slate-100'} transition-all`}>
                        <input 
                          type="text" 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Doe" 
                          className="w-full bg-transparent py-2 text-[15px] font-bold text-[#001529] font-body placeholder:text-slate-300 placeholder:text-[10px] placeholder:font-black placeholder:tracking-widest focus:outline-none transition-all" 
                        />
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          whileFocus={{ scaleX: 1 }}
                          transition={{ duration: 0.4, ease: "circOut" }}
                          className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-aureole-cyan origin-center z-10"
                        />
                      </div>
                      {errors.fullName && <div className="absolute top-full left-0 mt-1 text-red-500 text-[9px] font-black tracking-widest animate-in fade-in slide-in-from-top-1 duration-200">{errors.fullName}</div>}
                    </div>
                    <div className="relative group">
                      <label className="text-[10px] font-black text-slate-400 tracking-[0.2em] block mb-2 transition-colors group-focus-within:text-aureole-blue uppercase">Your Organization</label>
                      <div className={`flex items-center h-11 relative border-b-2 ${errors.companyName ? 'border-red-400' : 'border-slate-100'} transition-all`}>
                        <input 
                          type="text" 
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Company Name" 
                          className="w-full bg-transparent py-2 text-[15px] font-bold text-[#001529] font-body placeholder:text-slate-300 placeholder:text-[10px] placeholder:font-black placeholder:tracking-widest focus:outline-none transition-all" 
                        />
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          whileFocus={{ scaleX: 1 }}
                          transition={{ duration: 0.4, ease: "circOut" }}
                          className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-aureole-cyan origin-center z-10"
                        />
                      </div>
                      {errors.companyName && <div className="absolute top-full left-0 mt-1 text-red-500 text-[9px] font-black tracking-widest animate-in fade-in slide-in-from-top-1 duration-200">{errors.companyName}</div>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="relative group" ref={dropdownRef}>
                      <label className="text-[10px] font-black text-slate-400 tracking-[0.2em] block mb-2 transition-colors group-focus-within:text-aureole-blue uppercase">Phone Number</label>
                      <div className={`flex items-center h-11 gap-4 relative border-b-2 ${errors.phone ? 'border-red-400' : 'border-slate-100'} transition-all`}>
                        {/* Custom Premium Country Chooser */}
                        <div className="relative shrink-0">
                          <button
                            type="button"
                            onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                            className="flex items-center gap-3 bg-transparent py-2 px-1 text-[15px] font-bold text-[#001529] font-body focus:outline-none transition-all cursor-pointer hover:bg-slate-50/50 text-left"
                          >
                            <span className="text-xl shadow-sm leading-none">{selectedCountry.flag}</span>
                            <span className="tracking-tight leading-none">{selectedCountry.code}</span>
                            <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-500 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>

                          <AnimatePresence>
                            {isCountryDropdownOpen && (
                              <motion.div 
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="absolute left-0 top-full mt-3 w-80 max-h-80 overflow-y-auto bg-white/98 backdrop-blur-2xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl z-[100] py-3 animate-in fade-in slide-in-from-top-3 duration-500 scrollbar-thin scrollbar-thumb-slate-200"
                              >
                                <div className="px-4 pb-2 mb-2 border-b border-slate-100 flex items-center gap-2">
                                  <Search size={12} className="text-slate-400" />
                                  <span className="text-[9px] font-black text-slate-400 tracking-widest">Select Country Code</span>
                                </div>
                                {COUNTRY_CODES.map((c, idx) => (
                                  <button
                                    key={`${c.code}-${idx}`}
                                    type="button"
                                    onClick={() => {
                                      setFormData(prev => ({ ...prev, countryCode: c.code }));
                                      setIsCountryDropdownOpen(false);
                                    }}
                                    className={`w-full flex items-center justify-between px-5 py-3.5 hover:bg-slate-50 transition-all ${formData.countryCode === c.code ? 'bg-blue-50/50 text-aureole-blue' : 'text-[#001529]'}`}
                                  >
                                    <div className="flex items-center gap-4">
                                      <span className="text-2xl drop-shadow-sm">{c.flag}</span>
                                      <span className="text-[14px] font-bold font-body">{c.label}</span>
                                    </div>
                                    <span className={`text-[12px] font-black font-body ${formData.countryCode === c.code ? 'text-aureole-blue' : 'text-slate-400'}`}>{c.code}</span>
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="00000 00000" 
                          className="flex-1 bg-transparent py-2 text-[15px] font-bold text-[#001529] font-body placeholder:text-slate-300 placeholder:text-[10px] font-black tracking-widest focus:outline-none transition-all" 
                        />
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          whileFocus={{ scaleX: 1 }}
                          transition={{ duration: 0.4, ease: "circOut" }}
                          className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-aureole-cyan origin-center z-10"
                        />
                      </div>
                      {errors.phone && <div className="absolute top-full left-0 mt-1 text-red-500 text-[9px] font-black tracking-widest animate-in fade-in slide-in-from-top-1 duration-200">{errors.phone}</div>}
                    </div>
                    <div className="relative group">
                      <label className="text-[10px] font-black text-slate-400 tracking-[0.2em] block mb-2 transition-colors group-focus-within:text-aureole-blue uppercase">Official Email</label>
                      <div className={`flex items-center h-11 relative border-b-2 ${errors.email ? 'border-red-400' : 'border-slate-100'} transition-all`}>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com" 
                          className="w-full bg-transparent py-2 text-[15px] font-bold text-[#001529] font-body placeholder:text-slate-300 placeholder:text-[10px] placeholder:font-black placeholder:tracking-widest focus:outline-none transition-all" 
                        />
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          whileFocus={{ scaleX: 1 }}
                          transition={{ duration: 0.4, ease: "circOut" }}
                          className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-aureole-cyan origin-center z-10"
                        />
                      </div>
                      {errors.email && <div className="absolute top-full left-0 mt-1 text-red-500 text-[9px] font-black tracking-widest animate-in fade-in slide-in-from-top-1 duration-200">{errors.email}</div>}
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-[10px] font-black text-slate-400 tracking-[0.2em] block mb-2 transition-colors group-focus-within:text-aureole-blue uppercase">Product of Interest</label>
                  <div className={`flex items-center h-11 relative border-b-2 border-slate-100 transition-all`}>
                    <input 
                      type="text" 
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      placeholder="e.g. Stability Chamber v3" 
                      className="w-full bg-transparent py-2 text-[15px] font-bold text-[#001529] font-body placeholder:text-slate-300 placeholder:text-[10px] placeholder:font-black placeholder:tracking-widest focus:outline-none transition-all" 
                    />
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileFocus={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-aureole-cyan origin-center z-10"
                    />
                  </div>
                  </div>

                  <div className="relative group">
                    <label className="text-[10px] font-black text-slate-400 tracking-[0.2em] block mb-2 transition-colors group-focus-within:text-aureole-blue uppercase">Technical Requirements</label>
                    <div className={`relative border-b-2 border-slate-100 transition-all`}>
                      <textarea 
                        rows={3} 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your specifications..." 
                        className="w-full bg-transparent py-2 text-[15px] font-bold text-[#001529] font-body placeholder:text-slate-300 placeholder:text-[10px] placeholder:font-black placeholder:tracking-widest focus:outline-none transition-all resize-none"
                      ></textarea>
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        whileFocus={{ scaleX: 1 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-aureole-cyan origin-center z-10"
                      />
                    </div>
                  </div>

                  <button 
                    disabled={status === 'loading'}
                    className="flex items-center gap-6 group mt-6 disabled:opacity-50 relative"
                  >
                    <div className="w-16 h-16 bg-aureole-blue rounded-full flex items-center justify-center text-white transition-all group-hover:scale-110 shadow-xl shadow-blue-500/20 relative">
                      <AnimatePresence mode="wait">
                        {status === 'loading' ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0, rotate: -180 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 180 }}
                          >
                            <Loader2 className="w-6 h-6 animate-spin" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="idle"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 40 }}
                            transition={{ duration: 0.3, ease: "backOut" }}
                          >
                            <ArrowRight className="w-6 h-6" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Radial Pulse Effect */}
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1.4, opacity: 0.15 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                        className="absolute inset-0 bg-aureole-blue rounded-full -z-10"
                      />
                    </div>
                    <div className="text-left">
                      <div className="text-[9px] font-black text-slate-500 tracking-[0.2em] mb-1">
                        {status === 'loading' ? 'Processing' : 'Review'}
                      </div>
                      <div className="text-[12px] font-black text-[#001529] tracking-[0.3em]">
                        {status === 'loading' ? 'Submitting...' : 'Send Message'}
                      </div>
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurUnitsContact;
