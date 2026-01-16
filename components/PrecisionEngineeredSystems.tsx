
import React from 'react';
import { PRODUCTS } from '../constants';
import { ArrowUpRight, Activity, ShieldCheck, FlaskConical, Settings, Cpu, Gauge } from 'lucide-react';

const PrecisionEngineeredSystems: React.FC = () => {
  const stats = [
    { label: 'Guidelines', icon: <Activity className="w-5 h-5" />, value: 'ICH Q1A / Q1B' },
    { label: 'Compliance', icon: <ShieldCheck className="w-5 h-5" />, value: '21 CFR Part 11' },
    { label: 'Quality', icon: <Settings className="w-5 h-5" />, value: 'ISO 9001 & GxP' },
    { label: 'Control', icon: <FlaskConical className="w-5 h-5" />, value: 'Industrial PLC' },
    { label: 'System', icon: <Gauge className="w-5 h-5" />, value: 'SCADA Integration' },
    { label: 'Validation', icon: <Cpu className="w-5 h-5" />, value: 'DQ IQ OQ PQ' }
  ];

  return (
    <section id="products" className="py-16 sm:py-20 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none hidden sm:block">
        <span className="text-[150px] font-black text-[#001529] tracking-tighter leading-none uppercase">Precision</span>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 sm:mb-24 gap-12 lg:gap-20">
          <div className="max-w-2xl">
            {/* Combined Catalog & Quality Meta */}
            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              <span className="w-8 sm:w-12 h-[1px] bg-aureole-blue"></span>
              <h2 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-aureole-blue">
                CORE CATALOG / <span className="text-aureole-cyan">QUALITY STANDARDS</span>
              </h2>
            </div>

            {/* Unified Combined Heading */}
            <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#001529] uppercase tracking-tighter leading-[0.85] mb-8">
              PRECISION <br /> ENGINEERED <span className="text-aureole-cyan">SYSTEMS.</span>
            </h3>

            <p className="text-slate-500 text-[10px] sm:text-[11px] font-bold tracking-widest leading-relaxed max-w-sm">
              Engineering excellence with certified standards <br className="hidden sm:block" /> for global pharmaceutical excellence.
            </p>
          </div>

          {/* Stats Grid - Right Aligned as per image */}
          <div className="w-full lg:max-w-2xl bg-white border border-slate-100 shadow-2xl shadow-slate-200/50">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-slate-100">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 group hover:bg-aureole-blue cursor-default transition-all duration-500"
                >
                  <div className="text-aureole-blue group-hover:text-white mb-4 transition-colors">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black text-slate-400 group-hover:text-white/60 uppercase tracking-widest mb-2 transition-colors">
                      {item.label}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-black text-aureole-slate group-hover:text-white uppercase tracking-tight transition-colors">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-100">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white p-6 sm:p-10 border-r border-b border-slate-100 transition-all duration-300 hover:bg-slate-50/80"
            >
              <div className="aspect-[5/4] relative mb-8 overflow-hidden bg-white rounded-sm border border-slate-50 flex items-center justify-center p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-aureole-blue animate-pulse"></div>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{product.category}</span>
                </div>
              </div>

              <h4 className="text-2xl sm:text-3xl font-[900] text-[#001529] mb-4 uppercase tracking-tighter leading-[0.9] group-hover:text-aureole-cyan transition-colors">
                {product.name}
              </h4>

              <p className="text-slate-500 text-[10px] sm:text-[11px] font-medium leading-relaxed mb-8 line-clamp-3">
                {product.description}
              </p>

              <div className="mt-auto grid grid-cols-2 gap-4 pb-8 border-b border-slate-100 mb-6">
                {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
                  <div key={key}>
                    <div className="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-1">{key}</div>
                    <div className="text-[10px] font-bold text-aureole-slate uppercase tracking-tight">{val}</div>
                  </div>
                ))}
              </div>

              <div>
                <div className="flex justify-between items-center group/btn cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-[#001529] uppercase tracking-widest group-hover/btn:text-aureole-cyan transition-colors">
                      Technical Sheet
                    </span>
                    <div className="w-0 h-[1px] bg-aureole-blue transition-all group-hover/btn:w-full"></div>
                  </div>
                  <div className="p-2 border border-slate-100 group-hover/btn:bg-aureole-cyan group-hover/btn:border-aureole-cyan transition-all">
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover/btn:text-white transition-colors" />
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

export default PrecisionEngineeredSystems;
