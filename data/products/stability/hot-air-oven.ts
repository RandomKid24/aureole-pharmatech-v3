import { ProductDetail } from '../types';

export const hotAirOven: ProductDetail = {
    description: "Aureole Pharma Tech hot air oven offers a controlled heating environment that is ideal for processes such as curing, drying, and conducting high-temperature tests. It delivers exceptional accuracy and superior quality in maintaining the required temperature conditions for these applications.",
    keyFeatures: [
        "Controlled heating environment for curing, drying, and high-temperature tests",
        "Exceptional accuracy in maintaining temperature conditions",
        "Superior quality construction for reliable performance",
        "Double-walled design with 60 mm Ceramic/Rock wool insulation for thermal efficiency",
        "High-temperature cut-off with settable thermostats for safety",
        "Ideal for laboratory and industrial applications requiring precise heat control"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "10°C above ambient to 250°C" },
        { parameter: "Accuracy", details: "± 1°C" },
        { parameter: "Uniformity", details: "± 5°C" }
    ],
    models: [
        { model: "AP_SA_HO2-1.0_V**", capacity: "100", interior: "450 × 450 × 500", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_HO2-1.5_V**", capacity: "150", interior: "500 × 500 × 600", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_HO2-2.0_V**", capacity: "200", interior: "600 × 500 × 675", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_HO2-2.5_V**", capacity: "250", interior: "600 × 600 × 700", trays: "3", power: "Single Phase 230 V" },
        { model: "APSA_HO2-3.0_V**", capacity: "300", interior: "600 × 600 × 850", trays: "4", power: "Single Phase 230 V" }
    ],
    regularAttributes: [
        "Doubled walled with ceramic wool / Rock wool Insulations of 60 mm",
        "High temperature cut-off Settable thermostats"
    ],
    addOnsAttributes: [
        "Hooter System",
        "Extra tray"
    ],
    image: "/products/StablilityChamber-Standalone/hot-air-oven.png"
};
