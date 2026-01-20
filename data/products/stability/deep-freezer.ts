import { ProductDetail } from '../types';

export const deepFreezer: ProductDetail = {
    description: "Aureole Pharma Tech Deep freezers are widely recognized as the standard baseline for the storage of perishable, flammable, or hazardous materials in laboratory and clinical settings. Our range includes units capable of sustaining temperatures as low as -20°C and specialized configurations reaching up to -40°C.\n\nThese freezers come in various orientations—under-counter, chest, or upright—and utilize proprietary foam insulation for superior energy efficiency. Many models feature manual defrost systems with special thawing tubes to protect against unintended thaws and sample dehydration, ensuring the safe and stable storage of sensitive biological materials.",
    keyFeatures: [
        "Wide temperature range options: Fixed -20°C or flexible -13°C to -40°C",
        "Available in multiple configurations: Under-counter, Chest, or Upright",
        "Proprietary high-density foam insulation for favorable Energy Star ratings",
        "Manual defrost systems with special thawing tubes to prevent sample dehydration",
        "Heavy-duty refrigeration system with high accuracy and uniformity",
        "CFC-Free refrigeration aligning with environmental standards",
        "Robust compressors built for durability and reliable long-term performance"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "Up to -20°C / Up to -40°C" },
        { parameter: "Accuracy", details: "± 3°C" },
        { parameter: "Uniformity", details: "± 5°C" },
        { parameter: "Operating Voltage", details: "115V to 230V (based on capacity)" }
    ],
    models: [
        { model: "AP_SA_DF-1.25_V**", capacity: "125", interior: "625 × 400 × 500", exterior: "810 × 700 × 1260", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_DF-2.0_V**", capacity: "200", interior: "650 × 500 × 625", exterior: "835 × 800 × 1385", trays: "2", power: "Single Phase 230 V" },
        { model: "AP_SA_DF-4.0_V**", capacity: "400", interior: "700 × 650 × 900", exterior: "885 × 950 × 1660", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_DF-6.0_V**", capacity: "600", interior: "750 × 800 × 1000", exterior: "935 × 1100 × 1760", trays: "3", power: "Single Phase 230 V" },
        { model: "AP_SA_DF-8.0_V**", capacity: "800", interior: "750 × 800 × 1350", exterior: "935 × 1100 × 2110", trays: "4", power: "Single Phase 230 V" },
        { model: "AP_SA_DF-1.0K_V**", capacity: "1000", interior: "825 × 825 × 1500", exterior: "1010 × 1125 × 2260", trays: "4", power: "Single Phase 230 V" }
    ],
    regularAttributes: [
        "Master & stand By Sensor",
        "Single SS Door sealed around the entire perimeter by silicon gasket",
        "Heavy Duty refrigeration system",
        "Proprietary foam insulation for energy efficiency",
        "Manual defrost system with thawing tubes"
    ],
    addOnsAttributes: [
        "21 CFR part 11 compliance",
        "GSM alert system",
        "Hooter System",
        "Password protected or Biometric door access system",
        "Extra Trays"
    ],
    image: "/products/StablilityChamber-Standalone/deep-freezer.png"
};
