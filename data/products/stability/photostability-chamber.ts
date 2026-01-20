import { ProductDetail } from '../types';

export const photostabilityChamber: ProductDetail = {
    description: "Aureole Pharma Tech Photostability Chambers are meticulously designed in strict accordance with the ICH Q1B guidelines, recognizing the pivotal role that light testing plays in stress testing protocols. These chambers offer precise control and monitoring of temperature, with the option for humidity regulation, and most importantly, they closely track light intensity exposure on both the drug and drug substances under evaluation.\n\nFor confirmatory studies, samples should be exposed to light providing an overall illumination of not less than 1.2 million lux hours and an integrated near ultraviolet energy of not less than 200 watt hours / square meter to allow direct comparison to be made between drug substance & drug product.\n\nAureole PharmaTech’s Photostability Chambers are designed specifically to meet ICH & FDA requirements for Photostability testing. Near UV & visible light testing is Approved performed simultaneously according to ICH Q1B option 2.",
    keyFeatures: [
        "Designed in strict accordance with ICH Q1B guidelines",
        "Precise control and monitoring of temperature with optional humidity regulation",
        "Tracks light intensity exposure on drug and drug substances",
        "Meets ICH & FDA requirements for Photostability testing",
        "Simultaneous Near UV & visible light testing (ICH Q1B option 2)",
        "Inner Mirror finish & outer Matt finish",
        "Automatic UV light shut-off when door is opened",
        "Uniform light distribution & high intensity levels"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "20°C to 50°C" },
        { parameter: "Accuracy", details: "± 0.2°C" },
        { parameter: "Uniformity", details: "± 1°C" },
        { parameter: "Illumination", details: "≥ 1.2 million lux hours" },
        { parameter: "UV Energy", details: "≥ 200 watt hours / m²" }
    ],
    models: [
        { model: "AP_SA_PH-2.0_V**", capacity: "200", interior: "800 × 500 × 600", exterior: "960 × 960 × 1320", trays: "1", power: "Single Phase 230 V" },
        { model: "AP_SA_PH-4.0_V**", capacity: "400", interior: "800 × 700 × 700", exterior: "760 × 1160 × 1420", trays: "2", power: "Single Phase 230 V" }
    ],
    regularAttributes: [
        "Inner Mirror finish & outer Matt finish",
        "UV lights get switched off automatically once the door is opened",
        "Test samples on Fluorescent light or UV lights separately or simultaneously",
        "Uniform light distribution & high intensity levels",
        "Lights automatically shut off after specified exposure level or duration",
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
    image: "/products/StablilityChamber-Standalone/photostability-chamber.png"
};
