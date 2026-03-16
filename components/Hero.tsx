export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-label="Inicio">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__content">
        <div className="container">
          <div className="hero__inner">

            <div className="hero__text">
              <div className="hero__eyebrow" aria-hidden="true">
                <span className="hero__eyebrow-dot" />
                Desde 1999 · Provincia de Buenos Aires
              </div>
              <h1 className="t-display hero__title">
                La voz de la<br />
                <em>seguridad privada</em><br />
                bonaerense
              </h1>
              <p className="hero__desc">
                CAESBA representa, articula y profesionaliza la industria de la seguridad privada
                en la Provincia de Buenos Aires, trabajando junto a la DPGSP por un mercado
                transparente y regulado.
              </p>
              <div className="hero__actions">
                <a href="#institucional" className="btn btn--primary">
                  Conocer CAESBA
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#normativa" className="btn btn--outline-white">
                  Ver normativa
                </a>
              </div>
            </div>

            <div className="hero__cards" aria-label="Accesos rápidos">
              <div className="hero-card">
                <div className="hero-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <div className="hero-card__title">Normativa vigente</div>
                <div className="hero-card__desc">Leyes, decretos y CCT actualizados del sector</div>
              </div>
              <div className="hero-card">
                <div className="hero-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="hero-card__title">Miembros asociados</div>
                <div className="hero-card__desc">Empresas habilitadas en la Provincia de Buenos Aires</div>
              </div>
              <div className="hero-card">
                <div className="hero-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 9h6M9 12h6M9 15h4" />
                  </svg>
                </div>
                <div className="hero-card__title">Guía de trámites</div>
                <div className="hero-card__desc">Alta de vigilador, tasas y certificados</div>
              </div>
              <div className="hero-card">
                <div className="hero-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.42 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="hero-card__title">Contacto directo</div>
                <div className="hero-card__desc">Consultas, denuncias y orientación a usuarios</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
        Scroll
      </div>
    </section>
  );
}
