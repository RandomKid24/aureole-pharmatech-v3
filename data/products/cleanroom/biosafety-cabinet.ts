import { ProductDetail } from '../types';

export const biosafetyCabinet: ProductDetail = {
    description: "Biosafety Cabinets (BSCs) are specialized containment enclosures that use laminar airflow and HEPA filtration to protect the operator, the environment, and the sample from biohazards and infectious agents.\n\nClass 2 cabinets are available as Type A2 (70% recirculated air, 30% exhaust), ideal for microbiological and pharmaceutical applications, and Type B2 (100% exhausted air), ideal for handling toxic chemicals and volatile substances.",
    keyFeatures: [
        "Type A2: 70% recirculated air and 30% exhaust",
        "Type B2: 100% exhausted air for toxic chemicals and volatile substances",
        "Product and personnel protection",
        "Eliminates cross-contamination risks",
        "Energy-efficient fluorescent lamp that produces less heat",
        "Feather-touch switches for easy operation",
        "Minihelic gauges to monitor differential pressure",
        "UV light with hour meter",
        "Durable wall plenum design, easy to clean and maintain"
    ],
    keyFeaturesHeading: "Features & Equipment",
    specifications: [
        { parameter: "Cleanliness Standard", details: "Class 100 (ISO Class 5 per ISO 14644-1 & 2)" },
        { parameter: "Construction MOC", details: "Stainless Steel SS 304" },
        { parameter: "Illumination", details: "High intensity, low wattage LED / Fluorescent lighting (> 300 Lux)" },
        { parameter: "Noise Level", details: "Low noise level" }
    ],
    models: [],
    variantTable: {
        headers: ["Model", "Sizes (Ft)", "Interior Dimensions (WxDxH)", "Exterior Dimensions (WxDxH)"],
        rows: [
            ["AP_CL_BS", "3’ × 2’", "955 × 650 × 600 mm", "1075 × 975 × 2100 mm"],
            ["AP_CL_BS", "4’ × 2’", "1260 × 650 × 600 mm", "1380 × 975 × 2100 mm"]
        ],
        remark: "Applications: clinical & diagnostic laboratories, microbiology & virology research, pharmaceutical & biomedical manufacturing, cell & tissue culture work, genetic engineering & biotech research, chemotherapy drug preparation."
    },
    regularAttributes: [],
    addOnsAttributes: [],
    images: [
        "/products/Cleanroom/biosafety-cabinet-front.webp",
        "/products/Cleanroom/biosafety-cabinet-left.webp",
        "/products/Cleanroom/biosafety-cabinet-right.webp"
    ]
};
