import { ProductDetail } from '../types';

export const ultrasonicPrimeAdvance: ProductDetail = {
    description: "The Prime Series with Advance Controlling represents a high-end ultrasonic cleaning solution designed for applications requiring precise control, programmability, and enhanced process reliability. Equipped with an advanced control interface, digital display, ultrasonic power regulation, and integrated chilling, this series ensures accurate temperature management and consistent cleaning performance. It is ideally suited for laboratories, medical facilities, manufacturing units, and research environments where repeatability and process optimization are critical.",
    keyFeatures: [
        "Advanced control interface for precise operation",
        "Digital display for real-time monitoring",
        "Accurate temperature control",
        "Ultrasonic power control",
        "Multiple operating modes",
        "Programmable features for process customization",
        "Integrated chiller system",
        "PSP (Pulse Sweep Power) functionality",
        "Degas mode for improved cavitation efficiency"
    ],
    specifications: [
        { parameter: "Tank Material", details: "SS 304" },
        { parameter: "Temperature Range", details: "10°C to 35°C" },
        { parameter: "Ultrasonic Power Control", details: "Programmable regulation" },
        { parameter: "Castor Wheels", details: "PU coated castor wheels included" },
        { parameter: "Ultrasonic Generator", details: "Advance latest MOSFET / IGBT based SMPS" }
    ],
    models: [
        { model: "AP_TT_UB_PSAC_30", capacity: "30 Liter", interior: "15 × 15 × 8 inches", exterior: "23 × 23 × 36 inches", trays: "Basket included", power: "500 Watts Ultrasonic" },
        { model: "AP_TT_UB_PSAC_50", capacity: "50 Liter", interior: "18 × 18 × 10 inches", exterior: "26 × 26 × 36 inches", trays: "Basket included", power: "750 Watts Ultrasonic" }
    ],
    regularAttributes: [
        "Advanced programmable control interface",
        "Ultrasonic power regulation",
        "Integrated chiller system",
        "PU coated castor wheels",
        "PSP (Pulse Sweep Power) functionality"
    ],
    addOnsAttributes: [
        "Digital Timer (0-99 min)",
        "Multiple operating modes",
        "Lid & Basket",
        "Drain Valve",
        "Power Cord & Manual"
    ],
    image: "/products/TableTop/prime-series-advance-controlling.png"
};
