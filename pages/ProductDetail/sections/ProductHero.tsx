
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductGallery from '@/components/ui/ProductGallery';
import ExpandableDescription from '@/components/ui/ExpandableDescription';

interface ProductHeroProps {
    product: any;
    decodedName: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({ product, decodedName }) => {
    return (
        <section className="relative border-b border-slate-100 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-24 py-12 lg:py-16">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-12">
                        <Link to="/products" className="inline-flex items-center gap-2 text-slate-300 hover:text-aureole-cyan transition-colors text-[9px] font-black uppercase tracking-[0.3em] mb-8">
                            <ArrowLeft size={10} strokeWidth={3} /> Return to Products
                        </Link>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-8 h-[2px] bg-aureole-cyan"></span>
                            <h2 className="text-[9px] font-black font-heading uppercase tracking-[0.5em] text-aureole-cyan">TECHNICAL SPECIFICATION</h2>
                        </div>

                        <h1 className="text-3xl lg:text-[60px] 3xl:text-[75px] font-[950] font-heading text-aureole-slate uppercase tracking-tighter leading-none mb-8">
                            {decodedName.split(' ').slice(0, -1).join(' ')} <span className="text-aureole-blue">{decodedName.split(' ').slice(-1)}</span>
                        </h1>

                        <div className="pt-6 border-t border-slate-50 max-w-2xl">
                            <h3 className="text-[10px] font-black font-heading uppercase tracking-[0.3em] text-aureole-slate mb-4 border-l-2 border-aureole-blue pl-3">Description</h3>
                            <ExpandableDescription text={product.description} />
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="relative bg-white border border-slate-50 p-4 shadow-xl">
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
