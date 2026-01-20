import { ProductDetail } from '../types';

export const vacuumOven: ProductDetail = {
    description: "Vacuum ovens are the perfect selection when rapid drying is needed without jeopardizing the integrity of the samples. These ovens feature a sturdy design, complete with a reinforced glass viewing window and a shatter-resistant safety screen. The interior is constructed from corrosion-resistant stainless steel, ensuring not only durability but also ease of maintenance.\n\nAureole Pharma Tech Vacuum ovens operate effectively within a temperature range of 50°C to 200°C, offering versatility for a broad spectrum of applications.",
    keyFeatures: [
        "Rapid drying capability without compromising sample integrity",
        "Sturdy design with reinforced glass viewing window",
        "Shatter-resistant safety screen for operator protection",
        "Corrosion-resistant stainless steel interior for durability and easy maintenance",
        "Versatile temperature range (50°C to 200°C) for broad applications",
        "Double-walled construction with 60 mm Ceramic/Rock wool insulation",
        "High-temperature cut-off with settable thermostats"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "50°C to 200°C" },
        { parameter: "Accuracy", details: "± 1°C" },
        { parameter: "Uniformity", details: "± 5°C" },
        { parameter: "Vacuum", details: "760 mm of mercury (-30)" }
    ],
    models: [
        { model: "AP_SA_VO-0.15_V**", capacity: "15", interior: "22.5 Dia. × 30 Depth (Inches)", trays: "N/A", power: "Single Phase 230 V" },
        { model: "AP_SA_VO-0.21_V**", capacity: "21", interior: "30 Dia. × 30 Depth (Inches)", trays: "N/A", power: "Single Phase 230 V" },
        { model: "AP_SA_VO-0.27_V**", capacity: "27", interior: "30 Dia. × 38 Depth (Inches)", trays: "N/A", power: "Single Phase 230 V" }
    ],
    regularAttributes: [
        "Doubled walled with ceramic wool / Rock wool Insulations of 60 mm",
        "High temperature cut-off Settable thermostats",
        "Vacuum Gauge"
    ],
    addOnsAttributes: [
        "Hooter System",
        "Vacuum Pump",
        "Printing facility",
        "Extra tray"
    ],
    image: "/products/StablilityChamber-Standalone/vacuum-oven.png"
};
