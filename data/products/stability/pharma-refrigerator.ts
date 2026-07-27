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
        "Master & stand by sensor",
        "SS Door with gasket for Cold Chamber",
        "Heavy Duty refrigeration system",
        "Inner outer door with proof silicon"
    ],
    addOnsAttributes: [
        "21 CFR part 11 Compliance",
        "Mobile Alert System",
        "Hooter System",
        "Extra Trays",
        "Scanner : 4 pt. temperature sensor",
        "Door Access System (Numeric/Biometric)"
    ],
    image: "/Aureole Product 3D/Front Angle/Dual Zone Chamber Front.png",
    images: [
        "/Aureole Product 3D/Front Angle/Dual Zone Chamber Front.png",
        "/Aureole Product 3D/Left Angle/Dual Zone Chamber Left.png",
        "/Aureole Product 3D/Right Angle/Dual Zone Chamber Right.png"
    ],
    imageCaptions: ["Front View", "Left View", "Right View"],
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
                    { content: "AP_DC_DF-1.0_CC-1.0_V**", rowSpan: 2 },
                    { content: "Upper 100", align: 'center' },
                    { content: "1", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "640 x 350 x 500", align: 'center' },
                    { content: "825 x 850 x 2055", rowSpan: 2, align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "Lower 100", align: 'center' },
                    { content: "1", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "640 x 350 x 600", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_DC_DF-2.0_CC-2.0_V**", rowSpan: 2 },
                    { content: "Upper 200", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "700 x 575 x 500", align: 'center' },
                    { content: "885 x 975 x 2055", rowSpan: 2, align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "Lower 200", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "700 x 475 x 600", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_DC_DF-1.0_CC-2.0_V**", rowSpan: 2 },
                    { content: "Upper 100", align: 'center' },
                    { content: "1", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "700 x 350 x 450", align: 'center' },
                    { content: "885 x 975 x 2010", rowSpan: 2, align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "Lower 200", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "700 x 475 x 600", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_DC_DF-2.0_CC-4.0_V**", rowSpan: 2 },
                    { content: "Upper 200", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "800 x 500 x 500", align: 'center' },
                    { content: "985 x 1100 x 2300", rowSpan: 2, align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "Lower 400", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "800 x 600 x 850", align: 'center' }
                ]
            }
        ],
        remark: "• Power Supply: Single Phase 230 V. Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body."
    }
};
