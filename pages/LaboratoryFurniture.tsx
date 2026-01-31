
import React, { useEffect } from 'react';
import { PRODUCT_CATALOG } from '../data/products';
import CategoryHero from '../components/ui/CategoryHero';
import FurnitureProductsGrid from './LaboratoryFurniture/sections/FurnitureProductsGrid';

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
                subtitle="Furniture"
                description={furnitureCategory.description}
                watermark="FURNITURE"
            />
            <FurnitureProductsGrid />
        </div>
    );
};

export default LaboratoryFurniture;
