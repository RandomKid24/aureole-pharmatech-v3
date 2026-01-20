import { ProductDetail } from '../types';

export const humidityStabilityChamber: ProductDetail = {
    description: "Aureole Pharma Tech has earned its reputation as a leading manufacturer of humidity chambers by meticulously optimizing every aspect of its chambers. Humidity chambers play a crucial role in a wide array of industries, including electronics, military and defense, pharmaceuticals, transportation, medical devices, shipping, and communications. Our temperature and humidity models are designed to provide high-performance and precise control, ensuring that companies can rely on these chambers for their testing needs.\n\nOur Humidity chambers are essential tools in industries where environmental conditions significantly affect product performance. Companies rely on our humidity chambers for accurate and controlled testing, and Aureole Pharma Tech stands out as a trusted manufacturer that delivers the precision and reliability needed for successful product development and quality assurance.",
    keyFeatures: [
        "PLC Based Control System (Allen Bradley) for precise controlling, safety, and database management",
        "Online monitoring on Graphical LED Touch Screen Display (Allen Bradley)",
        "Eco-friendly Polyurethane insulation for maximum thermal protection and rigidity",
        "High-efficiency air circulation system with Aluminium centrifugal blower wheel for even temperature/humidity gradient",
        "60 mm diameter chamber port for validation sensor probes",
        "Heavy-duty SS perforated trays with laser cutting for efficient air circulation",
        "Castor wheels for easy mobility and cleaning"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "20°C to 60°C" },
        { parameter: "Humidity Range", details: "40% to 85% RH" },
        { parameter: "Accuracy", details: "± 0.2°C / ± 2.0% RH" },
        { parameter: "Uniformity", details: "± 1.0°C / ± 3.0% RH" },
        { parameter: "Test Suitable for", details: "25°C & 60% RH, 30°C & 65% RH, 40°C & 75% RH, 30°C & 75% RH" },
        { parameter: "Also available with low conditions", details: "25°C & 40% RH, 40°C & 25% RH, 30°C & 35% RH" }
    ],
    models: [
        { model: "AP_SA_HC 2.0_V**", capacity: "200", interior: "660 × 450 × 700", exterior: "785 × 1130 × 1360", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_HC 4.0_V**", capacity: "400", interior: "700 × 650 × 900", exterior: "825 × 1330 × 1560", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_HC 6.0_V**", capacity: "600", interior: "750 × 750 × 1075", exterior: "875 × 1430 × 1735", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_HC 8.0_V**", capacity: "800", interior: "750 × 750 × 1425", exterior: "875 × 1480 × 2085", trays: "4", power: "Single Phase 230 V" },
        { model: "AP_SA_HC 1.0K_V**", capacity: "1000", interior: "850 × 750 × 1575", exterior: "975 × 1480 × 2230", trays: "4", power: "Single Phase 230 V" }
    ],
    regularAttributes: [
        "Two doors: Full view inner glass door & Outer SS door with viewing window",
        "Leakage proof silicon rubber gasket",
        "Owned manufactured SS reservoir and steam kettle for optimum humidity",
        "PLC based: Safety Control System to protect from overshoot/undershoot",
        "Auto Changeover of Master Sensor, Refrigeration, and Steam Generator in case of failure",
        "Password protected: Door opening, Chamber On/Off, and Set Value changes",
        "Actual Status Monitoring of Major Utilities",
        "Low water indication with reset system",
        "Master & stand by sensor"
    ],
    addOnsAttributes: [
        "21 CFR part 11 compliance (Log data, Audit Trail, E-Signatures)",
        "SIS-APP Software for secure data management and compliance",
        "GSM Alarm System (Mobile Alert for parameters and safety cut-offs)",
        "Stand by refrigeration & steam generation system",
        "Scanner : 4 pt. temperature & humidity sensor",
        "Hooter System",
        "Door Access System (Numeric or Biometric)",
        "Extra Trays"
    ],
    image: "/products/StablilityChamber-Standalone/humidity-chamber.png"
};
