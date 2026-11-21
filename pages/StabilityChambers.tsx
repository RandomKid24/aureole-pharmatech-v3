import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import DirectAnswers from '../components/DirectAnswers';
import { PRODUCT_CATALOG } from '../data/products';
import CategoryHero from '../components/ui/CategoryHero';
import CategoryProductList from '../components/ui/CategoryProductList';

const StabilityChambers: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stabilityCategory = PRODUCT_CATALOG.find(cat => cat.id === 'stability');

    if (!stabilityCategory) return null;

    return (
        <div className="pt-24 min-h-screen bg-transparent">
            <SEO />
            <CategoryHero
                title="precision ENVIRONMENTAL"
                subtitle={<span className="gt">CONTROL</span>}
                watermark="STABILITY"
                image="/assets/sketches/stablitiy-chamber-hero-sketech.webp"
                showAccent={false}
            />
            <CategoryProductList subTypes={stabilityCategory.subTypes} />
            <DirectAnswers />
        </div>
    );
};

export default StabilityChambers;
