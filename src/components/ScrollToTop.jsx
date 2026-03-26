import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import { HashLink } from 'react-router-hash-link'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/#hero", text: "HOME" },
    { to: "/#about", text: "ABOUT" },
    { to: "/#skills", text: "SKILLS" },
    { to: "/#timeline", text: "JOURNEY" },
    { to: "/#projects", text: "PROJECTS" }, 
    { to: "/#contact", text: "CONTACT" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-arcade-dark/95 backdrop-blur-sm border-b-4 border-neon-cyan">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="font-pixel text-xl text-neon-cyan neon-text cursor-pointer">
            &lt;DEV/&gt;
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg">
            {navLinks.map((link) => (
              <HashLink 
                key={link.text}
                smooth 
                to={link.to} 
                className="text-neon-yellow hover:text-neon-pink transition-colors duration-300 hover:scale-110 inline-block cursor-pointer font-retro"
              >
                {link.text}
              </HashLink>
            ))}
          
            <Link 
                to="/projects"
                className="text-neon-pink hover:text-neon-cyan transition-colors duration-300 hover:scale-110 inline-block cursor-pointer font-retro border border-neon-pink px-2 rounded"
            >
                ALL DB
            </Link>
          </div>

         
          <button 
            className="md:hidden text-neon-cyan text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-4 bg-arcade-dark absolute top-full left-0 right-0 border-b-4 border-neon-cyan shadow-xl">
            <div className="flex flex-col space-y-4 px-6">
              {navLinks.map((link) => (
                <HashLink 
                  key={link.text}
                  smooth
                  to={link.to}
                  className="text-neon-yellow hover:text-neon-pink block text-center py-2 font-retro text-xl"
                  onClick={() => setIsOpen(false)} 
                >
                  {link.text}
                </HashLink>
              ))}
               <Link 
                  to="/projects"
                  className="text-neon-pink hover:text-neon-cyan block text-center py-2 font-retro text-xl border-t border-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  ALL PROJECTS DB
                </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;