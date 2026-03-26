import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { FaArrowLeft, FaCheckCircle, FaAward } from 'react-icons/fa';
import { certificatesData } from '../data/certificatesData';

const CertificateDetail = () => {
  const { id } = useParams();
  const cert = certificatesData.find(c => c.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!cert) {
    return <div className="min-h-screen flex items-center justify-center font-pixel text-neon-pink">CERTIFICATE NOT FOUND</div>;
  }

  return (
    <div className="min-h-screen bg-arcade-bg pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Navigation */}
        <Link 
            to="/certifications" 
            className="inline-flex items-center gap-2 mb-8 text-neon-cyan/60 hover:text-neon-pink transition-all font-retro text-sm"
        >
            <FaArrowLeft /> BACK TO LIST
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
            
          
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`border-4 border-${cert.color} p-2 bg-arcade-dark shadow-[0_0_30px_rgba(0,0,0,0.5)] relative group`}
            >
                {/* Angoli decorativi */}
                <div className={`absolute top-0 left-0 w-6 h-6 bg-${cert.color} z-10`}></div>
                <div className={`absolute bottom-0 right-0 w-6 h-6 bg-${cert.color} z-10`}></div>
                
                <div className="relative overflow-hidden border-2 border-gray-700">
                    <img 
                        src={cert.img} 
                        alt={cert.title} 
                        className="w-full h-auto object-contain block hover:scale-105 transition-transform duration-500 cursor-zoom-in" 
                    />
                </div>
                


            </motion.div>

            {/* COLONNA  Dettagli */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
            >
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className={`text-3xl text-${cert.color}`}>{cert.icon}</span>
                        <span className="font-retro text-gray-400 text-sm tracking-widest uppercase">{cert.issuer}</span>
                    </div>
                    <h1 className={`font-pixel text-2xl md:text-4xl text-${cert.color} mb-4 leading-tight`}>
                        {cert.title}
                    </h1>
                    <div className="inline-block bg-gray-800 border border-gray-600 px-4 py-1 rounded font-pixel text-xs text-white">
                        ISSUED: {cert.date}
                    </div>
                </div>

                <div className="bg-arcade-dark border-l-4 border-white p-6">
                    <h3 className="font-pixel text-lg text-neon-yellow mb-3">OVERVIEW</h3>
                    <p className="font-retro text-lg text-gray-300 leading-relaxed">
                        {cert.fullDescription}
                    </p>
                </div>

                <div>
                    <h3 className="font-pixel text-lg text-neon-pink mb-4 flex items-center gap-2">
                        <FaAward /> SKILLS UNLOCKED
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {cert.topics && cert.topics.map((topic, i) => (
                            <li key={i} className={`flex items-center gap-2 font-retro text-sm text-${cert.color}`}>
                                <FaCheckCircle className="flex-shrink-0" /> {topic}
                            </li>
                        ))}
                    </ul>
                </div>

            </motion.div>
        </div>

      </div>
    </div>
  );
};

export default CertificateDetail;