
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
    image: 'https://images.unsplash.com/photo-1579154273105-08197771746f?auto=format&fit=crop&q=80&w=1200',
    specs: { range: '-20°C to 200°C', stability: '± 0.01°C', controller: 'Digital PID' }
  },
  {
    id: 'hot-air-oven',
    name: 'Hot Air Oven',
    code: 'SERIES-HAO-INDUSTRIAL',
    category: 'Sterilization',
    description: 'Stainless steel forced convection oven designed for consistent dry-heat sterilization and glassware drying in sterile manufacturing environments.',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200',
    specs: { range: 'Amb. to 300°C', uniformity: '± 2.5°C', material: 'SS 304/316' }
  },
  {
    id: 'air-sampler',
    name: 'Microbial Air Sampler',
    code: 'MAS-G100-10C',
    category: 'Monitoring',
    description: 'Handheld precision air sampling system with touchscreen interface for cleanroom environmental monitoring and USP <797> compliance.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
    specs: { flow: '100 LPM', display: 'Color Touch', compliance: '21 CFR Part 11' }
  },
  {
    id: 'bod-incubator',
    name: 'BOD Incubator',
    code: 'SERIES-BOD-INC',
    category: 'Incubation',
    description: 'Biological Oxygen Demand incubator with glass observation window and precise thermal stability for culture growth and waste water analysis.',
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1200',
    specs: { range: '5°C to 60°C', sensor: 'PT-100', airflow: 'Forced Circular' }
  },
  {
    id: 'ultrasonic-cleaner',
    name: 'Ultrasonic Cleaner',
    code: 'SERIES-USC-TANK',
    category: 'Cleaning',
    description: 'Industrial-grade ultrasonic decontamination tank for deep cleaning of delicate laboratory equipment and surgical instruments.',
    image: 'https://images.unsplash.com/photo-1581093199185-ce4763e0ad6a?auto=format&fit=crop&q=80&w=1200',
    specs: { frequency: '40 KHz', capacity: '10-50 Liters', timer: '0-99 Min' }
  },
  {
    id: 'stability-chamber',
    name: 'Stability Chamber',
    code: 'SERIES-SC-900',
    category: 'Stability',
    description: 'ICH compliant environmental chamber for long-term storage testing and drug substance validation studies.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
    specs: { humidity: '20% to 95% RH', range: '10°C to 70°C', data: 'USB/Ethernet' }
  }
];
