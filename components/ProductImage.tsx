import React from 'react';
import LazyImage from './LazyImage';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
  showPlaceholder?: boolean;
}

const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'square',
  showPlaceholder = true
}) => {
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'video':
        return 'aspect-video';
      case 'portrait':
        return 'aspect-[3/4]';
      case 'landscape':
        return 'aspect-[4/3]';
      case 'square':
      default:
        return 'aspect-square';
    }
  };

  // Handle placeholder images
  if (src === 'PLACEHOLDER' || !src) {
    return (
      <div className={`${getAspectRatioClass()} bg-slate-50 flex flex-col items-center justify-center border border-slate-100 p-12 text-center group ${className}`}>
        <div className="text-6xl mb-6 transition-all duration-700 transform group-hover:scale-110">
          🔬
        </div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-aureole-slate mb-2">
          Image Arriving Soon
        </h3>
        <p className="text-[14px] font-[950] text-[#001529] uppercase tracking-tighter leading-none">
          {alt}
        </p>
        <div className="mt-8 w-12 h-[2px] bg-aureole-cyan/30 group-hover:w-24 transition-all duration-700"></div>
      </div>
    );
  }

  return (
    <LazyImage
      src={src}
      alt={alt}
      className={`${getAspectRatioClass()} w-full object-contain ${className}`}
      skeletonClassName={getAspectRatioClass()}
      placeholder={showPlaceholder ? "Loading..." : undefined}
    />
  );
};

export default ProductImage;