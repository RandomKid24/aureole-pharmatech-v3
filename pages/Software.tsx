import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import DirectAnswers from '../components/DirectAnswers';
import SoftwareHero from './Software/sections/SoftwareHero';
import GeneralSoftwareInfo from './Software/sections/GeneralSoftwareInfo';
import ComplianceFeatures from './Software/sections/ComplianceFeatures';
import MonitoringControl from './Software/sections/MonitoringControl';
import DataReporting from './Software/sections/DataReporting';

const Software: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-transparent">
            <SEO />
            <SoftwareHero />
            <GeneralSoftwareInfo />
            <ComplianceFeatures />
            <MonitoringControl />
            <DataReporting />
            <DirectAnswers />
        </div>
    );
};

export default Software;
