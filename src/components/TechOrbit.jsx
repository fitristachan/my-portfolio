import React, { useState } from 'react';
import DotBackground from './DotBackground';

const TechOrbit = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Define your tech stack with experience years and project counts
  const techStack = [
    { 
      name: 'React', 
      icon: '⚛️', 
      experience: '2+', 
      projects: 8,
      color: 'from-cyan-400 to-blue-500',
      position: { top: '15%', left: '15%' }
    },
    { 
      name: 'Python', 
      icon: '🐍', 
      experience: '2+', 
      projects: 6,
      color: 'from-blue-400 to-yellow-500',
      position: { top: '15%', left: '90%' }
    },
        { 
      name: 'Kotlin', 
      icon: '🟠', 
      experience: '2+', 
      projects: 7,
      color: 'from-purple-400 to-blue-500',
      position: { top: '65%', left: '95%' }
    },
    { 
      name: '.NET', 
      icon: '🟣', 
      experience: '2+', 
      projects: 7,
      color: 'from-purple-500 to-indigo-600',
      position: { top: '45%', left: '80%' }
    },
    { 
      name: 'SQL', 
      icon: '🗄️', 
      experience: '3+', 
      projects: 10,
      color: 'from-orange-400 to-red-500',
      position: { top: '80%', left: '70%' }
    },
    { 
      name: 'Git', 
      icon: '📦', 
      experience: '3+', 
      projects: 15,
      color: 'from-orange-500 to-red-600',
      position: { top: '80%', left: '30%' }
    },
    { 
      name: 'Excel', 
      icon: '📊', 
      experience: '1+', 
      projects: 4,
      color: 'from-green-500 to-emerald-600',
      position: { top: '65%', left: '12%' }
    },
    { 
      name: 'Postman', 
      icon: '🧪', 
      experience: '2+', 
      projects: 9,
      color: 'from-orange-400 to-red-500',
      position: { top: '45%', left: '25%' }
    },
    { 
      name: 'Tailwind', 
      icon: '🎨', 
      experience: '2+', 
      projects: 6,
      color: 'from-cyan-300 to-blue-400',
      position: { top: '30%', left: '40%' }
    },
    { 
      name: 'Laravel', 
      icon: '🔴', 
      experience: '3+', 
      projects: 12,
      color: 'from-red-500 to-orange-600',
      position: { top: '30%', left: '65%' }
    }
  ];

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-visible p-8">
      <DotBackground/>
      
      {/* Center title */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h3 className="text-4xl md:text-5xl font-bold text-darkflow mb-2">
          My Skill
        </h3>
        <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-pinkflow bg-clip-text text-transparent">
          Universe
        </h3>
      </div>

      {/* Connecting lines (dotted orbits) */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <defs>
          <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="rgba(255,255,255,0.3)" />
          </pattern>
        </defs>
        
        {/* Orbital rings */}
        <ellipse 
          cx="30%" 
          cy="35%" 
          rx="45%" 
          ry="50%" 
          fill="none" 
          stroke="url(#dots)" 
          strokeWidth="2"
          className="animate-spin-slow"
          style={{ animationDuration: '60s' }}
        />
        <ellipse 
          cx="50%" 
          cy="50%" 
          rx="25%" 
          ry="35%" 
          fill="none" 
          stroke="url(#dots)" 
          strokeWidth="2"
          className="animate-spin-slow"
          style={{ animationDuration: '45s', animationDirection: 'reverse' }}
        />
      </svg>

      {/* Tech stack bubbles */}
      {techStack.map((tech, index) => (
        <div
          key={tech.name}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-20"
          style={{
            ...tech.position,
            animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
            animationDelay: `${index * 0.2}s`
          }}
          onMouseEnter={() => setHoveredItem(tech.name)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className={`relative group ${hoveredItem === tech.name ? 'scale-100' : 'scale-80'} transition-transform duration-300`}>
            {/* Main bubble */}
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${tech.color} 
              flex items-center justify-center text-2xl md:text-3xl shadow-xl border-4 border-darkflow/20
              group-hover:shadow-2xl group-hover:border-darkflow/40 transition-all duration-300`}>
              {tech.icon}
            </div>

            {/* Experience badge */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 
              text-darkflow text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center
              border-2 border-darkflow shadow-lg">
              {tech.experience}
            </div>

            {/* Projects badge */}
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-400 to-pink-500 
              text-darkflow text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center
              border-2 border-darkflow shadow-lg">
              {tech.projects}
            </div>

            {/* Tooltip on hover */}
            {hoveredItem === tech.name && (
              <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 
                bg-darkflow text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap z-30
                border border-darkflow/20">
                <div className="mx-16 text-sm text-white font-semibold">{tech.name}</div>
                <div className="text-xs text-gray-300 mt-1 text-center">
                  {tech.experience} years • {tech.projects} projects
                </div>
                {/* Arrow */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 
                  border-8 border-transparent border-b-darkflow" />
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-6 text-xs text-darkflow/70 z-10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold border border-darkflow/20">
            2+
          </div>
          <span>Years Experience</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold border border-darkflow/20">
            15+
          </div>
          <span>Projects</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default TechOrbit;