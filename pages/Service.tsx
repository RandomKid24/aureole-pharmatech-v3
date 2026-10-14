import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import DirectAnswers from '../components/DirectAnswers';
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
            <SEO />
            <ServiceHero />
            <CoreServices />
            <WhyChooseUs />
            <DirectAnswers />
            <ServiceCTA />
        </div>
    );
};

export default Service;
