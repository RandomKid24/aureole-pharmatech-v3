import { ProductDetail } from '../types';

export const humidityStabilityChamber: ProductDetail = {
    description: "Advanced humidity and stability chambers designed for precise environmental control in pharmaceutical, biotech, and research applications. These chambers provide accurate temperature and humidity conditions for stability testing, formulation development, and regulatory compliance.",
    keyFeatures: [
        "Precise temperature and humidity control",
        "Advanced sensor technology",
        "User-friendly interface",
        "Compliance with ICH, WHO, GMP, MHRA, and FDA standards",
        "Energy-efficient operation",
        "Uniform airflow design"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "20°C to 60°C" },
        { parameter: "Humidity Range", details: "40% to 95% RH" },
        { parameter: "Temperature Accuracy", details: "± 0.2°C" },
        { parameter: "Humidity Accuracy", details: "± 2.0% RH" },
        { parameter: "Temperature Uniformity", details: "± 1.0°C" },
        { parameter: "Humidity Uniformity", details: "± 3.0% RH" },
        { parameter: "Test Suitable for", details: "25°C & 60% RH, 30°C & 65% RH, 40°C & 75% RH, 30°C & 75% RH" },
        { parameter: "Also available with low conditions", details: "25°C & 40% RH, 40°C & 25% RH, 30°C & 35% RH" }
    ],
    models: [
        { model: "AP_SA_HC-2.0_V**", capacity: "200", interior: "660 × 450 × 700", exterior: "785 × 780 × 1350", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_HC-4.0_V**", capacity: "400", interior: "700 × 650 × 900", exterior: "825 × 985 × 1550", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_HC-6.0_V**", capacity: "600", interior: "750 × 750 × 1075", exterior: "875 × 1085 × 1725", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_HC-8.0_V**", capacity: "800", interior: "750 × 750 × 1425", exterior: "875 × 1085 × 2075", trays: "4", power: "Single Phase 230 V" },
        { model: "AP_SA_HC-1.0K_V**", capacity: "1000", interior: "850 × 750 × 1575", exterior: "975 × 1085 × 2225", trays: "4", power: "Single Phase 230 V" }
    ],
    regularAttributes: [
        "Inner outer door with proof silicon",
        "Water & steam tank",
        "Low water indication",
        "Master & standby sensor"
    ],
    addOnsAttributes: [
        "21 CFR Part 11 compliance",
        "Standby refrigeration & steam generation system",
        "Scanner: 4-point temperature & humidity sensor",
        "Mobile alert system",
        "Hooter system",
        "Door access system (Numeric / Biometric)",
        "Extra trays"
    ],
    image: "/products/StablilityChamber-Standalone/humidity-chamber.png"
};
