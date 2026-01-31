import { ProductDetail } from '../types';

export const airSampler: ProductDetail = {
    description: "Aureole Pharma Tech Air Samplers provide high-performance microbial monitoring for critical environments. Built on a unified industrial-grade hardware platform, they are available in both Basic and 21 CFR Part 11 compliant versions to meet diverse regulatory needs. Both models share the same high-precision sampling engine while offering different levels of data governance.",
    image: "/products/AirSampler/air-sampler-basic-3.png",
    keyFeaturesHeading: "",
    keyFeatures: [],
    specifications: [
        { parameter: "Display", details: "4.3\" TFT LCD (272 x 480) Touch" },
        { parameter: "Flow Rate", details: "Available in 25, 50, 100, 200 LPM" },
        { parameter: "Weight", details: "2.7 kg" },
        { parameter: "Communication", details: "Wi-Fi Guided Transfer" },
        { parameter: "Battery Life", details: "10 Hours Active Sampling (LiFePO4)" }
    ],
    models: [],
    regularAttributesHeading: "",
    regularAttributes: [],
    addOnsAttributes: [],
    complexTable: {
        rows: [
            {
                cells: [
                    { content: "Technical Parameter", isHeader: true },
                    { content: "Performance Value / Specification", isHeader: true }
                ]
            },
            {
                cells: [
                    { content: "Sampling Head" },
                    { content: "1.00 mm 219 holes, anodized aluminum" }
                ]
            },
            {
                cells: [
                    { content: "Volume" },
                    { content: "25 to 2000 L" }
                ]
            },
            {
                cells: [
                    { content: "Location" },
                    { content: "1000 locations" }
                ]
            },
            {
                cells: [
                    { content: "Sample Recipes" },
                    { content: "1000 recipes" }
                ]
            },
            {
                cells: [
                    { content: "Sampling Delay" },
                    { content: "0 to 300 seconds" }
                ]
            },
            {
                cells: [
                    { content: "Delay Between Runs" },
                    { content: "0 to 600 seconds" }
                ]
            },
            {
                cells: [
                    { content: "Group Configurations" },
                    { content: "100 groups" }
                ]
            },
            {
                cells: [
                    { content: "Users Configurations" },
                    { content: "1000 users" }
                ]
            },
            {
                cells: [
                    { content: "Remarks Configurations" },
                    { content: "1000 marks" }
                ]
            },
            {
                cells: [
                    { content: "Sample Data Records" },
                    { content: "100000 to 500000 records" }
                ]
            },
            {
                cells: [
                    { content: "Audit Trail Records" },
                    { content: "500000 to 1500000 records" }
                ]
            },
            {
                cells: [
                    { content: "Battery Charger" },
                    { content: "14 to 16 Vdc with 1.5a" }
                ]
            },
            {
                cells: [
                    { content: "Operating Environments" },
                    { content: "Temperature: 5 - 30 c; Humidity: 10 - 80% Rh" }
                ]
            },
            {
                cells: [
                    { content: "Storage Environments" },
                    { content: "Temperature: 5 - 40 c; Humidity: 10 - 80% Rh" }
                ]
            }
        ],
        remark: "Hardware parameters are shared across both Basic and 21 CFR models."
    },
    complianceBadge: {
        text: "Now!\nalso available in 21 CFR Part 11 model",
        image: "/certification-logos/21CFRpart11.png"
    }
};
