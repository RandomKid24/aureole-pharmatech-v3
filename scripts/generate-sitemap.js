
import fs from 'fs';
import path from 'path';

// Note: In a real environment, we'd import these from the project files.
// For this script, I'll define the core data directly to ensure it works in the terminal.

// Use VERCEL_URL if available (provided by Vercel), otherwise fallback to the intended domain or a placeholder
const DOMAIN = process.env.SITE_URL || 
               (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://aureole-pharmatech-v3.vercel.app');

const MAIN_PAGES = [
    { path: '/', priority: '1.0' },
    { path: '/service', priority: '0.6' },
    { path: '/software', priority: '0.6' },
    { path: '/events', priority: '0.6' },
    { path: '/products', priority: '0.6' },
    { path: '/products/stability-chambers', priority: '0.8' },
    { path: '/products/table-top-instruments', priority: '0.8' },
    { path: '/products/laboratory-furniture', priority: '0.8' },
    { path: '/about', priority: '0.6' },
    { path: '/about/certification-compliance', priority: '0.6' },
    { path: '/about/plants', priority: '0.6' },
    { path: '/careers', priority: '0.6' },
];

const PRODUCTS = [
    "humidity-chamber", "stability-chamber", "bod-incubator", "cooling-incubator",
    "cold-chamber", "deep-freezer-upto-20c-upto-40c", "ultra-low-deep-freezer-80c",
    "photostability-chamber", "pharma-refrigerator-dual-zone-chamber", "hot-air-oven",
    "vacuum-oven", "muffle-furnace", "walk-in-humidity-chamber", "walk-in-cold-chamber",
    "walk-in-bod-incubator", "walk-in-deep-freezer", "ultrasonic-bath", "water-bath",
    "steam-bath", "oil-bath", "dry-bath", "air-sampler", "lab-furniture",
    "stainless-steel-items-and-accessories", "wall-side-bench", "island-bench",
    "corner-bench", "anti-vibration-table", "fume-hood", "spot-extractor",
    "overhead-cabinet", "tall-storage-cabinet", "storage-cabinets", "laboratory-sinks",
    "laboratory-fittings", "lab-accessories", "static-pass-box", "dynamic-pass-box",
    "laminar-air-flow", "sampling-dispensing-booth", "biosafety-cabinet"
];

const CITY_BASE_PRODUCTS = [
    { name: "Walk In BOD Incubator", slugPart: "walk-in-bod-incubator" },
    { name: "Walk In Cold Chamber", slugPart: "walk-in-cold-chamber" },
    { name: "Walk In Deep Freezer", slugPart: "walk-in-deep-freezer" },
    { name: "Walk In Humidity Chamber", slugPart: "walk-in-humidity-chamber" }
];

const CITIES = [
    "Ahmedabad", "Aurangabad", "Baddi", "Bangalore", "Bangladesh", "Chennai",
    "Dehradun", "Delhi", "Ghana", "Goa", "Guwahati", "Haridwar", "Hyderabad",
    "Mumbai", "Mumbai-2", "Nashik", "Nepal", "Nigeria", "Pithampur", "Pune",
    "Vadodara", "Vapi", "Vietnam", "Visakhapatnam"
];

const PRODUCT_CITY_MAPPING = {
    "walk-in-bod-incubator": ["Ahmedabad", "Aurangabad", "Baddi", "Bangalore", "Bangladesh", "Chennai", "Dehradun", "Delhi", "Ghana", "Goa", "Guwahati", "Haridwar", "Hyderabad", "Mumbai", "Nashik", "Nepal", "Nigeria", "Pithampur", "Pune", "Vadodara", "Vapi", "Vietnam", "Visakhapatnam"],
    "walk-in-cold-chamber": ["Ahmedabad", "Aurangabad", "Baddi", "Bangalore", "Bangladesh", "Chennai", "Dehradun", "Delhi", "Ghana", "Goa", "Guwahati", "Haridwar", "Hyderabad", "Mumbai", "Nashik", "Nepal", "Nigeria", "Pithampur", "Pune", "Vadodara", "Vapi", "Vietnam", "Visakhapatnam"],
    "walk-in-deep-freezer": ["Ahmedabad", "Aurangabad", "Baddi", "Bangalore", "Chennai", "Dehradun", "Delhi", "Goa", "Guwahati", "Haridwar", "Hyderabad", "Mumbai", "Nashik", "Pithampur", "Pune", "Vadodara", "Vapi", "Visakhapatnam"],
    "walk-in-humidity-chamber": ["Ahmedabad", "Aurangabad", "Baddi", "Bangalore", "Bangladesh", "Chennai", "Dehradun", "Delhi", "Ghana", "Goa", "Guwahati", "Haridwar", "Hyderabad", "Mumbai", "Mumbai-2", "Nashik", "Nepal", "Nigeria", "Pithampur", "Pune", "Vadodara", "Vapi", "Vietnam", "Visakhapatnam"]
};

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Main Pages
MAIN_PAGES.forEach(page => {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}${page.path}${page.path.endsWith('/') || page.path === '' ? '' : '/'}</loc>\n`;
    xml += `  </url>\n`;
});

// Individual Products
PRODUCTS.forEach(prod => {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}/products/${prod}/</loc>\n`;
    xml += `  </url>\n`;
});

// City-wise Products
CITY_BASE_PRODUCTS.forEach(prod => {
    const cities = PRODUCT_CITY_MAPPING[prod.slugPart] || [];
    cities.forEach(city => {
        const citySlug = city.toLowerCase();
        xml += `  <url>\n`;
        xml += `    <loc>${DOMAIN}/${prod.slugPart}-manufacturers-and-suppliers-in-${citySlug}/</loc>\n`;
        xml += `  </url>\n`;
    });
});

xml += '</urlset>';

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xml);
console.log('Sitemap generated successfully in public/sitemap.xml');
