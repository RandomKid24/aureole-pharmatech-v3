import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Settings, Thermometer, Droplets, Target, Layers, Maximize, Zap, Gauge, FileCheck, HeartPulse, ChevronRight, Home, Clock, Waves, Cpu, Box, Package, Activity, Shield, Monitor, Wind, Network } from 'lucide-react';
import ProductImageStage from '@/components/ui/ProductImageStage';
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
                    if (cat.id === 'cleanroom') path = '/products/cleanroom-equipment';
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

    // Specs (Power Supply is shown in the models table). Up to 4 flank each side of the picture; any extras go in a grid below.
    const specs: { parameter: string; details: string }[] = (product.specifications || []).filter((x: any) => x.parameter !== 'Power Supply');
    const heroImages: string[] = product.images || (product.image ? [product.image] : ['PLACEHOLDER']);
    const hasImage = !product.hideHeroImage;
    const isTrio = hasImage && heroImages.length >= 2; // several pictures: wide coverflow viewer, specs in a grid below
    const perSide = Math.min(4, Math.ceil(specs.length / 2));
    const flank = hasImage && !isTrio; // specs beside a single picture
    const leftSpecs = flank ? specs.slice(0, perSide) : [];
    const rightSpecs = flank ? specs.slice(perSide, perSide * 2) : [];
    const restSpecs = flank ? specs.slice(perSide * 2) : specs;
    const hasDescription = typeof product.description === 'string' && product.description.trim().length > 80;

    const SpecItem: React.FC<{ spec: { parameter: string; details: string }; align: 'left' | 'right' }> = ({ spec, align }) => (
        <div className={`flex gap-3 ${align === 'right' ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
            <div className="shrink-0 mt-1 text-aureole-blue">
                {React.cloneElement(getSpecIcon(spec.parameter) as React.ReactElement, { size: 18 })}
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-slate-400 tracking-wider">{spec.parameter}</span>
                <span className="text-base text-slate-900 font-bold leading-snug tracking-tight">{spec.details}</span>
            </div>
        </div>
    );

    return (
        <section className="relative bg-transparent">
            <div className="container mx-auto px-6 lg:px-24 pt-12 lg:pt-16">
                <nav className="flex items-center gap-4 mb-8 flex-wrap">
                    <Link to="/" className="flex items-center gap-2.5 text-slate-400 hover:text-aureole-blue transition-all group">
                        <Home size={16} className="group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-bold tracking-wider">Home</span>
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <Link to="/products" className="text-slate-400 hover:text-aureole-blue transition-all text-xs font-bold tracking-wider">Products</Link>
                    {hierarchy && (
                        <>
                            <ChevronRight size={14} className="text-slate-300" />
                            <Link to={hierarchy.path} className="text-slate-400 hover:text-aureole-blue transition-all text-xs font-bold tracking-wider line-clamp-1 capitalize">
                                {hierarchy.category.toLowerCase()}
                            </Link>
                            {!isRedundantSubtype && (
                                <>
                                    <ChevronRight size={14} className="text-slate-300" />
                                    <span className="text-aureole-blue text-xs font-black tracking-wider line-clamp-1">{hierarchy.subType}</span>
                                </>
                            )}
                        </>
                    )}
                    <ChevronRight size={14} className="text-slate-300" />
                    <span className="text-aureole-slate text-xs font-black tracking-wider line-clamp-1">{decodedName}</span>
                </nav>

                <div className="flex flex-col items-center text-center gap-4 mb-10 lg:mb-6">
                    <div className="flex items-center gap-4">
                        <span className="slant-mark" aria-hidden="true"></span>
                        <h2 className="text-xs font-black font-heading tracking-widest text-aureole-cyan">Product Overview</h2>
                    </div>
                    <h1 className="text-4xl lg:text-7xl font-black font-heading text-aureole-slate tracking-tighter leading-none">
                        {decodedName.split(' ').slice(0, -1).join(' ')} <span className="gt">{decodedName.split(' ').slice(-1)}</span>
                    </h1>
                </div>

                {isTrio && (
                    <ProductImageStage images={heroImages} name={decodedName} captions={product.imageCaptions} />
                )}
                {flank && (
                    <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-8 items-center">
                        <div className="order-2 lg:order-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                            {leftSpecs.map((sp, i) => <SpecItem key={i} spec={sp} align="right" />)}
                        </div>
                        <div className="order-1 lg:order-2 lg:col-span-6">
                            <ProductImageStage images={heroImages} name={decodedName} captions={product.imageCaptions} />
                        </div>
                        <div className="order-3 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                            {rightSpecs.map((sp, i) => <SpecItem key={i} spec={sp} align="left" />)}
                        </div>
                    </div>
                )}

                {restSpecs.length > 0 && (
                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 ${hasImage ? 'mt-12 pt-10 border-t border-slate-100' : 'mt-2'}`}>
                        {restSpecs.map((sp, i) => <SpecItem key={i} spec={sp} align="left" />)}
                    </div>
                )}

                {(
                    <div className="max-w-3xl mx-auto text-center mt-14 mb-16 lg:mb-24 space-y-4">
                        {hasDescription && product.description.split(/\n+/).map((para: string, i: number) => (
                            <p key={i} className="text-slate-500 text-sm lg:text-base font-medium leading-relaxed">{para}</p>
                        ))}
                        <a href="#enquiry" className="inline-flex items-center gap-3 px-8 py-4 btn-g text-[10px] font-black uppercase tracking-widest mt-2">
                            Request a quote
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductHero;
