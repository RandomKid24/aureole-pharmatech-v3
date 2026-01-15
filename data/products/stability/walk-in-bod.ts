import { ProductDetail } from '../types';

export const walkInBodIncubator: ProductDetail = {
    description: "Aureole PharmaTech’s premium walk-in BOD incubators are designed to maintain precise and uniform temperature conditions throughout the chamber. These incubators are renowned for their exceptional accuracy, making them ideal for applications that demand stringent temperature control. Engineered to meet the exacting requirements of laboratories and research facilities, they ensure reliable performance for experiments and processes requiring stable and uniform incubation environments.",
    keyFeatures: [
        "Precise and uniform temperature conditions",
        "Exceptional accuracy for stringent temperature control",
        "Full door made of toughened glass with polysulphides for safe sample viewing",
        "Trays and detachable racks with adjustable angles",
        "7” Touch Screen HMI (Allen Bradley)",
        "Master & standby refrigeration system",
        "Split-type refrigeration system",
        "Scanner: 8-point temperature sensor",
        "Person trap / indication switch inside chamber with audible alarm outside",
        "Door access system (Numeric)"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "10°C to 60°C" },
        { parameter: "Accuracy", details: "± 0.2°C" },
        { parameter: "Uniformity", details: "± 1.0°C" }
    ],
    models: [
        { model: "AP_WC_BO-2.0K_V**", capacity: "2000", interior: "1700 × 800 × 1900", exterior: "1860 × 960 × 2060", trays: "12", power: "Single Phase 230 V" },
        { model: "AP_WC_BO-3.0K_V**", capacity: "3000", interior: "1800 × 1000 × 1900", exterior: "1960 × 1160 × 2060", trays: "12", power: "Single Phase 230 V" },
        { model: "AP_WC_BO-6.0K_V**", capacity: "6000", interior: "2000 × 1500 × 2000", exterior: "2160 × 1660 × 2160", trays: "24", power: "Single Phase 230 V" },
        { model: "AP_WC_BO-8.0K_V**", capacity: "8000", interior: "2000 × 2000 × 2000", exterior: "2160 × 2160 × 2160", trays: "24", power: "Three Phase 415 V" },
        { model: "AP_WC_BO-10.0K_V**", capacity: "10000", interior: "2000 × 2500 × 2000", exterior: "2160 × 2660 × 2160", trays: "36", power: "Three Phase 415 V" },
        { model: "AP_WC_BO-20.0K_V**", capacity: "20000", interior: "2000 × 4000 × 2500", exterior: "2160 × 4160 × 2660", trays: "60", power: "Three Phase 415 V" },
        { model: "AP_WC_BO-30.0K_V**", capacity: "30000", interior: "2500 × 4800 × 2500", exterior: "2660 × 4960 × 2660", trays: "84", power: "Three Phase 415 V" },
        { model: "AP_WC_BO-40.0K_V**", capacity: "40000", interior: "4000 × 4000 × 2500", exterior: "4160 × 4160 × 2660", trays: "108", power: "Three Phase 415 V" },
        { model: "AP_WC_BO-50.0K_V**", capacity: "50000", interior: "4000 × 5000 × 2500", exterior: "4160 × 5160 × 2660", trays: "144", power: "Three Phase 415 V" }
    ],
    regularAttributes: [
        "Full door of toughened glass with polysulphides for viewing samples without disturbing test conditions & ensuring human safety",
        "Trays and detachable racks with adjustable angles",
        "7” Touch Screen HMI (Allen Bradley)",
        "Master & standby refrigeration system",
        "Split-type refrigeration system",
        "Scanner: 8-point temperature sensor",
        "Person trap / indication switch inside chamber with audible alarm outside",
        "Door access system (Numeric)"
    ],
    addOnsAttributes: [
        "21 CFR Part 11 compliance",
        "GSM alert system",
        "Hooter system",
        "Door access system (Biometric)",
        "Extra trays"
    ],
    image: "/products/StablilityChamber-Standalone/walk-in-bod-incubator.png"
};
