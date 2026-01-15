import { ProductDetail } from '../types';

export const deepFreezer: ProductDetail = {
    description: "Advanced ultra-low temperature freezers designed for long-term storage of sensitive biological materials, vaccines, and critical samples. These freezers provide precise temperature control in the ultra-low range essential for pharmaceutical storage, research applications, and sample preservation.",
    keyFeatures: [
        "Ultra-low temperature operation (-5°C to -20°C / -25°C to -40°C)",
        "Heavy-duty refrigeration system with high accuracy",
        "Uniform temperature distribution",
        "Advanced temperature monitoring and control",
        "Compliance with international standards",
        "User-friendly digital interface"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "-5°C to -20°C / -25°C to -40°C" },
        { parameter: "Accuracy", details: "± 3°C" },
        { parameter: "Uniformity", details: "± 5°C" }
    ],
    models: [
        { model: "AP_SA_DF-1.25_V**", capacity: "125", interior: "625 × 400 × 500", exterior: "810 × 700 × 1260", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_DF-2.0_V**", capacity: "200", interior: "650 × 500 × 625", exterior: "835 × 800 × 1385", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_DF-4.0_V**", capacity: "400", interior: "700 × 650 × 900", exterior: "885 × 950 × 1660", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_DF-6.0_V**", capacity: "600", interior: "750 × 800 × 1000", exterior: "935 × 1100 × 1760", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_DF-8.0_V**", capacity: "800", interior: "750 × 800 × 1350", exterior: "935 × 1100 × 2110", trays: "4", power: "Single Phase 230 V" },
        { model: "AP_SA_DF-1.0K_V**", capacity: "1000", interior: "825 × 825 × 1500", exterior: "1010 × 1125 × 2260", trays: "4", power: "Single Phase 230 V" }
    ],
    regularAttributes: [
        "Master & standby sensor",
        "SS door with gasket",
        "Heavy-duty refrigeration system"
    ],
    addOnsAttributes: [
        "21 CFR Part 11 compliance",
        "Mobile alert system",
        "Hooter system",
        "Extra trays"
    ],
    image: "/products/StablilityChamber-Standalone/deep-freezer.png"
};
