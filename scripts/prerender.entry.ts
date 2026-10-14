// Build-time static HTML for every indexable route (head tags + crawlable fallback body).
// Built with `vite build --ssr` and executed by `npm run build`; React replaces #root on load.
import fs from "node:fs";
import path from "node:path";
import { SITE_URL, PAGE_SEO, breadcrumbLd, productLd, faqLd } from "../data/pageSeo";
import { PRODUCT_DETAILS, LISTED_PRODUCT_NAMES } from "../data/products";
import { PRODUCT_SEO_DATA } from "../data/seoMetadata";
import { PRODUCT_CITY_MAPPING, PRODUCTS } from "../data/cityWiseProducts";
import { DIRECT_ANSWERS } from "../data/directAnswers";
import { slugify } from "../utils/urlUtils";

const dist = path.resolve("dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const abs = (p: string) => (p.startsWith("http") ? p : encodeURI(`${SITE_URL}${p}`));

interface Route { path: string; title: string; description: string; h1: string; body: string; image?: string; ld: object[] }
const routes: Route[] = [];

const nav = `<nav aria-label="Main"><ul>${[
  ["/products/stability-chambers/", "Stability Chambers"],
  ["/products/table-top-instruments/", "Table Top Instruments"],
  ["/products/laboratory-furniture/", "Laboratory Furniture"],
  ["/service/", "Service"], ["/software/", "Software"], ["/about/", "About"], ["/careers/", "Careers"],
].map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul></nav>`;

for (const [p, s] of Object.entries(PAGE_SEO)) {
  const links = p === "/" || p === "/products"
    ? `<h2>Products</h2><ul>${Object.keys(PRODUCT_DETAILS).filter((n) => LISTED_PRODUCT_NAMES.has(n)).map((n) => `<li><a href="/products/${slugify(n)}/">${esc(n)}</a></li>`).join("")}</ul>`
    : "";
  const da = DIRECT_ANSWERS[p];
  const qa = da ? `<h2>${esc(da.heading)}</h2>${da.items.map((i) => `<h3>${esc(i.q)}</h3><p>${esc(i.a)}${i.link ? ` <a href="${i.link.href}">${esc(i.link.label)}</a>` : ""}</p>`).join("")}` : "";
  routes.push({ path: p, title: s.title, description: s.description, h1: s.h1, body: `<p>${esc(s.summary)}</p>${links}${qa}`, ld: da ? [faqLd(da.items.map((i) => ({ q: i.q, a: i.a })))] : [] });
}

for (const [name, d] of Object.entries(PRODUCT_DETAILS)) {
  if (!LISTED_PRODUCT_NAMES.has(name)) continue; // removed from catalog: no static page, no sitemap entry
  const slug = slugify(name);
  const url = `${SITE_URL}/products/${slug}/`;
  const seo = PRODUCT_SEO_DATA[name];
  const imgs = d.images || (d.image ? [d.image] : []);
  const specs = d.specifications.map((x) => `<tr><th>${esc(x.parameter)}</th><td>${esc(x.details)}</td></tr>`).join("");
  routes.push({
    path: `/products/${slug}`,
    title: seo?.title || `${name} Manufacturer in India | Aureole Pharma Tech`,
    description: seo?.description || d.description.slice(0, 160),
    h1: name,
    image: imgs[0],
    body: d.description.split(/\n+/).map((x) => `<p>${esc(x)}</p>`).join("") +
      (d.keyFeatures?.length ? `<h2>Key features</h2><ul>${d.keyFeatures.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : "") +
      (specs ? `<h2>Specifications</h2><table>${specs}</table>` : ""),
    ld: [productLd(name, seo?.description || d.description, url, imgs)],
  });
}

for (const prod of PRODUCTS) {
  const d = PRODUCT_DETAILS[prod.name];
  for (const city of PRODUCT_CITY_MAPPING[prod.name] || []) {
    const slug = `${prod.slugPart}-manufacturers-and-suppliers-in-${city.toLowerCase()}`;
    routes.push({
      path: `/${slug}`,
      title: `${prod.name} Manufacturers and Suppliers in ${city} | Aureole PharmaTech`,
      description: `Aureole Pharma Tech manufactures ${prod.name} in Nashik, Maharashtra and supplies it to ${city}. Call: +91 86005 22240`,
      h1: `${prod.name} in ${city}`,
      image: d?.images?.[0] || d?.image,
      body: `<p><a href="/products/${slugify(prod.name)}/">${esc(prod.name)} specifications</a></p>` + (d ? `<p>${esc(d.description.split(/\n+/)[0])}</p>` : ""),
      ld: [productLd(`${prod.name} in ${city}`, d?.description || prod.name, `${SITE_URL}/${slug}/`, d?.images || [])],
    });
  }
}

// data-rh="true" lets react-helmet-async replace these tags instead of duplicating them.
const tag = (t: string) => t.replace(/^<(\w+)/, '<$1 data-rh="true"');

for (const r of routes) {
  const url = r.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${r.path}/`;
  const img = abs(r.image || "/aureole-logo.webp");
  const head = [
    `<meta name="description" content="${esc(r.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Aureole Pharma Tech" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(r.title)}" />`,
    `<meta property="og:description" content="${esc(r.description)}" />`,
    `<meta property="og:image" content="${esc(img)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(r.title)}" />`,
    `<meta name="twitter:description" content="${esc(r.description)}" />`,
    `<meta name="twitter:image" content="${esc(img)}" />`,
    ...[breadcrumbLd(url, r.title), ...r.ld].map((n) => `<script type="application/ld+json">${JSON.stringify(n).replace(/</g, "\\u003c")}</script>`),
  ].map(tag).join("\n    ");

  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, "")
    .replace(/<link rel="canonical"[^>]*>/, "")
    .replace(/<meta property="og:[^>]*>/g, "")
    .replace(/<meta name="twitter:card"[^>]*>/, "")
    .replace("</head>", `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root"><main><h1>${esc(r.h1)}</h1>${r.body}${nav}</main></div>`);

  const out = r.path === "/" ? path.join(dist, "index.html") : path.join(dist, r.path, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
}
console.log(`prerendered ${routes.length} routes`);
