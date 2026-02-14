import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import ServiceHero from './Service/sections/ServiceHero';
import ExcellenceGrid from './Service/sections/ExcellenceGrid';
import PhilosophySection from './Service/sections/PhilosophySection';
import ServiceCenters from './Service/sections/ServiceCenters';

const Service: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 lg:pt-32 pb-20 bg-transparent">
            <SEO 
                title="Aureole PharmaTech Comprehensive Support Services"
                description="Aureole PharmaTech stands as a beacon of excellence in the pharmaceutical landscape, delivering high-quality equipment backed by a relentless focus on integrity, innovation, and responsive customer support."
                canonical="https://www.aureolepharmatech.com/service/"
            />
            <ServiceHero />
            <ExcellenceGrid />
            <PhilosophySection />
            <ServiceCenters />
        </div>
    );
};

export default Service;
