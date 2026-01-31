
import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft, Settings, Thermometer, Droplets, Target, Layers,
    Maximize, Zap, Gauge, FileCheck, HeartPulse
} from 'lucide-react';
import ProductGallery from '@/components/ui/ProductGallery';

interface ProductHeroProps {
    product: any;
    decodedName: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({ product, decodedName }) => {
    const getSpecIcon = (parameter: string) => {
        const p = parameter.toLowerCase();
        if (p.includes('temp')) return <Thermometer size={12} />;
        if (p.includes('humid')) return <Droplets size={12} />;
        if (p.includes('accuracy') || p.includes('resolu')) return <Target size={12} />;
        if (p.includes('uniform')) return <Layers size={12} />;
        if (p.includes('volume') || p.includes('capacity') || p.includes('size')) return <Maximize size={12} />;
        if (p.includes('power') || p.includes('voltage') || p.includes('supply')) return <Zap size={12} />;
        if (p.includes('control') || p.includes('sensor')) return <Gauge size={12} />;
        if (p.includes('compliance') || p.includes('standard')) return <FileCheck size={12} />;
        if (p.includes('healthcare') || p.includes('hospital') || p.includes('medical')) return <HeartPulse size={12} />;
        return <Settings size={12} />;
    };

    return (
        <section className="relative bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-24 pt-12 lg:pt-16 pb-0">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-12">
                        <Link to="/products" className="inline-flex items-center gap-2 text-slate-300 hover:text-aureole-cyan transition-colors text-[9px] font-black uppercase tracking-[0.3em] mb-8">
                            <ArrowLeft size={10} strokeWidth={3} /> Return to Products
                        </Link>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-8 h-[2px] bg-aureole-cyan"></span>
                            <h2 className="text-[9px] font-black font-heading uppercase tracking-[0.5em] text-aureole-cyan">Product Overview</h2>
                        </div>

                        <h1 className="text-3xl lg:text-[60px] 3xl:text-[75px] font-[950] font-heading text-aureole-slate uppercase tracking-tighter leading-none mb-10">
                            {decodedName.split(' ').slice(0, -1).join(' ')} <span className="text-aureole-blue">{decodedName.split(' ').slice(-1)}</span>
                        </h1>

                        {product.specifications && product.specifications.length > 0 && (
                            <div className="pt-10 border-t border-slate-50">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-2 bg-slate-50 rounded-lg">
                                        <Settings size={16} className="text-aureole-blue" />
                                    </div>
                                    <h3 className="text-[13px] font-bold text-slate-900 leading-none">Technical Specification</h3>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                                    {product.specifications.map((spec: any, i: number) => (
                                        <div key={i} className="flex flex-col gap-1.5">
                                            <div className="flex items-center gap-2">
                                                <div className="text-aureole-cyan opacity-40">
                                                    {getSpecIcon(spec.parameter)}
                                                </div>
                                                <span className="text-[10px] font-bold text-slate-500">{spec.parameter}</span>
                                            </div>
                                            <span className="text-[13px] text-slate-900 font-bold leading-tight">
                                                {spec.details}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {product.keyFeaturesHeading === "Industries we serve" && product.keyFeatures && product.keyFeatures.length > 0 && (
                            <div className="pt-10 border-t border-slate-50">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-2 bg-aureole-blue/5 rounded-lg">
                                        <HeartPulse size={16} className="text-aureole-blue" />
                                    </div>
                                    <h3 className="text-[13px] font-bold text-slate-900 leading-none">Industries Secured</h3>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                                    {product.keyFeatures.map((industry: string, i: number) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-aureole-cyan opacity-40"></div>
                                            <span className="text-[12px] text-slate-900 font-bold leading-none">
                                                {industry}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-5 lg:pl-6 relative">
                        <div className="relative bg-white border border-slate-50 p-4 shadow-xl max-w-md ml-auto">
                            <ProductGallery
                                images={product.images || (product.image ? [product.image] : ['PLACEHOLDER'])}
                                name={decodedName}
                                captions={product.imageCaptions}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHero;
