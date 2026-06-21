import { ProductDetail } from '../types';

export const deepFreezer: ProductDetail = {
    description: "Deep Freezer (upto -20° C)\nIn laboratory and clinical settings, maintaining a consistent temperature well below freezing is crucial for preserving perishable samples. Aureole Pharma Tech Deep freezer up to Minus 20 degrees Celsius (-20°C) is widely recognized as the standard baseline temperature for the storage of perishable, flammable, or hazardous materials. As such, the freezers listed below predominantly have the capacity to reach and sustain temperatures as low as -20°C, ensuring the safe storage of these sensitive materials.\n\nDeep Freezer (upto -40° C)\nDeep freezers come in different configurations to suit various needs. Some freezers are designed with a fixed temperature setting of -20°C, while others offer the flexibility of different temperature ranges, ranging from -13°C to -40°C. The specific operation voltage can vary, typically falling within the range of 115 to 230 V, depending on the freezer’s temperature range and sample capacity.\n\nFor example, a deep freezer up to -40°C is available in under-counter, chest, or upright orientations. These freezers often utilize proprietary foam insulation types that contribute to favorable Energy Star ratings, indicating their energy efficiency. Additionally, many of these freezers are equipped with manual defrost systems that include special thawing tubes, providing protection against unintended thaws and sample dehydration.",
    keyFeatures: [],
    specifications: [
        { parameter: "Temperature Range", details: "-5°C to -20°C / -25°C to -40°C" },
        { parameter: "Accuracy", details: "± 3°C" },
        { parameter: "Uniformity", details: "± 5°C" }
    ],
    models: [],
    regularAttributes: [
        "Master & stand by sensor",
        "SS Door with gasket",
        "Heavy Duty refrigeration system"
    ],
    addOnsAttributes: [
        "21 CFR part 11 Compliance",
        "Mobile Alert System",
        "Hooter System",
        "Extra Trays"
    ],
    image: "/Aureole Product 3D/Front Angle/New Deep Freezer Ultra Low Final Front.png",
    images: [
        "/Aureole Product 3D/Front Angle/New Deep Freezer Ultra Low Final Front.png",
        "/Aureole Product 3D/Left Angle/New Deep Freezer Ultra Low Final Left.png",
        "/Aureole Product 3D/Right Angle/New Deep Freezer Ultra Low Final Right.png"
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
                    { content: "AP_SA_DF-1.25_V**" },
                    { content: "125", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "625 x 400 x 500", align: 'center' },
                    { content: "810 x 725 x 1260", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_DF-2.0_V**" },
                    { content: "200", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "650 x 500 x 625", align: 'center' },
                    { content: "835 x 825 x 1385", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_DF-4.0_V**" },
                    { content: "400", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "700 x 650 x 900", align: 'center' },
                    { content: "885 x 975 x 1660", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_DF-6.0_V**" },
                    { content: "600", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "750 x 800 x 1000", align: 'center' },
                    { content: "935 x 1125 x 1760", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_DF-8.0_V**" },
                    { content: "800", align: 'center' },
                    { content: "4", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "750 x 800 x 1350", align: 'center' },
                    { content: "935 x 1125 x 2110", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_DF-1.0K_V**" },
                    { content: "1000", align: 'center' },
                    { content: "4", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "825 x 825 x 1500", align: 'center' },
                    { content: "1010 x 1150 x 2260", align: 'center' }
                ]
            }
        ],
        remark: "• Power Supply: Single Phase 230 V. Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body."
    }
};
