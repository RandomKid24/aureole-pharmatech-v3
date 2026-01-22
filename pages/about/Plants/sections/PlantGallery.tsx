
import React from 'react';
import LazyImage from '@/components/LazyImage';

interface PlantGalleryProps {
    onImageClick: (index: number) => void;
    images: string[];
}

const PlantGallery: React.FC<PlantGalleryProps> = ({ onImageClick, images }) => {
    return (
        <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 sm:px-8 lg:px-16 mb-24 relative z-10 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h3 className="text-[10px] font-black font-heading uppercase tracking-[0.5em] text-aureole-blue">FACILITY DOCUMENTATION</h3>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-[950] font-heading text-aureole-slate uppercase tracking-tighter leading-none">
                            INFRASTRUCTURE <br /> <span className="text-aureole-cyan uppercase tracking-normal">Gallery.</span>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="relative group overflow-hidden break-inside-avoid shadow-xl shadow-slate-200 rounded-sm cursor-pointer"
                            onClick={() => onImageClick(i)}
                        >
                            <LazyImage
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
    );
};

export default PlantGallery;
