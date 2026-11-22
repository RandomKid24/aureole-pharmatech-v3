// Copy for the city / country landing pages. Shared by the React page and the prerender so both say the same thing.
// Facts only: plant, offices and "15+ countries" come from BUSINESS_FACTS.md; specs come from data/products.
// City pages show the same product information as the product page; only the URL, title, meta description, H1 and breadcrumb carry the place name.
import { CITY_REGION } from "./cityWiseProducts";

/** "Mumbai-2" is a second page for Mumbai; show and canonicalise it as "Mumbai". */
export const cityLabel = (city: string) => city.replace(/-\d+$/, "");

export interface CityContent {
  label: string;
  title: string;
  description: string;
}

const COUNTRIES = new Set(["Bangladesh", "Ghana", "Nepal", "Nigeria", "Vietnam"]);

// Verified spec phrases per walk-in product (from data/products), longest first. The meta description uses the longest that fits.
const SPEC_PHRASES: Record<string, string[]> = {
  "Walk In Humidity Chamber": ["20°C to 60°C, 40% to 95% RH, models from 2,000 L to 50,000 L", "20°C to 60°C, 40% to 95% RH, ±0.3°C / ±2.0% RH", "20°C to 60°C, 40% to 95% RH"],
  "Walk In Cold Chamber": ["2°C to 8°C, ±1°C accuracy, PUF panels", "2°C to 8°C, ±1°C accuracy", "2°C to 8°C"],
  "Walk In BOD Incubator": ["10°C to 60°C, ±0.5°C accuracy, ±2.5°C uniformity", "10°C to 60°C, ±0.5°C accuracy", "10°C to 60°C"],
  "Walk In Deep Freezer": ["-5°C to -20°C or -25°C to -40°C, ±3°C accuracy", "-5°C to -20°C or -25°C to -40°C"],
};
const QUOTE = "Quote: +91 86005 22240.";
const MAX_DESCRIPTION = 158;

export function cityPageContent(productName: string, city: string): CityContent {
  const label = cityLabel(city);
  const region = CITY_REGION[city] || CITY_REGION[label];
  const place = region ? `${label}, ${region}` : label;
  return {
    label,
    // "Manufacturer" is dropped when the full title would pass 60 characters (long product plus long place name).
    title: (() => { const t = `${productName} Manufacturer in ${label} | Aureole`; return t.length <= 60 ? t : `${productName} in ${label} | Aureole`; })(),
    description: cityDescription(productName, place, COUNTRIES.has(label)),
  };
}

function cityDescription(productName: string, place: string, isCountry: boolean): string {
  const tails = isCountry
    ? [`Made in Nashik, India, exported to 15+ countries. ${QUOTE}`]
    : [`Made in Nashik, India, sold in India and exported to 15+ countries. ${QUOTE}`, `Nashik-made, sold in India and exported to 15+ countries. ${QUOTE}`, `Nashik-made, exported to 15+ countries. ${QUOTE}`];
  for (const tail of tails) {
    for (const spec of SPEC_PHRASES[productName] ?? [""]) {
      const d = `${productName} for ${place}${spec ? `: ${spec}` : ""}. ${tail}`;
      if (d.length <= MAX_DESCRIPTION) return d;
    }
  }
  return `${productName} for ${place}. ${tails[tails.length - 1]}`;
}
