import { ProductDetail } from '../types';

export const circulatingWaterBath: ProductDetail = {
    description: "The Circulating Water Bath is a precision laboratory instrument designed to maintain highly uniform temperatures through continuous water circulation. The built-in circulation system ensures even heat distribution throughout the bath, making it ideal for applications that demand higher temperature stability and accuracy than conventional water baths.",
    keyFeatures: [
        "Integrated circulation system for uniform temperature distribution",
        "Digital temperature control with high accuracy",
        "Stainless steel construction for durability and hygiene",
        "Built-in circulation pump",
        "Overshoot & water level low cut-off protection",
        "Stainless steel gabled lid",
        "Concentric ring lid with multiple holes for sample containers"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "Ambient +5°C to 95°C" },
        { parameter: "Resolution", details: "0.1°C" },
        { parameter: "Control Accuracy", details: "±0.3°C" },
        { parameter: "Uniformity", details: "±0.3°C" },
        { parameter: "Timer", details: "0 to 9999 minutes" },
        { parameter: "Safety Feature", details: "Overshoot & Water Level Low Cut Off" },
        { parameter: "Circulation", details: "Built-in pump" }
    ],
    models: [
        { model: "AP_TT_WBC_05", capacity: "5 L", interior: "300×150×150 mm", exterior: "Benchtop", trays: "3 Holes / Heater Cover Tray", power: "0.5 kW" },
        { model: "AP_TT_WBC_14", capacity: "14 L", interior: "320×300×150 mm", exterior: "Benchtop", trays: "6 Holes / Heater Cover Tray", power: "1.5 kW" },
        { model: "AP_TT_WBC_28", capacity: "28 L", interior: "500×300×250 mm", exterior: "Benchtop", trays: "12 Holes / Heater Cover Tray", power: "2.0 kW" }
    ],
    regularAttributes: [
        "Integrated circulation pump",
        "Digital temperature control",
        "Stainless steel construction",
        "Safety cut-off protection",
        "Gabled & Concentric lid set"
    ],
    addOnsAttributes: [
        "Digital Timer (0-9999 min)",
        "External circulation ports",
        "Calibration certification",
        "Extra containers"
    ],
    image: "/products/TableTop/circulating-water-bath.png"
};
