import React from 'react';
import { Plus } from 'lucide-react';

const HomeFaq: React.FC = () => {
  const FAQ_DATA = [
    {
      question: "What is Aureole PharmaTech's engineering specialty?",
      answer: "Aureole PharmaTech is a premier pharmaceutical engineering manufacturer specializing in environmental stability chambers, walk-in chambers, cleanroom equipment, and modular laboratory furniture, backed by over 28 years of precision engineering experience."
    },
    {
      question: "What compliance standards does Aureole PharmaTech equipment meet?",
      answer: "Our systems are engineered to meet strict international standards, including USFDA and ICH guidelines, ISO 9001:2015 quality management, CE certifications, ZED Gold rating, and 21 CFR Part 11 electronic records regulations."
    },
    {
      question: "What temperature and humidity ranges do your stability chambers support?",
      answer: "Our stability chambers offer precise environmental control with temperature ranges of 20°C to 60°C and humidity ranges from 40% to 95% RH, ensuring absolute environmental equilibrium for long-term pharmaceutical studies."
    },
    {
      question: "Does Aureole PharmaTech serve international markets?",
      answer: "Yes. With 1,500+ successful installations across 15+ states and multiple international hubs, Aureole PharmaTech caters to domestic and global pharmaceutical manufacturing clients from our state-of-the-art facilities in Nashik."
    },
    {
      question: "How does your equipment support data integrity and audit compliance?",
      answer: "Aureole's control systems feature industrial PLC and SCADA integration, enabling compliant data logging, secure access controls, electronic signatures, audit trails, and automated email/SMS deviation alerts in compliance with 21 CFR Part 11."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-transparent border-t border-slate-100/50 relative overflow-hidden group/section">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-aureole-blue"></span>
              <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-blue">FAQ</h2>
            </div>
            <h3 className="text-4xl lg:text-6xl font-[950] text-slate-800 uppercase tracking-tighter leading-none">
              FREQUENTLY ASKED <span className="text-aureole-cyan">QUESTIONS.</span>
            </h3>
          </div>
          <p className="text-slate-500 font-medium text-sm max-w-sm text-right hidden md:block">
            Quick answers about stability testing compliance, ranges, and engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_DATA.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <summary
                className="w-full flex items-center justify-between p-7 text-left hover:bg-slate-50 transition-colors cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden"
              >
                <span className="text-base font-bold font-heading text-aureole-slate tracking-tight pr-4">
                  {faq.question}
                </span>
                <span className="p-1 border border-slate-100 text-aureole-blue group-open:bg-aureole-cyan group-open:text-white group-open:border-aureole-cyan transition-all shrink-0">
                  <Plus className="w-4 h-4 transition-transform duration-300 group-open:rotate-45" />
                </span>
              </summary>
              <div className="p-7 pt-0 border-t border-slate-50 bg-slate-50/20">
                <p className="text-base font-sans font-medium text-slate-500 tracking-tight leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeFaq;
