import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// P
import Home from './Home';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';
import Certifications from './pages/Certifications';
import CertificateDetail from './pages/CertificateDetail'; 

function App() {
  return (
    <div className="bg-arcade-bg text-white font-retro min-h-screen selection:bg-neon-pink selection:text-white">
      <Navbar /> 
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/certifications" element={<Certifications />} />
          
        
          <Route path="/certification/:id" element={<CertificateDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;