import React from 'react';
import { CheckCircle2, Box, Settings, ArrowRight } from 'lucide-react';

interface VariantSectionsProps {
    product: any;
}

const VariantSections: React.FC<VariantSectionsProps> = ({ product }) => {
    if (!product.variants || product.variants.length === 0) return null;

    return (
        <section className="py-12 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="space-y-32">
                    {product.variants.map((variant: any, idx: number) => (
                        <div
                            key={idx}
                            className={`flex flex-col ${variant.image && !variant.isLogo ? (idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row') : ''} gap-12 lg:gap-20 items-start relative`}
                        >
                            {/* Image Side - Only for actual product images */}
                            {variant.image && !variant.isLogo && (
                                <div className="w-full lg:w-5/12 sticky top-32">
                                    <div className="relative aspect-[4/3] bg-slate-50 border border-slate-100 p-8 flex items-center justify-center rounded-sm overflow-hidden group">
                                        <img
                                            src={variant.image}
                                            alt={variant.name}
                                            className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-700 group-hover:scale-105 z-10"
                                        />
                                        {/* Decorative Rank */}
                                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-aureole-blue border border-slate-100 shadow-sm z-20">
                                            VARIANT 0{idx + 1}
                                        </div>
                                        <div className="absolute -bottom-10 -right-10 opacity-[0.03] select-none pointer-events-none transform rotate-12">
                                            <span className="text-[120px] font-black text-aureole-slate uppercase tracking-tighter leading-none">
                                                {variant.name.split(' ').pop()}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Quick Specs Mini-Grid */}
                                    {variant.specifications && (
                                        <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 mt-6 shadow-sm overflow-hidden rounded-sm">
                                            {variant.specifications.map((spec: any, sIdx: number) => (
                                                <div key={sIdx} className="bg-white p-4 flex flex-col gap-1">
                                                    <span className="text-[8px] font-black tracking-widest text-slate-400">{spec.parameter}</span>
                                                    <span className="text-[10px] font-bold text-aureole-slate truncate">{spec.details}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Content Side */}
                            <div className={`w-full ${(variant.image && !variant.isLogo) ? 'lg:w-7/12' : 'lg:w-full'} space-y-10 relative`}>
                                {/* Certification Watermark for Logos */}
                                {variant.isLogo && (
                                    <div className="absolute top-0 right-0 opacity-100 pointer-events-none select-none z-0">
                                        <img
                                            src={variant.image}
                                            alt="Certification"
                                            className="h-48 w-auto object-contain"
                                        />
                                    </div>
                                )}
                                <div className="relative z-10 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-[2px] bg-aureole-cyan" />
                                        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-aureole-cyan">Professional Model</span>
                                    </div>
                                    <h2 className="text-4xl lg:text-5xl font-[950] text-[#001529] uppercase tracking-tighter leading-[0.9] pt-2">
                                        {variant.name}
                                    </h2>
                                    <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-3xl">
                                        {variant.description}
                                    </p>
                                </div>

                                {/* Features List */}
                                {variant.features && (
                                    <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 py-10 border-y border-slate-100">
                                        {variant.features.map((feature: string, fIdx: number) => (
                                            <div key={fIdx} className="flex items-center gap-4 group/f">
                                                <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover/f:bg-aureole-cyan/10 transition-colors">
                                                    <CheckCircle2 size={12} className="text-aureole-cyan" />
                                                </div>
                                                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 group-hover/f:text-aureole-slate transition-colors">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Specific Table */}
                                {variant.table && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <Settings size={16} className="text-aureole-blue" />
                                            <h4 className="text-[12px] font-black uppercase tracking-widest text-slate-900">Technical Parameters</h4>
                                        </div>
                                        <div className="border border-slate-200 overflow-hidden rounded-sm shadow-sm group/table hover:shadow-md transition-shadow duration-500">
                                            <table className="w-full text-left border-collapse">
                                                <tbody className="divide-y divide-slate-100">
                                                    {variant.table.rows.map((row: any, rIdx: number) => (
                                                        <tr key={rIdx} className={`${rIdx === 0 ? 'bg-slate-50/80' : 'hover:bg-slate-50/50 transition-colors'}`}>
                                                            {row.cells.map((cell: any, cIdx: number) => (
                                                                <td
                                                                    key={cIdx}
                                                                    className={`py-4 px-6 text-[11px] font-bold ${rIdx === 0 ? 'text-aureole-blue uppercase tracking-widest' : 'text-slate-700'}`}
                                                                >
                                                                    {cell.content}
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                <div className="mt-8">
                                    <button className="px-12 py-5 bg-[#001529] text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-aureole-blue transition-all shadow-xl shadow-slate-200 inline-flex items-center gap-3 rounded-sm group">
                                        Request Model Quote
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VariantSections;
