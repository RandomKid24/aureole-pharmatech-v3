import { ProductDetail } from '../types';

export const coldChamber: ProductDetail = {
    description: "Aureole Pharma Tech Cold Chambers are purpose-built for conducting tests, treatments, and storage of products and materials that require precise climate control. These cold chambers serve a multitude of applications across various industries, including Pharmaceutical, Chemical, Automobile, Biotechnology, Telecommunication, Electronics, Defense, Medical Equipment, Universities, Military, and Consumer Goods.\n\nOur Cold Chambers offer a reliable and technologically advanced solution for controlling temperature conditions in laboratory and industrial settings. They find extensive use in diverse industries where precise temperature control is essential for testing, treatment, and storage of products and materials.",
    keyFeatures: [
        "PLC Based Control System (Allen Bradley) with high-speed Ethernet communication",
        "4.3” Touch Screen HMI (Allen Bradley) for intuitive operation and monitoring",
        "Double-walled construction with 60 mm PUF insulation (40kg density) for maximum thermal protection",
        "CFC-Free Refrigeration System with hermetically sealed Emerson Copeland compressor",
        "Forced air circulation system to maintain uniform temperature distribution",
        "Heavy-duty SS perforated trays with laser cutting for efficient circulation",
        "60 mm Port hole with Silicon Rubber seal for validation purposes",
        "Complete Documentation: DQ, IQ, OQ, PQ with SOP & user manuals"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "2°C to 8°C" },
        { parameter: "Accuracy", details: "± 1°C" },
        { parameter: "Uniformity", details: "± 2°C" },
        { parameter: "Power Supply", details: "Single Phase, 230V 50Hz" }
    ],
    models: [
        { model: "AP_SA_CC-1.25_V**", capacity: "125", interior: "600 × 350 × 600", exterior: "725 × 865 × 1260", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_CC-2.0_V**", capacity: "200", interior: "660 × 450 × 700", exterior: "785 × 965 × 1360", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_CC-4.0_V**", capacity: "400", interior: "700 × 650 × 900", exterior: "825 × 1165 × 1560", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_CC-6.0_V**", capacity: "600", interior: "750 × 750 × 1075", exterior: "875 × 1275 × 1735", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_CC-8.0_V**", capacity: "800", interior: "750 × 750 × 1425", exterior: "875 × 1275 × 2085", trays: "4", power: "Single Phase 230 V" },
        { model: "AP_SA_CC-1.0_V**", capacity: "1000", interior: "850 × 750 × 1525", exterior: "975 × 1275 × 2230", trays: "4", power: "Single Phase 230 V" }
    ],
    regularAttributes: [
        "Two doors: Full view inner glass door & Outer SS door with viewing window",
        "Leakage proof silicon rubber gasket",
        "U-Shaped SS tabular heaters",
        "PLC Based auto cut-off for temperature safety",
        "Audio-visual alarm system for deviations",
        "Castor wheels for easy mobility and cleaning",
        "Master & stand by sensor"
    ],
    addOnsAttributes: [
        "21 CFR part 11 compliance (Log data, Audit Trail, E-Signatures)",
        "SIS-APP Software for secure data management and compliance",
        "GSM Alarm System (Mobile Alert for parameters and safety cut-offs)",
        "Email alert system",
        "Stand by refrigeration system",
        "Scanner : 4 pt. temperature & humidity sensor",
        "Hooter System",
        "Door Access System (Numeric or Biometric)",
        "Extra Trays"
    ],
    image: "/products/StablilityChamber-Standalone/cold-chamber.png"
};
