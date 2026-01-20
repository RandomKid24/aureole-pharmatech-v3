import { ProductDetail } from '../types';

export const vacuumOven: ProductDetail = {
    description: "Vacuum ovens are the perfect selection when rapid drying is needed without jeopardizing the integrity of the samples. These ovens feature a sturdy design, complete with a reinforced glass viewing window and a shatter-resistant safety screen. The interior is constructed from corrosion-resistant stainless steel, ensuring not only durability but also ease of maintenance.\n\nAureole Pharma Tech Vacuum ovens operate effectively within a temperature range of 50°C to 200°C, offering versatility for a broad spectrum of applications.",
    keyFeatures: [],
    specifications: [
        { parameter: "Temperature Range", details: "60°C to 200°C" },
        { parameter: "Accuracy", details: "± 1°C" },
        { parameter: "Uniformity", details: "± 5°C" },
        { parameter: "Vacuum", details: "760 mm of mercury (-30)" }
    ],
    models: [],
    regularAttributes: [
        "Doubled walled with ceramic wool / Rock wool Insulations of 60 mm",
        "High temperature cut-off Settable thermostats",
        "Vacuum Gauge"
    ],
    addOnsAttributes: [
        "Hooter System",
        "Vacuum Pump",
        "Printing facility",
        "Extra tray"
    ],
    image: "/products/StablilityChamber-Standalone/vacuum-oven.png",
    complexTable: {
        rows: [
            {
                cells: [
                    { content: "Models", isHeader: true },
                    { content: "Capacity in Ltrs", isHeader: true },
                    { content: "Size: In Inches", isHeader: true },
                    { content: "Power Supply", isHeader: true }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_VO-0.15_V**" },
                    { content: "15", align: 'center' },
                    { content: "22.5 Dia. × 30 Depth", align: 'center' },
                    { content: "Single Phase 230 V", rowSpan: 3, align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_VO-0.21_V**" },
                    { content: "21", align: 'center' },
                    { content: "30 Dia. × 30 Depth", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_VO-0.27_V**" },
                    { content: "27", align: 'center' },
                    { content: "30 Dia. × 38 Depth", align: 'center' }
                ]
            }
        ],
        remark: "Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body"
    }
};
