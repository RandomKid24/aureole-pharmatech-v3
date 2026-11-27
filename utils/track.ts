// Thin wrapper over the existing GA4 tag; no-ops until cookies are accepted or if the tag is blocked.
export const track = (event: string, params: Record<string, string> = {}) => {
  try {
    (window as any).gtag?.('event', event, params);
  } catch {
    /* analytics must never break the page */
  }
};
