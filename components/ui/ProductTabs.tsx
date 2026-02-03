
import React, { useState, useEffect } from 'react';
import {
    ShieldCheck, Database, Layers, CheckCircle2, Cpu, PlusCircle,
    Network, Monitor, AlertTriangle, Lock, Key, Activity,
    Smartphone, Fingerprint, Box, Lightbulb, Wind, Droplets,
    Columns, Move, FileCheck, Smartphone as Phone, Bell,
    HeartPulse, Microscope, FlaskConical, Dna, Settings, Snowflake, Gauge, Clock, Maximize
} from 'lucide-react';

interface ProductTabsProps {
    product: any;
    productName?: string;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product, productName }) => {
    const isTableTop = [
        "Ultrasonic Bath", "Water Bath", "Steam Bath",
        "Oil Bath", "Dry Bath", "Air Sampler"
    ].includes(productName || "");

    const isCleanroom = [
        "Static Pass Box", "Dynamic Pass Box", "Laminar Air Flow",
        "Sampling / Dispensing Booth", "Biosafety Cabinet"
    ].includes(productName || "");

    const getIconForItem = (text: string, defaultIcon: React.ReactNode, iconSize: number = 32) => {
        const lowerText = text.toLowerCase();

        // Cleanroom Equipment Specific Icons
        if (lowerText.includes('hepa') || lowerText.includes('ulpa') || lowerText.includes('filtration') || lowerText.includes('filter')) return <Wind size={iconSize} />;
        if (lowerText.includes('laminar') || lowerText.includes('airflow') || lowerText.includes('downflow')) return <Wind size={iconSize} />;
        if (lowerText.includes('iso 5') || lowerText.includes('iso 7') || lowerText.includes('class 100')) return <ShieldCheck size={iconSize} />;
        if (lowerText.includes('gmp') || lowerText.includes('who') || lowerText.includes('usfda')) return <FileCheck size={iconSize} />;
        if (lowerText.includes('ss304') || lowerText.includes('ss316') || lowerText.includes('stainless steel')) return <Box size={iconSize} />;
        if (lowerText.includes('interlock') || lowerText.includes('door')) return <Lock size={iconSize} />;
        if (lowerText.includes('uv') || lowerText.includes('sterilization')) return <Lightbulb size={iconSize} />;
        if (lowerText.includes('magnehelic') || lowerText.includes('pressure')) return <Gauge size={iconSize} />;
        if (lowerText.includes('velocity') || lowerText.includes('uniform')) return <Activity size={iconSize} />;
        if (lowerText.includes('containment') || lowerText.includes('protection')) return <ShieldCheck size={iconSize} />;
        if (lowerText.includes('anti-static') || lowerText.includes('work surface')) return <Box size={iconSize} />;
        if (lowerText.includes('ergonomic') || lowerText.includes('operator')) return <Activity size={iconSize} />;
        if (lowerText.includes('exhaust') || lowerText.includes('ducting')) return <Wind size={iconSize} />;
        if (lowerText.includes('validation') || lowerText.includes('dq/iq/oq')) return <FileCheck size={iconSize} />;
        if (lowerText.includes('data logging') || lowerText.includes('monitoring')) return <Database size={iconSize} />;
        if (lowerText.includes('remote') || lowerText.includes('connectivity')) return <Network size={iconSize} />;
        if (lowerText.includes('digital') || lowerText.includes('display') || lowerText.includes('control panel')) return <Monitor size={iconSize} />;
        if (lowerText.includes('electromagnetic')) return <Cpu size={iconSize} />;
        if (lowerText.includes('blower') || lowerText.includes('fan')) return <Wind size={iconSize} />;
        if (lowerText.includes('led') || lowerText.includes('lighting')) return <Lightbulb size={iconSize} />;
        if (lowerText.includes('glass') || lowerText.includes('sash')) return <Box size={iconSize} />;
        if (lowerText.includes('alarm') || lowerText.includes('alert')) return <Bell size={iconSize} />;
        if (lowerText.includes('timer') || lowerText.includes('programmable')) return <Clock size={iconSize} />;
        if (lowerText.includes('nsf') || lowerText.includes('en standard')) return <FileCheck size={iconSize} />;
        if (lowerText.includes('biosafety') || lowerText.includes('biological')) return <ShieldCheck size={iconSize} />;
        if (lowerText.includes('custom size') || lowerText.includes('custom dimension')) return <Maximize size={iconSize} />;

        // Fallback to Lucide Icons
        if (lowerText.includes('plc') || lowerText.includes('control') || lowerText.includes('processor')) return <Cpu size={iconSize} />;
        if (lowerText.includes('ethernet') || lowerText.includes('communication') || lowerText.includes('internet')) return <Network size={iconSize} />;
        if (lowerText.includes('database') || lowerText.includes('log') || lowerText.includes('audit')) return <Database size={iconSize} />;
        if (lowerText.includes('touch screen') || lowerText.includes('hmi') || lowerText.includes('display')) return <Monitor size={iconSize} />;
        if (lowerText.includes('safety') || lowerText.includes('protect') || lowerText.includes('undershoot') || lowerText.includes('overshoot')) return <ShieldCheck size={iconSize} />;
        if (lowerText.includes('alarm') || lowerText.includes('alert') || lowerText.includes('hooter')) return <Bell size={iconSize} />;
        if (lowerText.includes('password') || lowerText.includes('lock')) return <Lock size={iconSize} />;
        if (lowerText.includes('biometric') || lowerText.includes('fingerprint') || lowerText.includes('access')) return <Fingerprint size={iconSize} />;
        if (lowerText.includes('sensor') || lowerText.includes('monitoring') || lowerText.includes('actual status')) return <Activity size={iconSize} />;
        if (lowerText.includes('gsm') || lowerText.includes('mobile') || lowerText.includes('phone')) return <Phone size={iconSize} />;
        if (lowerText.includes('lighting') || lowerText.includes('fluorescent') || lowerText.includes('viewing')) return <Lightbulb size={iconSize} />;
        if (lowerText.includes('air circulation') || lowerText.includes('fan') || lowerText.includes('airflow')) return <Wind size={iconSize} />;
        if (lowerText.includes('water') || lowerText.includes('steam') || lowerText.includes('humid')) return <Droplets size={iconSize} />;
        if (lowerText.includes('tray') || lowerText.includes('shelf') || lowerText.includes('perforated')) return <Columns size={iconSize} />;
        if (lowerText.includes('wheel') || lowerText.includes('castor') || lowerText.includes('mobility')) return <Move size={iconSize} />;
        if (lowerText.includes('21 cfr') || lowerText.includes('compliance') || lowerText.includes('standard')) return <FileCheck size={iconSize} />;
        if (lowerText.includes('door') || lowerText.includes('ss') || lowerText.includes('construction')) return <Box size={iconSize} />;
        if (lowerText.includes('refrigeration') || lowerText.includes('cooling') || lowerText.includes('chilling')) return <Snowflake size={iconSize} />;
        if (lowerText.includes('extra tray')) return <Layers size={iconSize} />;
        if (lowerText.includes('tank')) return <Droplets size={iconSize} />;
        if (lowerText.includes('scanner')) return <Activity size={iconSize} />;
        if (lowerText.includes('hooter')) return <Bell size={iconSize} />;

        // Industry Specific Icons
        if (lowerText.includes('healthcare') || lowerText.includes('hospital') || lowerText.includes('surgeon')) return <HeartPulse size={iconSize} />;
        if (lowerText.includes('pharma')) return <Microscope size={iconSize} />;
        if (lowerText.includes('institute') || lowerText.includes('lab') || lowerText.includes('research')) return <FlaskConical size={iconSize} />;
        if (lowerText.includes('mechanical') || lowerText.includes('factory') || lowerText.includes('production')) return <Settings size={iconSize} />;
        if (lowerText.includes('jewelry') || lowerText.includes('jewel')) return <Dna size={iconSize} />;
        if (lowerText.includes('food')) return <Droplets size={iconSize} />;

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
                        <div className={`grid gap-6 ${(isTableTop || isCleanroom) ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'}`}>
                            {tab.data.map((item: string, i: number) => {
                                // Special Compact Layout for Table Top & Cleanroom Products
                                if (isTableTop || isCleanroom) {
                                    return (
                                        <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-slate-100 bg-slate-50/30 hover:bg-white hover:border-aureole-cyan/30 hover:shadow-sm transition-all group">
                                            <div className="text-aureole-blue shrink-0 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                                                {getIconForItem(item, tab.itemIcon, 20)}
                                            </div>
                                            <span className="text-[12px] font-bold text-slate-600 leading-tight group-hover:text-aureole-slate transition-colors">
                                                {item}
                                            </span>
                                        </div>
                                    );
                                }

                                // Standard Layout for other products (with Custom Images)
                                const customImg = (text: string) => {
                                    const lowerText = text.toLowerCase();
                                    const iconMapping: Record<string, string> = {
                                        '21 cfr': '21 CFR part 11 Compliance.png',
                                        'compliance': '21 CFR part 11 Compliance.png',
                                        'mobile alert': 'Mobile Alert System.png',
                                        'door access': 'Door Access System.png',
                                        'biometric': 'Door Access System (Numeric_Biometric).png',
                                        'touch screen': 'Touch Screen Display.png',
                                        'hmi': '7 inch Touch Screen HMI.png',
                                        'ethernet': 'Ethernet Communication.png',
                                        'refrigeration system': 'Heavy Duty refrigeration system.png',
                                        'refrigeration': 'Heavy Duty refrigeration system.png',
                                        'humidity system': 'Standby Humidity System.png',
                                        'alarm system': 'Alarm System.png',
                                        'graphical analysis': 'Graphical Analysis.png',
                                        'real time analysis': 'Real Time Analysis.png',
                                        'audit support': 'Audit Support.png',
                                        'documentation': 'Documentation.png',
                                        'multi browser': 'Multi Browser Support.png',
                                        'connectivity': 'Unlimited Equipment Connectivity.png',
                                        'password encryption': 'Password Encryption.png',
                                        'safety': 'Sefety.png',
                                        'hooter': 'Hooter System.png',
                                        'scanner': 'Scanner 8 pt. temperature & humidity sensor.png',
                                        'extra tray': 'Extra Trays.png',
                                        'trays': 'Racks with trays.png',
                                        'water tank': 'Water & steam tank.png',
                                        'steam tank': 'Water & steam tank.png',
                                        'tank': 'Water & steam tank.png',
                                        'inner outer door': 'Inner outer door with proof silicon.png',
                                        'door': 'Inner outer door with proof silicon.png',
                                        'master & standby sensor': 'Master & stand by sensor.png',
                                        'stand by sensor': 'Master & stand by sensor.png',
                                        'sensor': 'Master & stand by sensor.png',
                                        'low water': 'Low water indication.png',
                                        'ss door': 'SS Door with gasket.png',
                                        'two door': 'Two Door - Full view inner glass door & outer SS door & leakage proof silicon rubber gasket.png',
                                        'full door': 'Full Door is of toughened glass.png',
                                        'viewing window': 'Viewing window with toughened glass.png',
                                        'heavy duty': 'Heavy Duty refrigeration system.png',
                                        'uv light': 'UV lights get switched off automatically once the door is opened.png',
                                        'person trap': 'Person trap alarm.png',
                                        'split type': 'Split type refrigeration system.png',
                                        'racks': 'Racks with trays.png',
                                        'insulation': 'Insulation of 60 mm.png',
                                        'lux meter': 'LUX Meter.png',
                                        'printing': 'Printing facility.png',
                                        'vacuum gauge': 'Vacuum Gauge (for Vacuum Oven).png',
                                        'vacuum pump': 'Vacuum Pump (for Vacuum Oven).png',
                                        'mirror finish': 'Inner Mirror finish & outer Matt finish.png',
                                        'uniform light': 'Uniform light distribution.png',
                                        'high temperature': 'High temperature cut-off Settable thermostat.png',
                                    };

                                    const sortedKeys = Object.keys(iconMapping).sort((a, b) => b.length - a.length);
                                    for (const key of sortedKeys) {
                                        if (lowerText.includes(key)) return iconMapping[key];
                                    }
                                    return null;
                                };

                                const imgName = customImg(item);

                                if (imgName) {
                                    return (
                                        <div key={i} className="group flex flex-col items-center text-center transition-all duration-300">
                                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-105">
                                                <img
                                                    src={`/products/attributes-icons/${imgName}`}
                                                    alt={item}
                                                    className="w-full h-full object-contain drop-shadow-sm"
                                                />
                                            </div>
                                            <span className="text-[10px] sm:text-[11px] uppercase font-bold text-slate-600 tracking-tight leading-tight max-w-[140px] px-2 group-hover:text-aureole-blue transition-colors">
                                                {item}
                                            </span>
                                        </div>
                                    );
                                }

                                return (
                                    <div key={i} className="group flex flex-col items-center text-center transition-all duration-300">
                                        <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-slate-200 rounded-xl flex items-center justify-center mb-3 bg-slate-50/50 group-hover:bg-white group-hover:border-aureole-cyan group-hover:shadow-md transition-all">
                                            <div className="text-aureole-blue group-hover:scale-110 transition-transform duration-300">
                                                {getIconForItem(item, tab.itemIcon, 32)}
                                            </div>
                                        </div>
                                        <span className="text-[10px] sm:text-[11px] uppercase font-bold text-slate-500 tracking-tighter leading-tight max-w-[140px] px-2 group-hover:text-aureole-slate transition-colors">
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
