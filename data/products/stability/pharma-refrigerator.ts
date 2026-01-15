import { ProductDetail } from '../types';

export const pharmaRefrigerator: ProductDetail = {
    description: "Advanced dual-zone chambers designed for pharmaceutical applications, providing precise temperature control in two separate zones—an upper deep freezer zone and a lower cold chamber zone. These chambers ensure optimal storage conditions for different types of pharmaceutical products requiring different temperature ranges.",
    keyFeatures: [
        "Master & standby sensor for reliability",
        "SS door with gasket for optimal sealing",
        "Heavy-duty refrigeration system with high performance",
        "Inner outer door with proof silicon for enhanced insulation",
        "Dual-zone temperature control for different storage requirements",
        "Compliance with pharmaceutical storage standards"
    ],
    specifications: [
        { parameter: "Upper Zone: Temp Range", details: "-5°C to -20°C" },
        { parameter: "Upper Zone: Accuracy", details: "± 3°C" },
        { parameter: "Upper Zone: Uniformity", details: "± 5°C" },
        { parameter: "Lower Zone: Temp Range", details: "2°C to 8°C" },
        { parameter: "Lower Zone: Accuracy", details: "± 1°C" },
        { parameter: "Lower Zone: Uniformity", details: "± 2°C" }
    ],
    models: [
        { model: "AP_DC_DF-1.0_CC-1.0_V**", capacity: "100 + 100", interior: "U: 640×350×500 | L: 640×350×600", exterior: "825 × 850 × 2055", trays: "1 + 1", power: "Single Phase 230 V" },
        { model: "AP_DC_DF-2.0_CC-2.0_V**", capacity: "200 + 200", interior: "U: 700×575×500 | L: 700×475×600", exterior: "885 × 975 × 2055", trays: "2 + 2", power: "Single Phase 230 V" },
        { model: "AP_DC_DF-1.0_CC-2.0_V**", capacity: "100 + 200", interior: "U: 700×350×450 | L: 700×475×600", exterior: "885 × 975 × 2010", trays: "1 + 2", power: "Single Phase 230 V" },
        { model: "AP_DC_DF-2.0_CC-4.0_V**", capacity: "200 + 400", interior: "U: 800×500×500 | L: 800×600×850", exterior: "985 × 1100 × 2300", trays: "2 + 3", power: "Single Phase 230 V" }
    ],
    regularAttributes: [
        "Master & standby sensor",
        "SS door with gasket",
        "Heavy-duty refrigeration system",
        "Inner outer door with proof silicon"
    ],
    addOnsAttributes: [
        "21 CFR Part 11 compliance",
        "Mobile alert system",
        "Hooter system",
        "Extra trays",
        "Scanner: 4-point temperature sensor",
        "Door access system (Numeric / Biometric)"
    ],
    image: "/products/StablilityChamber-Standalone/pharma-refrigerator-dual-zone-chamber.png"
};
