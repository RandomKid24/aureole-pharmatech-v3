import { ProductDetail } from '../types';

export const coldChamber: ProductDetail = {
    description: "Aureole Pharma Tech Cold Chambers are purpose-built for conducting tests, treatments, and storage of products and materials that require precise climate control. These cold chambers serve a multitude of applications across various industries, including Pharmaceutical, Chemical, Automobile, Biotechnology, Telecommunication, Electronics, Defense, Medical Equipment, Universities, Military, and Consumer Goods.\n\nOur Cold Chambers offer a reliable and technologically advanced solution for controlling temperature conditions in laboratory and industrial settings. They find extensive use in diverse industries where precise temperature control is essential for testing, treatment, and storage of products and materials.",
    keyFeatures: [],
    specifications: [
        { parameter: "Temperature Range", details: "2°C to 8°C" },
        { parameter: "Accuracy", details: "± 1°C" },
        { parameter: "Uniformity", details: "± 2°C" },
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
    image: "/products/StablilityChamber-Standalone/cold-chamber.png",
    complexTable: {
        rows: [
            {
                cells: [
                    { content: "Model", rowSpan: 2, isHeader: true },
                    { content: "Capacity\n(In Liters)", rowSpan: 2, isHeader: true },
                    { content: "Tray", colSpan: 2, isHeader: true },
                    { content: "Inner Dimension\n(W x D x H) mm", rowSpan: 2, isHeader: true },
                    { content: "Outer Dimension\n(W x D x H) mm", rowSpan: 2, isHeader: true }
                ]
            },
            {
                cells: [
                    { content: "Quantity", isHeader: true },
                    { content: "Dimension", isHeader: true }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_CC-1.25_V**" },
                    { content: "125", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "600 x 350 x 600", align: 'center' },
                    { content: "725 x 865 x 1260", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_CC-2.0_V**" },
                    { content: "200", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "660 x 450 x 700", align: 'center' },
                    { content: "785 x 965 x 1360", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_CC-4.0_V**" },
                    { content: "400", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "700 x 650 x 900", align: 'center' },
                    { content: "825 x 1165 x 1560", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_CC-6.0_V**" },
                    { content: "600", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "750 x 750 x 1075", align: 'center' },
                    { content: "875 x 1275 x 1735", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_CC-8.0_V**" },
                    { content: "800", align: 'center' },
                    { content: "4", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "750 x 750 x 1425", align: 'center' },
                    { content: "875 x 1275 x 2085", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_CC-1.0_V**" },
                    { content: "1000", align: 'center' },
                    { content: "4", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "850 x 750 x 1525", align: 'center' },
                    { content: "975 x 1275 x 2230", align: 'center' }
                ]
            }
        ],
        remark: "• Power Supply: Single Phase 230 V. Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body."
    }
};
