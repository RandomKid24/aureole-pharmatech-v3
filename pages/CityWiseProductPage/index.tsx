import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PRODUCT_DETAILS } from '../../data/products';
import SEO from '../../components/SEO';
import NotFound from '../NotFound';
import { productLd, SITE_URL } from '../../data/pageSeo';
import { cityPageContent, cityLabel } from '../../data/cityPageContent';
import { PRODUCTS, CITIES } from '../../data/cityWiseProducts';
import ProductHero from '../ProductDetail/sections/ProductHero';
import TechnicalDashboard from '../ProductDetail/sections/TechnicalDashboard';
import ProductTables from '../ProductDetail/sections/ProductTables';
import VariantSections from '../ProductDetail/sections/VariantSections';
import ProductEnquiry from '../ProductDetail/sections/ProductEnquiry';
import InfrasArchitecture from '../../components/sections/InfrasArchitecture';
import ServiceCentersGrid from '../../components/sections/ServiceCentersGrid';
import ChamberAnatomy from '../../components/sections/ChamberAnatomy';
import RelatedProducts from '../../components/sections/RelatedProducts';

const CityWiseProductPage: React.FC = () => {
    const { cityProductSlug } = useParams<{ cityProductSlug: string }>();

    // Parse slug: [product-slug-part]-manufacturers-and-suppliers-in-[city-slug]
    if (!cityProductSlug) return <Navigate to="/" />;

    let productName = "";
    let cityName = "";
    let baseProductKey = "";

    for (const prod of PRODUCTS) {
        if (cityProductSlug.startsWith(prod.slugPart)) {
            productName = prod.name;
            baseProductKey = prod.name;
            const cityPart = cityProductSlug.replace(`${prod.slugPart}-manufacturers-and-suppliers-in-`, "").replace(/\/$/, "");

            
            // Find city name case-insensitively
            const foundCity = CITIES.find(c => c.toLowerCase() === cityPart);
            if (foundCity) {
                cityName = foundCity;
                break;
            }
        }
    }

    const product = PRODUCT_DETAILS[baseProductKey];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [cityProductSlug]);


    if (!product || !cityName) {
        return <NotFound />;
    }

    const showInfras = productName === "Walk In Humidity Chamber";
    const content = cityPageContent(productName, cityName);
    // "Mumbai-2" repeats the Mumbai page, so it points search engines at Mumbai.
    const canonicalSlug = cityLabel(cityName) !== cityName ? cityProductSlug.replace(/-\d+$/, '') : cityProductSlug;

    return (
        <div className="pt-24 min-h-screen bg-transparent selection:bg-aureole-blue selection:text-white">
            <SEO
                title={content.title}
                description={content.description}
                canonical={`${SITE_URL}/${canonicalSlug}/`}
                jsonLd={[productLd(`${productName} in ${content.label}`, product.description, `${SITE_URL}/${canonicalSlug}/`, product.images || (product.image ? [product.image] : []))]}
            />
            {/* SEO specific content can be added here if needed, like a breadcrumb or custom title */}
            <div className="container mx-auto px-6 lg:px-24 mb-8">
                <nav className="flex text-xs uppercase tracking-widest text-slate-400 gap-2 items-center">
                    <Link to="/" className="hover:text-aureole-blue transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/products" className="hover:text-aureole-blue transition-colors">Products</Link>
                    <span>/</span>
                    <span className="text-aureole-blue font-bold">{productName} in {content.label}</span>
                </nav>
            </div>

            <ProductHero product={product} decodedName={`${productName} in ${content.label}`} />
            
            <TechnicalDashboard product={product} decodedName={productName} />
            {showInfras && <InfrasArchitecture />}
            {productName === "Walk In Humidity Chamber" && <ChamberAnatomy variant="humidity" />}
            {productName === "Walk In Cold Chamber" && <ChamberAnatomy variant="cold" />}
            {productName === "Walk In BOD Incubator" && <ChamberAnatomy variant="bod" />}
            
            <ProductTables product={product} productName={productName} />
            <VariantSections product={product} />
            <ServiceCentersGrid productName={productName} />
            <RelatedProducts productName={productName} includeSelf />
            <ProductEnquiry />
        </div>

    );
};

export default CityWiseProductPage;
