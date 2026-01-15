import { ProductDetail } from '../types';

export const ultrasonicPrime: ProductDetail = {
    description: "An ultrasonic bath, also known as an ultrasonic cleaner, is a device that uses ultrasound waves and a suitable cleaning solvent to remove contaminants from components and instruments. The Prime Series ultrasonic baths are designed for laboratories, electronics manufacturing, medical facilities, jewellery making, and automotive applications where advanced control, heating capability, and high-performance cleaning are required.",
    keyFeatures: [
        "Advanced control system",
        "Multiple frequency options",
        "Integrated heating capability",
        "Digital display for precise monitoring",
        "PSP (Pulse Sweep Power) functionality",
        "Degas mode for enhanced cleaning efficiency"
    ],
    specifications: [
        { parameter: "Tank Material", details: "SS 304" },
        { parameter: "PSP Functionality", details: "Included for uniform cavitation" },
        { parameter: "Ultrasonic Frequency", details: "25 / 33 / 40 ± 3 kHz" },
        { parameter: "Temperature Range", details: "Ambient to 60°C" },
        { parameter: "Ultrasonic Generator", details: "Advance latest MOSFET / IGBT based SMPS" }
    ],
    models: [
        { model: "AP_TT_UB_PS_6.5", capacity: "6.5 Liter", interior: "12 × 6 × 6 inches", exterior: "15 × 9.8 × 15.4 inches", trays: "Basket included", power: "150W Ultra / 500W Heat" },
        { model: "AP_TT_UB_PS_20", capacity: "20 Liter", interior: "14 × 12 × 8 inches", exterior: "17.4 × 16 × 16.8 inches", trays: "Basket included", power: "400W Ultra / 500W Heat" },
        { model: "AP_TT_UB_PS_30", capacity: "30 Liter", interior: "15 × 15 × 8 inches", exterior: "19.2 × 19.8 × 19 inches", trays: "Basket included", power: "500W Ultra / 500W Heat" }
    ],
    regularAttributes: [
        "PSP (Pulse Sweep Power) functionality",
        "Multiple frequency options",
        "Integrated heating capability",
        "Advanced control system",
        "Degas mode (On/Off)"
    ],
    addOnsAttributes: [
        "Digital Timer (0-99 min)",
        "Lid & Basket",
        "Drain Valve",
        "Power Cord & Manual"
    ],
    image: "/products/TableTop/prime-series.png"
};
