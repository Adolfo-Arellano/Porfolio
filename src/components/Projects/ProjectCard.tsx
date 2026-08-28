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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

  const shineX = useSpring(mouseX, { stiffness: 1500, damping: 30 });
  const shineY = useSpring(mouseY, { stiffness: 1500, damping: 30 });

  const shineGradient = useMotionTemplate`
    radial-gradient(
      600px circle at ${shineX}px ${shineY}px,
      rgba(232, 135, 58, 0.18) 0%,
      rgba(232, 135, 58, 0.06) 30%,
      transparent 70%
    )
  `;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = (x - width / 2) / width;
    const centerY = (y - height / 2) / height;
    
    const intensity = 30;
    
    const absRotationX = Math.abs(centerY) * intensity;
    const rotationY = centerX * intensity;

    rotateX.set(absRotationX);
    rotateY.set(rotationY);

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
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div 
      ref={cardRef}
      className="relative w-[360px] h-[440px] rounded-sm overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        transformStyle: "preserve-3d",
        border: '1px solid var(--line-strong)',
      }}
      animate={{
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      <motion.div
        className="relative w-full h-full rounded-sm overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
        
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, var(--bg-void) 5%, rgba(14,11,9,0.55) 45%, transparent 80%)' }}
        />
        
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
        
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className={`transform transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <h3 className="font-display font-semibold text-xl mb-2" style={{ color: 'var(--cream)' }}>{title}</h3>
            <p className="font-body text-sm mb-4 line-clamp-3" style={{ color: 'var(--cream-dim)' }}>{description}</p>
            
            <div className="flex gap-3 mb-4">
              <a 
                href={demoUrl} target="_blank" rel="noopener noreferrer"
                className="font-mono flex justify-center items-center px-3 py-1.5 rounded-sm text-xs font-medium transition-colors"
                style={{ background: 'var(--ember)', color: '#1A1006' }}
              >
                Ver Demo
              </a>
              <a 
                href={githubUrl} target="_blank" rel="noopener noreferrer"
                className="font-mono flex justify-center items-center px-3 py-1.5 rounded-sm text-xs font-medium transition-colors"
                style={{ border: '1px solid var(--line-strong)', color: 'var(--cream)' }}
              >
                GitHub
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="font-mono flex items-center gap-2 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
                style={{
                  background: isHovered ? 'rgba(244,238,227,0.12)' : 'rgba(14,11,9,0.7)',
                  color: isHovered ? 'var(--cream)' : 'var(--cream-dim)',
                }}
              >
                <img
                  src={`/icons/${skill.icon}.svg`}
                  alt={skill.name}
                  className="w-4 h-4"
                />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div
          className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
          style={{ background: 'rgba(244,238,227,0.15)' }}
        >
          <span className="text-sm" style={{ color: 'var(--cream)' }}>↗</span>
        </div>
        
        <motion.div
          className="absolute inset-0 rounded-sm pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(244, 238, 227, 0.25), transparent)`,
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