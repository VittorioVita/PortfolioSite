import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { certificatesData } from '../data/certificatesData';

//  ANIMAZIONI
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3 
    }
  }
};

// Item
const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Certifications = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-arcade-bg pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 mb-6 text-neon-cyan/60 hover:text-neon-pink hover:opacity-100 transition-all duration-300 font-retro text-xs sm:text-sm tracking-widest border-b border-transparent hover:border-neon-pink"
          >
            <FaArrowLeft className="text-[10px]" /> BACK TO BASE
          </Link>

          <h1 className="font-pixel text-[18px] xs:text-xl sm:text-4xl md:text-5xl text-neon-yellow neon-text mb-4 tracking-tighter sm:tracking-normal whitespace-nowrap">
            ACHIEVEMENTS_UNLOCKED
          </h1>
          <div className="w-32 h-1 bg-neon-cyan mx-auto"></div>
          <p className="mt-4 font-retro text-gray-400 text-sm sm:text-lg">
            Prove ufficiali del mio viaggio nel codice.
          </p>
        </div>

        {/* CERTIFICATI */}
        <motion.div 
          className="grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {certificatesData.map((cert) => (
            <motion.div 
              key={cert.id}
              variants={itemVariants} 
              className={`group relative bg-arcade-dark border-4 border-${cert.color} p-2 hover:border-white transition-colors duration-300`}
            >
              {/*  stile foto vecchia */}
              <div className={`absolute top-0 left-0 w-4 h-4 bg-${cert.color} group-hover:bg-white transition-colors`}></div>
              <div className={`absolute top-0 right-0 w-4 h-4 bg-${cert.color} group-hover:bg-white transition-colors`}></div>
              <div className={`absolute bottom-0 left-0 w-4 h-4 bg-${cert.color} group-hover:bg-white transition-colors`}></div>
              <div className={`absolute bottom-0 right-0 w-4 h-4 bg-${cert.color} group-hover:bg-white transition-colors`}></div>

              <div className="border-2 border-dashed border-gray-700 h-full flex flex-col p-6 relative overflow-hidden">
                
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${cert.color}/10 rounded-full blur-2xl -mr-10 -mt-10`}></div>

                {/* Intestazione Card */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className={`text-4xl text-${cert.color} bg-arcade-bg p-2 border-2 border-${cert.color}`}>
                    {cert.icon}
                  </div>
                  <span className="font-pixel text-xs bg-gray-800 px-3 py-1 rounded text-white border border-gray-600">
                    {cert.date}
                  </span>
                </div>

                {/* Immagine  */}
                <div className="h-40 w-full bg-black mb-6 overflow-hidden border-2 border-gray-800 group-hover:border-neon-yellow transition-colors relative">
                    <img src={cert.img} alt={cert.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                    
              
                    <Link to={`/certification/${cert.id}`} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 cursor-pointer">
                        <div className="font-pixel text-xs text-neon-yellow flex items-center gap-2 border-2 border-neon-yellow px-4 py-2 hover:bg-neon-yellow hover:text-black transition-colors">
                            <FaExternalLinkAlt /> VIEW DETAILS
                        </div>
                    </Link>
                </div>

                {/* Testi  */}
                <div className="relative z-10 flex-grow">
                  <Link to={`/certification/${cert.id}`}>
                    <h3 className={`font-pixel text-lg sm:text-xl text-${cert.color} mb-2 hover:underline decoration-2 underline-offset-4 cursor-pointer`}>
                        {cert.title}
                    </h3>
                  </Link>
                  <p className="font-retro text-sm text-gray-400 mb-2 uppercase tracking-widest">{cert.issuer}</p>
                  <p className="font-retro text-gray-300 leading-relaxed text-sm">
                    {cert.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Certifications;