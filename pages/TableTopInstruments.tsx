import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { PRODUCT_CATALOG } from '../data/products';
import CategoryHero from '../components/ui/CategoryHero';
import CategoryProductList from '../components/ui/CategoryProductList';

const TableTopInstruments: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tabletopCategory = PRODUCT_CATALOG.find(cat => cat.id === 'tabletop');

    if (!tabletopCategory) return null;

    return (
        <div className="pt-24 min-h-screen bg-transparent">
            <SEO />
            <CategoryHero
                title="TABLE TOP"
                subtitle={<span className="gt">Instruments</span>}
                watermark="INSTRUMENTS"
                image="/assets/sketches/table-top-sketch.webp"
                showAccent={false}
            />
            <CategoryProductList subTypes={tabletopCategory.subTypes} />
        </div>
    );
};

export default TableTopInstruments;
