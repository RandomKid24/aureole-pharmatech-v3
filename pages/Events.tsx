import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { EventMedia, EXHIBITIONS, COMPANY_EVENTS, GET_FOLDER_GALLERY } from '../data/eventsData';
import EventsHero from './Events/sections/EventsHero';
import ExhibitionsGrid from './Events/sections/ExhibitionsGrid';
import CompanyEventsGrid from './Events/sections/CompanyEventsGrid';
import EventsLightbox from './Events/sections/EventsLightbox';

// The latest events from 2025 and 2026, newest first (this list sets the display order). Older events were archived
// outside the repo in ~/Documents/website data/events (with removed-entries.json to restore them).
const SHOWN_EXHIBITIONS = [
    'Analytica Lab India Mumbai-Apr 2026',
    'PharmaTech Expo Chandigarh 2026',
    'Pharmac South Chennai 2026',
    'PharmaTech Expo Chandigarh 2025',
    'PharmaTech Expo - Gujarat (2025)',
    'Analytica Lab Expo Mumbai 2025',
];
const SHOWN_COMPANY_EVENTS = [
    'Ganesh Utsav 2026',
    'Womens Day Celebration 2026',
    'Diwali 2025',
    'Independence Day Celebration 2025',
    "Women's Day Celebration 2025",
    'Head Office Opening Nashik',
];
const pick = (list: EventMedia[], titles: string[]) =>
    titles.map((t) => list.find((e) => e.title === t)).filter((e): e is EventMedia => !!e);

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
            <SEO />
            <EventsHero />
            <ExhibitionsGrid exhibitions={pick(EXHIBITIONS, SHOWN_EXHIBITIONS)} onEventClick={setSelectedEvent} />
            <CompanyEventsGrid companyEvents={pick(COMPANY_EVENTS, SHOWN_COMPANY_EVENTS)} onEventClick={setSelectedEvent} />

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
