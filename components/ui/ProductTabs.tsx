
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Database, Layers, CheckCircle2, Cpu, PlusCircle } from 'lucide-react';

interface ProductTabsProps {
    product: any;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
    const tabs = [
        { id: 'features', label: product.keyFeaturesHeading || "Key Features", icon: <ShieldCheck size={14} />, data: product.keyFeatures, itemIcon: <CheckCircle2 size={12} className="text-aureole-cyan" /> },
        { id: 'attributes', label: product.regularAttributesHeading || "Regular Attributes", icon: <Database size={14} />, data: product.regularAttributes, itemIcon: <Cpu size={12} className="text-aureole-blue" /> },
        { id: 'addons', label: "Add-on Options", icon: <Layers size={14} />, data: product.addOnsAttributes, itemIcon: <PlusCircle size={12} className="text-aureole-cyan" /> }
    ].filter(t => t.data && t.data.length > 0);

    const [activeTab, setActiveTab] = useState(tabs[0]?.id);

    useEffect(() => {
        if (tabs.length > 0) {
            setActiveTab(tabs[0].id);
        }
    }, [product]);

    if (tabs.length === 0) return null;

    return (
        <div className="border border-slate-200 bg-white shadow-sm">
            <div className="flex border-b border-slate-200 bg-slate-50/50 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-8 py-5 flex items-center gap-3 transition-all relative border-r border-slate-200 min-w-max ${activeTab === tab.id ? 'bg-white' : 'hover:bg-white/50'}`}
                    >
                        <div className={`transition-colors ${activeTab === tab.id ? 'text-aureole-cyan' : 'text-slate-400'}`}>
                            {tab.icon}
                        </div>
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${activeTab === tab.id ? 'text-aureole-slate' : 'text-slate-400'}`}>
                            {tab.label}
                        </span>
                        {activeTab === tab.id && (
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-aureole-cyan" />
                        )}
                    </button>
                ))}
            </div>

            <div className="p-8">
                {tabs.map((tab) => (
                    <div key={tab.id} className={`${activeTab === tab.id ? 'block animate-in fade-in duration-500' : 'hidden'}`}>
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                            {tab.data.map((item: string, i: number) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110">
                                        {tab.itemIcon}
                                    </div>
                                    <span className="text-[11px] font-bold text-aureole-slate uppercase tracking-tight leading-relaxed group-hover:text-aureole-blue transition-colors">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductTabs;
