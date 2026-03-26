import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const AllProjects = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-arcade-bg pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 mb-6 text-neon-cyan/60 hover:text-neon-pink hover:opacity-100 transition-all duration-300 font-retro text-xs sm:text-sm tracking-widest border-b border-transparent hover:border-neon-pink"
          >
            <FaArrowLeft className="text-[10px]" /> BACK TO HOME
          </Link>

          {/*  TITOLO TABLET:*/}
          <h1 className="font-pixel text-[18px] xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl text-neon-purple neon-text mb-4 tracking-tighter sm:tracking-normal whitespace-nowrap">
            ALL_PROJECTS_DB
          </h1>
          <div className="w-32 h-1 bg-neon-cyan mx-auto"></div>
        </div>

        {/* Griglia Progetti */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {currentProjects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
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