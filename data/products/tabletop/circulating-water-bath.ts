import { ProductDetail } from '../types';

export const circulatingWaterBath: ProductDetail = {
    description: "A water bath is a testing cabinet which used in many industries and laboratories. The container’s main substance for testing the specimen is a heated water.\nThe samples are kept inside them to test their behavior in rising temperature.\nThis machine has very distinct applications. It is utilized in biological labs to incubate sensitive which are unable to be kept in direct dry heat.\nThis water bath is successfully used in R&D laboratory, microbiology, quality control, blood bank, pathology, chemical, foodprocessing industry area in Pharmaceutical, Healthcare, Institutions & Food Industry.",
    keyFeaturesHeading: "Industries we serve",
    keyFeatures: [
        "Healthcare - Hospitals ( OT, Micro, Pathology, Blood Bank Labs )",
        "Pharmaceuticals - Quality , R&D, Production",
        "Institutes - Research Labs",
        "Food Industries - QC, Testing Labs"
    ],
    specifications: [],
    models: [],
    regularAttributes: [],
    addOnsAttributes: [],
    image: "/products/TableTop/circulating-water-bath.png",
    variantTable: {
        headers: ["Model", "Unit", "AP_TT_WBC_05", "AP_TT_WBC_14", "AP_TT_WBC_28"],
        rows: [
            ["Capacity", "Lit", "5", "14", "28"],
            ["Inner Dimensions L x D x H", "Mm", "300 x 150 x 150", "320 x 300 x 150", "500 x 300 x 250"],
            ["Heater Power", "kW", "0.5", "1.5", "2"],
            ["Temperature Range", "°C", "Ambient + 5 to 95"],
            ["Resolution", "°C", "0.1"],
            ["Control Accuracy", "°C", "± 0.3"],
            ["Uniformity", "°C", "± 0.3"],
            ["Timer", "Min", "0 to 9999"],
            ["Safety feature", "-", "Overshoot & Water Level Low Cut Off"],
            ["Heater Cover Tray", "", "Stainless Steel"],
            ["Gabled Lid", "", "Stainless Steel"],
            ["Concentric Ring Lid", "", "3 Holes", "6 Holes", "12 Holes"]
        ]
    }
};
