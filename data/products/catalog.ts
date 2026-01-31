import { Category } from './types';

export const PRODUCT_CATALOG: Category[] = [
    {
        id: "stability",
        title: "STABILITY TESTING EQUIPMENTS",
        description: "Precision-engineered environmental control systems for accurate temperature and humidity monitoring.",
        subTypes: [
            {
                id: "standalone",
                name: "Stand Alone Chambers",
                products: [
                    "Humidity Chamber",
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
                    "Ultrasonic Bath"
                ]
            },
            {
                id: "waterbaths",
                name: "Water Baths",
                products: [
                    "Water Bath",
                    "Steam Bath",
                    "Oil Bath",
                    "Dry Bath"
                ]
            },
            {
                id: "air-sampler",
                name: "Air Sampler",
                products: ["Air Sampler"]
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
                name: "Furniture & Accessories",
                products: [
                    "Laboratory Furniture",
                    "Stainless Steel Items & Accessories"
                ]
            }
        ]
    }
];
