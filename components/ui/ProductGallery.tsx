
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import ProductImage from '@/components/ProductImage';

interface ProductGalleryProps {
    images: string[];
    name: string;
    captions?: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, name, captions }) => {
    const [activeIndex, setActiveIndex] = useState(0);

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
            <div className="relative aspect-square overflow-hidden bg-white border border-slate-100 group/hero">
                <div className="w-full h-full p-4">
                    <LazyImage
                        src={images[activeIndex]}
                        alt={`${name} - ${activeIndex + 1}`}
                        className="w-full h-full object-contain transition-transform duration-500"
                    />
                </div>

                {images.length > 1 && (
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 opacity-0 group-hover/hero:opacity-100 transition-opacity z-20">
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
        </div>
    );
};

export default ProductGallery;
