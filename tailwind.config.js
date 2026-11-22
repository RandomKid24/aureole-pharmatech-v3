/** @type {import('tailwindcss').Config} */
// Moved from the inline config that used to live in index.html (Tailwind CDN).
const config = {
        theme: {
          extend: {
            colors: {
              aureole: {
                blue: "#0079ac", // Logo text color - primary brand color
                cyan: "#00a6d6", // Logo highlight color - for hovers and accents
                deep: "#003366", // Deep blue for depth
                slate: "#001529", // Dark slate for text
                soft: "#f8fafc", // Subtle background 1 (Slate 50)
                pearl: "#f1f5f9", // Subtle background 2 (Slate 100)
                primary: "#1D69B0", // New Brand Primary
                accent: "#01C2FB", // New Brand Accent
                surface: "#F0F7FD", // New Brand Surface
              },
            },
            screens: {
              xs: "475px",
              "3xl": "1920px",
              "4xl": "2560px",
            },
            fontFamily: {
              sans: ["Manrope", "sans-serif"],
              heading: ["Inter", "sans-serif"],
              questrial: ["Questrial", "sans-serif"],
              bebas: ["Bebas Neue", "cursive"],
            },
            animation: {
              float: "float 6s ease-in-out infinite",
              "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              marquee: "marquee 120s linear infinite",
              "marquee-reverse": "marquee-reverse 120s linear infinite",
              "marquee-fast": "marquee 120s linear infinite",
              shimmer: "shimmer 2s infinite",
            },
            keyframes: {
              float: {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(-10px)" },
              },
              marquee: {
                "0%": { transform: "translateX(0%)" },
                "100%": { transform: "translateX(-50%)" },
              },
              "marquee-reverse": {
                "0%": { transform: "translateX(-50%)" },
                "100%": { transform: "translateX(0%)" },
              },
              shimmer: {
                "0%": { backgroundPosition: "-200% 0" },
                "100%": { backgroundPosition: "200% 0" },
              },
            },
            backgroundImage: {
              'brand-gradient': 'linear-gradient(to right, #01C2FB, #1D69B0)',
            },
          },
          container: {
            center: true,
            padding: "2rem",
            screens: {
              sm: "640px",
              md: "768px",
              lg: "1024px",
              xl: "1280px",
              "2xl": "1536px",
              "3xl": "1800px",
              "4xl": "2200px",
            },
          },
        },
      };

config.content = [
  './index.html',
  './App.tsx',
  './index.tsx',
  './components/**/*.{ts,tsx}',
  './pages/**/*.{ts,tsx}',
  './data/**/*.{ts,tsx}',
  './utils/**/*.{ts,tsx}',
  './anatomy/**/*.{ts,tsx}',
];

export default config;
