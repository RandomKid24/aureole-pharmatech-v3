import { ProductDetail } from '../types';

export const constantWaterBath: ProductDetail = {
    description: "The Constant Temperature Water Bath is a laboratory testing cabinet widely used across industries and research laboratories. It operates using heated water to uniformly raise and maintain the temperature of samples. This system is especially useful for incubating sensitive biological samples that cannot be exposed to direct dry heat.",
    keyFeatures: [
        "Constant and uniform temperature control",
        "Digital temperature display",
        "Stainless steel construction",
        "Overshoot & water level low cut-off protection",
        "Stainless steel gabled lid",
        "Concentric ring lid with multiple holes for sample containers"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "Ambient +5°C to 99.9°C" },
        { parameter: "Resolution", details: "0.1°C" },
        { parameter: "Control Accuracy", details: "±0.5°C" },
        { parameter: "Uniformity", details: "±0.5°C" },
        { parameter: "Timer", details: "0 to 9999 minutes" },
        { parameter: "Safety Feature", details: "Overshoot & Water Level Low Cut Off" }
    ],
    models: [
        { model: "AP_TT_WB_6", capacity: "6 L", interior: "300×150×150 mm", exterior: "Standard Benchtop", trays: "3 Holes / Heater Cover Tray", power: "0.5 kW" },
        { model: "AP_TT_WB_14", capacity: "14 L", interior: "320×300×150 mm", exterior: "Standard Benchtop", trays: "6 Holes / Heater Cover Tray", power: "1.0 kW" },
        { model: "AP_TT_WB_20", capacity: "20 L", interior: "500×300×150 mm", exterior: "Standard Benchtop", trays: "12 Holes / Heater Cover Tray", power: "2.25 kW" },
        { model: "AP_TT_WB_28", capacity: "28 L", interior: "500×300×250 mm", exterior: "Standard Benchtop", trays: "12 Holes / Heater Cover Tray", power: "2.25 kW" }
    ],
    regularAttributes: [
        "Digital temperature display",
        "Stainless steel gabled lid",
        "Stainless steel heater cover tray",
        "Stainless steel concentric ring lid",
        "Overshoot protection system"
    ],
    addOnsAttributes: [
        "Digital Timer (0-9999 min)",
        "Custom hole sizes in lid",
        "High-accuracy monitoring probes",
        "Operation manual"
    ],
    image: "/products/TableTop/constant-water-bath.png"
};
