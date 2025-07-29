import adolfoImage from '../assets/adolfo.jpg';

const UserProfile = () => {
  return (
    <div className="w-full bg-gradient-to-br from-[#FFF8E1] via-[#FFECB3] to-[#FF8F00] pt-8 pb-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-full rounded-full flex items-center justify-center text-8xl">
            <img 
              src={adolfoImage} 
              alt="Foto Perfil Adolfo" 
              className="w-72 h-72 rounded-full object-cover mb-4 border-4 border-white/20 shadow-2xl"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-grey-900 text-center leading-tight mb-5">
            Adolfo Ignacio Arellano Covarrubias
          </h1>

          <div className="flex justify-center items-center gap-3">
            <a
              className="social-button bg-white transition-transform"
              href="https://www.linkedin.com/in/adolfo-arellano-covarrubias/"
              target="_blank"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg width="30" height="30">
                <use href="/sprite.svg#linkedin"></use>
              </svg>
            </a>
            <a
              className="social-button bg-black transition-transform"
              href="https://github.com/Adolfo-Arellano"
              target="_blank"
              aria-label="Github"
              title="Github"
            >
              <svg width="30" height="30">
                  <use href="/sprite.svg#github"></use>
              </svg>
            </a>
          </div>
          
          <p className="text-gray-700 font-medium text-lg text-center max-w-2xl px-4 mt-4">
            Desarrollador Frontend que trata cada proyecto como una receta única. 
            Combinando creatividad, técnica y pasión para crear interfaces que no solo 
            sean modernas, sino que también deleiten a quienes las utilicen. 
            Siempre buscando los mejores ingredientes tecnológicos para cada plato digital.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;