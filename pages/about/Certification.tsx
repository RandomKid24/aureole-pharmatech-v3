
import React, { useEffect } from 'react';
import CertHero from './Certification/sections/CertHero';
import ComplianceGrid from './Certification/sections/ComplianceGrid';
import PolicyFramework from './Certification/sections/PolicyFramework';

const Certification: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-white">
            <CertHero />
            <ComplianceGrid />
            <PolicyFramework />
        </div>
    );
};

export default Certification;
