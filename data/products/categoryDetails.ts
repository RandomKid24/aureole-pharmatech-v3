
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

export const FURNITURE_NAV_ITEMS: NavItem[] = [
    { title: "When", subtitle: "Applications", icon: React.createElement(Clock, { size: 18 }) },
    { title: "Why", subtitle: "Features & Benefits", icon: React.createElement(Target, { size: 18 }) },
    { title: "Where", subtitle: "Industries Served", icon: React.createElement(Layers, { size: 18 }) }
];

export const FURNITURE_SECTIONS: CategoryDetailSection[] = [
    {
        items: [
            "Setting up new research, analytical, or quality control laboratories",
            "Upgrading existing lab facilities for better ergonomics and space utilization",
            "Expanding production facilities in pharmaceutical and chemical industries",
            "Designing modular workspaces for high-throughput testing environments",
            "When installing specialized containment systems like fume hoods",
            "For specialized storage solutions requiring chemical resistance",
            "During the implementation of lean lab management and organized workspaces",
            "When requiring durable, anti-vibration surfaces for sensitive instruments",
            "In environments requiring stringent sterile conditions and easy maintenance",
            "For collaborative research spaces that need flexible island bench configurations"
        ]
    },
    {
        items: [
            "Modular & Scalable Design – allows for future lab expansions and reconfiguration",
            "Superior Durability – heavy-duty construction for long-term industrial use",
            "Ergonomic Excellence – designed to reduce user fatigue and improve productivity",
            "Advanced Chemical Resistance – high-grade worktops resistant to acids and solvents",
            "Integrated Service Management – built-in provisions for gas, water, and power",
            "Compliance with SEFA and ASHRAE standards for laboratory safety",
            "Space Optimization – smart storage solutions to maximize overhead and floor space",
            "Easy Maintenance – seamless surfaces designed for effective cleaning and sterilization",
            "Customizable Aesthetics – professional color schemes to match corporate identity",
            "Enhanced Safety Features – rounded edges, safety locks, and fire-resistant materials"
        ]
    },
    {
        items: [
            "Pharmaceutical Research & Development – formulating the next generation of drugs",
            "Quality Control Laboratories – ensuring batch consistency and safety",
            "Chemical & Agrochemical Industries – testing and synthesis environments",
            "Healthcare & Diagnostic Centers – sterile processing and sample analysis",
            "Academic & Forensic Sciences – providing reliable infrastructure for research",
            "Food & Beverage Industry – testing shelf life and microbial safety",
            "Environmental Testing Labs – analyzing water, soil, and air quality",
            "Biotechnology & Life Sciences – specialized cleanroom furniture solutions",
            "Cosmetic & Personal Care – product testing and formulation labs",
            "Industrial Manufacturing – integrated lab spaces within production plants"
        ]
    }
];

export const CLEANROOM_NAV_ITEMS: NavItem[] = [
    { title: "When", subtitle: "Applications", icon: React.createElement(Clock, { size: 18 }) },
    { title: "Why", subtitle: "Features & Benefits", icon: React.createElement(Target, { size: 18 }) },
    { title: "Where", subtitle: "Industries Served", icon: React.createElement(Layers, { size: 18 }) }
];

export const CLEANROOM_SECTIONS: CategoryDetailSection[] = [
    {
        items: [
            "During material transfer between classified and non-classified areas in GMP facilities",
            "When sterile product handling and aseptic processing is required",
            "For contamination-free sampling, weighing, and dispensing of active pharmaceutical ingredients",
            "During microbiology testing, sterility testing, and cell culture operations",
            "When conducting cleanroom validation and environmental monitoring",
            "For sterile compounding and pharmaceutical formulation in controlled environments",
            "During quality control testing requiring ISO 5 (Class 100) cleanliness",
            "When biological containment is needed for hazardous materials or pathogens",
            "For garment and equipment transfer into sterile production areas",
            "During photostability studies and light-sensitive product handling",
            "When setting up or upgrading pharmaceutical manufacturing facilities",
            "For research and development labs requiring contamination control",
            "During regulatory inspections and GMP compliance audits",
            "When implementing barrier technology for operator and product protection"
        ]
    },
    {
        items: [
            "WHO-GMP, EU-GMP, and USFDA Compliant Design – meets global regulatory standards",
            "ISO 14644 and ISO 5–8 Cleanroom Standards – validated cleanliness levels",
            "Pharma-Grade Stainless Steel Construction – SS304/SS316 for corrosion resistance",
            "HEPA/ULPA Filtration Systems – 99.995% efficiency for particle removal",
            "Contamination-Control Airflow Design – laminar flow for sterile environments",
            "Validation-Ready Documentation – DQ/IQ/OQ support for regulatory compliance",
            "Mechanical & Electromagnetic Interlocks – prevents cross-contamination",
            "UV Sterilization Systems – effective surface decontamination",
            "Energy-Efficient Operation – low power consumption with high performance",
            "Digital Monitoring & Control – real-time airflow and pressure monitoring",
            "Seamless & Crevice-Free Finish – easy cleaning and sanitization",
            "Customizable Configurations – tailored to specific facility requirements",
            "Low Maintenance Design – self-diagnostic features and easy filter access",
            "Ergonomic Operator Interface – designed for user comfort and safety",
            "Triple Protection (BSC) – personnel, product, and environmental safety",
            "Modular & Scalable Systems – adaptable for facility expansion"
        ]
    },
    {
        items: [
            "Pharmaceutical Manufacturing – sterile production and aseptic processing",
            "Biotechnology & Life Sciences – cell culture and biological research",
            "Hospital & Healthcare Facilities – sterile compounding and preparation",
            "Microbiology Laboratories – contamination testing and culture work",
            "Medical Device Manufacturing – cleanroom assembly and packaging",
            "Cosmetics & Personal Care – sterile formulation and quality control",
            "Food & Beverage Industry – aseptic processing and packaging",
            "Research & Development Labs – controlled environment testing",
            "Quality Control Laboratories – analytical testing and sampling",
            "Nutraceuticals & Supplements – GMP-compliant manufacturing",
            "Veterinary Pharmaceuticals – sterile drug production",
            "Academic & Training Institutes – cleanroom technology education",
            "Contract Manufacturing Organizations (CMOs) – multi-product facilities",
            "Regulatory Testing Labs – compliance and validation services"
        ]
    }
];
