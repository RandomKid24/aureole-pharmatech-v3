
import React, { useEffect, useState } from 'react';
import { Target, Zap, ChevronDown, ChevronUp, Mail, Briefcase } from 'lucide-react';

const Careers: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [expandedJob, setExpandedJob] = useState<string | null>(null);

    const toggleJob = (code: string) => {
        setExpandedJob(expandedJob === code ? null : code);
    };

    const listings = [
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

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden border-b border-slate-100 bg-white">
                <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none hidden lg:block">
                    <span className="text-[150px] font-black font-heading text-aureole-slate tracking-tighter leading-none uppercase">JOIN CAREERS</span>
                </div>

                <div className="container mx-auto px-6 lg:px-24 relative z-10">
                    <div className="max-w-4xl text-center lg:text-left mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                            <span className="w-10 h-[2px] bg-aureole-blue"></span>
                            <h2 className="text-[10px] font-black font-heading uppercase tracking-[0.5em] text-aureole-blue">PEOPLE & CULTURE</h2>
                        </div>
                        <h1 className="text-5xl lg:text-8xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none mb-10">
                            Careers.
                        </h1>
                        <p className="text-slate-500 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl text-justify tracking-tight">
                            The character of any organization, encompassing its work culture, objectives, and vision, is essentially a mirror image of its team and employees. We firmly believe that fostering a supportive environment leads to individual growth and contributions to the organization’s progress.
                        </p>
                    </div>
                </div>
            </section>

            {/* Compact Job Board */}
            <section className="py-24 bg-aureole-soft">
                <div className="container mx-auto px-6 lg:px-24">
                    <div className="flex flex-col gap-10">
                        {/* Table Header */}
                        <div className="hidden lg:grid grid-cols-12 gap-6 bg-[#001529] p-6 text-[10px] font-black uppercase tracking-[0.3em] text-white border-b border-white/10 shadow-xl">
                            <div className="col-span-2">Job Code</div>
                            <div className="col-span-4">Position / Department</div>
                            <div className="col-span-2 text-center">Experience</div>
                            <div className="col-span-1 text-center">Level</div>
                            <div className="col-span-1 text-center">Openings</div>
                            <div className="col-span-2 text-right pr-4">Action</div>
                        </div>

                        {/* Job Rows */}
                        <div className="space-y-4">
                            {listings.map((job) => (
                                <div key={job.code} className={`group border border-slate-100 bg-white transition-all duration-300 ${expandedJob === job.code ? 'shadow-2xl shadow-slate-200 border-aureole-blue/20' : 'hover:border-slate-300 shadow-sm'}`}>
                                    {/* Summary Row */}
                                    <div
                                        onClick={() => toggleJob(job.code)}
                                        className="grid lg:grid-cols-12 gap-6 p-6 lg:p-8 items-center cursor-pointer select-none"
                                    >
                                        <div className="col-span-12 lg:col-span-2">
                                            <span className="text-[10px] font-black bg-slate-100 text-[#001529] px-3 py-1 uppercase tracking-widest border border-slate-200">{job.code}</span>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <h3 className="text-xl lg:text-2xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none group-hover:text-aureole-blue transition-colors">
                                                {job.department}
                                            </h3>
                                        </div>
                                        <div className="hidden lg:block lg:col-span-2 text-center">
                                            <span className="text-[12px] font-black text-slate-500 uppercase tracking-tight">{job.experience}</span>
                                        </div>
                                        <div className="hidden lg:block lg:col-span-1 text-center">
                                            <span className="text-[12px] font-black text-slate-500 uppercase tracking-tight">{job.level}</span>
                                        </div>
                                        <div className="hidden lg:block lg:col-span-1 text-center">
                                            <span className="text-[12px] font-black text-[#001529] uppercase tracking-tight">{job.vacancies}</span>
                                        </div>
                                        <div className="col-span-12 lg:col-span-2 flex justify-between lg:justify-end items-center lg:gap-6">
                                            <div className="lg:hidden flex gap-4">
                                                <div className="flex flex-col">
                                                    <span className="text-[8px] font-black text-slate-400 uppercase">Exp.</span>
                                                    <span className="text-[10px] font-black text-slate-600">{job.experience}</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[8px] font-black text-slate-400 uppercase">Level</span>
                                                    <span className="text-[10px] font-black text-slate-600">{job.level}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 text-aureole-blue font-black text-[10px] uppercase tracking-widest group-hover:gap-6 transition-all">
                                                {expandedJob === job.code ? 'CLOSE' : 'READ MORE'}
                                                {expandedJob === job.code ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded Details */}
                                    {expandedJob === job.code && (
                                        <div className="p-8 lg:p-12 border-t border-slate-50 bg-slate-50/50 animate-in fade-in slide-in-from-top-4 duration-300">
                                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-8">
                                                        < Zap size={14} className="text-aureole-cyan" />
                                                        <h4 className="text-[11px] font-black text-[#001529] uppercase tracking-[0.2em]">JOB DESCRIPTION</h4>
                                                    </div>
                                                    <ul className="space-y-4">
                                                        {job.description.map((item, i) => (
                                                            <li key={i} className="flex gap-4">
                                                                <div className="w-1 h-3 bg-aureole-cyan mt-0.5 flex-shrink-0"></div>
                                                                <span className="text-[15px] font-medium text-slate-600 leading-relaxed tracking-tight">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3 mb-8">
                                                        <Target size={14} className="text-aureole-blue" />
                                                        <h4 className="text-[10px] font-black text-[#001529] uppercase tracking-[0.2em]">SKILLS REQUIRED</h4>
                                                    </div>
                                                    <ul className="space-y-4">
                                                        {job.skills.map((skill, i) => (
                                                            <li key={i} className="flex gap-4">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-aureole-blue mt-1.5 flex-shrink-0"></div>
                                                                <span className="text-[15px] font-medium text-[#001529] tracking-tight">{skill}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <div className="mt-12 p-8 bg-white border border-slate-100 shadow-xl">
                                                        <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">Application Outreach</h5>
                                                        <a
                                                            href={`mailto:hr@aureolepharmatech.com?subject=Application for ${job.department} (${job.code})`}
                                                            className="flex items-center justify-between group/btn bg-[#001529] text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-aureole-blue transition-all"
                                                        >
                                                            Send Resume <Mail size={16} className="group-hover:translate-x-2 transition-transform" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Compact Footer */}
                    <div className="mt-24 p-12 bg-slate-900 border-l-[6px] border-aureole-cyan relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="relative z-10 text-center lg:text-left">
                            <h3 className="text-3xl lg:text-4xl font-[950] font-heading text-white uppercase tracking-tighter mb-4 leading-none">
                                JOIN THE FAMILY.
                            </h3>
                            <p className="text-slate-400 text-lg lg:text-xl font-medium leading-relaxed max-w-xl">
                                Send your resumes to <span className="text-aureole-cyan">hr@aureolepharmatech.com</span>. Please mention the <span className="text-white uppercase">JOB CODE</span> in the subject line of your email for processing.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <Briefcase size={80} className="text-white/5 absolute right-0 top-1/2 -translate-y-1/2" />
                            <a
                                href="mailto:hr@aureolepharmatech.com"
                                className="relative z-10 inline-flex items-center gap-6 px-12 py-5 bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest hover:bg-aureole-cyan hover:text-white transition-all shadow-2xl"
                            >
                                Contact HR <Mail size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
