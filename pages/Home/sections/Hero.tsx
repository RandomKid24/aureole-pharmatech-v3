import React from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { track } from '@/utils/track';

const EASE = [0.22, 1, 0.36, 1] as const; // ~ power4.out
const subtitle: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.8, ease: EASE } },
};
const line: Variants = {
  hidden: { y: '100%', opacity: 0 },
  show: (i: number) => ({ y: '0%', opacity: 1, transition: { delay: 0.6 + i * 0.15, duration: 1.2, ease: EASE } }),
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { delay: d, duration: 1.1, ease: EASE } }),
};
const placed: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.8 + i * 0.18, duration: 1.1, ease: EASE } }),
};

// Products stand on one floor. left/width are % of the stage width, bottom is % of stage height.
// Walk-in uses the right-angle render (door left); the BOD Incubator uses the left-angle render (door right).
const SCENE = [
  { src: '/hero/walk-in-humidity.webp', alt: 'Aureole Walk In Humidity Chamber', w: 1000, h: 925, left: 0, width: 80, bottom: 14 },
  { src: '/hero/bod-incubator.webp', alt: 'Aureole BOD Incubator', w: 520, h: 874, left: 64, width: 36, bottom: 4 },
];

// Halo behind the products (Aureole = a ring of light): faint cyan glow, fine rings, one stronger ring.
const HALO_MASK = 'radial-gradient(circle, #000 0, #000 26%, transparent 60%)';
const HALO_STYLE: React.CSSProperties = {
  background:
    'radial-gradient(circle, rgba(1,194,251,.16), rgba(1,194,251,0) 34%), repeating-radial-gradient(circle, transparent 0 56px, rgba(0,121,172,.09) 56px 57px), repeating-radial-gradient(circle, transparent 0 224px, rgba(0,121,172,.26) 224px 225px)',
  WebkitMaskImage: HALO_MASK,
  maskImage: HALO_MASK,
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[88svh] flex flex-col justify-center pt-28 pb-12 sm:pt-32 lg:pt-36 z-10 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-24 relative z-20">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-8 items-center">
          {/* Copy */}
          <div>
            <motion.div variants={subtitle} initial="hidden" animate="show" className="flex items-center gap-3 mb-5">
              <span className="slant-mark" aria-hidden="true"></span>
              <span className="text-xs font-black uppercase tracking-widest text-aureole-blue">Pharma Engineering</span>
            </motion.div>

            <h1 className="text-[2.4rem] sm:text-5xl md:text-6xl 2xl:text-7xl font-black leading-none tracking-tighter text-aureole-slate uppercase mb-8 flex flex-col gap-1 md:gap-2">
              <span className="overflow-hidden pb-1"><motion.span variants={line} custom={0} initial="hidden" animate="show" className="block">Precision</motion.span></span>
              <span className="overflow-hidden pb-1"><motion.span variants={line} custom={1} initial="hidden" animate="show" className="block">Temperature &</motion.span></span>
              <span className="overflow-hidden pb-1"><motion.span variants={line} custom={2} initial="hidden" animate="show" className="block">Humidity <span className="gt">Control.</span></motion.span></span>
            </h1>

            <motion.div variants={fadeUp} custom={1.5} initial="hidden" animate="show" className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                onClick={() => track('hero_quote_click')}
                className="btn-g group relative overflow-hidden px-8 py-4 text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Get a quote</span>
                <div className="absolute inset-x-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[150%]" />
              </Link>
              <Link
                to="/products/stability-chambers"
                className="btn-g-o group relative overflow-hidden px-8 py-4 text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Explore stability chambers</span>
                <div className="absolute inset-x-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-slate-400/10 to-transparent -translate-x-[150%] skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[150%]" />
              </Link>
            </motion.div>
          </div>

          {/* Product group: one shared floor, each unit with its own contact shadow */}
          <div className="relative w-full max-w-[600px] lg:ml-auto">
            <div className="relative w-full" style={{ aspectRatio: '1 / 0.95' }}>
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{ ...HALO_STYLE, aspectRatio: '1' }}
              />
              {SCENE.map((p, i) => (
                <motion.div
                  key={p.src}
                  custom={i}
                  variants={placed}
                  initial="hidden"
                  animate="show"
                  className="absolute"
                  style={{ left: `${p.left}%`, width: `${p.width}%`, bottom: `${p.bottom}%` }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute left-[4%] right-[-4%] -bottom-[3%] h-[7%] rounded-[50%] bg-aureole-slate/25 blur-md"
                  />
                  <img
                    src={p.src}
                    alt={p.alt}
                    width={p.w}
                    height={p.h}
                    fetchPriority={i === 0 ? 'high' : undefined}
                    className="relative block w-full h-auto"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
