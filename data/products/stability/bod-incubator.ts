import { ProductDetail } from '../types';

export const bodIncubator: ProductDetail = {
    description: "BOD Incubator, which stands for Bio-Oxygen Demand Incubator, serves the critical function of maintaining precise temperature control for various applications such as tissue culture growth tests, storage of bacterial cultures, and incubation processes that demand a high degree of temperature accuracy.\n\nAureole Pharma Tech BOD Incubators are renowned for their ability to provide exceptionally accurate and uniform temperature conditions within the chamber. Whether it’s nurturing delicate tissue cultures or ensuring the stable storage of bacterial cultures, these incubators offer the reliability and precision required for scientific and research purposes.",
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
        { parameter: "Temperature Range", details: "20°C to 60°C" },
        { parameter: "Accuracy", details: "± 0.2°C" },
        { parameter: "Uniformity", details: "± 1.0°C" },
        { parameter: "Power Supply", details: "Single Phase, 230V 50Hz" }
    ],
    models: [
        { model: "AP_SA_BO-1.25_V**", capacity: "125", interior: "600 × 350 × 600", exterior: "725 × 865 × 1260", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_BO-2.0_V**", capacity: "200", interior: "660 × 450 × 700", exterior: "785 × 965 × 1360", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_BO-4.0_V**", capacity: "400", interior: "700 × 650 × 900", exterior: "825 × 1165 × 1560", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_BO-6.0_V**", capacity: "600", interior: "750 × 750 × 1075", exterior: "875 × 1275 × 1735", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_BO-8.0_V**", capacity: "800", interior: "750 × 750 × 1425", exterior: "875 × 1275 × 2085", trays: "4", power: "Single Phase 230 V" },
        { model: "AP_SA_BO-1.0_V**", capacity: "1000", interior: "850 × 750 × 1525", exterior: "975 × 1275 × 2230", trays: "4", power: "Single Phase 230 V" }
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
    image: "/products/StablilityChamber-Standalone/BODINCUBATOR.png"
};
