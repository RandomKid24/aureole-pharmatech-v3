import { ProductDetail } from '../types';

export const ultrasonicEco: ProductDetail = {
    description: "An ultrasonic bath, also known as an ultrasonic cleaner, is a device that uses ultrasound combined with a cleaning solvent to effectively clean components and instruments. Eco Series ultrasonic baths are widely used in laboratories, electronics manufacturing, medical facilities, jewellery making, and automotive repair applications. Designed for energy efficiency and ease of use, these compact units deliver reliable cleaning performance for routine laboratory and industrial needs.",
    keyFeatures: [
        "Energy-efficient design",
        "Digital frequency control",
        "Compact footprint for bench-top use",
        "Easy and user-friendly operation",
        "Degas mode for improved cleaning efficiency",
        "Inbuilt temperature control"
    ],
    specifications: [
        { parameter: "Tank Material", details: "SS 304" },
        { parameter: "Ultrasonic Generator", details: "Advanced MOSFET / IGBT based SMPS" },
        { parameter: "Ultrasonic Frequency", details: "33 ± 3 kHz or 40/33 ± 3 kHz" },
        { parameter: "Degas Mode", details: "On / Off" },
        { parameter: "Transducer", details: "Imported PZT type bonded at bottom" }
    ],
    models: [
        { model: "AP_TT_UB_ES_3", capacity: "3 Liter", interior: "240 × 140 × 100", exterior: "265 × 162 × 240", trays: "Basket included", power: "100W Ultra / 100W Heat" },
        { model: "AP_TT_UB_ES_5", capacity: "5 Liter", interior: "235 × 235 × 100", exterior: "265 × 265 × 250", trays: "Basket included", power: "100W Ultra / 200W Heat" },
        { model: "AP_TT_UB_ES_10", capacity: "10 Liter", interior: "300 × 240 × 150", exterior: "325 × 276 × 260", trays: "Basket included", power: "250W Ultra / 200W Heat" },
        { model: "AP_TT_UB_ES_22", capacity: "22 Liter", interior: "500 × 300 × 150", exterior: "530 × 320 × 400", trays: "Basket included", power: "400W Ultra / 500W Heat" }
    ],
    regularAttributes: [
        "Digital frequency control",
        "Degas mode (On/Off)",
        "Inbuilt temperature control",
        "SS 304 Tank & Enclosure",
        "Imported PZT transducer with weld bond"
    ],
    addOnsAttributes: [
        "Digital Timer (0-99 min)",
        "Lid & Basket",
        "Drain Valve",
        "Power Cord & Manual"
    ],
    image: "/products/TableTop/eco-series.png"
};
