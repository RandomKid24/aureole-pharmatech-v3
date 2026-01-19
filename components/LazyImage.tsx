import React, { useState, useRef, useEffect } from 'react';
import { performanceMonitor } from '../utils/performanceMonitor';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  skeletonClassName = '',
  placeholder,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const loadStartTime = useRef<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          loadStartTime.current = performance.now();
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    
    // Track performance metrics
    if (loadStartTime.current > 0) {
      const cached = performance.now() - loadStartTime.current < 50; // Likely cached if very fast
      performanceMonitor.trackImageLoad(src, loadStartTime.current, cached);
    }
    
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Skeleton Loading */}
      {!isLoaded && !hasError && (
        <div className={`absolute inset-0 bg-slate-200 animate-pulse ${skeletonClassName}`}>
          <div className="w-full h-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-shimmer bg-[length:200%_100%]"></div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
          <div className="text-center text-slate-400">
            <div className="text-4xl mb-2">📷</div>
            <div className="text-xs font-medium uppercase tracking-widest">Image Unavailable</div>
          </div>
        </div>
      )}

      {/* Actual Image */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}

      {/* Placeholder for very slow connections */}
      {placeholder && !isInView && (
        <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
          <div className="text-slate-300 text-sm font-medium uppercase tracking-widest">
            {placeholder}
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;