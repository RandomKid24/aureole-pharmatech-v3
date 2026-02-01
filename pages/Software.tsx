
import React, { useEffect } from 'react';
import SoftwareHero from './Software/sections/SoftwareHero';
import GeneralSoftwareInfo from './Software/sections/GeneralSoftwareInfo';
import ComplianceFeatures from './Software/sections/ComplianceFeatures';
import MonitoringControl from './Software/sections/MonitoringControl';
import DataReporting from './Software/sections/DataReporting';
import SoftwareFaq from './Software/sections/SoftwareFaq';

const Software: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-white">
            <SoftwareHero />
            <GeneralSoftwareInfo />
            <ComplianceFeatures />
            <MonitoringControl />
            <DataReporting />
        </div>
    );
};

export default Software;
