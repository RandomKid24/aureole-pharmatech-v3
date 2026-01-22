
import React, { useState } from 'react';
import { ChevronDown, Zap, Target, Mail } from 'lucide-react';

interface JobListing {
    code: string;
    status: string;
    level: string;
    experience: string;
    vacancies: string;
    department: string;
    requirementDetails: string;
    description: string[];
    skills: string[];
}

interface JobBoardProps {
    listings: JobListing[];
}

const JobBoard: React.FC<JobBoardProps> = ({ listings }) => {
    const [expandedJob, setExpandedJob] = useState<string | null>(null);

    const toggleJob = (code: string) => {
        setExpandedJob(expandedJob === code ? null : code);
    };

    return (
        <section className="py-24 bg-aureole-soft">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="flex flex-col gap-10">
                    {/* Table Header */}
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

                                <div className={`grid transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${expandedJob === job.code ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="p-8 lg:p-16 bg-gradient-to-br from-slate-50/80 to-white/80 backdrop-blur-sm border-t border-slate-100">
                                            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
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
            </div>
        </section>
    );
};

export default JobBoard;
