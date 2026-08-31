import ProjectCard from "./ProjectCard";

const Projects = () => {
  const ponosSkills = [
    { name: "React", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind", icon: "tailwind" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "Prisma", icon: "prisma" },
    { name: "PostgreSQL", icon: "postgresql" },
  ];

  const overclockStoreSkills = [
    { name: "React", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind", icon: "tailwind" }
  ];

  const adoptaUnJuniorSkills = [
    { name: "React", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind", icon: "tailwind" },
    { name: "Node.js", icon: "nodejs" },
    { name: "NestJS", icon: "nestjs" },
  ];

  const portfolioSkills = [
    { name: "React", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind", icon: "tailwind" },
  ];

  const anteikuSkills = [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Bootstrap", icon: "bootstrap" }
  ];

  return (
    <section
      id="proyectos"
      className="w-full"
      style={{ background: 'var(--bg-charcoal)' }}
    >
      <div className="px-6 sm:px-12 py-24 lg:py-32 max-w-[1260px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-14">
          <h2 className="font-display font-semibold text-4xl">Proyectos</h2>
          <p
            className="font-body text-sm max-w-[340px] sm:text-right"
            style={{ color: 'var(--cream-dim)' }}
          >
            
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <ProjectCard
            demoUrl="https://ponos-five.vercel.app/"
            githubUrl="https://github.com/Adolfo-Arellano/Ponos"
            backgroundImage="/assets/Ponos.png"
            skills={ponosSkills}
            description="Marketplace de servicios para el hogar en Argentina, desarrollado en equipo. Lideré el equipo técnico, guiando arquitectura backend, consistencia de UI en frontend y presentaciones del proyecto."
            title="Ponos"
          />
          <ProjectCard
            demoUrl="https://overclock-store.vercel.app/"
            githubUrl="https://github.com/Adolfo-Arellano/OverclockStore"
            backgroundImage="/assets/OverclockStore.png"
            skills={overclockStoreSkills}
            description="E-commerce de componentes y periféricos de computadora, orientado a gaming y alto rendimiento, con diseño moderno y experiencia de usuario clara."
            title="Overclock Store"
          />
          <ProjectCard
            demoUrl="#"
            githubUrl="#"
            backgroundImage="/assets/AdoptaUnJuniorDashboard.png"
            skills={adoptaUnJuniorSkills}
            description="Dashboard interno con el objetivo de ayudar a AdoptaUnJunior a nivel organizativo con sus convocatorias."
            title="AdoptaUnJunior"
          />
          <ProjectCard
            demoUrl="https://porfolio-adolfo-arellano.vercel.app/"
            githubUrl="https://github.com/Adolfo-Arellano/Porfolio"
            backgroundImage="/assets/Portfolio.png"
            skills={portfolioSkills}
            description="Portfolio personal donde presento mis proyectos como desarrollador fullstack, con foco en la experiencia de usuario, animaciones y diseño visual."
            title="Portfolio"
          />
          <ProjectCard
            demoUrl="https://anteiku-coffee-cac.netlify.app/"
            githubUrl="https://github.com/Adolfo-Arellano/Anteiku-Coffee"
            backgroundImage="/assets/AnteikuCoffee1.png"
            skills={anteikuSkills}
            description="Una cafetería en línea que ofrece una experiencia única de café."
            title="Anteiku Coffee"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;