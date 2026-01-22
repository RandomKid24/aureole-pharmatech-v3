
import React, { useEffect } from 'react';
import { PRODUCT_CATALOG, TABLETOP_NAV_ITEMS, TABLETOP_SECTIONS } from '../data/products';
import CategoryHero from '../components/ui/CategoryHero';
import KeyDetailsAccordion from '../components/ui/KeyDetailsAccordion';
import CategoryProductList from '../components/ui/CategoryProductList';

const TableTopInstruments: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tabletopCategory = PRODUCT_CATALOG.find(cat => cat.id === 'tabletop');

    if (!tabletopCategory) return null;

    return (
        <div className="pt-24 min-h-screen bg-white">
            <CategoryHero
                title="TABLE TOP"
                subtitle="Instruments"
                description={tabletopCategory.description}
                watermark="TABLE TOP"
            />
            <KeyDetailsAccordion
                navItems={TABLETOP_NAV_ITEMS}
                sections={TABLETOP_SECTIONS}
            />
            <CategoryProductList subTypes={tabletopCategory.subTypes} />
        </div>
    );
};

export default TableTopInstruments;
