
import React, { useEffect } from 'react';
import { PRODUCT_CATALOG } from '../data/products';
import CategoryHero from '../components/ui/CategoryHero';
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
                subtitle="Furniture"
                description={furnitureCategory.description}
                watermark="FURNITURE"
            />
            <CategoryProductList subTypes={furnitureCategory.subTypes} />
        </div>
    );
};

export default LaboratoryFurniture;
