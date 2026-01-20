import { ProductDetail } from '../types';

export const refrigeratedCircularBath: ProductDetail = {
    description: "The refrigerated circulating bath allows researchers to achieve precise and consistent temperature control over a wide range, usually from below room temperature to sub-zero temperatures. This makes it suitable for various applications such as cooling reactions, maintaining samples at specific temperatures, or controlling the temperature of analytical instruments like spectrophotometers and chromatography systems.",
    keyFeaturesHeading: "Industries we serve",
    keyFeatures: [
        "Pharmaceuticals - Quality , R&D, Production Labs",
        "Institutes - R&D Labs",
        "Food Industries - QC, Testing Labs"
    ],
    specifications: [],
    models: [],
    regularAttributes: [],
    addOnsAttributes: [],
    image: "/products/TableTop/refrigerated-circular-bath.png",
    variantTable: {
        headers: ["Model", "Unit", "AP_TT_RCB_06", "AP_TT_RCB_10", "AP_TT_RCB_20"],
        rows: [
            ["Capacity", "Lit", "06", "10", "20"],
            ["Cooling Power", "kW", "1250", "2500", "3500"],
            ["Circulation Flow", "LMP", "9", "15", ""],
            ["Temperature Range", "°C", "-20 to 150 (Optional)"],
            ["Resolution", "°C", "1"],
            ["Control Accuracy", "°C", "± 2"],
            ["Uniformity", "°C", "± 3"],
            ["Timer", "Min", "0 to 9999"],
            ["Safety feature", "-", "Over Temperature & Water Level Low Cut Off"],
            ["Circulating Pipe", "", "Silicon with insulating cover"]
        ]
    }
};
