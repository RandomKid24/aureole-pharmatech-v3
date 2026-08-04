import { ProductDetail } from '../types';

export const photostabilityChamber: ProductDetail = {
    description: "Aureole Pharma Tech Photostability Chambers are meticulously designed in strict accordance with the ICH Q1B guidelines, recognizing the pivotal role that light testing plays in stress testing protocols. These chambers offer precise control and monitoring of temperature, with the option for humidity regulation, and most importantly, they closely track light intensity exposure on both the drug and drug substances under evaluation.\n\nFor confirmatory studies, samples should be exposed to light providing an overall illumination of not less than 1.2 million lux hours and an integrated near ultraviolet energy of not less than 200 watt hours / square meter to allow direct comparison to be made between drug substance & drug product.\n\nAureole PharmaTech’s Photostability Chambers are designed specifically to meet ICH & FDA requirements for Photostability testing. Near UV & visible light testing is Approved performed simultaneously according to ICH Q1B option 2.",
    keyFeatures: [],
    specifications: [
        { parameter: "Temperature Range", details: "20°C to 50°C" },
        { parameter: "Accuracy", details: "± 0.5°C" },
        { parameter: "Uniformity", details: "± 2.0°C" }
    ],
    models: [],
    regularAttributes: [
        "Inner Mirror finish & outer Matt finish",
        "UV lights get switched off automatically once the door is opened",
        "Test the sample on Fluorescent light or U. V. lights",
        "Uniform light distribution",
        "Lights automatically shut off after specific exposure level",
        "Master & stand by sensor",
        "Two Door - Full view inner glass door & outer SS door & leakage proof silicon rubber gasket"
    ],
    addOnsAttributes: [
        "21 CFR part 11 Compliance",
        "UV Meter",
        "LUX Meter",
        "Mobile Alert System",
        "Hooter System",
        "Door Access System (Numeric/Biometric)",
        "Extra Trays"
    ],
    image: "/Aureole Product 3D/Front Angle/Photostability Chamber Front Angle.webp",
    images: [
        "/Aureole Product 3D/Front Angle/Photostability Chamber Front Angle.webp",
        "/Aureole Product 3D/Left Angle/Photostability Chamber Left Angle.webp",
        "/Aureole Product 3D/Right Angle/Photostability Chamber Right Angle.webp"
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
                    { content: "AP_SA_PH-2.0_V**" },
                    { content: "200", align: 'center' },
                    { content: "800", align: 'center' },
                    { content: "500", align: 'center' },
                    { content: "600", align: 'center' },
                    { content: "925", align: 'center' },
                    { content: "850", align: 'center' },
                    { content: "1300", align: 'center' },
                    { content: "1", align: 'center' },
                    { content: "Single Phase 230 V", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_PH-4.0_V**" },
                    { content: "400", align: 'center' },
                    { content: "800", align: 'center' },
                    { content: "700", align: 'center' },
                    { content: "700", align: 'center' },
                    { content: "925", align: 'center' },
                    { content: "1050", align: 'center' },
                    { content: "1400", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "Single Phase 230 V", align: 'center' }
                ]
            }
        ],
        remark: "• Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body."
    }
};
