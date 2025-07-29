const Skills = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#8BC34A] via-[#689F38] to-[#1B5E20] pt-10 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl text-center font-extrabold text-gray-900 pb-2">Mis especializaciones</h2>
        <p className="text-center text-lg font-medium text-gray-800 pb-5">Cada tecnología es un ingrediente clave en mi cocina.</p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a className="technologies group col-span-2 bg-gray-400/70 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-700/90 via-orange-500/90 to-orange-300/90 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
          <span className="absolute bottom-0 left-2 font-bold text-white text-3xl pl-1 pb-1 group-hover:animate-bouncing animate-steps-retro z-10">HTML</span>
          <span className="absolute top-3 left-3 rounded-lg px-2 py-0.5 bg-white/30 text-sm font-bold z-10">La base de toda buena receta</span>
          <svg className="absolute -right-5 -bottom-5 -rotate-6 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-500 z-10" width="150" height="150">
              <use href="/sprite.svg#html"></use>
          </svg>
        </a>

        <a className="technologies group col-span-1 bg-gray-400/70 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700/90 via-purple-500/90 to-purple-300/90 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
          <span className="absolute bottom-0 left-2 font-bold text-white text-3xl pl-1 pb-1 z-10">CSS</span>
          <span className="absolute top-3 left-3 rounded-lg px-2 py-0.5 bg-white/30 text-sm font-bold z-10">El arte de la presentación</span>
          <svg className="absolute -right-2 -bottom-2 -rotate-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 z-10" width="150" height="150">
            <use href="/sprite.svg#css"></use>
          </svg>
        </a>

        <a className="technologies group col-span-1 bg-gray-400/70 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-700/90 via-yellow-500/90 to-yellow-300/90 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
          <span className="absolute bottom-0 left-2 font-bold text-white text-3xl z-10 pl-1 pb-1">JS</span>
          <span className="absolute top-3 left-3 rounded-lg px-2 py-0.5 bg-white/30 text-sm font-bold z-10">La chispa que da vida</span>
          <svg className="absolute -right-2 -bottom-2 -rotate-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 z-10" width="140" height="140">
            <use href="/sprite.svg#javascript"></use>
          </svg>
        </a>

        <a className="technologies group col-span-2 bg-gray-400/70 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/90 via-cyan-500/90 to-cyan-700/90 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
          <span className="absolute bottom-0 left-2 font-bold text-white text-3xl pl-1 pb-1 z-10">React</span>
          <span className="absolute top-3 left-3 rounded-lg px-2 py-0.5 bg-white/30 text-sm font-bold z-10">El fuego que todo lo transforma</span>
          <svg className="absolute -right-4 -bottom-4 -rotate-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 z-10" width="150" height="150">
            <use href="/sprite.svg#react"></use>
          </svg>
        </a>

        <a className="technologies group col-span-2 bg-gray-400/70 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/90 via-blue-500/90 to-blue-300/90 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
          <span className="absolute bottom-0 left-2 font-bold text-white text-3xl pl-1 pb-1 z-10">TS</span>
          <span className="absolute top-3 left-3 rounded-lg px-2 py-0.5 bg-white/30 text-sm font-bold z-10">La receta perfecta, paso a paso</span>
          <svg className="absolute -right-2 -bottom-2 -rotate-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 z-10" width="150" height="150">
            <use href="/sprite.svg#typescript"></use>
          </svg>
        </a>

        <a className="technologies group col-span-1 bg-gray-400/70 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-300/70 via-cyan-500/70 to-cyan-700/70 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
          <span className="absolute bottom-0 left-2 font-bold text-white text-3xl z-10 pl-1 pb-1">Tailwind</span>
          <span className="absolute top-3 left-3 rounded-lg px-2 py-0.5 bg-white/30 text-sm font-bold z-10">Los condimentos que dan sabor</span>
          <svg className="absolute -right-5 -bottom-4 -rotate-12 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 z-10" width="155" height="155">
            <use href="/sprite.svg#tailwind"></use>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Skills;