
import React, { useState, useEffect } from 'react';
import EventsHero from './Events/sections/EventsHero';
import ExhibitionsGrid from './Events/sections/ExhibitionsGrid';
import CompanyEventsGrid from './Events/sections/CompanyEventsGrid';
import EventsLightbox from './Events/sections/EventsLightbox';

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

const GET_FOLDER_GALLERY = (folderPath: string) => {
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
            <EventsHero />
            <ExhibitionsGrid exhibitions={EXHIBITIONS} onEventClick={setSelectedEvent} />
            <CompanyEventsGrid companyEvents={COMPANY_EVENTS} onEventClick={setSelectedEvent} />

            {selectedEvent && lightboxIndex !== null && (
                <EventsLightbox
                    selectedEvent={selectedEvent}
                    galleryItems={galleryItems}
                    lightboxIndex={lightboxIndex}
                    onClose={() => setSelectedEvent(null)}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    onThumbClick={setLightboxIndex}
                />
            )}
        </div>
    );
};

export default Events;
