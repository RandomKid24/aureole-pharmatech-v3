import { ProductDetail } from '../types';

export const oilBath: ProductDetail = {
    description: "An oil bath, commonly used in chemistry laboratories, involves immersing reaction vessels or samples in heated oil to maintain stable and controlled temperatures, crucial for sensitive experiments and reactions. Moreover it has unique design to achieve upto 250°C.",
    keyFeatures: [
        "High temperature capability up to 250°C",
        "Oil-based heating for stable temperature control",
        "Precise control for sensitive experiments",
        "Over Temperature & Thermostatic safety features",
        "Stainless Steel Stand with Heavy Wheels",
        "Integrated timer functionality (0 to 9999 minutes)"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "50°C to 250°C" },
        { parameter: "Resolution", details: "1°C" },
        { parameter: "Control Accuracy", details: "± 2°C" },
        { parameter: "Uniformity", details: "± 3°C" },
        { parameter: "Heating Medium", details: "Oil" },
        { parameter: "Safety Feature", details: "Over Temperature & Thermostatic" },
        { parameter: "Stand", details: "Stainless Steel with Heavy Wheels" }
    ],
    models: [
        { model: "AP_TT_OB_45", capacity: "1 Liter", interior: "150 mm OD Vessel", exterior: "Standard Benchtop", trays: "Suitable for 1L Flask", power: "0.4 kW" },
        { model: "AP_TT_OB_65", capacity: "3 Liters", interior: "200 mm OD Vessel", exterior: "Standard Benchtop", trays: "Suitable for 3L Flask", power: "1.0 kW" },
        { model: "AP_TT_OB_85", capacity: "20 Liters", interior: "400 mm OD Vessel", exterior: "Standard Benchtop", trays: "Suitable for 20L Flask", power: "2.5 kW" }
    ],
    regularAttributes: [
        "Digital control system",
        "Stainless Steel Stand",
        "Heavy Wheels for mobility",
        "Thermostatic safety controller",
        "Oil-based heating jacket"
    ],
    addOnsAttributes: [
        "Digital Timer (0-9999 min)",
        "High-temperature oil",
        "Calibration certification",
        "Custom vessel holders"
    ],
    image: "/products/TableTop/oil-bath.png"
};
