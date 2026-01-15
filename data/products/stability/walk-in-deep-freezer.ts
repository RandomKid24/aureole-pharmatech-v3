import { ProductDetail } from '../types';

export const walkInDeepFreezer: ProductDetail = {
    description: "Advanced walk-in deep freezers designed for bulk storage and industrial applications requiring ultra-low temperature conditions. These large-scale freezers feature a dual-zone design consisting of an anti-room for controlled temperature transition and a deep freezer zone for ultra-low temperature storage. They are ideal for pharmaceutical, biotechnology, laboratory, and industrial environments where safe, stable, and continuous low-temperature storage is critical.",
    keyFeatures: [
        "Double-walled construction with 125 mm PUF insulated modular panels",
        "Anti-room for controlled temperature transition",
        "Heavy-duty refrigeration system with high performance",
        "CFC-free cooling system with hermetically sealed compressor",
        "Mechanism for equalizing air pressure for door opening from inside",
        "Person trap alarm for operator safety",
        "SS 304 interior & exterior (either SS 304 or pre-coated GI)",
        "7” Touch Screen HMI",
        "Forced air circulation for uniform temperature distribution"
    ],
    specifications: [
        { parameter: "Anti-Room Temp Range", details: "2°C to 8°C" },
        { parameter: "Anti-Room Accuracy", details: "± 1°C" },
        { parameter: "Anti-Room Uniformity", details: "± 2°C" },
        { parameter: "Deep Freezer Temp Range", details: "-5°C to -20°C / -25°C to -40°C" },
        { parameter: "Deep Freezer Accuracy", details: "± 3°C" },
        { parameter: "Deep Freezer Uniformity", details: "± 5°C" }
    ],
    models: [
        { model: "Standard & Customised", capacity: "Custom", interior: "Built to Order", exterior: "Built to Order", trays: "As per choice", power: "Three Phase 415 V" }
    ],
    regularAttributes: [
        "Master & standby sensor",
        "Heavy-duty refrigeration system",
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
    image: "/products/StablilityChamber-Standalone/walk-in-deep-freezer.png"
};
