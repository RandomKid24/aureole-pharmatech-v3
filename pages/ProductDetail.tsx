
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCT_DETAILS } from '../data/products';
import { findValuesBySlug } from '../utils/urlUtils';
import { ArrowLeft } from 'lucide-react';
import ProductHero from './ProductDetail/sections/ProductHero';
import TechnicalDashboard from './ProductDetail/sections/TechnicalDashboard';
import ProductTables from './ProductDetail/sections/ProductTables';
import VariantSections from './ProductDetail/sections/VariantSections';
import ProductEnquiry from './ProductDetail/sections/ProductEnquiry';
import InfrasArchitecture from '../components/sections/InfrasArchitecture';

import CategoryHero from '../components/ui/CategoryHero';
import SSAccessoriesGrid from './ProductDetail/sections/SSAccessoriesGrid';

const ProductDetail: React.FC = () => {
    const { productName } = useParams<{ productName: string }>();
    const { product, originalName } = findValuesBySlug(productName || '', PRODUCT_DETAILS);
    const decodedName = originalName;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [decodedName]);

    if (!product) {
        return (
            <div className="pt-40 min-h-screen bg-transparent container mx-auto px-6 lg:px-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-[950] text-[#001529] uppercase tracking-tighter mb-8">Specification Pending.</h1>
                    <Link to="/products" className="inline-flex items-center gap-4 px-10 py-5 bg-[#001529] text-white text-[10px] font-black uppercase tracking-widest hover:bg-aureole-blue transition-all">
                        <ArrowLeft size={16} /> Back to Catalog
                    </Link>
                </div>
            </div>
        );
    }

    if (decodedName === "Stainless Steel Items & Accessories" || decodedName === "Modular Laboratory Furniture") {
        return (
            <div className="pt-24 min-h-screen bg-transparent">
                <CategoryHero
                    title={decodedName === "Modular Laboratory Furniture" ? "LABORATORY" : "STAINLESS"}
                    subtitle={decodedName === "Modular Laboratory Furniture" ? "FURNITURE" : "Accessories"}
                    description={product.description}
                    watermark={decodedName === "Modular Laboratory Furniture" ? "FURNITURE" : "ACCESSORIES"}
                    showAccent={false}
                />
                <SSAccessoriesGrid product={product} />
                <ProductEnquiry />
            </div>
        );
    }

    const showInfras = decodedName === "Humidity Chamber" || decodedName === "Walk In Humidity Chamber";

    return (
        <div className="pt-24 min-h-screen bg-transparent selection:bg-aureole-blue selection:text-white">
            <ProductHero product={product} decodedName={decodedName} />
            <TechnicalDashboard product={product} decodedName={decodedName} />
            {showInfras && <InfrasArchitecture />}
            <ProductTables product={product} productName={decodedName} />
            <VariantSections product={product} />
            <ProductEnquiry />
        </div>
    );
};

export default ProductDetail;
