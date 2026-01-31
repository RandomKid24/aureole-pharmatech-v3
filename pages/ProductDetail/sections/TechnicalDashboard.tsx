import React from 'react';
import ProductTabs from '@/components/ui/ProductTabs';

interface TechnicalDashboardProps {
    product: any;
    decodedName: string;
}

const TechnicalDashboard: React.FC<TechnicalDashboardProps> = ({ product }) => {
    const hasAnyTabs = product.keyFeatures.length > 0 ||
        (product.regularAttributes && product.regularAttributes.length > 0) ||
        (product.addOnsAttributes && product.addOnsAttributes.length > 0);

    if (!hasAnyTabs) return null;

    return (
        <section className="bg-white">
            <div className="container mx-auto px-6 lg:px-24 py-4">
                <div className="max-w-7xl mx-auto">
                    <ProductTabs product={product} />
                </div>
            </div>
        </section>
    );
};

export default TechnicalDashboard;
