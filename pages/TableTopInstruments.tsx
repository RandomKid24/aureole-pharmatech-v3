
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
                        <p className="text-slate-500 text-[11px] sm:text-[12px] font-bold tracking-[0.2em] leading-relaxed max-w-xl mx-auto lg:mx-0">
                            {tabletopCategory.description}
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
                                                <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
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
                                        <p className="text-[10px] font-bold text-[#001529] tracking-widest leading-relaxed opacity-70">
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
                        {tabletopCategory.subTypes.map((sub, sIdx) => (
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

export default TableTopInstruments;
