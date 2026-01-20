
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Target, Box, Layers } from 'lucide-react';
import { slugify } from '../utils/urlUtils';
import { PRODUCT_CATALOG } from '../data/products';

const TableTopInstruments: React.FC = () => {
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeTab, setActiveTab] = useState(0);

    const tabletopCategory = PRODUCT_CATALOG.find(cat => cat.id === 'tabletop');

    if (!tabletopCategory) return null;

    const navItems = [
        { title: "When", subtitle: "Applications", icon: <Clock size={18} /> },
        { title: "Why", subtitle: "Features & Benefits", icon: <Target size={18} /> },
        { title: "Where", subtitle: "Industries Served", icon: <Layers size={18} /> }
    ];

    const sections = [
        {
            items: [
                "During sample preparation for research, testing, or analysis in laboratories",
                "When performing controlled heating, mixing, or homogenization processes",
                "For sterility testing and contamination monitoring in clean environments",
                "During quality control and stability studies in pharmaceutical and biotech industries",
                "In analytical testing and validation processes to ensure accuracy and compliance",
                "For biological and chemical reactions requiring precise temperature or pressure control",
                "During vacuum operations, drying, or evaporation in lab-scale experiments",
                "When conducting environmental monitoring and air quality validation",
                "For sample consistency and reproducibility in R&D and production labs",
                "Whenever space-saving, portable solutions are required for lab operations"
            ]
        },
        {
            items: [
                "Compact and space-efficient design – ideal for modern labs with limited space",
                "High precision and accuracy in temperature, humidity, pressure, and process control",
                "Energy-efficient and cost-effective without compromising performance",
                "User-friendly interface with advanced digital controls for easy operation",
                "Versatile applications across multiple industries and testing needs",
                "Built-in safety features – alarms, overload protection, and fail-safes",
                "Low maintenance with durable construction for long-term use",
                "Compliance with international standards (ISO, GMP, WHO, FDA)",
                "Customizable configurations to meet specific research or production requirements",
                "Reliable performance under continuous operation with minimal downtime",
                "Data logging and remote monitoring options for process traceability",
                "Eco-friendly technology using sustainable materials and energy-saving systems"
            ]
        },
        {
            items: [
                "Pharmaceutical and Biotech Industries – for formulation, stability, and QC testing",
                "Food and Beverage Industry – for microbial testing, shelf-life studies, and sample prep",
                "Chemical Industry – for controlled reactions, heating, and sample processing",
                "Cosmetics and Personal Care Industry – for product stability and consistency studies",
                "Medical and Diagnostic Laboratories – for sterilization, contamination monitoring, and testing",
                "Academic and Research Institutes – for experimental studies and sample preparation",
                "Environmental and Microbiology Labs – for air, water, and soil testing",
                "Industrial Quality Control Labs – for product validation and batch consistency"
            ]
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-32 overflow-hidden border-b border-slate-100 bg-white">
                <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none">
                    <span className="text-[60px] md:text-[100px] lg:text-[150px] font-black font-heading text-[#001529] tracking-tighter leading-none uppercase">TABLE TOP</span>
                </div>

                <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center lg:text-left">
                    <div className="max-w-4xl mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 sm:mb-10">
                            <span className="w-8 sm:w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">BENCHTOP SOLUTIONS</h2>
                        </div>
                        <h1 className="text-4xl sm:text-7xl lg:text-[100px] font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-[0.9] mb-8 sm:mb-12">
                            TABLE TOP <br /> <span className="text-aureole-cyan uppercase tracking-normal">Instruments.</span>
                        </h1>
                        <p className="text-slate-500 text-[15px] font-medium tracking-tight leading-relaxed max-w-xl mx-auto lg:mx-0">
                            {tabletopCategory.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Application Focus Section (When, Why, Where) */}
            <section className="py-16 sm:py-24 bg-aureole-soft relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-aureole-cyan/20 to-transparent"></div>

                <div className="container mx-auto px-6 lg:px-24">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                        {/* Selector Column */}
                        <div className="lg:col-span-4 space-y-3">
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-8 h-[1px] bg-aureole-blue/30"></span>
                                    <h3 className="text-[10px] font-black font-heading text-aureole-blue uppercase tracking-[0.4em]">Overview</h3>
                                </div>
                                <h2 className="text-5xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none">
                                    KEY <br /> <span className="text-aureole-cyan uppercase tracking-normal">Details.</span>
                                </h2>
                            </div>

                            <div className="space-y-4 relative">
                                {navItems.map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveSection(idx)}
                                        className={`group w-full text-left p-8 transition-all duration-500 border relative overflow-hidden ${activeSection === idx
                                            ? 'bg-white border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,166,214,0.1)]'
                                            : 'bg-transparent border-transparent opacity-40 hover:opacity-100'
                                            }`}
                                    >
                                        {/* Animated Side Indicator */}
                                        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-aureole-cyan transition-transform duration-700 ease-in-out origin-top ${activeSection === idx ? 'scale-y-100' : 'scale-y-0'
                                            }`} />

                                        <div className="flex items-center justify-between pointer-events-none relative z-10">
                                            <div className="flex items-center gap-6">
                                                <div className={`transition-all duration-500 ${activeSection === idx ? 'text-aureole-cyan scale-110' : 'text-slate-400'}`}>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <div className={`text-2xl font-black uppercase tracking-tighter leading-none mb-2 transition-colors duration-500 ${activeSection === idx ? 'text-[#001529]' : 'text-slate-500'}`}>
                                                        {item.title}
                                                    </div>
                                                    <div className={`text-[12px] font-black uppercase tracking-widest transition-colors duration-500 ${activeSection === idx ? 'text-aureole-cyan' : 'text-slate-400'}`}>
                                                        {item.subtitle}
                                                    </div>
                                                </div>
                                            </div>
                                            <ArrowRight size={20} className={`transition-all duration-500 ${activeSection === idx ? 'text-aureole-cyan translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="lg:col-span-8 bg-white border border-slate-100 p-8 lg:p-16 relative overflow-hidden flex flex-col min-h-[550px] shadow-sm">
                            {/* Watermark with animated line */}
                            <div className="absolute top-0 right-0 p-8 opacity-[0.04] pointer-events-none font-black font-heading text-[120px] lg:text-[180px] text-aureole-slate uppercase tracking-tighter leading-none select-none">
                                {navItems[activeSection].title}
                            </div>

                            <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-50 overflow-hidden">
                                <div className="h-full bg-aureole-cyan transition-all duration-1000 ease-in-out" style={{ width: `${((activeSection + 1) / 3) * 100}%` }}></div>
                            </div>

                            <div className="relative z-10 flex-grow">
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="w-10 h-10 rounded-full bg-aureole-soft flex items-center justify-center text-aureole-cyan ring-1 ring-aureole-cyan/20">
                                        {navItems[activeSection].icon}
                                    </div>
                                    <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-aureole-blue">
                                        {navItems[activeSection].subtitle}
                                    </h4>
                                </div>

                                <div key={activeSection} className="grid sm:grid-cols-2 gap-x-12 gap-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    {sections[activeSection].items.map((item, i) => (
                                        <div key={i} className="flex gap-5 group/item">
                                            <div className="mt-2.5 min-w-[6px] h-[6px] rounded-full bg-aureole-cyan group-hover/item:scale-150 transition-transform duration-300"></div>
                                            <p className="text-[15px] font-medium text-slate-600 tracking-tight leading-relaxed group-hover/item:text-[#001529] transition-colors">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto pt-12 flex items-center justify-between border-t border-slate-50 opacity-60">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-aureole-blue animate-pulse"></div>
                                    <span className="text-[9px] font-black text-[#001529] uppercase tracking-[0.3em]">Precision Standards / {navItems[activeSection].title}</span>
                                </div>
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">0{activeSection + 1} / 03</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product List - High Accessibility & Intuitive Design */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6 lg:px-24">
                    <div className="max-w-4xl mb-20 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[12px] font-black uppercase tracking-[0.4em] text-aureole-blue">PRODUCT CATALOG</h2>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none mb-6">
                            AVAILABLE <span className="text-aureole-cyan">Models.</span>
                        </h2>
                        <p className="text-slate-500 font-medium text-lg">Select an instrument category below to explore our precision laboratory models.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-x-20 gap-y-16">
                        {tabletopCategory.subTypes.map((sub, sIdx) => (
                            <div key={sIdx} className="space-y-8">
                                <div className="flex items-center gap-4 pb-4 border-b-2 border-slate-100">
                                    <h3 className="text-2xl font-black font-heading text-[#001529] uppercase tracking-tight">
                                        {sub.name}
                                    </h3>
                                    <span className="bg-slate-100 text-slate-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{sub.products.length} Items</span>
                                </div>

                                <div className="grid gap-3">
                                    {sub.products.map((pName, pIdx) => (
                                        <Link
                                            key={pIdx}
                                            to={`/products/${slugify(pName)}`}
                                            className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-slate-50 hover:bg-white border border-transparent hover:border-aureole-cyan/40 hover:shadow-xl transition-all duration-300 rounded-px"
                                        >
                                            <div className="flex items-center gap-5">
                                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-aureole-blue shadow-sm group-hover:bg-aureole-cyan group-hover:text-white transition-all duration-300">
                                                    <Box size={18} />
                                                </div>
                                                <div>
                                                    <span className="text-[16px] font-extrabold text-[#001529] uppercase tracking-tight block group-hover:text-aureole-cyan transition-colors">
                                                        {pName}
                                                    </span>
                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mt-0.5 group-hover:text-slate-500 transition-colors">Click to view details</span>
                                                </div>
                                            </div>
                                            <div className="mt-4 sm:mt-0 flex items-center gap-3 text-aureole-blue group-hover:text-aureole-cyan transition-colors">
                                                <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">View Product</span>
                                                <div className="w-10 h-10 flex items-center justify-center bg-white sm:bg-transparent border border-slate-100 sm:border-0 rounded-full">
                                                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
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

export default TableTopInstruments;
