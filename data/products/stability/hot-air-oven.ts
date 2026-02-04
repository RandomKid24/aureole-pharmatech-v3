import { ProductDetail } from '../types';

export const hotAirOven: ProductDetail = {
    description: "Aureole Pharma Tech hot air oven offers a controlled heating environment that is ideal for processes such as curing, drying, and conducting high-temperature tests. It delivers exceptional accuracy and superior quality in maintaining the required temperature conditions for these applications.",
    keyFeatures: [],
    specifications: [
        { parameter: "Temperature Range", details: "20°C to 60°C" },
        { parameter: "Accuracy", details: "± 1°C" },
        { parameter: "Uniformity", details: "± 5°C" }
    ],
    models: [],
    regularAttributes: [
        "Doubled walled with ceramic wool / Rock wool Insulations of 60 mm",
        "High temperature cut-off Settable thermostats"
    ],
    addOnsAttributes: [
        "Hooter System",
        "Extra tray"
    ],
    image: "/products/StablilityChamber-Standalone/hot-air-oven.png",
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
                    { content: "AP_SA_HO2-0.96_V**" },
                    { content: "96", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "450 x 450 x 45", align: 'center' },
                    { content: "450 x 450 x 500", align: 'center' },
                    { content: "650 x 850 x 1050", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_HO2-1.92_V**" },
                    { content: "192", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "600 x 600 x 45", align: 'center' },
                    { content: "600 x 500 x 675", align: 'center' },
                    { content: "860 x 1020 x 1225", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_HO2-2.88_V**" },
                    { content: "288", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "600 x 800 x 60", align: 'center' },
                    { content: "600 x 600 x 850", align: 'center' },
                    { content: "860 x 1120 x 1400", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_HO2-4.32_V**" },
                    { content: "432", align: 'center' },
                    { content: "4", align: 'center' },
                    { content: "800 x 900 x 60", align: 'center' },
                    { content: "800 x 900 x 1000", align: 'center' },
                    { content: "1060 x 1420 x 1550", align: 'center' }
                ]
            }
        ],
        remark: "• Power Supply: Single Phase 230 V. Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body."
    }
};
