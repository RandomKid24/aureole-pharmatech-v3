import React from 'react';
import {
    Settings, Thermometer, Droplets, Target, Layers,
    Maximize, Zap, Gauge, FileCheck
} from 'lucide-react';
import ProductTabs from '@/components/ui/ProductTabs';

interface TechnicalDashboardProps {
    product: any;
    decodedName: string;
}

const TechnicalDashboard: React.FC<TechnicalDashboardProps> = ({ product, decodedName }) => {
    const getSpecIcon = (parameter: string) => {
        const p = parameter.toLowerCase();
        if (p.includes('temp')) return <Thermometer size={14} />;
        if (p.includes('humid')) return <Droplets size={14} />;
        if (p.includes('accuracy') || p.includes('resolu')) return <Target size={14} />;
        if (p.includes('uniform')) return <Layers size={14} />;
        if (p.includes('volume') || p.includes('capacity') || p.includes('size')) return <Maximize size={14} />;
        if (p.includes('power') || p.includes('voltage') || p.includes('supply')) return <Zap size={14} />;
        if (p.includes('control') || p.includes('sensor')) return <Gauge size={14} />;
        if (p.includes('complian') || p.includes('standard')) return <FileCheck size={14} />;
        return <Settings size={14} />;
    };

    const hasAnySpecs = product.specifications.length > 0 ||
        product.keyFeatures.length > 0 ||
        (product.regularAttributes && product.regularAttributes.length > 0) ||
        (product.addOnsAttributes && product.addOnsAttributes.length > 0);

    if (!hasAnySpecs) return null;

    return (
        <section className="bg-white border-b border-slate-100 relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-[0.02] pointer-events-none select-none">
                <span className="text-[200px] font-black text-aureole-slate uppercase italic tracking-tighter leading-none block -translate-y-1/4 translate-x-1/4">TECH</span>
            </div>

            <div className="container mx-auto px-6 lg:px-24 py-16">
                <div className={`grid ${product.specifications.length > 0 ? 'lg:grid-cols-12 gap-12' : 'grid-cols-1 max-w-5xl mx-auto'}`}>
                    {product.specifications.length > 0 && (
                        <div className="lg:col-span-12 mb-12">
                            <div className="relative group">
                                <div className="bg-aureole-blue text-white py-6 px-10 flex items-center justify-between shadow-lg relative z-10 overflow-hidden">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/10 backdrop-blur-md rounded-full">
                                            <Settings size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-[14px] font-black uppercase tracking-[0.4em] leading-none mb-1">Technical Specification Sheet</h3>
                                            <p className="text-[10px] text-white/60 font-medium uppercase tracking-[0.2em]">{decodedName}</p>
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex flex-col items-end opacity-40">
                                        <span className="text-[9px] font-black uppercase tracking-[0.5em]">PRECISION SERIES</span>
                                        <span className="text-[9px] font-black uppercase tracking-[0.5em]">GEN-III SYSTEMS</span>
                                    </div>
                                    <div className="absolute right-0 top-0 w-24 h-24 bg-white/5 rotate-45 translate-x-12 -translate-y-12"></div>
                                </div>

                                <div className="bg-white border-x border-b border-slate-200 shadow-2xl relative z-0">
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0">
                                        {product.specifications.map((spec: any, i: number) => (
                                            <div key={i} className="group/item border-r border-b border-slate-100 hover:bg-slate-50 transition-all duration-300">
                                                <div className="p-8">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div className="text-aureole-cyan opacity-40 group-hover/item:opacity-100 transition-all group-hover/item:scale-110">
                                                            {getSpecIcon(spec.parameter)}
                                                        </div>
                                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{spec.parameter}</span>
                                                    </div>
                                                    <span className="text-[12px] text-aureole-slate font-[900] uppercase tracking-tight leading-relaxed block group-hover:text-aureole-blue transition-colors">
                                                        {spec.details}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className={product.specifications.length > 0 ? 'lg:col-span-12' : 'w-full'}>
                        <ProductTabs product={product} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalDashboard;
