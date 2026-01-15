
import { ShieldCheck, Globe, FileCheck, Layers, Gauge, Activity, Zap, Microscope, FlaskConical, Thermometer, Database } from 'lucide-react';
import React from 'react';
import { CLIENT_LOGOS } from './data/clients';
import { PRODUCT_CATALOG } from './data/products';

/**
 * Custom Technical SVG Icons for Brand Values
 */
const IconAdherence = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M8 11h8" strokeDasharray="2 2" />
    <circle cx="12" cy="11" r="3" />
  </svg>
);

const IconUbiquitous = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const IconRecognition = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <circle cx="12" cy="10" r="5" />
  </svg>
);

const IconExpertise = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 2 10 5-10 5-10-5z" />
    <path d="m2 17 10 5 10-5" />
    <path d="m2 12 10 5 10-5" />
    <path d="M12 2v10" strokeOpacity="0.3" />
  </svg>
);

const IconOptimal = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 18 0" />
    <path d="M12 12V7" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <path d="M19.4 15a9 9 0 0 1-14.8 0" strokeOpacity="0.2" />
    <path d="M12 2v2M20 12h2M2 12h2" />
  </svg>
);

const IconLongevity = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12c0 6-4.39 10-10 10S2 18 2 12s4.39-10 10-10 10 4.39 10 10z" strokeOpacity="0.2" />
    <path d="M12 6v6l4 2" />
    <path d="M16.24 7.76a6 6 0 1 0 0 8.48" />
  </svg>
);

const IconEnthusiastic = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    <path d="M13 2 9 7" strokeOpacity="0.3" />
    <path d="M11 22 15 17" strokeOpacity="0.3" />
  </svg>
);

/**
 * Global product list derived from organized catalog for Homepage Showcase
 */
export const PRODUCTS = [
  {
    id: 'stability-chambers',
    name: 'STABILITY CHAMBER',
    category: 'STABILITY',
    image: '/products/Stability/Humidity-Chamber.jpg',
    description: 'Precise environmental control for long-term stability studies and ICH compliance.',
    specs: { 'Control': 'HMI / PLC', 'Range': '-20°C to 80°C' }
  },
  {
    id: 'walk-in-rooms',
    name: 'WALK-IN CHAMBER',
    category: 'WALK-IN',
    image: '/products/WalkIn/Walk-In-Room.jpg',
    description: 'Large-scale environmental rooms with modular design and uniform airflow.',
    specs: { 'Volume': 'Upto 50,000L', 'Uniformity': '± 1°C' }
  },
  {
    id: 'deep-freezers',
    name: 'DEEP FREEZER',
    category: 'STABILITY',
    image: '/products/Stability/Deep-Freezer.jpg',
    description: 'High-performance ultra-low cooling for critical sample preservation.',
    specs: { 'Cooling': 'Cascade Sys', 'Temp': '-80°C' }
  }
];

/**
 * A-U-R-E-O-L-E Brand Values
 */
export const AUREOLE_VALUES = [
  { letter: 'A', title: 'Adherence', icon: <IconAdherence />, desc: 'Strict compliance with USFDA and ICH regulatory frameworks.' },
  { letter: 'U', title: 'Ubiquitous', icon: <IconUbiquitous />, desc: 'Support network across all major global pharmaceutical hubs.' },
  { letter: 'R', title: 'Recognition', icon: <IconRecognition />, desc: 'Certified engineering excellence in thermodynamic research.' },
  { letter: 'E', title: 'Expertise', icon: <IconExpertise />, desc: 'Deep technical focus in controlled environmental logic.' },
  { letter: 'O', title: 'Optimal', icon: <IconOptimal />, desc: 'Energy-efficient designs maximizing resource utilization.' },
  { letter: 'L', title: 'Longevity', icon: <IconLongevity />, desc: 'Industrial machinery built for long-term operational cycles.' },
  { letter: 'E', title: 'Enthusiastic', icon: <IconEnthusiastic />, desc: 'Innovation-driven engineering for precision automation.' }
];

/**
 * Map client logos to assets. 
 */
const placeholderIds = [
  '1587854692152-cbe660dbbb88', '1532187875605-1838d73706d4', '1579154273105-08197771746f',
  '1581093199185-ce4763e0ad6a', '1563013544-824ae1b704d3', '1581093806997-124204d9ad9d',
  '1512428559087-560fa5ceab42', '1560179707-f14e90ef3623', '1551288049-bebda4e38f71',
  '1554469384-e58fac16e23a'
];

export const CLIENTS = CLIENT_LOGOS.map((client, i) => ({
  name: client.name,
  logo: client.logo || `https://images.unsplash.com/photo-${placeholderIds[i % placeholderIds.length]}?auto=format&fit=crop&q=80&w=400`
}));
