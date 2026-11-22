import React from 'react';

// Product types (e.g. "Constant Water Bath", "Eco Series") as pills. The picture on the circle changes with the chosen type.

export interface ProductType { name: string; image: string }

interface Props {
    types: ProductType[];
    active: number;
    onSelect: (i: number) => void;
    productName: string;
}

const ProductTypeStage: React.FC<Props> = ({ types, active, onSelect, productName }) => {
    const current = types[active];
    const onKey = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowRight') onSelect((active + 1) % types.length);
        if (e.key === 'ArrowLeft') onSelect((active - 1 + types.length) % types.length);
    };

    return (
        <div className="w-full max-w-[560px] mx-auto">
            <div className="relative aspect-square">
                <div aria-hidden="true" className="absolute inset-[7%] rounded-full bg-gradient-to-b from-aureole-surface to-white shadow-[inset_0_0_80px_rgba(1,194,251,0.14)]" />
                <div aria-hidden="true" className="absolute inset-[3%] rounded-full border border-aureole-accent/30" />
                <div aria-hidden="true" className="absolute inset-0 rounded-full border border-dashed border-aureole-accent/40 motion-reduce:!transition-none" style={{ transform: `rotate(${active * 72}deg)`, transition: 'transform 1100ms cubic-bezier(0.22,1,0.36,1)' }} />
                {/* keyed by type so every change replays the entrance */}
                <div
                    key={current.name}
                    className="absolute inset-0 flex items-center justify-center p-[11%] motion-reduce:!animate-none"
                    style={{ animation: 'typeIn 550ms cubic-bezier(0.22,1,0.36,1)' }}
                >
                    <div className="relative w-full h-full flex items-end justify-center">
                        <div aria-hidden="true" className="absolute -bottom-2 left-[12%] right-[12%] h-4 rounded-full bg-aureole-slate/20 blur-md" />
                        <img
                            src={encodeURI(current.image)}
                            alt={`${productName} - ${current.name}`}
                            loading="eager"
                            decoding="async"
                            className="relative w-full h-full object-contain [content-visibility:visible] drop-shadow-[0_24px_30px_rgba(0,21,41,0.22)]"
                        />
                    </div>
                </div>
            </div>

            <div role="tablist" aria-label={`${productName} types`} onKeyDown={onKey} className="mt-6 flex flex-wrap justify-center gap-2">
                {types.map((t, i) => (
                    <button
                        key={t.name}
                        type="button"
                        role="tab"
                        aria-selected={i === active}
                        tabIndex={i === active ? 0 : -1}
                        onClick={() => onSelect(i)}
                        className={`px-5 py-2.5 rounded-full border text-[11px] font-black tracking-widest uppercase transition-all duration-300 motion-reduce:transition-none ${i === active
                            ? 'bg-gradient-to-r from-aureole-accent to-aureole-primary text-white border-transparent shadow-md'
                            : 'bg-white text-slate-500 border-slate-200 hover:border-aureole-cyan hover:text-aureole-slate'}`}
                    >
                        {t.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductTypeStage;
