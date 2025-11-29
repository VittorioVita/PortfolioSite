import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { projectsData } from '../data/projectsData';

const AllProjects = () => {
  // --- LOGICA PAGINAZIONE ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calcolo indici
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  // Scroll in cima quando cambia pagina
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-arcade-bg pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          
          {/* --- LINK "BACK TO HOME" MODIFICATO --- 
              1. font-retro: Meno pesante del pixel font.
              2. text-xs: Molto piccolo su mobile.
              3. text-neon-cyan/60: Spento/trasparente di default per non rubare l'attenzione.
              4. hover:opacity-100: Si accende solo se ci passi sopra.
          */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 mb-6 text-neon-cyan/60 hover:text-neon-pink hover:opacity-100 transition-all duration-300 font-retro text-xs sm:text-sm tracking-widest border-b border-transparent hover:border-neon-pink"
          >
            <FaArrowLeft className="text-[10px]" /> BACK TO HOME
          </Link>

          <h1 className="font-pixel text-[18px] xs:text-xl sm:text-4xl md:text-5xl text-neon-purple neon-text mb-4 tracking-tighter sm:tracking-normal whitespace-nowrap">
            ALL_PROJECTS_DB
          </h1>
          
          <div className="w-32 h-1 bg-neon-cyan mx-auto"></div>
        </div>

        {/* Griglia Progetti */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentProjects.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group bg-arcade-dark border-4 border-${proj.color} flex flex-col overflow-hidden hover:border-neon-yellow transition-all duration-300 hover:scale-105`}
            >
              {/* Immagine */}
              <div className="h-48 overflow-hidden relative flex-shrink-0">
                <img className="w-full h-full object-cover" src={proj.img} alt={proj.title} />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Link 
                     to={`/project/${proj.id}`}
                     className="px-6 py-2 bg-neon-yellow text-black font-pixel text-xs border-2 border-black hover:scale-110 transition-transform"
                   >
                     VIEW CASE STUDY
                   </Link>
                </div>
              </div>

              {/* Contenuto Card */}
              <div className="p-6 flex-grow flex flex-col">
                
                {/* Header Card: Icona + Titolo */}
                <div className="flex items-center gap-3 mb-3">
                   <span className={`text-${proj.color} text-2xl flex-shrink-0`}>
                     {proj.icon}
                   </span>
                   
                   <h3 className="font-pixel text-lg text-neon-yellow truncate w-full" title={proj.title}>
                     {proj.title}
                   </h3>
                </div>

                {/* Descrizione */}
                <p className="text-sm font-retro mb-4 text-gray-300 flex-grow line-clamp-3">
                  {proj.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-gray-800">
                  {proj.tech.map((t, i) => (
                    <span key={i} className={`text-[10px] px-2 py-1 bg-${proj.color}/20 text-${proj.color} border border-${proj.color} font-bold`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controlli Paginazione */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-8 font-pixel text-sm">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="disabled:opacity-30 disabled:cursor-not-allowed hover:text-neon-cyan flex items-center gap-2"
            >
              <FaArrowLeft /> PREV
            </button>
            
            <div className="bg-arcade-dark px-4 py-2 border-2 border-neon-pink text-neon-yellow">
              PAGE {currentPage} / {totalPages}
            </div>

            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="disabled:opacity-30 disabled:cursor-not-allowed hover:text-neon-cyan flex items-center gap-2"
            >
              NEXT <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;