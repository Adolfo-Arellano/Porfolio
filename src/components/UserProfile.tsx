import { motion } from 'framer-motion';
import adolfoImage from '../assets/Nacho.png';

const UserProfile = () => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex flex-col justify-center px-6 sm:px-12 pt-20 pb-16 max-w-[1180px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-12 lg:gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="eyebrow mb-5">Desarrollador Fullstack</div>

          <h1 className="font-display font-semibold leading-[1.02] tracking-tight text-[42px] sm:text-[56px] lg:text-[72px] mb-6">
            Adolfo Arellano
            <br />
            Covarrubias
            <span className="italic font-normal" style={{ color: 'var(--ember)' }}>.</span>
          </h1>

          <p className="font-body text-lg leading-relaxed max-w-[520px] mb-9" style={{ color: 'var(--cream-dim)' }}>
            "En el código, como en todo buen viaje, no hay atajos que valgan la pena."
          </p>

          <div className="flex flex-wrap gap-3.5 items-center">
            <a href="#proyectos" className="btn btn-primary">Ver proyectos →</a>
            <a href="#contacto" className="btn btn-ghost">Hablemos</a>
          </div>

          <div className="flex gap-3 mt-8">
            <a
              className="social-button"
              href="https://www.linkedin.com/in/adolfo-arellano-covarrubias/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <img src="/icons/linkedin.svg" width="18" height="18" alt="" />
            </a>
            <a
              className="social-button"
              href="https://github.com/Adolfo-Arellano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              title="Github"
            >
              <img src="/icons/github.svg" width="18" height="18" alt="" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div
            className="relative aspect-[4/5] rounded-sm overflow-hidden"
            style={{
              border: '1px solid var(--line-strong)',
              background: 'linear-gradient(150deg, var(--bg-charcoal-2), var(--bg-void))'
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 30% 20%, rgba(232,135,58,0.06), transparent 55%)' }}
            />
            <img
              src={adolfoImage}
              alt="Adolfo Arellano"
              className="relative w-full h-full object-cover object-top"
            />
          </div>
          <div
            className="absolute -bottom-4 -left-4 px-4 py-2.5 font-mono text-[11px] tracking-wide rounded-sm"
            style={{ background: 'var(--bg-charcoal)', border: '1px solid var(--line-strong)', color: 'var(--sage)' }}
          >
            Buenos Aires, AR
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UserProfile;