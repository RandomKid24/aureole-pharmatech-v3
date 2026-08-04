import React, { useEffect } from 'react';
import SEO from '../components/SEO';
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
        <div className="pt-24 min-h-screen bg-transparent">
            <SEO 
                title="Table Top Instruments Manufacturer and Supplier in India, Aureole Pharma Tech"
                description="Aureole Pharma Tech Manufacturer and Supplier of Table Top Instruments, Standard Instruments, Ultrasonic Bath, Water Bath, Steam Bath, Oil Bath, Dry Bath, Air Sampler"
                canonical="https://www.aureolepharmatech.com/products/table-top-instruments/"
            />
            <CategoryHero
                title="TABLE TOP"
                subtitle={<span className="text-aureole-blue">Instruments</span>}
                watermark="INSTRUMENTS"
                image="/assets/sketches/table-top-sketch.webp"
                showAccent={false}
            />
            <KeyDetailsAccordion
                navItems={TABLETOP_NAV_ITEMS}
                sections={TABLETOP_SECTIONS}
                accentLabel="System Performance"
                title="W.W.W"
                accentTitle="Insights"
            />
            <CategoryProductList subTypes={tabletopCategory.subTypes} />
        </div>
    );
};

export default TableTopInstruments;
