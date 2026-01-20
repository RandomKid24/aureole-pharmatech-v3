import { ProductDetail } from '../types';

export const photostabilityChamber: ProductDetail = {
    description: "Aureole Pharma Tech Photostability Chambers are meticulously designed in strict accordance with the ICH Q1B guidelines, recognizing the pivotal role that light testing plays in stress testing protocols. These chambers offer precise control and monitoring of temperature, with the option for humidity regulation, and most importantly, they closely track light intensity exposure on both the drug and drug substances under evaluation.\n\nFor confirmatory studies, samples should be exposed to light providing an overall illumination of not less than 1.2 million lux hours and an integrated near ultraviolet energy of not less than 200 watt hours / square meter to allow direct comparison to be made between drug substance & drug product.\n\nAureole PharmaTech’s Photostability Chambers are designed specifically to meet ICH & FDA requirements for Photostability testing. Near UV & visible light testing is Approved performed simultaneously according to ICH Q1B option 2.",
    keyFeatures: [],
    specifications: [
        { parameter: "Temperature Range", details: "20°C to 50°C" },
        { parameter: "Accuracy", details: "± 0.2°C" },
        { parameter: "Uniformity", details: "± 1°C" }
    ],
    models: [],
    regularAttributes: [
        "Inner Mirror finish & outer Matt finish",
        "UV lights get switched off automatically once the door is opened",
        "You can test the samples on Fluorescent light or U .V lights separately as well as simultaneously.",
        "Uniform light distribution & high intensity levels allow quick response for forced degradation testing and confirmatory studies.",
        "Lights automatically shut off after a specified exposure level or time duration.",
        "Two doors - Full view inner glass door & Outer SS door, and leakage proof silicon rubber gasket",
        "Master & stand By Sensor"
    ],
    addOnsAttributes: [
        "21 CFR part 11 compliance",
        "UV Meter",
        "LUX Meter",
        "GSM Alert System",
        "Hooter System",
        "Door Access System (Numeric or Biometric)",
        "Extra Trays"
    ],
    image: "/products/StablilityChamber-Standalone/photostability-chamber.png",
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
                    { content: "AP_SA_PH-2.0_V**" },
                    { content: "200", align: 'center' },
                    { content: "800", align: 'center' },
                    { content: "500", align: 'center' },
                    { content: "600", align: 'center' },
                    { content: "960", align: 'center' },
                    { content: "960", align: 'center' },
                    { content: "1320", align: 'center' },
                    { content: "1", align: 'center' },
                    { content: "Single Phase 230 V", rowSpan: 2, align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_PH-4.0_V**" },
                    { content: "400", align: 'center' },
                    { content: "800", align: 'center' },
                    { content: "700", align: 'center' },
                    { content: "700", align: 'center' },
                    { content: "760", align: 'center' },
                    { content: "1160", align: 'center' },
                    { content: "1420", align: 'center' },
                    { content: "2", align: 'center' }
                ]
            }
        ],
        remark: "Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body"
    }
};
