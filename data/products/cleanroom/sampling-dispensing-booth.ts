import { ProductDetail } from '../types';

export const samplingDispensingBooth: ProductDetail = {
    description: "Reverse Laminar Air Flow (RLAF) units, commonly used as Sampling, Dispensing or Weighing Booths, are containment systems designed to isolate airborne particulates at the source. A continuous downward vertical airflow paired with a negative pressure zone captures escaping dust, hazardous powders and chemical aerosols during bulk material transfers.\n\nThis barrier protects the technician while preventing contamination from spreading into the wider facility.",
    specifications: [
        { parameter: "Airflow", details: "Continuous downward vertical airflow with negative pressure zone" }
    ],
    models: [],
    variantTable: {
        headers: ["Model", "Sizes (ft)", "Interior Dimensions (WxDxH)", "Exterior Dimensions (WxDxH)"],
        rows: [
            ["AP_CL_RLAF", "3’ × 3’", "955 × 995 × 1950 mm", "1035 × 1545 × 2275 mm"],
            ["AP_CL_RLAF", "4’ × 3’", "1280 × 995 × 1950 mm", "1360 × 1545 × 2275 mm"],
            ["AP_CL_RLAF", "4’ × 4’", "1300 × 1290 × 2245 mm", "1380 × 1840 × 2570 mm"],
            ["AP_CL_RLAF", "5’ × 4’", "1604 × 1320 × 1830 mm", "1684 × 1920 × 2155 mm"],
            ["AP_CL_RLAF", "5’ × 5’", "1604 × 1624 × 2000 mm", "1684 × 2224 × 2325 mm"],
            ["AP_CL_RLAF", "6’ × 4’", "1910 × 1300 × 2135 mm", "1990 × 1850 × 2460 mm"],
            ["AP_CL_RLAF", "6’ × 6’", "1930 × 1930 × 2000 mm", "2010 × 2530 × 2325 mm"],
            ["AP_CL_RLAF", "8’ × 6’", "2500 × 1950 × 1950 mm", "2580 × 2550 × 2275 mm"]
        ],
        remark: null
    },
    regularAttributes: [],
    addOnsAttributes: [],
    images: [
        "/products/Cleanroom/sampling-dispensing-booth-front.webp",
        "/products/Cleanroom/sampling-dispensing-booth-left.webp",
        "/products/Cleanroom/sampling-dispensing-booth-right.webp"
    ]
};
