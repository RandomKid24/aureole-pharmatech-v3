
import React, { useEffect } from 'react';
import { PRODUCT_CATALOG, FURNITURE_NAV_ITEMS, FURNITURE_SECTIONS } from '../data/products';
import CategoryHero from '../components/ui/CategoryHero';
import KeyDetailsAccordion from '../components/ui/KeyDetailsAccordion';
import CategoryProductList from '../components/ui/CategoryProductList';

const LaboratoryFurniture: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const furnitureCategory = PRODUCT_CATALOG.find(cat => cat.id === 'furniture');

    if (!furnitureCategory) return null;

    return (
        <div className="pt-24 min-h-screen bg-white">
            <CategoryHero
                title="LABORATORY"
                subtitle={<span className="text-aureole-blue">FURNITURE</span>}
                description={furnitureCategory.description}
                watermark="FURNITURE"
                image="/assets/sketches/lab-furniture-sketch.png"
                showAccent={false}
            />

            <KeyDetailsAccordion
                navItems={FURNITURE_NAV_ITEMS}
                sections={FURNITURE_SECTIONS}
                accentLabel="Workspace Layout"
                title="W.W.W"
                accentTitle="Insights"
            />

            <CategoryProductList subTypes={furnitureCategory.subTypes} />
        </div>
    );
};

export default LaboratoryFurniture;
