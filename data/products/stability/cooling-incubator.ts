import { ProductDetail } from '../types';

export const coolingIncubator: ProductDetail = {
    description: "Cooling Incubators (also known as BOD Incubators) are essential for applications requiring stable, low-temperature environments. They are widely used for BOD determination, cell culture, and storage of cultures where precise temperature control is critical.",
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
    image: "/Aureole Product 3D/Front Angle/New Bacteriological Incubator Front.webp",
    images: [
        "/Aureole Product 3D/Front Angle/New Bacteriological Incubator Front.webp",
        "/Aureole Product 3D/Left Angle/New Bacteriological Incubator Left.webp",
        "/Aureole Product 3D/Right Angle/New Bacteriological Incubator Right.webp"
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
                    { content: "AP_SA_BO/BI-0.90_V**" },
                    { content: "90", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "450 x 450 x 45", align: 'center' },
                    { content: "600 x 350 x 600", align: 'center' },
                    { content: "725 x 865 x 1260", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-1.50_V**" },
                    { content: "150", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "500 x 500 x 60", align: 'center' },
                    { content: "660 x 450 x 700", align: 'center' },
                    { content: "785 x 965 x 1360", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-2.50_V**" },
                    { content: "250", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "600 x 600 x 60", align: 'center' },
                    { content: "700 x 650 x 900", align: 'center' },
                    { content: "825 x 1165 x 1560", align: 'center' }
                ]
            }
        ],
        remark: "• Power Supply: Single Phase 230 V. Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body."
    }
};
