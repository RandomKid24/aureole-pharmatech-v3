import { ProductDetail } from '../types';

export const refrigeratedCircularBath: ProductDetail = {
    description: "The refrigerated circulating bath allows researchers to achieve precise and consistent temperature control over a wide range, usually from below room temperature to sub-zero temperatures. This makes it suitable for various applications such as cooling reactions, maintaining samples at specific temperatures, or controlling the temperature of analytical instruments like spectrophotometers and chromatography systems.",
    keyFeatures: [
        "Precise temperature control over wide range",
        "Sub-zero temperature capability",
        "Cooling reactions and maintaining samples",
        "Controlling temperature of analytical instruments",
        "Suitable for spectrophotometers and chromatography systems",
        "Advanced refrigeration system",
        "Circulation pump for uniform temperature distribution",
        "Digital control interface",
        "Over Temperature & Water Level Low Cut Off safety features",
        "Silicon circulating pipe with insulating cover"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "-20°C to 150°C (Optional)" },
        { parameter: "Resolution", details: "1°C" },
        { parameter: "Control Accuracy", details: "± 2°C" },
        { parameter: "Uniformity", details: "± 3°C" },
        { parameter: "Timer", details: "0 to 9999 Min" },
        { parameter: "Safety Feature", details: "Over Temperature & Water Level Low Cut Off" },
        { parameter: "Circulating Pipe", details: "Silicon with insulating cover" },
        { parameter: "Cooling Power", details: "1250W - 3500W" }
    ],
    models: [
        { model: "AP_TT_RCB_06", capacity: "06 Liters", interior: "Standard Tank", exterior: "Benchtop Unit", trays: "Flow: 9 LMP", power: "1250 W Cooling" },
        { model: "AP_TT_RCB_10", capacity: "10 Liters", interior: "Standard Tank", exterior: "Benchtop Unit", trays: "Flow: 15 LMP", power: "2500 W Cooling" },
        { model: "AP_TT_RCB_20", capacity: "20 Liters", interior: "Standard Tank", exterior: "Benchtop Unit", trays: "Flow: 20 LMP", power: "3500 W Cooling" }
    ],
    regularAttributes: [
        "Advanced refrigeration system",
        "High-flow circulation pump",
        "Digital control interface",
        "Insulated silicon circulating pipe",
        "SS 304 construction"
    ],
    addOnsAttributes: [
        "Digital Timer (0-9999 min)",
        "Custom temperature probes",
        "Calibration certification",
        "Advanced PLC based controller"
    ],
    image: "/products/TableTop/refrigerated-circular-bath.png"
};
