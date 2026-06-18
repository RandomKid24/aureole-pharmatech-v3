import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Hero from './Home/sections/Hero';
import About from './Home/sections/About';
import ManagingDirectorProfile from './Home/sections/ManagingDirectorProfile';
import PrecisionEngineeredSystems from './Home/sections/PrecisionEngineeredSystems';
import IndustriesServed from './Home/sections/IndustriesServed';
import GlobalValidation from './Home/sections/GlobalValidation';
import HomeFaq from './Home/sections/HomeFaq';
import OurUnitsContact from './Home/sections/OurUnitsContact';
import ScrollToTop from '../components/ScrollToTop';

const Home: React.FC = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const animatedSections = document.querySelectorAll('section');
        animatedSections.forEach(sec => {
            sec.classList.add('reveal');
            observer.observe(sec);
        });

        // Handle direct hash navigation on mount
        if (window.location.hash === '#contact') {
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500); // Wait for animations/load
        }

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <SEO 
                title="Stability Chamber, Pharmaceutical Equipment, Aureole Pharma Tech"
                description="Aureole Pharma Tech Manufacturers, Suppliers of Stability Chamber, Walk in Chamber, Stand Alone Chamber, Ultrasonic Baths, Water Baths, Walk in Humidity Chamber from Nashik, Maharashtra, Best Quality In Pharmaceutical Equipment, Call: +91 86005 22240"
                canonical="https://www.aureolepharmatech.com/"
            />
            <Hero />
            <About />
            <ManagingDirectorProfile />
            <PrecisionEngineeredSystems />
            <IndustriesServed />
            <GlobalValidation />
            <HomeFaq />
            <OurUnitsContact />
            <ScrollToTop />
        </main>
    );
};

export default Home;
