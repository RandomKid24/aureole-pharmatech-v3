
import React, { useEffect } from 'react';
import TeamHero from './Team/sections/TeamHero';
import ExecutiveHierarchy from './Team/sections/ExecutiveHierarchy';
import OperationalTeam from './Team/sections/OperationalTeam';

const Team: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-white">
            <TeamHero />
            <ExecutiveHierarchy />
            <OperationalTeam />
        </div>
    );
};

export default Team;
