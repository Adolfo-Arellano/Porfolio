import Chef from '../assets/SalteandoLasSkillsYo2-Photoroom.png';
import React, { useState } from 'react';
import './ChefWithRealImage.css';

const ChefWithRealImage = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [skillsRevealed, setSkillsRevealed] = useState(false);

  const technologies = [
    { name: 'Empatía', finalPosition: { x: -15, y: 90 }, delay: 0 },
    { name: 'Trabajo en equipo', finalPosition: { x: -150, y: 105 }, delay: 0.1 }, 
    { name: 'Adaptabilidad', finalPosition: { x: -20, y: 140 }, delay: 0.2 },
    { name: 'Creatividad', finalPosition: { x: -125, y: 155 }, delay: 0.3 },
    { name: 'Proactividad', finalPosition: { x: 15, y: 185 }, delay: 0.4 },
    { name: 'Resiliencia', finalPosition: { x: -75, y: 200 }, delay: 0.5 },
  ];

  const handleSautee = () => {
    if (isAnimating || skillsRevealed) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setSkillsRevealed(true);
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <div className='bg-gradient-to-br from-[#D4825A] via-[#CD853F] to-[#5D4037] pt-10'>
      <div>
        <h2 className="text-4xl text-center font-extrabold text-gray-900 pb-2">Mis Condimentos Secretos</h2>
        <p className="text-center text-lg font-medium text-gray-800 pb-3">Con la técnica correcta y el fuego adecuado, transformo ideas simples en experiencias digitales que nutren y deleitan.</p>
        
      </div>
      <div className="relative w-full max-w-lg mx-auto">
        <div className="relative rounded-2xl overflow-visible">
          
          <div className="relative z-10 cursor-crosshair" onClick={handleSautee}>
              <img
                src={Chef}
                alt="Chef"
                className="w-92 h-92 flex items-center justify-center text-gray-500"
              />
          </div>
          
          {/* Skills flotantes */}
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`absolute origin-center transition-opacity ${
                isAnimating ? 'animate-sautee' : ''
              } ${skillsRevealed ? 'animate-float' : 'opacity-0'}`}
              style={{
                bottom: skillsRevealed ? `calc(100px + ${tech.finalPosition.y}px)` : '120px',
                left: skillsRevealed ? `calc(115px + ${tech.finalPosition.x}px)` : '70px',
                transition: 'all 0.5s ease-out',
                transitionDelay: `${tech.delay}s`,
                zIndex: 20,
              }}
            >

              <div className="relative">
                <div className="text-3xl filter drop-shadow-lg" style={{ color: tech.color }}>
                  {tech.logo}
                </div>
                {skillsRevealed && (
                  <div
                    className="absolute -bottom-8 -left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-800 shadow-lg animate-fade-in whitespace-nowrap"
                    style={{ animationDelay: `${tech.delay + 0.5}s` }}
                  >
                    {tech.name}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Efectos de partículas */}
          {isAnimating && (
            <div className="absolute bottom-20 left-16 z-30">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-orange-400 rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 60 - 10}px`,
                    top: `${Math.random() * 60 - 80}px`,
                    animationDelay: `${Math.random() * 0.5}s`,
                    animationDuration: '1s'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChefWithRealImage;