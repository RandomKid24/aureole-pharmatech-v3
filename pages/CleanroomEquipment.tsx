
import React, { useEffect } from 'react';
import { PRODUCT_CATALOG, CLEANROOM_NAV_ITEMS, CLEANROOM_SECTIONS } from '../data/products';
import CategoryHero from '../components/ui/CategoryHero';
import KeyDetailsAccordion from '../components/ui/KeyDetailsAccordion';
import CategoryProductList from '../components/ui/CategoryProductList';

const CleanroomEquipment: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const cleanroomCategory = PRODUCT_CATALOG.find(cat => cat.id === 'cleanroom');

    if (!cleanroomCategory) return null;

    return (
        <div className="pt-24 min-h-screen bg-white">
            <CategoryHero
                title="CLEANROOM"
                subtitle={<span className="text-aureole-blue">EQUIPMENT</span>}
                watermark="STERILITY"
                image="/assets/sketches/cleanroom-sketch.png"
                showAccent={false}
            />
            <KeyDetailsAccordion
                navItems={CLEANROOM_NAV_ITEMS}
                sections={CLEANROOM_SECTIONS}
                accentLabel="GMP Compliance"
                title="W.W.W"
                accentTitle="Insights"
            />
            <CategoryProductList subTypes={cleanroomCategory.subTypes} />
        </div>
    );
};

export default CleanroomEquipment;
