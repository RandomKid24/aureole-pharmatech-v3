import { ProductDetail } from '../types';

export const ultrasonicPrimeChilling: ProductDetail = {
    description: "A chiller sonicator, also known as a refrigerated ultrasonic bath or a cryogenic ultrasonic bath, combines the features of an ultrasonic bath with refrigeration capabilities. This equipment is particularly useful in applications where maintaining a low temperature during ultrasonic cleaning is crucial.",
    keyFeaturesHeading: "Industries we serve",
    keyFeatures: [
        "Healthcare - Hospitals (OT, CSSD) & General Surgeons",
        "Pharmaceucals - Quality , R&D, Production",
        "Instutes - Research Labs",
        "Mechanical - Quality, Production",
        "Jewelry",
        "Food Industries - QC, Testing Labs"
    ],
    specifications: [],
    models: [],
    regularAttributes: [],
    addOnsAttributes: [],
    image: "/products/TableTop/prime-chilling.png",
    variantTable: {
        headers: ["Model", "AP_TT_UB_CS_TT/FM_10", "AP_TT_UB_CS_TT/FM_20"],
        rows: [
            ["Tank Size (Inches)", "12*10*6", "18*12*6"],
            ["Outer Size (Inches)", "18.4*17.2*22", "24*20*20"],
            ["Tank", "SS304", "SS304"],
            ["Enclouser", "SS304", "SS304"],
            ["Tank Capacity", "10 Liter", "20 Liter"],
            ["Ultrasonic Power (Watts)", "250W", "400W"],
            ["Chiller", "✓", "✓"],
            ["PSP", "✓", "✓"],
            ["Degas", "✓", "✓"],
            ["U/S Frequency Khz", "33±3 khz", "33±3 khz"],
            ["Timer (Min)", "0-99", "0-99"],
            ["Temp (°C)", "10 to 35°C", "10 to 35°C"],
            ["Power Input (VAC)", "230 VAC", "230 VAC"],
            ["Ultrasonic Gen", "Advance latest MOSFET/IGBT based SMPS"],
            ["Accessories", "Lid, basket, drain valve, power cord, opeartion manual"]
        ]
    }
};
