
import React from 'react';
import { IdCard } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const OperationalTeam: React.FC = () => {
    const regionalTeams = [
        { name: "Mr Rohan Gujrathi", role: "Regional Sales Head - West (GJ)" },
        { name: "Mr Vikrant Deshpande", role: "Regional Sales Head - North" },
        { name: "Mr Dnyaneshwar Gaikwad", role: "Regional Sales Head - South" },
        { name: "Mr. Samir Ekhande", role: "Logistics and Supply Chain Manager" },
        { name: "Mr Sagar Ranmale", role: "Manager - Design & Product Engineering" },
        { name: "Mr Vijay Mahajan", role: "Manager - Production Planning & Manufacturing" },
        { name: "Mrs Anita Kanse", role: "Assistant Manager - Accounts" },
        { name: "Mr. Roshan Patil", role: "Regional Head - CS&S - South" },
        { name: "Mr. Rahul Khairnar", role: "Assistant Manger - Technical support - CS&S" },
        { name: "Mr Ramesh Mali", role: "Assistant Manager - Purchase and Store" },
        { name: "Mr. Yash Gujarathi", role: "Regional Sales Head - West (GJ)" },
        { name: "Mr. Vikrant Shewale", role: "Head Technical Services and Quality Assurance" },
        { name: "Mr. Roshan Patil", role: "Head Customer Service and Quality Control" },
        { name: "Mr. Rohan Gujarathi", role: "Head - AMC & After Sales" },
        { name: "Mr. Vikas Patole", role: "Resources & Business Development Corporate Social Responsibility" }
    ];

    return (
        <section className="py-24 lg:py-40 bg-white relative overflow-hidden group/section">
            <div className="absolute top-10 right-10 opacity-[0.02] group-hover/section:opacity-[0.08] transition-all duration-1000 pointer-events-none select-none">
                <span className="text-[150px] font-black text-[#001529] group-hover/section:text-aureole-cyan tracking-tighter leading-none uppercase transition-colors duration-1000">TEAM</span>
            </div>

            <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-12">
                    <div className="max-w-2xl">
                        <SectionHeading
                            label="OPERATIONAL HUB"
                            title="MEET THE"
                            accentTitle="OPERATIONAL TEAM"
                        />
                    </div>
                    <div className="lg:max-w-xs pt-4">
                        <p className="text-[12px] font-medium text-slate-400 tracking-widest leading-relaxed">
                            A nationwide network of specialists delivering precision and excellence across every regional touchpoint.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
                    {regionalTeams.map((member, idx) => (
                        <div key={idx} className="group relative bg-white border border-slate-100 p-10 min-h-[220px] flex flex-col justify-between hover:border-aureole-blue/30 transition-all duration-500 overflow-hidden">
                            <div className="flex justify-between items-start relative z-10">
                                <div className="max-w-[70%]">
                                    <h5 className="text-2xl font-[950] text-[#001529] uppercase tracking-tighter leading-tight group-hover:text-aureole-blue transition-colors">
                                        {member.name}
                                    </h5>
                                </div>
                                <a href="#" className="w-12 h-12 flex items-center justify-center border border-slate-100 bg-slate-50 hover:bg-aureole-cyan hover:border-aureole-cyan transition-all text-slate-300 hover:text-[#001529] group/card relative z-20">
                                    <IdCard size={20} />
                                </a>
                            </div>

                            <div className="pt-8 border-t border-slate-50 flex items-end justify-between relative z-10">
                                <div className="space-y-2">
                                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-[0.3em]">DESIGNATION</span>
                                    <p className="text-[11px] font-black text-aureole-cyan uppercase tracking-widest leading-tight">
                                        {member.role}
                                    </p>
                                </div>
                                <div className="w-2 h-2 bg-slate-100 group-hover:bg-aureole-blue transition-colors"></div>
                            </div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] font-black text-slate-50 opacity-[0.4] pointer-events-none select-none tracking-tighter uppercase group-hover:text-aureole-cyan/[0.03] transition-colors leading-none">
                                {(idx + 1).toString().padStart(2, '0')}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OperationalTeam;
