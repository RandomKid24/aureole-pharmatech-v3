import { ProductDetail } from '../types';

export const bodIncubator: ProductDetail = {
    description: "BOD Incubator, which stands for Bio-Oxygen Demand Incubator, serves the critical function of maintaining precise temperature control for various applications such as tissue culture growth tests, storage of bacterial cultures, and incubation processes that demand a high degree of temperature accuracy.\n\nAureole Pharma Tech BOD Incubators are renowned for their ability to provide exceptionally accurate and uniform temperature conditions within the chamber. Whether it’s nurturing delicate tissue cultures or ensuring the stable storage of bacterial cultures, these incubators offer the reliability and precision required for scientific and research purposes.",
    keyFeatures: [],
    specifications: [
        { parameter: "Temperature Range", details: "20°C to 60°C" },
        { parameter: "Accuracy", details: "± 0.2°C" },
        { parameter: "Uniformity", details: "± 1.0°C" },
        { parameter: "Power Supply", details: "Single Phase, 230V 50Hz" }
    ],
    models: [],
    regularAttributes: [
        "Two doors - Full view inner glass door & Outer SS door with viewing window, and leakage proof silicon rubber gasket",
        "Master & stand by sensor",
        "Doubled walled with PUF Insulations of 60 mm with 40kg density",
        "SS304 or SS316 INNER & Exterior either SS 304 or GI Powder coated",
        "Chamber Motor for forced air circulation to maintain uniform Temperature",
        "Heavy Duty stainless steel perforated trays with laser cutting perforation for efficient circulation",
        "Every ½'' Adjustable Height for Trays",
        "Caster Wheels for easy mobility during installation cleaning Purpose",
        "U Shaped SS tabular heaters",
        "CFC Free Refrigeration System with hermetically Sealed Compressor make Emerson Copland.",
        "4.3'' Touch Screen HMI (Allen Bradley)",
        "60 mm Port hole with Silicon Rubber seal for validation purpose",
        "PLC Based control system (Allen Bradley)",
        "PLC Based auto cut off for Temperature",
        "High Speed Ethernet communication",
        "High quality Sensor for Temperature",
        "Audio visual alarm system for deviations",
        "Complete Documentation DQ, IQ, OQ, PQ With SOP & user manuals",
        "Emails alert system"
    ],
    addOnsAttributes: [
        "21 CFR part 11 compliance",
        "Stand by Refrigeration system",
        "Scanners",
        "GSM System",
        "Hooter System",
        "Password protected or Biometric door access system",
        "Extra Trays"
    ],
    image: "/products/StablilityChamber-Standalone/BODINCUBATOR.png",
    complexTable: {
        rows: [
            {
                cells: [
                    { content: "Model", rowSpan: 2, isHeader: true },
                    { content: "Capacity In Liters", rowSpan: 2, isHeader: true },
                    { content: "Interior Dimension in MM", colSpan: 3, isHeader: true },
                    { content: "Exterior Dimension in MM", colSpan: 3, isHeader: true },
                    { content: "No of Trays", rowSpan: 2, isHeader: true },
                    { content: "Power Supply", rowSpan: 2, isHeader: true }
                ]
            },
            {
                cells: [
                    { content: "Width", isHeader: true },
                    { content: "Depth", isHeader: true },
                    { content: "Height", isHeader: true },
                    { content: "Width", isHeader: true },
                    { content: "Depth", isHeader: true },
                    { content: "Height", isHeader: true }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-1.25_V**" },
                    { content: "125", align: 'center' },
                    { content: "600", align: 'center' },
                    { content: "350", align: 'center' },
                    { content: "600", align: 'center' },
                    { content: "725", align: 'center' },
                    { content: "865", align: 'center' },
                    { content: "1260", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "Single Phase 230 V", rowSpan: 6, align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-2.0_V**" },
                    { content: "200", align: 'center' },
                    { content: "660", align: 'center' },
                    { content: "450", align: 'center' },
                    { content: "700", align: 'center' },
                    { content: "785", align: 'center' },
                    { content: "965", align: 'center' },
                    { content: "1360", align: 'center' },
                    { content: "2", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-4.0_V**" },
                    { content: "400", align: 'center' },
                    { content: "700", align: 'center' },
                    { content: "650", align: 'center' },
                    { content: "900", align: 'center' },
                    { content: "825", align: 'center' },
                    { content: "1165", align: 'center' },
                    { content: "1560", align: 'center' },
                    { content: "3", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-6.0_V**" },
                    { content: "600", align: 'center' },
                    { content: "750", align: 'center' },
                    { content: "750", align: 'center' },
                    { content: "1075", align: 'center' },
                    { content: "875", align: 'center' },
                    { content: "1275", align: 'center' },
                    { content: "1735", align: 'center' },
                    { content: "3", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-8.0_V**" },
                    { content: "800", align: 'center' },
                    { content: "750", align: 'center' },
                    { content: "750", align: 'center' },
                    { content: "1425", align: 'center' },
                    { content: "875", align: 'center' },
                    { content: "1275", align: 'center' },
                    { content: "2085", align: 'center' },
                    { content: "4", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-1.0K_V**" },
                    { content: "1000", align: 'center' },
                    { content: "850", align: 'center' },
                    { content: "750", align: 'center' },
                    { content: "1525", align: 'center' },
                    { content: "975", align: 'center' },
                    { content: "1275", align: 'center' },
                    { content: "2230", align: 'center' },
                    { content: "4", align: 'center' }
                ]
            }
        ],
        remark: "Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body"
    }
};
