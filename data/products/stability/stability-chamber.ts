import { ProductDetail } from '../types';

export const stabilityChamber: ProductDetail = {
    description: "Aureole Pharma Tech Stability Chambers are specifically designed for long-term stability studies of pharmaceutical products and substances. These chambers provide a high degree of temperature and humidity control accuracy, ensuring compliance with ICH guidelines for stability testing. They are characterized by their superior uniformity and reliability for continuous 24/7 operation.",
    keyFeatures: [],
    specifications: [
        { parameter: "Temperature Range", details: "20°C to 60°C" },
        { parameter: "Humidity Range", details: "40% to 85% RH" },
        { parameter: "Accuracy", details: "± 0.2°C / ± 2.0% RH" },
        { parameter: "Uniformity", details: "± 1.0°C / ± 3.0% RH" }
    ],
    models: [],
    regularAttributes: [
        "Inner outer door with proof silicon",
        "Water & steam Tank.",
        "Low water indication",
        "Master & stand by sensor"
    ],
    addOnsAttributes: [
        "21 CFR part 11 Compliance",
        "Standby Refrigeration & Steam Generation System",
        "Scanner : 4 pt. temperature & humidity sensor",
        "Mobile Alert System",
        "Hooter System",
        "Door Access System (Numeric/Biometric)",
        "Extra Trays"
    ],
    image: "/products/StablilityChamber-Standalone/stability-chamber.png",
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
                    { content: "AP_SA_SC-1.0_V**" },
                    { content: "100", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "550 x 550 x 30", align: 'center' },
                    { content: "450 x 450 x 500", align: 'center' },
                    { content: "575 x 1130 x 1160", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_SC-2.0_V**" },
                    { content: "200", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "600 x 600 x 30", align: 'center' },
                    { content: "660 x 450 x 700", align: 'center' },
                    { content: "785 x 1130 x 1360", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_SC-4.0_V**" },
                    { content: "400", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "700 x 700 x 30", align: 'center' },
                    { content: "700 x 650 x 900", align: 'center' },
                    { content: "825 x 1330 x 1560", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_SC-6.0_V**" },
                    { content: "600", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "800 x 750 x 30", align: 'center' },
                    { content: "750 x 750 x 1075", align: 'center' },
                    { content: "875 x 1430 x 1735", align: 'center' }
                ]
            }
        ],
        remark: "• Power Supply: Single Phase 230 V. Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body."
    }
};
