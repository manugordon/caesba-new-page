import FadeIn from './FadeIn';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const NOVEDADES = [
  {
    badge: { label: 'Evento', className: 'badge--event' },
    title: 'INNOVA 2025 — Jornada de Capacitación',
    desc: 'Sumate a la jornada de capacitación e innovación para el sector de la seguridad privada. Cronograma e inscripción disponibles.',
    linkHref: 'http://www.caesba.org.ar/Flyer-INNOVA-2025-Sumate.pdf',
    linkLabel: 'Ver programa',
  },
  {
    badge: { label: 'Acuerdo salarial', className: 'badge--doc' },
    title: 'Adenda Anexo W — Acta Acuerdo Salarial 2026 (UPSRA)',
    desc: 'Publicado el acuerdo salarial enero–junio 2026 del CCT 507/07 con UPSRA. Incluye homologación de la Adenda Anexo W.',
    linkHref:
      'http://www.caesba.org.ar/legislacion/ACTA-ACUERDO-SALARIAL-ENE-JUN-2026-UPSRA-ADENDA-ANEXO-W.pdf',
    linkLabel: 'Descargar PDF',
  },
  {
    badge: { label: 'Cursos 2025', className: 'badge--news' },
    title: 'Cursos y capacitaciones 2025 — Inscripciones abiertas',
    desc: 'CAESBA ofrece programas de capacitación para el personal de seguridad privada. Consultá los cursos disponibles e inscribite.',
    linkHref: 'http://www.caesba.org.ar/img/detalleInscripcion.pdf',
    linkLabel: 'Ver detalle',
  },
];

export default function Novedades() {
  return (
    <section id="novedades" className="section" aria-labelledby="novedades-title">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow t-label">Novedades</p>
          <h2 className="t-heading section-title" id="novedades-title">
            Últimas novedades
          </h2>
          <p className="section-subtitle">
            Información actualizada del sector, eventos, acuerdos y documentación relevante para
            la industria.
          </p>
        </div>

        <div className="novedades-grid">
          {NOVEDADES.map(({ badge, title, desc, linkHref, linkLabel }) => (
            <FadeIn as="article" className="novedad-card" key={title}>
              <div className="novedad-card__badge">
                <span className={`badge ${badge.className}`}>{badge.label}</span>
              </div>
              <div className="novedad-card__body">
                <h3 className="novedad-card__title">{title}</h3>
                <p className="novedad-card__desc">{desc}</p>
                <a
                  href={linkHref}
                  className="novedad-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkLabel}
                  <ArrowIcon />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
