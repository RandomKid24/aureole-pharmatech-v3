
import React from 'react';

const CopyrightBar: React.FC = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className="bg-[#000a12] border-t border-white/5 py-2 sm:py-3">
            <div className="container mx-auto px-6 lg:px-16 text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                    <p className="flex items-center gap-1.5">
                        <span>© {currentYear}</span>
                        <span className="text-slate-400">Aureole Pharmatech Pvt Ltd.</span>
                        <span className="hidden sm:inline opacity-20">|</span>
                        <span>All Rights Reserved.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CopyrightBar;
