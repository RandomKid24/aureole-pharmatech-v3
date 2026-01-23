
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Overview from './pages/about/Overview';
import Certification from './pages/about/Certification';
import Plants from './pages/about/Plants';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import StabilityChambers from './pages/StabilityChambers';
import TableTopInstruments from './pages/TableTopInstruments';
import LaboratoryFurniture from './pages/LaboratoryFurniture';
import Service from './pages/Service';
import Software from './pages/Software';
import Events from './pages/Events';
import Careers from './pages/Careers';
import { preloadCriticalImages } from './utils/imagePreloader';

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
