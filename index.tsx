
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { track } from './utils/track';

import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Drop prerendered head tags; <SEO> re-adds the same set so crawlers never see duplicates.
document.head
  .querySelectorAll('[data-rh], meta[name=description], link[rel=canonical], meta[property^="og:"], meta[name^="twitter:"]')
  .forEach((el) => el.remove());

// Count phone and email clicks with the existing GA4 tag.
document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest?.('a[href^="tel:"], a[href^="mailto:"]');
  if (a) track(a.getAttribute('href')!.startsWith('tel:') ? 'click_phone' : 'click_email');
});

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
