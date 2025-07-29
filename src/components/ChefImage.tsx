import Chef from '../assets/SalteandoLasSkillsYo2-Photoroom.png';
import { useState } from 'react';
import './ChefImage.css';

interface Technology {
  name: string;
  finalPosition: { x: number; y: number };
  delay: number;
  color?: string;
  logo?: string;
}

const ChefWithRealImage = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [skillsRevealed, setSkillsRevealed] = useState(false);

  const technologies: Technology[] = [
    { name: 'Trabajo en equipo', finalPosition: { x: -160, y: 70 }, delay: 0, logo: '👥' },
    { name: 'Empatía', finalPosition: { x: 0, y: 85 }, delay: 0.1, logo: '🤝' },
    { name: 'Creatividad', finalPosition: { x: -100, y: 150 }, delay: 0.2, logo: '💡' },
    { name: 'Adaptabilidad', finalPosition: { x: 10, y: 175 }, delay: 0.3, logo: '🔄' },
    { name: 'Resiliencia', finalPosition: { x: -145, y: 235 }, delay: 0.4, logo: '💪' },
    { name: 'Proactividad', finalPosition: { x: -35, y: 265 }, delay: 0.5, logo: '⚡' },
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
        <h2 className="text-4xl text-center font-extrabold text-gray-900 pb-2">Mis Cualidades</h2>
        <p className="text-center text-lg font-medium text-gray-800 pb-6">Con la técnica correcta y el fuego adecuado, transformo ideas simples en experiencias digitales que nutren y deleitan.</p>
      </div>
      
      <div className="relative w-full max-w-lg mx-auto">
        <div className="relative rounded-2xl overflow-visible">
          <div className="relative z-10 cursor-crosshair group" onClick={handleSautee}>
            <img
              src={Chef}
              alt="Chef"
              className={`w-92 h-92 transition-all duration-300 ${
                !skillsRevealed 
                  ? 'filter group-hover:brightness-110 group-hover:drop-shadow-3xl' 
                  : 'filter drop-shadow-xl'
              }`}
            />
            {!skillsRevealed && (
              <div className="absolute bottom-44 -left-12 z-20 animate-bounce">
                <div className="relative bg-white/90 backdrop-blur-md rounded-xl px-2 py-1 shadow-2xl border-2 border-orange-300/50">
                  <p className="text-gray-700 font-medium text-sm">
                    ¡Descubre mis secretos! 👇🍳
                  </p>
                  <div className="absolute top-full left-24 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white/90"></div>
                </div>
              </div>
            )}
          </div>
          
          {/* Skills */}
          {technologies.map((tech) => (
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
              <div className="flex flex-col items-center">
                <div className="text-3xl filter drop-shadow-lg hover:scale-110 transition-transform duration-200" style={{ color: tech.color }}>
                  {tech.logo}
                </div>
                {skillsRevealed && (
                  <div
                    className="mt-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-semibold text-gray-800 shadow-lg animate-fade-in whitespace-nowrap border border-gray-200"
                    style={{ animationDelay: `${tech.delay + 0.5}s` }}
                  >
                    {tech.name}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Partículas */}
          {isAnimating && (
            <div className="absolute bottom-20 left-16 z-30">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-orange-400 rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 80 - 20}px`,
                    top: `${Math.random() * 80 - 100}px`,
                    animationDelay: `${Math.random() * 0.8}s`,
                    animationDuration: `${0.8 + Math.random() * 0.4}s`
                  }}
                />
              ))}
              {/* Partículas */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={`spark-${i}`}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 100 - 30}px`,
                    top: `${Math.random() * 100 - 120}px`,
                    animationDelay: `${Math.random() * 1}s`,
                    animationDuration: `${1 + Math.random() * 0.5}s`
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