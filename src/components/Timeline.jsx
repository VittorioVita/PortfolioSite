import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaFlagCheckered, FaCode, FaGraduationCap, FaRocket, FaAward } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

// Dati 
const timelineData = [
  { 
    year: '2019', 
    title: 'GAME START', 
    desc: 'Scrivo la mia prima riga di codice.', 
    tags: ['HTML', 'CSS'], 
    color: 'neon-orange', 
    icon: <FaRocket /> 
  },
  { 
    year: '2019 - 2020', 
    title: 'STUDENTE', 
    desc: 'Mi iscirivo alla mia prima accademia dove imparo e approfondisco HTML,CSS e JS.', 
    tags: ['HTML/CSS', 'JS', 'REACT'], 
    color: 'neon-yellow', 
    icon: <FaCode /> 
  },
  { 
    year: '2024', 
    title: 'JR FULL STACK DEVELOPER', 
    desc: 'Partecipo al bootcamp intensivo "AULAB HACKADEMY", concluso con successo ottengo la certificazione  di FULL STACK DEVELOPER con padronanza di HTML/CSS, Javascript, PHP, LARAVEL, MySql e Metodologie Agili.', 
    tags: ['HTML/CSS', 'JS', 'LARAVEL', 'PHP', 'BOOTSTRAP', 'REST API'], 
    color: 'neon-cyan', 
    icon: <FaGraduationCap /> 
  },
  { 
    year: '2024 - PRESENT', 
    title: 'REACT DEVELOPER', 
    desc: 'Consolido la mia formazione in react, studiando creando soluzioni per problemi di ambito quotidiano e continuo nella mia formazione e miglioramento come professionista. Acquistando corsi e lavorando a progetti open source in collaborazione con altri Devs', 
    tags: ['REACT', 'NEXT.JS', 'TS'], 
    color: 'neon-pink', 
    icon: <FaFlagCheckered /> 
  },
];

const Timeline = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });


  const TOTAL_DURATION = 4; 
  const DELAY_PER_ITEM = TOTAL_DURATION / timelineData.length; 

  return (
    <section id="timeline" className="py-24 bg-arcade-dark relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl lg:text-5xl text-neon-orange neon-text mb-4 tracking-tighter sm:tracking-normal">
            &gt; QUEST_LOG.md
          </h2>
          <div className="w-32 h-1 bg-neon-yellow mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative min-h-[800px]">
          
   
          <motion.div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-neon-cyan origin-top hidden md:block z-0"
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: TOTAL_DURATION, ease: "linear" }}
            style={{ top: '3rem', bottom: '3rem' }} 
          ></motion.div>
          
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const borderClass = `border-${item.color}`;
            const textClass = `text-${item.color}`;
            const bgIconClass = `bg-${item.color}`;

            
            const iconTextColor = item.color === 'neon-yellow' ? 'text-black' : 'text-white mix-blend-hard-light';

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }} 
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * DELAY_PER_ITEM 
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
                      delay: index * DELAY_PER_ITEM 
                    }}
                    className={`w-16 h-16 ${bgIconClass} border-4 border-black flex items-center justify-center pixel-border shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
                  >
                    {/* classe di contrasto calcolata sopra */}
                    <span className={`text-2xl ${iconTextColor}`}>{item.icon}</span>
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

                  {/* FRECCETTA */}
                  <div className={`hidden md:block absolute top-8 w-6 h-1 ${bgIconClass} ${isLeft ? '-right-6' : '-left-6'}`}></div>
                  {/* PALLINO */}
                  <div className={`hidden md:block absolute top-6 w-4 h-4 rounded-full ${bgIconClass} ${isLeft ? '-right-[34px]' : '-left-[34px]'}`}></div>
                  
                </div>

              </motion.div>
            );
          })}
        </div>
        {/* BOTTONE CERTIFICAZIONI */}
        <div className="mt-16 flex justify-center">
            <Link to="/certifications"> 
                <motion.button
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-8 py-3 bg-transparent border-4 border-neon-yellow text-neon-yellow font-pixel text-sm hover:bg-neon-yellow hover:text-black transition-all duration-300 flex items-center gap-3"
                >
                    <FaAward /> CERTIFICAZIONI E ATTESTATI
                </motion.button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Timeline;