
import React from 'react';
import { 
  FlaskConical, 
  Dna, 
  Microscope, 
  ShieldCheck, 
  Thermometer, 
  Building2 
} from 'lucide-react';

const industries = [
  {
    name: "PHARMACEUTICAL MANUFACTURING",
    icon: FlaskConical,
    description: "Complete technical support for stability chambers in Large-scale GMP production facilities."
  },
  {
    name: "BIOTECHNOLOGY COMPANIES",
    icon: Dna,
    description: "Specialized services for sensitive biological sample storage and environmental control."
  },
  {
    name: "CRO & R&D LABORATORIES",
    icon: Microscope,
    description: "Precision calibration and validation for research-driven pharmaceutical laboratories."
  },
  {
    name: "VACCINE & LIFE SCIENCE FACILITIES",
    icon: ShieldCheck,
    description: "Maintaining critical temperature and humidity profiles for vaccine stability and life sciences."
  },
  {
    name: "FOOD & NUTRACEUTICAL INDUSTRIES",
    icon: Thermometer,
    description: "Supporting environmental testing chambers for food safety and nutraceutical shelf-life studies."
  },
  {
    name: "HOSPITALS & RESEARCH INSTITUTES",
    icon: Building2,
    description: "Reliable maintenance for medical-grade cold rooms and specialized storage equipment."
  }
];

const IndustriesServed: React.FC = () => {
    return (
        <section className="py-24 bg-white border-b border-slate-100 bg-[url('/wavebg.webp')] bg-cover bg-fixed">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 text-left">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[2px] bg-aureole-cyan"></span>
                            <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-aureole-cyan">Industrial Reach</h6>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black font-heading tracking-tighter text-aureole-slate uppercase leading-[0.85]">
                            INDUSTRIES <span className="text-aureole-blue">WE SERVE</span>
                        </h2>
                    </div>
                    <p className="text-sm font-sans font-medium text-slate-500 max-w-xs leading-relaxed">
                        Providing specialized technical solutions across diverse sectors committed to regulatory excellence and data integrity.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-100 shadow-sm">
                    {industries.map((industry, index) => (
                        <div 
                            key={index} 
                            className={`p-10 bg-white hover:bg-slate-50 transition-all duration-300 group border-b border-r border-slate-100 last:border-b-0 lg:[&:nth-child(3)]:border-r-0 lg:[&:nth-child(6)]:border-r-0 relative`}
                        >
                            {/* Accent line on hover */}
                            <div className="absolute top-0 left-0 w-[4px] h-0 bg-aureole-cyan group-hover:h-full transition-all duration-300"></div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-aureole-cyan/30 transition-all">
                                    <industry.icon className="w-6 h-6 text-slate-400 group-hover:text-aureole-cyan transition-colors" />
                                </div>
                                <h3 className="text-sm font-black font-heading text-aureole-slate uppercase tracking-tight group-hover:text-aureole-blue transition-colors">
                                    {industry.name}
                                </h3>
                            </div>
                            
                            <p className="text-xs font-sans font-medium text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesServed;
