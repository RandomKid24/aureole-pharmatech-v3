
import React from 'react';
import { MapPin } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

interface FacilityUnitsProps {
    onImageClick: (image: string) => void;
}

const FacilityUnits: React.FC<FacilityUnitsProps> = ({ onImageClick }) => {
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

    return (
        <section className="py-24 lg:py-40 bg-aureole-soft relative">
            <div className="container mx-auto px-6 sm:px-8 lg:px-16 text-center lg:text-left">
                <div className="space-y-32 lg:space-y-48">
                    {facilities.map((facility, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}>
                            {/* Image Column */}
                            <div className="w-full lg:w-1/2 relative group cursor-pointer" onClick={() => onImageClick(facility.image)}>
                                <div className="relative overflow-hidden aspect-[4/3] shadow-2xl shadow-slate-200 border border-slate-100">
                                    <LazyImage
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
                                <h3 className="text-4xl lg:text-5xl font-[950] font-heading text-aureole-slate uppercase tracking-tighter leading-tight mb-8">
                                    {facility.title}
                                </h3>
                                <div className="flex items-center gap-3 text-slate-400 mb-8 pb-6 border-b border-slate-50 justify-center lg:justify-start">
                                    <MapPin size={18} className="text-aureole-cyan" />
                                    <span className="text-[12px] font-medium tracking-widest">{facility.location}</span>
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
    );
};

export default FacilityUnits;
