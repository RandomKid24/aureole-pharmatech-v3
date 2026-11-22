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

export function cityPageContent(productName: string, city: string): CityContent {
  const label = cityLabel(city);
  const region = CITY_REGION[city] || CITY_REGION[label];
  const place = region ? `${label}, ${region}` : label;
  return {
    label,
    title: `${productName} Manufacturer in ${label} | Aureole`,
    description: `Aureole Pharma Tech manufactures ${productName} in Nashik and supplies it to ${place}. Request specifications and a quote: +91 86005 22240.`,
  };
}
