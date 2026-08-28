import { motion } from 'framer-motion';

const tags = ['Full-stack', 'TypeScript', 'UI/UX con criterio', 'Cocina como hobby'];

const AboutMe = () => {
  return (
    <section id="sobremi" className="px-6 sm:px-12 py-24 lg:py-32 max-w-[1180px] mx-auto">
      <motion.div
        className="max-w-[720px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow mb-5">Sobre mí</div>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight mb-6">
          De la cocina profesional
          <br />
          al desarrollo de software.
        </h2>

        <p className="font-body text-base leading-relaxed mb-4" style={{ color: 'var(--cream-dim)' }}>
          Soy <strong style={{ color: 'var(--cream)' }}>Adolfo Ignacio Arellano Covarrubias</strong>,
          desarrollador fullstack actualmente cursando la Tecnicatura Superior en Desarrollo de Software
          en el IFTS N°11. Antes de dedicarme a esto, pasé por la cocina profesional — un oficio que sigo
          practicando hoy como pasión, y que sin darme cuenta terminó formando la manera en que encaro
          cada proyecto: con orden, paciencia, y ganas de que el resultado final se sienta cuidado.
        </p>

        <p className="font-body text-base leading-relaxed mb-4" style={{ color: 'var(--cream-dim)' }}>
          Trabajo principalmente con{' '}
          <strong style={{ color: 'var(--cream)' }}>
            React, TypeScript, Node.js, Express y PostgreSQL
          </strong>
          , y disfruto tanto de armar la arquitectura de un sistema como de pulir el último detalle
          de una interfaz.
        </p>

        <div className="flex flex-wrap gap-2.5 mt-7 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] tracking-wide px-3.5 py-2 rounded-full"
              style={{ border: '1px solid var(--line-strong)', color: 'var(--sage)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="rounded-sm p-8"
          style={{ background: 'var(--bg-charcoal)', border: '1px solid var(--line-strong)' }}
        >
          <div className="eyebrow mb-4">Fuera del código</div>
          <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--cream-dim)' }}>
            La cocina me enseñó lo mismo que el desarrollo: seguir un proceso, ajustar sobre la marcha,
            y que el resultado final depende de cuidar cada paso, no solo el más vistoso.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;