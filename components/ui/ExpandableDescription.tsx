
import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';

interface ExpandableDescriptionProps {
    text: string;
}

const ExpandableDescription: React.FC<ExpandableDescriptionProps> = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLongText = text.length > 500;

    return (
        <div className="relative">
            <div className={`transition-all duration-500 overflow-hidden relative ${!isExpanded && isLongText ? 'max-h-[150px]' : 'max-h-[2000px]'}`}>
                <p className="text-[13px] font-medium text-slate-500 leading-relaxed text-left tracking-tight whitespace-pre-line">
                    {text}
                </p>
                {!isExpanded && isLongText && (
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
                )}
            </div>
            {isLongText && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-4 flex items-center gap-2 text-[10px] font-black text-aureole-blue hover:text-aureole-cyan transition-colors uppercase tracking-[0.2em]"
                >
                    {isExpanded ? (
                        <>Show Less <X size={12} /></>
                    ) : (
                        <>Read Full Overview <ChevronRight size={12} className="rotate-90" /></>
                    )}
                </button>
            )}
        </div>
    );
};

export default ExpandableDescription;
