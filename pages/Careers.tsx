
import React, { useEffect, useMemo, useState } from 'react';
import SEO from '../components/SEO';
import CareersHero from './Careers/sections/CareersHero';
import JobBoard, { JobListing } from './Careers/sections/JobBoard';

interface RecruitmentApiJob {
    id: number;
    title?: string;
    designation?: string;
    description?: string;
    requirements?: string;
    skills_list?: string[];
    skills_required?: string;
    responsibilities?: string;
    benefits?: string;
    experience_level_display?: string;
    min_experience?: number;
    max_experience?: number;
    department?: string;
}

interface RecruitmentApiListResponse {
    jobs: RecruitmentApiJob[];
}

const API_BASE = (import.meta.env.VITE_RECRUITMENT_API_BASE || 'https://hrms.encryptedbar.com').replace(/\/$/, '');

const textToList = (value?: string) =>
    (value || '')
        .split(/\n|•|-/)
        .map((item) => item.trim())
        .filter(Boolean);

const Careers: React.FC = () => {
    const [listings, setListings] = useState<JobListing[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const jobsApiUrl = useMemo(() => `${API_BASE}/api/jobs/`, []);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchJobs = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(jobsApiUrl);
                if (!response.ok) {
                    throw new Error(`Failed to load jobs (${response.status})`);
                }
                const data = (await response.json()) as RecruitmentApiListResponse;
                const normalized = (data.jobs || []).map((job) => {
                    const minExp = typeof job.min_experience === 'number' ? job.min_experience : null;
                    const maxExp = typeof job.max_experience === 'number' ? job.max_experience : null;
                    const experience = minExp !== null && maxExp !== null
                        ? `${minExp} to ${maxExp} years`
                        : minExp !== null
                            ? `${minExp}+ years`
                            : 'As per role';

                    return {
                        id: job.id,
                        code: `JOB_${job.id}`,
                        status: 'Open',
                        level: job.experience_level_display || 'Open',
                        experience,
                        vacancies: 'Open',
                        department: job.title || job.designation || job.department || `Job ${job.id}`,
                        requirementDetails: (job.requirements || '').slice(0, 160) || 'Refer full job details.',
                        description: job.description ? [] : textToList(job.description).slice(0, 12),
                        skills: (job.skills_list && job.skills_list.length)
                            ? job.skills_list
                            : job.skills_required
                                ? job.skills_required.split(',').map((s) => s.trim()).filter(Boolean)
                                : (job.requirements ? [] : textToList(job.requirements).slice(0, 8)),
                        descriptionHtml: job.description || '',
                        requirementsHtml: job.requirements || '',
                        responsibilitiesHtml: job.responsibilities || '',
                        benefitsHtml: job.benefits || ''
                    } as JobListing;
                });
                setListings(normalized);
            } catch (err) {
                const message = err instanceof Error ? err.message : 'Failed to load jobs';
                setError(message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const handleApply = async (jobId: number, formData: FormData) => {
        const educationEntries = formData.get('education_entries')?.toString().trim();
        if (educationEntries) {
            JSON.parse(educationEntries);
        }

        const certificationEntries = formData.get('certification_entries')?.toString().trim();
        if (certificationEntries) {
            JSON.parse(certificationEntries);
        }

        const response = await fetch(`${API_BASE}/api/jobs/${jobId}/apply/`, {
            method: 'POST',
            body: formData
        });

        const responseData = await response.json().catch(() => ({}));
        if (!response.ok) {
            const message =
                responseData?.error ||
                responseData?.detail ||
                `Application failed (${response.status})`;
            throw new Error(message);
        }

        return responseData?.message || 'Application submitted successfully.';
    };

    return (
        <div className="pt-24 min-h-screen bg-transparent">
            <SEO 
                title="Careers at Aureole Pharma Tech Nashik, Maharashtra, India"
                description="Join Aureole Pharma Tech in Nashik and be part of a dynamic team driving innovation in the pharmaceutical industry. We offer rewarding career opportunities, professional growth, and a collaborative work environment for individuals passionate about quality, research, and excellence."
                canonical="https://www.aureolepharmatech.com/careers/"
            />
            <CareersHero />
            <JobBoard
                listings={listings}
                onApply={handleApply}
                isLoading={isLoading}
                error={error}
            />

        </div>
    );
};

export default Careers;
