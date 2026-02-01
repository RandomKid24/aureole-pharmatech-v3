
import React, { useState, useEffect } from 'react';
import {
    ShieldCheck, Database, Layers, CheckCircle2, Cpu, PlusCircle,
    Network, Monitor, AlertTriangle, Lock, Key, Activity,
    Smartphone, Fingerprint, Box, Lightbulb, Wind, Droplets,
    Columns, Move, FileCheck, Smartphone as Phone, Bell,
    HeartPulse, Microscope, FlaskConical, Dna, Settings, Snowflake, Gauge
} from 'lucide-react';

interface ProductTabsProps {
    product: any;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
    const getIconForItem = (text: string, defaultIcon: React.ReactNode) => {
        const lowerText = text.toLowerCase();

        // Local Image Icons Mapping
        const iconMapping: Record<string, string> = {
            '21 cfr': '21-cfr-part-11-compliance.jpeg',
            'compliance': '21-cfr-part-11-compliance.jpeg',
            'mobile alert': 'mobile-alert-system.jpeg',
            'door access': 'door-access-system.jpeg',
            'touch screen': 'touch-screen-display.jpeg',
            'hmi': 'touch-screen-display.jpeg',
            'ethernet': 'ethernet-communication.jpeg',
            'refrigeration system': 'standby-refrigeration-system.jpeg',
            'humidity system': 'standby-humidity-system.jpeg',
            'alarm system': 'alarm-system.jpeg',
            'graphical analysis': 'graphical-analysis.jpeg',
            'real time analysis': 'real-time-analysis.jpeg',
            'audit support': 'audit-support.jpeg',
            'documentation': 'documentation.jpeg',
            'multi browser': 'multi-browser-support.jpeg',
            'connectivity': 'unlimited-equipment-connectivity.jpeg',
            'password encryption': 'password-encryption.jpeg',
            'safety': 'safety.jpeg'
        };

        for (const [key, value] of Object.entries(iconMapping)) {
            if (lowerText.includes(key)) {
                return (
                    <img
                        src={`/products/attributes-icons/${value}`}
                        alt={text}
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                );
            }
        }

        // Fallback to Lucide Icons
        if (lowerText.includes('plc') || lowerText.includes('control') || lowerText.includes('processor')) return <Cpu size={24} className="text-aureole-blue" />;
        if (lowerText.includes('ethernet') || lowerText.includes('communication') || lowerText.includes('internet')) return <Network size={24} className="text-aureole-cyan" />;
        if (lowerText.includes('database') || lowerText.includes('log') || lowerText.includes('audit')) return <Database size={24} className="text-aureole-blue" />;
        if (lowerText.includes('touch screen') || lowerText.includes('hmi') || lowerText.includes('display')) return <Monitor size={24} className="text-aureole-cyan" />;
        if (lowerText.includes('safety') || lowerText.includes('protect') || lowerText.includes('undershoot') || lowerText.includes('overshoot')) return <ShieldCheck size={24} className="text-red-500" />;
        if (lowerText.includes('alarm') || lowerText.includes('alert') || lowerText.includes('hooter')) return <Bell size={24} className="text-amber-500" />;
        if (lowerText.includes('password') || lowerText.includes('lock')) return <Lock size={24} className="text-slate-700" />;
        if (lowerText.includes('biometric') || lowerText.includes('fingerprint') || lowerText.includes('access')) return <Fingerprint size={24} className="text-aureole-blue" />;
        if (lowerText.includes('sensor') || lowerText.includes('monitoring') || lowerText.includes('actual status')) return <Activity size={24} className="text-aureole-cyan" />;
        if (lowerText.includes('gsm') || lowerText.includes('mobile') || lowerText.includes('phone')) return <Phone size={24} className="text-aureole-blue" />;
        if (lowerText.includes('lighting') || lowerText.includes('fluorescent') || lowerText.includes('viewing')) return <Lightbulb size={24} className="text-amber-400" />;
        if (lowerText.includes('air circulation') || lowerText.includes('fan') || lowerText.includes('airflow')) return <Wind size={24} className="text-slate-400" />;
        if (lowerText.includes('water') || lowerText.includes('steam') || lowerText.includes('humid')) return <Droplets size={24} className="text-blue-400" />;
        if (lowerText.includes('tray') || lowerText.includes('shelf') || lowerText.includes('perforated')) return <Columns size={24} className="text-slate-500" />;
        if (lowerText.includes('wheel') || lowerText.includes('castor') || lowerText.includes('mobility')) return <Move size={24} className="text-slate-500" />;
        if (lowerText.includes('21 cfr') || lowerText.includes('compliance') || lowerText.includes('standard')) return <FileCheck size={24} className="text-green-600" />;
        if (lowerText.includes('door') || lowerText.includes('ss') || lowerText.includes('construction')) return <Box size={24} className="text-slate-600" />;
        if (lowerText.includes('refrigeration') || lowerText.includes('cooling') || lowerText.includes('chilling')) return <Snowflake size={24} className="text-blue-500" />;
        if (lowerText.includes('extra tray')) return <Layers size={24} className="text-aureole-blue" />;
        if (lowerText.includes('tank')) return <Droplets size={24} className="text-blue-400" />;
        if (lowerText.includes('scanner')) return <Activity size={24} className="text-aureole-cyan" />;
        if (lowerText.includes('hooter')) return <Bell size={24} className="text-amber-500" />;

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
    ].filter(t => t.data && t.data.length > 0 && t.label !== "Industries we serve");

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
                        <span className={`text-[12px] font-bold tracking-wider transition-colors ${activeTab === tab.id ? 'text-aureole-slate' : 'text-slate-400'}`}>
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
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {tab.data.map((item: string, i: number) => {
                                const customImg = (text: string) => {
                                    const lowerText = text.toLowerCase();
                                    const iconMapping: Record<string, string> = {
                                        '21 cfr': '21-cfr-part-11-compliance.jpeg',
                                        'compliance': '21-cfr-part-11-compliance.jpeg',
                                        'mobile alert': 'mobile-alert-system.jpeg',
                                        'door access': 'door-access-system.jpeg',
                                        'touch screen': 'touch-screen-display.jpeg',
                                        'hmi': 'touch-screen-display.jpeg',
                                        'ethernet': 'ethernet-communication.jpeg',
                                        'refrigeration system': 'standby-refrigeration-system.jpeg',
                                        'humidity system': 'standby-humidity-system.jpeg',
                                        'alarm system': 'alarm-system.jpeg',
                                        'graphical analysis': 'graphical-analysis.jpeg',
                                        'real time analysis': 'real-time-analysis.jpeg',
                                        'audit support': 'audit-support.jpeg',
                                        'documentation': 'documentation.jpeg',
                                        'multi browser': 'multi-browser-support.jpeg',
                                        'connectivity': 'unlimited-equipment-connectivity.jpeg',
                                        'password encryption': 'password-encryption.jpeg',
                                        'safety': 'safety.jpeg',
                                        'hooter': 'hooter.png',
                                        'scanner': 'scanner.png',
                                        'extra tray': 'extra-trays.png',
                                        'trays': 'extra-trays.png',
                                        'water tank': 'water-tank.png',
                                        'steam tank': 'water-tank.png',
                                        'tank': 'water-tank.png',
                                        'inner outer door': 'inner-door.png',
                                        'door': 'inner-door.png',
                                        'master & standby sensor': 'master-sensor.png',
                                        'stand by sensor': 'master-sensor.png',
                                        'sensor': 'master-sensor.png',
                                        'low water': 'low-water.png',
                                        'ss door': 'inner-door.png',
                                        'two door': 'inner-door.png',
                                        'full door': 'inner-door.png',
                                        'viewing window': 'inner-door.png',
                                        'heavy duty refrigeration': 'standby-refrigeration-system.jpeg',
                                        'uv light': 'safety.jpeg',
                                        'person trap': 'alarm-system.jpeg',
                                        'split type': 'standby-refrigeration-system.jpeg',
                                        'racks': 'extra-trays.png'
                                    };

                                    // Check longer matches first for accuracy
                                    const sortedKeys = Object.keys(iconMapping).sort((a, b) => b.length - a.length);
                                    for (const key of sortedKeys) {
                                        if (lowerText.includes(key)) return iconMapping[key];
                                    }
                                    return null;
                                };

                                const imgName = customImg(item);

                                if (imgName) {
                                    return (
                                        <div key={i} className="group flex flex-col items-center justify-center transition-all duration-300 hover:scale-105">
                                            <img
                                                src={`/products/attributes-icons/${imgName}`}
                                                alt={item}
                                                className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
                                            />
                                        </div>
                                    );
                                }

                                return (
                                    <div key={i} className="group flex flex-col items-center text-center p-2 transition-all duration-300">
                                        <div className="w-16 h-16 flex items-center justify-center mb-2 text-aureole-blue group-hover:scale-110 transition-transform">
                                            {getIconForItem(item, tab.itemIcon)}
                                        </div>
                                        <span className="text-[11px] uppercase font-bold text-slate-500 tracking-tighter leading-none max-w-[120px]">
                                            {item}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductTabs;
