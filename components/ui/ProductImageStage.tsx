import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductImage from '@/components/ProductImage';

// Product picture on a soft circle with a front / left / right switcher (arrows, dots, swipe).

interface Props {
    images: string[];
    name: string;
    captions?: string[];
}

const ProductImageStage: React.FC<Props> = ({ images, name, captions }) => {
    const [active, setActive] = useState(0);
    const touchX = useRef<number | null>(null);

    if (!images || images.length === 0 || images[0] === 'PLACEHOLDER') {
        return <ProductImage src="PLACEHOLDER" alt={name} className="group" />;
    }

    const count = images.length;
    const go = (to: number) => setActive((to + count) % count);
    const caption = captions?.[active];

    return (
        <div className="w-full max-w-[560px] mx-auto">
            <div
                className="relative aspect-square select-none"
                onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
                onTouchEnd={(e) => {
                    if (touchX.current === null || count < 2) return;
                    const dx = e.changedTouches[0].clientX - touchX.current;
                    if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
                    touchX.current = null;
                }}
            >
                {/* circle behind the product */}
                <div aria-hidden="true" className="absolute inset-[7%] rounded-full bg-gradient-to-b from-aureole-surface to-white shadow-[inset_0_0_80px_rgba(1,194,251,0.14)]" />
                <div aria-hidden="true" className="absolute inset-[3%] rounded-full border border-aureole-accent/30" />

                {images.map((src, i) => (
                    <div
                        key={src + i}
                        aria-hidden={i !== active}
                        className={`absolute inset-0 flex items-center justify-center p-[9%] transition-all duration-500 motion-reduce:transition-none ${i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                    >
                        <img
                            src={encodeURI(src)}
                            alt={i === active ? `${name}${caption ? ` - ${caption}` : ''}` : ''}
                            loading={i === 0 ? 'eager' : 'lazy'}
                            fetchPriority={i === 0 ? 'high' : 'auto'}
                            decoding="async"
                            className="w-full h-full object-contain drop-shadow-[0_24px_30px_rgba(0,21,41,0.22)]"
                        />
                    </div>
                ))}

                {count > 1 && (
                    <>
                        <button
                            type="button"
                            aria-label="Previous view"
                            onClick={() => go(active - 1)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-aureole-blue hover:border-aureole-cyan transition-colors z-10"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            type="button"
                            aria-label="Next view"
                            onClick={() => go(active + 1)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-aureole-blue hover:border-aureole-cyan transition-colors z-10"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </>
                )}
            </div>

            {(count > 1 || caption) && (
                <div className="mt-4 flex flex-col items-center gap-3">
                    {caption && <p className="text-[11px] font-bold tracking-widest uppercase text-slate-500">{caption}</p>}
                    {count > 1 && (
                        <div className="flex gap-2" role="tablist" aria-label="Product views">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    role="tab"
                                    aria-selected={i === active}
                                    aria-label={captions?.[i] || `View ${i + 1}`}
                                    onClick={() => setActive(i)}
                                    className={`h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${i === active ? 'w-8 bg-gradient-to-r from-aureole-accent to-aureole-primary' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductImageStage;
