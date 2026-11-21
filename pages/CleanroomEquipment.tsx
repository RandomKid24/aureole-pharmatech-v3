
import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { PRODUCT_CATALOG } from '../data/products';
import CategoryHero from '../components/ui/CategoryHero';
import CategoryProductList from '../components/ui/CategoryProductList';

const CleanroomEquipment: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const cleanroomCategory = PRODUCT_CATALOG.find(cat => cat.id === 'cleanroom');

    if (!cleanroomCategory) return null;

    return (
        <div className="pt-24 min-h-screen bg-transparent">
            <SEO />
            <CategoryHero
                title="CLEANROOM"
                subtitle={<span className="gt">EQUIPMENT</span>}
                watermark="STERILITY"
                image="/assets/sketches/cleanroom-sketch.webp"
                showAccent={false}
            />
            <CategoryProductList subTypes={cleanroomCategory.subTypes} />
        </div>
    );
};

export default CleanroomEquipment;
