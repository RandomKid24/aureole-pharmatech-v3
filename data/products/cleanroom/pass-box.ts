import { ProductDetail, ComplexTable } from '../types';

const table = (rows: string[][]): ComplexTable => ({
    rows: rows.map((r) => ({ cells: r.map((content) => ({ content })) }))
});

export const passBox: ProductDetail = {
    description: "Pass boxes, also known as transfer hatches or cleanroom passes, are specialized auxiliary cleanroom equipment designed to transfer materials between environments of different cleanliness levels. By creating a controlled physical barrier with interlocking doors, they allow items to pass through walls without requiring personnel to enter or exit, which drastically reduces cleanroom traffic and prevents cross-contamination.",
    specifications: [
        { parameter: "Types", details: "Dynamic Pass Box, Static Pass Box" },
        { parameter: "Material of Construction", details: "SS 304 / SS 316" },
        { parameter: "Door Mechanism", details: "Electromagnetic interlock" }
    ],
    models: [],
    regularAttributes: [],
    addOnsAttributes: [],
    variantsHeading: "Types of Pass Box",
    variants: [
        {
            name: "Dynamic Pass Box",
            description: "A dynamic pass box, also known as an active transfer hatch, is a self-cleaning cleanroom enclosure with its own built-in motorized fan and HEPA/ULPA filtration system. It is essential in environments where preventing cross-contamination is critical during the transfer of materials between areas with different cleanliness levels.",
            image: "",
            specifications: [
                { parameter: "Air Cleanliness", details: "Class 100" },
                { parameter: "Velocity", details: "90 FPM ± 20%" },
                { parameter: "Material of Construction", details: "SS 304 (Optional: SS 316)" },
                { parameter: "Main Filter", details: "Minipleat HEPA, Class H14" },
                { parameter: "Pre Filter", details: "Class F7" },
                { parameter: "Filter Efficiency", details: "HEPA 99.997% at 0.3 µm; Pre Filter 90% at 5 µm" },
                { parameter: "Noise", details: "< 68 dB" },
                { parameter: "Lighting / Interlock", details: "UV light assembly and stainless steel electromagnetic interlocking system" }
            ],
            features: [
                "ISO Class 5 (Class 100), per ISO 14644 cleanroom standards",
                "GMP SS 304/316 body: durable, corrosion-resistant, easy to sanitize",
                "Two-stage filtration: washable F7 pre-filter with H14 HEPA filter (optional grill)",
                "Space-saving design with compact footprint",
                "Dual LCD touch controls: feather-touch switches on both sides",
                "Smart pressure gauge with automated choke alarm",
                "Energy-efficient EC motors for quiet operation and precise airflow regulation",
                "UV sterilization: germicidal lamp with hour meter",
                "500 Lux LED lighting",
                "Interlocked two-way or three-way doors with glass windows and mechanical or electromagnetic interlocks"
            ],
            table: table([
                ["Model", "Interior Dimensions (WxDxH)", "Exterior Dimensions (WxDxH)"],
                ["AP_CL_DPB", "450 × 450 × 450 mm", "570 × 520 × 950 mm"],
                ["AP_CL_DPB", "600 × 600 × 600 mm", "720 × 670 × 1100 mm"],
                ["AP_CL_DPB", "750 × 750 × 750 mm", "870 × 820 × 1300 mm"],
                ["AP_CL_DPB", "900 × 900 × 900 mm", "1020 × 970 × 1450 mm"],
                ["AP_CL_DPB", "1000 × 1000 × 1000 mm", "1120 × 1070 × 1550 mm"],
                ["AP_CL_DPB", "1200 × 1200 × 1200 mm", "1320 × 1270 × 1750 mm"]
            ])
        },
        {
            name: "Static Pass Box",
            description: "When transferring materials between cleanrooms of the same classification without losing room pressure, a Static Pass Box offers a simple solution. Designed as a passive system without airflow or filtration, it serves as a secure physical barrier against contamination. Integrated electromagnetic interlocks prevent simultaneous door openings, while optional UV sterilization supports surface hygiene during transit.",
            image: "",
            specifications: [
                { parameter: "Airflow", details: "None" },
                { parameter: "Filter", details: "None" },
                { parameter: "Material", details: "SS 304 / SS 316" },
                { parameter: "Door Mechanism", details: "Electromagnetic interlock" },
                { parameter: "UV Sterilization", details: "Optional" },
                { parameter: "Viewing Window", details: "Polycarbonate / Tempered Glass" },
                { parameter: "Sizes", details: "Custom sizes available" },
                { parameter: "Mounting", details: "Wall-mounted / Floor-standing" }
            ],
            features: [
                "Passive design: no airflow, for transfers between rooms of the same cleanliness class",
                "Smart door interlock: electromagnetic system prevents both doors opening at once",
                "GMP stainless steel: durable, corrosion-resistant, easy to clean",
                "Glass view windows for quick visual tracking of items",
                "Optional UV light to sanitize surfaces during transfer"
            ],
            table: table([
                ["Model", "Interior Dimensions (WxDxH)", "Exterior Dimensions (WxDxH)"],
                ["AP_CL_SPB", "450 × 450 × 450 mm", "570 × 520 × 630 mm"],
                ["AP_CL_SPB", "600 × 600 × 600 mm", "720 × 670 × 780 mm"],
                ["AP_CL_SPB", "750 × 750 × 750 mm", "870 × 820 × 930 mm"],
                ["AP_CL_SPB", "900 × 900 × 900 mm", "1020 × 970 × 1080 mm"],
                ["AP_CL_SPB", "1000 × 1000 × 1000 mm", "1120 × 1070 × 1180 mm"],
                ["AP_CL_SPB", "1200 × 1200 × 1200 mm", "1320 × 1270 × 1380 mm"]
            ])
        }
    ],
    images: [
        "/products/Cleanroom/pass-box-front.webp",
        "/products/Cleanroom/pass-box-left.webp",
        "/products/Cleanroom/pass-box-right.webp"
    ]
};
