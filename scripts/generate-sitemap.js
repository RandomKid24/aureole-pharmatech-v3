import fs from "fs";
import path from "path";

const DOMAIN = "https://www.aureolepharmatech.com";

const MAIN_PAGES = [
  { path: "/", priority: "1.0" },
  { path: "/service", priority: "0.6" },
  { path: "/software", priority: "0.6" },
  { path: "/events", priority: "0.6" },
  { path: "/products", priority: "0.6" },
  { path: "/products/stability-chambers", priority: "0.8" },
  { path: "/products/table-top-instruments", priority: "0.8" },
  { path: "/products/laboratory-furniture", priority: "0.8" },
  { path: "/about", priority: "0.6" },
  { path: "/about/certification-compliance", priority: "0.6" },
  { path: "/about/plants", priority: "0.6" },
  { path: "/careers", priority: "0.6" },
];

const PRODUCTS = [
  "humidity-chamber",
  "stability-chamber",
  "bod-incubator",
  "cooling-incubator",
  "cold-chamber",
  "deep-freezer-upto-20c-upto-40c",
  "ultra-low-deep-freezer-80c",
  "photostability-chamber",
  "pharma-refrigerator-dual-zone-chamber",
  "hot-air-oven",
  "vacuum-oven",
  "muffle-furnace",
  "walk-in-humidity-chamber",
  "walk-in-cold-chamber",
  "walk-in-bod-incubator",
  "walk-in-deep-freezer",
  "ultrasonic-bath",
  "water-bath",
  "steam-bath",
  "oil-bath",
  "dry-bath",
  "air-sampler",
  "lab-furniture",
  "stainless-steel-items-and-accessories",
  "wall-side-bench",
  "island-bench",
  "corner-bench",
  "anti-vibration-table",
  "fume-hood",
  "spot-extractor",
  "overhead-cabinet",
  "tall-storage-cabinet",
  "storage-cabinets",
  "laboratory-sinks",
  "laboratory-fittings",
  "lab-accessories",
  "static-pass-box",
  "dynamic-pass-box",
  "laminar-air-flow",
  "sampling-dispensing-booth",
  "biosafety-cabinet",
];

const CITY_BASE_PRODUCTS = [
  { name: "Walk In BOD Incubator", slugPart: "walk-in-bod-incubator" },
  { name: "Walk In Cold Chamber", slugPart: "walk-in-cold-chamber" },
  { name: "Walk In Deep Freezer", slugPart: "walk-in-deep-freezer" },
  { name: "Walk In Humidity Chamber", slugPart: "walk-in-humidity-chamber" },
];

const PRODUCT_CITY_MAPPING = {
  "walk-in-bod-incubator": [
    "Ahmedabad",
    "Aurangabad",
    "Baddi",
    "Bangalore",
    "Bangladesh",
    "Chennai",
    "Dehradun",
    "Delhi",
    "Ghana",
    "Goa",
    "Guwahati",
    "Haridwar",
    "Hyderabad",
    "Mumbai",
    "Nashik",
    "Nepal",
    "Nigeria",
    "Pithampur",
    "Pune",
    "Vadodara",
    "Vapi",
    "Vietnam",
    "Visakhapatnam",
  ],
  "walk-in-cold-chamber": [
    "Ahmedabad",
    "Aurangabad",
    "Baddi",
    "Bangalore",
    "Bangladesh",
    "Chennai",
    "Dehradun",
    "Delhi",
    "Ghana",
    "Goa",
    "Guwahati",
    "Haridwar",
    "Hyderabad",
    "Mumbai",
    "Nashik",
    "Nepal",
    "Nigeria",
    "Pithampur",
    "Pune",
    "Vadodara",
    "Vapi",
    "Vietnam",
    "Visakhapatnam",
  ],
  "walk-in-deep-freezer": [
    "Ahmedabad",
    "Aurangabad",
    "Baddi",
    "Bangalore",
    "Chennai",
    "Dehradun",
    "Delhi",
    "Goa",
    "Guwahati",
    "Haridwar",
    "Hyderabad",
    "Mumbai",
    "Nashik",
    "Pithampur",
    "Pune",
    "Vadodara",
    "Vapi",
    "Visakhapatnam",
  ],
  "walk-in-humidity-chamber": [
    "Ahmedabad",
    "Aurangabad",
    "Baddi",
    "Bangalore",
    "Bangladesh",
    "Chennai",
    "Dehradun",
    "Delhi",
    "Ghana",
    "Goa",
    "Guwahati",
    "Haridwar",
    "Hyderabad",
    "Mumbai",
    "Mumbai-2",
    "Nashik",
    "Nepal",
    "Nigeria",
    "Pithampur",
    "Pune",
    "Vadodara",
    "Vapi",
    "Vietnam",
    "Visakhapatnam",
  ],
};

