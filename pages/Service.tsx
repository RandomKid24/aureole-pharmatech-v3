
import React, { useEffect } from 'react';
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
            <ServiceHero />
            <ExcellenceGrid />
            <PhilosophySection />
            <ServiceCenters />
        </div>
    );
};

export default Service;
