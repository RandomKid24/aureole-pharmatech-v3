
export interface ProductSpec {
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  description: string;
  image: string;
  category: string;
  specs: ProductSpec;
}

/**
 * Aureole Pharmatech Product Portfolio
 * Organized by model images provided
 */
export const PRODUCT_CATALOG: Product[] = [
  {
    id: 'heating-circulator',
    name: 'Heating Refrigerated Circulator',
    code: 'SERIES-HRC-500',
    category: 'Thermal Control',
    description: 'High-precision liquid temperature control system with an integrated digital command unit for pharmaceutical research and chemical processing.',
    image: '/products/TableTop/refrigerated-circular-bath.png',
    specs: { range: '-20°C to 200°C', stability: '± 0.01°C', controller: 'Digital PID' }
  },
  {
    id: 'hot-air-oven',
    name: 'Hot Air Oven',
    code: 'SERIES-HAO-INDUSTRIAL',
    category: 'Sterilization',
    description: 'Stainless steel forced convection oven designed for consistent dry-heat sterilization and glassware drying in sterile manufacturing environments.',
    image: '/products/StablilityChamber-Standalone/hot-air-oven.png',
    specs: { range: 'Amb. to 300°C', uniformity: '± 2.5°C', material: 'SS 304/316' }
  },
  {
    id: 'air-sampler',
    name: 'Microbial Air Sampler',
    code: 'MAS-G100-10C',
    category: 'Monitoring',
    description: 'Handheld precision air sampling system with touchscreen interface for cleanroom environmental monitoring and USP <797> compliance.',
    image: '/products/AirSampler/air-sampler-basic-1.png',
    specs: { flow: '100 LPM', display: 'Color Touch', compliance: '21 CFR Part 11' }
  },
  {
    id: 'bod-incubator',
    name: 'BOD Incubator',
    code: 'SERIES-BOD-INC',
    category: 'Incubation',
    description: 'Biological Oxygen Demand incubator with glass observation window and precise thermal stability for culture growth and waste water analysis.',
    image: '/products/StablilityChamber-Standalone/BODINCUBATOR.png',
    specs: { range: '5°C to 60°C', sensor: 'PT-100', airflow: 'Forced Circular' }
  },
  {
    id: 'vacuum-oven',
    name: 'Vacuum Oven',
    code: 'SERIES-VO-HEAVY',
    category: 'Sterilization',
    description: 'Heavy-duty rectangular vacuum oven designed for rapid and gentle drying of heat-sensitive materials under controlled vacuum conditions.',
    image: '/products/StablilityChamber-Standalone/vacuum-oven.png',
    specs: { vacuum: '760 mmHg', range: '50°C to 200°C', material: 'SS 316L' }
  },
  {
    id: 'walk-in-chamber',
    name: 'Walk-In Stability Chamber',
    code: 'SERIES-WIC-2000',
    category: 'Stability',
    description: 'Large-capacity modular walk-in environmental chamber for high-volume stability testing compliant with ICH Q1A guidelines.',
    image: '/products/StablilityChamber-Standalone/walk-in-humidity-chamber.png',
    specs: { volume: '2000L - 10000L', humidity: '20% to 95% RH', control: 'PLC HMI' }
  }
];
