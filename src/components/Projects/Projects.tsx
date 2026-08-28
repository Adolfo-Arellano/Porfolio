import ProjectCard from "./ProjectCard";

const Projects = () => {
  const overclockStoreSkills = [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "React", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind", icon: "tailwind" }
  ];

  const adoptaUnJuniorSkills = [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "React", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind", icon: "tailwind" },
    { name: "Node.js", icon: "nodejs" },
    { name: "NestJS", icon: "nestjs" },
  ];

  const portfolioSkills = [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
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

  const ecoTreeSkills = [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
  ];

  return (
    <section id="proyectos" className="px-6 sm:px-12 py-24 lg:py-32 max-w-[1180px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-14">
        <h2 className="font-display font-semibold text-4xl">Proyectos</h2>
        <p
          className="font-body text-sm max-w-[340px] sm:text-right"
          style={{ color: 'var(--cream-dim)' }}
        >
          Una selección de trabajos propios y en equipo, de e-commerce a dashboards internos.
        </p>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:justify-center">
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
          githubUrl="https://github.com/Adolfo-Arellano/Hayaku"
          backgroundImage="/assets/AdoptaUnJuniorDashboard.png"
          skills={adoptaUnJuniorSkills}
          description="Dashboard interno con el objetivo de ayudar a AdoptaUnJunior a nivel organizativo con sus convocatorias."
          title="AdoptaUnJunior"
        />
        <ProjectCard
          demoUrl="https://porfolio-adolfo-arellano.vercel.app/"
          githubUrl="https://github.com/Adolfo-Arellano/Porfolio"
          backgroundImage="/assets/Porfolio.png"
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
        <ProjectCard
          demoUrl="https://eco-tree.netlify.app/"
          githubUrl="https://github.com/Adolfo-Arellano/Eco-Tree"
          backgroundImage="/assets/EcoTree1.png"
          skills={ecoTreeSkills}
          description="Decoración para tus jardines y patios, con armados de áreas verdes con estanques y mucho más."
          title="Eco Tree"
        />
      </div>
    </section>
  );
}

export default Projects;