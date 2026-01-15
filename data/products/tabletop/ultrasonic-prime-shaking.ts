import { ProductDetail } from '../types';

export const ultrasonicPrimeShaking: ProductDetail = {
    description: "The Prime Series ultrasonic bath with Heating & Shaking is a sophisticated laboratory instrument engineered to meet the demanding requirements of modern research and industrial applications. By combining ultrasonic cleaning, precise temperature control, and mechanical shaking, this system delivers a versatile and highly efficient solution for a wide range of sample treatment and processing tasks.",
    keyFeatures: [
        "Integrated heating capability",
        "Mechanical shaking functionality",
        "Ultrasonic cleaning system",
        "Precise temperature control",
        "Adjustable shaking frequency (20 – 45 RPM)",
        "Sophisticated laboratory-grade design",
        "Suitable for demanding research and industrial applications"
    ],
    specifications: [
        { parameter: "Working Temp Range", details: "Ambient to 60°C" },
        { parameter: "Temperature Accuracy", details: "±1°C" },
        { parameter: "Shaking Frequency", details: "20 – 45 RPM (Adjustable)" },
        { parameter: "Shaking Stroke", details: "50 mm" },
        { parameter: "Ultrasonic Frequency", details: "33 kHz ± 3" }
    ],
    models: [
        { model: "AP_TT_UB_PSHS_20", capacity: "20 Liter", interior: "485 × 300 × 150 mm", exterior: "655 × 380 × 425 mm", trays: "385 × 260 × 65 mm Tray", power: "230 VAC, 10 A, 50 Hz" }
    ],
    regularAttributes: [
        "Mechanical shaking functionality",
        "Integrated heating system",
        "Adjustable shaking RPM",
        "Precision display resolution (1°C)",
        "Laboratory-grade robust construction"
    ],
    addOnsAttributes: [
        "Digital Timer",
        "Lid & Specialized Shaking Basket",
        "Drain Valve",
        "Power Cord & Manual"
    ],
    image: "/products/TableTop/prime-series-heating-shaking.png"
};
