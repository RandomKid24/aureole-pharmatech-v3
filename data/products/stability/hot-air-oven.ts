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
                    { content: "Models", rowSpan: 2, isHeader: true },
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
                    { content: "AP_SA_HO2-1.0_V**" },
                    { content: "100", align: 'center' },
                    { content: "450", align: 'center' },
                    { content: "450", align: 'center' },
                    { content: "500", align: 'center' },
                    { content: "650", align: 'center' },
                    { content: "850", align: 'center' },
                    { content: "1050", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "Single Phase 230 V", rowSpan: 5, align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_HO2-1.5_V**" },
                    { content: "150", align: 'center' },
                    { content: "500", align: 'center' },
                    { content: "500", align: 'center' },
                    { content: "600", align: 'center' },
                    { content: "700", align: 'center' },
                    { content: "1020", align: 'center' },
                    { content: "1050", align: 'center' },
                    { content: "2", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_HO2-2.0_V**" },
                    { content: "200", align: 'center' },
                    { content: "600", align: 'center' },
                    { content: "500", align: 'center' },
                    { content: "675", align: 'center' },
                    { content: "860", align: 'center' },
                    { content: "1020", align: 'center' },
                    { content: "1225", align: 'center' },
                    { content: "2", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_HO2-2.5_V**" },
                    { content: "250", align: 'center' },
                    { content: "600", align: 'center' },
                    { content: "600", align: 'center' },
                    { content: "700", align: 'center' },
                    { content: "860", align: 'center' },
                    { content: "1120", align: 'center' },
                    { content: "1250", align: 'center' },
                    { content: "3", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_HO2-3.0_V**" },
                    { content: "300", align: 'center' },
                    { content: "600", align: 'center' },
                    { content: "600", align: 'center' },
                    { content: "850", align: 'center' },
                    { content: "860", align: 'center' },
                    { content: "1120", align: 'center' },
                    { content: "1400", align: 'center' },
                    { content: "4", align: 'center' }
                ]
            }
        ],
        remark: "Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body"
    }
};
