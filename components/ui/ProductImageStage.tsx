import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductImage from '@/components/ProductImage';

// Product pictures on a soft circle.
//  - exactly 3 pictures (front, left, right): coverflow viewer (TrioStage): front in the middle, left and right views on each side;
//    click a side picture, use the arrows or pills, drag/swipe, scroll sideways or press the arrow keys to bring another view to the middle
//  - 1 picture: centred on the circle
//  - any other number: one at a time with arrows, dots and swipe

interface Props {
    images: string[];
    name: string;
    captions?: string[];
}


// ---- Coverflow viewer for [front, left, right] -------------------------------------------------
const TrioStage: React.FC<Props> = ({ images, name, captions }) => {
    // Ring order on screen: left, front, right. Start on the front picture.
    const ring = [1, 0, 2];
    const labels = ['Left', 'Front', 'Right'];
    const [active, setActive] = useState(1); // index into ring
    const prevActive = useRef(1);
    const dragX = useRef<number | null>(null);
    const dragged = useRef(false);
    const lastWheel = useRef(0);

    useEffect(() => { prevActive.current = active; });

    const go = (to: number) => setActive(((to % 3) + 3) % 3);
    // -1 = left slot, 0 = centre, 1 = right slot
    const slot = (r: number, a: number) => { const raw = (((r - a) % 3) + 3) % 3; return raw === 2 ? -1 : raw; };

    const styleFor = (r: number): React.CSSProperties => {
        const o = slot(r, active);
        const jumped = Math.abs(o - slot(r, prevActive.current)) === 2; // crossing from one side to the other: fade instead of flying through the middle
        const t = o === 0 ? 'translate3d(0,0,0) scale(1) rotateY(0deg)'
            : `translate3d(${o * 74}%,3%,0) scale(0.66) rotateY(${o * -26}deg)`;
        return {
            transform: t,
            opacity: o === 0 ? 1 : 0.92,
            zIndex: o === 0 ? 30 : 40,
            transition: jumped ? 'none' : 'transform 850ms cubic-bezier(0.22,1,0.36,1), opacity 600ms ease',
            animation: jumped ? 'stageIn 700ms ease-out' : undefined,
        };
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div
                className="relative aspect-[4/3] sm:aspect-[2/1] select-none touch-pan-y cursor-grab active:cursor-grabbing outline-none"
                style={{ perspective: '1600px' }}
                tabIndex={0}
                aria-roledescription="carousel"
                aria-label={`${name} views`}
                onKeyDown={(e) => { if (e.key === 'ArrowLeft') go(active - 1); if (e.key === 'ArrowRight') go(active + 1); }}
                onPointerDown={(e) => { dragX.current = e.clientX; dragged.current = false; }}
                onPointerUp={(e) => {
                    if (dragX.current === null) return;
                    const dx = e.clientX - dragX.current;
                    dragX.current = null;
                    if (Math.abs(dx) > 50) { dragged.current = true; go(active + (dx < 0 ? 1 : -1)); }
                }}
                onPointerLeave={() => { dragX.current = null; }}
                onWheel={(e) => {
                    if (Math.abs(e.deltaX) < 30 || Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
                    const now = Date.now();
                    if (now - lastWheel.current < 700) return;
                    lastWheel.current = now;
                    go(active + (e.deltaX > 0 ? 1 : -1));
                }}
            >
                {/* circle: solid ring + slowly turning dashed ring */}
                <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] aspect-square rounded-full border border-aureole-primary/40 bg-gradient-to-b from-aureole-surface/70 to-white" />
                <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-[90%] aspect-square rounded-full border border-dashed border-aureole-accent/40"
                    style={{ transform: `translate(-50%,-50%) rotate(${active * 120}deg)`, transition: 'transform 1100ms cubic-bezier(0.22,1,0.36,1)' }}
                />

                {ring.map((imgIndex, r) => {
                    const isCenter = slot(r, active) === 0;
                    return (
                        <div
                            key={imgIndex}
                            role="button"
                            tabIndex={isCenter ? -1 : 0}
                            aria-label={isCenter ? `${name}, ${labels[r]} view` : `Show ${labels[r].toLowerCase()} view`}
                            aria-current={isCenter}
                            onClick={() => { if (!isCenter && !dragged.current) go(r); }}
                            onKeyDown={(e) => { if (!isCenter && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); go(r); } }}
                            className={`absolute left-1/2 top-[6%] -ml-[25%] w-1/2 h-[80%] flex items-end justify-center will-change-transform motion-reduce:!transition-none motion-reduce:!animate-none ${isCenter ? '' : 'cursor-pointer hover:brightness-105'}`}
                            style={{ ...styleFor(r), transformOrigin: '50% 100%' }}
                        >
                            <div aria-hidden="true" className="absolute -bottom-1 left-[8%] right-[8%] h-4 rounded-full bg-aureole-slate/20 blur-md" />
                            <img
                                src={encodeURI(images[imgIndex])}
                                alt=""
                                draggable={false}
                                loading="eager"
                                fetchPriority={imgIndex === 0 ? 'high' : 'auto'}
                                decoding="async"
                                className="relative w-full h-full object-contain object-bottom [content-visibility:visible] drop-shadow-[0_20px_24px_rgba(0,21,41,0.22)]"
                            />
                        </div>
                    );
                })}

                <button
                    type="button"
                    aria-label="Previous view"
                    onClick={() => go(active - 1)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-aureole-blue hover:border-aureole-cyan hover:scale-105 transition-all"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    type="button"
                    aria-label="Next view"
                    onClick={() => go(active + 1)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-aureole-blue hover:border-aureole-cyan hover:scale-105 transition-all"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* view switcher with a sliding highlight */}
            <div className="mt-6 flex justify-center">
                <div role="tablist" aria-label="Product views" className="relative grid grid-cols-3 w-72 max-w-full rounded-full border border-slate-200 bg-white p-1">
                    <span
                        aria-hidden="true"
                        className="absolute top-1 bottom-1 left-1 w-[calc((100%-0.5rem)/3)] rounded-full bg-gradient-to-r from-aureole-accent to-aureole-primary shadow"
                        style={{ transform: `translateX(${active * 100}%)`, transition: 'transform 600ms cubic-bezier(0.22,1,0.36,1)' }}
                    />
                    {labels.map((l, i) => (
                        <button
                            key={l}
                            type="button"
                            role="tab"
                            aria-selected={i === active}
                            onClick={() => go(i)}
                            className={`relative z-10 py-2 text-[11px] font-black tracking-widest uppercase transition-colors duration-300 ${i === active ? 'text-white' : 'text-slate-500 hover:text-aureole-slate'}`}
                        >
                            {l}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProductImageStage: React.FC<Props> = ({ images, name, captions }) => {
    const [active, setActive] = useState(0);
    const touchX = useRef<number | null>(null);

    if (!images || images.length === 0 || images[0] === 'PLACEHOLDER') {
        return <ProductImage src="PLACEHOLDER" alt={name} className="group" />;
    }

    const count = images.length;

    if (count === 3) return <TrioStage images={images} name={name} captions={captions} />;

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
