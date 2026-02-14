import React, { useEffect } from 'react';
import SEO from '../../components/SEO';
import LeadershipVision from './Overview/sections/LeadershipVision';
import TeamArchitecture from './Overview/sections/TeamArchitecture';
import Philosophy from './Overview/sections/Philosophy';
import Ventures from './Overview/sections/Ventures';

const Overview: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-transparent selection:bg-aureole-blue selection:text-white">
            <SEO 
                title="About Us - Aureole Pharma Tech, Nashik, Maharashtra, India"
                description="Dr. Kiran Badgujar - Founder & Director, With over 27 years of experience in the pharmaceutical industry, my journey has been driven by the belief that innovation and compassion must go hand in hand. Whether it's through cutting-edge technologies or social initiatives via Adityam Foundation, we strive for impact."
                canonical="https://www.aureolepharmatech.com/about/"
            />
            <LeadershipVision />
            <TeamArchitecture />
            <Philosophy />
            <Ventures />
        </div>
    );
};

export default Overview;
