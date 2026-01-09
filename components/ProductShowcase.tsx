
import React from 'react';
import { PRODUCTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="py-16 sm:py-20 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none hidden sm:block">
        <span className="text-[150px] font-black text-[#001529] tracking-tighter leading-none uppercase">Precision</span>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-8 sm:gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <span className="w-8 sm:w-12 h-[1px] bg-aureole-blue"></span>
              <h2 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-aureole-blue">CORE CATALOG</h2>
            </div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001529] uppercase tracking-tighter leading-none">
              ENGINEERED <span className="text-aureole-cyan">SYSTEMS.</span>
            </h3>
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

export default ProductShowcase;
