import { ProductDetail } from '../types';

export const dryBath: ProductDetail = {
    description: "Digital Dry Bath Incubator is designed for maintaining constant temperature of samples in test tubes inserted in the aluminum block sockets. It is widely used for pathology laboratory, IVF Center, Pharmaceutical laboratory, Food & Dairy industries, PCR - analysis extraction of DNA and RNA from cell cultures, etc.",
    keyFeatures: [
        "Contamination-free heating using dry blocks",
        "Multiple block options for different tube sizes (0.5ml to 15ml)",
        "Compact design for laboratory benchtop use",
        "Digital control system with high precision",
        "Fully SS 304 outer body for durability",
        "Ideal for PCR analysis and DNA/RNA extraction"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "+5°C above ambient to 100°C" },
        { parameter: "Timer", details: "1 min to 99hrs 59min or non-stop" },
        { parameter: "Capacity", details: "24 holes or 48 holes" },
        { parameter: "Hole Sizes", details: "0.5, 1.5, 2.0, 5.0, 7.5, 10.0, 15.0 ml" },
        { parameter: "Construction", details: "Fully SS 304 Body" },
        { parameter: "Weight", details: "4 kg" }
    ],
    models: [
        { model: "AP_TT_DB_400", capacity: "24 / 48 Holes", interior: "Aluminum Dry Blocks", exterior: "23 x 23 x 13 cm", trays: "Customizable Blocks", power: "AC 220 V 50/60 Hz" }
    ],
    regularAttributes: [
        "Aluminum block sockets",
        "Digital control system",
        "SS 304 outer body",
        "Compact footprint",
        "Dry heating technology"
    ],
    addOnsAttributes: [
        "Custom block designs",
        "Extra dry blocks",
        "Digital Timer functionality",
        "Calibration certification"
    ],
    image: "/products/TableTop/dry-bath.png"
};
