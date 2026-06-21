import { ProductDetail } from '../types';

export const waterBath: ProductDetail = {
    description: "Aureole Pharma Tech Water Baths are precision-engineered heating cabinets designed for incubation and temperature-sensitive applications where samples cannot be kept in direct dry heat. Available in both Still (Constant) and Circulating variants, these units provide exceptional temperature uniformity and stability across laboratory and industrial workflows.",
    hideHeroImage: true,
    keyFeaturesHeading: "Common Construction & Technology",
    keyFeatures: [],
    specifications: [
        { parameter: "MOC", details: "SS 304 Mirror / Powder Coated" },
        { parameter: "Control", details: "Digital PID / 0.1°C Res." },
        { parameter: "Safety", details: "Low Water & Overshoot Cut-off" },
        { parameter: "Heating", details: "High Quality Immersion Heater" },
        { parameter: "Lid", details: "SS Gabled / Concentric Lid" },
        { parameter: "Uniformity", details: "± 0.3°C to ± 0.5°C" }
    ],
    regularAttributesHeading: "Common Construction & Technology",
    regularAttributes: [
        "SS 304 MOC (Tank & Lid)",
        "Digital PID Temperature Controller",
        "0.1°C Resolution Display",
        "Low Water Level Safety Cut-off",
        "Over Temperature Protection",
        "Gabled Lid for condensation drainage",
        "Optional Concentric Ring Lid",
        "Precision Ceramic Insulation",
        "Industrial Grade Drain Valve"
    ],
    image: "/Aureole Product 3D/Table Top/Water Bath Final.png",
    complexTable: {
        rows: [
            {
                cells: [
                    { content: "Feature", isHeader: true },
                    { content: "Constant Water Bath", isHeader: true, image: "/Aureole Product 3D/Table Top/Water Bath Final.png" },
                    { content: "Circulating Water Bath", isHeader: true, image: "/Aureole Product 3D/Table Top/Chiller Circulator Bath.png" }
                ]
            },
            {
                cells: [
                    { content: "Mechanism" },
                    { content: "Natural Convection (Still)", align: 'center' },
                    { content: "Forced Circulation (Pump)", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "Temp. Range" },
                    { content: "Ambient + 5°C to 99.9°C", align: 'center' },
                    { content: "Ambient + 5°C to 95°C", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "Control Accuracy" },
                    { content: "± 0.5°C", align: 'center' },
                    { content: "± 0.3°C", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "Uniformity" },
                    { content: "± 0.5°C", align: 'center' },
                    { content: "± 0.3°C", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "Capacity Options" },
                    { content: "6L, 14L, 20L, 28L", align: 'center' },
                    { content: "5L, 14L, 28L", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "Heater Power" },
                    { content: "0.5 kW – 2.25 kW", align: 'center' },
                    { content: "0.5 kW – 2.0 kW", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "Safety Features" },
                    { content: "Overshoot & Water Level Low Cut Off", align: 'center' },
                    { content: "Overshoot & Water Level Low Cut Off", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "Material (MOC)" },
                    { content: "SS 304 (Tank & Lids)", align: 'center' },
                    { content: "SS 304 (Tank & Lids)", align: 'center' }
                ]
            }
        ],
        remark: "Circulating models include an internal pump for superior temperature distribution, recommended for highly sensitive analytical tests."
    },
    models: [],
    addOnsAttributes: []
};
