
import React from 'react';

interface BorderBeamProps {
    className?: string;
}

const BorderBeam: React.FC<BorderBeamProps> = ({ className = "" }) => {
    return (
        <div className={`border-beam ${className}`} />
    );
};

export default BorderBeam;
