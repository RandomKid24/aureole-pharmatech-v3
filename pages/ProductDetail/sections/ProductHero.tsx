import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Settings, Thermometer, Droplets, Target, Layers, Maximize, Zap, Gauge, FileCheck, HeartPulse, ChevronRight, Home, Clock, Waves, Cpu, Box, Package, Activity, Shield, Monitor, Wind, Network } from 'lucide-react';
import ProductGallery from '@/components/ui/ProductGallery';
import { PRODUCT_CATALOG } from '@/data/products/catalog';

interface ProductHeroProps {
    product: any;
    decodedName: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({ product, decodedName }) => {
    // Find hierarchy for breadcrumbs
    const hierarchy = (() => {
        const dName = decodedName.trim().toLowerCase();
        for (const cat of PRODUCT_CATALOG) {
            for (const sub of cat.subTypes) {
                if (sub.products.some(p => p.trim().toLowerCase() === dName || p.trim().toLowerCase() === dName.replace(/-/g, ' '))) {
                    let path = '/products';
                    if (cat.id === 'stability') path = '/products/stability-chambers';
                    if (cat.id === 'tabletop') path = '/products/table-top-instruments';
                    if (cat.id === 'furniture') path = '/products/laboratory-furniture';

                    return { category: cat.title, subType: sub.name, path };
                }
            }
        }
        return null;
    })();

    const isRedundantSubtype = hierarchy &&
        (hierarchy.subType.toLowerCase() === decodedName.toLowerCase() ||
            hierarchy.subType.toLowerCase().replace(/s$/, '') === decodedName.toLowerCase().replace(/s$/, ''));

    const getSpecIcon = (parameter: string) => {
        const p = parameter.toLowerCase();
        if (p.includes('temp')) return <Thermometer size={12} />;
        if (p.includes('humid')) return <Droplets size={12} />;
        if (p.includes('accuracy') || p.includes('resolu') || p.includes('precision')) return <Target size={12} />;
        if (p.includes('uniform')) return <Layers size={12} />;
        if (p.includes('volume') || p.includes('capacity') || p.includes('size')) return <Maximize size={12} />;
        if (p.includes('power') || p.includes('voltage') || p.includes('supply') || p.includes('heater')) return <Zap size={12} />;
        if (p.includes('control') || p.includes('sensor') || p.includes('regulation')) return <Gauge size={12} />;
        if (p.includes('compliance') || p.includes('standard')) return <FileCheck size={12} />;
        if (p.includes('safety') || p.includes('protect')) return <Shield size={12} />;
        if (p.includes('healthcare') || p.includes('hospital') || p.includes('medical')) return <HeartPulse size={12} />;

        // Material & Hardware
        if (p.includes('moc') || p.includes('tank') || p.includes('enclosure') || p.includes('inner') || p.includes('outer')) return <Box size={12} />;
        if (p.includes('lid')) return <Package size={12} />;

        // Ultrasonic Specific
        if (p.includes('transducer')) return <Activity size={12} />;
        if (p.includes('generator')) return <Cpu size={12} />;
        if (p.includes('timer')) return <Clock size={12} />;
        if (p.includes('cavitation')) return <Waves size={12} />;
        if (p.includes('accessories')) return <Package size={12} />;

        // Air Sampler Specific
        if (p.includes('display') || p.includes('screen') || p.includes('hmi')) return <Monitor size={12} />;
        if (p.includes('flowrate') || p.includes('flow rate') || p.includes('lpm')) return <Wind size={12} />;
        if (p.includes('weight')) return <Box size={12} />;
        if (p.includes('communication') || p.includes('wi-fi') || p.includes('connectivity')) return <Network size={12} />;
        if (p.includes('battery')) return <Zap size={12} />;

        return <Settings size={12} />;
    };

    return (
        <section className="relative bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-24 pt-12 lg:pt-16 pb-0">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    <div className={product.hideHeroImage ? "lg:col-span-12" : "lg:col-span-7"}>
                        <nav className="flex items-center gap-4 mb-6 flex-wrap">
                            <Link to="/" className="flex items-center gap-2.5 text-slate-400 hover:text-aureole-blue transition-all group">
                                <Home size={16} className="group-hover:scale-110 transition-transform" />
                                <span className="text-[13px] font-bold tracking-wider">Home</span>
                            </Link>

                            <ChevronRight size={14} className="text-slate-300" />

                            <Link to="/products" className="text-slate-400 hover:text-aureole-blue transition-all text-[13px] font-bold tracking-wider">
                                Products
                            </Link>

                            {hierarchy && (
                                <>
                                    <ChevronRight size={14} className="text-slate-300" />
                                    <Link to={hierarchy.path} className="text-slate-400 hover:text-aureole-blue transition-all text-[13px] font-bold tracking-wider line-clamp-1 capitalize">
                                        {hierarchy.category.toLowerCase()}
                                    </Link>

                                    {!isRedundantSubtype && (
                                        <>
                                            <ChevronRight size={14} className="text-slate-300" />
                                            <span className="text-aureole-blue text-[13px] font-black tracking-wider line-clamp-1">
                                                {hierarchy.subType}
                                            </span>
                                        </>
                                    )}
                                </>
                            )}

                            <ChevronRight size={14} className="text-slate-300" />
                            <span className="text-aureole-slate text-[13px] font-black tracking-wider line-clamp-1">
                                {decodedName}
                            </span>
                        </nav>
                    </div>

                    <div className={product.hideHeroImage ? "lg:col-span-12" : "lg:col-span-7"}>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-8 h-[2px] bg-aureole-cyan"></span>
                            <h2 className="text-[12px] font-black font-heading tracking-[0.2em] text-aureole-cyan">Product Overview</h2>
                        </div>

                        <h1 className="text-3xl lg:text-[60px] 3xl:text-[75px] font-[950] font-heading text-aureole-slate tracking-tighter leading-none mb-10">
                            {decodedName.split(' ').slice(0, -1).join(' ')} <span className="text-aureole-blue">{decodedName.split(' ').slice(-1)}</span>
                        </h1>

                        <div className={`pt-10 ${product.specifications && product.specifications.length > 0 ? 'border-t border-slate-100 mb-24' : ''}`}>
                            {product.specifications && product.specifications.length > 0 && (
                                <div className="space-y-10">
                                    <div className="flex items-center gap-3">
                                        <Settings size={20} className="text-aureole-blue" />
                                        <h3 className="text-[18px] font-[950] tracking-tight text-slate-900 leading-none">Technical Specification</h3>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                                        {product.specifications.filter((spec: any) => spec.parameter !== 'Power Supply').map((spec: any, i: number) => (
                                            <div key={i} className="flex gap-4 group">
                                                <div className="flex-shrink-0 mt-1 text-aureole-blue">
                                                    {React.cloneElement(getSpecIcon(spec.parameter) as React.ReactElement, { size: 18 })}
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{spec.parameter}</span>
                                                    <span className="text-[15px] text-slate-900 font-bold leading-snug tracking-tight">
                                                        {spec.details}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {!product.hideHeroImage && (
                        <div className="lg:col-span-5 lg:pl-6 relative">
                            <div className="relative bg-white border border-slate-50 p-4 shadow-xl max-w-md ml-auto">
                                <ProductGallery
                                    images={product.images || (product.image ? [product.image] : ['PLACEHOLDER'])}
                                    name={decodedName}
                                    captions={product.imageCaptions}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductHero;
