/**
 * Performance monitoring utilities for image loading
 */

interface ImageLoadMetrics {
  src: string;
  loadTime: number;
  size?: number;
  cached: boolean;
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: ImageLoadMetrics[] = [];
  private observers: PerformanceObserver[] = [];

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  trackImageLoad(src: string, startTime: number, cached: boolean = false): void {
    const loadTime = performance.now() - startTime;
    
    this.metrics.push({
      src,
      loadTime,
      cached
    });

    // Log slow loading images in development
    if (process.env.NODE_ENV === 'development' && loadTime > 1000) {
      console.warn(`Slow image load detected: ${src} took ${loadTime.toFixed(2)}ms`);
    }
  }

  getMetrics(): ImageLoadMetrics[] {
    return [...this.metrics];
  }

  getAverageLoadTime(): number {
    if (this.metrics.length === 0) return 0;
    
    const total = this.metrics.reduce((sum, metric) => sum + metric.loadTime, 0);
    return total / this.metrics.length;
  }

  getSlowestImages(count: number = 5): ImageLoadMetrics[] {
    return [...this.metrics]
      .sort((a, b) => b.loadTime - a.loadTime)
      .slice(0, count);
  }

  clearMetrics(): void {
    this.metrics = [];
  }

  // Monitor Core Web Vitals related to images
  observeLCP(): void {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (lastEntry && process.env.NODE_ENV === 'development') {
        console.log('LCP:', lastEntry.startTime.toFixed(2) + 'ms');
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
    this.observers.push(observer);
  }

  observeCLS(): void {
    if (typeof window === 'undefined') return;

    let clsValue = 0;
    let clsEntries: any[] = [];

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          const firstSessionEntry = clsEntries[0];
          const lastSessionEntry = clsEntries[clsEntries.length - 1];

          if (!firstSessionEntry || 
              entry.startTime - lastSessionEntry.startTime < 1000 &&
              entry.startTime - firstSessionEntry.startTime < 5000) {
            clsEntries.push(entry);
            clsValue += (entry as any).value;
          } else {
            clsEntries = [entry];
            clsValue = (entry as any).value;
          }
        }
      }

      if (process.env.NODE_ENV === 'development' && clsValue > 0.1) {
        console.warn('High CLS detected:', clsValue.toFixed(4));
      }
    });

    observer.observe({ entryTypes: ['layout-shift'] });
    this.observers.push(observer);
  }

  disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

export const performanceMonitor = PerformanceMonitor.getInstance();

// Auto-start monitoring in development
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  performanceMonitor.observeLCP();
  performanceMonitor.observeCLS();
}