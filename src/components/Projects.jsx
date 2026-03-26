import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
 
  const recentProjects = projectsData.slice(0, 2);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-arcade-bg to-arcade-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Intestazione */}
        <div className="text-center mb-16">
<h2 className="font-pixel text-lg sm:text-2xl md:text-3xl lg:text-5xl text-neon-pink neon-text mb-4 tracking-tighter sm:tracking-normal">
  &gt; PROJECT_SHOWCASE.js
</h2>
          <div className="w-32 h-1 bg-neon-cyan mx-auto"></div>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {recentProjects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>

        <div className="flex justify-center">
          
          <Link to="/projects" className="inline-block">
            <motion.div 
              initial={{ y: 100, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ type: "spring", stiffness: 100, damping: 20 }} 
              viewport={{ once: true, amount: 0.5 }} 
              
     
              className="group relative px-6 py-3 lg:px-8 lg:py-4 bg-neon-purple text-white font-pixel text-xs sm:text-sm lg:text-lg border-2 sm:border-4 border-black hover:bg-neon-cyan hover:text-arcade-bg transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                TUTTI I PROGETTI <FaArrowRight />
              </span>
              
              {/* Ombra dietro */}
              <div className="absolute inset-0 bg-neon-pink transform translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 sm:group-hover:translate-x-3 sm:group-hover:translate-y-3 transition-transform"></div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;