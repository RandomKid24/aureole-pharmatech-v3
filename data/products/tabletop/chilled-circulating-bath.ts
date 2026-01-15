import { ProductDetail } from '../types';

export const chilledCirculatingBath: ProductDetail = {
    description: "A chilled circulating bath is a specialized piece of equipment commonly used in laboratory settings to maintain low temperatures for various applications such as cooling samples, apparatus, or reactions. It works by circulating chilled fluid through a cooling coil or jacket surrounding the sample or vessel, ensuring uniform and precise cooling.",
    keyFeatures: [
        "Cooling capability for low temperature applications",
        "Circulation system for uniform cooling",
        "Temperature control with high accuracy",
        "Digital interface for real-time monitoring",
        "Uniform and precise cooling for chemistry and biology",
        "Silicon circulating pipe with insulating cover",
        "Water Level Low Cut Off safety feature"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "-10°C to Ambient (Optional)" },
        { parameter: "Resolution", details: "1°C" },
        { parameter: "Control Accuracy", details: "± 1°C" },
        { parameter: "Uniformity", details: "± 2°C" },
        { parameter: "Cooling Power", details: "750W - 2500W" },
        { parameter: "Safety Feature", details: "Water Level Low Cut Off" },
        { parameter: "Circulating Pipe", details: "Silicon with insulating cover" }
    ],
    models: [
        { model: "AP_TT_CCB_06", capacity: "6 Liters", interior: "Standard Tank", exterior: "Benchtop Chiller", trays: "Flow: 9 LPM", power: "750 W Cooling" },
        { model: "AP_TT_CCB_10", capacity: "10 Liters", interior: "Standard Tank", exterior: "Benchtop Chiller", trays: "Flow: 15 LPM", power: "1250 W Cooling" },
        { model: "AP_TT_CCB_20", capacity: "20 Liters", interior: "Standard Tank", exterior: "Benchtop Chiller", trays: "Flow: 20 LPM", power: "2500 W Cooling" }
    ],
    regularAttributes: [
        "Insulated silicon circulating pipe",
        "Digital temperature interface",
        "Integrated refrigeration system",
        "High-flow circulation pump",
        "SS 304 Tank construction"
    ],
    addOnsAttributes: [
        "Extended temperature range (-20°C optional)",
        "External circulation kit",
        "Calibration certification",
        "Extra length insulating pipes"
    ],
    image: "/products/TableTop/chilled-circulating-bath.png"
};