const VCARDS = [
  "aarti-avhad",
  "akant-thok",
  "akshada-shinde",
  "akshay-dighe",
  "altaf-shaikh",
  "anant-shantilal-baisane",
  "anita-kanse",
  "ankita-kale",
  "anuprita-pachore",
  "ashish-anil-shinde",
  "asmita-pawar",
  "balkrishna-kubal",
  "bhagwat-badgujar",
  "bipin-badgujar",
  "d-gaikwad",
  "devika-pange",
  "dnyaneshwar-gaikwad",
  "dr-kiran-badgujar",
  "durgesh-kuwar",
  "harshal-ghoge",
  "hemnath-yadav",
  "jayashri-bagul",
  "jitendra-tajanpure",
  "jyoti-jamdar",
  "kaveri-dhamale",
  "kiran-aher",
  "komal-kate",
  "manohar-patade",
  "maushmi-bankar",
  "mithesh-rai",
  "mrunali-sali",
  "nanda-kumar",
  "nikhil-badhe",
  "nilesh-patil",
  "nirav-joshi",
  "parth-prajapati",
  "pooja-kolse",
  "rahul-khairnar",
  "ramesh-mali",
  "ramprasad-bairagi",
  "rohan-gujarathi",
  "rohan-shelke",
  "rohit-anil-badgujar",
  "rohit-kokate",
  "roshan-patil",
  "rushikesh-chaure",
  "rushikesh-gangurde",
  "sagar-ranmale",
  "sakshi-gujrathi",
  "samir-ekhande",
  "sandip-kale",
  "sanjay-bhosle",
  "shalaka-nargolkar",
  "shital-ghorpade",
  "shivnesh-dandgavhal",
  "shubham-badgujar",
  "shubham-pawar",
  "shubhangi-gaikhe",
  "sonali-shirsath",
  "sunil-sathe",
  "suvarna-palde",
  "tejaswi-kadlag",
  "urmila-gurav",
  "vikas-patole",
  "vikrant-deshpande",
  "vikrant-shewale",
  "yash-gujarathi",
  "vijay-mahajan",
  "ashwini-sangale",
  "priyanka-mithe",
  "tejal-shinde",
  "yogeeta-pawar",
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Home & Core Pages
xml +=
  "\n  <!-- ============================================================ -->\n";
xml +=
  "  <!-- HOME & CORE PAGES                                            -->\n";
xml +=
  "  <!-- ============================================================ -->\n\n";
MAIN_PAGES.forEach((page) => {
  xml += `  <url>\n`;
  xml += `    <loc>${DOMAIN}${page.path}${page.path.endsWith("/") || page.path === "" ? "" : "/"}</loc>\n`;
  xml += `  </url>\n`;
});

// Product Pages
xml +=
  "\n  <!-- ============================================================ -->\n";
xml +=
  "  <!-- PRODUCT PAGES                                                -->\n";
xml +=
  "  <!-- ============================================================ -->\n\n";
PRODUCTS.forEach((prod) => {
  xml += `  <url>\n`;
  xml += `    <loc>${DOMAIN}/products/${prod}/</loc>\n`;
  xml += `  </url>\n`;
});

// City-Wise Landing Pages
xml +=
  "\n  <!-- ============================================================ -->\n";
xml +=
  "  <!-- CITY-WISE LANDING PAGES                                      -->\n";
xml +=
  "  <!-- ============================================================ -->\n\n";
CITY_BASE_PRODUCTS.forEach((prod) => {
  const cities = PRODUCT_CITY_MAPPING[prod.slugPart] || [];
  cities.forEach((city) => {
    const citySlug = city.toLowerCase();
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}/${prod.slugPart}-manufacturers-and-suppliers-in-${citySlug}/</loc>\n`;
    xml += `  </url>\n`;
  });
});

// V-Cards excluded from sitemap for SEO focus on product pages

xml += "\n</urlset>";

fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), xml);
console.log("Sitemap generated successfully in public/sitemap.xml");
console.log(`  - ${MAIN_PAGES.length} core pages`);
console.log(`  - ${PRODUCTS.length} product pages`);
console.log(
  `  - City-wise pages: ${CITY_BASE_PRODUCTS.reduce((acc, p) => acc + (PRODUCT_CITY_MAPPING[p.slugPart]?.length || 0), 0)}`,
);
console.log(`  - ${VCARDS.length} v-cards`);
