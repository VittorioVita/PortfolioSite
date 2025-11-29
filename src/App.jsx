import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pagine
import Home from './Home';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';
// ScrollToTop opzionale: per fare in modo che scrolli su ad ogni cambio pagina

function App() {
  return (
    <div className="bg-arcade-bg text-white font-retro min-h-screen selection:bg-neon-pink selection:text-white">
      <Navbar /> {/* Navbar rimane fissa su tutte le pagine */}
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

      <Footer /> {/* Footer rimane fisso */}
    </div>
  );
}

export default App;