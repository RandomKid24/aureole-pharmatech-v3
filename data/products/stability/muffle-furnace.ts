import { ProductDetail } from '../types';

export const muffleFurnace: ProductDetail = {
    description: "Aureole Pharma Tech Muffle Furnace is designed for high-temperature applications, providing a controlled environment for processes requiring precise heat treatment up to 1150°C.",
    keyFeatures: [],
    specifications: [
        { parameter: "Temperature Range", details: "1150 °C" },
        { parameter: "Accuracy", details: "± 5°C" }
    ],
    models: [],
    regularAttributes: [],
    addOnsAttributes: [],
    image: "/products/StablilityChamber-Standalone/muffle-furnace.png",
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
                    { content: "AP_SA_MF-0.6_V**" },
                    { content: "6", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "150 x 300 x 150", align: 'center' },
                    { content: "-", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_MF-0.12_V**" },
                    { content: "12", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "200 x 300 x 200", align: 'center' },
                    { content: "-", align: 'center' }
                ]
            }
        ],
        remark: "• Power Supply: Single Phase 230 V. Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body."
    }
};
