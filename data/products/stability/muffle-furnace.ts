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
                    { content: "Models", rowSpan: 2, isHeader: true },
                    { content: "Capacity In Liters", rowSpan: 2, isHeader: true },
                    { content: "Interior Dimension in MM", colSpan: 3, isHeader: true },
                    { content: "Power Supply", rowSpan: 2, isHeader: true }
                ]
            },
            {
                cells: [
                    { content: "Width", isHeader: true },
                    { content: "Depth", isHeader: true },
                    { content: "Height", isHeader: true }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_MF-0.6_V**" },
                    { content: "6", align: 'center' },
                    { content: "150", align: 'center' },
                    { content: "300", align: 'center' },
                    { content: "150", align: 'center' },
                    { content: "Single Phase 230 V", rowSpan: 2, align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_MF-0.12_V**" },
                    { content: "12", align: 'center' },
                    { content: "200", align: 'center' },
                    { content: "300", align: 'center' },
                    { content: "200", align: 'center' }
                ]
            }
        ],
        remark: "Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body"
    }
};
