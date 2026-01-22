
import React from 'react';
import { Phone, Mail, Linkedin, Facebook, Twitter } from 'lucide-react';

interface TechnicalBarProps {
    isScrolled: boolean;
}

const TechnicalBar: React.FC<TechnicalBarProps> = ({ isScrolled }) => {
    return (
        <div className={`hidden lg:flex bg-aureole-slate text-white py-2.5 transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
            <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
                <div className="flex gap-10 items-center">
                    <a href="tel:+918600522240" className="flex items-center gap-3 hover:text-aureole-cyan transition-colors">
                        <Phone className="w-3.5 h-3.5" /> +91 86005 22240
                    </a>
                    <div className="w-[1px] h-3 bg-blue-800/30"></div>
                    <a href="mailto:enquiry@aureolepharmatech.com" className="flex items-center gap-3 hover:text-aureole-cyan transition-colors">
                        <Mail className="w-3.5 h-3.5" /> enquiry@aureolepharmatech.com
                    </a>
                </div>
                <div className="flex items-center gap-8">
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-aureole-cyan transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
                        <a href="#" className="hover:text-aureole-cyan transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
                        <a href="#" className="hover:text-aureole-cyan transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnicalBar;
