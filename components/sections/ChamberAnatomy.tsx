import React, { useEffect, useRef, useState } from 'react';

// Interactive isometric figure, built by anatomy/walk-in-stability-chamber/build.mjs into public/anatomy/.
// Inline, one figure at a time behind tabs; the frame grows to the visible figure so it never scrolls inside the page.
const TABS = ['Interior', 'Back'];

// one figure per product: humidity chambers carry steam boilers and %RH, cold chambers and BOD incubators are temperature only
const FIGURES = {
    humidity: { src: '/anatomy/walk-in-stability-chamber-light.html', title: 'Interactive anatomy of a walk-in humidity chamber' },
    cold: { src: '/anatomy/walk-in-cold-chamber-light.html', title: 'Interactive anatomy of a walk-in cold chamber' },
    bod: { src: '/anatomy/walk-in-bod-incubator-light.html', title: 'Interactive anatomy of a walk-in BOD incubator' },
};

const ChamberAnatomy: React.FC<{ variant?: keyof typeof FIGURES }> = ({ variant = 'humidity' }) => {
    const figure = FIGURES[variant];
    const [tab, setTab] = useState(0);
    const frame = useRef<HTMLIFrameElement>(null);

    const show = (n: number) => frame.current?.contentWindow?.postMessage({ fig: n }, window.location.origin);
    useEffect(() => { show(tab); }, [tab]);

    const fit = () => {
        const doc = frame.current?.contentDocument;
        if (!frame.current || !doc) return;
        const size = () => { if (frame.current) frame.current.style.height = `${doc.documentElement.scrollHeight}px`; };
        size();
        new ResizeObserver(size).observe(doc.body);
        show(tab);
    };

    return (
        <section className="bg-white border-t border-slate-100 my-12">
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-10">
                <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-black font-heading text-aureole-slate tracking-tighter leading-none mb-1 uppercase">
                            Inside the <span className="text-aureole-blue">Chamber</span>
                        </h2>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Interactive anatomy: pick a view, then hover any part</p>
                    </div>
                    <div className="flex gap-2" role="tablist">
                        {TABS.map((name, i) => (
                            <button
                                key={name}
                                type="button"
                                role="tab"
                                aria-selected={tab === i}
                                onClick={() => setTab(i)}
                                className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest border transition-colors ${tab === i ? 'bg-[#001529] text-white border-[#001529]' : 'text-slate-500 border-slate-200 hover:border-slate-400'}`}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                </div>
                <iframe
                    ref={frame}
                    src={`${figure.src}?embed`}
                    title={figure.title}
                    loading="lazy"
                    onLoad={fit}
                    className="w-full border-0 bg-white"
                    style={{ height: 720 }}
                />
                <p className="mt-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} Aureole Pharmatech. This illustration is the property of Aureole Pharmatech and may not be copied or reused without written permission.
                </p>
            </div>
        </section>
    );
};

export default ChamberAnatomy;
