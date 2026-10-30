import { ProductDetail, ComplexTable } from '../types';

const table = (rows: string[][]): ComplexTable => ({
    rows: rows.map((r) => ({ cells: r.map((content) => ({ content })) }))
});

export const laminarAirFlow: ProductDetail = {
    description: "Laminar Air Flow (LAF) systems provide a unidirectional, particle-free environment using HEPA filtration to protect sensitive samples and processes from airborne contamination.\n\nAvailable as Ceiling Suspended, Vertical Table Top (Bench Top) and Horizontal units.",
    specifications: [
        { parameter: "Cleanliness Standard", details: "Class 100" },
        { parameter: "Airflow Velocity", details: "90 FPM ± 20%" },
        { parameter: "HEPA Filter Efficiency", details: "99.999% efficiency for particles > 0.3 µm" },
        { parameter: "Pre-Filter Efficiency", details: "95% efficiency for particles > 5 microns" },
        { parameter: "Construction MOC", details: "Stainless Steel SS 304" },
        { parameter: "Illumination", details: "High intensity, low wattage > 800 Lux" },
        { parameter: "Noise Level", details: "Low noise level" }
    ],
    models: [],
    regularAttributes: [],
    addOnsAttributes: [],
    variantsHeading: "Types of Laminar Air Flow",
    variants: [
        {
            name: "Ceiling Suspended Vertical LAF",
            description: "An overhead, ceiling-mounted filtration unit that discharges a continuous, unidirectional stream of HEPA-filtered air downward to create an unobstructed, localized ISO Class 5 (Class 100) sterile work zone. Filtered air exits from the top of the unit and moves vertically downward.",
            image: "",
            table: table([
                ["Model", "Sizes (ft)", "Interior (WxD)", "Exterior (WxDxH)"],
                ["AP_CL_CLAF", "4’ × 2’", "1260 × 650 mm", "1340 × 730 × 550 mm"],
                ["AP_CL_CLAF", "4’ × 3’", "1280 × 955 mm", "1360 × 1035 × 550 mm"],
                ["AP_CL_CLAF", "4’ × 4’", "1280 × 1260 mm", "1360 × 1340 × 550 mm"],
                ["AP_CL_CLAF", "5’ × 3’", "1580 × 955 mm", "1660 × 1035 × 550 mm"],
                ["AP_CL_CLAF", "5’ × 4’", "1580 × 1280 mm", "1660 × 1360 × 550 mm"],
                ["AP_CL_CLAF", "5’ × 5’", "1580 × 1580 mm", "1660 × 1660 × 550 mm"],
                ["AP_CL_CLAF", "6’ × 4’", "1890 × 1280 mm", "1970 × 1360 × 550 mm"],
                ["AP_CL_CLAF", "6’ × 5’", "1890 × 1580 mm", "1970 × 1660 × 550 mm"],
                ["AP_CL_CLAF", "6’ × 6’", "1910 × 1890 mm", "1990 × 1970 × 550 mm"]
            ])
        },
        {
            name: "Vertical LAF Table Top (Bench Top)",
            description: "A compact, self-contained laboratory workstation that sits on an existing table or counter and delivers a continuous, vertical stream of HEPA-filtered air downward onto the workspace to protect samples from contamination.",
            image: "",
            table: table([
                ["Model", "Sizes (ft)", "Interior (WxDxH)", "Exterior (WxDxH)"],
                ["AP_CL_VLAF", "3’ × 2’", "975 × 670 × 610 mm", "1055 × 750 × 1920 mm"],
                ["AP_CL_VLAF", "4’ × 2’", "1280 × 670 × 610 mm", "1360 × 750 × 1920 mm"]
            ])
        },
        {
            name: "Horizontal Laminar Air Flow",
            description: "A controlled-environment workstation where high-purity air moves in a continuous, parallel, horizontal direction across the work surface, traveling from the back of the cabinet straight out toward the operator.",
            image: "",
            features: [
                "Microorganism culturing",
                "Media plate preparation",
                "Plant tissue culture",
                "Aseptic drug preparation",
                "Vaccine and medicine production",
                "Surgical and healthcare support"
            ]
        }
    ],
    images: [
        "/products/Cleanroom/laminar-air-flow-front.webp",
        "/products/Cleanroom/laminar-air-flow-left.webp",
        "/products/Cleanroom/laminar-air-flow-right.webp"
    ]
};
