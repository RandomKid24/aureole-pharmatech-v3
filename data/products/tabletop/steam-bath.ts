import { ProductDetail } from '../types';

export const steamBath: ProductDetail = {
    description: "A Steam bath is a advance version in water bath. It is designed such a way to reach and maintain 100 degree temperature. Steam bath is useful in many industries and laboratories. This machine is essential in Microbiology & Production Departments for substance testings the specimen is a heated water. The samples are kept inside them to test their behaviour in rising temperature.\nThis Steam bath is successfully used in microbiology, quality control, production Dept. in Pharmaceutical, Healthcare, Institution & Food Industry.",
    keyFeaturesHeading: "Industries we serve",
    keyFeatures: [
        "Pharmaceuticals - QC, Microbiology, Production Labs",
        "Institutes - Microbiology, Research Labs",
        "Food Industries - QC, Testing Labs"
    ],
    specifications: [],
    models: [],
    regularAttributes: [],
    addOnsAttributes: [],
    image: "/products/TableTop/steam-bath.png",
    variantTable: {
        headers: ["Model", "Unit", "AP_TT_SB_45", "AP_TT_SB_65", "AP_TT_SB_85"],
        rows: [
            ["Capacity", "Lit", "45", "65", "85"],
            ["Inner Dimensions L x D x H", "Mm", "500 x 300 x 325", "500 x 300 x 425", "500 x 400 x 150"],
            ["Heater Power", "kW", "1.5", "3", "5"],
            ["Suitable for Bottles / Flasks", "Lits", "1 x 12 no’s", "5 x 2 no’s", "5 x 4 no’s"],
            ["Temperature Range", "°C", "Ambient + 5 to 100"],
            ["Resolution", "°C", "0.1"],
            ["Control Accuracy", "°C", "± 2"],
            ["Uniformity", "°C", "± 2"],
            ["Timer", "Min", "0 to 9999"],
            ["Safety feature", "-", "Overshoot & Water Level Low Cut Off"],
            ["Validation Port", "", "Stainless Steel"],
            ["Stand and Trolley", "", "Stainless Steel with Heavy Wheels"]
        ]
    }
};
