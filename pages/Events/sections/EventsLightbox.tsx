
import React from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Play } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

interface EventMedia {
    title: string;
    date: string;
    location: string;
    folderPath: string;
}

interface EventsLightboxProps {
    selectedEvent: EventMedia;
    galleryItems: string[];
    lightboxIndex: number;
    onClose: () => void;
    onNext: (e: React.MouseEvent) => void;
    onPrev: (e: React.MouseEvent) => void;
    onThumbClick: (index: number) => void;
}

const EventsLightbox: React.FC<EventsLightboxProps> = ({
    selectedEvent,
    galleryItems,
    lightboxIndex,
    onClose,
    onNext,
    onPrev,
    onThumbClick
}) => {
    return (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 lg:p-12">
            {/* Header */}
            <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-start z-20">
                <div className="max-w-2xl">
                    <h2 className="text-2xl lg:text-4xl font-black text-white uppercase tracking-tighter mb-2">{selectedEvent.title}</h2>
                    <div className="flex items-center gap-6 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                        <span className="flex items-center gap-2"><Calendar size={12} /> {selectedEvent.date}</span>
                        <span className="flex items-center gap-2"><MapPin size={12} /> {selectedEvent.location}</span>
                        <span className="bg-white/10 px-2 py-0.5 text-white">{lightboxIndex + 1} / {galleryItems.length}</span>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Media Container */}
            <div className="relative w-full h-full flex items-center justify-center pt-20">
                <button
                    onClick={onPrev}
                    className="absolute left-0 p-4 bg-white/5 hover:bg-white/10 text-white transition-all z-10"
                >
                    <ChevronLeft size={48} />
                </button>

                <div className="relative max-w-5xl max-h-[70vh] w-full flex items-center justify-center group overflow-hidden">
                    {galleryItems[lightboxIndex]?.endsWith('.mp4') ? (
                        <video
                            src={`${selectedEvent.folderPath}/${galleryItems[lightboxIndex]}`}
                            className="max-w-full max-h-full"
                            controls
                            autoPlay
                        />
                    ) : (
                        <LazyImage
                            src={`${selectedEvent.folderPath}/${galleryItems[lightboxIndex]}`}
                            alt="Gallery item"
                            className="max-w-full max-h-full object-contain shadow-2xl animate-in fade-in zoom-in duration-500"
                        />
                    )}
                </div>

                <button
                    onClick={onNext}
                    className="absolute right-0 p-4 bg-white/5 hover:bg-white/10 text-white transition-all z-10"
                >
                    <ChevronRight size={48} />
                </button>
            </div>

            {/* Thumbnails Strip */}
            <div className="absolute bottom-8 left-0 w-full px-8 flex justify-center gap-4 overflow-x-auto pb-4 custom-scrollbar">
                {galleryItems.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => onThumbClick(idx)}
                        className={`relative flex-shrink-0 w-20 h-20 border-2 transition-all ${lightboxIndex === idx ? 'border-aureole-cyan scale-110 shadow-lg z-10' : 'border-transparent opacity-50 hover:opacity-100'}`}
                    >
                        {item.endsWith('.mp4') ? (
                            <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                                <Play size={20} className="text-white fill-white" />
                            </div>
                        ) : (
                            <LazyImage
                                src={`${selectedEvent.folderPath}/${item}`}
                                className="w-full h-full object-cover"
                                alt={`Thumbnail ${idx}`}
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default EventsLightbox;
