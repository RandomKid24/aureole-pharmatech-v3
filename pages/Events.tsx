
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Image as ImageIcon, Users, Award, ArrowRight, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface EventMedia {
    title: string;
    date: string;
    location: string;
    description: string;
    thumbnail: string;
    folderPath: string;
    type: 'exhibition' | 'company';
}

const EXHIBITIONS: EventMedia[] = [
    {
        title: "CPHI PMEC (NOV 2024)",
        date: "NOVEMBER 2024",
        location: "DELHI NCR, INDIA",
        description: "Showcasing our precision engineered systems and compliance-ready solutions at South Asia's largest pharma event.",
        thumbnail: "/events/exhibitions/CPHI PMEC (NOV 2024)/cphi-pmec1.jpg",
        folderPath: "/events/exhibitions/CPHI PMEC (NOV 2024)",
        type: 'exhibition'
    },
    {
        title: "Asia Pharma Expo 2024",
        date: "FEBRUARY 2024",
        location: "DHAKA, BANGLADESH",
        description: "Engaging with the growing pharmaceutical manufacturing hub in Bangladesh with our latest laboratory technologies.",
        thumbnail: "/events/exhibitions/Asia Pharma Expo 2024/WhatsApp Image 2025-09-10 at 2.47.02 PM.jpeg",
        folderPath: "/events/exhibitions/Asia Pharma Expo 2024",
        type: 'exhibition'
    },
    {
        title: "Pharmatech Expo Chandigarh (Apr 2024)",
        date: "APRIL 2024",
        location: "CHANDIGARH, INDIA",
        description: "Demonstrating our commitment to regional manufacturing excellence in the northern pharma hub.",
        thumbnail: "/events/exhibitions/Pharmatech Expo Chandigarh (Apr 2024)/Pharmatech-Expo.jpg",
        folderPath: "/events/exhibitions/Pharmatech Expo Chandigarh (Apr 2024)",
        type: 'exhibition'
    },
    {
        title: "7th NIGERIA PHARMA MANUFACTURERS EXPO 2024",
        date: "2024",
        location: "LAGOS, NIGERIA",
        description: "Expanding our footprint in the African market, showcasing global standard equipment for regional manufacturers.",
        thumbnail: "/events/exhibitions/7th NIGERIA PHARMA MANUFACTURERS EXPO 2024/IMG-20240904-WA0031.jpg",
        folderPath: "/events/exhibitions/7th NIGERIA PHARMA MANUFACTURERS EXPO 2024",
        type: 'exhibition'
    },
    {
        title: "Analytica Lab Expo Mumbai 2025",
        date: "2025",
        location: "MUMBAI, INDIA",
        description: "Presenting future-ready laboratory solutions at the premier trade fair for laboratory technology.",
        thumbnail: "/events/exhibitions/Analytica Lab Expo Mumbai 2025/WhatsApp Image 2025-09-10 at 2.13.36 PM.jpeg",
        folderPath: "/events/exhibitions/Analytica Lab Expo Mumbai 2025",
        type: 'exhibition'
    },
    {
        title: "Pharmaconex Exhibition 2024",
        date: "2024",
        location: "CAIRO, EGYPT",
        description: "Strengthening our presence in the Middle East and North Africa pharmaceutical landscape.",
        thumbnail: "/events/exhibitions/Pharmaconex Exhibition 2024/OTH00458.jpg",
        folderPath: "/events/exhibitions/Pharmaconex Exhibition 2024",
        type: 'exhibition'
    }
];

const COMPANY_EVENTS: EventMedia[] = [
    {
        title: "Manufacturing Unit Inauguration",
        date: "OCTOBER 2023",
        location: "MANUFACTURING FACILITY",
        description: "The grand opening of our state-of-the-art manufacturing unit, marking a new chapter in our journey of precision engineering.",
        thumbnail: "/events/company-events/Inauguration/MAC_0007_2-scaled.jpg",
        folderPath: "/events/company-events/Inauguration",
        type: 'company'
    },
    {
        title: "Independence Day Celebration 2025",
        date: "AUGUST 15, 2025",
        location: "CORPORATE OFFICE",
        description: "Celebrating our nation's spirit and reaffirming our commitment to 'Make in India' for the global pharma industry.",
        thumbnail: "/events/company-events/Independence Day Celebration 2025/WhatsApp-Image-2025-08-20-at-1.04.14-PM.jpeg",
        folderPath: "/events/company-events/Independence Day Celebration 2025",
        type: 'company'
    },
    {
        title: "Women's Day Celebration 2025",
        date: "MARCH 8, 2025",
        location: "AUREOLE CAMPUS",
        description: "Honoring the incredible women who drive innovation and excellence across all departments at Aureole PharmaTech.",
        thumbnail: "/events/company-events/Women's Day Celebration 2025/WhatsApp-Image-2025-08-20-at-1.00.30-PM.jpeg",
        folderPath: "/events/company-events/Women's Day Celebration 2025",
        type: 'company'
    }
];

