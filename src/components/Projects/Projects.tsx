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
    { name: "Nest", icon: "Nest" },
  ];

  const portfolioSkills = [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "React", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind", icon: "tailwind" },
  ];

  // const hayakuSkills = [
  //   { name: "HTML", icon: "html" },
  //   { name: "CSS", icon: "css" },
  //   { name: "JavaScript", icon: "javascript" },
  //   { name: "React", icon: "react" },
  //   { name: "Tailwind", icon: "tailwind" }
  // ];

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
    <div className="w-full bg-gradient-to-bl from-[#FF6B35] via-[#F7931E] to-[#BF360C] pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl text-center font-extrabold text-gray-900 pb-2">Proyectos</h2>
        <p className="text-center text-base sm:text-lg font-medium text-gray-800 pb-6">Proyectos cocinados a fuego lento con mucho esmero y pasión</p>

        <div className="flex flex-col gap-6 sm:flex-row sm:justify-center sm:flex-wrap">
          <ProjectCard demoUrl="https://overclock-store.vercel.app/" githubUrl="https://github.com/Adolfo-Arellano/OverclockStore" backgroundImage="/assets/OverclockStore.png" skills={overclockStoreSkills} description="E-commerce de componentes y periféricos de computadora, orientado a gaming y alto rendimiento, con diseño moderno y experiencia de usuario clara." title="Overclock Store"/>
          <ProjectCard demoUrl="#" githubUrl="https://github.com/Adolfo-Arellano/Hayaku" backgroundImage="/assets/AdoptaUnJuniorDashboard.png" skills={adoptaUnJuniorSkills} description="Dashboard interno con el objetivo de ayudar a AdoptaUnJunior a nivel organizativo con sus convocatorias." title="AdoptaUnJunior"/>
          <ProjectCard demoUrl="https://porfolio-adolfo-arellano.vercel.app/" githubUrl="https://github.com/Adolfo-Arellano/Porfolio" backgroundImage="/assets/Porfolio.png" skills={portfolioSkills} description="Una pagina web de servicios de entretención de streaming en vivo con diferentes categorias para descubrir." title="Portfolio"/>
          {/* <ProjectCard demoUrl="https://hayaku-psi.vercel.app/" githubUrl="https://github.com/Adolfo-Arellano/Hayaku" backgroundImage="/assets/Hayaku1.png" skills={hayakuSkills} description="Una pagina web de servicios de entretención de streaming en vivo con diferentes categorias para descubrir." title="Hayaku"/> */}
          <ProjectCard demoUrl="https://anteiku-coffee-cac.netlify.app/" githubUrl="https://github.com/Adolfo-Arellano/Anteiku-Coffee" backgroundImage="/assets/AnteikuCoffee1.png" skills={anteikuSkills} description="Una cafetería en línea que ofrece una experiencia única de café." title="Anteiku Coffee"/>
          <ProjectCard demoUrl="https://eco-tree.netlify.app/" githubUrl="https://github.com/Adolfo-Arellano/Eco-Tree" backgroundImage="/assets/EcoTree1.png" skills={ecoTreeSkills} description="Decoracion para tus jardines y patios, con armados de areas verdes con estanques y mucho más." title="Eco Tree"/>
        </div>
      </div>
    </div>
  );
}

export default Projects;
