import React from 'react';
import Plot from 'react-plotly.js';
import { FaReact, FaJs, FaPalette, FaNode, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const SkillChart = ({ data, color }) => {
  return (
    <div className="w-full h-[250px] cursor-grab active:cursor-grabbing"> 
      <Plot
        data={[{
          type: 'scatterpolar',
          r: data.values,
          theta: data.labels,
          fill: 'toself',
          marker: { color: color },
          line: { color: color, width: 3 },
          hoverinfo: 'r+theta',
        }]}
        layout={{
          autosize: true,
          dragmode: 'pan', 
          margin: { t: 20, r: 25, b: 20, l: 25 },
          polar: { 
            radialaxis: { 
              visible: true, 
              range: [0, 100], 
              color: '#FF10F0', 
              tickfont: { size: 8 },
              fixedrange: true 
            }, 
            bgcolor: 'rgba(0,0,0,0)',
            angularaxis: { 
              tickfont: { size: 10, color: color },
              fixedrange: false, 
              period: 5 
            } 
          },
          showlegend: false,
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
          font: { color: color, size: 10 },
        }}
        useResizeHandler={true}
        style={{ width: '100%', height: '100%' }}
        config={{ 
          responsive: true, 
          displayModeBar: false, 
          scrollZoom: false,
          staticPlot: false,
          editable: false
        }}
      />
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-arcade-bg to-arcade-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
<h2 className="font-pixel text-xl sm:text-2xl md:text-3xl lg:text-5xl text-neon-cyan neon-text mb-4 tracking-tighter sm:tracking-normal">
  &gt; SKILL_TREE.json
</h2>
          <div className="w-32 h-1 bg-neon-pink mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* React Skill */}
          <div className="bg-arcade-dark border-4 border-neon-pink p-4 hover:border-neon-cyan transition-all duration-300 hover:scale-105">
            <div className="text-center mb-2">
              <FaReact className="text-6xl text-neon-cyan pulse-neon mx-auto" />
              <h3 className="font-pixel text-2xl text-neon-yellow mt-4">REACT</h3>
            </div>
            <div className="flex justify-center">
              <SkillChart 
                color="#00FFFF"
                data={{
                  values: [90, 90, 85, 75, 40],
                  labels: ['Hooks', 'Components', 'State', 'Perf', 'Test']
                }} 
              />
            </div>
          </div>
          
          {/* JS Skill */}
          <div className="bg-arcade-dark border-4 border-neon-cyan p-4 hover:border-neon-pink transition-all duration-300 hover:scale-105">
            <div className="text-center mb-2">
              <FaJs className="text-6xl text-neon-yellow pulse-neon mx-auto" />
              <h3 className="font-pixel text-2xl text-neon-yellow mt-4">JS</h3>
            </div>
            <div className="flex justify-center">
              <SkillChart 
                color="#FFFF00"
                data={{
                  values: [80, 88, 70, 70, 50],
                  labels: ['ES6+', 'Async', 'DOM', 'APIs', 'Fmk']
                }} 
              />
            </div>
          </div>

           {/* UI/UX Skill */}
           <div className="bg-arcade-dark border-4 border-neon-orange p-4 hover:border-neon-yellow transition-all duration-300 hover:scale-105">
            <div className="text-center mb-2">
              <FaPalette className="text-6xl text-neon-pink pulse-neon mx-auto" />
              <h3 className="font-pixel text-2xl text-neon-yellow mt-4">UI/UX</h3>
            </div>
            <div className="flex justify-center">
              <SkillChart 
                color="#FF10F0"
                data={{
                  values: [88, 90, 60, 90, 87],
                  labels: ['Figma', 'Anim', 'Resp', 'A11y', 'Proto']
                }} 
              />
            </div>
          </div>
        </div>

        {/* Skills  */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
             {[
                
                { icon: <FaGitAlt className="text-neon-cyan"/>, name: "GIT", border: "border-neon-cyan" },
              
                { icon: <FaFigma className="text-neon-pink"/>, name: "FIGMA", border: "border-neon-pink" }
             ].map((skill, idx) => (
                <div key={idx} className={`bg-arcade-bg border-4 ${skill.border} p-6 text-center hover:bg-arcade-dark transition-all duration-300 hover:scale-110`}>
                    <div className="text-4xl mb-3 flex justify-center">{skill.icon}</div>
                    <p className="font-pixel text-sm text-neon-cyan">{skill.name}</p>
                </div>
             ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;