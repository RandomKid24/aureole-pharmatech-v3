
import React from 'react';
import { Microscope, Activity, FlaskConical, Thermometer, Gauge, Cpu, Zap, ShieldCheck, Settings } from 'lucide-react';

/**
 * Custom Technical SVG Icons for Brand Values
 */
export const IconAdherence = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

export const IconUbiquitous = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

export const IconRecognition = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
);

export const IconExpertise = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="15" x2="23" y2="15" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="15" x2="4" y2="15" />
    </svg>
);

export const IconOptimal = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" />
        <path d="m16.2 7.8 2.9-2.9" />
        <path d="M18 12h4" />
        <path d="m16.2 16.2 2.9 2.9" />
        <path d="M12 18v4" />
        <path d="m4.9 19.1 2.9-2.9" />
        <path d="M2 12h4" />
        <path d="m4.9 4.9 2.9 2.9" />
    </svg>
);

export const IconLongevity = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

export const IconEnthusiastic = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
);

export const PRODUCTS = [
    {
        id: 'humidity-chamber-stability-chamber',
        name: 'HUMIDITY CHAMBER',
        category: 'STABILITY',
        image: '/products/StablilityChamber-Standalone/humidity-chamber.png',
        description: 'Precise environmental control for long-term stability studies and ICH compliance.',
        specs: { 'Range': '20°C to 60°C', 'Humidity': '40% to 95% RH' }
    },
    {
        id: 'deep-freezer-upto-20c-upto-40c',
        name: 'DEEP FREEZER',
        category: 'STABILITY',
        image: '/products/StablilityChamber-Standalone/deep-freezer.png',
        description: 'High-performance ultra-low cooling for critical sample preservation.',
        specs: { 'Range': '-25°C to -40°C', 'Control': 'Microprocessor' }
    },
    {
        id: 'bod-incubator',
        name: 'BOD INCUBATOR',
        category: 'STABILITY',
        image: '/products/StablilityChamber-Standalone/BODINCUBATOR.png',
        description: 'Reliable incubation for biochemical oxygen demand testing.',
        specs: { 'Range': '5°C to 60°C', 'Stability': '± 0.5°C' }
    },
    {
        id: 'ultra-low-deep-freezer-80c',
        name: 'ULTRA LOW FREEZER',
        category: 'STABILITY',
        image: '/products/StablilityChamber-Standalone/ultra-low-deep-freezer.png',
        description: 'Ultra-low temperature storage for sensitive biological samples.',
        specs: { 'Range': 'Upto -80°C', 'Control': 'PLC Based' }
    },
    {
        id: 'hot-air-oven',
        name: 'HOT AIR OVEN',
        category: 'STABILITY',
        image: '/products/StablilityChamber-Standalone/hot-air-oven.png',
        description: 'Uniform heating and drying for laboratory and industrial applications.',
        specs: { 'Range': 'Ambient +5°C to 250°C', 'Control': 'Microprocessor' }
    },
    {
        id: 'walk-in-humidity-chamber',
        name: 'WALK-IN HUMIDITY',
        category: 'WALK-IN',
        image: '/products/StablilityChamber-Standalone/walk-in-humidity-chamber.png',
        description: 'Large-scale environmental rooms with modular design and uniform airflow.',
        specs: { 'Range': '20°C to 60°C', 'Control': '7" Touch HMI' }
    },
    {
        id: 'walk-in-deep-freezer',
        name: 'WALK-IN FREEZER',
        category: 'WALK-IN',
        image: '/products/StablilityChamber-Standalone/walk-in-deep-freezer.png',
        description: 'Walk-in cold storage solutions for large quantities.',
        specs: { 'Range': 'Upto -20°C', 'Control': 'PLC Based' }
    },
    {
        id: 'cold-chamber',
        name: 'COLD CHAMBER',
        category: 'STABILITY',
        image: '/products/StablilityChamber-Standalone/cold-chamber.png',
        description: 'Controlled cold storage for pharmaceutical and clinical samples.',
        specs: { 'Range': '2°C to 8°C', 'Control': 'Microprocessor' }
    },
    {
        id: 'walk-in-cold-chamber',
        name: 'WALK-IN COLD',
        category: 'WALK-IN',
        image: '/products/StablilityChamber-Standalone/walk-in-cold-chamber.png',
        description: 'Walk-in cold rooms for high-capacity temperature-controlled storage.',
        specs: { 'Range': '2°C to 8°C', 'Control': 'PLC Based' }
    },
    {
        id: 'eco-series',
        name: 'ECO SERIES',
        category: 'ULTRASONIC',
        image: '/products/TableTop/eco-series.png',
        description: 'Efficient ultrasonic cleaning solutions for laboratory use.',
        specs: { 'Cleaning': 'Ultrasonic', 'Control': 'Analog/Digital' }
    },
    {
        id: 'prime-series',
        name: 'PRIME SERIES',
        category: 'ULTRASONIC',
        image: '/products/TableTop/prime-series.png',
        description: 'Premium ultrasonic baths for advanced cleaning requirements.',
        specs: { 'Cleaning': 'Ultrasonic', 'Control': 'Digital HMI' }
    },
    {
        id: 'prime-series-with-advance-controlling',
        name: 'PRIME ADVANCE',
        category: 'ULTRASONIC',
        image: '/products/TableTop/prime-series-advance-controlling.png',
        description: 'High-end ultrasonic system with advanced PLC control.',
        specs: { 'Control': 'PLC Based', 'Display': 'Touch Screen' }
    }
];

export const AUREOLE_VALUES = [
    { letter: 'A', title: 'Adherence', icon: React.createElement(IconAdherence, null), desc: 'Strict compliance with USFDA and ICH regulatory frameworks.' },
    { letter: 'U', title: 'Ubiquitous', icon: React.createElement(IconUbiquitous, null), desc: 'Support network across all major global pharmaceutical hubs.' },
    { letter: 'R', title: 'Recognition', icon: React.createElement(IconRecognition, null), desc: 'Recognized by 100+ brands.' },
    { letter: 'E', title: 'Expertise', icon: React.createElement(IconExpertise, null), desc: 'Deep technical focus in controlled environmental logic.' },
    { letter: 'O', title: 'Optimal', icon: React.createElement(IconOptimal, null), desc: 'Energy-efficient designs maximizing resource utilization.' },
    { letter: 'L', title: 'Longevity', icon: React.createElement(IconLongevity, null), desc: 'Industrial machinery built for long-term operational cycles.' },
    { letter: 'E', title: 'Enthusiastic', icon: React.createElement(IconEnthusiastic, null), desc: 'Innovation-driven engineering for precision automation.' }
];
