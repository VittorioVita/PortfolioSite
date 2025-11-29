import React, { useRef } from 'react';
import { FaFlagCheckered, FaCode, FaGraduationCap, FaRocket } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

// Dati ordinati dal PIÙ VECCHIO al PIÙ NUOVO per la logica "storia"
// (Nota: Ho invertito l'ordine nell'array direttamente qui per comodità visiva)
const timelineData = [
  { year: '2018', title: 'GAME START', desc: 'Wrote my first line of code and fell in love with development.', tags: ['HTML', 'CSS'], color: 'neon-orange', icon: <FaRocket /> },
  { year: '2019 - 2021', title: 'JUNIOR DEVELOPER', desc: 'Started my professional journey, learning best practices.', tags: ['HTML/CSS', 'JS', 'REACT'], color: 'neon-yellow', icon: <FaGraduationCap /> },
  { year: '2021 - 2024', title: 'REACT DEVELOPER', desc: 'Built responsive web apps, optimized performance.', tags: ['REACT', 'REDUX', 'REST API'], color: 'neon-cyan', icon: <FaCode /> },
  { year: '2024 - PRESENT', title: 'SENIOR REACT DEVELOPER', desc: 'Leading frontend development for cutting-edge web applications.', tags: ['REACT', 'NEXT.JS', 'TS'], color: 'neon-pink', icon: <FaFlagCheckered /> },
];

const Timeline = () => {
  // Ref per capire quando l'intera sezione è visibile
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // CONFIGURAZIONE TEMPI
  // Cambia questi valori per accelerare o rallentare
  const TOTAL_DURATION = 4; // La linea ci mette 4 secondi ad arrivare in fondo
  const DELAY_PER_ITEM = TOTAL_DURATION / timelineData.length; // Ogni quanto appare un box (1 secondo)

  return (
    <section id="timeline" className="py-24 bg-arcade-dark relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-xl sm:text-3xl md:text-5xl text-neon-orange neon-text mb-4">
            &gt; QUEST_LOG.md
          </h2>
          <div className="w-32 h-1 bg-neon-yellow mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative min-h-[800px]"> {/* min-h per dare spazio alla linea */}
          
          {/* LINEA CENTRALE ANIMATA (L'ascensore) 
            Parte dall'alto (top-8) per allinearsi col primo centro icona e scende
          */}
          <motion.div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-neon-cyan origin-top hidden md:block z-0"
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: TOTAL_DURATION, ease: "linear" }} // Lineare per sincronizzare i box
            style={{ top: '3rem', bottom: '3rem' }} // Margini per non uscire troppo
          ></motion.div>
          
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const borderClass = `border-${item.color}`;
            const textClass = `text-${item.color}`;
            const bgIconClass = `bg-${item.color}`;

            return (
              <motion.div 
                key={index}
                // Il box appare solo quando la linea "virtualmente" arriva alla sua altezza
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }} // Arrivano dai lati
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * DELAY_PER_ITEM // Sincronizzazione matematica
                }}
                className="mb-24 relative md:flex justify-between items-center w-full"
              >
                
                {/* ICONA CENTRALE CHE SI ACCENDE */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      delay: index * DELAY_PER_ITEM // Appare insieme al box
                    }}
                    className={`w-16 h-16 ${bgIconClass} border-4 border-black flex items-center justify-center pixel-border shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
                  >
                    <span className="text-2xl text-white mix-blend-hard-light">{item.icon}</span>
                  </motion.div>
                </div>

                {/* CARD CONTENUTO */}
                <div className={`
                  bg-arcade-bg border-4 ${borderClass} p-8 
                  w-full md:w-5/12 
                  relative 
                  ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}
                  hover:scale-105 transition-transform duration-300
                  ml-0
                `}>
                  
                  {/* Icona visibile solo su Mobile */}
                  <div className="md:hidden mb-4 text-3xl flex items-center gap-3">
                    <span className={`${textClass}`}>{item.icon}</span>
                    <span className="h-1 flex-grow bg-gray-700 rounded"></span>
                  </div>

                  <div className="font-pixel text-neon-yellow text-xl mb-3">{item.year}</div>
                  <h3 className={`text-2xl font-bold ${textClass} mb-3 font-retro`}>{item.title}</h3>
                  <p className="text-xl font-retro">{item.desc}</p>
                  
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {item.tags.map(tag => (
                      <span key={tag} className={`px-3 py-1 ${bgIconClass} text-arcade-bg text-sm font-bold`}>{tag}</span>
                    ))}
                  </div>

                  {/* FRECCETTA LATERALE CHE PUNTA ALLA LINEA */}
                  <div className={`hidden md:block absolute top-8 w-6 h-1 ${bgIconClass} ${isLeft ? '-right-6' : '-left-6'}`}></div>
                  {/* PALLINO DI CONNESSIONE SULLA LINEA */}
                  <div className={`hidden md:block absolute top-6 w-4 h-4 rounded-full ${bgIconClass} ${isLeft ? '-right-[34px]' : '-left-[34px]'}`}></div>
                  
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;