
import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import { Navigate } from 'react-router-dom';
import PageLoader from './components/PageLoader';
import { preloadCriticalImages } from './utils/imagePreloader';


// Route-level code splitting: Home stays in the main bundle; every other page loads on demand.
const Overview = lazy(() => import('./pages/about/Overview'));
const Certification = lazy(() => import('./pages/about/Certification'));
const Plants = lazy(() => import('./pages/about/Plants'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const StabilityChambers = lazy(() => import('./pages/StabilityChambers'));
const TableTopInstruments = lazy(() => import('./pages/TableTopInstruments'));
const LaboratoryFurniture = lazy(() => import('./pages/LaboratoryFurniture'));
const Service = lazy(() => import('./pages/Service'));
const Software = lazy(() => import('./pages/Software'));
const Events = lazy(() => import('./pages/Events'));
const Careers = lazy(() => import('./pages/Careers'));
const Privacy = lazy(() => import('./pages/Privacy'));
const CityWiseProductPage = lazy(() => import('./pages/CityWiseProductPage'));

// Component to handle scroll to top on route change
const ScrollToTopOnRouteChange: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  // Preload critical images on app start
  useEffect(() => {
    preloadCriticalImages();
  }, []);

  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <div className="relative selection:bg-blue-100 selection:text-blue-900">
        <Header />
        <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/software" element={<Software />} />
          <Route path="/events" element={<Events />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/stability-chambers" element={<StabilityChambers />} />
          <Route path="/products/table-top-instruments" element={<TableTopInstruments />} />
          <Route path="/products/laboratory-furniture" element={<LaboratoryFurniture />} />
          <Route path="/products/:productName" element={<ProductDetail />} />
          <Route path="/about" element={<Overview />} />
          <Route path="/about/certification-compliance" element={<Certification />} />
          <Route path="/about/plants" element={<Plants />} />
          <Route path="/careers" element={<Careers />} />

          {/* Legacy SEO Redirects */}
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/contact-us/" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/" element={<Contact />} />
          
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us/" element={<AboutUs />} />
          
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/home/" element={<Navigate to="/" replace />} />
          <Route path="/home-2" element={<Navigate to="/" replace />} />
          <Route path="/home-2/" element={<Navigate to="/" replace />} />

          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/:cityProductSlug" element={<CityWiseProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
