'use client';

import { useState, useEffect, useCallback } from 'react';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { href: '#novedades', label: 'Novedades' },
  { href: '#institucional', label: 'Institucional' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#miembros', label: 'Miembros' },
  { href: '#normativa', label: 'Normativa' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Efecto de scroll en el nav
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight del link activo según sección visible
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMobileNav = useCallback(() => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  }, []);

  const toggleMobileNav = () => {
    const next = !mobileOpen;
    setMobileOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  // Cerrar menú con Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) closeMobileNav();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen, closeMobileNav]);

  return (
    <>
      <nav
        className={`site-nav${scrolled ? ' site-nav--scrolled' : ''}`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="container">
          <div className="nav-inner">

            <a href="#inicio" className="nav-logo" aria-label="CAESBA — Inicio">
              <span className="nav-logo__acronym">
                C<span>A</span>ESBA
              </span>
              <span className="nav-logo__tagline">Seguridad Privada · Bs. As.</span>
            </a>

            <ul className="nav-links" role="list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={activeSection === href.slice(1) ? 'is-active' : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <ThemeToggle />
              <div className="nav-social" aria-label="Redes sociales">
                <a
                  href="https://www.linkedin.com/in/caesba"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/CAESBA/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/caesba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
              <div className="nav-cta">
                <a href="#contacto" className="btn btn--primary btn--sm">
                  Contacto
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <button
              className="nav-hamburger"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={toggleMobileNav}
            >
              <span className="nav-hamburger__line" />
              <span className="nav-hamburger__line" />
              <span className="nav-hamburger__line" />
            </button>

          </div>
        </div>
      </nav>

      {/* Menú mobile */}
      <nav
        id="mobile-nav"
        className={`nav-mobile${mobileOpen ? ' is-open' : ''}`}
        aria-label="Menú móvil"
        role="navigation"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} onClick={closeMobileNav}>
            {label}
          </a>
        ))}
        <a href="#contacto" className="btn btn--primary" onClick={closeMobileNav}>
          Contactarnos
        </a>
      </nav>
    </>
  );
}
