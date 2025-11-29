import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Importante per la navigazione

// Importiamo i dati
import { projectsData } from '../data/projectsData';

const Projects = () => {
  // Prendi solo i primi 4 progetti per la Home Page
  const recentProjects = projectsData.slice(0, 4);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-arcade-bg to-arcade-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Intestazione */}
        <div className="text-center mb-16">
          <h2 className="font-pixel text-lg sm:text-3xl md:text-5xl text-neon-pink neon-text mb-4 tracking-tighter sm:tracking-normal">
            &gt; PROJECT_SHOWCASE.js
          </h2>
          <div className="w-32 h-1 bg-neon-cyan mx-auto"></div>
        </div>
        
        {/* Griglia dei progetti */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          
          {recentProjects.map((proj) => (
            <motion.div 
              key={proj.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`group bg-arcade-dark border-4 border-${proj.color} overflow-hidden hover:border-neon-yellow transition-all duration-300 hover:scale-105`}
            >
              {/* --- IMMAGINE (Cliccabile) --- */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src={proj.img} 
                  alt={proj.title} 
                />
                
                {/* Overlay all'hover */}
                <Link to={`/project/${proj.id}`} className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
                  <div className="px-6 py-3 bg-neon-yellow text-black font-pixel text-xs border-2 border-black flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <FaEye /> VIEW CASE STUDY
                  </div>
                </Link>
              </div>

              {/* --- CONTENUTO CARD --- */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-2xl text-${proj.color}`}>{proj.icon}</span>
                  
                  {/* --- TITOLO CLICCABILE (FIX RICHIESTO) --- */}
                  <Link to={`/project/${proj.id}`}>
                    <h3 className="font-pixel text-xl text-neon-yellow hover:text-neon-pink transition-colors cursor-pointer decoration-neon-pink underline-offset-4 hover:underline">
                      {proj.title}
                    </h3>
                  </Link>
                </div>
                
                <p className="text-lg mb-4 font-retro text-gray-300 line-clamp-2">{proj.desc}</p>
                
                {/* Tech Stack */}
                <div className="flex gap-2 mb-6 flex-wrap">
                  {proj.tech.map((t, index) => (
                    <span key={index} className={`px-2 py-1 bg-${proj.color}/20 text-${proj.color} border border-${proj.color} text-xs font-bold font-retro`}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link Esterni */}
                <div className="flex gap-4 border-t border-gray-700 pt-4 mt-auto">
                  {/* Nota: Qui usiamo 'a' normale perché sono link esterni (GitHub/Live) */}
                  <a href={proj.linkLive} target="_blank" rel="noopener noreferrer" className={`text-${proj.color} hover:text-white transition-colors text-sm flex items-center font-pixel`}>
                    <FaExternalLinkAlt className="mr-2"/> LIVE
                  </a>
                  <a href={proj.linkCode} target="_blank" rel="noopener noreferrer" className={`text-${proj.color} hover:text-white transition-colors text-sm flex items-center font-pixel`}>
                    <FaGithub className="mr-2"/> CODE
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          
        </div>

        {/* --- BOTTONE TUTTI I PROGETTI (FIX RICHIESTO) --- */}
        <div className="flex justify-center">
          {/* Usa Link, NON 'a' tag. Non mettere href="#" */}
          <Link to="/projects" className="inline-block">
            <motion.div 
              initial={{ y: 100, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ type: "spring", stiffness: 100, damping: 20 }} 
              viewport={{ once: true, amount: 0.5 }} 
              className="group relative px-8 py-4 bg-neon-purple text-white font-pixel text-lg border-4 border-black hover:bg-neon-cyan hover:text-arcade-bg transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-3">
                TUTTI I PROGETTI <FaArrowRight />
              </span>
              <div className="absolute inset-0 bg-neon-pink transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
            </motion.div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;