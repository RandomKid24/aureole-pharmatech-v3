import React from 'react';
import Skeleton from './Skeleton';

interface SectionSkeletonProps {
  type?: 'hero' | 'about' | 'products' | 'clients' | 'contact';
  className?: string;
}

const SectionSkeleton: React.FC<SectionSkeletonProps> = ({ type = 'about', className = '' }) => {
  switch (type) {
    case 'hero':
      return (
        <div className={`py-32 bg-white ${className}`}>
          <div className="container mx-auto px-6 lg:px-24">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <Skeleton width={48} height={2} />
                <Skeleton width={200} height={12} />
              </div>
              <Skeleton variant="text" lines={3} className="mb-12" height={80} />
              <Skeleton variant="text" lines={2} width="60%" height={20} />
            </div>
          </div>
        </div>
      );

    case 'about':
      return (
        <div className={`py-20 bg-aureole-soft ${className}`}>
          <div className="container mx-auto px-6 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Skeleton width={48} height={2} />
                  <Skeleton width={80} height={12} />
                </div>
                <Skeleton variant="text" lines={2} className="mb-6" height={48} />
                <div className="p-8 border-l-[3px] border-slate-200 bg-white">
                  <Skeleton variant="text" lines={3} className="mb-6" />
                  <Skeleton variant="text" lines={2} width="80%" />
                </div>
              </div>
              <div className="relative">
                <Skeleton variant="rectangular" className="aspect-square rounded-sm" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="p-6 border border-slate-100 bg-white min-h-[240px]">
                  <Skeleton variant="circular" width={24} height={24} className="mb-6" />
                  <Skeleton width="60%" height={12} className="mb-3" />
                  <Skeleton variant="text" lines={3} />
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'products':
      return (
        <div className={`py-20 bg-white ${className}`}>
          <div className="container mx-auto px-6 lg:px-16">
            <div className="text-center mb-16">
              <Skeleton width={200} height={12} className="mx-auto mb-4" />
              <Skeleton variant="text" lines={2} width="50%" className="mx-auto" height={48} />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border border-slate-100 p-8">
                  <Skeleton variant="rectangular" className="aspect-square mb-6" />
                  <Skeleton width="80%" height={16} className="mb-4" />
                  <Skeleton variant="text" lines={3} />
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'clients':
      return (
        <div className={`py-20 bg-aureole-soft ${className}`}>
          <div className="container mx-auto px-6 lg:px-16">
            <div className="text-center mb-16">
              <Skeleton variant="text" lines={2} width="40%" className="mx-auto" height={48} />
              <Skeleton width="60%" height={16} className="mx-auto mt-4" />
            </div>
            <div className="space-y-6">
              {Array.from({ length: 3 }).map((_, rowIdx) => (
                <div key={rowIdx} className="flex gap-12 overflow-hidden">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-6 flex-shrink-0">
                      <Skeleton variant="rectangular" width={128} height={64} className="rounded-sm" />
                      <Skeleton width={120} height={12} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'contact':
      return (
        <div className={`py-20 bg-white ${className}`}>
          <div className="container mx-auto px-6 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <Skeleton variant="text" lines={2} className="mb-8" height={48} />
                <Skeleton variant="text" lines={4} className="mb-8" />
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <Skeleton variant="circular" width={24} height={24} />
                      <Skeleton width={200} height={16} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} variant="rectangular" height={48} className="rounded" />
                ))}
                <Skeleton variant="rectangular" height={120} className="rounded" />
                <Skeleton variant="rectangular" height={48} className="rounded" />
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className={`py-20 ${className}`}>
          <div className="container mx-auto px-6 lg:px-16">
            <Skeleton variant="text" lines={4} />
          </div>
        </div>
      );
  }
};

export default SectionSkeleton;