// Helper to get all images for a specific folder path
// In a real production app, this would come from an API or a manifest file.
// For now, we'll simulate the "Gallery" view for a few selected events that have many images.
const GET_FOLDER_GALLERY = (folderPath: string) => {
    // This is a mapping of some folders to their contents based on our recent list_dir calls
    const GALLERIES: Record<string, string[]> = {
        "/events/exhibitions/CPHI PMEC (NOV 2024)": [
            "cphi-pmec1.jpg", "cphi-pmec2.jpg", "cphi-pmec3.jpg", "cphi-pmec4.jpg", "cphi-pmec5.jpg",
            "CPHI-Pmec-Nov-2024.mp4", "CPHI-Pmec-Nov-20241.mp4"
        ],
        "/events/exhibitions/Asia Pharma Expo 2024": [
            "WhatsApp Image 2025-09-10 at 2.46.51 PM (1).jpeg", "WhatsApp Image 2025-09-10 at 2.46.51 PM.jpeg",
            "WhatsApp Image 2025-09-10 at 2.46.54 PM.jpeg", "WhatsApp Image 2025-09-10 at 2.46.55 PM.jpeg",
            "WhatsApp Image 2025-09-10 at 2.46.56 PM.jpeg", "WhatsApp Image 2025-09-10 at 2.47.01 PM.jpeg",
            "WhatsApp Image 2025-09-10 at 2.47.02 PM.jpeg"
        ],
        "/events/company-events/Inauguration": [
            "MAC_0007_2-scaled.jpg", "MAC_0023-scaled.jpg", "MAC_0256-scaled.jpg", "MAC_0618-scaled.jpg",
            "MAC_0793-scaled.jpg", "MAC_0795-scaled.jpg", "MAC_0812-scaled.jpg"
        ],
        "/events/company-events/Women's Day Celebration 2025": [
            "WhatsApp-Image-2025-08-20-at-1.00.30-PM.jpeg", "WhatsApp-Image-2025-08-20-at-1.00.39-PM.jpeg",
            "WhatsApp-Image-2025-08-20-at-1.00.44-PM.jpeg", "WhatsApp-Image-2025-08-20-at-1.00.48-PM.jpeg",
            "WhatsApp-Image-2025-08-20-at-1.00.50-PM.jpeg"
        ]
    };

    return GALLERIES[folderPath] || [];
};

