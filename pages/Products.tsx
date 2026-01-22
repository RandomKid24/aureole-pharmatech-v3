
import React, { useEffect } from 'react';
import ProductsHero from './Products/sections/ProductsHero';
import CategoryMarquees from './Products/sections/CategoryMarquees';
import ProductsContact from './Products/sections/ProductsContact';

const Products: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-white">
            <ProductsHero />
            <CategoryMarquees />
            <ProductsContact />
        </div>
    );
};

export default Products;
