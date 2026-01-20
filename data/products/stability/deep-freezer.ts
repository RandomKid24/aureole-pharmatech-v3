import { ProductDetail } from '../types';

export const deepFreezer: ProductDetail = {
    description: "Deep Freezer (upto -20° C)\nIn laboratory and clinical settings, maintaining a consistent temperature well below freezing is crucial for preserving perishable samples. Aureole Pharma Tech Deep freezer up to Minus 20 degrees Celsius (-20°C) is widely recognized as the standard baseline temperature for the storage of perishable, flammable, or hazardous materials. As such, the freezers listed below predominantly have the capacity to reach and sustain temperatures as low as -20°C, ensuring the safe storage of these sensitive materials.\n\nDeep Freezer (upto -40° C)\nDeep freezers come in different configurations to suit various needs. Some freezers are designed with a fixed temperature setting of -20°C, while others offer the flexibility of different temperature ranges, ranging from -13°C to -40°C. The specific operation voltage can vary, typically falling within the range of 115 to 230 V, depending on the freezer’s temperature range and sample capacity.\n\nFor example, a deep freezer up to -40°C is available in under-counter, chest, or upright orientations. These freezers often utilize proprietary foam insulation types that contribute to favorable Energy Star ratings, indicating their energy efficiency. Additionally, many of these freezers are equipped with manual defrost systems that include special thawing tubes, providing protection against unintended thaws and sample dehydration.",
    keyFeatures: [],
    specifications: [
        { parameter: "Temperature Range", details: "-5°C TO -20°C / -25°C TO -40°C" },
        { parameter: "Accuracy", details: "± 3°C" },
        { parameter: "Uniformity", details: "± 5°C" }
    ],
    models: [],
    regularAttributes: [
        "Master & stand By Sensor",
        "Single SS Door sealed around the entire perimeter by silicon gasket.",
        "Heavy Duty refrigeration system"
    ],
    addOnsAttributes: [
        "21 CFR part 11 compliance",
        "GSM alert system",
        "Hooter System",
        "Password protected or Biometric door access system",
        "Extra Trays"
    ],
    image: "/products/StablilityChamber-Standalone/deep-freezer.png",
    complexTable: {
        rows: [
            {
                cells: [
                    { content: "Model", rowSpan: 2, isHeader: true },
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
                    { content: "AP_SA_DF-1.25_V**" },
                    { content: "125", align: 'center' },
                    { content: "625", align: 'center' },
                    { content: "400", align: 'center' },
                    { content: "500", align: 'center' },
                    { content: "810", align: 'center' },
                    { content: "725", align: 'center' },
                    { content: "1260", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "Single Phase 230 V", rowSpan: 6, align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_DF-2.0_V**" },
                    { content: "200", align: 'center' },
                    { content: "650", align: 'center' },
                    { content: "500", align: 'center' },
                    { content: "625", align: 'center' },
                    { content: "835", align: 'center' },
                    { content: "825", align: 'center' },
                    { content: "1385", align: 'center' },
                    { content: "2", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_DF-4.0_V**" },
                    { content: "400", align: 'center' },
                    { content: "700", align: 'center' },
                    { content: "650", align: 'center' },
                    { content: "900", align: 'center' },
                    { content: "885", align: 'center' },
                    { content: "975", align: 'center' },
                    { content: "1660", align: 'center' },
                    { content: "3", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_DF-6.0_V**" },
                    { content: "600", align: 'center' },
                    { content: "750", align: 'center' },
                    { content: "800", align: 'center' },
                    { content: "1000", align: 'center' },
                    { content: "935", align: 'center' },
                    { content: "1125", align: 'center' },
                    { content: "1760", align: 'center' },
                    { content: "3", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_DF-8.0_V**" },
                    { content: "800", align: 'center' },
                    { content: "750", align: 'center' },
                    { content: "800", align: 'center' },
                    { content: "1350", align: 'center' },
                    { content: "935", align: 'center' },
                    { content: "1125", align: 'center' },
                    { content: "2110", align: 'center' },
                    { content: "4", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_DF-1.0K_V**" },
                    { content: "1000", align: 'center' },
                    { content: "825", align: 'center' },
                    { content: "825", align: 'center' },
                    { content: "1500", align: 'center' },
                    { content: "1010", align: 'center' },
                    { content: "1150", align: 'center' },
                    { content: "2260", align: 'center' },
                    { content: "4", align: 'center' }
                ]
            }
        ],
        remark: "Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body"
    }
};
