
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
    id: 'stability-chamber',
    name: 'Stability Chamber',
    code: 'SERIES-SC-1000',
    category: 'Environmental',
    description: 'Precision-controlled stability chambers for long-term storage and testing of pharmaceutical products, compliant with ICH guidelines.',
    image: '/products/StablilityChamber-Standalone/walk-in-humidity-chamber.png',
    specs: { range: '10°C to 60°C', humidity: '20% to 95% RH', control: 'PLC HMI' }
  },
  {
    id: 'table-top-instruments',
    name: 'Table Top Instruments',
    code: 'SERIES-TTI-500',
    category: 'Laboratory',
    description: 'Compact, high-precision laboratory instruments including circulators, baths, and shakers for daily research and testing requirements.',
    image: '/products/TableTop/refrigerated-circular-bath.png',
    specs: { range: '-20°C to 200°C', stability: '± 0.01°C', controller: 'Digital PID' }
  },
  {
    id: 'lab-furniture',
    name: 'Lab Furniture',
    code: 'SERIES-LF-MODULAR',
    category: 'Infrastructure',
    description: 'Ergonomic and durable modular laboratory furniture designed for high-density pharmaceutical research environments and cleanroom standards.',
    image: '/products/accessories/test-tube-racks-wire-mesh.png',
    specs: { material: 'SS 304/316', type: 'Modular', compliance: 'GxP Standard' }
  }
];
