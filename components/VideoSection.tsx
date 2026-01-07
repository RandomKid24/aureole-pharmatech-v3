
import React from 'react';
import { Activity, ShieldCheck, FlaskConical, Settings, Cpu, Gauge } from 'lucide-react';

const VideoSection: React.FC = () => {
  const stats = [
    { label: 'Thermal', icon: <Activity className="w-5 h-5" />, value: '± 0.1°C Stability' },
    { label: 'Calibration', icon: <ShieldCheck className="w-5 h-5" />, value: 'ISO 17025' },
    { label: 'Logic', icon: <Settings className="w-5 h-5" />, value: 'Industrial PLC' },
    { label: 'Standards', icon: <FlaskConical className="w-5 h-5" />, value: 'ICH Q1A / Q1B' },
    { label: 'Energy', icon: <Gauge className="w-5 h-5" />, value: 'Eco Systems' },
    { label: 'Integrity', icon: <Cpu className="w-5 h-5" />, value: '21 CFR Part 11' }
  ];

  return (
    <section className="bg-aureole-slate relative overflow-hidden border-y border-white/5">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          
          <div className="lg:w-2/3 relative group overflow-hidden">
            <video 
              src="https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190828_27_Laboratory_12_preview.mp4"
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-60 group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-aureole-slate via-aureole-slate/40 to-transparent"></div>
            
            <div className="absolute bottom-12 left-12 right-12 z-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-aureole-blue"></span>
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole-blue">QUALITY</h2>
              </div>
              <h3 className="text-5xl sm:text-7xl font-[950] text-white uppercase tracking-tighter leading-[0.85]">
                ENGINEERING <br /> 
                <span className="text-aureole-blue">PRECISION.</span>
              </h3>
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-col bg-white/5 divide-y divide-white/5">
            {stats.map((item, idx) => (
              <div 
                key={idx} 
                className="flex-1 flex items-center gap-8 p-10 group hover:bg-aureole-blue transition-all duration-500 cursor-default"
              >
                <div className="text-aureole-blue group-hover:text-white shrink-0 group-hover:scale-110 transition-all duration-500">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-white/30 group-hover:text-white/60 uppercase tracking-[0.25em] mb-1.5 transition-colors">
                    {item.label}
                  </span>
                  <span className="text-sm font-black text-white uppercase tracking-wider group-hover:tracking-widest transition-all">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
