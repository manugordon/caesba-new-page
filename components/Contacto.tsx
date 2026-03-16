'use client';

import { useState, ChangeEvent } from 'react';

interface FormState {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

const INITIAL: FormState = {
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  asunto: '',
  mensaje: '',
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contacto() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.nombre || !form.email || !form.mensaje) {
      alert('Por favor completá los campos obligatorios: Nombre, Email y Mensaje.');
      return;
    }
    if (!isValidEmail(form.email)) {
      alert('Por favor ingresá un email válido.');
      return;
    }

    setSubmitting(true);
    // Simular envío — reemplazar con fetch a backend real
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contacto" className="section section--dark" aria-labelledby="contacto-title">
      <div className="container">
        <div className="contacto-grid">

          {/* Info de contacto */}
          <div className="contacto-info">
            <p className="section-eyebrow t-label">Contacto</p>
            <h2
              className="t-heading"
              style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: 'var(--c-text-strong)', marginBottom: '16px' }}
              id="contacto-title"
            >
              ¿Cómo podemos ayudarte?
            </h2>
            <p style={{ color: 'var(--c-text)', lineHeight: 1.7, marginBottom: '40px', fontSize: '.95rem' }}>
              Completá el formulario para consultas sobre cómo asociarte, normativa vigente,
              trámites o cualquier información que necesites solicitarnos.
            </p>

            <div className="contacto-detail">
              <div className="contacto-detail__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="contacto-detail__label">Dirección</div>
                <div className="contacto-detail__value">
                  Calle 43 N°606 entre 7 y 8<br />
                  La Plata, Buenos Aires — Argentina
                </div>
              </div>
            </div>

            <div className="contacto-detail">
              <div className="contacto-detail__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.42 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="contacto-detail__label">Teléfonos</div>
                <div className="contacto-detail__value">
                  <a href="tel:+542216107161">(221) 610-7161</a> — celular<br />
                  <a href="tel:+542212280413">(221) 228-0413</a> — oficina
                </div>
              </div>
            </div>

            <div className="contacto-detail">
              <div className="contacto-detail__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contacto-detail__label">Email</div>
                <div className="contacto-detail__value">
                  <a href="mailto:info@caesba.org.ar">info@caesba.org.ar</a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="contacto-form" role="form" aria-label="Formulario de contacto">
            <h3 className="contacto-form__title">Envianos tu consulta</h3>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-nombre">Nombre *</label>
                <input
                  type="text"
                  id="contact-nombre"
                  name="nombre"
                  className="form-control"
                  placeholder="Tu nombre"
                  required
                  autoComplete="given-name"
                  value={form.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-empresa">Empresa</label>
                <input
                  type="text"
                  id="contact-empresa"
                  name="empresa"
                  className="form-control"
                  placeholder="Tu empresa"
                  autoComplete="organization"
                  value={form.empresa}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email *</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="form-control"
                  placeholder="tu@email.com"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-telefono">Teléfono</label>
                <input
                  type="tel"
                  id="contact-telefono"
                  name="telefono"
                  className="form-control"
                  placeholder="(011) 0000-0000"
                  autoComplete="tel"
                  value={form.telefono}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-asunto">Asunto</label>
              <input
                type="text"
                id="contact-asunto"
                name="asunto"
                className="form-control"
                placeholder="Motivo de tu consulta"
                value={form.asunto}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-mensaje">Mensaje *</label>
              <textarea
                id="contact-mensaje"
                name="mensaje"
                className="form-control"
                placeholder="Escribí tu consulta aquí…"
                required
                value={form.mensaje}
                onChange={handleChange}
              />
            </div>

            {!submitted && (
              <button
                type="button"
                className="btn btn--primary form-submit"
                disabled={submitting}
                onClick={handleSubmit}
              >
                {submitting ? 'Enviando…' : 'Enviar consulta'}
                {!submitting && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                )}
              </button>
            )}

            {submitted && (
              <div className="form-success is-visible" role="status" aria-live="polite">
                ✓ Tu mensaje fue enviado. Te responderemos a la brevedad.
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
