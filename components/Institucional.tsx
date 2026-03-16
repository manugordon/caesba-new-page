import FadeIn from './FadeIn';

const DOCS = [
  {
    href: 'https://www.youtube.com/watch?v=E1J5ZxJ3tw8',
    label: 'Video institucional',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    href: 'http://www.caesba.org.ar/legislacion/Estatuto%20CAESBA.pdf',
    label: 'Estatuto',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    href: 'http://caesba.org.ar/ComisionDirectiva2024.docx.pdf',
    label: 'Comisión Directiva',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    href: 'http://caesba.org.ar/Reglamentoetica.pdf',
    label: 'Código de Ética',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    href: 'http://caesba.org.ar/RS.pdf',
    label: 'Responsabilidad Social',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const CD_MEMBERS = [
  { initials: 'WS', name: 'Walter R. Smith', role: 'Presidente', company: 'Ezer Seguridad Privada S.A.' },
  { initials: 'LG', name: 'Leonardo Gil', role: 'Vicepresidente', company: 'Prosegur S.A.' },
  { initials: 'GC', name: 'Gustavo A. Chena', role: 'Secretario', company: 'Seguridad Imperio 2000 S.R.L.' },
  { initials: 'VB', name: 'Viviana S. Beller', role: 'Tesorera', company: 'Sounch Seguridad S.R.L.' },
  { initials: 'FA', name: 'Felipe Albertella', role: 'Vocal Titular 1°', company: 'Novit S.A.' },
];

export default function Institucional() {
  return (
    <section id="institucional" className="section section--alt" aria-labelledby="institucional-title">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow t-label">Quiénes somos</p>
          <h2 className="t-heading section-title" id="institucional-title">
            Sobre CAESBA
          </h2>
        </div>

        <div className="institucional-grid">
          <div className="institucional-text">
            <p>
              CAESBA es una organización sin fines de lucro que tiene como finalidad representar la
              industria de la seguridad privada en la Provincia de Buenos Aires.
            </p>
            <p>
              Se funda en el año 1999, como consecuencia de la sanción de la Ley Provincial 12.297
              que regula la actividad, debido a la necesidad de las empresas de constituir una
              asociación que las represente ante la autoridad de control.
            </p>
            <p>
              Desde entonces CAESBA trabaja junto a la Dirección Provincial para la Gestión de la
              Seguridad Privada (DPGSP) en la creación y cumplimiento de reglas claras en el
              mercado, con el fin de contribuir a la seguridad en general.
            </p>
            <p>
              Sus principales objetivos son la{' '}
              <strong>profesionalización permanente de la industria</strong>, la capacitación del
              capital humano contratado, la mejora de sus condiciones laborales, y la defensa de la
              transparencia de la actividad.
            </p>
            <p>
              Su misión es brindar valor a sus asociados a partir de la unión de los mismos, el
              desarrollo de sus recursos y su representación ante organismos públicos y privados.
            </p>

            <div
              className="institucional-docs"
              role="list"
              aria-label="Documentos institucionales"
            >
              {DOCS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="doc-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="cd__title">Comisión Directiva 2024</h3>
            <ul className="cd__list" role="list">
              {CD_MEMBERS.map(({ initials, name, role, company }) => (
                <FadeIn as="li" className="cd-member" key={name}>
                  <div className="cd-member__avatar" aria-hidden="true">
                    {initials}
                  </div>
                  <div>
                    <div className="cd-member__name">{name}</div>
                    <div className="cd-member__role">{role}</div>
                    <div className="cd-member__company">{company}</div>
                  </div>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
