
import React from 'react';

interface SectionHeadingProps {
    label: string;
    title: string;
    accentTitle?: string;
    description?: string;
    centered?: boolean;
    className?: string;
    dark?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
    label,
    title,
    accentTitle,
    description,
    centered = false,
    className = "",
    dark = false
}) => {
    return (
        <div className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start'} ${className}`}>
            <div className={`flex items-center gap-4 mb-4 ${centered ? 'justify-center' : ''}`}>
                <span className={`w-12 h-[1px] ${dark ? 'bg-white/30' : 'bg-aureole-cyan'}`}></span>
                <h2 className={`text-[11px] font-black font-heading uppercase tracking-[0.4em] ${dark ? 'text-white/60' : 'text-aureole-cyan'}`}>
                    {label}
                </h2>
                {centered && <span className={`w-12 h-[1px] ${dark ? 'bg-white/30' : 'bg-aureole-cyan'}`}></span>}
            </div>

            <h3 className={`text-4xl lg:text-5xl font-[950] font-heading ${dark ? 'text-white' : 'text-[#001529]'} uppercase tracking-tighter leading-none mb-6`}>
                {title} {accentTitle && <span className="text-aureole-blue">{accentTitle}.</span>}
            </h3>

            {description && (
                <p className={`text-[13px] font-medium leading-relaxed max-w-sm ${centered ? 'mx-auto' : ''} ${dark ? 'text-white/60' : 'text-slate-500'}`}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
