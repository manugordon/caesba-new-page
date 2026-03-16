const MEMBERS = [
  'Argentina', 'Brasil', 'Chile', 'Uruguay', 'Paraguay', 'Bolivia',
  'Perú', 'Colombia', 'Venezuela', 'Ecuador', 'México', 'Guatemala',
  'Cuba', 'Honduras', 'El Salvador', 'Nicaragua', 'Costa Rica',
  'Panamá', 'España', 'Portugal',
];

export default function Miembros() {
  return (
    <section id="miembros" className="section" aria-labelledby="miembros-title">
      <div className="container">
        <div className="miembros-intro">
          <div>
            <p className="section-eyebrow t-label">Empresas asociadas</p>
            <h2 className="t-heading section-title" id="miembros-title">
              Miembros CAESBA
            </h2>
            <p style={{ marginTop: '12px', color: 'var(--c-text)', fontSize: '1.05rem', maxWidth: '560px' }}>
              Empresas habilitadas en la Provincia de Buenos Aires que conforman nuestra cámara.
            </p>
          </div>
          <div className="miembros-ctas">
            <a
              href="https://caesba.org.ar/info/Socios-Enero-2026.pdf"
              className="btn btn--outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Ver listado completo
            </a>
            <a
              href="https://caesba.org.ar/info/fichainscripcion.pdf"
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Asociarse
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Marquee infinito */}
        <div className="members-marquee" aria-label="Empresas miembro CAESBA">
          <div className="members-track">
            {/* Bloque original */}
            {MEMBERS.map((name) => (
              <div className="member-chip" key={name}>{name}</div>
            ))}
            {/* Bloque duplicado para loop seamless */}
            {MEMBERS.map((name) => (
              <div className="member-chip" aria-hidden="true" key={`dup-${name}`}>{name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
