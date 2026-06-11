import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { EventMedia, EXHIBITIONS, COMPANY_EVENTS, GET_FOLDER_GALLERY } from '../data/eventsData';
import EventsHero from './Events/sections/EventsHero';
import ExhibitionsGrid from './Events/sections/ExhibitionsGrid';
import CompanyEventsGrid from './Events/sections/CompanyEventsGrid';
import EventsLightbox from './Events/sections/EventsLightbox';

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
        <div className="pt-24 lg:pt-32 pb-20 bg-transparent">
            <SEO 
                title="Events & Exhibitions Gallery from Aureole PharmaTech"
                description="Corporate Moments, Journey through our past events and exhibitions. Click on any event to explore the full gallery of images and videos."
                canonical="https://www.aureolepharmatech.com/events/"
            />
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
