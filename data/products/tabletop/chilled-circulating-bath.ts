import { ProductDetail } from '../types';

export const chilledCirculatingBath: ProductDetail = {
    description: "A chilled circulating bath is a specialised piece of equipment commonly used in laboratory settings to maintain low temperatures for various application such as cooling samples, apparatus, or reasons. It works by circulating chilled fluid, typically water or a refrigerant, through a cooling coil or jacket surrounding the sample or vessel. This ensures uniform and precise cooling, allowing researchers to carry out experiments requiring controlled temperatures. Chilled circulating baths are essential tools in fields such as chemistry, biology, and materials science, where maintaining specific temperature conditions is crucial for accurate results and product integrity.",
    keyFeaturesHeading: "Industries we serve",
    keyFeatures: [
        "Pharmaceuticals - Quality , R&D, Production Labs",
        "Institutes - R & D Labs",
        "Food Industries - QC, Testing Labs"
    ],
    specifications: [],
    models: [],
    regularAttributes: [],
    addOnsAttributes: [],
    image: "/products/TableTop/chilled-circulating-bath.png",
    variantTable: {
        headers: ["Model", "Unit", "AP_TT_CCB_06", "AP_TT_CCB_10", "AP_TT_CCB_20"],
        rows: [
            ["Capacity", "Lit", "06", "10", "20"],
            ["Cooling Power", "kW", "750", "1250", "2500"],
            ["Circulation Flow", "LMP", "9", "15", "20"],
            ["Temperature Range", "°C", "-10 to Ambient (Optional)"],
            ["Resolution", "°C", "1"],
            ["Control Accuracy", "°C", "± 1"],
            ["Uniformity", "°C", "± 2"],
            ["Timer", "Min", "NA"],
            ["Safety feature", "-", "Water Level Low Cut Off"],
            ["Circulating Pipe", "", "Silicon with insulating cover"]
        ]
    }
};
