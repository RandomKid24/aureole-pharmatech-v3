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

// One verified spec phrase per walk-in product (from data/products), used in the city meta description.
const SPEC_PHRASE: Record<string, string> = {
  "Walk In Humidity Chamber": "20°C to 60°C, 40% to 95% RH",
  "Walk In Cold Chamber": "2°C to 8°C",
  "Walk In BOD Incubator": "10°C to 60°C",
  "Walk In Deep Freezer": "-5°C to -20°C or -25°C to -40°C",
};

export function cityPageContent(productName: string, city: string): CityContent {
  const label = cityLabel(city);
  const region = CITY_REGION[city] || CITY_REGION[label];
  const place = region ? `${label}, ${region}` : label;
  return {
    label,
    // "Manufacturer" is dropped when the full title would pass 60 characters (long product plus long place name).
    title: (() => { const t = `${productName} Manufacturer in ${label} | Aureole`; return t.length <= 60 ? t : `${productName} in ${label} | Aureole`; })(),
    description: `${productName} for ${place}${SPEC_PHRASE[productName] ? `: ${SPEC_PHRASE[productName]}` : ''}. Nashik-made, exported to 15+ countries. Quote: +91 86005 22240.`,
  };
}
