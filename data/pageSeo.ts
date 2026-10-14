// Single source of truth for page-level SEO. Used by components/SEO.tsx (runtime)
// and scripts/prerender.entry.ts (build-time static HTML). Facts come from public/content.md.
export const SITE_URL = "https://www.aureolepharmatech.com";

export const DEFAULT_SEO = {
  title: "Stability Chambers & Pharmaceutical Equipment Manufacturer, Nashik | Aureole Pharma Tech",
  description:
    "Aureole Pharma Tech manufactures stability chambers, walk-in chambers, table-top instruments, cleanroom equipment and laboratory furniture in Nashik, Maharashtra. Call +91 86005 22240.",
};

export interface PageSeo { title: string; description: string; h1: string; summary: string }

// Keys: path without trailing slash ("/" for home).
export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    ...DEFAULT_SEO,
    h1: "Pharmaceutical Stability Chambers & Laboratory Equipment Manufacturer",
    summary:
      "Aureole Pharma Tech is a Nashik-based manufacturer of stability chambers, walk-in chambers, ovens, freezers, table-top instruments, cleanroom equipment and modular laboratory furniture for pharmaceutical and research laboratories.",
  },
  "/products": {
    title: "Pharmaceutical Equipment Catalogue: Stability Chambers, Instruments, Lab Furniture | Aureole",
    description:
      "Browse Aureole Pharma Tech's catalogue of stability chambers, incubators, freezers, ovens, baths, cleanroom equipment and modular laboratory furniture, made in Nashik.",
    h1: "Pharmaceutical & Laboratory Equipment Catalogue",
    summary: "Stability chambers, table-top instruments and laboratory furniture manufactured by Aureole Pharma Tech.",
  },
  "/products/stability-chambers": {
    title: "Stability Chambers & Walk-in Chambers Manufacturer in India | Aureole Pharma Tech",
    description:
      "Stability chambers, humidity chambers, BOD and cooling incubators, deep freezers, photostability chambers and walk-in chambers. Manufactured in Nashik, supplied across India.",
    h1: "Stability Chambers & Environmental Test Equipment",
    summary: "Reach-in and walk-in stability chambers, incubators, freezers and ovens for pharmaceutical stability studies.",
  },
  "/products/table-top-instruments": {
    title: "Table Top Instruments: Ultrasonic, Water, Steam & Oil Baths | Aureole Pharma Tech",
    description:
      "Ultrasonic baths, water baths, steam baths, oil baths, dry baths and air samplers for pharmaceutical and research laboratories, manufactured by Aureole Pharma Tech.",
    h1: "Table Top Laboratory Instruments",
    summary: "Ultrasonic, water, steam, oil and dry baths plus air samplers for laboratory use.",
  },
  "/products/laboratory-furniture": {
    title: "Modular Laboratory Furniture & Stainless Steel Accessories | Aureole Pharma Tech",
    description:
      "Modular laboratory benches, fume hoods, storage cabinets, sinks and stainless steel accessories for pharmaceutical and research laboratories. Made in Nashik, India.",
    h1: "Modular Laboratory Furniture",
    summary: "Laboratory benches, cabinets, fume hoods and stainless steel accessories.",
  },
  "/service": {
    title: "Stability Chamber Service, Calibration & Validation Support | Aureole Pharma Tech",
    description:
      "Installation, preventive maintenance, calibration, IQ/OQ/PQ validation support and troubleshooting for stability chambers and GMP-critical laboratory equipment.",
    h1: "Service, Maintenance & Validation Support",
    summary: "Installation, preventive maintenance, AMC/CAMC maintenance, calibration, IQ/OQ/PQ validation and re-qualification.",
  },
  "/software": {
    title: "Chamber Monitoring Software: 21 CFR Part 11, SCADA & Alerts | Aureole Pharma Tech",
    description:
      "Monitoring software for pharmaceutical chambers that supports 21 CFR Part 11 requirements: access controls, electronic signatures and audit trails, plus SCADA integration and SMS/email deviation alerts.",
    h1: "Pharmaceutical Equipment Monitoring Software",
    summary: "Real-time monitoring with audit trails, electronic signatures, SCADA integration and deviation alerts.",
  },
  "/events": {
    title: "Events & Exhibitions Gallery | Aureole Pharma Tech",
    description: "Photos and videos from exhibitions and corporate events attended by Aureole Pharma Tech.",
    h1: "Events & Exhibitions",
    summary: "Gallery of exhibitions and corporate events.",
  },
  "/about": {
    title: "About Aureole Pharma Tech: Nashik Pharmaceutical Equipment Manufacturer",
    description:
      "Aureole Pharma Tech is led by Managing Director Dr. Kiran Badgujar and builds stability chambers and laboratory equipment from Nashik, Maharashtra, India.",
    h1: "About Aureole Pharma Tech",
    summary: "Company overview, leadership and ventures.",
  },
  "/about/certification-compliance": {
    title: "Certifications: ISO 9001:2015, CE & ZED Gold | Aureole Pharma Tech",
    description:
      "Aureole Pharma Tech quality and regulatory credentials including ISO 9001:2015, CE and ZED Gold, with design focus on USFDA and ICH frameworks.",
    h1: "Certification & Compliance",
    summary: "ISO 9001:2015, CE and ZED Gold certifications.",
  },
  "/about/plants": {
    title: "Manufacturing Plants in Malegaon MIDC, Sinnar, Nashik | Aureole Pharma Tech",
    description:
      "Aureole Pharma Tech operates manufacturing facilities for stand-alone chambers, walk-in chambers and table-top instruments in Malegaon MIDC, Sinnar, Nashik.",
    h1: "Our Manufacturing Plants",
    summary: "Plants for stand-alone chambers, walk-in chambers and table-top instruments in Sinnar, Nashik.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Aureole Pharma Tech",
    description: "How Aureole Pharma Tech collects, uses and protects personal information submitted through enquiry, careers and contact forms.",
    h1: "Privacy Policy",
    summary: "What personal information we collect, why, who processes it, and how to contact us about it.",
  },
  "/careers": {
    title: "Careers at Aureole Pharma Tech, Nashik",
    description: "Open roles and career opportunities at Aureole Pharma Tech, a pharmaceutical equipment manufacturer in Nashik, Maharashtra.",
    h1: "Careers at Aureole Pharma Tech",
    summary: "Join the team building pharmaceutical stability and laboratory equipment.",
  },
};

const humanize = (s: string) => s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export const breadcrumbLd = (url: string, title: string) => {
  const segs = url.replace(SITE_URL, "").split("/").filter(Boolean);
  const items = [{ name: "Home", item: `${SITE_URL}/` }];
  segs.forEach((s, i) =>
    items.push({
      name: i === segs.length - 1 ? title.split(/[|,]/)[0].trim() : humanize(s),
      item: `${SITE_URL}/${segs.slice(0, i + 1).join("/")}/`,
    })
  );
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, ...it })),
  };
};

export const faqLd = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
});

/** Product schema from verified catalogue data only (no price/rating/offer is invented). */
export const productLd = (name: string, description: string, url: string, images: string[] = []) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${url}#product`,
  name,
  description: description.replace(/\s+/g, " ").trim().slice(0, 500),
  url,
  image: images.slice(0, 3).map((i) => (i.startsWith("http") ? i : encodeURI(`${SITE_URL}${i}`))),
  brand: { "@type": "Brand", name: "Aureole Pharma Tech" },
  manufacturer: { "@id": `${SITE_URL}/#organization` },
});
