
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
                    
                    <a 
                        href="https://www.beforth.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 hover:text-white transition-all h-8"
                    >
                        <span className="text-slate-500 group-hover:text-slate-400">Forged by</span>
                        <span className="font-bebas text-[1.2rem] uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.6)] hover:[-webkit-text-stroke:1px_#e8c14a] transition-all cursor-pointer tracking-[0.05em] pt-0.5">BEFORTH</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CopyrightBar;
