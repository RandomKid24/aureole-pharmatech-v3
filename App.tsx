
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Overview from './pages/about/Overview';
import Team from './pages/about/Team';
import Certification from './pages/about/Certification';
import Plants from './pages/about/Plants';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative selection:bg-blue-100 selection:text-blue-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
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
