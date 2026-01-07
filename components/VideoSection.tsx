
import React from 'react';
import { Activity, ShieldCheck, FlaskConical, Settings, Cpu, Gauge } from 'lucide-react';

const VideoSection: React.FC = () => {
  const stats = [
    { label: 'Guidelines', icon: <Activity className="w-5 h-5" />, value: 'ICH Q1A / Q1B' },
    { label: 'Compliance', icon: <ShieldCheck className="w-5 h-5" />, value: '21 CFR Part 11' },
    { label: 'Quality', icon: <Settings className="w-5 h-5" />, value: 'ISO 9001 & GxP' },
    { label: 'Control', icon: <FlaskConical className="w-5 h-5" />, value: 'Industrial PLC' },
    { label: 'System', icon: <Gauge className="w-5 h-5" />, value: 'SCADA Integration' },
    { label: 'Validation', icon: <Cpu className="w-5 h-5" />, value: 'DQ IQ OQ PQ' }
  ];

  return (
    <section className="bg-slate-50 relative overflow-hidden border-y border-slate-100 py-12 lg:py-16">
      {/* Background Video Element - subtle on light theme */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190828_27_Laboratory_12_preview.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale opacity-[0.03]"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Header Compact - Light */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-px bg-[#00C2FF]"></span>
              <h2 className="text-[9px] font-black uppercase tracking-[0.4em] text-[#00C2FF]">QUALITY</h2>
            </div>
            <h3 className="text-3xl sm:text-4xl font-[950] text-slate-800 uppercase tracking-tighter leading-none mb-4">
              ENGINEERING <span className="text-[#00C2FF]">PRECISION.</span>
            </h3>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest leading-relaxed max-w-sm">
              Certified standards for global pharmaceutical excellence.
            </p>
          </div>

          {/* Stats Grid Compact - Light */}
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 shadow-xl shadow-cyan-100/50">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 group hover:bg-[#00C2FF] cursor-default transition-colors duration-300"
                >
                  <div className="text-[#00C2FF] group-hover:text-white mb-3 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black text-slate-400 group-hover:text-white/80 uppercase tracking-widest mb-1 transition-colors">
                      {item.label}
                    </span>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-white uppercase tracking-wide">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default VideoSection;
