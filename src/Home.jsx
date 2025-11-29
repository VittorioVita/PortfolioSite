import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="bg-arcade-bg text-white font-retro min-h-screen selection:bg-neon-pink selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>

    </div>
  );
}

export default Home;