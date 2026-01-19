import React from 'react';
import SectionSkeleton from './SectionSkeleton';

interface PageLoaderProps {
  type?: 'home' | 'products' | 'about' | 'contact' | 'generic';
}

const PageLoader: React.FC<PageLoaderProps> = ({ type = 'generic' }) => {
  if (type === 'home') {
    return (
      <div className="min-h-screen bg-white">
        <SectionSkeleton type="hero" />
        <SectionSkeleton type="about" />
        <SectionSkeleton type="products" />
        <SectionSkeleton type="clients" />
        <SectionSkeleton type="contact" />
      </div>
    );
  }

  if (type === 'products') {
    return (
      <div className="pt-24 min-h-screen bg-white">
        <div className="py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-24">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-slate-200 animate-pulse"></div>
                <div className="w-48 h-3 bg-slate-200 animate-pulse"></div>
              </div>
              <div className="space-y-4 mb-12">
                <div className="w-full h-16 bg-slate-200 animate-pulse"></div>
                <div className="w-3/4 h-16 bg-slate-200 animate-pulse"></div>
              </div>
              <div className="w-2/3 h-6 bg-slate-200 animate-pulse"></div>
            </div>
          </div>
        </div>
        <SectionSkeleton type="products" />
      </div>
    );
  }

  // Generic loader
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="py-20">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="space-y-8">
            <div className="w-full h-12 bg-slate-200 animate-pulse"></div>
            <div className="w-3/4 h-8 bg-slate-200 animate-pulse"></div>
            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-full h-4 bg-slate-200 animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;