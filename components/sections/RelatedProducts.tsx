import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage';
import { relatedSection } from '../../data/relatedProducts';

// Links to other products so visitors (and crawlers) can move between related pages.
interface Props { productName: string; includeSelf?: boolean }

const RelatedProducts: React.FC<Props> = ({ productName, includeSelf }) => {
    const all = relatedSection(productName, { includeSelf });
    const links = all.filter((l) => l.image);      // product cards
    const guides = all.filter((l) => !l.image);    // text links such as the comparison guide
    if (all.length === 0) return null;

    return (
        <section className="py-16 border-t border-slate-200/50" aria-labelledby="related-products">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="flex items-center gap-3 mb-8">
                    <span className="slant-mark" aria-hidden="true"></span>
                    <h2 id="related-products" className="text-xs font-black font-heading tracking-widest text-aureole-cyan uppercase">Related products</h2>
                </div>
                <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {links.map((l) => (
                        <li key={l.href}>
                            <Link to={l.href} className="group flex h-full flex-col border border-slate-200 bg-white hover:border-aureole-cyan transition-colors">
                                <span className="block aspect-[4/3] bg-aureole-surface p-3">
                                    <LazyImage src={l.image!} alt={l.label} className="w-full h-full object-contain" />
                                </span>
                                <span className="p-4 text-sm font-bold text-aureole-slate group-hover:text-aureole-blue transition-colors">
                                    {l.label} <span aria-hidden="true">→</span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                {guides.length > 0 && (
                    <p className="mt-6 text-sm">
                        {guides.map((g) => (
                            <Link key={g.href} to={g.href} className="font-bold text-aureole-blue hover:underline underline-offset-4">{g.label} →</Link>
                        ))}
                    </p>
                )}
            </div>
        </section>
    );
};

export default RelatedProducts;
