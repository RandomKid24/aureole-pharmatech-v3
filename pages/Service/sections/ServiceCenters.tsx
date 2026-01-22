
import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceCenters: React.FC = () => {
    const SERVICE_CENTERS = [
        "BADDI", "DEHRADUN", "DELHI", "HARIDWAR", "GUWAHATI",
        "AHMEDABAD", "VADODARA", "VAPI", "PITHAMPUR", "NASHIK",
        "MUMBAI", "PUNE", "AURANGABAD", "GOA", "HYDERABAD",
        "BANGALORE", "VISAKHAPATNAM", "CHENNAI"
    ];

    return (
        <section className="py-24 bg-aureole-soft">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex flex-col mb-16 text-center lg:text-left">
                    <h3 className="text-5xl lg:text-7xl font-[950] font-heading uppercase tracking-tighter text-[#001529] leading-none mb-6">SERVICE <span className="text-aureole-cyan tracking-normal">Centers.</span></h3>
                    <p className="text-[15px] font-medium text-slate-400 tracking-tight max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        An extensive service network across India ensures prompt and localized support:
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {SERVICE_CENTERS.map((city, idx) => (
                        <div key={idx} className="bg-white border border-slate-100 p-6 hover:bg-aureole-cyan hover:border-aureole-cyan group transition-all duration-300">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-3 h-3 text-aureole-blue group-hover:text-white transition-colors" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#001529] group-hover:text-white transition-colors">{city}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCenters;
