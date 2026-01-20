import { ProductDetail } from '../types';

export const ultrasonicEco: ProductDetail = {
    description: "An ultrasonic bath, also known as an ultrasonic cleaner, is a device that uses ultrasound and a cleaning solvent to clean items. These baths are commonly used in various industries including laboratories, electronics manufacturing, medical facilities, jewellery making, and automotive repair.",
    keyFeatures: [
        "Healthcare - Hospitals (OT, CSSD) & General Surgeons",
        "Pharmaceuticals - Quality , R&D, Production",
        "Institutes - Research Labs",
        "Mechanical - Quality, Production",
        "Jewelry",
        "Food Industries - QC, Testing Labs",
        "Tank & Enclosure made of SS 304",
        "Advance latest MOSFET/IGBT based SMPS",
        "Imported PZT type transducer bonded with weld bond technique",
        "Degas Mode: On / Off",
        "Digital Timer: 0 to 15 min / 0 to 99 min"
    ],
    specifications: [
        { parameter: "Tank Material", details: "SS 304" },
        { parameter: "Enclosure Material", details: "SS 304" },
        { parameter: "Ultrasonic Frequency", details: "33±3 kHz / 40/33±3 kHz" },
        { parameter: "Temperature", details: "45°C (Inbuilt) / Amb. - 60°C" },
        { parameter: "Transducer", details: "Imported PZT type bonded with weld bond technique" },
        { parameter: "Ultrasonic Generator", details: "Advance latest MOSFET/IGBT based SMPS" },
        { parameter: "Accessories", details: "Lid, Basket, Drain Valve, Power Cord, Manual" }
    ],
    models: [
        { model: "AP_TT_UB_ES_3", capacity: "3 Liter", interior: "240 × 140 × 100", exterior: "265 × 162 × 240", power: "230 VAC" },
        { model: "AP_TT_UB_ES_5", capacity: "5 Liter", interior: "235 × 235 × 100", exterior: "265 × 265 × 250", power: "230 VAC" },
        { model: "AP_TT_UB_ES_10", capacity: "10 Liter", interior: "300 × 240 × 150", exterior: "325 × 276 × 260", power: "230 VAC" },
        { model: "AP_TT_UB_ES_22", capacity: "22 Liter", interior: "500 × 300 × 150", exterior: "530 × 320 × 400", power: "230 VAC" }
    ],
    regularAttributes: [
        "Ultrasonic Power: 100W (3L/5L), 250W (10L), 400W (22L)",
        "Heater Power: 100W (3L), 200W (5L/10L), 500W (22L)",
        "PSP: NA",
        "Ultrasonic Freq: 33±3 (3L), 40/33±3 (Others)",
        "Timer Digital: 0-15 min (3L), 0-99 min (Others)",
        "Degas Mode: On / Off",
        "Temperature: 45°C Inbuilt (3L), Amb. - 60°C (Others)"
    ],
    addOnsAttributes: [
        "Lid",
        "Basket",
        "Drain Valve",
        "Power Cord",
        "Operation Manual"
    ],
    image: "/products/TableTop/eco-series.png"
};
