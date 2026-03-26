import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { id, title, desc, img, color, icon, tech, linkLive, linkCode } = project;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group bg-arcade-dark border-4 border-${color} flex flex-col overflow-hidden hover:border-neon-yellow transition-all duration-300 hover:scale-105 h-full`}
    >
      {/* --- IMMAGINE--- */}
      <div className="h-48 xl:h-64 overflow-hidden relative flex-shrink-0">
        <img 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          src={img} 
          alt={title} 
        />
        
        {/* hover */}
        <Link to={`/project/${id}`} className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
          <div className="px-4 py-2 bg-neon-yellow text-black font-pixel text-[10px] md:text-xs border-2 border-black flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <FaEye /> VIEW CASE STUDY
          </div>
        </Link>
      </div>

      {/* --- CONTENUTO CARD --- */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          {/* Icona fissa che non si schiaccia */}
          <span className={`text-2xl text-${color} flex-shrink-0`}>{icon}</span>
          
          {/* Titolo  */}
          <Link to={`/project/${id}`} className="min-w-0">
            <h3 className="font-pixel text-lg xl:text-xl text-neon-yellow hover:text-neon-pink transition-colors cursor-pointer decoration-neon-pink underline-offset-4 hover:underline truncate" title={title}>
              {title}
            </h3>
          </Link>
        </div>
        
        {/* Descrizione  */}
        <p className="text-sm sm:text-base font-retro text-gray-300 flex-grow line-clamp-3 mb-4">{desc}</p>
        
        {/* Tech Stack */}
        <div className="flex gap-2 mb-6 flex-wrap mt-auto">
          {tech.map((t, index) => (
            <span key={index} className={`px-2 py-1 bg-${color}/20 text-${color} border border-${color} text-[10px] font-bold font-retro`}>
              {t}
            </span>
          ))}
        </div>

        {/* Link Esterni */}
        <div className="flex gap-4 border-t border-gray-700 pt-4 mt-auto">
          <a href={linkLive} target="_blank" rel="noopener noreferrer" className={`text-${color} hover:text-white transition-colors text-sm flex items-center font-pixel`}>
            <FaExternalLinkAlt className="mr-2"/> LIVE
          </a>
          <a href={linkCode} target="_blank" rel="noopener noreferrer" className={`text-${color} hover:text-white transition-colors text-sm flex items-center font-pixel`}>
            <FaGithub className="mr-2"/> CODE
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;