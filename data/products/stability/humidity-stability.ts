import { ProductDetail } from '../types';

export const humidityStabilityChamber: ProductDetail = {
    description: "Humidity chambers play a crucial role in a wide array of industries, including electronics, military and defense, pharmaceuticals, transportation, medical devices, shipping, and communications, among others. These chambers are versatile tools that enable companies to conduct various types of testing to ensure the quality and reliability of their products.\n\nAureole Pharma Tech has earned its reputation as a leading manufacturer of humidity chambers by meticulously optimizing every aspect of its chambers. Their temperature and humidity models are designed to provide high-performance and precise control, ensuring that companies can rely on these chambers for their testing needs.\n\nAureole Pharma Tech understands the critical role that testing plays in the success of businesses. They recognize that their chambers must match the same level of care, research, and innovation that companies invest in their products.\n\nOur Humidity chambers are essential tools in industries where environmental conditions significantly affect product performance. Companies rely on our humidity chambers for accurate and controlled testing, and Aureole Pharma Tech stands out as a trusted manufacturer that delivers the precision and reliability needed for successful product development and quality assurance.",
    keyFeatures: [],
    specifications: [
        { parameter: "Temperature Range", details: "20°C to 60°C" },
        { parameter: "Humidity Range", details: "40% to 85% RH" },
        { parameter: "Accuracy", details: "± 0.2°C / ± 2.0% RH" },
        { parameter: "Uniformity", details: "± 1.0°C / ± 3.0% RH" },
        { parameter: "Test Suitable for", details: "25°C & 60% RH, 30°C & 65% RH, 40°C & 75% RH, 30°C & 75% RH" },
        { parameter: "Also available with low conditions", details: "25°C & 40% RH, 40°C & 25% RH, 30°C & 35% RH" }
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
    image: "/Aureole Product 3D/Front Angle/Humidity Chamberr Front Angle.png",
    images: [
        "/Aureole Product 3D/Front Angle/Humidity Chamberr Front Angle.png",
        "/Aureole Product 3D/Left Angle/Humidity Chamber Left Angle.png",
        "/Aureole Product 3D/Right Angle/Humidity Chamberr Right Angle.png"
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
                    { content: "AP_SA_HC-2.0_V**" },
                    { content: "200", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "570 x 450 x 30", align: 'center' },
                    { content: "660 x 450 x 700", align: 'center' },
                    { content: "785 x 1130 x 1360", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_HC-4.0_V**" },
                    { content: "400", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "610 x 650 x 30", align: 'center' },
                    { content: "700 x 650 x 900", align: 'center' },
                    { content: "825 x 1330 x 1560", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_HC-6.0_V**" },
                    { content: "600", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "660 x 750 x 30", align: 'center' },
                    { content: "750 x 750 x 1075", align: 'center' },
                    { content: "875 x 1430 x 1735", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_HC-8.0_V**" },
                    { content: "800", align: 'center' },
                    { content: "4", align: 'center' },
                    { content: "660 x 750 x 30", align: 'center' },
                    { content: "750 x 750 x 1425", align: 'center' },
                    { content: "875 x 1480 x 2085", align: 'center' }
                ]
            }
        ],
        remark: "• Power Supply: Single Phase 230 V. Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body."
    }
};
