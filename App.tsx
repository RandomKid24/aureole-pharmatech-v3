
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import AboutSection from './components/AboutSection';
import Industries from './components/Industries';
import Leadership from './components/Leadership';
import ClientsSection from './components/ClientsSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
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
    <div className="relative selection:bg-blue-100 selection:text-blue-900">
      <Header />

      <main>
        <Hero />
        <AboutSection />
        <Leadership />
        <ProductShowcase />
        <Industries />
        <ClientsSection />
        <MapSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
