import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductImage from '@/components/ProductImage';

// Product pictures on a soft circle.
//  - 1 picture: centred, floating gently, with a slowly turning ring
//  - 2 or more: coverflow viewer. The active picture is in the middle, its neighbours tilt on each side.
//    Click a side picture, use the arrows or the switch, drag/swipe, scroll sideways or press the arrow keys.
//    Exactly 3 pictures are treated as [front, left, right] and shown as left | front | right.

interface Props {
    images: string[];
    name: string;
    captions?: string[];
}

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

const CoverflowStage: React.FC<Props> = ({ images, name, captions }) => {
    const n = images.length;
    const isTrio = n === 3;
    // Order of pictures around the ring, and which one starts in the middle.
    const order = isTrio ? [1, 0, 2] : images.map((_, i) => i);
    const start = isTrio ? 1 : 0;
    const labels = isTrio ? ['Left', 'Front', 'Right'] : order.map((i) => (captions?.[i] || `View ${i + 1}`).replace(/ view$/i, ''));
    const usePills = n <= 4;

    const [active, setActive] = useState(start);
    const prevActive = useRef(start);
    const dragX = useRef<number | null>(null);
    const dragged = useRef(false);
    const lastWheel = useRef(0);

    useEffect(() => { prevActive.current = active; });

    const go = (to: number) => setActive(((to % n) + n) % n);
    // Signed distance of ring position r from the active one: 0 = middle, -1 = left slot, 1 = right slot, beyond = hidden.
    const dist = (r: number, a: number) => { const d = (((r - a) % n) + n) % n; return d > n / 2 ? d - n : d; };

    const styleFor = (r: number): React.CSSProperties => {
        const d = clamp(dist(r, active), -2, 2);
        const jumped = Math.abs(d - clamp(dist(r, prevActive.current), -2, 2)) >= 2; // wrapping round the ring: fade instead of flying across the middle
        const hidden = Math.abs(d) === 2;
        const side = Math.sign(d);
        const transform = d === 0
            ? 'translate3d(0,0,0) scale(1) rotateY(0deg)'
            : hidden
                ? `translate3d(${side * 110}%,3%,0) scale(0.45) rotateY(${side * -30}deg)`
                : `translate3d(${side * 74}%,3%,0) scale(0.66) rotateY(${side * -26}deg)`;
        return {
            transform,
            opacity: d === 0 ? 1 : hidden ? 0 : 0.92,
            zIndex: d === 0 ? 30 : hidden ? 10 : 40,
            pointerEvents: hidden ? 'none' : undefined,
            transition: jumped ? 'none' : 'transform 850ms cubic-bezier(0.22,1,0.36,1), opacity 600ms ease',
            animation: jumped && !hidden ? 'stageIn 700ms ease-out' : undefined,
            transformOrigin: '50% 100%',
        };
    };

    const caption = captions?.[order[active]];

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
                    style={{ transform: `translate(-50%,-50%) rotate(${active * (360 / n)}deg)`, transition: 'transform 1100ms cubic-bezier(0.22,1,0.36,1)' }}
                />

                {order.map((imgIndex, r) => {
                    const isCenter = dist(r, active) === 0;
                    const label = labels[r];
                    return (
                        <div
                            key={imgIndex}
                            role="button"
                            tabIndex={isCenter ? -1 : 0}
                            aria-label={isCenter ? `${name}, ${label} view` : `Show ${label.toLowerCase()} view`}
                            aria-current={isCenter}
                            onClick={() => { if (!isCenter && !dragged.current) go(r); }}
                            onKeyDown={(e) => { if (!isCenter && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); go(r); } }}
                            className={`absolute left-1/2 top-[6%] -ml-[25%] w-1/2 h-[80%] flex items-end justify-center will-change-transform motion-reduce:!transition-none motion-reduce:!animate-none ${isCenter ? '' : 'cursor-pointer hover:brightness-105'}`}
                            style={styleFor(r)}
                        >
                            <div aria-hidden="true" className="absolute -bottom-1 left-[8%] right-[8%] h-4 rounded-full bg-aureole-slate/20 blur-md" />
                            <img
                                src={encodeURI(images[imgIndex])}
                                alt=""
                                draggable={false}
                                loading={Math.abs(dist(r, start)) <= 1 ? 'eager' : 'lazy'}
                                fetchPriority={r === start ? 'high' : 'auto'}
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

            <div className="mt-6 flex flex-col items-center gap-3">
                {usePills ? (
                    // view switch with a sliding highlight
                    <div role="tablist" aria-label="Product views" className="relative grid w-72 max-w-full rounded-full border border-slate-200 bg-white p-1" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
                        <span
                            aria-hidden="true"
                            className="absolute top-1 bottom-1 left-1 rounded-full bg-gradient-to-r from-aureole-accent to-aureole-primary shadow"
                            style={{ width: `calc((100% - 0.5rem) / ${n})`, transform: `translateX(${active * 100}%)`, transition: 'transform 600ms cubic-bezier(0.22,1,0.36,1)' }}
                        />
                        {labels.map((l, i) => (
                            <button
                                key={l + i}
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
                ) : (
                    // many pictures: caption and dots
                    <>
                        <p className="text-[11px] font-bold tracking-widest uppercase text-slate-500 min-h-[1rem]">{caption}</p>
                        <div role="tablist" aria-label="Product views" className="flex gap-2 flex-wrap justify-center">
                            {labels.map((l, i) => (
                                <button
                                    key={l + i}
                                    type="button"
                                    role="tab"
                                    aria-selected={i === active}
                                    aria-label={l}
                                    onClick={() => go(i)}
                                    className={`h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${i === active ? 'w-8 bg-gradient-to-r from-aureole-accent to-aureole-primary' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const SingleStage: React.FC<{ src: string; name: string }> = ({ src, name }) => (
    <div className="w-full max-w-[560px] mx-auto">
        <div className="relative aspect-square">
            <div aria-hidden="true" className="absolute inset-[7%] rounded-full bg-gradient-to-b from-aureole-surface to-white shadow-[inset_0_0_80px_rgba(1,194,251,0.14)]" />
            <div aria-hidden="true" className="absolute inset-[3%] rounded-full border border-aureole-accent/30" />
            <div aria-hidden="true" className="absolute inset-0 rounded-full border border-dashed border-aureole-accent/40 animate-[spin_90s_linear_infinite] motion-reduce:animate-none" />
            <div className="absolute inset-0 flex items-center justify-center p-[9%] animate-float motion-reduce:animate-none">
                <div className="relative w-full h-full flex items-end justify-center">
                    <div aria-hidden="true" className="absolute -bottom-2 left-[12%] right-[12%] h-4 rounded-full bg-aureole-slate/20 blur-md" />
                    <img
                        src={encodeURI(src)}
                        alt={name}
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        className="relative w-full h-full object-contain [content-visibility:visible] drop-shadow-[0_24px_30px_rgba(0,21,41,0.22)]"
                    />
                </div>
            </div>
        </div>
    </div>
);

const ProductImageStage: React.FC<Props> = ({ images, name, captions }) => {
    if (!images || images.length === 0 || images[0] === 'PLACEHOLDER') {
        return <ProductImage src="PLACEHOLDER" alt={name} className="group" />;
    }
    if (images.length === 1) return <SingleStage src={images[0]} name={name} />;
    return <CoverflowStage images={images} name={name} captions={captions} />;
};

export default ProductImageStage;
