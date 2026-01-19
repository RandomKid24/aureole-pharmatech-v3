/**
 * Image preloader utility for critical images
 */

interface PreloadOptions {
  priority?: 'high' | 'low';
  crossOrigin?: 'anonymous' | 'use-credentials';
}

export const preloadImage = (src: string, options: PreloadOptions = {}): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    if (options.crossOrigin) {
      img.crossOrigin = options.crossOrigin;
    }
    
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    
    img.src = src;
  });
};

export const preloadImages = async (sources: string[], options: PreloadOptions = {}): Promise<void> => {
  const promises = sources.map(src => preloadImage(src, options));
  
  try {
    await Promise.all(promises);
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

// Preload critical images for better performance
export const preloadCriticalImages = () => {
  const criticalImages = [
    '/aureole-logo.png',
    '/about/office-hq-v2.jpg',
    '/plants/DJI_20240723121709_0011_D.JPG'
  ];
  
  preloadImages(criticalImages, { priority: 'high' });
};

// Image optimization utilities
export const getOptimizedImageUrl = (src: string, width?: number, quality?: number): string => {
  // For future implementation with image CDN
  // This could integrate with services like Cloudinary, ImageKit, etc.
  return src;
};

export const generateImageSrcSet = (baseSrc: string, sizes: number[]): string => {
  return sizes
    .map(size => `${getOptimizedImageUrl(baseSrc, size)} ${size}w`)
    .join(', ');
};

export const generateImageSizes = (breakpoints: { [key: string]: string }): string => {
  return Object.entries(breakpoints)
    .map(([media, size]) => `${media} ${size}`)
    .join(', ');
};