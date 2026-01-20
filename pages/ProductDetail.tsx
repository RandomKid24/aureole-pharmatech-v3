
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCT_DETAILS } from '../data/products';
import { findValuesBySlug } from '../utils/urlUtils';
import { ArrowLeft, CheckCircle2, Zap, Settings, Box, List, PlusCircle, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import LazyImage from '../components/LazyImage';
import ProductImage from '../components/ProductImage';

const ProductGallery: React.FC<{ images: string[], name: string, captions?: string[] }> = ({ images, name, captions }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Handle placeholder images
    if (!images || images.length === 0 || images[0] === 'PLACEHOLDER') {
        return (
            <ProductImage
                src="PLACEHOLDER"
                alt={name}
                className="group"
            />
        );
    }

    return (
        <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden bg-white border border-slate-100 group/hero cursor-zoom-in" onClick={() => setIsLightboxOpen(true)}>
                <LazyImage
                    src={images[activeIndex]}
                    alt={`${name} - ${activeIndex + 1}`}
                    className="w-full h-full object-contain transition-all duration-700 p-4"
                />

                <div className="absolute top-4 right-4 opacity-0 group-hover/hero:opacity-100 transition-opacity">
                    <div className="bg-white/90 backdrop-blur p-2 shadow-xl border border-slate-100">
                        <Maximize2 size={16} className="text-aureole-blue" />
                    </div>
                </div>

                {images.length > 1 && (
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 opacity-0 group-hover/hero:opacity-100 transition-opacity">
                        <button
                            onClick={(e) => { e.stopPropagation(); setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1)); }}
                            className="p-3 bg-white/90 border border-slate-200 text-aureole-blue hover:bg-white transition-colors shadow-lg"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0)); }}
                            className="p-3 bg-white/90 border border-slate-200 text-aureole-blue hover:bg-white transition-colors shadow-lg"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>

            {captions && captions[activeIndex] && (
                <div className="p-4 bg-slate-50 border-l-[3px] border-aureole-cyan">
                    <p className="text-[12px] font-medium text-slate-500 tracking-widest leading-relaxed uppercase">
                        {captions[activeIndex]}
                    </p>
                </div>
            )}

            {images.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`aspect-square border-2 transition-all p-1 bg-white ${activeIndex === i ? 'border-aureole-cyan' : 'border-transparent hover:border-slate-200'
                                }`}
                        >
                            <LazyImage
                                src={img}
                                alt={`${name} thumb ${i + 1}`}
                                className="w-full h-full object-contain"
                            />
                        </button>
                    ))}
                </div>
            )}

            {/* Lightbox Overlay */}
            {isLightboxOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 lg:p-12" onClick={() => setIsLightboxOpen(false)}>
                    <button className="absolute top-8 right-8 text-white hover:text-aureole-cyan transition-colors z-[110]">
                        <X size={32} />
                    </button>

                    <div className="relative w-full h-full flex items-center justify-center">
                        <button
                            onClick={(e) => { e.stopPropagation(); setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1)); }}
                            className="absolute left-0 p-4 bg-white/5 hover:bg-white/10 text-white transition-all z-10"
                        >
                            <ChevronLeft size={48} />
                        </button>

                        <LazyImage
                            src={images[activeIndex]}
                            className="max-w-full max-h-[80vh] object-contain shadow-2xl animate-in zoom-in duration-500 p-4 bg-white"
                            alt={name}
                        />

                        <button
                            onClick={(e) => { e.stopPropagation(); setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0)); }}
                            className="absolute right-0 p-4 bg-white/5 hover:bg-white/10 text-white transition-all z-10"
                        >
                            <ChevronRight size={48} />
                        </button>
                    </div>

                    <div className="absolute bottom-8 left-0 w-full text-center">
                        <span className="text-white font-black uppercase tracking-widest text-[10px]">
                            {name} — Image {activeIndex + 1} / {images.length}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

