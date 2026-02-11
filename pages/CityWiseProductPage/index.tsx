
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PRODUCT_DETAILS } from '../../data/products';
import { PRODUCTS, CITIES } from '../../data/cityWiseProducts';
import ProductHero from '../ProductDetail/sections/ProductHero';
import TechnicalDashboard from '../ProductDetail/sections/TechnicalDashboard';
import ProductTables from '../ProductDetail/sections/ProductTables';
import VariantSections from '../ProductDetail/sections/VariantSections';
import ProductEnquiry from '../ProductDetail/sections/ProductEnquiry';
import InfrasArchitecture from '../../components/sections/InfrasArchitecture';
import ServiceCentersGrid from '../../components/sections/ServiceCentersGrid';
import { MapPin } from 'lucide-react';

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
        if (productName && cityName) {
            document.title = `${productName} Manufacturers and Suppliers in ${cityName} | Aureole PharmaTech`;
        }
    }, [productName, cityName]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [cityProductSlug]);

    if (!product || !cityName) {
        return <Navigate to="/products" />;
    }

    const showInfras = productName === "Walk In Humidity Chamber";

    return (
        <div className="pt-24 min-h-screen bg-transparent selection:bg-aureole-blue selection:text-white">
            {/* SEO specific content can be added here if needed, like a breadcrumb or custom title */}
            <div className="container mx-auto px-6 lg:px-24 mb-8">
                <nav className="flex text-xs uppercase tracking-widest text-slate-400 gap-2 items-center">
                    <Link to="/" className="hover:text-aureole-blue transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/products" className="hover:text-aureole-blue transition-colors">Products</Link>
                    <span>/</span>
                    <span className="text-aureole-blue font-bold">{productName} in {cityName}</span>
                </nav>
            </div>

            <ProductHero product={product} decodedName={`${productName} in ${cityName}`} />
            
            <TechnicalDashboard product={product} decodedName={productName} />
            {showInfras && <InfrasArchitecture />}
            
            {/* Service Centers Section */}
            <section className="py-20 bg-transparent border-t border-slate-200/50">
                <div className="container mx-auto px-6 lg:px-24">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-8">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-aureole-blue mb-4">Local Logistics & Support</p>
                        <h2 className="text-3xl lg:text-4xl font-[950] text-aureole-slate uppercase tracking-tighter mb-4 leading-none">
                            Service Centers in <Link to={`/${cityProductSlug}`} className="text-aureole-blue hover:underline decoration-4 underline-offset-4 transition-all">{cityName}</Link>
                        </h2>
                        <p className="text-slate-500 text-xs lg:text-sm font-medium leading-relaxed max-w-2xl mb-6">
                            Aureole PharmaTech provides comprehensive support and maintenance services for {productName} across major industrial hubs in {cityName}.
                        </p>
                        <div className="flex items-center gap-3 py-2 px-6 bg-white/50 backdrop-blur-sm border border-slate-200/50 shadow-sm">
                            <MapPin className="text-aureole-blue" size={16} strokeWidth={2} />
                            <span className="text-[9px] font-black uppercase tracking-widest text-aureole-slate">{cityName} Operational Hub</span>
                        </div>
                    </div>
                </div>


            </section>


            <ProductTables product={product} productName={productName} />
            <VariantSections product={product} />
            <ServiceCentersGrid productName={productName} />
            <ProductEnquiry />
        </div>

    );
};

export default CityWiseProductPage;
