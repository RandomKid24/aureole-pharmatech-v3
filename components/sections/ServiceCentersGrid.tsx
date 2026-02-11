
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { PRODUCT_CITY_MAPPING, PRODUCTS } from '../../data/cityWiseProducts';

interface ServiceCentersGridProps {
    productName: string;
}

const ServiceCentersGrid: React.FC<ServiceCentersGridProps> = ({ productName }) => {
    // Find the slugPart for this product
    const productInfo = PRODUCTS.find(p => p.name === productName);
    const productCities = PRODUCT_CITY_MAPPING[productName] || [];
    
    if (!productInfo || productCities.length === 0) return null;

    return (
        <section className="py-20 bg-transparent border-t border-slate-200/50">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="mb-12">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-aureole-blue mb-4">Regional Presence</p>
                    <h2 className="text-4xl lg:text-5xl font-[950] text-aureole-slate uppercase tracking-tighter mb-4">
                        Service <span className="text-aureole-blue">Centers</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl text-sm lg:text-base font-medium leading-relaxed">
                        Aureole PharmaTech maintains a robust network of service centers and support hubs across India and internationally to ensure seamless operation of your {productName}.
                    </p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-3 border-t border-slate-200/50 pt-8">
                    {productCities.map((city) => (
                        <Link
                            key={city}
                            to={`/${productInfo.slugPart}-manufacturers-and-suppliers-in-${city.toLowerCase()}`}
                            className="group flex items-center justify-between border-b border-slate-100/50 pb-2 transition-all duration-300 hover:border-aureole-blue"
                        >
                            <span className="text-[10px] font-black uppercase tracking-wider text-aureole-slate group-hover:text-aureole-blue transition-colors">
                                {city}
                            </span>
                            <div className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-aureole-blue transition-all duration-300" />
                        </Link>
                    ))}
                </div>


            </div>
        </section>
    );
};


export default ServiceCentersGrid;
