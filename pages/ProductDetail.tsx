
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCT_DETAILS } from '../data/products';
import { findValuesBySlug } from '../utils/urlUtils';
import { ArrowLeft } from 'lucide-react';
import ProductHero from './ProductDetail/sections/ProductHero';
import TechnicalDashboard from './ProductDetail/sections/TechnicalDashboard';
import ProductTables from './ProductDetail/sections/ProductTables';
import ProductEnquiry from './ProductDetail/sections/ProductEnquiry';

const ProductDetail: React.FC = () => {
    const { productName } = useParams<{ productName: string }>();
    const { product, originalName } = findValuesBySlug(productName || '', PRODUCT_DETAILS);
    const decodedName = originalName;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [decodedName]);

    if (!product) {
        return (
            <div className="pt-40 min-h-screen bg-white container mx-auto px-6 lg:px-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-[950] text-[#001529] uppercase tracking-tighter mb-8">Specification Pending.</h1>
                    <Link to="/products" className="inline-flex items-center gap-4 px-10 py-5 bg-[#001529] text-white text-[10px] font-black uppercase tracking-widest hover:bg-aureole-blue transition-all">
                        <ArrowLeft size={16} /> Back to Catalog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-white selection:bg-aureole-blue selection:text-white">
            <ProductHero product={product} decodedName={decodedName} />
            <TechnicalDashboard product={product} decodedName={decodedName} />
            <ProductTables product={product} />
            <ProductEnquiry />
        </div>
    );
};

export default ProductDetail;