const ProductDetail: React.FC = () => {
    const { productName } = useParams<{ productName: string }>();
    const { product, originalName } = findValuesBySlug(productName || '', PRODUCT_DETAILS);
    const decodedName = originalName;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [decodedName]);

    if (!product) {
        return (
            <div className="pt-40 min-h-screen bg-white container mx-auto px-6 lg:px-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-[950] text-[#001529] uppercase tracking-tighter mb-8 uppercase">Specification Pending.</h1>
                    <Link to="/products" className="inline-flex items-center gap-4 px-10 py-5 bg-[#001529] text-white text-[10px] font-black uppercase tracking-widest hover:bg-aureole-blue transition-all">
                        <ArrowLeft size={16} /> Back to Catalog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-white selection:bg-aureole-blue selection:text-white">
            {/* Hero Section */}
            <section className="relative border-b border-slate-100 bg-white overflow-hidden">
                <div className="container mx-auto px-6 lg:px-24 py-16 lg:py-20">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                        <div className="lg:col-span-12">
                            <Link to="/products" className="inline-flex items-center gap-2 text-slate-300 hover:text-aureole-cyan transition-colors text-[10px] font-black uppercase tracking-[0.3em] mb-12">
                                <ArrowLeft size={12} strokeWidth={3} /> Return to Products
                            </Link>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-10 h-[2px] bg-aureole-cyan"></span>
                                <h2 className="text-[10px] font-black font-heading uppercase tracking-[0.5em] text-aureole-cyan">TECHNICAL SPECIFICATION</h2>
                            </div>

                            <h1 className="text-4xl lg:text-[75px] 3xl:text-[90px] font-[950] font-heading text-aureole-slate uppercase tracking-tighter leading-none mb-10">
                                {decodedName.split(' ').slice(0, -1).join(' ')} <span className="text-aureole-blue">{decodedName.split(' ').slice(-1)}</span>
                            </h1>

                            <div className="pt-8 border-t border-slate-50">
                                <h3 className="text-[11px] font-black font-heading uppercase tracking-[0.4em] text-aureole-slate mb-6">Description</h3>
                                <div className="max-w-4xl">
                                    <p className="text-[15px] font-medium text-slate-500 leading-relaxed text-left tracking-tight">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative">
                            <div className="relative bg-white border border-slate-100 p-6 shadow-2xl shadow-slate-200/50">
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

            {/* Technical Data & Features */}
            {(product.specifications.length > 0 || product.keyFeatures.length > 0 || (product.regularAttributes && product.regularAttributes.length > 0) || (product.addOnsAttributes && product.addOnsAttributes.length > 0)) && (
                <section className="bg-aureole-soft border-b border-slate-100">
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Specifications */}
                        {product.specifications.length > 0 && (
                            <div className="bg-white p-12 lg:p-20 border-r border-b border-slate-200">
                                <div className="flex items-center gap-4 mb-12">
                                    <Settings className="text-aureole-blue" size={20} />
                                    <h3 className="text-[12px] font-black font-heading uppercase tracking-[0.4em] text-aureole-slate">Specifications</h3>
                                </div>

                                <div className="grid gap-px bg-slate-200 border border-slate-200 shadow-sm overflow-hidden rounded-sm">
                                    {product.specifications.map((spec, i) => (
                                        <div key={i} className="grid grid-cols-12 bg-white transition-colors">
                                            <div className="col-span-12 sm:col-span-5 p-6 border-b sm:border-b-0 sm:border-r border-slate-100 bg-slate-50/50">
                                                <span className="text-[11px] font-black text-aureole-slate uppercase tracking-widest">{spec.parameter}</span>
                                            </div>
                                            <div className="col-span-12 sm:col-span-7 p-6">
                                                <span className="text-[13px] text-slate-600 font-bold uppercase tracking-tight leading-relaxed">{spec.details}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Key Features */}
                        {product.keyFeatures.length > 0 && (
                            <div className="bg-slate-50/30 p-12 lg:p-20 border-b border-slate-200">
                                <div className="flex items-center gap-4 mb-12">
                                    <Zap className="text-aureole-cyan" size={20} />
                                    <h3 className="text-[12px] font-black font-heading uppercase tracking-[0.4em] text-aureole-slate">{product.keyFeaturesHeading || "Key Features"}</h3>
                                </div>
                                <div className="space-y-8">
                                    {product.keyFeatures.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-5 group">
                                            <div className="w-2 h-2 rounded-full bg-aureole-cyan mt-2 group-hover:scale-125 transition-transform flex-shrink-0"></div>
                                            <span className="text-[14px] font-bold text-aureole-slate uppercase tracking-tight leading-snug">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Regular Attributes */}
                        {product.regularAttributes && product.regularAttributes.length > 0 && (
                            <div className={`bg-white p-12 lg:p-20 border-r border-slate-200 ${!(product.addOnsAttributes && product.addOnsAttributes.length > 0) ? 'lg:col-span-2' : ''}`}>
                                <div className="flex items-center gap-4 mb-12">
                                    <List className="text-aureole-blue" size={20} />
                                    <h3 className="text-[12px] font-black font-heading uppercase tracking-[0.4em] text-aureole-slate">{product.regularAttributesHeading || "Regular Attributes"}</h3>
                                </div>
                                <div className={`grid ${!(product.addOnsAttributes && product.addOnsAttributes.length > 0) ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-x-12 gap-y-6`}>
                                    {product.regularAttributes.map((attr, i) => (
                                        <div key={i} className="text-[12px] font-bold text-slate-500 uppercase tracking-widest flex items-start gap-4 group">
                                            <div className="w-1.5 h-1.5 bg-aureole-blue/30 mt-1.5 flex-shrink-0 group-hover:bg-aureole-blue transition-colors"></div>
                                            <span className="leading-relaxed">{attr}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Add-ons Attributes */}
                        {product.addOnsAttributes && product.addOnsAttributes.length > 0 && (
                            <div className={`bg-slate-50/30 p-12 lg:p-20 ${!(product.regularAttributes && product.regularAttributes.length > 0) ? 'lg:col-span-2' : ''}`}>
                                <div className="flex items-center gap-4 mb-12">
                                    <PlusCircle className="text-aureole-cyan" size={20} />
                                    <h3 className="text-[12px] font-black font-heading uppercase tracking-[0.4em] text-aureole-slate">Add-on Options</h3>
                                </div>
                                <div className={`grid ${!(product.regularAttributes && product.regularAttributes.length > 0) ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-x-12 gap-y-6`}>
                                    {product.addOnsAttributes.map((attr, i) => (
                                        <div key={i} className="text-[12px] font-bold text-slate-500 uppercase tracking-widest flex items-start gap-4 group">
                                            <div className="w-1.5 h-1.5 bg-aureole-cyan/30 mt-1.5 flex-shrink-0 group-hover:bg-aureole-cyan transition-colors"></div>
                                            <span className="leading-relaxed">{attr}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Models and Dimensions */}
            {product.models && product.models.length > 0 && (
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-24">
                        <div className="flex items-center gap-4 mb-16">
                            <Box className="text-aureole-blue" size={18} />
                            <h3 className="text-[11px] font-black font-heading uppercase tracking-[0.4em] text-aureole-slate">Models & Dimensions</h3>
                        </div>

                        <div className="overflow-x-auto border-[3px] border-aureole-slate shadow-2xl">
                            <table className="w-full text-left min-w-[800px]">
                                <thead>
                                    <tr className="bg-slate-50 text-aureole-slate border-b border-slate-200">
                                        <th className="py-7 px-8 text-[12px] font-black uppercase tracking-[0.2em] border-r border-slate-200">Model</th>
                                        <th className="py-7 px-8 text-[12px] font-black uppercase tracking-[0.2em] border-r border-slate-200">Capacity (L)</th>
                                        <th className="py-7 px-8 text-[12px] font-black uppercase tracking-[0.2em] border-r border-slate-200 text-center">Interior (W×D×H mm)</th>
                                        {product.models.some(m => m.exterior) && (
                                            <th className="py-7 px-8 text-[12px] font-black uppercase tracking-[0.2em] border-r border-slate-200 text-center">Exterior (W×D×H mm)</th>
                                        )}
                                        {product.models.some(m => m.trays) && (
                                            <th className="py-7 px-8 text-[12px] font-black uppercase tracking-[0.2em] border-r border-slate-200 text-center">Trays</th>
                                        )}
                                        <th className="py-7 px-8 text-[12px] font-black uppercase tracking-[0.2em] text-center">Power</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-slate-600">
                                    {product.models.map((m, i) => (
                                        <tr key={i} className="transition-colors group">
                                            <td className="py-6 px-8 text-[12px] font-[900] text-aureole-blue border-r border-slate-100 uppercase tracking-tight">{m.model}</td>
                                            <td className="py-6 px-8 text-[12px] font-bold border-r border-slate-100 text-center">{m.capacity}</td>
                                            <td className="py-6 px-8 text-[11px] font-bold border-r border-slate-100 text-center tracking-tight">{m.interior}</td>
                                            {product.models.some(model => model.exterior) && (
                                                <td className="py-6 px-8 text-[11px] font-bold border-r border-slate-100 text-center tracking-tight">{m.exterior || '-'}</td>
                                            )}
                                            {product.models.some(model => model.trays) && (
                                                <td className="py-6 px-8 text-[12px] font-bold border-r border-slate-100 text-center">{m.trays || '-'}</td>
                                            )}
                                            <td className="py-6 px-8 text-[11px] font-bold text-center uppercase tracking-tight">{m.power}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-12 p-10 bg-slate-50 border border-slate-100 border-l-[6px] border-aureole-cyan shadow-sm">
                            <p className="text-[12px] text-aureole-slate leading-relaxed font-bold uppercase tracking-widest">
                                <span className="text-aureole-cyan mr-4">REMARK:</span>
                                Above are standard sizes. Customised sizes are available.
                                <span className="block mt-2 text-[10px] text-slate-500 italic">V** = Variant based upon construction & body.</span>
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* Custom Variant Table */}
            {product.variantTable && (
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-24">
                        <div className="flex items-center gap-4 mb-16">
                            <Box className="text-aureole-blue" size={18} />
                            <h3 className="text-[11px] font-black font-heading uppercase tracking-[0.4em] text-aureole-slate">Technical Specifications & Models</h3>
                        </div>

                        <div className="overflow-x-auto border-[3px] border-aureole-slate shadow-2xl">
                            <table className="w-full text-left min-w-[800px]">
                                <thead>
                                    <tr className="bg-slate-50 text-aureole-slate border-b border-slate-200">
                                        {product.variantTable.headers.map((header, i) => (
                                            <th key={i} className={`py-7 px-8 text-[12px] font-black uppercase tracking-[0.2em] ${i < product.variantTable!.headers.length - 1 ? 'border-r border-slate-200' : ''} ${i === 0 ? '' : 'text-center'}`}>
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-slate-600">
                                    {product.variantTable.rows.map((row, i) => (
                                        <tr key={i} className="transition-colors group">
                                            {row.map((cell, j) => {
                                                const isLastCell = j === row.length - 1;
                                                const colSpan = isLastCell && row.length < product.variantTable!.headers.length
                                                    ? product.variantTable!.headers.length - j
                                                    : 1;

                                                return (
                                                    <td
                                                        key={j}
                                                        colSpan={colSpan}
                                                        className={`py-6 px-8 text-[12px] ${j === 0 ? 'font-[900] text-aureole-blue bg-slate-50/50' : 'font-bold text-center'} ${!isLastCell ? 'border-r border-slate-100' : ''} uppercase tracking-tight`}
                                                    >
                                                        {cell}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-12 p-10 bg-slate-50 border border-slate-100 border-l-[6px] border-aureole-cyan shadow-sm">
                            <p className="text-[12px] text-aureole-slate leading-relaxed font-bold uppercase tracking-widest">
                                <span className="text-aureole-cyan mr-4">REMARK:</span>
                                {product.variantTable.remark || "Available in variable sizes (2 Ltr. to 22 Ltr.)"}
                            </p>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProductDetail;
