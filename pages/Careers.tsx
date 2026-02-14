
import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import CareersHero from './Careers/sections/CareersHero';
import JobBoard from './Careers/sections/JobBoard';


const Listings = [
    {
        code: "PRD_OPS_JM",
        status: "Open",
        level: "Junior to Mid-Level",
        experience: "0 to 5 years",
        vacancies: "Open",
        department: "Production / Operations",
        requirementDetails: "MBA (Ops) / B.E or Diploma (Mech/Elec/Inst/Elec)",
        description: [
            "Hands-on experience in PRD, QC, and testing of pharma machinery/equipment (Stability Chambers, Lab Equipment)",
            "Strong understanding of PRD processes: Bending, Cutting, Welding",
            "Handle and manage shop floor production teams",
            "Coordinate with PRD, Design, Marketing, Store, Purchase, QC, and Dispatch",
            "Optimize production lead time and define processes",
            "Track production status with daily reports, job cards, and machine-wise updates",
            "Identify and report possible delays with reasons",
            "Understand product lifecycle and production flow",
            "Plan and execute production as per priority and dispatch schedules",
            "Maintain proper documentation and process compliance"
        ],
        skills: [
            "Proficiency in MS Excel, PowerPoint, and Word",
            "Knowledge of electrical components (Contactor, Sensor, Timer, SSR, SMPS, MCB, Wiring) is a plus",
            "Strong ethics, attitude, and adherence to company policies"
        ]
    },
    {
        code: "SM_SR_MGR",
        status: "Open",
        level: "Senior / Management Level",
        experience: "9–10+ years",
        vacancies: "Open",
        department: "Sales & Marketing",
        requirementDetails: "MBA (Mkt) + Tech Background (Elec/Inst/Elec/Mech/B.Pharm)",
        description: [
            "In-depth knowledge of pharma industry and equipment",
            "Analyze market trends and develop sales strategies",
            "Lead and manage teams (minimum 8–10 members)",
            "Handle complete sales cycle: Enquiry → Order → Closure",
            "Documentation: Quotations, Work Orders",
            "Marketing campaigns, promotions, and exhibition planning",
            "Experience with GeM portal",
            "Field role with extensive travel"
        ],
        skills: [
            "Excellent communication and presentation skills",
            "Strong ethics and customer compliance"
        ]
    },
    {
        code: "SM_MID",
        status: "Open",
        level: "Mid-Level (Senior Executive / Assistant Manager)",
        experience: "5+ years",
        vacancies: "Open",
        department: "Sales & Marketing",
        requirementDetails: "MBA (Mkt) + Tech Background (Elec/Inst/Elec/Mech/B.Pharm)",
        description: [
            "End-to-end handling of enquiries and orders",
            "Sales documentation and coordination",
            "Field sales with mandatory travel",
            "Support marketing activities and exhibitions",
            "Understand technical specifications and applications"
        ],
        skills: [
            "Strong communication and interpersonal skills"
        ]
    },
    {
        code: "SM_JR",
        status: "Open",
        level: "Junior Level (Executive / Senior Executive)",
        experience: "0–2 years",
        vacancies: "Open",
        department: "Sales & Marketing",
        requirementDetails: "MBA (Mkt) + Tech Background (Elec/Inst/Elec/Mech/B.Pharm)",
        description: [
            "Support complete sales cycle",
            "Prepare quotations and documentation",
            "Assist in exhibitions and promotional activities",
            "Field sales and travel mandatory",
            "Learn product specifications and applications"
        ],
        skills: [
            "Strong communication and interpersonal skills"
        ]
    },
    {
        code: "SE_MID",
        status: "Open",
        level: "Mid-Level",
        experience: "1–5 years",
        vacancies: "Open",
        department: "Service Engineer",
        requirementDetails: "B.E / Diploma / B.Sc / ITI (Technical)",
        description: [
            "Installation, Service, AMC, Calibration, and Maintenance",
            "End-to-end service support",
            "Electrical, electronics, and refrigeration troubleshooting",
            "Customer-facing role with remote support",
            "Support QA/QC documentation",
            "Field role with travel"
        ],
        skills: [
            "Basic knowledge of PLC & HMI preferred"
        ]
    },
    {
        code: "SE_JR",
        status: "Open",
        level: "Junior-Level",
        experience: "0–1 year",
        vacancies: "Open",
        department: "Service Engineer",
        requirementDetails: "B.E / Diploma / B.Sc / ITI (Technical)",
        description: [
            "Assist in installation, service, and maintenance",
            "Learn equipment functionality and applications",
            "Customer support and documentation assistance",
            "Willingness to travel and work on-site"
        ],
        skills: [
            "Technical aptitude and willingness to learn"
        ]
    },
    {
        code: "QCT_JR_MID",
        status: "Open",
        level: "Junior & Mid-Level",
        experience: "0–5 years",
        vacancies: "Open",
        department: "QCT – Quality Control & Testing",
        requirementDetails: "B.E / Diploma (Elec/Inst/Elec/Mech)",
        description: [
            "QC and testing of pharma machinery (Stability Chambers, Lab Equipment)",
            "Incoming, in-process, and final inspection",
            "Electrical component testing and validation",
            "Documentation and compliance awareness",
            "Stage-wise QC across production cycle"
        ],
        skills: [
            "Strong ethics and quality mindset"
        ]
    }
];

const Careers: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-transparent">
            <SEO 
                title="Careers at Aureole Pharma Tech Nashik, Maharashtra, India"
                description="Join Aureole Pharma Tech in Nashik and be part of a dynamic team driving innovation in the pharmaceutical industry. We offer rewarding career opportunities, professional growth, and a collaborative work environment for individuals passionate about quality, research, and excellence."
                canonical="https://www.aureolepharmatech.com/careers/"
            />
            <CareersHero />
            <JobBoard listings={Listings} />

        </div>
    );
};

export default Careers;
