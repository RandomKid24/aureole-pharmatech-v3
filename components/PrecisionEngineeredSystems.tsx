
import React from 'react';
import { PRODUCTS } from '../constants';
import { ArrowUpRight, Activity, ShieldCheck, FlaskConical, Settings, Cpu, Gauge } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LazyImage from './LazyImage';

const PrecisionEngineeredSystems: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Guidelines', icon: <Activity className="w-5 h-5" />, value: 'ICH Q1A / Q1B' },
    { label: 'Compliance', icon: <ShieldCheck className="w-5 h-5" />, value: '21 CFR Part 11' },
    { label: 'Quality', icon: <Settings className="w-5 h-5" />, value: 'ISO 9001 & GxP' },
    { label: 'Control', icon: <FlaskConical className="w-5 h-5" />, value: 'Industrial PLC' },
    { label: 'System', icon: <Gauge className="w-5 h-5" />, value: 'SCADA Integration' },
    { label: 'Validation', icon: <Cpu className="w-5 h-5" />, value: 'DQ IQ OQ PQ' }
  ];

  return (
    <section id="products" className="py-16 sm:py-20 bg-aureole-soft relative overflow-hidden border-b border-slate-100">
      <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none hidden sm:block">
        <span className="text-[150px] font-black text-[#001529] tracking-tighter leading-none uppercase italic">Precision</span>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10 mb-16 sm:mb-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              <span className="w-8 sm:w-12 h-[1px] bg-aureole-blue"></span>
              <h2 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-aureole-blue">
                CORE CATALOG / <span className="text-aureole-cyan">QUALITY STANDARDS</span>
              </h2>
            </div>

            <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#001529] uppercase tracking-tighter leading-[0.85] mb-8">
              PRECISION <br /> ENGINEERED <span className="text-aureole-cyan">SYSTEMS.</span>
            </h3>

            <p className="text-slate-500 text-[14px] sm:text-[15px] font-medium tracking-tight leading-relaxed max-w-sm">
              Engineering excellence with certified standards <br className="hidden sm:block" /> for global pharmaceutical excellence.
            </p>
          </div>

          <div className="w-full lg:max-w-4xl bg-white border border-slate-100 shadow-2xl shadow-slate-200/50">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-slate-100">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 sm:p-12 cursor-default transition-all duration-500 hover:bg-slate-50"
                >
                  <div className="text-aureole-blue mb-6">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-widest">
                      {item.label}
                    </span>
                    <span className="text-sm sm:text-lg font-black text-aureole-slate uppercase tracking-tight leading-tight">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee moved OUTSIDE container for full-width effect */}
      <div className="relative border-y border-slate-100 bg-white group/marquee overflow-hidden">
        {/* Subtle fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        <div className="flex select-none">
          <div className="flex items-stretch whitespace-nowrap animate-marquee py-4 hover:[animation-play-state:paused]">
            {[...PRODUCTS, ...PRODUCTS].map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                className="flex flex-col bg-white p-6 sm:p-10 border-r border-slate-100 transition-all duration-300 w-[280px] sm:w-[420px] flex-shrink-0 group/card relative"
              >
                <div
                  className="aspect-[5/4] relative mb-8 overflow-hidden bg-white rounded-sm border border-slate-50 flex items-center justify-center p-6"
                >
                  <LazyImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-all duration-500 group-hover/card:scale-105"
                  />
                </div>

                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-aureole-blue animate-pulse"></div>
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{product.category}</span>
                  </div>
                </div>

                <h4 className="text-2xl sm:text-2xl font-[900] text-[#001529] mb-4 uppercase tracking-tighter leading-[0.9] transition-colors whitespace-normal">
                  {product.name}
                </h4>

                <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-8 line-clamp-3 whitespace-normal tracking-tight">
                  {product.description}
                </p>

                <div className="mt-auto grid grid-cols-2 gap-4 pb-8 border-b border-slate-100 mb-6">
                  {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
                    <div key={key}>
                      <div className="text-[10px] font-black text-slate-300 uppercase tracking-wide mb-1">{key}</div>
                      <div className="text-[12px] font-bold text-aureole-slate uppercase tracking-tight">{val}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <div
                    className="flex justify-between items-center group/btn cursor-pointer"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-aureole-blue uppercase tracking-widest group-hover/btn:text-aureole-cyan transition-colors">
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
      </div>
    </section>
  );
};

export default PrecisionEngineeredSystems;
