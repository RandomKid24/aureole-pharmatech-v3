
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Target, Box, Layers, MousePointer2 } from 'lucide-react';
import { slugify } from '../utils/urlUtils';
import { PRODUCT_CATALOG } from '../data/products';

const StabilityChambers: React.FC = () => {
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stabilityCategory = PRODUCT_CATALOG.find(cat => cat.id === 'stability');

    if (!stabilityCategory) return null;

    const navItems = [
        { title: "When", subtitle: "Applications", icon: <Clock size={18} /> },
        { title: "Why", subtitle: "Features & Benefits", icon: <Target size={18} /> },
        { title: "Where", subtitle: "Industries Served", icon: <Layers size={18} /> }
    ];

    const sections = [
        {
            items: [
                "During product stability studies for pharmaceuticals, cosmetics, food, and chemicals",
                "At formulation development stages to ensure product consistency over time",
                "During pre-approval studies for regulatory submissions (FDA, ICH, WHO compliance)",
                "When conducting accelerated, long-term, and intermediate stability testing",
                "During temperature & humidity stress testing for product robustness",
                "For ICH Zone-based testing (Zone I–IVb as per guidelines)",
                "Pre-clinical and clinical trial phases for regulatory compliance",
                "At scale-up and commercial batch release stages for QC testing",
                "During raw material stability testing before production",
                "When determining shelf-life, packaging compatibility, and storage conditions",
                "For accelerated stability testing to predict product lifespan in less time",
                "During photostability studies (with optional light testing feature)",
                "During post-marketing surveillance to monitor product performance",
                "For validating storage conditions for different markets globally",
                "After product reformulation to ensure consistency and compliance"
            ]
        },
        {
            items: [
                "Precise Temperature & Humidity Control with advanced sensors",
                "Energy-Efficient Technology – reduces power consumption significantly",
                "Uniform Airflow Design for consistent conditions throughout the chamber",
                "Compact & Modular Design to fit different lab spaces",
                "High-Quality Construction with corrosion-resistant materials",
                "Fully Compliant with ICH, WHO, GMP, MHRA and FDA standards",
                "High Reliability & Low Maintenance – designed for 24x7 operation",
                "User-Friendly Interface with advanced HMI/PLC control system",
                "Data Integrity & 21 CFR Part 11 Compliance",
                "Safety Features – Alarms for temperature/humidity deviations",
                "Remote Monitoring, Graphing & Data Logging Options",
                "Low Maintenance with Self-Diagnostic Features",
                "Eco-Friendly Refrigerants as per environmental guidelines",
                "Validation & Mapping Support (IQ, OQ, PQ documentation)",
                "Customizable Configurations – Walk-In and special purpose",
                "Long-Term Reliability designed for continuous operations",
                "Global Service & AMC Support for hassle-free operation"
            ]
        },
        {
            items: [
                "Pharmaceutical & Biotech Industry – drug stability and formulation",
                "Food & Beverage Sector – shelf-life and flavour stability",
                "Cosmetic & Personal Care Industry – creams and lotions analysis",
                "Chemical Industry – raw material and specialty testing",
                "Medical Devices & Diagnostics – ensuring product safety",
                "Nutraceuticals & Herbal Products – validating potency",
                "Veterinary Medicines – compliance with stability guidelines",
                "Academic & Research Institutions – long-term experiments",
                "Environmental Simulation Labs – simulating climatic zones",
                "Aerospace & Defence Industry – component stress testing",
                "Packaging Industry – testing material resistance",
                "Dairy & Beverage Companies – microbial growth studies",
                "Agricultural Research – testing seeds and crop samples"
            ]
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-32 overflow-hidden border-b border-slate-100 bg-white">
                <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none">
                    <span className="text-[60px] md:text-[100px] lg:text-[150px] font-black font-heading text-[#001529] tracking-tighter leading-none uppercase">CHAMBERS</span>
                </div>

                <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center lg:text-left">
                    <div className="max-w-4xl mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 sm:mb-10">
                            <span className="w-8 sm:w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">ENVIRONMENTAL CONTROL</h2>
                        </div>
                        <h1 className="text-4xl sm:text-7xl lg:text-[100px] font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-[0.9] mb-8 sm:mb-12">
                            STABILITY <br /> <span className="text-aureole-cyan uppercase tracking-normal">Chambers.</span>
                        </h1>
                        <p className="text-slate-500 text-[14px] sm:text-[15px] font-bold tracking-tight leading-relaxed max-w-xl mx-auto lg:mx-0">
                            {stabilityCategory.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Application Focus Section (When, Why, Where) */}
            <section className="py-16 sm:py-24 bg-aureole-soft relative">
                <div className="container mx-auto px-6 lg:px-24">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                        {/* Selector Column */}
                        <div className="lg:col-span-4 space-y-3">
                            <div className="mb-12">
                                <h3 className="text-[10px] font-black font-heading text-aureole-blue uppercase tracking-[0.4em] mb-4">Overview</h3>
                                <h2 className="text-4xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none">
                                    KEY <br /> <span className="text-aureole-cyan uppercase tracking-normal">Details.</span>
                                </h2>
                            </div>

                            {navItems.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveSection(idx)}
                                    className={`w-full text-left p-6 transition-all duration-300 border ${activeSection === idx
                                        ? 'bg-slate-50 border-aureole-cyan ring-1 ring-aureole-cyan/20'
                                        : 'bg-white border-slate-100 opacity-60 hover:opacity-100 hover:border-slate-200'
                                        }`}
                                >
                                    <div className="flex items-center justify-between pointer-events-none">
                                        <div className="flex items-center gap-4">
                                            <div className={`${activeSection === idx ? 'text-aureole-cyan' : 'text-slate-400'}`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className={`text-lg font-black uppercase tracking-tighter leading-none mb-1 ${activeSection === idx ? 'text-aureole-cyan' : 'text-[#001529]'}`}>{item.title}</div>
                                                <div className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                                                    {item.subtitle}
                                                </div>
                                            </div>
                                        </div>
                                        <ArrowRight size={16} className={`text-aureole-cyan transition-transform duration-300 ${activeSection === idx ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Content Column */}
                        <div className="lg:col-span-8 bg-white border border-slate-100 p-8 lg:p-16 relative overflow-hidden flex flex-col min-h-[400px]">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none font-black font-heading text-8xl text-aureole-slate uppercase tracking-tighter">
                                {navItems[activeSection].title}
                            </div>

                            <div className="relative z-10 grid sm:grid-cols-2 gap-x-12 gap-y-6">
                                {sections[activeSection].items.map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="mt-2 min-w-[5px] h-[5px] rounded-full bg-aureole-cyan"></div>
                                        <p className="text-[13px] font-bold text-[#001529] tracking-wide leading-relaxed opacity-70">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-12 flex items-center gap-2 border-t border-slate-100 mt-12 opacity-40">
                                <div className="w-1.5 h-1.5 rounded-full bg-aureole-blue"></div>
                                <span className="text-[8px] font-black text-[#001529] uppercase tracking-[0.3em]">Precision Engineering / {navItems[activeSection].title}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product List */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6 lg:px-24">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-[2px] bg-aureole-blue"></span>
                                <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">PRODUCT RANGE</h2>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none">
                                AVAILABLE <span className="text-aureole-cyan uppercase tracking-normal">Models.</span>
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-16">
                        {stabilityCategory.subTypes.map((sub, sIdx) => (
                            <div key={sIdx} className="bg-white border border-slate-100 p-8 lg:p-12">
                                <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-100">
                                    <div className="w-2 h-2 rounded-full bg-aureole-blue"></div>
                                    <h3 className="text-2xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none">
                                        {sub.name}
                                    </h3>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {sub.products.map((pName, pIdx) => (
                                        <Link
                                            key={pIdx}
                                            to={`/products/${slugify(pName)}`}
                                            className="group flex flex-col gap-6 p-6 border border-slate-100 transition-all duration-300"
                                        >
                                            <div className="w-10 h-10 flex items-center justify-center border border-slate-100 bg-white text-slate-400 transition-all duration-300">
                                                {sIdx === 0 ? <Box size={18} /> : <Layers size={18} />}
                                            </div>
                                            <div className="space-y-3">
                                                <span className="text-[11px] font-[900] text-[#001529] uppercase tracking-widest transition-colors leading-relaxed block">
                                                    {pName}
                                                </span>
                                                <div className="flex items-center gap-2 text-aureole-blue">
                                                    <span className="text-[8px] font-black uppercase tracking-[0.2em]">View Details</span>
                                                    <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StabilityChambers;
