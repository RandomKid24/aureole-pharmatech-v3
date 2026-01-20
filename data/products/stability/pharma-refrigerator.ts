import { ProductDetail } from '../types';

export const pharmaRefrigerator: ProductDetail = {
    description: "Pharmaceutical refrigerators hold a pivotal position in upholding the safety and potency of medications and vaccines. Inadequate storage conditions can result in product deterioration, diminished effectiveness, and potential harm to patients. As such, pharma refrigerators assume a critical role within the healthcare and pharmaceutical sectors, guaranteeing the stability and safety of temperature-sensitive products.\n\nAureole Pharma Tech stands as the foremost market leader for pharmaceutical refrigerators in India. Each refrigerator is meticulously crafted to adhere to the rigorous regulations, demonstrating our unwavering commitment to quality and compliance. Our products are renowned for their exceptional temperature stability and unmatched quality, setting the industry standard for reliability and performance.",
    keyFeatures: [],
    specifications: [
        { parameter: "Upper Zone (DF): Temp Range", details: "-5°C to -20°C" },
        { parameter: "Upper Zone (DF): Accuracy", details: "± 3°C" },
        { parameter: "Upper Zone (DF): Uniformity", details: "± 5°C" },
        { parameter: "Lower Zone (CC): Temp Range", details: "2°C to 8°C" },
        { parameter: "Lower Zone (CC): Accuracy", details: "± 1°C" },
        { parameter: "Lower Zone (CC): Uniformity", details: "± 2°C" }
    ],
    models: [],
    regularAttributes: [
        "Master & standby sensor",
        "SS door with gasket",
        "Heavy-duty refrigeration system",
        "Inner outer door with proof silicon"
    ],
    addOnsAttributes: [
        "21 CFR Part 11 compliance",
        "Mobile alert system",
        "Hooter system",
        "Extra trays",
        "Scanner: 4-point temperature sensor",
        "Door access system (Numeric / Biometric)"
    ],
    image: "/products/StablilityChamber-Standalone/pharma-refrigerator-dual-zone-chamber.png",
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
                    { content: "AP_DC_DF-1.0_CC-1.0_V**", rowSpan: 2 },
                    { content: "Upper 100", align: 'center' },
                    { content: "640", align: 'center' },
                    { content: "350", align: 'center' },
                    { content: "500", align: 'center' },
                    { content: "825", rowSpan: 2, align: 'center' },
                    { content: "850", rowSpan: 2, align: 'center' },
                    { content: "2055", rowSpan: 2, align: 'center' },
                    { content: "1", align: 'center' },
                    { content: "Single Phase 230 V", rowSpan: 8, align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "Lower 100", align: 'center' },
                    { content: "640", align: 'center' },
                    { content: "350", align: 'center' },
                    { content: "600", align: 'center' },
                    { content: "1", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_DC_DF-2.0_CC-2.0_V**", rowSpan: 2 },
                    { content: "Upper 200", align: 'center' },
                    { content: "700", align: 'center' },
                    { content: "575", align: 'center' },
                    { content: "500", align: 'center' },
                    { content: "885", rowSpan: 2, align: 'center' },
                    { content: "975", rowSpan: 2, align: 'center' },
                    { content: "2055", rowSpan: 2, align: 'center' },
                    { content: "2", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "Lower 200", align: 'center' },
                    { content: "700", align: 'center' },
                    { content: "475", align: 'center' },
                    { content: "600", align: 'center' },
                    { content: "2", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_DC_DF-1.0_CC-2.0_V**", rowSpan: 2 },
                    { content: "Upper 100", align: 'center' },
                    { content: "700", align: 'center' },
                    { content: "350", align: 'center' },
                    { content: "450", align: 'center' },
                    { content: "885", rowSpan: 2, align: 'center' },
                    { content: "975", rowSpan: 2, align: 'center' },
                    { content: "2010", rowSpan: 2, align: 'center' },
                    { content: "1", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "Lower 200", align: 'center' },
                    { content: "700", align: 'center' },
                    { content: "475", align: 'center' },
                    { content: "600", align: 'center' },
                    { content: "2", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_DC_DF-2.0_CC-4.0_V**", rowSpan: 2 },
                    { content: "Upper 200", align: 'center' },
                    { content: "800", align: 'center' },
                    { content: "500", align: 'center' },
                    { content: "500", align: 'center' },
                    { content: "985", rowSpan: 2, align: 'center' },
                    { content: "1100", rowSpan: 2, align: 'center' },
                    { content: "2300", rowSpan: 2, align: 'center' },
                    { content: "2", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "Lower 400", align: 'center' },
                    { content: "800", align: 'center' },
                    { content: "600", align: 'center' },
                    { content: "850", align: 'center' },
                    { content: "3", align: 'center' }
                ]
            }
        ],
        remark: "Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body"
    }
};
