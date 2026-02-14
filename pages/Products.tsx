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
            <SEO 
                title="Stability Testing Equipments, Table Top Instruments, Laboratory Furniture"
                description="Aureole Pharma Tech, Our manufacturing facilities are equipped with precision engineering systems to ensure global compliance and quality standards for pharmaceutical laboratory equipment."
                canonical="https://www.aureolepharmatech.com/products/"
            />
            <ProductsHero />
            <CategoryMarquees />
            <ProductsContact />
        </div>
    );
};

export default Products;
