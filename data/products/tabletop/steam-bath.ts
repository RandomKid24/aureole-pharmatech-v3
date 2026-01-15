import { ProductDetail } from '../types';

export const steamBath: ProductDetail = {
    description: "The Steam Bath is an advanced version of a water bath, specifically designed to reach and maintain a constant temperature of 100°C. This machine is essential for substance testing where specimens must be subjected to heated water or steam to observe their behavior under rising temperatures.",
    keyFeatures: [
        "Advanced steam heating system",
        "Capable of reaching and maintaining a precise 100°C temperature",
        "Stainless steel validation port",
        "Integrated timer functionality (0 to 9999 minutes)",
        "Mobile design with a stainless steel stand and trolley",
        "Overshoot and Water Level Low Cut-Off protection"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "Ambient + 5°C to 100°C" },
        { parameter: "Resolution", details: "0.1°C" },
        { parameter: "Control Accuracy", details: "± 2°C" },
        { parameter: "Uniformity", details: "± 2°C" },
        { parameter: "Heating Method", details: "Steam" },
        { parameter: "Validation Port", details: "Stainless Steel" },
        { parameter: "Safety Feature", details: "Overshoot & Water Level Low Cut Off" }
    ],
    models: [
        { model: "AP_TT_SB_45", capacity: "45 Liters", interior: "500 x 300 x 325 mm", exterior: "Includes Trolley", trays: "Suitable for 1L x 12 bottles", power: "1.5 kW" },
        { model: "AP_TT_SB_65", capacity: "65 Liters", interior: "500 x 300 x 425 mm", exterior: "Includes Trolley", trays: "Suitable for 5L x 2 bottles", power: "3.0 kW" },
        { model: "AP_TT_SB_85", capacity: "85 Liters", interior: "500 x 400 x 150 mm", exterior: "Includes Trolley", trays: "Suitable for 5L x 4 bottles", power: "5.0 kW" }
    ],
    regularAttributes: [
        "Digital control system",
        "Stainless steel validation port",
        "Stainless steel stand and trolley",
        "Heavy wheels for mobility",
        "Overshoot protection"
    ],
    addOnsAttributes: [
        "Digital Timer (0-9999 min)",
        "Additional validation ports",
        "Calibration certification",
        "Custom bottle racks"
    ],
    image: "/products/TableTop/steam-bath.png"
};
