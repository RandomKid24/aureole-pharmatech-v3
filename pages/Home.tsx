
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ManagingDirectorProfile from '../components/ManagingDirectorProfile';
import PrecisionEngineeredSystems from '../components/PrecisionEngineeredSystems';
import IndustriesServed from '../components/IndustriesServed';
import GlobalValidation from '../components/GlobalValidation';
import OurUnitsContact from '../components/OurUnitsContact';
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

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <Hero />
            <About />
            <ManagingDirectorProfile />
            <PrecisionEngineeredSystems />
            <IndustriesServed />
            <GlobalValidation />
            <OurUnitsContact />
            <ScrollToTop />
        </main>
    );
};

export default Home;
