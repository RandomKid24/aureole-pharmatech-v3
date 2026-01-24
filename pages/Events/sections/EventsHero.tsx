
import React from 'react';

const EventsHero: React.FC = () => {
    return (
        <section className="relative overflow-hidden border-b border-slate-100 bg-white py-24 lg:py-40 group">
            <div className="absolute top-10 right-10 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000 pointer-events-none select-none hidden lg:block">
                <span className="text-[150px] font-black text-aureole-slate group-hover:text-aureole-cyan tracking-tighter leading-none uppercase transition-colors duration-1000">EVENTS</span>
            </div>

            <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center lg:text-left">
                <div className="max-w-5xl mx-auto lg:mx-0">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                        <span className="w-12 h-[2px] bg-aureole-blue"></span>
                        <h1 className="text-[11px] font-black font-heading uppercase tracking-[0.5em] text-aureole-blue">EVENTS & EXHIBITIONS Gallery</h1>
                    </div>

                    <h2 className="text-4xl lg:text-[85px] font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-[0.95] mb-12">
                        CORPORATE <br />
                        <span className="text-aureole-cyan uppercase tracking-normal">Moments.</span>
                    </h2>

                    <div className="max-w-3xl border-l-[3px] border-aureole-blue/20 bg-slate-50/50 p-10">
                        <p className="text-lg lg:text-xl text-slate-700 font-medium leading-relaxed mb-8">
                            Journey through our past events and exhibitions. Click on any event to explore the full gallery of images and videos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsHero;
