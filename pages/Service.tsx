import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import ServiceHero from './Service/sections/ServiceHero';
import CoreServices from './Service/sections/CoreServices';
import WhyChooseUs from './Service/sections/WhyChooseUs';
import ServiceCTA from './Service/sections/ServiceCTA';

const Service: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 lg:pt-32 pb-20 bg-transparent">
            <SEO 
                title="Stability Chamber Services & Lifecycle Support | Aureole PharmaTech"
                description="Expert technical services for Stability Chambers, Environmental Chambers, Cold Rooms, and GMP-critical equipment. Compliance focused and audit ready."
                canonical="https://www.aureolepharmatech.com/service/"
            />
            <ServiceHero />
            <CoreServices />
            <WhyChooseUs />
            <ServiceCTA />
        </div>
    );
};

export default Service;
