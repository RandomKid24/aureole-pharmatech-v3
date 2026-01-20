import { ProductDetail } from '../types';

export const walkInColdChamber: ProductDetail = {
    description: "Aureole Pharma Tech’s Walk-in Cold chambers are purpose-built for the meticulous temperature control required in cold storage of biological samples, serving various industries including biotechnology, food processing, pharmaceuticals, and agrochemical manufacturing. These units are constructed using Polyurethane Foam (PUF) panels and are manufactured in accordance with Good Manufacturing Practices (GMP) standards. They are equipped with a refrigeration system and can optionally include a standby refrigeration system to ensure uninterrupted operation.\n\nOur Walk-in Cold chambers offer a reliable and environmentally responsible way to preserve the quality and integrity of biological samples over extended periods. Their adherence to temperature control and distribution, along with eco-friendly refrigeration systems, makes them valuable assets for organizations in various industries that require precise cold storage solutions.",
    keyFeatures: [
        "Precise Temperature Control: These units are designed to maintain a precise and consistent temperature over extended periods, ensuring the safe and stable storage of sensitive biological samples.",
        "Uniform Temperature: They provide a complete solution for achieving uniform temperature distribution throughout the chamber. This is critical for preventing temperature variations that can compromise the integrity of stored samples.",
        "Eco-Friendly: Our units feature a CFC-free refrigeration system, aligning with eco-friendly practices and sustainability goals."
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
        "Door with viewing window is of toughened glass with polysulphides to view the samples without disturbing the test conditions",
        "Trays and detachable racks with adjustable angles",
        "7'' Touch Screen HMI (Allen Bradly)",
        "Master & Stand By refrigeration System",
        "Split type refrigeration system",
        "Scanner : 8 pt. Temperature Sensor",
        "Person trap/ indication switch inside chamber with audible alarm outside.",
        "Door Access System (Numeric)"
    ],
    addOnsAttributes: [
        "21 CFR part 11 compliance",
        "GSM alert system",
        "Hooter System",
        "Door Access System (Numeric or Biometric)",
        "Extra Trays"
    ],
    image: "/products/StablilityChamber-Standalone/walk-in-cold-chamber.png"
};
