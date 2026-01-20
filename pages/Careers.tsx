
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
                        {/* Table Header - Lighter Theme */}
                        <div className="hidden lg:grid grid-cols-12 gap-6 bg-slate-100 p-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#001529] border border-slate-200">
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
                                    {/* Action Row */}
                                    <div
                                        onClick={() => toggleJob(job.code)}
                                        className="grid lg:grid-cols-12 gap-6 p-6 lg:p-8 items-center cursor-pointer select-none relative z-10"
                                    >
                                        <div className="col-span-12 lg:col-span-2">
                                            <span className="text-[10px] font-black bg-slate-100 text-[#001529] px-3 py-1 uppercase tracking-widest border border-slate-200 transition-colors group-hover:bg-[#001529] group-hover:text-white group-hover:border-[#001529]">{job.code}</span>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <h3 className="text-xl lg:text-2xl font-[950] font-heading text-[#001529] uppercase tracking-tighter leading-none group-hover:text-aureole-blue transition-all duration-300 transform group-hover:translate-x-1">
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
                                            <div className="flex items-center gap-4 text-aureole-blue font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300">
                                                <span className="opacity-70 group-hover:opacity-100">
                                                    {expandedJob === job.code ? 'CLOSE' : 'READ MORE'}
                                                </span>
                                                <div className={`p-2 rounded-full border transition-all duration-500 ${expandedJob === job.code ? 'bg-aureole-blue text-white border-aureole-blue rotate-180' : 'bg-slate-50 text-aureole-blue border-slate-100 group-hover:border-aureole-blue/30'}`}>
                                                    <ChevronDown size={14} className="transition-transform duration-500" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Smooth Height Reveal Container */}
                                    <div className={`grid transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${expandedJob === job.code ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <div className="p-8 lg:p-16 bg-gradient-to-br from-slate-50/80 to-white/80 backdrop-blur-sm border-t border-slate-100">
                                                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
                                                    {/* Description Column */}
                                                    <div className={`space-y-10 transition-all duration-700 delay-100 ${expandedJob === job.code ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-10 h-10 rounded-xl bg-aureole-cyan/10 flex items-center justify-center text-aureole-cyan">
                                                                <Zap size={18} />
                                                            </div>
                                                            <h4 className="text-[12px] font-black text-[#001529] uppercase tracking-[0.3em]">Job Description</h4>
                                                        </div>
                                                        <ul className="space-y-5">
                                                            {job.description.map((item, i) => (
                                                                <li key={i} className="flex gap-5 group/item">
                                                                    <div className="w-1 h-1 rounded-full bg-aureole-cyan mt-2.5 transition-transform duration-300 group-hover/item:scale-150"></div>
                                                                    <span className="text-[15px] font-medium text-slate-600 leading-relaxed tracking-tight">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Skills Column */}
                                                    <div className={`space-y-10 transition-all duration-700 delay-200 ${expandedJob === job.code ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-10 h-10 rounded-xl bg-aureole-blue/10 flex items-center justify-center text-aureole-blue">
                                                                <Target size={18} />
                                                            </div>
                                                            <h4 className="text-[12px] font-black text-[#001529] uppercase tracking-[0.3em]">Skills Required</h4>
                                                        </div>
                                                        <ul className="space-y-5">
                                                            {job.skills.map((skill, i) => (
                                                                <li key={i} className="flex items-center gap-5 p-4 bg-white/50 border border-slate-100 rounded-px hover:border-aureole-blue/20 transition-all duration-300">
                                                                    <div className="w-2 h-2 rounded-full bg-aureole-blue/30"></div>
                                                                    <span className="text-[15px] font-bold text-[#001529] tracking-tight">{skill}</span>
                                                                </li>
                                                            ))}
                                                        </ul>

                                                        <div className="mt-12 p-10 bg-white border border-slate-100 shadow-2xl relative overflow-hidden">
                                                            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                                            <h5 className="relative z-10 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Application Outreach</h5>
                                                            <a
                                                                href={`mailto:hr@aureolepharmatech.com?subject=Application for ${job.department} (${job.code})`}
                                                                className="relative z-10 flex items-center justify-between group/btn bg-[#001529] text-white px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-aureole-blue hover:shadow-xl hover:-translate-y-1"
                                                            >
                                                                Send Your Resume <Mail size={18} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Lighter Call to Action Box - Simplified */}
                    <div className="mt-24 p-12 lg:p-20 bg-white border border-slate-100 border-l-[6px] border-l-aureole-cyan shadow-xl relative overflow-hidden flex flex-col items-center text-center">
                        <div className="absolute right-0 top-0 opacity-[0.03] p-10 select-none pointer-events-none">
                            <Briefcase size={200} />
                        </div>

                        <div className="relative z-10 max-w-3xl">
                            <h3 className="text-4xl lg:text-6xl font-[950] font-heading text-[#001529] uppercase tracking-tighter mb-6 leading-none">
                                JOIN THE FAMILY.
                            </h3>
                            <p className="text-slate-500 text-lg lg:text-2xl font-medium leading-relaxed">
                                Join our team of experts. Send your resumes to <span className="text-aureole-cyan font-bold">hr@aureolepharmatech.com</span>.
                                <br className="hidden lg:block" />
                                Please mention the <span className="text-[#001529] font-black uppercase">JOB CODE</span> in the subject line for processing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
