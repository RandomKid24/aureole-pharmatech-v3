import React, { useEffect } from 'react';
import SEO from '../../components/SEO';
import LeadershipVision from './Overview/sections/LeadershipVision';
import Philosophy from './Overview/sections/Philosophy';
import Ventures from './Overview/sections/Ventures';

const Overview: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-transparent selection:bg-aureole-blue selection:text-white">
            <SEO />
            <LeadershipVision />
            <Philosophy />
            <Ventures />
        </div>
    );
};

export default Overview;
