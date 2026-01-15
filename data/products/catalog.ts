import { Category } from './types';

export const PRODUCT_CATALOG: Category[] = [
    {
        id: "stability",
        title: "STABILITY CHAMBERS",
        description: "Precision-engineered environmental control systems for accurate temperature and humidity monitoring.",
        subTypes: [
            {
                id: "standalone",
                name: "Stand Alone Chambers",
                products: [
                    "Humidity Chamber / Stability Chamber",
                    "BOD Incubator",
                    "Cold Chamber",
                    "Deep Freezer (upto -20°C / upto -40°C)",
                    "Ultra Low Deep Freezer (-80°C)",
                    "Photostability Chamber",
                    "Pharma Refrigerator / Dual Zone Chamber",
                    "Hot Air Oven",
                    "Vacuum Oven",
                    "Muffle Furnace"
                ]
            },
            {
                id: "walk-in",
                name: "Walk In Chambers",
                products: [
                    "Walk In Humidity Chamber",
                    "Walk In Cold Chamber",
                    "Walk In BOD Incubator",
                    "Walk In Deep Freezer"
                ]
            }
        ]
    },
    {
        id: "tabletop",
        title: "TABLE TOP INSTRUMENTS",
        description: "Compact, high-precision laboratory instruments designed for bench-top space optimization.",
        subTypes: [
            {
                id: "ultrasonic",
                name: "Ultrasonic Baths",
                products: [
                    "Eco Series",
                    "Prime Series",
                    "Prime Series with Chilling",
                    "Prime Series with Advance Controlling",
                    "Prime Series with Heating & Shaking",
                    "Industrial Series"
                ]
            },
            {
                id: "waterbaths",
                name: "Water Baths",
                products: [
                    "Constant",
                    "Circulating",
                    "Steam Bath",
                    "Oil Bath",
                    "Dry Bath",
                    "Chilled Circulating Bath",
                    "Refrigerated Circular Bath"
                ]
            },
            {
                id: "air-sampler",
                name: "Air Sampler",
                products: ["Basic Model", "21 CFR Model"]
            },
            {
                id: "ss-accessories",
                name: "Stainless Steel Items & Accessories",
                products: ["Stainless Steel Items & Accessories"]
            }
        ]
    },
    {
        id: "furniture",
        title: "LABORATORY FURNITURE",
        description: "Modular furniture systems and storage solutions designed for ergonomics and durability.",
        subTypes: [
            {
                id: "furniture-list",
                name: "Laboratory Furniture",
                products: [
                    "C-Frame System",
                    "H-Frame System",
                    "Plinth & Pedestal System",
                    "Laboratory Worktops",
                    "Fume Cupboards",
                    "Laboratory Fittings",
                    "Hardware",
                    "Storage Cabinets",
                    "Lab Accessories"
                ]
            }
        ]
    }
];
