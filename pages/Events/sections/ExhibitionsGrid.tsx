
import React from 'react';
import { Award, Calendar, MapPin, ArrowRight } from 'lucide-react';
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

interface ExhibitionsGridProps {
    exhibitions: EventMedia[];
    onEventClick: (event: EventMedia) => void;
}

const ExhibitionsGrid: React.FC<ExhibitionsGridProps> = ({ exhibitions, onEventClick }) => {
    return (
        <section className="py-24 border-b border-slate-100 bg-aureole-soft">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <Award className="w-6 h-6 text-aureole-blue" />
                            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-aureole-blue">INDUSTRY PRESENCE</h3>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black font-heading uppercase tracking-tighter text-[#001529]">PAST EXHIBITIONS</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {exhibitions.map((exh, idx) => (
                        <div key={idx} className="group cursor-pointer" onClick={() => onEventClick(exh)}>
                            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 mb-8">
                                <div className="absolute inset-0 bg-aureole-slate/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <LazyImage
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
                                <p className="text-[15px] font-medium text-slate-500 tracking-widest leading-relaxed h-20 overflow-hidden text-ellipsis">
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
    );
};

export default ExhibitionsGrid;
