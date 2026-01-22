
import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import PlantsHero from './Plants/sections/PlantsHero';
import FacilityUnits from './Plants/sections/FacilityUnits';
import PlantGallery from './Plants/sections/PlantGallery';


const galleryImages = [
    "/plants/DJI_20240723121709_0011_D.JPG",
    "/plants/DJI_20240723124450_0018_D_2.jpg",
    "/plants/IMG_8943.jpg"
];

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

    const openByUrl = (url: string) => {
        const idx = galleryImages.indexOf(url);
        setLightboxIndex(idx !== -1 ? idx : 0);
    };

    return (
        <div className="pt-24 min-h-screen bg-white">
            <PlantsHero />
            <FacilityUnits onImageClick={openByUrl} />
            <PlantGallery onImageClick={setLightboxIndex} images={galleryImages} />


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

                        <LazyImage
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
