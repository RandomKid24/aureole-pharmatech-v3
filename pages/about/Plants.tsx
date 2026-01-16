
import React, { useEffect, useState } from 'react';
import { Factory, MapPin, Gauge, Shield, Cpu, Zap, Microscope, Boxes, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const Plants: React.FC = () => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (lightboxIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [lightboxIndex]);

    const facilities = [
        {
            unit: "Unit 01",
            title: "Main Manufacturing Facility",
            location: "Malegaon MIDC, Sinnar, Nashik, Maharashtra",
            desc: "Our primary manufacturing and assembly unit dedicated to high-precision pharmaceutical instrumentation and laboratory equipment. This facility is the core hub for stability chamber production and quality assurance.",
            image: "/plants/New Company.jpg",
            features: ["Pharma Equipment Assembly", "ISO 9001:2015 Hub", "Quality Control Terminal"]
        },
        {
            unit: "Unit 02",
            title: "Advanced Fabrication Wing",
            location: "Sinnar Industrial Zone, Maharashtra",
            desc: "Focused on heavy-duty technical fabrication and industrial hardware components. This unit supports our process equipment division with specialized engineering and assembly capabilities.",
            image: "/plants/Pharnma plant 2_2.jpg",
            features: ["Industrial Hardware Fabrication", "Precision Engineering", "Logistics & Distribution"]
        }
    ];

    const galleryImages = [
        "/plants/DJI_20240723121709_0011_D.JPG",
        "/plants/DJI_20240723124450_0018_D_2.jpg",
        "/plants/mack auraa plant 1.jpg",
        "/plants/mack auraa plant 2.jpg",
        "/plants/process photo.jpg",
        "/plants/MAC_9223.jpg",
        "/plants/DJI_20240723121716_0012_D.JPG",
        "/plants/DJI_20240723124454_0019_D.JPG",
        "/plants/0568918a-e2ce-4c49-b5ab-cb662007df56~1.jpg",
        "/plants/Pharnma plant 2_2.jpg"
    ];

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
        }
    };

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center overflow-hidden bg-aureole-slate">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/plants/DJI_20240723121709_0011_D.JPG"
                        alt="Aureole Manufacturing Aerial View"
                        className="w-full h-full object-cover opacity-50 shadow-inner"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-aureole-slate/90 via-aureole-slate/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 sm:px-8 lg:px-24 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-[2px] bg-aureole-cyan"></span>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-cyan">AUREOLE INFRASTRUCTURE</h2>
                        </div>
                        <h1 className="text-5xl sm:text-7xl lg:text-[85px] font-[950] text-white uppercase tracking-tighter leading-[0.9] mb-12">
                            OUR <br /> <span className="text-aureole-cyan uppercase tracking-normal">Plants.</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-300 font-medium leading-relaxed max-w-xl">
                            Our manufacturing facilities are equipped with precision engineering systems to ensure global compliance and quality standards for pharmaceutical laboratory equipment.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Units Section */}
            <section className="py-24 lg:py-40 bg-aureole-soft relative">
                <div className="container mx-auto px-6 sm:px-8 lg:px-16 text-center lg:text-left">
                    <div className="space-y-32 lg:space-y-48">
                        {facilities.map((facility, idx) => (
                            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}>
                                {/* Image Column */}
                                <div className="w-full lg:w-1/2 relative group cursor-pointer" onClick={() => setLightboxIndex(galleryImages.indexOf(facility.image) !== -1 ? galleryImages.indexOf(facility.image) : 0)}>
                                    <div className="relative overflow-hidden aspect-[4/3] shadow-2xl shadow-slate-200 border border-slate-100">
                                        <img
                                            src={facility.image}
                                            alt={facility.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <div className="bg-white px-6 py-3 text-[10px] font-black uppercase tracking-widest text-[#001529]">ENLARGE VIEW</div>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-aureole-blue hidden lg:flex items-center justify-center">
                                        <span className="text-white font-[950] text-xl italic tracking-tighter">{facility.unit}</span>
                                    </div>
                                </div>

                                {/* Content Column */}
                                <div className="w-full lg:w-1/2">
                                    <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                                        <span className="text-[10px] font-black text-aureole-blue uppercase tracking-[0.3em]">{facility.unit}</span>
                                        <div className="w-8 h-px bg-slate-200"></div>
                                    </div>
                                    <h3 className="text-4xl lg:text-5xl font-[950] text-aureole-slate uppercase tracking-tighter leading-tight mb-8">
                                        {facility.title}
                                    </h3>
                                    <div className="flex items-center gap-3 text-slate-400 mb-8 pb-6 border-b border-slate-50 justify-center lg:justify-start">
                                        <MapPin size={18} className="text-aureole-cyan" />
                                        <span className="text-[11px] font-bold tracking-widest">{facility.location}</span>
                                    </div>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-12">
                                        {facility.desc}
                                    </p>

                                    {/* Feature Tags */}
                                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                        {facility.features.map((feat, i) => (
                                            <span key={i} className="px-5 py-2.5 bg-slate-50 border border-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-widest rounded-sm">
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capability Gallery */}
            <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 sm:px-8 lg:px-16 mb-24 relative z-10 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                                <span className="w-12 h-[2px] bg-aureole-blue"></span>
                                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-blue">FACILITY DOCUMENTATION</h3>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-[950] text-aureole-slate uppercase tracking-tighter leading-none">
                                INFRASTRUCTURE <br /> <span className="text-aureole-cyan uppercase tracking-normal">Gallery.</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {galleryImages.map((img, i) => (
                            <div
                                key={i}
                                className="relative group overflow-hidden break-inside-avoid shadow-xl shadow-slate-200 rounded-sm cursor-pointer"
                                onClick={() => setLightboxIndex(i)}
                            >
                                <img
                                    src={img}
                                    alt={`Aureole Plant Gallery ${i + 1}`}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-aureole-slate/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="p-4 border border-white/20 backdrop-blur-sm">
                                        <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">VIEW FULLSCREEN</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industrial Capability Icons */}
            <section className="py-24 lg:py-40 bg-aureole-soft">
                <div className="container mx-auto px-6 sm:px-8 lg:px-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100">
                        {[
                            { icon: Microscope, label: "R&D HUB", val: "Applied" },
                            { icon: Boxes, label: "ASSEMBLY", val: "Precision" },
                            { icon: Zap, label: "ENERGY", val: "Optimized" },
                            { icon: Cpu, label: "CONTROL", val: "Digital" }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="bg-white p-12 flex flex-col items-center text-center group hover:bg-slate-50 transition-colors">
                                    <Icon className="text-slate-200 group-hover:text-aureole-cyan transition-colors mb-6" size={40} />
                                    <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-3">{item.label}</p>
                                    <p className="text-sm font-[950] text-aureole-slate uppercase tracking-tight">{item.val}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 lg:p-12" onClick={() => setLightboxIndex(null)}>
                    <button
                        className="absolute top-8 right-8 text-white hover:text-aureole-cyan transition-colors z-[110]"
                        onClick={() => setLightboxIndex(null)}
                    >
                        <X size={32} />
                    </button>

                    <div className="relative w-full h-full flex items-center justify-center">
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 p-4 bg-white/5 hover:bg-white/10 text-white transition-all z-10"
                        >
                            <ChevronLeft size={48} />
                        </button>

                        <img
                            src={galleryImages[lightboxIndex]}
                            className="max-w-full max-h-[80vh] object-contain shadow-2xl animate-in zoom-in duration-500"
                            alt="Plant view"
                        />

                        <button
                            onClick={handleNext}
                            className="absolute right-0 p-4 bg-white/5 hover:bg-white/10 text-white transition-all z-10"
                        >
                            <ChevronRight size={48} />
                        </button>
                    </div>

                    <div className="absolute bottom-8 left-0 w-full text-center">
                        <span className="text-white/50 text-[10px] font-black uppercase tracking-widest">
                            {lightboxIndex + 1} / {galleryImages.length} • Use arrows to navigate
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Plants;
