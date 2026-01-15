import { ProductDetail } from '../types';

export const muffleFurnace: ProductDetail = {
    description: "Advanced high-temperature muffle furnaces designed for heat treatment, material processing, and laboratory applications requiring precise temperature control up to 1150°C. These furnaces provide uniform heating and are essential for various industrial, research, and quality-control processes.",
    keyFeatures: [
        "High temperature operation up to 1150°C",
        "Precise temperature control with ±5°C accuracy",
        "Uniform heating distribution",
        "Advanced safety features with thermal insulation",
        "Digital control system with user-friendly interface",
        "Robust construction for industrial applications"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "Up to 1150°C" },
        { parameter: "Accuracy", details: "± 5°C" }
    ],
    models: [
        { model: "AP_SA_MF-0.6_V**", capacity: "6", interior: "150 × 300 × 150", exterior: "225 × 375 × 225", trays: "Not specified", power: "Single Phase 230 V" },
        { model: "AP_SA_MF-0.12_V**", capacity: "12", interior: "200 × 300 × 200", exterior: "275 × 375 × 275", trays: "Not specified", power: "Single Phase 230 V" }
    ],
    regularAttributes: [
        "High temperature operation",
        "Precise temperature control",
        "Uniform heating",
        "Safety features",
        "Digital control system",
        "Thermal insulation"
    ],
    addOnsAttributes: [
        "21 CFR Part 11 compliance",
        "Mobile alert system",
        "Hooter system",
        "Extra trays",
        "Scanner: 4-point temperature sensor"
    ],
    image: "/products/StablilityChamber-Standalone/muffle-furnace.png"
};
