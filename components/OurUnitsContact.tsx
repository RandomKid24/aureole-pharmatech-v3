import React from 'react';
import { MapPin, ArrowRight, ChevronDown, Activity } from 'lucide-react';

const OurUnitsContact: React.FC = () => {
  return (
    <section id="contact" className="py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          <div className="lg:col-span-12 xl:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-aureole-blue"></span>
              <h2 className="text-[12px] font-black uppercase tracking-[0.4em] text-aureole-blue">LOCATION</h2>
            </div>
            <h3 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#001529] leading-[0.85] tracking-tighter uppercase mb-12">
              OUR <br /> <span className="text-aureole-blue">UNITS.</span>
            </h3>

            <div className="w-full h-[400px] sm:h-[500px] rounded-sm overflow-hidden border border-slate-100 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
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

          <div className="lg:col-span-12 xl:col-span-7 bg-[#F8FAFC] shadow-2xl rounded-3xl sm:rounded-[50px] p-6 sm:p-10 lg:p-14 border border-slate-200 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 mb-10 border-b border-slate-200 pb-10">
                <div>
                  <h4 className="text-[10px] font-black text-aureole-blue uppercase tracking-widest mb-2">Email</h4>
                  <a href="mailto:enquiry@aureolepharmatech.com" className="text-lg font-black text-[#001529] hover:text-aureole-cyan transition-colors break-all sm:break-normal">enquiry@aureolepharmatech.com</a>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-aureole-blue uppercase tracking-widest mb-2">Phone</h4>
                  <a href="tel:+918600522240" className="text-lg font-black text-[#001529] hover:text-aureole-cyan transition-colors">+91 86005 22240</a>
                </div>
              </div>

              <h4 className="text-3xl font-black text-[#001529] mb-3 uppercase tracking-tighter">CONTACT <span className="text-aureole-blue">US.</span></h4>
              <p className="text-slate-500 text-[10px] font-bold mb-10 tracking-widest">Request a technical consultation.</p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Name</label>
                    <input type="text" placeholder="FULL NAME" className="w-full bg-transparent border-b-2 border-slate-300 py-2 text-[11px] font-black uppercase tracking-widest text-[#001529] focus:outline-none focus:border-aureole-cyan transition-all" />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Email</label>
                    <input type="email" placeholder="OFFICIAL EMAIL" className="w-full bg-transparent border-b-2 border-slate-300 py-2 text-[11px] font-black uppercase tracking-widest text-[#001529] focus:outline-none focus:border-aureole-cyan transition-all" />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Product</label>
                  <select className="w-full bg-transparent border-b-2 border-slate-300 py-2 text-[11px] font-black uppercase tracking-widest text-[#001529] appearance-none focus:outline-none focus:border-aureole-cyan transition-all cursor-pointer">
                    <option>SELECT CATEGORY</option>
                    <option>STABILITY CHAMBERS</option>
                    <option>PHOTOSTABILITY</option>
                    <option>COLD ROOMS</option>
                  </select>
                  <ChevronDown className="absolute right-0 bottom-2 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>

                <div className="relative">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Message</label>
                  <textarea rows={3} placeholder="DESCRIBE YOUR REQUIREMENTS..." className="w-full bg-transparent border-b-2 border-slate-300 py-2 text-[11px] font-black uppercase tracking-widest text-[#001529] focus:outline-none focus:border-aureole-cyan transition-all resize-none"></textarea>
                </div>

                <button className="flex items-center gap-6 group mt-6">
                  <div className="w-16 h-16 bg-aureole-blue rounded-full flex items-center justify-center text-white transition-all group-hover:scale-110 shadow-xl shadow-blue-500/20">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">REVIEW</div>
                    <div className="text-[12px] font-black text-[#001529] uppercase tracking-[0.3em]">SEND MESSAGE</div>
                  </div>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurUnitsContact;
