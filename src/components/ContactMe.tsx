import { Mail, Phone, MapPin } from "lucide-react";

const ContactMe = () => {
  return (
    <>
      <section id="contacto" className="px-6 sm:px-12 py-24 lg:py-32 max-w-[1180px] mx-auto text-center">
        <div className="eyebrow justify-center mb-5">
          <span className="hidden" />
          Contacto
        </div>
        <h2 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl mb-5">
          ¿Charlamos de tu
          <br />
          próximo proyecto?
        </h2>
        <p
          className="font-body text-base sm:text-lg max-w-[480px] mx-auto mb-10"
          style={{ color: 'var(--cream-dim)' }}
        >
          Disponible para nuevos proyectos y oportunidades. Escribime y lo vemos.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:adolfo199803@gmail.com" className="btn btn-ghost">
            <Mail className="w-4 h-4" />
            adolfo199803@gmail.com
          </a>
          <a href="tel:+5491132516827" className="btn btn-ghost">
            <Phone className="w-4 h-4" />
            +54 9 11 3251 6827
          </a>
          <span className="btn btn-primary" style={{ cursor: 'default' }}>
            <MapPin className="w-4 h-4" />
            Buenos Aires, Argentina
          </span>
        </div>
      </section>

      <footer
        className="font-mono text-xs text-center px-6 py-8"
        style={{ borderTop: '1px solid var(--line)', color: 'var(--cream-dim)' }}
      >
        © 2026 Adolfo Arellano Covarrubias <span style={{ color: 'var(--ember)' }}>·</span> hecho con cuidado, como todo lo demás
      </footer>
    </>
  );
};

export default ContactMe;