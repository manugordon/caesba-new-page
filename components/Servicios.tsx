import FadeIn from './FadeIn';

const SERVICIOS = [
  {
    title: 'Orientación a usuarios',
    desc: 'Asesoramiento a usuarios de servicios de seguridad privada sobre sus derechos y opciones disponibles en el mercado.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Asistencia en trámites',
    desc: 'Apoyo y acompañamiento en trámites ante la DPGSP, habilitaciones y gestiones administrativas del sector.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Socios CAME',
    desc: 'CAESBA es miembro oficial de la Confederación Argentina de la Mediana Empresa, ampliando los beneficios para sus asociados.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: 'Sistema de denuncias',
    desc: 'Canal formal para denuncias sobre irregularidades en la industria de la seguridad privada en la Provincia.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Gestoría empresarial',
    desc: 'Gestión y representación ante organismos públicos, privados y sindicales en nombre de las empresas asociadas.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Info CAESBA directa',
    desc: 'Canal de consultas rápidas sobre la actividad, novedades del sector y documentación disponible para asociados.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.42 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="section section--dark" aria-labelledby="servicios-title">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow t-label">Lo que hacemos</p>
          <h2 className="t-heading section-title" id="servicios-title">
            Nuestros servicios
          </h2>
          <p className="section-subtitle">
            Acompañamos a las empresas asociadas con orientación, asistencia y representación ante
            los organismos del sector.
          </p>
        </div>

        <div className="servicios-grid">
          {SERVICIOS.map(({ title, desc, icon }) => (
            <FadeIn className="servicio-card" key={title}>
              <div className="servicio-card__icon" aria-hidden="true">
                {icon}
              </div>
              <div className="servicio-card__title">{title}</div>
              <div className="servicio-card__desc">{desc}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
