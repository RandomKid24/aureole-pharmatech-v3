
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
        id: 'walk-in-bod-incubator',
        name: 'WALK IN BOD INCUBATOR',
        category: 'WALK-IN',
        image: '/products/StablilityChamber-Standalone/walk-in-bod-incubator.png',
        description: 'Premium walk-in Incubators for precise and uniform temperature conditions inside the chamber.',
        specs: { 'Range': '10°C to 60°C', 'Accuracy': '± 0.2°C' }
    },
    {
        id: 'humidity-chamber-stability-chamber',
        name: 'HUMIDITY CHAMBER',
        category: 'STABILITY',
        image: '/products/StablilityChamber-Standalone/humidity-chamber.png',
        description: 'Precise environmental control for long-term stability studies and ICH compliance.',
        specs: { 'Range': '20°C to 60°C', 'Humidity': '40% to 95% RH' }
    },
    {
        id: 'ultra-low-deep-freezer-80c',
        name: 'ULTRA LOW FREEZER',
        category: 'STABILITY',
        image: '/products/StablilityChamber-Standalone/ultra-ultra-deep-freezer.jpeg',
        description: 'Ultra-low temperature storage for sensitive biological samples and vaccines.',
        specs: { 'Range': 'Upto -80°C', 'Control': 'PLC Based' }
    },
    {
        id: 'muffle-furnace',
        name: 'MUFFLE FURNACE',
        category: 'STABILITY',
        image: '/products/StablilityChamber-Standalone/muffle-furnace.png',
        description: 'Designed for high-temperature applications up to 1150°C with precise heat treatment.',
        specs: { 'Range': 'Upto 1150°C', 'Accuracy': '± 5°C' }
    },
    {
        id: 'eco-series',
        name: 'ECO SERIES',
        category: 'ULTRASONIC',
        image: '/products/TableTop/eco-series.png',
        description: 'Efficient ultrasonic cleaning solutions for laboratory and healthcare use.',
        specs: { 'Cleaning': 'Ultrasonic', 'Control': 'Analog/Digital' }
    },
    {
        id: 'steam-bath',
        name: 'STEAM BATH',
        category: 'WATER BATHS',
        image: '/products/TableTop/steam-bath.png',
        description: 'Advanced version water bath maintaining 100°C for microbiology and production.',
        specs: { 'Range': 'Amb + 5 to 100°C', 'Accuracy': '± 2°C' }
    },
    {
        id: 'constant-water-bath',
        name: 'CONSTANT WATER BATH',
        category: 'WATER BATHS',
        image: '/products/TableTop/constant-water-bath.png',
        description: 'Heated water testing cabinet for biological labs and sensitive specimen incubation.',
        specs: { 'Range': 'Amb + 5 to 99.9°C', 'Accuracy': '± 0.5°C' }
    },
    {
        id: 'oil-bath',
        name: 'OIL BATH',
        category: 'WATER BATHS',
        image: '/products/TableTop/oil-bath.png',
        description: 'Stable high-temperature immersion for chemical laboratories up to 250°C.',
        specs: { 'Range': '50°C to 250°C', 'Accuracy': '± 2°C' }
    },
    {
        id: 'air-sampler-basic-model',
        name: 'AIR SAMPLER BASIC 4',
        category: 'AIR SAMPLER',
        image: '/products/AirSampler/air-sampler-basic-4.png',
        description: 'Advanced air sampling system for environmental monitoring and QC applications.',
        specs: { 'Flow Rate': '25-200 L/min', 'Volume': '25-2000 L' }
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
