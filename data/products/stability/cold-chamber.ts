import { ProductDetail } from '../types';

export const coldChamber: ProductDetail = {
    description: "Aureole Pharma Tech Cold Chambers are purpose-built for conducting tests, treatments, and storage of products and materials that require precise climate control. These cold chambers serve a multitude of applications across various industries, including Pharmaceutical, Chemical, Automobile, Biotechnology, Telecommunication, Electronics, Defense, Medical Equipment, Universities, Military, and Consumer Goods.\n\nOur Cold Chambers offer a reliable and technologically advanced solution for controlling temperature conditions in laboratory and industrial settings. They find extensive use in diverse industries where precise temperature control is essential for testing, treatment, and storage of products and materials.",
    keyFeatures: [],
    specifications: [
        { parameter: "Temperature Range", details: "2°C to 8°C" },
        { parameter: "Accuracy", details: "± 1°C" },
        { parameter: "Uniformity", details: "± 2°C" },
        { parameter: "Power Supply", details: "Single Phase, 230V 50Hz" }
    ],
    models: [],
    regularAttributes: [
        "Inner outer door with proof silicon",
        "Master & stand by sensor"
    ],
    addOnsAttributes: [
        "21 CFR part 11 Compliance",
        "Standby Refrigeration System",
        "Scanner : 4 pt. temperature sensor",
        "Mobile Alert System",
        "Hooter System",
        "Door Access System (Numeric/Biometric)",
        "Extra Trays"
    ],
    image: "/Aureole Product 3D/Front Angle/Cold Chamber Front.png",
    images: [
        "/Aureole Product 3D/Front Angle/Cold Chamber Front.png",
        "/Aureole Product 3D/Left Angle/Cold Chamber Left.png",
        "/Aureole Product 3D/Right Angle/Cold Chamber Right.png"
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
                    { content: "AP_SA_CC-1.25_V**" },
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
                    { content: "AP_SA_CC-2.0_V**" },
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
                    { content: "AP_SA_CC-4.0_V**" },
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
                    { content: "AP_SA_CC-6.0_V**" },
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
                    { content: "AP_SA_CC-8.0_V**" },
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
                    { content: "AP_SA_CC-1.0K_V**" },
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
        remark: "• Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body."
    }
};
