import { ProductDetail } from '../types';

export const ultrasonicPrimeChilling: ProductDetail = {
    description: "A chiller sonicator, also known as a refrigerated ultrasonic bath, combines ultrasonic cleaning with integrated refrigeration to maintain controlled low temperatures during cleaning operations. The Prime Series with Chilling is specifically designed for applications where temperature rise during ultrasonication must be prevented, ensuring sample integrity, repeatability, and precise process control.",
    keyFeatures: [
        "Integrated chilling system",
        "Precise temperature control (10°C to 35°C)",
        "Advanced ultrasonic cleaning performance",
        "Digital interface for easy operation",
        "PSP (Pulse Sweep Power) functionality",
        "Degas mode for enhanced cleaning efficiency",
        "Refrigeration capability for temperature-sensitive applications"
    ],
    specifications: [
        { parameter: "Tank Material", details: "SS 304" },
        { parameter: "Temperature Range", details: "10°C to 35°C" },
        { parameter: "Chiller System", details: "Integrated high-performance refrigeration" },
        { parameter: "Ultrasonic Frequency", details: "33 ± 3 kHz" },
        { parameter: "Ultrasonic Generator", details: "Advance latest MOSFET / IGBT based SMPS" }
    ],
    models: [
        { model: "AP_TT_UB_CS_TT/FM_10", capacity: "10 Liter", interior: "12 × 10 × 6 inches", exterior: "18.4 × 17.2 × 22 inches", trays: "Basket included", power: "250 Watts Ultrasonic" },
        { model: "AP_TT_UB_CS_TT/FM_20", capacity: "20 Liter", interior: "18 × 12 × 6 inches", exterior: "24 × 20 × 20 inches", trays: "Basket included", power: "400 Watts Ultrasonic" }
    ],
    regularAttributes: [
        "Integrated chilling system",
        "PSP (Pulse Sweep Power) functionality",
        "Degas mode (Yes)",
        "SS 304 Tank & Enclosure",
        "Imported PZT transducer with weld bond"
    ],
    addOnsAttributes: [
        "Digital Timer (0-99 min)",
        "Lid & Basket",
        "Drain Valve",
        "Power Cord & Manual"
    ],
    image: "/products/TableTop/prime-series-chilling.png"
};
