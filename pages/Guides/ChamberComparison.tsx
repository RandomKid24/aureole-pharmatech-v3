import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import DirectAnswers from '../../components/DirectAnswers';

// Every value comes from the product data files (data/products/stability/*) and public/content.md.
// Do not add specs, standards or claims that are not in those sources.

const COLUMNS = [
    { name: 'Stability Chamber', href: '/products/stability-chambers/' },
    { name: 'Humidity Chamber', href: '/products/humidity-chamber/' },
    { name: 'BOD Incubator', href: '/products/bod-incubator/' },
];

const ROWS: { label: string; cells: [string, string, string] }[] = [
    { label: 'Temperature range', cells: ['20°C to 60°C', '20°C to 60°C', '10°C to 60°C'] },
    { label: 'Humidity range', cells: ['40% to 95% RH', '40% to 95% RH', 'Not specified (temperature only)'] },
    { label: 'Accuracy', cells: ['± 0.3°C / ± 2.0% RH', '± 0.3°C / ± 2.0% RH', '± 0.5°C'] },
    { label: 'Uniformity', cells: ['± 1.0°C / ± 3.0% RH', '± 1.0°C / ± 3.0% RH', '± 2.5°C'] },
    {
        label: 'Described for',
        cells: [
            'Long-term stability studies of pharmaceutical products and substances',
            'Temperature and humidity testing across industries, including pharmaceuticals, electronics and medical devices',
            'Precise temperature control for tissue culture growth tests, storage of bacterial cultures and incubation',
        ],
    },
    { label: '21 CFR Part 11 support', cells: ['Add-on option', 'Add-on option', 'Add-on option'] },
];

const CHOOSE: { need: string; pick: string; href: string }[] = [
    { need: 'Long-term pharmaceutical stability studies with controlled temperature and humidity', pick: 'Stability Chamber', href: '/products/stability-chambers/' },
    { need: 'Testing products against temperature and humidity conditions across industries', pick: 'Humidity Chamber', href: '/products/humidity-chamber/' },
    { need: 'Controlled temperature only, for example incubating cultures (10°C to 60°C)', pick: 'BOD Incubator', href: '/products/bod-incubator/' },
    { need: 'Large-scale storage or testing, room-sized', pick: 'Walk In Humidity Chamber', href: '/products/walk-in-humidity-chamber/' },
    { need: 'Large-scale incubation, room-sized', pick: 'Walk In BOD Incubator', href: '/products/walk-in-bod-incubator/' },
    { need: 'Light exposure studies (designed per ICH Q1B)', pick: 'Photostability Chamber', href: '/products/photostability-chamber/' },
    { need: 'Cold storage at 2°C to 8°C', pick: 'Cold Chamber', href: '/products/cold-chamber/' },
];

const ChamberComparison: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="pt-28 lg:pt-36 pb-20 bg-transparent">
            <SEO />
            <div className="container mx-auto px-6 lg:px-24 max-w-5xl">
                <nav className="text-xs font-bold tracking-wider text-slate-400 mb-8 flex flex-wrap gap-2">
                    <Link to="/" className="hover:text-aureole-blue">Home</Link><span>/</span>
                    <Link to="/products/stability-chambers" className="hover:text-aureole-blue">Stability chambers</Link><span>/</span>
                    <span className="text-aureole-slate">Comparison guide</span>
                </nav>

                <h1 className="text-4xl lg:text-6xl font-black font-heading tracking-tighter text-aureole-slate leading-tight">
                    Stability Chamber vs Humidity Chamber vs <span className="gt">BOD Incubator</span>
                </h1>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl">
                    Which chamber do you need for stability testing, humidity testing or incubation? This guide compares three Aureole chambers using the specifications on their product pages. Made in Nashik, India, and exported to 15+ countries.
                </p>

                <div className="mt-12 overflow-x-auto border border-slate-200 bg-white">
                    <table className="w-full min-w-[640px] text-left text-sm">
                        <caption className="sr-only">Comparison of the Stability Chamber, Humidity Chamber and BOD Incubator</caption>
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th scope="col" className="p-4 text-xs font-black tracking-widest uppercase text-slate-400"> </th>
                                {COLUMNS.map((c) => (
                                    <th key={c.name} scope="col" className="p-4 text-base font-black font-heading text-aureole-slate">
                                        <Link to={c.href} className="hover:text-aureole-blue hover:underline underline-offset-4">{c.name}</Link>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {ROWS.map((r) => (
                                <tr key={r.label} className="border-b border-slate-100 last:border-0 align-top">
                                    <th scope="row" className="p-4 text-xs font-bold tracking-wider text-slate-500 w-40">{r.label}</th>
                                    {r.cells.map((c, i) => <td key={i} className="p-4 text-slate-800 font-medium leading-snug">{c}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                    The Humidity Chamber is listed as suitable for 25°C & 60% RH, 30°C & 65% RH, 40°C & 75% RH and 30°C & 75% RH, and is also available with low conditions of 25°C & 40% RH, 40°C & 25% RH and 30°C & 35% RH.
                </p>

                <section className="mt-16">
                    <h2 className="text-2xl lg:text-3xl font-black font-heading tracking-tight text-aureole-slate">What is the real difference?</h2>
                    <div className="mt-4 space-y-4 text-slate-600 leading-relaxed max-w-3xl">
                        <p>On our product pages the Stability Chamber and the Humidity Chamber list the same ranges, accuracy and uniformity. The difference is how each is described: the Stability Chamber is built around long-term stability studies of pharmaceutical products, while the Humidity Chamber is described for temperature and humidity testing across several industries.</p>
                        <p>The BOD Incubator is the temperature-only option. It reaches lower temperatures (from 10°C) but lists no humidity range, so choose a Stability Chamber or Humidity Chamber when you need controlled humidity.</p>
                    </div>
                </section>

                <section className="mt-16">
                    <h2 className="text-2xl lg:text-3xl font-black font-heading tracking-tight text-aureole-slate">Which one do I need?</h2>
                    <ul className="mt-6 border-t border-slate-200">
                        {CHOOSE.map((c) => (
                            <li key={c.pick} className="py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <span className="text-slate-600 sm:max-w-xl">{c.need}</span>
                                <Link to={c.href} className="font-bold text-aureole-blue hover:underline underline-offset-4 shrink-0">{c.pick} →</Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mt-16 max-w-3xl">
                    <h2 className="text-2xl lg:text-3xl font-black font-heading tracking-tight text-aureole-slate">Monitoring and Part 11</h2>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        21 CFR Part 11 support is an add-on option on all three chambers. Aureole monitoring software supports Part 11 requirements through access controls, electronic signatures and audit trails. Whether an installation meets Part 11 also depends on how the customer validates and operates it.{' '}
                        <Link to="/software" className="text-aureole-blue font-semibold hover:underline">Monitoring software →</Link>
                    </p>
                </section>
            </div>

            <DirectAnswers />

            <div className="container mx-auto px-6 lg:px-24 max-w-5xl mt-4">
                <div className="border border-slate-200 bg-white p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-lg font-bold font-heading text-aureole-slate">Not sure which one fits your study? Tell us your conditions and capacity.</p>
                    <a href="tel:+918600522240" className="btn-g inline-flex items-center justify-center px-8 py-4 text-[10px] font-black uppercase tracking-widest shrink-0">Call +91 86005 22240</a>
                </div>
            </div>
        </div>
    );
};

export default ChamberComparison;
