
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductsContact: React.FC = () => {
    return (
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 lg:px-24 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="w-12 h-[1px] bg-aureole-blue"></span>
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-blue">CONNECT</h2>
                    </div>
                    <h3 className="text-4xl lg:text-7xl font-[950] font-heading text-aureole-slate uppercase tracking-tighter leading-tight mb-12">
                        A LEGACY OF <br /> <span className="text-aureole-cyan uppercase tracking-normal">ENGINEERING.</span>
                    </h3>

                    <Link
                        to="/about/plants"
                        className="group relative inline-flex items-center gap-6 px-14 py-5 bg-aureole-blue text-white overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-aureole-cyan/30"
                    >
                        <div className="absolute inset-0 w-0 bg-aureole-cyan transition-all duration-500 ease-out group-hover:w-full"></div>
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>

                        <div className="relative z-10 flex items-center gap-4">
                            <span className="text-[14px] font-[900] uppercase tracking-[0.4em] group-hover:tracking-[0.5em] transition-all duration-500">
                                CONTACT US
                            </span>
                            <div className="relative">
                                <ArrowRight size={20} className="transition-transform duration-500 group-hover:translate-x-2" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductsContact;
