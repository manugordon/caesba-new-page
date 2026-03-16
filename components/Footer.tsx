const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#novedades', label: 'Novedades' },
  { href: '#institucional', label: 'Institucional' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#miembros', label: 'Miembros' },
  { href: '#normativa', label: 'Normativa' },
  { href: '#contacto', label: 'Contacto' },
];

const DOC_LINKS = [
  { href: 'http://www.caesba.org.ar/legislacion/Estatuto%20CAESBA.pdf', label: 'Estatuto' },
  { href: 'http://caesba.org.ar/Reglamentoetica.pdf', label: 'Código de Ética' },
  { href: 'http://caesba.org.ar/RS.pdf', label: 'Responsabilidad Social' },
  { href: 'http://www.caesba.org.ar/legislacion/ley_12297.pdf', label: 'Ley 12.297' },
  { href: 'http://www.caesba.org.ar/legislacion/CONVENIO-COLECTIVO-TRABAJO.pdf', label: 'CCT 507/07' },
  { href: 'https://caesba.org.ar/info/fichainscripcion.pdf', label: 'Ficha de inscripción' },
];

const ORG_LINKS = [
  { href: 'https://www.mseg.gba.gov.ar/areas/dirprovsegpriv/index.html', label: 'DPGSP' },
  { href: 'https://www.argentina.gob.ar/seguridad/anmac', label: 'ANMAC' },
  { href: 'http://www.dnrec.jus.gov.ar/', label: 'Reg. Reincidencia' },
  { href: 'https://caesba.org.ar/0802.html', label: 'CAME' },
];

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-brand__acronym">
              C<span>A</span>ESBA
            </div>
            <p className="footer-brand__desc">
              Cámara de Empresas de Seguridad de Buenos Aires. Representamos la industria de la
              seguridad privada en la Provincia de Buenos Aires desde 1999.
            </p>
            <div className="footer-social" aria-label="Redes sociales">
              <a href="https://www.linkedin.com/in/caesba" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://www.facebook.com/CAESBA/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/caesba/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <div className="footer-col__title">Navegación</div>
            <ul className="footer-links" role="list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Documentos */}
          <div>
            <div className="footer-col__title">Documentos</div>
            <ul className="footer-links" role="list">
              {DOC_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Organismos + Contacto */}
          <div>
            <div className="footer-col__title">Organismos</div>
            <ul className="footer-links" role="list">
              {ORG_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '24px' }}>
              <div className="footer-col__title">Contacto</div>
              <ul className="footer-links" role="list">
                <li><a href="mailto:info@caesba.org.ar">info@caesba.org.ar</a></li>
                <li><a href="tel:+542216107161">(221) 610-7161</a></li>
                <li><span style={{ color: 'rgba(255,255,255,.35)' }}>La Plata, Buenos Aires</span></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div className="container">
          <div className="footer-bottom">
            <div className="footer-bottom__text">
              © 2025 CAESBA — Cámara de Empresas de Seguridad de Buenos Aires. Todos los derechos reservados.
            </div>
            <div className="footer-came">
              <span className="came-badge">Miembro CAME</span>
              <span>Confederación Argentina de la Mediana Empresa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
