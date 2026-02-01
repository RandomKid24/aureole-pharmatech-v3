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
        "Inner outer door with proof silicon",
        "Master & stand by sensor"
    ],
    addOnsAttributes: [
        "21 CFR part 11 Compliance",
        "Standby Refrigeration System (for BOD Only)",
        "Scanner : 4 pt. temperature sensor",
        "Mobile Alert System",
        "Hooter System",
        "Door Access System (Numeric/Biometric)",
        "Extra Trays"
    ],
    image: "/products/StablilityChamber-Standalone/BODINCUBATOR.png",
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
                    { content: "AP_SA_BO/BI-1.25_V**" },
                    { content: "125", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "600 x 350 x 600", align: 'center' },
                    { content: "725 x 865 x 1260", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-2.0_V**" },
                    { content: "200", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "660 x 450 x 700", align: 'center' },
                    { content: "785 x 965 x 1360", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-4.0_V**" },
                    { content: "400", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "700 x 650 x 900", align: 'center' },
                    { content: "825 x 1165 x 1560", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-6.0_V**" },
                    { content: "600", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "750 x 750 x 1075", align: 'center' },
                    { content: "875 x 1275 x 1735", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-8.0_V**" },
                    { content: "800", align: 'center' },
                    { content: "4", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "750 x 750 x 1425", align: 'center' },
                    { content: "875 x 1275 x 2085", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-1.0K_V**" },
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
