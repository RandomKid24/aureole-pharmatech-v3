import React, { useEffect } from 'react';
import SEO from '../components/SEO';
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
        <div className="pt-24 min-h-screen bg-transparent">
            <SEO 
                title="Laboratory Furniture Manufacturer and Supplier in India, Aureole Pharma Tech"
                description="Aureole Pharma Tech Manufacturer and Supplier of Laboratory Furniture, Furniture & Accessories, Modular Laboratory Furniture, Stainless Steel Items & Accessories"
                canonical="https://www.aureolepharmatech.com/products/laboratory-furniture/"
            />
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
