import React, { useEffect, useState } from 'react';
import { ProductDetail } from '@/data/products/types';

interface SSAccessoriesGridProps {
    product: ProductDetail;
}

const SSAccessoriesGrid: React.FC<SSAccessoriesGridProps> = ({ product }) => {
    // If no specific images array is present, we can't render the grid
    if (!product.images || !product.imageCaptions) return null;

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [product]);

    return (
        <section className="py-24 bg-transparent relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {product.images.map((imgSrc, idx) => {
                        const caption = product.imageCaptions?.[idx] || `Item ${idx + 1}`;
                        // Create a safe slug for linking/id
                        const itemId = `item-${idx + 1}`;

                        return (
                            <div
                                key={idx}
                                id={itemId}
                                className="group block scroll-mt-32"
                            >
                                <div className="space-y-6">
                                    <div className="relative aspect-[4/3] bg-slate-50/50 overflow-hidden transition-all duration-500 border border-slate-100 p-8 flex items-center justify-center rounded-sm">
                                        <img
                                            src={imgSrc}
                                            alt={caption}
                                            className="max-h-full max-w-full object-contain filter z-10 transition-transform duration-700 hover:scale-105"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/f8fafc/001529?text=' + encodeURIComponent(caption);
                                            }}
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-[#001529] border border-slate-100 shadow-sm z-20">
                                            ITEM 0{idx + 1}
                                        </div>
                                    </div>

                                    <div className="space-y-2 px-2">
                                        <h3 className="text-xl font-[950] text-aureole-slate uppercase tracking-tighter leading-tight">
                                            {caption}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SSAccessoriesGrid;
