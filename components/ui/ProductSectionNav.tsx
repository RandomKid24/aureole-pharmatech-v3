import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Sticky bar under the product hero. Lists only the sections that exist on the page, highlights the one in view,
// and scrolls to a section smoothly (instant for people who prefer reduced motion).

const SECTIONS: [string, string][] = [
    ['overview', 'Overview'],
    ['features', 'Features'],
    ['inside', 'Inside the chamber'],
    ['sizes', 'Models & sizes'],
    ['enquiry', 'Enquiry'],
];

const ProductSectionNav: React.FC = () => {
    const { pathname } = useLocation();
    const [items, setItems] = useState<[string, string][]>([]);
    const [active, setActive] = useState('overview');

    // Which sections exist depends on the product, so look after the page has rendered.
    useEffect(() => {
        setActive('overview');
        const t = window.setTimeout(() => setItems(SECTIONS.filter(([id]) => document.getElementById(id))), 400);
        return () => window.clearTimeout(t);
    }, [pathname]);

    // Highlight the section that crosses the upper part of the screen.
    useEffect(() => {
        if (items.length === 0) return;
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: '-30% 0px -60% 0px' },
        );
        items.forEach(([id]) => { const el = document.getElementById(id); if (el) obs.observe(el); });
        return () => obs.disconnect();
    }, [items]);

    if (items.length < 3) return null;

    const go = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    };

    return (
        <nav aria-label="Page sections" className="sticky top-[76px] z-30 bg-white/90 backdrop-blur border-y border-slate-100">
            <div className="container mx-auto px-6 lg:px-24">
                <ul className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide -mx-2">
                    {items.map(([id, label]) => (
                        <li key={id} className="shrink-0">
                            <a
                                href={`#${id}`}
                                onClick={go(id)}
                                aria-current={active === id ? 'true' : undefined}
                                className={`relative block px-4 py-4 text-[11px] font-black tracking-widest uppercase transition-colors duration-300 motion-reduce:transition-none ${active === id ? 'text-aureole-slate' : 'text-slate-400 hover:text-aureole-blue'}`}
                            >
                                {label}
                                <span
                                    aria-hidden="true"
                                    className={`absolute left-4 right-4 bottom-0 h-[2px] bg-gradient-to-r from-aureole-accent to-aureole-primary origin-left transition-transform duration-500 motion-reduce:transition-none ${active === id ? 'scale-x-100' : 'scale-x-0'}`}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default ProductSectionNav;
