import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-arcade-dark border-t-4 border-neon-cyan py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-pixel text-xl text-neon-cyan neon-text">
            &lt;DEV/&gt;
          </div>
          <div className="text-lg text-neon-yellow font-retro">
            © 2024 PLAYER ONE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6 text-2xl">
            <a href="#" className="text-neon-cyan hover:text-neon-pink transition-colors duration-300 hover:scale-125 inline-block"><FaGithub /></a>
            <a href="#" className="text-neon-cyan hover:text-neon-pink transition-colors duration-300 hover:scale-125 inline-block"><FaLinkedin /></a>
            <a href="#" className="text-neon-cyan hover:text-neon-pink transition-colors duration-300 hover:scale-125 inline-block"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;