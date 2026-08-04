import React, { useEffect } from 'react';
import SEO from '../../components/SEO';
import PlantsHero from './Plants/sections/PlantsHero';
import FacilityUnits from './Plants/sections/FacilityUnits';
// ... galleryImages ...
const galleryImages = [
    "/plants/DJI_20240723121709_0011_D.webp",
    "/plants/DJI_20240723124450_0018_D_2.webp",
    "/plants/IMG_8943.webp",
    "/plants/Pharnma plant 2_2.jpg"
];

const Plants: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-transparent">
            <SEO 
                title="Pharmaceutical Laboratory Equipment, 3 Plant in Malegaon MIDC, Sinnar, Nashik, Maharashtra"
                description="Standalone Chamber Manufacturing Hub, Corporate HQ & Walk-in Chamber Wing, Table-Top Instruments & Lab Systems, Our manufacturing facilities are equipped with precision engineering systems to ensure global compliance and quality standards for pharmaceutical laboratory equipment."
                canonical="https://www.aureolepharmatech.com/about/plants/"
            />
            <PlantsHero />
            <FacilityUnits onImageClick={() => { }} />
        </div>
    );
};

export default Plants;
