import { ProductDetail } from '../types';

export const pharmaRefrigerator: ProductDetail = {
    description: "The Aureole Pharma Tech Dual Zone Chamber has been specifically designed to cater to the heightened requirements of highly accelerated stress tests (HAST) for electrical and electronic components. This chamber facilitates rapid specimen transfer between its hot and cold zones, enabling swift and dramatic changes in product temperature. This capability is particularly valuable for conducting thermal shock tests, also known as Environment Stress Screen (ESS) tests. These tests subject components to extreme temperature variations, helping to assess their resilience and reliability under challenging environmental conditions.",
    keyFeatures: [
        "Designed for Highly Accelerated Stress Tests (HAST)",
        "Facilitates rapid specimen transfer between hot and cold zones",
        "Enables swift and dramatic product temperature changes",
        "Ideal for Thermal Shock and Environment Stress Screen (ESS) tests",
        "Assess resilience and reliability under extreme temperature variations",
        "Dual-zone configuration for versatile testing applications",
        "Precise control and monitoring of temperature in both zones"
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
        { model: "AP_DC_DF-1.0_CC-1.0_V**", capacity: "100 (Upper) / 100 (Lower)", interior: "U: 640×350×500 | L: 640×350×600", exterior: "825 × 850 × 2055", trays: "1 (Upper) / 1 (Lower)", power: "Single Phase 230 V" },
        { model: "AP_DC_DF-2.0_CC-2.0_V**", capacity: "200 (Upper) / 200 (Lower)", interior: "U: 700×575×500 | L: 700×475×600", exterior: "885 × 975 × 2055", trays: "2 (Upper) / 2 (Lower)", power: "Single Phase 230 V" },
        { model: "AP_DC_DF-1.0_CC-2.0_V**", capacity: "100 (Upper) / 200 (Lower)", interior: "U: 700×350×450 | L: 700×475×600", exterior: "885 × 975 × 2010", trays: "1 (Upper) / 2 (Lower)", power: "Single Phase 230 V" },
        { model: "AP_DC_DF-2.0_CC-4.0_V**", capacity: "200 (Upper) / 400 (Lower)", interior: "U: 800×500×500 | L: 800×600×850", exterior: "985 × 1100 × 2300", trays: "2 (Upper) / 3 (Lower)", power: "Single Phase 230 V" }
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
