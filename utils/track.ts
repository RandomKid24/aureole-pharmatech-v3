// Thin wrapper over the existing GA4 tag in index.html; no-ops if the tag is blocked.
export const track = (event: string, params: Record<string, string> = {}) => {
  try {
    (window as any).gtag?.('event', event, params);
  } catch {
    /* analytics must never break the page */
  }
};
