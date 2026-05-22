
import React, { useState } from 'react';
import { ChevronDown, Zap, Target, Plus, Trash2 } from 'lucide-react';

export interface JobListing {
    id: number;
    code: string;
    status: string;
    level: string;
    experience: string;
    vacancies: string;
    department: string;
    requirementDetails: string;
    description: string[];
    skills: string[];
    descriptionHtml?: string;
    requirementsHtml?: string;
    responsibilitiesHtml?: string;
    benefitsHtml?: string;
}

interface JobBoardProps {
    listings: JobListing[];
    onApply: (jobId: number, formData: FormData) => Promise<string>;
    isLoading?: boolean;
    error?: string | null;
}

const JobBoard: React.FC<JobBoardProps> = ({ listings, onApply, isLoading = false, error = null }) => {
    const [expandedJob, setExpandedJob] = useState<string | null>(null);
    const [submittingFor, setSubmittingFor] = useState<number | null>(null);
    const [applyStatus, setApplyStatus] = useState<Record<number, { type: 'success' | 'error'; message: string }>>({});
    const [educationRows, setEducationRows] = useState<Record<number, number>>({});
    const [certificationRows, setCertificationRows] = useState<Record<number, number>>({});
    const [resumeFileNames, setResumeFileNames] = useState<Record<number, string>>({});

    const toggleJob = (code: string) => {
        setExpandedJob(expandedJob === code ? null : code);
    };

    const getRowCount = (map: Record<number, number>, jobId: number) => map[jobId] || 1;

    const addEducationRow = (jobId: number) => {
        setEducationRows((prev) => ({ ...prev, [jobId]: (prev[jobId] || 1) + 1 }));
    };

    const removeEducationRow = (jobId: number) => {
        setEducationRows((prev) => ({ ...prev, [jobId]: Math.max(1, (prev[jobId] || 1) - 1) }));
    };

    const addCertificationRow = (jobId: number) => {
        setCertificationRows((prev) => ({ ...prev, [jobId]: (prev[jobId] || 1) + 1 }));
    };

    const removeCertificationRow = (jobId: number) => {
        setCertificationRows((prev) => ({ ...prev, [jobId]: Math.max(1, (prev[jobId] || 1) - 1) }));
    };

    const handleApply = async (event: React.FormEvent<HTMLFormElement>, jobId: number) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        const skills = (formData.get('skills')?.toString() || '')
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean)
            .join(',');
        if (skills) {
            formData.set('skills', skills);
        } else {
            formData.delete('skills');
        }

        const educationCount = parseInt(formData.get('education_count')?.toString() || '1', 10);
        const educationEntries: Array<{
            institution: string;
            qualification_type: string;
            field_of_study: string;
            percentage: string;
            year: string;
        }> = [];
        for (let i = 0; i < educationCount; i += 1) {
            const entry = {
                institution: formData.get(`education_institution_${i}`)?.toString().trim() || '',
                qualification_type: formData.get(`education_qualification_type_${i}`)?.toString().trim() || '',
                field_of_study: formData.get(`education_field_of_study_${i}`)?.toString().trim() || '',
                percentage: formData.get(`education_percentage_${i}`)?.toString().trim() || '',
                year: formData.get(`education_year_${i}`)?.toString().trim() || ''
            };
            if (Object.values(entry).some(Boolean)) {
                educationEntries.push(entry);
            }
            formData.delete(`education_institution_${i}`);
            formData.delete(`education_qualification_type_${i}`);
            formData.delete(`education_field_of_study_${i}`);
            formData.delete(`education_percentage_${i}`);
            formData.delete(`education_year_${i}`);
        }
        formData.delete('education_count');
        if (educationEntries.length) {
            formData.set('education_entries', JSON.stringify(educationEntries));
        } else {
            formData.delete('education_entries');
        }

        const certificationCount = parseInt(formData.get('certification_count')?.toString() || '1', 10);
        const certificationEntries: Array<{ name: string; issuer: string; year: string }> = [];
        for (let i = 0; i < certificationCount; i += 1) {
            const entry = {
                name: formData.get(`certification_name_${i}`)?.toString().trim() || '',
                issuer: formData.get(`certification_issuer_${i}`)?.toString().trim() || '',
                year: formData.get(`certification_year_${i}`)?.toString().trim() || ''
            };
            if (Object.values(entry).some(Boolean)) {
                certificationEntries.push(entry);
            }
            formData.delete(`certification_name_${i}`);
            formData.delete(`certification_issuer_${i}`);
            formData.delete(`certification_year_${i}`);
        }
        formData.delete('certification_count');
        if (certificationEntries.length) {
            formData.set('certification_entries', JSON.stringify(certificationEntries));
        } else {
            formData.delete('certification_entries');
        }

        setSubmittingFor(jobId);
        setApplyStatus((prev) => {
            const next = { ...prev };
            delete next[jobId];
            return next;
        });
        try {
            const message = await onApply(jobId, formData);
            setApplyStatus((prev) => ({ ...prev, [jobId]: { type: 'success', message } }));
            form.reset();
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Application failed. Please try again.';
            setApplyStatus((prev) => ({ ...prev, [jobId]: { type: 'error', message } }));
        } finally {
            setSubmittingFor(null);
        }
    };

    const richTextClassName =
        "text-slate-700 leading-relaxed " +
        "[&_p]:mb-3 [&_p:last-child]:mb-0 " +
        "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 " +
        "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 " +
        "[&_li]:mb-1 " +
        "[&_strong]:font-bold [&_strong]:text-[#001529] " +
        "[&_h1]:text-2xl [&_h1]:font-black [&_h1]:text-[#001529] [&_h1]:mb-3 " +
        "[&_h2]:text-xl [&_h2]:font-black [&_h2]:text-[#001529] [&_h2]:mb-3 " +
        "[&_h3]:text-lg [&_h3]:font-black [&_h3]:text-[#001529] [&_h3]:mb-2 " +
        "[&_h4]:text-base [&_h4]:font-black [&_h4]:text-[#001529] [&_h4]:mb-2 " +
        "[&_hr]:my-4 [&_hr]:border-slate-200";

    return (
        <section className="py-24 bg-transparent">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="flex flex-col gap-10">
                    {isLoading && (
                        <div className="p-6 border border-slate-200 bg-white text-sm font-semibold text-slate-600">
                            Loading open positions...
                        </div>
                    )}
                    {error && (
                        <div className="p-6 border border-red-200 bg-red-50 text-sm font-semibold text-red-700">
                            {error}
                        </div>
                    )}

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
                        {!isLoading && listings.length === 0 && !error && (
                            <div className="p-8 border border-slate-200 bg-white text-sm font-semibold text-slate-600">
                                No open positions right now.
                            </div>
                        )}
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
                                                {expandedJob === job.code ? 'Close' : 'Read more'}
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
                                                    {job.descriptionHtml && (
                                                        <div
                                                            className={richTextClassName}
                                                            dangerouslySetInnerHTML={{ __html: job.descriptionHtml }}
                                                        />
                                                    )}
                                                    {!job.descriptionHtml && (
                                                        <ul className="space-y-5">
                                                            {job.description.map((item, i) => (
                                                                <li key={i} className="flex gap-5 group/item">
                                                                    <div className="w-1 h-1 rounded-full bg-aureole-cyan mt-2.5 transition-transform duration-300 group-hover/item:scale-150"></div>
                                                                    <span className="text-[15px] font-medium text-slate-600 leading-relaxed tracking-tight">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                    {job.requirementsHtml && (
                                                        <div className="space-y-3">
                                                            <h5 className="text-[11px] font-black text-[#001529] uppercase tracking-[0.25em]">Requirements</h5>
                                                            <div
                                                                className={richTextClassName}
                                                                dangerouslySetInnerHTML={{ __html: job.requirementsHtml }}
                                                            />
                                                        </div>
                                                    )}
                                                </div>

                                                <div className={`space-y-10 transition-all duration-700 delay-200 ${expandedJob === job.code ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-xl bg-aureole-blue/10 flex items-center justify-center text-aureole-blue">
                                                            <Target size={18} />
                                                        </div>
                                                        <h4 className="text-[12px] font-black text-[#001529] uppercase tracking-[0.3em]">Skills Required</h4>
                                                    </div>
                                                    {job.skills.length > 0 && (
                                                        <ul className="flex flex-wrap gap-2">
                                                            {job.skills.map((skill, i) => (
                                                                <li
                                                                    key={i}
                                                                    className="px-3 py-1.5 text-[13px] font-semibold text-[#001529] bg-slate-100 border border-slate-200 rounded-full"
                                                                >
                                                                    {skill}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                    {job.responsibilitiesHtml && (
                                                        <div className="space-y-3">
                                                            <h5 className="text-[11px] font-black text-[#001529] uppercase tracking-[0.25em]">Responsibilities</h5>
                                                            <div
                                                                className={richTextClassName}
                                                                dangerouslySetInnerHTML={{ __html: job.responsibilitiesHtml }}
                                                            />
                                                        </div>
                                                    )}
                                                    {job.benefitsHtml && (
                                                        <div className="space-y-3">
                                                            <h5 className="text-[11px] font-black text-[#001529] uppercase tracking-[0.25em]">Benefits</h5>
                                                            <div
                                                                className={richTextClassName}
                                                                dangerouslySetInnerHTML={{ __html: job.benefitsHtml }}
                                                            />
                                                        </div>
                                                    )}


                                                </div>
                                            </div>

                                            <div className={`mt-12 transition-all duration-700 delay-300 ${expandedJob === job.code ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                                <h4 className="text-[12px] font-black text-[#001529] uppercase tracking-[0.3em] mb-6">Apply For This Role</h4>
                                                <form onSubmit={(event) => handleApply(event, job.id)} className="grid lg:grid-cols-3 gap-4">
                                                    <input type="hidden" name="education_count" value={getRowCount(educationRows, job.id)} />
                                                    <input type="hidden" name="certification_count" value={getRowCount(certificationRows, job.id)} />
                                                    <input name="first_name" required placeholder="First Name *" className="border border-slate-200 px-4 py-3 text-sm" />
                                                    <input name="middle_name" placeholder="Middle Name" className="border border-slate-200 px-4 py-3 text-sm" />
                                                    <input name="last_name" required placeholder="Last Name *" className="border border-slate-200 px-4 py-3 text-sm" />
                                                    <input name="email" type="email" required placeholder="Email *" className="border border-slate-200 px-4 py-3 text-sm" />
                                                    <input name="phone" placeholder="Phone" className="border border-slate-200 px-4 py-3 text-sm" />
                                                    <input name="address" placeholder="Address" className="border border-slate-200 px-4 py-3 text-sm" />
                                                    <input name="current_company" placeholder="Current Company" className="border border-slate-200 px-4 py-3 text-sm" />
                                                    <input name="current_position" placeholder="Current Position" className="border border-slate-200 px-4 py-3 text-sm" />
                                                    <input name="total_experience" type="number" min="0" placeholder="Total Experience (years)" className="border border-slate-200 px-4 py-3 text-sm" />
                                                    <input name="notice_period" type="number" min="0" placeholder="Notice Period (days)" className="border border-slate-200 px-4 py-3 text-sm" />
                                                    <input name="current_salary" type="number" min="0" step="0.01" placeholder="Current Salary" className="border border-slate-200 px-4 py-3 text-sm" />
                                                    <input name="expected_salary" type="number" min="0" step="0.01" placeholder="Expected Salary" className="border border-slate-200 px-4 py-3 text-sm" />
                                                    <input name="linkedin_profile" placeholder="LinkedIn Profile URL" className="border border-slate-200 px-4 py-3 text-sm lg:col-span-2" />
                                                    <input name="portfolio_website" placeholder="Portfolio Website URL" className="border border-slate-200 px-4 py-3 text-sm" />
                                                    <input name="skills" placeholder="Skills (comma separated)" className="border border-slate-200 px-4 py-3 text-sm lg:col-span-3" />
                                                    <textarea name="education" placeholder="Education" className="border border-slate-200 px-4 py-3 text-sm lg:col-span-3 min-h-24" />
                                                    <textarea name="certifications" placeholder="Certifications" className="border border-slate-200 px-4 py-3 text-sm lg:col-span-3 min-h-24" />
                                                    <div className="lg:col-span-3 flex items-center justify-between">
                                                        <label className="text-xs font-black text-slate-500 uppercase tracking-wider">Education Entries</label>
                                                        <div className="flex gap-2">
                                                            <button type="button" onClick={() => addEducationRow(job.id)} className="inline-flex items-center gap-1 px-3 py-2 border border-slate-300 text-xs font-bold">
                                                                <Plus size={14} /> Add
                                                            </button>
                                                            <button type="button" onClick={() => removeEducationRow(job.id)} className="inline-flex items-center gap-1 px-3 py-2 border border-slate-300 text-xs font-bold">
                                                                <Trash2 size={14} /> Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {Array.from({ length: getRowCount(educationRows, job.id) }).map((_, index) => (
                                                        <div key={`edu-${job.id}-${index}`} className="lg:col-span-3 grid lg:grid-cols-5 gap-4">
                                                            <input name={`education_institution_${index}`} placeholder="Education Institution" className="border border-slate-200 px-4 py-3 text-sm lg:col-span-2" />
                                                            <input name={`education_qualification_type_${index}`} placeholder="Qualification Type (degree/diploma/etc)" className="border border-slate-200 px-4 py-3 text-sm" />
                                                            <input name={`education_field_of_study_${index}`} placeholder="Field of Study" className="border border-slate-200 px-4 py-3 text-sm" />
                                                            <input name={`education_percentage_${index}`} placeholder="Percentage / CGPA" className="border border-slate-200 px-4 py-3 text-sm" />
                                                            <input name={`education_year_${index}`} placeholder="Education Year" className="border border-slate-200 px-4 py-3 text-sm" />
                                                        </div>
                                                    ))}
                                                    <div className="lg:col-span-3 flex items-center justify-between">
                                                        <label className="text-xs font-black text-slate-500 uppercase tracking-wider">Certification Entries</label>
                                                        <div className="flex gap-2">
                                                            <button type="button" onClick={() => addCertificationRow(job.id)} className="inline-flex items-center gap-1 px-3 py-2 border border-slate-300 text-xs font-bold">
                                                                <Plus size={14} /> Add
                                                            </button>
                                                            <button type="button" onClick={() => removeCertificationRow(job.id)} className="inline-flex items-center gap-1 px-3 py-2 border border-slate-300 text-xs font-bold">
                                                                <Trash2 size={14} /> Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {Array.from({ length: getRowCount(certificationRows, job.id) }).map((_, index) => (
                                                        <div key={`cert-${job.id}-${index}`} className="lg:col-span-3 grid lg:grid-cols-3 gap-4">
                                                            <input name={`certification_name_${index}`} placeholder="Certification Name" className="border border-slate-200 px-4 py-3 text-sm" />
                                                            <input name={`certification_issuer_${index}`} placeholder="Certification Issuer" className="border border-slate-200 px-4 py-3 text-sm" />
                                                            <input name={`certification_year_${index}`} placeholder="Certification Year" className="border border-slate-200 px-4 py-3 text-sm" />
                                                        </div>
                                                    ))}
                                                    <textarea name="cover_letter" placeholder="Cover Letter" className="border border-slate-200 px-4 py-3 text-sm lg:col-span-3 min-h-32" />
                                                    <div className="lg:col-span-3 flex flex-col gap-2">
                                                        <label className="text-xs font-black text-slate-500 uppercase tracking-wider">Resume</label>
                                                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                                            <label
                                                                htmlFor={`resume-${job.id}`}
                                                                className="inline-flex items-center justify-center px-4 py-2.5 bg-[#001529] text-white text-xs font-black uppercase tracking-[0.16em] cursor-pointer hover:bg-aureole-blue transition-colors"
                                                            >
                                                                Upload Resume
                                                            </label>
                                                            <input
                                                                id={`resume-${job.id}`}
                                                                name="resume"
                                                                type="file"
                                                                accept=".pdf,.doc,.docx"
                                                                className="sr-only"
                                                                onChange={(event) =>
                                                                    setResumeFileNames((prev) => ({
                                                                        ...prev,
                                                                        [job.id]: event.target.files?.[0]?.name || ''
                                                                    }))
                                                                }
                                                            />
                                                            <span className="text-sm text-slate-600">
                                                                {resumeFileNames[job.id] || 'No file selected'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="lg:col-span-3">
                                                        <button
                                                            type="submit"
                                                            disabled={submittingFor === job.id}
                                                            className="px-6 py-3 bg-[#001529] text-white text-xs font-black uppercase tracking-[0.2em] disabled:opacity-60"
                                                        >
                                                            {submittingFor === job.id ? 'Submitting...' : 'Submit Application'}
                                                        </button>
                                                    </div>
                                                    {applyStatus[job.id] && (
                                                        <div className={`lg:col-span-3 text-sm font-semibold ${applyStatus[job.id].type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                                                            {applyStatus[job.id].message}
                                                        </div>
                                                    )}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* How to Apply Section */}
                    <div className="mt-20 p-8 lg:p-12 bg-white/50 border border-slate-200 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-aureole-blue/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl"></div>
                        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                            <div>
                                <h3 className="text-2xl font-[950] text-[#001529] uppercase tracking-tighter mb-4">How to Apply</h3>
                                <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
                                    Interested candidates can reach out to us directly through the following channels. Please mention the Job Code in your application.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 w-full lg:w-auto">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</span>
                                    <a href="mailto:careers@aureolepharmatech.com" className="text-sm font-bold text-aureole-blue hover:text-[#001529] transition-colors">careers@aureolepharmatech.com</a>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">HR Contact</span>
                                    <a href="tel:+918600522230" className="text-sm font-bold text-aureole-blue hover:text-[#001529] transition-colors bg-trasnparent">+91 86005 22230</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobBoard;
