import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarSelection from './pages/CarSelection';
import LegalCheck from './pages/LegalCheck';
import ComputerDiagnostics from './pages/ComputerDiagnostics';
import CarSearch from './pages/CarSearch';
import CarInspection from './pages/CarInspection';
import DocumentCheck from './pages/DocumentCheck';
import CarPurchase from './pages/CarPurchase';
import { services } from './data/services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car-selection" element={<CarSelection />} />
        <Route path="/legal-check" element={<LegalCheck />} />
        <Route path="/computer-diagnostics" element={<ComputerDiagnostics />} />
        <Route path="/car-search" element={<CarSearch />} />
        <Route path="/car-inspection" element={<CarInspection />} />
        <Route path="/document-check" element={<DocumentCheck />} />
        <Route path="/car-purchase" element={<CarPurchase />} />
      </Routes>
    </Router>
  );
}

export default App;