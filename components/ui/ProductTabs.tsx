
import React, { useState, useEffect } from 'react';
import {
    ShieldCheck, Database, Layers, CheckCircle2, Cpu, PlusCircle,
    Network, Monitor, AlertTriangle, Lock, Key, Activity,
    Smartphone, Fingerprint, Box, Lightbulb, Wind, Droplets,
    Columns, Move, FileCheck, Smartphone as Phone, Bell,
    HeartPulse, Microscope, FlaskConical, Dna, Settings
} from 'lucide-react';

interface ProductTabsProps {
    product: any;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
    const getIconForItem = (text: string, defaultIcon: React.ReactNode) => {
        const lowerText = text.toLowerCase();
        if (lowerText.includes('plc') || lowerText.includes('control') || lowerText.includes('processor')) return <Cpu size={14} className="text-aureole-blue" />;
        if (lowerText.includes('ethernet') || lowerText.includes('communication') || lowerText.includes('internet')) return <Network size={14} className="text-aureole-cyan" />;
        if (lowerText.includes('database') || lowerText.includes('log') || lowerText.includes('audit')) return <Database size={14} className="text-aureole-blue" />;
        if (lowerText.includes('touch screen') || lowerText.includes('hmi') || lowerText.includes('display')) return <Monitor size={14} className="text-aureole-cyan" />;
        if (lowerText.includes('safety') || lowerText.includes('protect') || lowerText.includes('undershoot') || lowerText.includes('overshoot')) return <ShieldCheck size={14} className="text-red-500" />;
        if (lowerText.includes('alarm') || lowerText.includes('alert') || lowerText.includes('hooter')) return <Bell size={14} className="text-amber-500" />;
        if (lowerText.includes('password') || lowerText.includes('lock')) return <Lock size={14} className="text-slate-700" />;
        if (lowerText.includes('biometric') || lowerText.includes('fingerprint')) return <Fingerprint size={14} className="text-aureole-blue" />;
        if (lowerText.includes('sensor') || lowerText.includes('monitoring') || lowerText.includes('actual status')) return <Activity size={14} className="text-aureole-cyan" />;
        if (lowerText.includes('gsm') || lowerText.includes('mobile') || lowerText.includes('phone')) return <Phone size={14} className="text-aureole-blue" />;
        if (lowerText.includes('lighting') || lowerText.includes('fluorescent') || lowerText.includes('viewing')) return <Lightbulb size={14} className="text-amber-400" />;
        if (lowerText.includes('air circulation') || lowerText.includes('fan') || lowerText.includes('airflow')) return <Wind size={14} className="text-slate-400" />;
        if (lowerText.includes('water') || lowerText.includes('steam') || lowerText.includes('humid')) return <Droplets size={14} className="text-blue-400" />;
        if (lowerText.includes('tray') || lowerText.includes('shelf') || lowerText.includes('perforated')) return <Columns size={14} className="text-slate-500" />;
        if (lowerText.includes('wheel') || lowerText.includes('castor') || lowerText.includes('mobility')) return <Move size={14} className="text-slate-500" />;
        if (lowerText.includes('21 cfr') || lowerText.includes('compliance') || lowerText.includes('standard')) return <FileCheck size={14} className="text-green-600" />;
        if (lowerText.includes('door') || lowerText.includes('ss') || lowerText.includes('construction')) return <Box size={14} className="text-slate-600" />;

        // Industry Specific Icons
        if (lowerText.includes('healthcare') || lowerText.includes('hospital') || lowerText.includes('surgeon')) return <HeartPulse size={14} className="text-red-500" />;
        if (lowerText.includes('pharma')) return <Microscope size={14} className="text-aureole-blue" />;
        if (lowerText.includes('institute') || lowerText.includes('lab') || lowerText.includes('research')) return <FlaskConical size={14} className="text-aureole-cyan" />;
        if (lowerText.includes('mechanical') || lowerText.includes('factory') || lowerText.includes('production')) return <Settings size={14} className="text-slate-500" />;
        if (lowerText.includes('jewelry') || lowerText.includes('jewel')) return <Dna size={14} className="text-amber-500" />; // Dna looks a bit like a chain/detail
        if (lowerText.includes('food')) return <Droplets size={14} className="text-blue-400" />;

        return defaultIcon;
    };

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
                                        {getIconForItem(item, tab.itemIcon)}
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
