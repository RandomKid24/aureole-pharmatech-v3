
import React from 'react';
import { Clock, Target, Layers } from 'lucide-react';

export interface CategoryDetailSection {
    items: string[];
}

export interface NavItem {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
}

export const STABILITY_NAV_ITEMS: NavItem[] = [
    { title: "When", subtitle: "Applications", icon: React.createElement(Clock, { size: 18 }) },
    { title: "Why", subtitle: "Features & Benefits", icon: React.createElement(Target, { size: 18 }) },
    { title: "Where", subtitle: "Industries Served", icon: React.createElement(Layers, { size: 18 }) }
];

export const STABILITY_SECTIONS: CategoryDetailSection[] = [
    {
        items: [
            "During product stability studies for pharmaceuticals, cosmetics, food, and chemicals",
            "At formulation development stages to ensure product consistency over time",
            "During pre-approval studies for regulatory submissions (FDA, ICH, WHO compliance)",
            "When conducting accelerated, long-term, and intermediate stability testing",
            "During temperature & humidity stress testing for product robustness",
            "For ICH Zone-based testing (Zone I–IVb as per guidelines)",
            "Pre-clinical and clinical trial phases for regulatory compliance",
            "At scale-up and commercial batch release stages for QC testing",
            "During raw material stability testing before production",
            "When determining shelf-life, packaging compatibility, and storage conditions",
            "For accelerated stability testing to predict product lifespan in less time",
            "During photostability studies (with optional light testing feature)",
            "During post-marketing surveillance to monitor product performance",
            "For validating storage conditions for different markets globally",
            "After product reformulation to ensure consistency and compliance"
        ]
    },
    {
        items: [
            "Precise Temperature & Humidity Control with advanced sensors",
            "Energy-Efficient Technology – reduces power consumption significantly",
            "Uniform Airflow Design for consistent conditions throughout the chamber",
            "Compact & Modular Design to fit different lab spaces",
            "High-Quality Construction with corrosion-resistant materials",
            "Fully Compliant with ICH, WHO, GMP, MHRA and FDA standards",
            "High Reliability & Low Maintenance – designed for 24x7 operation",
            "User-Friendly Interface with advanced HMI/PLC control system",
            "Data Integrity & 21 CFR Part 11 Compliance",
            "Safety Features – Alarms for temperature/humidity deviations",
            "Remote Monitoring, Graphing & Data Logging Options",
            "Low Maintenance with Self-Diagnostic Features",
            "Eco-Friendly Refrigerants as per environmental guidelines",
            "Validation & Mapping Support (IQ, OQ, PQ documentation)",
            "Customizable Configurations – Walk-In and special purpose",
            "Long-Term Reliability designed for continuous operations",
            "Global Service & AMC Support for hassle-free operation"
        ]
    },
    {
        items: [
            "Pharmaceutical & Biotech Industry – drug stability and formulation",
            "Food & Beverage Sector – shelf-life and flavour stability",
            "Cosmetic & Personal Care Industry – creams and lotions analysis",
            "Chemical Industry – raw material and specialty testing",
            "Medical Devices & Diagnostics – ensuring product safety",
            "Nutraceuticals & Herbal Products – validating potency",
            "Veterinary Medicines – compliance with stability guidelines",
            "Academic & Research Institutions – long-term experiments",
            "Environmental Simulation Labs – simulating climatic zones",
            "Aerospace & Defence Industry – component stress testing",
            "Packaging Industry – testing material resistance",
            "Dairy & Beverage Companies – microbial growth studies",
            "Agricultural Research – testing seeds and crop samples"
        ]
    }
];

export const TABLETOP_NAV_ITEMS: NavItem[] = [
    { title: "When", subtitle: "Applications", icon: React.createElement(Clock, { size: 18 }) },
    { title: "Why", subtitle: "Features & Benefits", icon: React.createElement(Target, { size: 18 }) },
    { title: "Where", subtitle: "Industries Served", icon: React.createElement(Layers, { size: 18 }) }
];

export const TABLETOP_SECTIONS: CategoryDetailSection[] = [
    {
        items: [
            "During sample preparation for research, testing, or analysis in laboratories",
            "When performing controlled heating, mixing, or homogenization processes",
            "For sterility testing and contamination monitoring in clean environments",
            "During quality control and stability studies in pharmaceutical and biotech industries",
            "In analytical testing and validation processes to ensure accuracy and compliance",
            "For biological and chemical reactions requiring precise temperature or pressure control",
            "During vacuum operations, drying, or evaporation in lab-scale experiments",
            "When conducting environmental monitoring and air quality validation",
            "For sample consistency and reproducibility in R&D and production labs",
            "Whenever space-saving, portable solutions are required for lab operations"
        ]
    },
    {
        items: [
            "Compact and space-efficient design – ideal for modern labs with limited space",
            "High precision and accuracy in temperature, humidity, pressure, and process control",
            "Energy-efficient and cost-effective without compromising performance",
            "User-friendly interface with advanced digital controls for easy operation",
            "Versatile applications across multiple industries and testing needs",
            "Built-in safety features – alarms, overload protection, and fail-safes",
            "Low maintenance with durable construction for long-term use",
            "Compliance with international standards (ISO, GMP, WHO, FDA)",
            "Customizable configurations to meet specific research or production requirements",
            "Reliable performance under continuous operation with minimal downtime",
            "Data logging and remote monitoring options for process traceability",
            "Eco-friendly technology using sustainable materials and energy-saving systems"
        ]
    },
    {
        items: [
            "Pharmaceutical and Biotech Industries – for formulation, stability, and QC testing",
            "Food and Beverage Industry – for microbial testing, shelf-life studies, and sample prep",
            "Chemical Industry – for controlled reactions, heating, and sample processing",
            "Cosmetics and Personal Care Industry – for product stability and consistency studies",
            "Medical and Diagnostic Laboratories – for sterilization, contamination monitoring, and testing",
            "Academic and Research Institutes – for experimental studies and sample preparation",
            "Environmental and Microbiology Labs – for air, water, and soil testing",
            "Industrial Quality Control Labs – for product validation and batch consistency"
        ]
    }
];
