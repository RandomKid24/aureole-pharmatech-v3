
import React from 'react';
import { Users, MapPin } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

interface EventMedia {
    title: string;
    date: string;
    location: string;
    description: string;
    thumbnail: string;
    folderPath: string;
    type: 'exhibition' | 'company';
}

interface CompanyEventsGridProps {
    companyEvents: EventMedia[];
    onEventClick: (event: EventMedia) => void;
}

const CompanyEventsGrid: React.FC<CompanyEventsGridProps> = ({ companyEvents, onEventClick }) => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <Users className="w-6 h-6 text-aureole-cyan" />
                            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-aureole-cyan">INTERNAL CULTURE</h3>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black font-heading uppercase tracking-tighter text-[#001529]">COMPANY EVENTS</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {companyEvents.map((event, idx) => (
                        <div key={idx} className="bg-white border border-slate-100 hover:border-aureole-cyan transition-all group cursor-pointer" onClick={() => onEventClick(event)}>
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <LazyImage
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
                                <p className="text-[15px] font-medium text-slate-500 tracking-widest leading-relaxed mb-6 line-clamp-2">
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
    );
};

export default CompanyEventsGrid;
