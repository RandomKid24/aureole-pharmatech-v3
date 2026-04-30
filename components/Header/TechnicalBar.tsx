
import React from 'react';
import { Phone, Mail, Linkedin, Instagram } from 'lucide-react';

interface TechnicalBarProps {
    isScrolled: boolean;
}

const TechnicalBar: React.FC<TechnicalBarProps> = ({ isScrolled }) => {
    return (
        <div className={`hidden lg:flex bg-brand-gradient text-white py-2.5 transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
            <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
                <div className="flex gap-10 items-center">
                    <a href="tel:+918600522240" className="flex items-center gap-3 hover:text-aureole-accent transition-colors">
                        <Phone className="w-3.5 h-3.5" /> +91 86005 22240
                    </a>
                    <div className="w-[1px] h-3 bg-white/20"></div>
                    <a href="mailto:enquiry@aureolepharmatech.com" className="flex items-center gap-3 hover:text-aureole-accent transition-colors">
                        <Mail className="w-3.5 h-3.5" /> enquiry@aureolepharmatech.com
                    </a>
                </div>
                <div className="flex items-center gap-8">
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/company/aureole-pharmatech/" target="_blank" rel="noopener noreferrer" className="hover:text-aureole-accent transition-colors">
                            <Linkedin className="w-3.5 h-3.5" />
                        </a>
                        <a href="https://www.instagram.com/aureole_pharmatech" target="_blank" rel="noopener noreferrer" className="hover:text-aureole-accent transition-colors">
                            <Instagram className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnicalBar;
