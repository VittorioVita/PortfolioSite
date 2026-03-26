import React from 'react';
import { FaGhost, FaHeart, FaTerminal, FaLightbulb, FaRocket } from 'react-icons/fa';
import myImage from '../assets/meSite.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-arcade-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-20 text-9xl text-neon-purple"><FaGhost /></div>
        <div className="absolute bottom-20 right-32 text-9xl text-neon-orange"><FaHeart /></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
<h2 className="font-pixel text-xl sm:text-2xl md:text-3xl lg:text-5xl text-neon-yellow neon-text mb-4 tracking-tighter sm:tracking-normal">
  &gt; ABOUT_ME.exe
</h2>
          <div className="w-32 h-1 bg-neon-cyan mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-pink to-neon-cyan opacity-50 blur-2xl group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-arcade-bg border-4 border-neon-cyan pixel-border"> 
             
              <img 
                className="w-full h-full object-cover block" 
                src={myImage}
                alt="Developer Portrait" 
              />
            </div>
          </div>
          
          {/* Text Side */}
          <div className="space-y-6">
            <InfoCard 
              icon={<FaTerminal className="text-2xl sm:text-3xl text-neon-cyan" />}
              title="ORIGIN STORY"
              text="Ho iniziato e scritto la mia prima riga nel 2019, poi sono rimasto incantato dalle possibilità e le capacità espressive del web. La Mia missione: Creare esperienze intuitive e memorabili"
              borderColor="border-neon-pink"
              textColor="text-neon-pink"
            />
             <InfoCard 
              icon={<FaLightbulb className="text-2xl sm:text-3xl text-neon-yellow" />}
              title="PHILOSOPHY"
              text="Il codice è arte. Ogni componente è una pennellata, ogni interazione una storia. Credo nel codice pulito, nel design perfetto al pixel e nelle esperienze utente che suscitano gioia."
              borderColor="border-neon-cyan"
              textColor="text-neon-cyan"
            />
             <InfoCard 
              icon={<FaRocket className="text-2xl sm:text-3xl text-neon-orange" />}
              title="POWER-UPS"
              text="Quando non scrivo codice, mi trovate a giocare, esplorare nuove tecnologie o contribuire a progetti open source. Imparo sempre, continuo a migliorare!"
              borderColor="border-neon-orange"
              textColor="text-neon-orange"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

//CARD 
const InfoCard = ({ icon, title, text, borderColor, textColor }) => (
  <div className={`bg-arcade-bg border-4 ${borderColor} p-4 sm:p-6 hover:border-neon-yellow transition-colors duration-300`}>
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="mt-1 flex-shrink-0">
        {icon}
      </div>
      
      {/* Wrapper del testo */}
      <div className="min-w-0"> 
        <h3 className={`font-pixel text-lg sm:text-xl ${textColor} mb-2 sm:mb-3 leading-tight`}>
          {title}
        </h3>
        <p className="text-base sm:text-xl leading-relaxed font-retro text-gray-200">
          {text}
        </p>
      </div>
    </div>
  </div>
);

export default About;