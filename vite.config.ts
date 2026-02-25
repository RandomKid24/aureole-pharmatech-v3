import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const vcardRewritePlugin = () => {
  return {
    name: 'vcard-rewrite',
    enforce: 'pre' as const,
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/vcards/')) {
          // If accessing a specific vcard without a trailing slash, redirect to add it
          // so relative asset paths like ../_shared/css resolve correctly.
          const urlObj = new URL(req.url, `http://${req.headers.host}`);
          const pathParts = urlObj.pathname.split('/');
          // e.g. /vcards/aarti-avhad -> length 3 (['', 'vcards', 'aarti-avhad'])
          if (pathParts.length === 3 && pathParts[2] !== '' && !pathParts[2].includes('.')) {
            res.writeHead(301, { Location: urlObj.pathname + '/' + urlObj.search });
            res.end();
            return;
          }
          req.url = req.url.replace('/vcards/', '/vcards-2026/');
        } else if (req.url && req.url.startsWith('/envato/digi-vcard/CEO/')) {
          req.url = req.url.replace('/envato/digi-vcard/CEO/', '/vcards-2026/aarti-avhad/');
        }
        
        // If the URL ends in a directory (no file extension), explicitly append index.html
        // inside the vcards folder so Vite doesn't fall back to the SPA index.html
        if (req.url && req.url.startsWith('/vcards-2026/') && !req.url.match(/\.[a-zA-Z0-9]+$/)) {
          req.url = req.url.endsWith('/') ? `${req.url}index.html` : `${req.url}/index.html`;
        }
        next();
      });
    }
  };
};
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), vcardRewritePlugin()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
