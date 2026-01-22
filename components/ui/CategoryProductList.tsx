
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, ArrowRight } from 'lucide-react';
import { slugify } from '@/utils/urlUtils';

interface CategoryProductListProps {
    subTypes: {
        name: string;
        products: string[];
    }[];
}

const CategoryProductList: React.FC<CategoryProductListProps> = ({ subTypes }) => {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="max-w-4xl mb-20 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                        <span className="w-12 h-[2px] bg-aureole-blue"></span>
                        <h2 className="text-[12px] font-black uppercase tracking-[0.4em] text-aureole-blue">PRODUCT CATALOG</h2>
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none mb-6">
                        AVAILABLE <span className="text-aureole-cyan">Models.</span>
                    </h2>
                    <p className="text-slate-500 font-medium text-lg">Select a model below to see full technical specifications and features.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-x-20 gap-y-16">
                    {subTypes.map((sub, sIdx) => (
                        <div key={sIdx} className="space-y-8">
                            <div className="flex items-center gap-4 pb-4 border-b-2 border-slate-100">
                                <h3 className="text-2xl font-black font-heading text-[#001529] uppercase tracking-tight">
                                    {sub.name}
                                </h3>
                                <span className="bg-slate-100 text-slate-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{sub.products.length} Items</span>
                            </div>

                            <div className="grid gap-3">
                                {sub.products.map((pName, pIdx) => (
                                    <Link
                                        key={pIdx}
                                        to={`/products/${slugify(pName)}`}
                                        className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-slate-50 hover:bg-white border border-transparent hover:border-aureole-cyan/40 hover:shadow-xl transition-all duration-300 rounded-px"
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-aureole-blue shadow-sm group-hover:bg-aureole-cyan group-hover:text-white transition-all duration-300">
                                                <Box size={18} />
                                            </div>
                                            <div>
                                                <span className="text-[16px] font-extrabold text-[#001529] uppercase tracking-tight block group-hover:text-aureole-cyan transition-colors">
                                                    {pName}
                                                </span>
                                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mt-0.5 group-hover:text-slate-500 transition-colors">Click to view details</span>
                                            </div>
                                        </div>
                                        <div className="mt-4 sm:mt-0 flex items-center gap-3 text-aureole-blue group-hover:text-aureole-cyan transition-colors">
                                            <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">View Product</span>
                                            <div className="w-10 h-10 flex items-center justify-center bg-white sm:bg-transparent border border-slate-100 sm:border-0 rounded-full">
                                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryProductList;