const Events: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState<EventMedia | null>(null);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [galleryItems, setGalleryItems] = useState<string[]>([]);

    useEffect(() => {
        if (selectedEvent) {
            setGalleryItems(GET_FOLDER_GALLERY(selectedEvent.folderPath));
            setLightboxIndex(0);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedEvent]);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
        }
    };

    return (
        <div className="pt-24 lg:pt-32 pb-20 bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-slate-100 bg-white py-24 lg:py-40">
                <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none hidden lg:block">
                    <span className="text-[180px] lg:text-[250px] font-black text-aureole-slate tracking-tighter leading-none uppercase">EVENTS</span>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center lg:text-left">
                    <div className="max-w-5xl mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                            <span className="w-12 h-[2px] bg-aureole-blue"></span>
                            <h1 className="text-[11px] font-black uppercase tracking-[0.5em] text-aureole-blue">EVENTS & EXHIBITIONS Gallery</h1>
                        </div>

                        <h2 className="text-4xl lg:text-[85px] font-[950] text-[#001529] uppercase tracking-tighter leading-[0.95] mb-12">
                            CORPORATE <br />
                            <span className="text-aureole-cyan uppercase tracking-normal">Moments.</span>
                        </h2>

                        <div className="max-w-3xl border-l-[3px] border-aureole-blue/20 bg-slate-50/50 p-10">
                            <p className="text-lg lg:text-xl text-[#001529] font-bold leading-relaxed mb-8">
                                Journey through our past events and exhibitions. Click on any event to explore the full gallery of images and videos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Past Exhibitions */}
            <section className="py-24 border-b border-slate-100">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <Award className="w-6 h-6 text-aureole-blue" />
                                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-aureole-blue">INDUSTRY PRESENCE</h3>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-[#001529]">PAST EXHIBITIONS</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {EXHIBITIONS.map((exh, idx) => (
                            <div key={idx} className="group cursor-pointer" onClick={() => setSelectedEvent(exh)}>
                                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 mb-8">
                                    <div className="absolute inset-0 bg-aureole-slate/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={exh.thumbnail}
                                        alt={exh.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                        <div className="bg-white/90 backdrop-blur px-6 py-3 border border-slate-100 shadow-2xl">
                                            <span className="text-[10px] font-black text-[#001529] uppercase tracking-widest">VIEW ALL PHOTOS</span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent z-20">
                                        <div className="flex items-center gap-4 text-white">
                                            <Calendar size={14} className="text-aureole-cyan" />
                                            <span className="text-[10px] font-black tracking-widest uppercase">{exh.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <MapPin size={14} className="text-aureole-blue" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-aureole-blue">{exh.location}</span>
                                    </div>
                                    <h3 className="text-xl font-black uppercase tracking-tighter text-[#001529] group-hover:text-aureole-cyan transition-colors">{exh.title}</h3>
                                    <p className="text-[10px] font-bold text-slate-500 tracking-widest leading-loose h-20 overflow-hidden text-ellipsis">
                                        {exh.description}
                                    </p>
                                    <div className="pt-4">
                                        <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#001529] group-hover:gap-4 transition-all">
                                            EXPLORE GALLERY <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Events */}
            <section className="py-24 bg-slate-50/50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <Users className="w-6 h-6 text-aureole-cyan" />
                                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-aureole-cyan">INTERNAL CULTURE</h3>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-[#001529]">COMPANY EVENTS</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {COMPANY_EVENTS.map((event, idx) => (
                            <div key={idx} className="bg-white border border-slate-100 hover:border-aureole-cyan transition-all group cursor-pointer" onClick={() => setSelectedEvent(event)}>
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <img
                                        src={event.thumbnail}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="bg-white px-4 py-2 text-[9px] font-black uppercase tracking-widest text-[#001529]">VIEW GALLERY</div>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 border border-slate-100">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-[#001529]">{event.date}</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-lg font-black uppercase tracking-tighter text-[#001529] mb-4 group-hover:text-aureole-blue transition-colors">{event.title}</h3>
                                    <p className="text-[10px] font-bold text-slate-500 tracking-widest leading-loose mb-6 line-clamp-2">
                                        {event.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-aureole-blue">
                                        <MapPin size={12} /> {event.location}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fullscreen Lightbox / Gallery */}
            {selectedEvent && lightboxIndex !== null && (
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
                            onClick={() => setSelectedEvent(null)}
                            className="p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Media Container */}
                    <div className="relative w-full h-full flex items-center justify-center pt-20">
                        <button
                            onClick={handlePrev}
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
                                <img
                                    src={`${selectedEvent.folderPath}/${galleryItems[lightboxIndex]}`}
                                    alt="Gallery item"
                                    className="max-w-full max-h-full object-contain shadow-2xl animate-in fade-in zoom-in duration-500"
                                />
                            )}
                        </div>

                        <button
                            onClick={handleNext}
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
                                onClick={() => setLightboxIndex(idx)}
                                className={`relative flex-shrink-0 w-20 h-20 border-2 transition-all ${lightboxIndex === idx ? 'border-aureole-cyan scale-110 shadow-lg z-10' : 'border-transparent opacity-50 hover:opacity-100'}`}
                            >
                                {item.endsWith('.mp4') ? (
                                    <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                                        <Play size={20} className="text-white fill-white" />
                                    </div>
                                ) : (
                                    <img
                                        src={`${selectedEvent.folderPath}/${item}`}
                                        className="w-full h-full object-cover"
                                        alt={`Thumbnail ${idx}`}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Events;
