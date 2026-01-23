import React, { useEffect } from 'react';
import PlantsHero from './Plants/sections/PlantsHero';
import FacilityUnits from './Plants/sections/FacilityUnits';



const galleryImages = [
    "/plants/DJI_20240723121709_0011_D.JPG",
    "/plants/DJI_20240723124450_0018_D_2.jpg",
    "/plants/IMG_8943.jpg",
    "/plants/Pharnma plant 2_2.jpg"
];

const Plants: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-white">
            <PlantsHero />
            <FacilityUnits onImageClick={() => { }} />
        </div>
    );
};

export default Plants;
