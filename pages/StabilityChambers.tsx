
import React, { useEffect } from 'react';
import { PRODUCT_CATALOG, STABILITY_NAV_ITEMS, STABILITY_SECTIONS } from '../data/products';
import CategoryHero from '../components/ui/CategoryHero';
import KeyDetailsAccordion from '../components/ui/KeyDetailsAccordion';
import CategoryProductList from '../components/ui/CategoryProductList';

const StabilityChambers: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stabilityCategory = PRODUCT_CATALOG.find(cat => cat.id === 'stability');

    if (!stabilityCategory) return null;

    return (
        <div className="pt-24 min-h-screen bg-white">
            <CategoryHero
                title="STABILITY"
                subtitle="Chambers"
                description={stabilityCategory.description}
                watermark="CHAMBERS"
            />
            <KeyDetailsAccordion
                navItems={STABILITY_NAV_ITEMS}
                sections={STABILITY_SECTIONS}
            />
            <CategoryProductList subTypes={stabilityCategory.subTypes} />
        </div>
    );
};

export default StabilityChambers;
