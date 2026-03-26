import React from 'react';
import { FaGamepad, FaCode, FaRocket, FaTrophy, FaUserAstronaut, FaGithub, FaLinkedin, FaTwitter, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-10">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-arcade-bg to-neon-cyan/20"></div>
      
      {/* Background*/}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute top-20 left-10 text-6xl text-neon-pink float-animation"><FaGamepad /></div>
        <div className="absolute top-40 right-20 text-5xl text-neon-cyan float-animation" style={{animationDelay: '1s'}}><FaCode /></div>
        <div className="absolute bottom-32 left-32 text-7xl text-neon-yellow float-animation" style={{animationDelay: '2s'}}><FaRocket /></div>
        <div className="absolute bottom-20 right-40 text-6xl text-neon-orange float-animation" style={{animationDelay: '1.5s'}}><FaTrophy /></div>
      </div>
      
      {/* Main Container */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center flex-grow justify-center">
        
        <div className="float-animation mb-8">
          <div className="inline-block p-6 md:p-8 bg-arcade-dark/80 border-4 border-neon-cyan pixel-border">
            <FaUserAstronaut className="text-6xl md:text-8xl text-neon-pink pulse-neon" />
          </div>
        </div>
        
        {/* Text */}
        <h1 className="font-pixel text-3xl sm:text-5xl md:text-7xl mb-6 text-neon-cyan neon-text leading-tight break-words max-w-full">
          VITTORIO <br />CAPORALE VITA
        </h1>
        
        <h2 className="text-2xl sm:text-4xl md:text-5xl mb-8 text-neon-yellow font-retro">
          REACT DEVELOPER
        </h2>
        
        <p className="text-xl sm:text-2xl md:text-3xl mb-12 text-neon-white max-w-3xl mx-auto font-retro px-4">
          "Sviluppo" siti e fiducia, componente dopo componente.
        </p>
        
        {/* Buttons */}
        <div className="flex gap-4 md:gap-6 justify-center flex-wrap mb-12">
          <a href="#projects" className="group relative px-6 py-3 md:px-8 md:py-4 bg-neon-pink text-white font-pixel text-sm md:text-lg border-4 border-black hover:bg-neon-cyan hover:text-arcade-bg transition-all duration-300 hover:scale-110 hover:-rotate-2">
            <span className="relative z-10">VEDI PROGETTI</span>
            <div className="absolute inset-0 bg-neon-yellow transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
          </a>
          <a href="#contact" className="group relative px-6 py-3 md:px-8 md:py-4 bg-neon-cyan text-arcade-bg font-pixel text-sm md:text-lg border-4 border-black hover:bg-neon-yellow transition-all duration-300 hover:scale-110 hover:rotate-2">
            <span className="relative z-10">START GAME</span>
            <div className="absolute inset-0 bg-neon-orange transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 text-3xl mb-12">
          <a href="#" className="text-neon-cyan hover:text-neon-pink transition-colors duration-300 hover:scale-125 inline-block pulse-neon"><FaGithub /></a>
          <a href="#" className="text-neon-cyan hover:text-neon-pink transition-colors duration-300 hover:scale-125 inline-block pulse-neon"><FaLinkedin /></a>
          <a href="#" className="text-neon-cyan hover:text-neon-pink transition-colors duration-300 hover:scale-125 inline-block pulse-neon"><FaTwitter /></a>
        </div>
      </div>
      
      {/* Arrow Down  */}
      <div className="mt-auto animate-bounce pb-4">
        <FaChevronDown className="text-4xl text-neon-yellow" />
      </div>

    </section>
  );
};

export default Hero;