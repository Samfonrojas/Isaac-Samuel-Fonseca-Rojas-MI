
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import MissionTripsPage from './pages/MissionTripsPage';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen flex flex-col font-sans text-brand-primary">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/trips" element={<MissionTripsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
