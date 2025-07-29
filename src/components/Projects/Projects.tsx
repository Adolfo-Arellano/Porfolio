import ProjectCard from "./ProjectCard";

const Projects = () => {
  const hayakuSkills = [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React", icon: "react" },
    { name: "Tailwind", icon: "tailwind" }
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
    <div className="w-full bg-gradient-to-bl from-[#FF6B35] via-[#F7931E] to-[#BF360C] pt-10 pb-16">
      <h2 className="text-4xl text-center font-extrabold text-gray-900 pb-2">Proyectos</h2>
      <p className="text-center text-lg font-medium text-gray-800 pb-5">Proyectos cocinados a fuego lento con mucho esmero y pasión</p>

      <div className="flex gap-6 justify-center">
        <ProjectCard demoUrl="https://hayaku-psi.vercel.app/" githubUrl="https://github.com/Adolfo-Arellano/Hayaku" backgroundImage="/assets/Hayaku1.png" skills={hayakuSkills} description="Una pagina web de servicios de entretención de streaming en vivo con diferentes categorias para descubrir." title="Hayaku"/>
        <ProjectCard demoUrl="https://anteiku-coffee-cac.netlify.app/" githubUrl="https://github.com/Adolfo-Arellano/Anteiku-Coffee" backgroundImage="/assets/AnteikuCoffee1.png" skills={anteikuSkills} description="Una cafetería en línea que ofrece una experiencia única de café." title="Anteiku Coffee"/>
        <ProjectCard demoUrl="https://eco-tree.netlify.app/" githubUrl="https://github.com/Adolfo-Arellano/Eco-Tree" backgroundImage="/assets/EcoTree1.png" skills={ecoTreeSkills} description="Decoracion para tus jardines y patios, con armados de areas verdes con estanques y mucho más." title="Eco Tree"/>
      </div>
    </div>
  );
}

export default Projects;