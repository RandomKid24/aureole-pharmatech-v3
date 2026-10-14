import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import ProductsHero from './Products/sections/ProductsHero';
import CategoryMarquees from './Products/sections/CategoryMarquees';
import ProductsContact from './Products/sections/ProductsContact';

const Products: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-transparent">
            <SEO />
            <ProductsHero />
            <CategoryMarquees />
            <ProductsContact />
        </div>
    );
};

export default Products;
