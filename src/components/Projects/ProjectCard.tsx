import { useState, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
}

interface ProjectCardProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
  skills?: Skill[];
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title = "", 
  description = "",
  backgroundImage = "",
  skills = [],
  demoUrl = "",
  githubUrl = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values para la rotación 3D
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs para suavizar las animaciones
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

  // Motion values para el brillo/shine
  const shineX = useSpring(mouseX, { stiffness: 1500, damping: 30 });
  const shineY = useSpring(mouseY, { stiffness: 1500, damping: 30 });

  // Gradiente del shine que sigue al mouse
  const shineGradient = useMotionTemplate`
    radial-gradient(
      600px circle at ${shineX}px ${shineY}px,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.1) 30%,
      transparent 70%
    )
  `;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calcular la posición relativa del mouse
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Convertir a coordenadas centradas (-0.5 a 0.5)
    const centerX = (x - width / 2) / width;
    const centerY = (y - height / 2) / height;
    
    const intensity = 30;
    
    // NUEVA LÓGICA: SIEMPRE empujar hacia atrás
    const absRotationX = Math.abs(centerY) * intensity; // SIEMPRE positivo
    const rotationY = centerX * intensity;
    
    rotateX.set(absRotationX); // SIEMPRE empuja hacia atrás
    rotateY.set(rotationY);    // Comportamiento horizontal normal
    
    // Actualizar posición del shine
    shineX.set(x);
    shineY.set(y);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Resetear rotaciones
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div 
      ref={cardRef}
      className="relative w-80 h-96 rounded-xl overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      {/* Card container con rotación 3D */}
      <motion.div
        className="relative w-full h-full rounded-xl overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Imagen de fondo */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: '135%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
        
        {/* Gradiente base */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        
        {/* Shine overlay - aparece solo en hover */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{
            background: shineGradient,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
        />
        
        {/* Contenido del card */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Información que aparece en hover */}
          <div className={`transform transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
            <p className="text-white text-sm font-semibold mb-4 line-clamp-3">{description}</p>
            
            <div className="flex gap-3 mb-4">
              <a 
                href={demoUrl}
                className="flex justify-center items-center px-3 py-1.5 bg-lime-500 text-white rounded-lg text-sm font-medium hover:bg-lime-900 transition-colors"
              >
                Ver Demo
              </a>
              <a 
                href={githubUrl}
                className="flex justify-center items-center px-3 py-1.5 bg-amber-500 text-white rounded-lg text-sm font-medium hover:bg-orange-900 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          
          {/* Skills siempre visibles */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isHovered ? 'bg-white/20 text-white' : 'bg-black/60 text-gray-300'
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor">
                  <use href={`/sprite.svg#${skill.icon}`} />
                </svg>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Icono de esquina que aparece en hover */}
        <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}>
          <span className="text-white text-sm">↗</span>
        </div>
        
        {/* Borde brillante que aparece en hover */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)`,
            backgroundSize: '200% 100%',
          }}
          animate={{
            opacity: isHovered ? 0.6 : 0,
            backgroundPosition: isHovered ? '100% 0%' : '0% 0%',
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;