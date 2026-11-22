// "Related products" links shown on product and city pages and in their prerendered HTML.
// Only products listed in the catalogue are linked (see data/products/catalog.ts).
import { PRODUCT_CATALOG, PRODUCT_DETAILS, LISTED_PRODUCT_NAMES } from "./products";
import { slugify } from "../utils/urlUtils";

export interface RelatedLink { label: string; href: string; image?: string; note?: string }

export const COMPARISON_GUIDE: RelatedLink = {
  label: "Compare stability, humidity and BOD chambers",
  href: "/guides/stability-chamber-vs-humidity-chamber-vs-bod-incubator/",
};

// Hand-picked counterparts: the same technology in another form, or the usual next product.
const PAIRS: Record<string, string[]> = {
  "Humidity Chamber": ["Walk In Humidity Chamber", "Photostability Chamber", "BOD Incubator"],
  "BOD Incubator": ["Walk In BOD Incubator", "Humidity Chamber", "Cold Chamber"],
  "Cold Chamber": ["Walk In Cold Chamber", "Pharma Refrigerator / Dual Zone Chamber", "Deep Freezer (upto -20°C / upto -40°C)"],
  "Photostability Chamber": ["Humidity Chamber", "Walk In Humidity Chamber", "BOD Incubator"],
  "Walk In Humidity Chamber": ["Humidity Chamber", "Walk In BOD Incubator", "Walk In Cold Chamber"],
  "Walk In BOD Incubator": ["BOD Incubator", "Walk In Humidity Chamber", "Walk In Cold Chamber"],
  "Walk In Cold Chamber": ["Cold Chamber", "Walk In Deep Freezer", "Walk In Humidity Chamber"],
  "Walk In Deep Freezer": ["Deep Freezer (upto -20°C / upto -40°C)", "Ultra Low Deep Freezer (-80°C)", "Walk In Cold Chamber"],
  "Deep Freezer (upto -20°C / upto -40°C)": ["Walk In Deep Freezer", "Ultra Low Deep Freezer (-80°C)", "Cold Chamber"],
  "Hot Air Oven": ["Vacuum Oven", "Muffle Furnance", "BOD Incubator"],
  "Vacuum Oven": ["Hot Air Oven", "Muffle Furnance", "BOD Incubator"],
  "Muffle Furnance": ["Hot Air Oven", "Vacuum Oven", "Humidity Chamber"],
  "Ultra Low Deep Freezer (-80°C)": ["Deep Freezer (upto -20°C / upto -40°C)", "Walk In Deep Freezer", "Cold Chamber"],
};

const WITH_COMPARISON = new Set(["Humidity Chamber", "BOD Incubator", "Walk In Humidity Chamber", "Walk In BOD Incubator", "Photostability Chamber"]);

const toLink = (name: string): RelatedLink => {
  const d = PRODUCT_DETAILS[name];
  return { label: name, href: `/products/${slugify(name)}/`, image: d?.images?.[0] || d?.image };
};

/** Up to `max` related products for `name` (never the product itself), hand-picked first, then same family. */
export function relatedProducts(name: string, max = 4): RelatedLink[] {
  const out: string[] = [];
  const add = (n: string) => { if (n !== name && LISTED_PRODUCT_NAMES.has(n) && !out.includes(n)) out.push(n); };
  (PAIRS[name] || []).forEach(add);
  const family = PRODUCT_CATALOG.flatMap((c) => c.subTypes.map((s) => ({ c, s }))).find(({ s }) => s.products.includes(name));
  family?.s.products.forEach(add);
  family?.c.subTypes.forEach((s) => s.products.forEach(add));
  return out.slice(0, max).map(toLink);
}

/** Links for the section on a product page: related products plus the comparison guide where it applies. */
export function relatedSection(name: string, { includeSelf = false }: { includeSelf?: boolean } = {}): RelatedLink[] {
  const list = relatedProducts(name, includeSelf ? 3 : 4);
  if (includeSelf) list.unshift({ ...toLink(name), label: `${name} specifications`, note: "Full specifications" });
  if (WITH_COMPARISON.has(name)) list.push(COMPARISON_GUIDE);
  return list;
}
