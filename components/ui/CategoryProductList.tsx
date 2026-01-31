
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { slugify } from '@/utils/urlUtils';

interface CategoryProductListProps {
    subTypes: {
        name: string;
        products: string[];
    }[];
}

const CategoryProductList: React.FC<CategoryProductListProps> = ({ subTypes }) => {
    return (
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="max-w-4xl mb-16 text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-[950] font-heading text-[#001529] tracking-tighter leading-none mb-4">
                        Available <span className="text-aureole-cyan">Models.</span>
                    </h2>
                    <p className="text-slate-500 font-medium text-[15px]">Select a model below to see full technical specifications and features.</p>
                </div>

                <div className="grid grid-cols-1 gap-y-20">
                    {subTypes.map((sub, sIdx) => (
                        <div key={sIdx} className="space-y-2">
                            <div className="flex items-center gap-4 pb-4 border-b-2 border-slate-100 mb-6 font-heading">
                                <h3 className="text-xl font-[1000] text-[#001529] uppercase tracking-tight">
                                    {sub.name}
                                </h3>
                                <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{sub.products.length} Units</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
                                {sub.products.map((pName, pIdx) => (
                                    <Link
                                        key={pIdx}
                                        to={`/products/${slugify(pName)}`}
                                        className="group flex items-center justify-between py-5 border-b border-slate-100 transition-all duration-300 px-1"
                                    >
                                        <div className="flex items-center gap-5">
                                            {/* Fixed Dot - No longer cut off */}
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-aureole-cyan group-hover:scale-125 transition-all duration-300 flex-shrink-0" />
                                            <span className="text-[15px] lg:text-[17px] font-bold text-[#001529] tracking-tight transition-colors group-hover:text-aureole-cyan">
                                                {pName}
                                            </span>
                                        </div>

                                        {/* Large Animated Arrow Only */}
                                        <div className="flex items-center justify-center transition-all duration-300">
                                            <ArrowUpRight
                                                size={24}
                                                className="text-slate-300 group-hover:text-aureole-cyan group-hover:scale-125 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"
                                            />
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
