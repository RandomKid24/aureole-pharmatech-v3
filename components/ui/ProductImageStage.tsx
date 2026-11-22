import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductImage from '@/components/ProductImage';

// Product pictures on a soft circle.
//  - exactly 3 pictures (front, left, right): shown together, front in the middle, left and right angles in front of it on each side
//  - 1 picture: centred on the circle
//  - any other number: one at a time with arrows, dots and swipe

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

    if (count === 3) {
        const [front, left, right] = images;
        const pic = (src: string, label: string, box: string, z: string, eager = true) => ( // all three sit above the fold, so load them right away
            <div className={`absolute bottom-[7%] flex items-end justify-center ${box} ${z}`}>
                <div aria-hidden="true" className="absolute -bottom-1 left-[8%] right-[8%] h-4 rounded-full bg-aureole-slate/15 blur-md" />
                <img
                    src={encodeURI(src)}
                    alt={`${name} - ${label}`}
                    loading={eager ? 'eager' : 'lazy'}
                    fetchPriority={eager ? 'high' : 'auto'}
                    decoding="async"
                    className="relative w-full h-full object-contain object-bottom [content-visibility:visible] drop-shadow-[0_18px_22px_rgba(0,21,41,0.2)]"
                />
            </div>
        );
        return (
            <div className="relative w-full max-w-5xl mx-auto aspect-[4/3] sm:aspect-[2/1]">
                <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] aspect-square rounded-full border border-aureole-primary/40 bg-gradient-to-b from-aureole-surface/70 to-white" />
                <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[90%] aspect-square rounded-full border border-aureole-accent/20" />
                {pic(left, 'left view', 'left-[3%] w-[33%] h-[56%]', 'z-30')}
                {pic(right, 'right view', 'right-[3%] w-[33%] h-[56%]', 'z-30')}
                {pic(front, 'front view', 'left-1/2 -translate-x-1/2 w-[46%] h-[76%]', 'z-20', true)}
            </div>
        );
    }
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
                            className="w-full h-full object-contain [content-visibility:visible] drop-shadow-[0_24px_30px_rgba(0,21,41,0.22)]"
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
