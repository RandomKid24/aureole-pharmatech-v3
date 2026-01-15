import { ProductDetail } from '../types';

export const vacuumOven: ProductDetail = {
    description: "Advanced vacuum ovens designed for applications requiring a controlled atmosphere and uniform heating under vacuum conditions. These precision ovens are ideal for drying, curing, degassing, and other processes that require both accurate temperature control and a vacuum environment to achieve optimal results.",
    keyFeatures: [
        "High vacuum capability up to 760 mm of mercury (-30)",
        "Precise temperature control with ±1°C accuracy",
        "Uniform heating distribution under vacuum conditions",
        "Advanced safety interlocks with vacuum monitoring",
        "Digital display for temperature and vacuum pressure",
        "Toughened glass window for sample viewing during operation",
        "Stainless steel construction for durability and corrosion resistance"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "60°C to 200°C" },
        { parameter: "Accuracy", details: "± 1°C" },
        { parameter: "Uniformity", details: "± 5°C" },
        { parameter: "Vacuum", details: "760 mm of mercury (-30)" }
    ],
    models: [
        { model: "AP_SA_VO-0.15_V**", capacity: "15", interior: "22.5 Dia × 30 Depth", exterior: "28.5 × 36 × 28.5", trays: "Not specified", power: "Single Phase 230 V" },
        { model: "AP_SA_VO-0.21_V**", capacity: "21", interior: "30 Dia × 30 Depth", exterior: "36 × 36 × 36", trays: "Not specified", power: "Single Phase 230 V" },
        { model: "AP_SA_VO-0.27_V**", capacity: "27", interior: "30 Dia × 38 Depth", exterior: "36 × 44 × 36", trays: "Not specified", power: "Single Phase 230 V" }
    ],
    regularAttributes: [
        "High vacuum capability",
        "Precise temperature control",
        "Uniform heating",
        "Safety interlocks",
        "Digital display for temperature and vacuum",
        "Toughened glass window for sample viewing"
    ],
    addOnsAttributes: [
        "21 CFR Part 11 compliance",
        "Mobile alert system",
        "Hooter system",
        "Extra trays",
        "Scanner: 4-point temperature sensor",
        "Door access system (Numeric / Biometric)"
    ],
    image: "/products/StablilityChamber-Standalone/vacuum-oven.png"
};
