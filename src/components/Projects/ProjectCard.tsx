import { useState } from 'react';

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

  return (
    <div className="w-[360px]" style={{ border: '1px solid var(--line-strong)', borderRadius: 4 }}>
      {/* Rótulo por fuera de la imagen, dentro del marco compartido */}
      <div
        className="font-mono text-sm font-medium tracking-wide px-3 py-2.5"
        style={{
          color: 'var(--sage)',
          borderBottom: '1px solid var(--line-strong)',
          background: 'var(--bg-charcoal)',
        }}
      >
        {title}
      </div>

      <div
        className="relative w-full h-[400px] overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          borderBottom: '3px solid var(--ember)',
          background: 'var(--bg-charcoal-2)',
      }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, var(--bg-void) 8%, rgba(14,11,9,0.6) 40%, transparent 75%)' }}
      />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 gap-3">
        <div className={`transform transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <p className="font-body text-sm mb-4 line-clamp-2" style={{ color: 'var(--cream)' }}>{description}</p>
          
          <div className="flex gap-3">
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
      </div>
    </div>
  );
};

export default ProjectCard;