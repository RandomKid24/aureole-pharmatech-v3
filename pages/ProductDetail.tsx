
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCT_DETAILS } from '../data/products';
import { findValuesBySlug } from '../utils/urlUtils';
import { ArrowLeft, CheckCircle2, Zap, Settings, Box, List, PlusCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductGallery: React.FC<{ images: string[], name: string, captions?: string[] }> = ({ images, name, captions }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!images || images.length === 0 || images[0] === 'PLACEHOLDER') {
        return (
            <div className="aspect-square bg-slate-50 flex flex-col items-center justify-center border border-slate-100 p-12 text-center group">
                <div className="text-6xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110">
                    🔬
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-aureole-slate mb-2">IMAGE ARRIVING SOON</h3>
                <p className="text-[14px] font-[950] text-[#001529] uppercase tracking-tighter leading-none">
                    {name}
                </p>
                <div className="mt-8 w-12 h-[2px] bg-aureole-cyan/30 group-hover:w-24 transition-all duration-700"></div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden bg-slate-50 border border-slate-100">
                <img
                    src={images[activeIndex]}
                    alt={`${name} - ${activeIndex + 1}`}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-700"
                />

                {images.length > 1 && (
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                            className="p-2 bg-white/80 border border-slate-200 text-aureole-blue hover:bg-white transition-colors"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={() => setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                            className="p-2 bg-white/80 border border-slate-200 text-aureole-blue hover:bg-white transition-colors"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                )}
            </div>

            {captions && captions[activeIndex] && (
                <div className="mt-4 p-5 bg-slate-950 border-l-[3px] border-aureole-cyan shadow-xl">
                    <p className="text-[11px] font-bold text-white tracking-widest leading-relaxed uppercase">
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
                            <img src={img} alt={`${name} thumb ${i + 1}`} className="w-full h-full object-contain grayscale" />
                        </button>
                    ))}
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
                    <h1 className="text-4xl font-[950] text-[#001529] uppercase tracking-tighter mb-8">Specification Pending.</h1>
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
                                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-cyan">TECHNICAL SPECIFICATION</h2>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-[950] text-[#001529] uppercase tracking-tighter leading-none mb-10">
                                {decodedName}
                            </h1>

                            <div className="pt-8 border-t border-slate-50">
                                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-slate mb-6">Description</h3>
                                <div className="max-w-4xl">
                                    <p className="text-[14px] font-medium text-slate-500 leading-relaxed text-left">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative group">
                            <div className="absolute inset-0 bg-aureole-cyan/5 -rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                            <div className="relative bg-white border border-slate-100 p-4 shadow-2xl shadow-slate-200/50">
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
            {(product.specifications.length > 0 || product.keyFeatures.length > 0) && (
                <section className="bg-white border-b border-slate-100">
                    <div className="grid lg:grid-cols-12 gap-0">
                        {/* Left Panel: Specifications */}
                        {product.specifications.length > 0 && (
                            <div className={`${product.keyFeatures.length > 0 ? 'lg:col-span-7' : 'lg:col-span-12'} bg-slate-50/50 p-12 lg:p-20 border-r border-slate-200`}>
                                <div className="flex items-center gap-4 mb-12">
                                    <Settings className="text-aureole-blue" size={18} />
                                    <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-slate">Specifications</h3>
                                </div>

                                <div className="grid gap-px bg-slate-800 border border-slate-800 shadow-sm">
                                    {product.specifications.map((spec, i) => (
                                        <div key={i} className="grid grid-cols-12 bg-white">
                                            <div className="col-span-12 sm:col-span-5 p-5 border-b sm:border-b-0 sm:border-r border-slate-800 bg-slate-50/50">
                                                <span className="text-[11px] font-black text-aureole-slate uppercase tracking-wider">{spec.parameter}</span>
                                            </div>
                                            <div className="col-span-12 sm:col-span-7 p-5">
                                                <span className="text-[12px] text-slate-600 font-medium leading-relaxed">{spec.details}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Right Panel: Key Features */}
                        {(product.keyFeatures.length > 0 || (product.regularAttributes && product.regularAttributes.length > 0) || (product.addOnsAttributes && product.addOnsAttributes.length > 0)) && (
                            <div className={`${product.specifications.length > 0 ? 'lg:col-span-5' : 'lg:col-span-12'} p-12 lg:p-20 flex flex-col justify-between`}>
                                <div>
                                    {product.keyFeatures.length > 0 && (
                                        <>
                                            <div className="flex items-center gap-4 mb-12">
                                                <Zap className="text-aureole-cyan" size={18} />
                                                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-slate">Key Features</h3>
                                            </div>
                                            <div className="space-y-4 mb-20">
                                                {product.keyFeatures.map((feature, i) => (
                                                    <div key={i} className="flex items-start gap-4">
                                                        <CheckCircle2 className="w-4 h-4 text-aureole-cyan mt-0.5 flex-shrink-0" />
                                                        <span className="text-[13px] font-medium text-slate-600">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Hierarchical Attributes */}
                                <div className="space-y-12">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                                        {product.regularAttributes && product.regularAttributes.length > 0 && (
                                            <div>
                                                <div className="flex items-center gap-3 mb-6">
                                                    <List className="text-aureole-blue" size={16} />
                                                    <h4 className="text-[11px] font-black text-aureole-slate uppercase tracking-widest">Regular Attributes</h4>
                                                </div>
                                                <div className="space-y-4">
                                                    {product.regularAttributes.map((attr, i) => (
                                                        <div key={i} className="text-[12px] text-slate-500 flex items-start gap-3">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-aureole-cyan mt-1.5 flex-shrink-0"></div>
                                                            <span className="leading-snug">{attr}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {product.addOnsAttributes && product.addOnsAttributes.length > 0 && (
                                            <div>
                                                <div className="flex items-center gap-3 mb-6">
                                                    <PlusCircle className="text-aureole-cyan" size={16} />
                                                    <h4 className="text-[11px] font-black text-aureole-slate uppercase tracking-widest">Add-ons Attributes</h4>
                                                </div>
                                                <div className="space-y-4">
                                                    {product.addOnsAttributes.map((attr, i) => (
                                                        <div key={i} className="text-[12px] text-slate-500 flex items-start gap-3">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-aureole-cyan mt-1.5 flex-shrink-0"></div>
                                                            <span className="leading-snug">{attr}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
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
                            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-slate">Models & Dimensions</h3>
                        </div>

                        <div className="overflow-x-auto border-2 border-slate-900 shadow-md">
                            <table className="w-full text-left min-w-[800px]">
                                <thead>
                                    <tr className="bg-[#001529] text-white">
                                        <th className="py-6 px-6 text-[11px] font-black uppercase tracking-widest border-r border-white/20">Model</th>
                                        <th className="py-6 px-6 text-[11px] font-black uppercase tracking-widest border-r border-white/20">Capacity (L)</th>
                                        <th className="py-6 px-6 text-[11px] font-black uppercase tracking-widest border-r border-white/20">Interior (W×D×H mm)</th>
                                        <th className="py-6 px-6 text-[11px] font-black uppercase tracking-widest border-r border-white/20">Exterior (W×D×H mm)</th>
                                        <th className="py-6 px-6 text-[11px] font-black uppercase tracking-widest border-r border-white/20">No. of Trays</th>
                                        <th className="py-6 px-6 text-[11px] font-black uppercase tracking-widest">Power Supply</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800 text-slate-600">
                                    {product.models.map((m, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="py-6 px-6 text-[12px] font-bold text-aureole-blue border-r border-slate-800">{m.model}</td>
                                            <td className="py-6 px-6 text-[12px] border-r border-slate-800">{m.capacity}</td>
                                            <td className="py-6 px-6 text-[12px] border-r border-slate-800">{m.interior}</td>
                                            <td className="py-6 px-6 text-[12px] border-r border-slate-800">{m.exterior}</td>
                                            <td className="py-6 px-6 text-[12px] border-r border-slate-800">{m.trays}</td>
                                            <td className="py-6 px-6 text-[12px]">{m.power}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-12 p-8 bg-slate-50 border-l-[4px] border-aureole-cyan">
                            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                                <span className="font-black text-aureole-slate mr-4 uppercase tracking-widest">Note:</span>
                                Above are standard sizes. Customised sizes are available. <br />
                                V** = variant based upon construction & body.
                            </p>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProductDetail;
