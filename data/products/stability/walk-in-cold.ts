import { ProductDetail } from '../types';

export const walkInColdChamber: ProductDetail = {
    description: "Large-scale walk-in cold chambers designed for bulk storage and industrial applications that require precise temperature control within the cold range. These chambers are ideal for pharmaceutical, laboratory, and industrial environments where stable and uniform low-temperature conditions are essential for product storage, testing, and research activities.",
    keyFeatures: [
        "Viewing window with toughened glass",
        "Scanner: 8-point temperature sensor",
        "Door access system (Numeric)",
        "Master & standby refrigeration system",
        "Split-type refrigeration system",
        "Racks with trays",
        "Person trap alarm for operator safety",
        "7” Touch Screen HMI"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "2°C to 8°C" },
        { parameter: "Accuracy", details: "± 1°C" },
        { parameter: "Uniformity", details: "± 2°C" }
    ],
    models: [
        { model: "AP_WC_CC-2.0K_V**", capacity: "2000", interior: "1700 × 800 × 1900", exterior: "1860 × 960 × 2060", trays: "12", power: "Single Phase 230 V" },
        { model: "AP_WC_CC-3.0K_V**", capacity: "3000", interior: "1800 × 1000 × 1900", exterior: "1960 × 1160 × 2060", trays: "12", power: "Single Phase 230 V" },
        { model: "AP_WC_CC-6.0K_V**", capacity: "6000", interior: "2000 × 1500 × 2000", exterior: "2160 × 1660 × 2160", trays: "24", power: "Single Phase 230 V" },
        { model: "AP_WC_CC-8.0K_V**", capacity: "8000", interior: "2000 × 2000 × 2000", exterior: "2160 × 2160 × 2160", trays: "24", power: "Three Phase 415 V" },
        { model: "AP_WC_CC-10.0K_V**", capacity: "10000", interior: "2000 × 2500 × 2000", exterior: "2160 × 2660 × 2160", trays: "36", power: "Three Phase 415 V" },
        { model: "AP_WC_CC-20.0K_V**", capacity: "20000", interior: "2000 × 4000 × 2500", exterior: "2160 × 4160 × 2660", trays: "60", power: "Three Phase 415 V" },
        { model: "AP_WC_CC-30.0K_V**", capacity: "30000", interior: "2500 × 4800 × 2500", exterior: "2660 × 4960 × 2660", trays: "84", power: "Three Phase 415 V" },
        { model: "AP_WC_CC-40.0K_V**", capacity: "40000", interior: "4000 × 4000 × 2500", exterior: "4160 × 4160 × 2660", trays: "108", power: "Three Phase 415 V" },
        { model: "AP_WC_CC-50.0K_V**", capacity: "50000", interior: "4000 × 5000 × 2500", exterior: "4160 × 5160 × 2660", trays: "144", power: "Three Phase 415 V" }
    ],
    regularAttributes: [
        "Viewing window with toughened glass",
        "Scanner: 8-point temperature sensor",
        "Door access system (Numeric)",
        "Master & standby refrigeration system",
        "Split-type refrigeration system",
        "Racks with trays",
        "Person trap alarm",
        "7” Touch Screen HMI"
    ],
    addOnsAttributes: [
        "21 CFR Part 11 compliance",
        "Mobile alert system",
        "Hooter system",
        "Door access system (Biometric)",
        "Extra trays"
    ],
    image: "/products/StablilityChamber-Standalone/walk-in-cold-chamber.png"
};
