import { ProductDetail } from '../types';

export const oilBath: ProductDetail = {
    description: "An oil bath, commonly used in chemistry laboratories, involves immersing reason vessels or samples in heated oil to maintain stable and controlled temperatures, crucial for sensitive experiments and reasons. Moreover it has unique design to achieve up to 250 C.",
    keyFeaturesHeading: "Industries we serve",
    keyFeatures: [
        "Pharmaceuticals",
        "R & D Institute",
        "Research Institute",
        "Microbiology"
    ],
    specifications: [],
    models: [],
    regularAttributes: [],
    addOnsAttributes: [],
    image: "/products/TableTop/oil-bath.png",
    variantTable: {
        headers: ["Model", "Unit", "AP_TT_OB_45", "AP_TT_SB_65", "AP_TT_SB_85"],
        rows: [
            ["Capacity", "Lit", "01", "03", "20"],
            ["Vessel Dimensions OD", "Mm", "150", "200", "400"],
            ["Heater Power", "kW", "400", "1000", "2500"],
            ["Suitable for Bottles / Flasks", "Lits", "01", "03", "20"],
            ["Temperature Range", "°C", "50 to 250"],
            ["Resolution", "°C", "1"],
            ["Control Accuracy", "°C", "± 2"],
            ["Uniformity", "°C", "± 3"],
            ["Timer", "Min", "0 to 9999"],
            ["Safety feature", "-", "Over Temperature & Thermostatic"],
            ["Stand Slask", "", "Stainless Steel with Heavy Wheels"]
        ],
        remark: "Available in variable sizes (1 Ltr. to 20 Ltr.)"
    }
};
