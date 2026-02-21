
import React from 'react';
import { Settings, ShieldCheck, Cpu, RefreshCw, ClipboardList, CheckSquare } from 'lucide-react';

const offerings = [
  {
    id: "maintenance",
    icon: Settings,
    title: "1. MAINTENANCE & TECHNICAL SUPPORT (AMC / CAMC)",
    description: "Comprehensive maintenance programs designed to ensure continuous performance and regulatory readiness.",
    items: [
      "Scheduled preventive maintenance",
      "Breakdown & emergency response",
      "Performance verification & system health checks",
      "Inspection of refrigeration, humidity, sensors & safety systems",
      "Replacement of critical spares (CAMC)",
      "Priority support with reduced downtime",
      "Service documentation & compliance records"
    ]
  },
  {
    id: "validation",
    icon: ShieldCheck,
    title: "2. CALIBRATION, VALIDATION & REQUALIFICATION",
    description: "GMP-aligned qualification services for stability chambers and controlled environments.",
    items: [
      "Temperature & humidity calibration (NABL-traceable)",
      "Multi-point calibration with certification",
      "IQ, OQ & PQ execution",
      "Thermal mapping as per regulatory standards",
      "Re-validation after repair, relocation, or upgrade"
    ]
  },
  {
    id: "software",
    icon: Cpu,
    title: "3. SOFTWARE & DATA INTEGRITY SOLUTIONS",
    description: "Secure and compliant monitoring systems for regulated facilities.",
    items: [
      "21 CFR Part 11–aligned software support",
      "Audit trail & data integrity management",
      "Backup, restoration & system requalification",
      "Remote monitoring & diagnostics",
      "Alarm configuration & reporting systems",
      "CSV support & compliance verification"
    ]
  },
  {
    id: "modernization",
    icon: RefreshCw,
    title: "4. SYSTEM UPGRADATION & MODERNIZATION",
    description: "Performance enhancement and technology upgrades for existing chambers.",
    items: [
      "PLC / HMI control system upgrades",
      "Software modernization",
      "Refrigeration & humidity system optimization",
      "Sensor & instrumentation upgrades",
      "Energy efficiency improvements",
      "Integration with centralized monitoring platforms"
    ]
  },
  {
    id: "regulatory",
    icon: ClipboardList,
    title: "5. RELOCATION, DOCUMENTATION & REGULATORY SUPPORT",
    description: "End-to-end support to maintain compliance during transitions and audits.",
    items: [
      "Safe dismantling & reinstallation",
      "Utility reconnection & performance verification",
      "Complete DQ / IQ / OQ / PQ documentation",
      "SOP & compliance documentation support",
      "Data integrity review & gap analysis",
      "CAPA & audit readiness assistance"
    ]
  }
];

const CoreServices: React.FC = () => {
    return (
        <section className="py-24 bg-white border-y border-slate-100 min-h-screen bg-[url('/wavebg.png')] bg-cover bg-fixed">
            <div className="container mx-auto px-6 sm:px-12 lg:px-16">
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-12 h-[2px] bg-aureole-blue"></span>
                        <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-aureole-blue">Technical Register</h6>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black font-heading tracking-tighter text-aureole-slate uppercase leading-[0.85]">
                        OUR CORE <span className="text-aureole-blue">SERVICE OFFERINGS</span>
                    </h2>
                </div>

                {/* Kanban Board Layout */}
                <div className="overflow-x-auto pb-12 -mx-6 px-6 lg:mx-0 lg:px-0">
                    <div className="flex gap-6 min-w-max lg:min-w-0 lg:grid lg:grid-cols-5 h-full items-stretch">
                        {offerings.map((offering) => (
                            <div 
                                key={offering.id} 
                                className="w-[320px] lg:w-full flex flex-col bg-white border-t-4 border-aureole-blue shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                {/* Column Header */}
                                <div className="p-8 border-b border-slate-100 bg-slate-50/30 group-hover:bg-white transition-colors h-[340px] flex flex-col shrink-0">
                                    <div className="w-12 h-12 rounded-lg bg-white border border-slate-100 flex items-center justify-center mb-6 group-hover:border-aureole-cyan transition-all shrink-0">
                                        <offering.icon className="w-6 h-6 text-aureole-blue group-hover:text-aureole-cyan transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-black font-heading text-aureole-slate uppercase leading-tight tracking-tight mb-4 min-h-[5rem]">
                                        {offering.title}
                                    </h3>
                                    <p className="text-xs font-sans font-medium text-slate-500 leading-relaxed">
                                        {offering.description}
                                    </p>
                                </div>

                                {/* Column Body (Checklist) */}
                                <div className="p-8 flex-grow">
                                    <ul className="space-y-4">
                                        {offering.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckSquare className="w-4 h-4 text-aureole-cyan mt-0.5 shrink-0" />
                                                <span className="text-sm font-sans font-medium text-slate-700 leading-snug">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Column Footer (Subtle Accent) */}
                                <div className="h-1 bg-slate-100 group-hover:bg-aureole-cyan transition-colors mt-auto"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreServices;
