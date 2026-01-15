import { ProductDetail } from '../types';

export const hotAirOven: ProductDetail = {
    description: "Advanced hot air ovens designed for controlled heating environments, ideal for curing, drying, sterilization, and conducting high-temperature tests. These ovens provide uniform heat distribution and precise temperature control, making them suitable for a wide range of laboratory and industrial applications.",
    keyFeatures: [
        "High temperature capability up to 250°C",
        "Uniform heat distribution for consistent results",
        "Digital control system with precise temperature control",
        "Advanced safety features with thermal insulation",
        "Stainless steel construction for durability",
        "Multiple tray configurations for different applications"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "10°C above ambient to 250°C" },
        { parameter: "Accuracy", details: "± 1°C" },
        { parameter: "Uniformity", details: "± 5°C" }
    ],
    models: [
        { model: "AP_SA_HO2-1.0_V**", capacity: "100", interior: "450 × 450 × 500", exterior: "575 × 865 × 1260", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_HO2-1.5_V**", capacity: "150", interior: "500 × 500 × 600", exterior: "625 × 965 × 1360", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_HO2-2.0_V**", capacity: "200", interior: "600 × 500 × 675", exterior: "725 × 965 × 1435", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_HO2-2.5_V**", capacity: "250", interior: "600 × 600 × 700", exterior: "725 × 1065 × 1460", trays: "3", power: "Single Phase 230 V" },
        { model: "APSA_HO2-3.0_V**", capacity: "300", interior: "600 × 600 × 850", exterior: "725 × 1065 × 1610", trays: "4", power: "Single Phase 230 V" }
    ],
    regularAttributes: [
        "High temperature capability",
        "Uniform heat distribution",
        "Digital control system",
        "Safety features"
    ],
    addOnsAttributes: [
        "21 CFR Part 11 compliance",
        "Mobile alert system",
        "Hooter system",
        "Extra trays",
        "Scanner: 4-point temperature sensor",
        "Door access system (Numeric / Biometric)"
    ],
    image: "/products/StablilityChamber-Standalone/hot-air-oven.png"
};
