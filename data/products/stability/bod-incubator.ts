import { ProductDetail } from '../types';

export const bodIncubator: ProductDetail = {
    description: "Advanced BOD (Bio-Oxygen Demand) incubators designed for precise temperature control in biological oxygen demand testing, microbiological research, and environmental analysis. These incubators provide accurate and uniform temperature conditions essential for reliable biological testing and research applications.",
    keyFeatures: [
        "Precise temperature control for BOD testing",
        "Advanced sensor technology with high accuracy",
        "Uniform temperature distribution",
        "Energy-efficient operation",
        "Compliance with international standards",
        "User-friendly digital interface"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "10°C to 60°C" },
        { parameter: "Accuracy", details: "± 0.2°C" },
        { parameter: "Uniformity", details: "± 1.0°C" }
    ],
    models: [
        { model: "AP_SA_BO/BI-1.25_V**", capacity: "125", interior: "600 × 350 × 600", exterior: "725 × 685 × 1250", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_BO/BI-2.0_V**", capacity: "200", interior: "660 × 450 × 700", exterior: "785 × 780 × 1350", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_BO/BI-4.0_V**", capacity: "400", interior: "700 × 650 × 900", exterior: "825 × 985 × 1550", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_BO/BI-6.0_V**", capacity: "600", interior: "750 × 750 × 1075", exterior: "875 × 1085 × 1725", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_BO/BI-8.0_V**", capacity: "800", interior: "750 × 750 × 1425", exterior: "875 × 1085 × 2075", trays: "4", power: "Single Phase 230 V" },
        { model: "AP_SA_BO/BI-1.0K_V**", capacity: "1000", interior: "850 × 750 × 1575", exterior: "975 × 1085 × 2225", trays: "4", power: "Single Phase 230 V" }
    ],
    regularAttributes: [
        "Inner outer door with proof silicon",
        "Master & standby sensor"
    ],
    addOnsAttributes: [
        "FDA 21 CFR Part 11 compliance",
        "Standby refrigeration system (for BOD only)",
        "Scanner: 4-point temperature sensor",
        "Mobile alert system",
        "Hooter system",
        "Door access system (Numeric / Biometric)",
        "Extra trays"
    ],
    image: "/products/StablilityChamber-Standalone/BODINCUBATOR.png"
};
