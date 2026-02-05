
import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceCenters: React.FC = () => {
    const SERVICE_CENTERS = [
        "Baddi", "Dehradun", "Delhi", "Haridwar", "Guwahati",
        "Ahmedabad", "Vadodara", "Vapi", "Pithampur", "Nashik",
        "Mumbai", "Pune", "Aurangabad", "Goa", "Hyderabad",
        "Bangalore", "Visakhapatnam", "Chennai"
    ];

    return (
        <section className="py-24 bg-transparent">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex flex-col mb-16 text-center lg:text-left">
                    <h3 className="text-5xl lg:text-7xl font-black font-heading tracking-tighter text-aureole-slate leading-none mb-6">
                        Service <span className="text-aureole-cyan">Centers</span>
                    </h3>
                    <p className="text-base font-sans font-medium text-slate-500 tracking-tight max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        An extensive service network across India ensures prompt and localized technical support for all pharmaceutical installations.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {SERVICE_CENTERS.map((city, idx) => (
                        <div key={idx} className="bg-white/40 backdrop-blur-sm border border-slate-100 p-6 hover:bg-white/80 hover:border-aureole-cyan group transition-all duration-300 shadow-sm hover:shadow-md">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-3.5 h-3.5 text-aureole-blue group-hover:text-aureole-cyan transition-colors" />
                                <span className="text-base font-bold font-heading text-aureole-slate transition-colors">{city}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCenters;
