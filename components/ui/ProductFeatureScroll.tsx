import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, PlusCircle } from 'lucide-react';
import { attributeIconUrl } from './attributeIcons';

// Standard equipment and add-ons as spec-sheet rows. Each group has a heading that stays pinned
// on desktop while its rows scroll past; rows fade in once as they enter the screen.
// The icons are small illustrations, so they are shown small and sharp (48px) rather than enlarged.

interface Props {
    product: any;
}

interface Group { label: string; kind: 'standard' | 'optional'; items: string[] }

const ProductFeatureScroll: React.FC<Props> = ({ product }) => {
    const groups = useMemo<Group[]>(() => {
        const all: Group[] = [
            { label: product.keyFeaturesHeading || 'Key Features', kind: 'standard', items: product.keyFeatures || [] },
            { label: product.regularAttributesHeading || 'Standard Equipment', kind: 'standard', items: product.regularAttributes || [] },
            { label: 'Optional Add-ons', kind: 'optional', items: product.addOnsAttributes || [] },
        ];
        return all.filter((g) => g.items.length > 0 && g.label !== 'Industries we serve');
    }, [product]);

    // Rows fade in the first time they are seen.
    const [seen, setSeen] = useState<Set<string>>(new Set());
    const rowRefs = useRef<Map<string, HTMLElement>>(new Map());

    useEffect(() => {
        setSeen(new Set());
        const obs = new IntersectionObserver(
            (entries) => {
                const fresh = entries.filter((e) => e.isIntersecting).map((e) => (e.target as HTMLElement).dataset.key!);
                if (fresh.length) setSeen((prev) => new Set([...prev, ...fresh]));
                entries.forEach((e) => e.isIntersecting && obs.unobserve(e.target));
            },
            { rootMargin: '0px 0px -8% 0px' },
        );
        rowRefs.current.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, [groups]);

    if (groups.length === 0) return null;

    return (
        <div className="space-y-16 lg:space-y-24">
            {groups.map((g, gi) => (
                <section key={g.label + gi} className="grid lg:grid-cols-12 gap-x-12 gap-y-6">
                    <div className="lg:col-span-3">
                        <div className="lg:sticky lg:top-28">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="slant-mark" aria-hidden="true"></span>
                                <h3 className="text-xs font-black tracking-widest text-aureole-cyan uppercase">{g.kind === 'optional' ? 'On request' : 'Included'}</h3>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-black font-heading tracking-tight text-aureole-slate leading-tight">{g.label}</h2>
                            <p className="mt-2 text-xs font-bold tracking-wider text-slate-400">{String(g.items.length).padStart(2, '0')} items</p>
                        </div>
                    </div>

                    <ul className="lg:col-span-9 grid sm:grid-cols-2 gap-x-12 border-t border-slate-200">
                        {g.items.map((item, i) => {
                            const key = `${gi}-${i}`;
                            const img = attributeIconUrl(item);
                            const is21 = item.toLowerCase().includes('21 cfr');
                            const text = <span className="text-sm lg:text-base font-bold text-aureole-slate leading-snug">{item}</span>;
                            return (
                                <li
                                    key={key}
                                    data-key={key}
                                    ref={(el) => { if (el) rowRefs.current.set(key, el); else rowRefs.current.delete(key); }}
                                    className={`flex items-center gap-4 py-4 border-b border-slate-200 transition-all duration-500 motion-reduce:transition-none ${seen.has(key) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 motion-reduce:opacity-100 motion-reduce:translate-y-0'}`}
                                >
                                    <span className="w-12 h-12 shrink-0 flex items-center justify-center bg-slate-50 border border-slate-100">
                                        {img
                                            ? <img src={img} alt="" width={48} height={48} loading="lazy" className="w-12 h-12 object-contain" />
                                            : g.kind === 'optional'
                                                ? <PlusCircle size={20} className="text-aureole-cyan" />
                                                : <CheckCircle2 size={20} className="text-aureole-blue" />}
                                    </span>
                                    <span className="flex-1">{is21 ? <Link to="/software" className="hover:underline underline-offset-4">{text}</Link> : text}</span>
                                    <span className="text-xs font-bold text-slate-300 tabular-nums">{g.kind === 'optional' ? '+' : String(i + 1).padStart(2, '0')}</span>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            ))}
        </div>
    );
};

export default ProductFeatureScroll;
