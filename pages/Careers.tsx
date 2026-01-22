
import React, { useEffect } from 'react';
import CareersHero from './Careers/sections/CareersHero';
import JobBoard from './Careers/sections/JobBoard';
import JoinFamilyCTA from './Careers/sections/JoinFamilyCTA';

const Listings = [
    {
        code: "MS_S&M_EL01",
        status: "Open",
        level: "Mid",
        experience: "02 to 04 years",
        vacancies: "02",
        department: "Sales & Marketing (Backend Coordination)",
        requirementDetails: "02 to 04 years of backend support and coordination of sales, customer support and service.",
        description: [
            "Provide backend support and coordination for sales, customer support, and service teams.",
            "Manage customer communication, follow-ups, and coordination activities.",
            "Prepare, update, and maintain SOPs related to service and coordination processes.",
            "Support documentation and reporting activities.",
            "Assist in promotional and marketing-related activities.",
            "Coordinate with QA and QC teams for cross-departmental support.",
            "Ensure smooth internal communication between departments."
        ],
        skills: [
            "Strong communication and interpersonal skills",
            "Good documentation and coordination abilities",
            "Experience in CRM or service coordination (Pharma industry preferred)"
        ]
    },
    {
        code: "MS_CS&S_EL04",
        status: "Open",
        level: "Senior",
        experience: "05 to 07 years",
        vacancies: "01",
        department: "Customer Support & Service",
        requirementDetails: "05 to 07 years in service and installations of pharma lab equipments.",
        description: [
            "Handle installation, servicing, and maintenance of pharmaceutical laboratory equipment.",
            "Manage end-to-end service and installation activities at customer sites.",
            "Provide onsite and remote technical support to customers.",
            "Lead and guide service engineers and technicians.",
            "Support QA and QC teams with documentation and service-related processes.",
            "Assist with PLC, SCADA, and HMI-based systems where required.",
            "Ensure customer satisfaction through timely and effective service delivery."
        ],
        skills: [
            "Strong technical expertise in pharma lab equipment",
            "Leadership and team-handling skills",
            "Willingness to travel for onsite service support",
            "Excellent communication and problem-solving skills"
        ]
    },
    {
        code: "MS_CS&S_EL05",
        status: "Open",
        level: "Mid",
        experience: "02 to 04 years",
        vacancies: "02",
        department: "Customer Support & Service",
        requirementDetails: "02 to 04 years in service and installations of pharma lab equipment.",
        description: [
            "Handle installation, servicing, and maintenance of pharmaceutical laboratory equipment.",
            "Manage end-to-end service and installation activities at customer sites.",
            "Provide onsite and remote technical support to customers.",
            "Support QA and QC teams with documentation and service-related processes.",
            "Assist with PLC, SCADA, and HMI-based systems where required.",
            "Ensure customer satisfaction through timely and effective service delivery."
        ],
        skills: [
            "Strong technical expertise in pharma lab equipment",
            "Willingness to travel for onsite service support",
            "Excellent communication and problem-solving skills"
        ]
    },
    {
        code: "MS_S&M_EL10",
        status: "Open",
        level: "Mid",
        experience: "02 to 03 years",
        vacancies: "01",
        department: "Sales & Marketing",
        requirementDetails: "02 to 03 years of sales and marketing in the pharma equipment industry.",
        description: [
            "Manage sales and marketing activities for pharmaceutical equipment.",
            "Handle customer inquiries, requirements, and technical discussions.",
            "Prepare quotations, documentation, and sales-related reports.",
            "Manage the complete sales cycle from inquiry to order closure.",
            "Coordinate with internal teams for order execution.",
            "Participate in exhibitions, promotions, and marketing campaigns.",
            "Report sales progress and activities to the Regional Head."
        ],
        skills: [
            "Experience in pharma equipment sales preferred",
            "Strong communication and negotiation skills",
            "Willingness to travel for customer meetings and exhibitions"
        ]
    }
];

const Careers: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-white">
            <CareersHero />
            <JobBoard listings={Listings} />
            <JoinFamilyCTA />
        </div>
    );
};

export default Careers;
