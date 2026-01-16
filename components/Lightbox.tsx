
import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
    images: string[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    title?: string;
}

const Lightbox: React.FC<LightboxProps> = ({
    images,
    currentIndex,
    isOpen,
    onClose,
    onNext,
    onPrev,
    title
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 lg:p-12 animate-in fade-in duration-300" onClick={onClose}>
            <button
                className="absolute top-8 right-8 text-white hover:text-aureole-cyan transition-all z-[210] p-2 bg-white/5 rounded-full"
                onClick={onClose}
            >
                <X size={32} />
            </button>

            <div className="relative w-full h-full flex items-center justify-center">
                {images.length > 1 && (
                    <button
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                        className="absolute left-0 p-6 bg-white/5 hover:bg-white/10 text-white transition-all z-10 rounded-full"
                    >
                        <ChevronLeft size={48} />
                    </button>
                )}

                <div className="relative group max-w-full max-h-full flex items-center justify-center p-4 bg-white/5 border border-white/10">
                    <img
                        src={images[currentIndex]}
                        className="max-w-full max-h-[85vh] object-contain shadow-2xl animate-in zoom-in duration-500"
                        alt={title || "Gallery Image"}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>

                {images.length > 1 && (
                    <button
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                        className="absolute right-0 p-6 bg-white/5 hover:bg-white/10 text-white transition-all z-10 rounded-full"
                    >
                        <ChevronRight size={48} />
                    </button>
                )}
            </div>

            <div className="absolute bottom-12 left-0 w-full text-center flex flex-col gap-2">
                {title && (
                    <span className="text-white font-black uppercase tracking-widest text-[12px]">
                        {title}
                    </span>
                )}
                <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
                    Image {currentIndex + 1} of {images.length} • Navigation Enabled
                </span>
            </div>
        </div>
    );
};

export default Lightbox;
