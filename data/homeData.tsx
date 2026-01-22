
import React from 'react';
import { Microscope, Activity, FlaskConical, Thermometer, Gauge, Cpu, Zap, ShieldCheck, Settings } from 'lucide-react';

/**
 * Custom Technical SVG Icons for Brand Values
 */
export const IconAdherence = ({ size = 20 }) => (
    <svg width= { size } height = { size } viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" strokeWidth = "1.5" strokeLinecap = "round" strokeLinejoin = "round" >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M8 11h8" strokeDasharray = "2 2" />
                <circle cx="12" cy = "11" r = "3" />
                    </svg>
);

export const IconUbiquitous = ({ size = 20 }) => (
    <svg width= { size } height = { size } viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" strokeWidth = "1.5" strokeLinecap = "round" strokeLinejoin = "round" >
        <circle cx="12" cy = "12" r = "10" strokeOpacity = "0.2" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <circle cx="12" cy = "12" r = "2" fill = "currentColor" />
                    </svg>
);

export const IconRecognition = ({ size = 20 }) => (
    <svg width= { size } height = { size } viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" strokeWidth = "1.5" strokeLinecap = "round" strokeLinejoin = "round" >
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                        <circle cx="12" cy = "10" r = "5" />
                            </svg>
);

export const IconExpertise = ({ size = 20 }) => (
    <svg width= { size } height = { size } viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" strokeWidth = "1.5" strokeLinecap = "round" strokeLinejoin = "round" >
        <path d="m12 2 10 5-10 5-10-5z" />
            <path d="m2 17 10 5 10-5" />
                <path d="m2 12 10 5 10-5" />
                    <path d="M12 2v10" strokeOpacity = "0.3" />
                        </svg>
);

export const IconOptimal = ({ size = 20 }) => (
    <svg width= { size } height = { size } viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" strokeWidth = "1.5" strokeLinecap = "round" strokeLinejoin = "round" >
        <path d="M3 12a9 9 0 0 1 18 0" />
            <path d="M12 12V7" />
                <circle cx="12" cy = "12" r = "1" fill = "currentColor" />
                    <path d="M19.4 15a9 9 0 0 1-14.8 0" strokeOpacity = "0.2" />
                        <path d="M12 2v2M20 12h2M2 12h2" />
                            </svg>
);

export const IconLongevity = ({ size = 20 }) => (
    <svg width= { size } height = { size } viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" strokeWidth = "1.5" strokeLinecap = "round" strokeLinejoin = "round" >
        <path d="M22 12c0 6-4.39 10-10 10S2 18 2 12s4.39-10 10-10 10 4.39 10 10z" strokeOpacity = "0.2" />
            <path d="M12 6v6l4 2" />
                <path d="M16.24 7.76a6 6 0 1 0 0 8.48" />
                    </svg>
);

export const IconEnthusiastic = ({ size = 20 }) => (
    <svg width= { size } height = { size } viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" strokeWidth = "1.5" strokeLinecap = "round" strokeLinejoin = "round" >
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
            <path d="M13 2 9 7" strokeOpacity = "0.3" />
                <path d="M11 22 15 17" strokeOpacity = "0.3" />
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
