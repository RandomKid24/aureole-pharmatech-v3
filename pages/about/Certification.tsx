import React, { useEffect } from 'react';
import SEO from '../../components/SEO';
import CertHero from './Certification/sections/CertHero';
import ComplianceGrid from './Certification/sections/ComplianceGrid';
import PolicyFramework from './Certification/sections/PolicyFramework';

const Certification: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-transparent">
            <SEO 
                title="CE Certification, ISO 9001:2015, Quality Assured"
                description="Authentication and regulatory compliance frameworks governing our precision engineering protocols., Committed to total customer satisfaction. Our focus remains on continuous improvement and 100% accuracy across all manufacturing processes."
                canonical="https://www.aureolepharmatech.com/about/certification-compliance/"
            />
            <CertHero />
            <ComplianceGrid />
            <PolicyFramework />
        </div>
    );
};

export default Certification;
