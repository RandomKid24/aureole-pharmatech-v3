import { ProductDetail } from '../types';

export const photostabilityChamber: ProductDetail = {
    description: "Advanced photostability chambers designed specifically to meet ICH & FDA requirements for photostability testing. These chambers provide simultaneous Near UV & visible light testing according to ICH Q1B option 2, ensuring compliance with regulatory standards for drug substance and drug product photostability studies.",
    keyFeatures: [
        "ICH Q1B compliant with FDA requirements",
        "Simultaneous Near UV & visible light testing",
        "Uniform light distribution for accurate testing",
        "Automatic light control with exposure level monitoring",
        "Master & standby sensor for reliability",
        "Two-door system with full view inner glass door & outer SS door",
        "Leakage-proof silicon rubber gasket",
        "UV lights automatically switch off when door is opened",
        "Inner mirror finish & outer matt finish for optimal light reflection"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "20°C to 50°C" },
        { parameter: "Accuracy", details: "± 0.2°C" },
        { parameter: "Uniformity", details: "± 1°C" }
    ],
    models: [
        { model: "AP_SA_PH-2.0_V**", capacity: "200", interior: "800 × 500 × 600", exterior: "925 × 850 × 1300", trays: "1", power: "Single Phase 230 V" },
        { model: "AP_SA_PH-4.0_V**", capacity: "400", interior: "800 × 700 × 700", exterior: "925 × 1050 × 1400", trays: "2", power: "Single Phase 230 V" }
    ],
    regularAttributes: [
        "Inner mirror finish & outer matt finish",
        "UV lights automatically switch off once the door is opened",
        "Tests samples under fluorescent light or UV lights",
        "Uniform light distribution",
        "Lights automatically shut off after specific exposure level",
        "Master & standby sensor",
        "Two-door system: full view inner glass door & outer SS door with leakage-proof silicon rubber gasket"
    ],
    addOnsAttributes: [
        "21 CFR Part 11 compliance",
        "UV meter",
        "LUX meter",
        "Mobile alert system",
        "Hooter system",
        "Door access system (Numeric / Biometric)",
        "Extra trays"
    ],
    image: "/products/StablilityChamber-Standalone/photostability-chamber.png"
};
