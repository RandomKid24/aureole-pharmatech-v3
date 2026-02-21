
import React from 'react';

const CopyrightBar: React.FC = () => {
    return (
        <div className="bg-[#000a12] border-t border-white/5 py-4">
            <div className="container mx-auto px-6 lg:px-16 text-center">
                <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-slate-500/80 leading-relaxed">
                    Copyright 2026 <span className="text-slate-400">Aureole Pharmatech Pvt Ltd</span> All Rights Reserved. 
                    <span className="mx-4 opacity-10">|</span>
                    <a 
                        href="https://www.beforth.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 hover:text-white transition-all"
                    >
                        <span className="text-slate-500 group-hover:text-slate-400">Powered by</span>
                        <span className="text-aureole-cyan font-black tracking-widest group-hover:scale-105 transition-transform">BeForth⚡</span>
                    </a>
                </p>
            </div>
        </div>
    );
};

export default CopyrightBar;
