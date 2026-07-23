import { ProductDetail } from '../types';

export const bodIncubator: ProductDetail = {
    description: "BOD Incubator, which stands for Bio-Oxygen Demand Incubator, serves the critical function of maintaining precise temperature control for various applications such as tissue culture growth tests, storage of bacterial cultures, and incubation processes that demand a high degree of temperature accuracy.\n\nAureole Pharma Tech BOD Incubators are renowned for their ability to provide exceptionally accurate and uniform temperature conditions within the chamber. Whether it’s nurturing delicate tissue cultures or ensuring the stable storage of bacterial cultures, these incubators offer the reliability and precision required for scientific and research purposes.",
    keyFeatures: [],
    specifications: [
        { parameter: "Temperature Range", details: "10°C to 60°C" },
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
    image: "/Aureole Product 3D/Front Angle/BOD Chamber Front.png",
    images: [
        "/Aureole Product 3D/Front Angle/BOD Chamber Front.png",
        "/Aureole Product 3D/Left Angle/BOD Chamber Side Left.png",
        "/Aureole Product 3D/Right Angle/BOD Chamber Side Right.png"
    ],
    imageCaptions: ["Front View", "Left View", "Right View"],
    complexTable: {
        rows: [
            {
                cells: [
                    { content: "Model", rowSpan: 2, isHeader: true },
                    { content: "Capacity\nIn Liters", rowSpan: 2, isHeader: true },
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
                    { content: "AP_SA_BO/BI-1.25_V**" },
                    { content: "125", align: 'center' },
                    { content: "600", align: 'center' },
                    { content: "350", align: 'center' },
                    { content: "600", align: 'center' },
                    { content: "725", align: 'center' },
                    { content: "685", align: 'center' },
                    { content: "1250", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "Single Phase 230 V", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-2.0_V**" },
                    { content: "200", align: 'center' },
                    { content: "660", align: 'center' },
                    { content: "450", align: 'center' },
                    { content: "700", align: 'center' },
                    { content: "785", align: 'center' },
                    { content: "780", align: 'center' },
                    { content: "1350", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "Single Phase 230 V", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-4.0_V**" },
                    { content: "400", align: 'center' },
                    { content: "700", align: 'center' },
                    { content: "650", align: 'center' },
                    { content: "900", align: 'center' },
                    { content: "825", align: 'center' },
                    { content: "985", align: 'center' },
                    { content: "1550", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "Single Phase 230 V", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-6.0_V**" },
                    { content: "600", align: 'center' },
                    { content: "750", align: 'center' },
                    { content: "750", align: 'center' },
                    { content: "1075", align: 'center' },
                    { content: "875", align: 'center' },
                    { content: "1085", align: 'center' },
                    { content: "1725", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "Single Phase 230 V", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-8.0_V**" },
                    { content: "800", align: 'center' },
                    { content: "750", align: 'center' },
                    { content: "750", align: 'center' },
                    { content: "1425", align: 'center' },
                    { content: "875", align: 'center' },
                    { content: "1085", align: 'center' },
                    { content: "2075", align: 'center' },
                    { content: "4", align: 'center' },
                    { content: "Single Phase 230 V", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_BO/BI-1.0K_V**" },
                    { content: "1000", align: 'center' },
                    { content: "850", align: 'center' },
                    { content: "750", align: 'center' },
                    { content: "1575", align: 'center' },
                    { content: "975", align: 'center' },
                    { content: "1085", align: 'center' },
                    { content: "2225", align: 'center' },
                    { content: "4", align: 'center' },
                    { content: "Single Phase 230 V", align: 'center' }
                ]
            }
        ],
        remark: "Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction of body"
    }
};
