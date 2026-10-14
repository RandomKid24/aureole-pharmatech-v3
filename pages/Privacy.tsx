import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Draft based on what the site actually does (enquiry/career forms, GA4, chat widget).
// Owner/legal review needed for retention periods and any extra processors.
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section className="mt-10">
        <h2 className="text-2xl font-black font-heading tracking-tight text-aureole-slate mb-3">{title}</h2>
        <div className="space-y-3 text-slate-600 leading-relaxed">{children}</div>
    </section>
);

const Privacy: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="pt-28 lg:pt-36 pb-20 bg-transparent">
            <SEO />
            <div className="container mx-auto px-6 lg:px-24 max-w-4xl">
                <h1 className="text-4xl lg:text-5xl font-black font-heading tracking-tighter text-aureole-slate">Privacy Policy</h1>
                <p className="mt-3 text-sm text-slate-500">Last updated: 14 October 2026</p>
                <p className="mt-6 text-slate-600 leading-relaxed">
                    This policy explains how Aureole Pharma Pvt. Ltd. (&quot;Aureole Pharma Tech&quot;, &quot;we&quot;) handles personal information collected through www.aureolepharmatech.com.
                </p>

                <Section title="What we collect">
                    <p><strong>Enquiry forms:</strong> your name, company name, location, email address, phone number and the message you write.</p>
                    <p><strong>Careers applications:</strong> the details and documents you submit with an application.</p>
                    <p><strong>Usage data:</strong> we use Google Analytics to see which pages are visited. It uses cookies or similar identifiers and records technical data such as pages viewed, device type and approximate location.</p>
                    <p><strong>Chat widget:</strong> a third-party chat widget is loaded on the site. Anything you type into it is handled by that provider and by us.</p>
                </Section>

                <Section title="Why we use it">
                    <ul className="list-disc pl-6 space-y-1">
                        <li>To reply to your enquiry or quotation request and to follow up on products and service.</li>
                        <li>To review and respond to job applications.</li>
                        <li>To understand how the website is used and improve it.</li>
                        <li>To meet legal or regulatory obligations.</li>
                    </ul>
                </Section>

                <Section title="Who handles it">
                    <p>Form submissions are sent to our enquiry and careers management system. Service providers that host the website, run analytics or provide the chat widget may process data on our behalf. We may disclose information if the law requires it.</p>
                </Section>

                <Section title="How long we keep it">
                    <p>We keep personal information only as long as needed for the purposes above or as the law requires, then delete or anonymise it.</p>
                </Section>

                <Section title="Your choices">
                    <p>You can ask us to tell you what we hold about you, correct it, or delete it. You can also block cookies in your browser settings or opt out of Google Analytics using Google&apos;s browser add-on. We handle personal data in line with applicable Indian law, including the Digital Personal Data Protection Act, 2023.</p>
                </Section>

                <Section title="Contact us">
                    <p>
                        Email <a className="text-aureole-blue font-semibold hover:underline" href="mailto:enquiry@aureolepharmatech.com">enquiry@aureolepharmatech.com</a> or write to
                        Aureole Pharma Pvt. Ltd., Office No. 6004, Satyanarayan Mall, Near City Centre Mall, Lawate Nagar, Nashik, Maharashtra 422002, India.
                        See also our <Link to="/about" className="text-aureole-blue font-semibold hover:underline">company details</Link>.
                    </p>
                </Section>
            </div>
        </div>
    );
};

export default Privacy;
