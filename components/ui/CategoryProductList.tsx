
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { slugify } from '@/utils/urlUtils';
import { PRODUCT_DETAILS } from '@/data/products';

// picture and one short fact per model: its temperature range, else its cleanliness or flow figure, else its types
const listInfo = (name: string) => {
    const d = PRODUCT_DETAILS[name];
    const image = d?.image || d?.images?.[0];
    const specs = d?.specifications ?? [];
    const temps = specs.filter((s) => /temp/i.test(s.parameter));
    if (temps.length) return { image, line: temps.map((s) => s.details).join(' / ') };
    const key = specs.find((s) => /cleanliness|flow rate/i.test(s.parameter));
    if (key) return { image, line: `${key.parameter}: ${key.details.split(' (')[0]}` };
    if (d?.variants?.length) return { image, line: d.variants.map((v) => v.name).join(' · ') };
    return { image, line: '' };
};

interface CategoryProductListProps {
    subTypes: {
        name: string;
        products: string[];
    }[];
}

const MODEL_LIST_CSS = `
.ml-row { position: relative; opacity: 0; }
.ml-grid.is-in .ml-row { animation: ml-in .55s cubic-bezier(.2,.7,.2,1) both; animation-delay: calc(var(--i) * 50ms); }
@keyframes ml-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; } }
.ml-row::after { content: ""; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px; background: #00a6d6; transform: scaleX(0); transform-origin: left; transition: transform .4s cubic-bezier(.2,.7,.2,1); }
.ml-row:hover::after, .ml-row:focus-visible::after { transform: scaleX(1); }
.ml-row:active { transform: scale(.995); }
.ml-thumb { transition: background-color .3s; }
.ml-thumb img { transition: transform .4s cubic-bezier(.2,.7,.2,1); }
.ml-row:hover .ml-thumb, .ml-row:focus-visible .ml-thumb { background-color: #e3f0fa; }
.ml-row:hover .ml-thumb img, .ml-row:focus-visible .ml-thumb img { transform: translateY(-3px) scale(1.07); }
.ml-name { transition: color .25s, transform .3s cubic-bezier(.2,.7,.2,1); }
.ml-row:hover .ml-name, .ml-row:focus-visible .ml-name { color: #0079ac; transform: translateX(3px); }
.ml-go { display: flex; align-items: center; gap: 8px; color: #cbd5e1; transition: color .25s; }
.ml-view { font: 800 11px/1 Manrope, sans-serif; letter-spacing: .16em; text-transform: uppercase; opacity: 0; transform: translateX(-6px); transition: opacity .25s, transform .3s cubic-bezier(.2,.7,.2,1); }
.ml-go svg { transition: transform .3s cubic-bezier(.2,.7,.2,1); }
.ml-row:hover .ml-go, .ml-row:focus-visible .ml-go { color: #0079ac; }
.ml-row:hover .ml-view, .ml-row:focus-visible .ml-view { opacity: 1; transform: none; }
.ml-row:hover .ml-go svg, .ml-row:focus-visible .ml-go svg { transform: translateX(4px); }
@media (hover: none) { .ml-view { display: none; } }
@media (max-width: 767px) { .ml-view { display: none; } }
@media (prefers-reduced-motion: reduce) {
  .ml-row, .ml-grid.is-in .ml-row { animation: none; opacity: 1; }
  .ml-row::after, .ml-thumb, .ml-thumb img, .ml-name, .ml-go, .ml-view, .ml-go svg { transition: none; }
  .ml-row:hover .ml-thumb img, .ml-row:hover .ml-name { transform: none; }
}
`;

// a list whose rows fade in once, the first time it is scrolled into view
const ModelGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [seen, setSeen] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === 'undefined') { setSeen(true); return; }
        const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.12 });
        io.observe(el);
        return () => io.disconnect();
    }, []);
    return <div ref={ref} className={`ml-grid grid grid-cols-1 md:grid-cols-2 md:gap-x-14 ${seen ? 'is-in' : ''}`}>{children}</div>;
};

const CategoryProductList: React.FC<CategoryProductListProps> = ({ subTypes }) => {
    return (
        <section className="py-20 bg-transparent border-t border-slate-100">
            <style>{MODEL_LIST_CSS}</style>
            <div className="container mx-auto px-6 lg:px-24">
                <div className="max-w-4xl mb-16 text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl font-black font-heading text-[#001529] tracking-tighter leading-none mb-4">
                        Available <span className="text-aureole-cyan">models.</span>
                    </h2>
                    <p className="text-slate-500 font-medium text-base">Select a model below to see full technical specifications and features.</p>
                </div>

                <div className="grid grid-cols-1 gap-y-20">
                    {subTypes.map((sub, sIdx) => (
                        <div key={sIdx} className="space-y-2">
                            <div className="flex items-center gap-4 pb-4 border-b-2 border-slate-100 mb-6 font-heading">
                                <h3 className="text-2xl lg:text-3xl font-bold text-[#001529] tracking-tight">
                                    {sub.name}
                                </h3>
                                <span className="text-slate-400 text-xs font-black uppercase tracking-widest">{sub.products.length} Units</span>
                            </div>

                                <ModelGrid>
                                    {sub.products.map((pName, i) => {
                                        const { image, line } = listInfo(pName);
                                        return (
                                            <Link
                                                key={pName}
                                                to={`/products/${slugify(pName)}`}
                                                style={{ '--i': i } as React.CSSProperties}
                                                className="ml-row group flex items-center gap-5 py-4 border-b border-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-aureole-blue focus-visible:outline-offset-4"
                                            >
                                                <span className="ml-thumb shrink-0 w-24 h-[72px] bg-aureole-surface flex items-center justify-center p-1.5 overflow-hidden">
                                                    {image && <img src={image} alt="" loading="lazy" className="max-w-full max-h-full object-contain" />}
                                                </span>
                                                <span className="min-w-0 flex-1">
                                                    <span className="ml-name block text-[17px] font-extrabold tracking-tight leading-snug text-[#001529]">{pName}</span>
                                                    {line && <span className="mt-1 block text-[13px] font-semibold text-slate-500 line-clamp-1">{line}</span>}
                                                </span>
                                                <span className="ml-go shrink-0">
                                                    <span className="ml-view">View</span>
                                                    <ArrowRight size={20} />
                                                </span>
                                            </Link>
                                        );
                                    })}
                                </ModelGrid>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryProductList;
