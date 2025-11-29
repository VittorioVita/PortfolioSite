import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTools, FaLightbulb, FaCheckCircle } from 'react-icons/fa';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center text-neon-pink font-pixel">GAME OVER: PROJECT NOT FOUND</div>;
  }

  return (
    <div className="min-h-screen bg-arcade-bg text-white pt-24 pb-20">
      
      {/* Hero Banner del Progetto */}
      <div className="relative h-[60vh] w-full overflow-hidden border-b-4 border-neon-cyan">
        <img src={project.img} className="w-full h-full object-cover opacity-50" alt={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-arcade-bg via-arcade-bg/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="max-w-4xl"
            >
              <Link to="/projects" className="text-neon-yellow mb-4 inline-block font-pixel text-sm hover:underline">&lt; BACK TO LIST</Link>
              <h1 className={`font-pixel text-4xl md:text-7xl text-${project.color} mb-6 neon-text`}>{project.title}</h1>
              <div className="flex gap-4">
                <a href={project.linkLive} className="bg-neon-pink text-white px-6 py-3 font-pixel text-sm border-4 border-black hover:scale-105 transition-transform flex items-center gap-2">
                  <FaExternalLinkAlt /> LIVE DEMO
                </a>
                <a href={project.linkCode} className="bg-arcade-dark text-neon-cyan px-6 py-3 font-pixel text-sm border-4 border-neon-cyan hover:bg-neon-cyan hover:text-black transition-colors flex items-center gap-2">
                  <FaGithub /> SOURCE CODE
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        
        {/* Colonna Sinistra: Storia */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Overview */}
          <section>
            <h2 className="font-pixel text-2xl text-neon-yellow mb-6 flex items-center gap-3">
              <span className="w-3 h-8 bg-neon-yellow block"></span> MISSION BRIEF
            </h2>
            <p className="font-retro text-xl leading-relaxed text-gray-300">
              {project.fullDesc || project.desc}
            </p>
          </section>

          {/* Challenge & Solution Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-arcade-dark border-4 border-neon-orange p-6">
              <h3 className="font-pixel text-neon-orange mb-4 flex items-center gap-2"><FaTools /> THE CHALLENGE</h3>
              <p className="font-retro text-lg">{project.challenge || "Data corrupted... Challenge description missing."}</p>
            </div>
            <div className="bg-arcade-dark border-4 border-neon-cyan p-6">
              <h3 className="font-pixel text-neon-cyan mb-4 flex items-center gap-2"><FaLightbulb /> THE SOLUTION</h3>
              <p className="font-retro text-lg">{project.solution || "Solution algorithm encrypted."}</p>
            </div>
          </div>

          {/* Features */}
          <section>
            <h2 className="font-pixel text-2xl text-neon-pink mb-6 mt-8">KEY FEATURES</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {project.features && project.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 font-retro text-lg bg-arcade-dark p-3 border border-gray-700">
                  <FaCheckCircle className="text-neon-green text-neon-cyan" /> {feat}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Colonna Destra: Tech Stack & Info */}
        <div className="space-y-8">
          <div className="bg-arcade-dark p-8 border-4 border-white pixel-border sticky top-24">
            <h3 className="font-pixel text-xl mb-6 text-center border-b-4 border-gray-700 pb-4">TECH STACK</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {project.tech.map((t, i) => (
                <span key={i} className={`px-3 py-1 bg-${project.color} text-black font-bold font-pixel text-xs`}>
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-4 font-retro text-lg">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">ROLE</span>
                <span>Frontend Dev</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">YEAR</span>
                <span>2024</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">STATUS</span>
                <span className="text-neon-green">Completed</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;