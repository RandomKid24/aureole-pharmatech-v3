
import React from 'react';
import { Briefcase } from 'lucide-react';

const JoinFamilyCTA: React.FC = () => {
    return (
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
    );
};

export default JoinFamilyCTA;
