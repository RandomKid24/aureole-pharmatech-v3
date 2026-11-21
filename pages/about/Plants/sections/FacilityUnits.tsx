
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
            title: "Standalone Chamber Manufacturing Hub",
            location: "Malegaon MIDC, Sinnar, Nashik, Maharashtra",
            desc: "Our primary production facility dedicated to high-precision standalone stability testing equipments. This unit serves as the core hub for engineering environmental testing systems that meet global regulatory standards.",
            image: "/plants/IMG_8943.webp",
            features: []
        },
        {
            unit: "Unit 02",
            title: "Corporate HQ & Walk-in Chamber Wing",
            location: "Sinnar Industrial Zone, Maharashtra",
            desc: "The corporate headquarters and specialized engineering wing for large-scale walk-in environmental chambers. This unit integrates executive operations with advanced technical fabrication and assembly.",
            image: "/plants/DJI_20240723124450_0018_D_2.webp",
            features: []
        },
        {
            unit: "Unit 03",
            title: "Table-Top Instruments & Lab Systems",
            location: "Nashik Industrial Area, Maharashtra",
            desc: "A dedicated manufacturing facility focused on precision table-top instruments and laboratory furniture systems. This unit ensures excellence in compact analytical and storage solutions.",
            image: "/plants/Pharnma plant 2_2.webp",
            features: []
        }
    ];

    return (
        <section className="py-24 lg:py-40 bg-transparent relative">
            <div className="container mx-auto px-6 sm:px-8 lg:px-16 text-center lg:text-left">
                <div className="space-y-32 lg:space-y-48">
                    {facilities.map((facility, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}>
                            {/* Image Column */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className={`frame-slant ${idx % 2 === 0 ? 'pr-5 pb-5' : 'frame-slant-r pl-5 pt-5'}`}>
                                    <div className="relative overflow-hidden aspect-[4/3]">
                                        <LazyImage
                                            src={facility.image}
                                            alt={facility.title}
                                            className="w-full h-full object-cover transform transition-transform duration-1000"
                                        />
                                    </div>
                                </div>
                                <div className={`absolute bottom-9 ${idx % 2 === 0 ? 'right-9' : 'left-9'} w-20 h-20 bg-gradient-to-br from-aureole-accent to-aureole-primary hidden lg:flex items-center justify-center`}>
                                    <span className="text-white font-[950] text-xl italic tracking-tighter">{facility.unit}</span>
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                                    <span className="text-[10px] font-black text-aureole-blue uppercase tracking-[0.3em]">{facility.unit}</span>
                                    <span className="slant-mark" aria-hidden="true"></span>
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


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacilityUnits;
