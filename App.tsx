
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Overview from './pages/about/Overview';
import Team from './pages/about/Team';
import Certification from './pages/about/Certification';
import Plants from './pages/about/Plants';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import StabilityChambers from './pages/StabilityChambers';
import TableTopInstruments from './pages/TableTopInstruments';
import LaboratoryFurniture from './pages/LaboratoryFurniture';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative selection:bg-blue-100 selection:text-blue-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/stability-chambers" element={<StabilityChambers />} />
          <Route path="/products/table-top-instruments" element={<TableTopInstruments />} />
          <Route path="/products/laboratory-furniture" element={<LaboratoryFurniture />} />
          <Route path="/products/:productName" element={<ProductDetail />} />
          <Route path="/about/overview" element={<Overview />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/certification-compliance" element={<Certification />} />
          <Route path="/about/plants" element={<Plants />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
