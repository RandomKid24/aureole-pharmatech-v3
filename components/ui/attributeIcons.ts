// Maps an attribute / add-on label (e.g. "Person trap alarm") to its illustration in public/products/attributes-icons/.
// Shared by ProductTabs (compact products) and ProductFeatureScroll (stability products).

// Products that use the compact tab layout instead of the scroll-driven section.
export const COMPACT_LAYOUT_PRODUCTS = [
    "Ultrasonic Bath", "Water Bath", "Steam Bath", "Oil Bath", "Dry Bath", "Air Sampler",
    "Pass Box", "Laminar Air Flow", "Sampling / Dispensing Booth", "Biosafety Cabinet",
];

export const attributeIconFile = (text: string): string | null => {
    const lowerText = text.toLowerCase();
    const iconMapping: Record<string, string> = {
        '21 cfr': '21 CFR part 11 Compliance.png',
        'compliance': '21 CFR part 11 Compliance.png',
        'mobile alert': 'Mobile Alert System.png',
        'door access system (numeric/biometric)': 'Door Access System (Numeric_Biometric).png',
        'door access system (numeric)': 'Door Access System (Numeric).png',
        'door access system (biometric)': 'Door Access System (Numeric_Biometric).png',
        'door access': 'Door Access System.png',
        'biometric': 'Door Access System (Numeric_Biometric).png',
        'touch screen display': 'Touch Screen Display.png',
        '7 inch touch screen hmi': '7 inch Touch Screen HMI.png',
        '7" touch screen hmi': '7 inch Touch Screen HMI.png',
        'touch screen hmi': '7 inch Touch Screen HMI.png',
        'touch screen': 'Touch Screen Display.png',
        'hmi': '7 inch Touch Screen HMI.png',
        'ethernet': 'Ethernet Communication.png',
        'master & stand by refrigeration/ humidity system': 'Master & stand by refrigeration humidity system.png',
        'master & stand by refrigeration humidity system': 'Master & stand by refrigeration humidity system.png',
        'master & stand by refrigeration system': 'Standby Refrigeration System (for BOD Only).png',
        'master & stand by refrigeration': 'Standby Refrigeration System (for BOD Only).png',
        'split type refrigeration system': 'Split type refrigeration system.png',
        'split type refrigeration': 'Split type refrigeration system.png',
        'split type': 'Split type refrigeration system.png',
        'heavy duty refrigeration system': 'Heavy Duty refrigeration system.png',
        'heavy duty refrigeration': 'Heavy Duty refrigeration system.png',
        'refrigeration system': 'Heavy Duty refrigeration system.png',
        'refrigeration': 'Heavy Duty refrigeration system.png',
        'standby refrigeration system (for bod only)': 'Standby Refrigeration System (for BOD Only).png',
        'standby refrigeration & steam generation system': 'Standby Refrigeration & Steam Generation System.png',
        'standby refrigeration and steam generation system': 'Standby Refrigeration & Steam Generation System.png',
        'refrigeration & steam generation system': 'Standby Refrigeration & Steam Generation System.png',
        'refrigeration and steam generation system': 'Standby Refrigeration & Steam Generation System.png',
        'refrigeration & steam generation': 'Standby Refrigeration & Steam Generation System.png',
        'refrigeration and steam generation': 'Standby Refrigeration & Steam Generation System.png',
        'steam generation system': 'Standby Refrigeration & Steam Generation System.png',
        'steam generation': 'Standby Refrigeration & Steam Generation System.png',
        'standby humidity system': 'Standby Humidity System.png',
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
        'scanner : 4 pt': 'Scanner 4 pt. temperature sensor.png',
        'scanner 4 pt': 'Scanner 4 pt. temperature sensor.png',
        'scanner : 8 pt': 'Scanner 8 pt. temperature & humidity sensor.png',
        'scanner 8 pt': 'Scanner 8 pt. temperature & humidity sensor.png',
        'scanner': 'Scanner 8 pt. temperature & humidity sensor.png',
        'extra tray': 'Extra Trays.png',
        'trays': 'Racks with trays.png',
        'water tank': 'Water & steam tank.png',
        'steam tank': 'Water & steam tank.png',
        'tank': 'Water & steam tank.png',
        'inner outer door': 'Inner outer door with proof silicon.webp',
        'door': 'Inner outer door with proof silicon.webp',
        'master & standby sensor': 'Master & stand by sensor.png',
        'master & stand by sensor full door': 'Master & stand by sensor full door of toughened glass.png',
        'master & stand by sensor': 'Master & stand by sensor.png',
        'stand by sensor': 'Master & stand by sensor.png',
        'sensor': 'Master & stand by sensor.png',
        'low water indication': 'Low water indication.png',
        'low water indicator': 'Low water indicator.png',
        'low water': 'Low water indication.png',
        'ss door with gasket': 'SS Door with gasket.png',
        'ss door': 'SS Door with gasket.png',
        'two door - full view inner glass door & outer ss door & leakage proof silicon rubber gasket': 'Two Door - Full view inner glass door & outer SS door & leakage proof silicon rubber gasket.png',
        'two door': 'Two Door - Full view inner glass door & outer SS door & leakage proof silicon rubber gasket.png',
        'full door is of toughened glass': 'Full Door is of toughened glass.png',
        'full door': 'Full Door is of toughened glass.png',
        'viewing window with toughened glass': 'Viewing window with toughened glass.png',
        'viewing window': 'Viewing window with toughened glass.png',
        'heavy duty': 'Heavy Duty refrigeration system.png',
        'uv light': 'UV lights get switched off automatically once the door is opened.png',
        'person trap': 'Person trap alarm.png',
        'racks': 'Racks with trays.png',
        'insulation': 'Insulation of 60 mm.png',
        'lux meter': 'LUX Meter.png',
        'printing': 'Printing facility.png',
        'vacuum gauge': 'Vacuum Gauge (for Vacuum Oven).png',
        'vacuum pump': 'Vacuum Pump (for Vacuum Oven).png',
        'mirror finish': 'Inner Mirror finish & outer Matt finish.png',
        'uniform light': 'Uniform light distribution.png',
        'high temperature': 'High temperature cut-off Settable thermostat.png',
        'lights automatically shut off': 'Lights automatically shut off after specific exposure level.png',
        'test the sample': 'Test the sample on Fluorescent light or U. V. lights.png',
        'uv meter': 'UV Meter.png',
    };


    const sortedKeys = Object.keys(iconMapping).sort((a, b) => b.length - a.length);
    for (const key of sortedKeys) {
        if (lowerText.includes(key)) return iconMapping[key];
    }
    return null;
};

/** URL of the webp illustration for an item, or null when none exists. */
export const attributeIconUrl = (text: string): string | null => {
    const file = attributeIconFile(text);
    return file ? `/products/attributes-icons/${file.replace(/\.png$/i, '.webp')}` : null;
};
