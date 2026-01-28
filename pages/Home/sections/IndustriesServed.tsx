
import React from 'react';
import {
  Microscope, Activity, FlaskConical, ArrowRight, Binary, Gauge,
  ShieldCheck, CheckCircle2, FlaskConical as Chem, ThermometerSnowflake,
  Settings, Zap, ShieldAlert, LayoutGrid, Box, ClipboardCheck,
  Dna, HeartPulse, Droplets, Flame
} from 'lucide-react';

const SECTORS_DATA = [
  {
    id: '01',
    name: 'Pharmaceutical',
    icon: <Microscope className="w-8 h-8" />,
    image: '/industries/pharmaceutical.png',
    desc: 'Precision stability testing and environmental storage for life-saving drug formulations and vaccines.',
    capabilities: ['Stability Testing', 'GMP Compliance', 'Cold Chain']
  },
  {
    id: '02',
    name: 'Hospital',
    icon: <Activity className="w-8 h-8" />,
    image: '/industries/hospital.png',
    desc: 'Sterilization and temperature-controlled machinery for surgical environments and pharmacy storage.',
    capabilities: ['Sterilization', 'Clean Rooms', 'Sample Storage']
  },
  {
    id: '03',
    name: 'Chemical',
    icon: <FlaskConical className="w-8 h-8" />,
    image: '/industries/chemical.png',
    desc: 'Precision thermal control and stabilization for sensitive chemical synthesis and volatile compound storage.',
    capabilities: ['Reaction Control', 'Volatile Storage', 'Safety Compliance']
  },
  {
    id: '04',
    name: 'Oil Industry',
    icon: <Gauge className="w-8 h-8" />,
    image: '/industries/oil_gas.png',
    desc: 'Ruggedized environmental chambers designed for downstream testing and petrochemical sample preservation.',
    capabilities: ['Downstream Testing', 'Rugged Chambers', 'Heat Stress']
  },
  {
    id: '05',
    name: 'Food Industry',
    icon: <ShieldCheck className="w-8 h-8" />,
    image: '/industries/food_v3.png',
    desc: 'Incubation and environmental chambers (BOD) for food safety testing and quality assurance.',
    capabilities: ['Safety Testing', 'Quality Control', 'BOD Incubation']
  }
];

const IndustriesServed: React.FC = () => {
  const getCapabilityIcon = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('stability')) return <ShieldCheck size={10} />;
    if (lower.includes('gmp') || lower.includes('compliance')) return <ClipboardCheck size={10} />;
    if (lower.includes('cold') || lower.includes('chain')) return <ThermometerSnowflake size={10} />;
    if (lower.includes('clean') || lower.includes('room')) return <LayoutGrid size={10} />;
    if (lower.includes('storage') || lower.includes('rugged')) return <Box size={10} />;
    if (lower.includes('steriliz')) return <Zap size={10} />;
    if (lower.includes('safety') || lower.includes('stress')) return <ShieldAlert size={10} />;
    if (lower.includes('reaction') || lower.includes('volatile')) return <Flame size={10} />;
    if (lower.includes('testing') || lower.includes('control')) return <Settings size={10} />;
    if (lower.includes('bod') || lower.includes('incubat')) return <Droplets size={10} />;
    return <CheckCircle2 size={10} />;
  };

  return (
    <section id="industries" className="py-16 lg:py-20 bg-white relative overflow-hidden group/section">
      <div className="absolute top-10 right-10 opacity-[0.02] group-hover/section:opacity-[0.08] transition-all duration-1000 pointer-events-none select-none hidden lg:block">
        <span className="text-[150px] font-black text-aureole-slate group-hover/section:text-aureole-cyan tracking-tighter leading-none uppercase transition-colors duration-1000">MARKETS</span>
      </div>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-aureole-blue"></span>
              <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-aureole-blue">MARKETS</h2>
            </div>
            <h3 className="text-4xl lg:text-6xl font-[900] text-slate-800 uppercase tracking-tighter leading-none">
              INDUSTRIES <span className="text-aureole-cyan">SERVED.</span>
            </h3>
          </div>
          <p className="text-slate-500 font-medium text-sm max-w-sm text-right hidden md:block">
            Delivering precision engineering solutions across critical global infrastructure sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SECTORS_DATA.map((sector) => (
            <div
              key={sector.id}
              className="group bg-white rounded-lg overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-cyan-100 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded border border-white/20 text-white">
                    {sector.icon}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 relative">
                <h3 className="text-xl font-[900] font-heading text-slate-800 uppercase tracking-tight mb-3 group-hover:text-aureole-cyan transition-colors">
                  {sector.name}
                </h3>

                <p className="text-slate-500 text-[14px] font-medium tracking-tight leading-relaxed mb-6 line-clamp-3">
                  {sector.desc}
                </p>

                <div className="mt-auto space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {sector.capabilities.map((cap, i) => (
                      <span key={i} className="flex items-center gap-1.5 text-[8px] font-black text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1.5 uppercase tracking-wider rounded-sm transition-colors group-hover:text-aureole-blue group-hover:border-aureole-cyan/20">
                        <span className="opacity-60">{getCapabilityIcon(cap)}</span>
                        {cap}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
