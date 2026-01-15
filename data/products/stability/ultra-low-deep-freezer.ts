import { ProductDetail } from '../types';

export const ultraLowDeepFreezer: ProductDetail = {
    description: "Advanced ultra-low temperature freezers designed for critical storage of biological samples, vaccines, and research materials at temperatures down to -86°C. These specialized freezers provide precise ultra-low temperature control essential for long-term preservation of sensitive biological materials and pharmaceutical applications.",
    keyFeatures: [
        "Ultra-low temperature operation (-40°C to -86°C)",
        "Heavy-duty refrigeration system with high accuracy",
        "Master & standby sensor for reliability",
        "SS door with gasket for optimal sealing",
        "Quick release filter for easy maintenance",
        "One-hand operation handle for convenience",
        "Vacuum release port for quick re-access to samples",
        "Lockable cold air inner door with adjustable closing pressure"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "-40°C to -86°C" },
        { parameter: "Accuracy", details: "± 5°C" },
        { parameter: "Uniformity", details: "± 5°C" }
    ],
    models: [
        { model: "AP_SA_DF-3.4_V**", capacity: "340", interior: "488 × 607 × 1140", exterior: "854 × 1006 × 1907", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_DF-4.08_V**", capacity: "408", interior: "606 × 575 × 1180", exterior: "872 × 1028 × 1945", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_DF-5.88_V**", capacity: "588", interior: "606 × 738 × 1310", exterior: "872 × 1192 × 1994", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_DF-7.28_V**", capacity: "728", interior: "963 × 571 × 1350", exterior: "1229 × 1012 × 1994", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_DF-8.38_V**", capacity: "838", interior: "894 × 718 × 1310", exterior: "1160 × 1172 × 1994", trays: "3", power: "Single Phase 230 V" }
    ],
    regularAttributes: [
        "Master & standby sensor",
        "SS door with gasket",
        "Heavy-duty refrigeration system",
        "Quick release filter",
        "One-hand operation handle",
        "Vacuum release port for quick re-access",
        "Adjustable inner door closing pressure"
    ],
    addOnsAttributes: [
        "21 CFR Part 11 compliance",
        "Mobile alert system",
        "Hooter system",
        "Extra trays"
    ],
    image: "/products/StablilityChamber-Standalone/ultra-low-deep-freezer.png"
};
