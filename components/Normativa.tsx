'use client';

import { useState, useMemo } from 'react';

type FilterKey = 'all' | 'actividad' | 'laboral' | 'general' | 'enlace';

interface NormItem {
  text: string;
  label: string;
  href: string;
  iconType: 'doc' | 'link';
}

interface NormCategory {
  id: string;
  category: Exclude<FilterKey, 'all'>;
  title: string;
  column: 1 | 2;
  categoryIconPaths: React.ReactNode;
  items: NormItem[];
}

// ──────────────────────────────────────────────
// Iconos reutilizables
// ──────────────────────────────────────────────
const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="icon" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="icon" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const ArrowOutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="normativa-item__arrow" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="chevron" aria-hidden="true">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

// ──────────────────────────────────────────────
// Datos de normativa
// ──────────────────────────────────────────────
const CATEGORIES: NormCategory[] = [
  {
    id: 'upsra',
    category: 'laboral',
    title: 'UPSRA — CCT 507/07',
    column: 1,
    categoryIconPaths: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
        style={{ width: 18, height: 18, flexShrink: 0, color: 'var(--c-turquoise)' }} aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    items: [
      { text: 'convenio colectivo trabajo 507/07 upsra laboral', label: 'Convenio Colectivo de Trabajo 507/07', href: 'http://www.caesba.org.ar/legislacion/CONVENIO-COLECTIVO-TRABAJO.pdf', iconType: 'doc' },
      { text: 'adenda anexo w acta acuerdo salarial 2026 upsra laboral', label: 'Adenda Anexo W — Acta Acuerdo Salarial 2026', href: 'http://www.caesba.org.ar/legislacion/ACTA-ACUERDO-SALARIAL-ENE-JUN-2026-UPSRA-ADENDA-ANEXO-W.pdf', iconType: 'doc' },
      { text: 'homologacion adenda anexo w upsra laboral', label: 'Homologación Adenda Anexo W', href: 'http://www.caesba.org.ar/legislacion/HOMOLOGACION-ADENDA-ANEXO-W.pdf', iconType: 'doc' },
      { text: 'origen nocturnidad upsra laboral', label: 'Origen Nocturnidad', href: '#', iconType: 'doc' },
      { text: 'origen adicional upsra laboral', label: 'Origen Adicional', href: '#', iconType: 'doc' },
      { text: 'anteriores upsra laboral', label: 'Anteriores', href: '#', iconType: 'doc' },
    ],
  },
  {
    id: 'actividad',
    category: 'actividad',
    title: 'De la actividad',
    column: 1,
    categoryIconPaths: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
        style={{ width: 18, height: 18, flexShrink: 0, color: 'var(--c-turquoise)' }} aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    items: [
      { text: 'ley provincial 12297 seguridad privada actividad', label: 'Ley provincial 12.297', href: 'http://www.caesba.org.ar/legislacion/ley_12297.pdf', iconType: 'doc' },
      { text: 'decreto reglamentario 1897 actividad', label: 'Decreto Reglamentario 1897', href: 'http://www.caesba.org.ar/legislacion/DTO%20REG%201897%20de%20la%20Ley%2012297.pdf', iconType: 'doc' },
      { text: 'decreto 107 2005 tope mil empleados actividad', label: 'Decreto 107/2005 — Tope Mil Empleados', href: 'http://www.caesba.org.ar/legislacion/DTO%20107%20DEL%202005-%20Tope%20de%20Mil%20Empleados.pdf', iconType: 'doc' },
      { text: 'ley 20429 armas explosivos actividad', label: 'Ley 20.429 — Armas y Explosivos', href: 'http://www.caesba.org.ar/legislacion/LEY%2020429-%20Ley%20Nacional%20de%20Armas%20y%20Explosivos.pdf', iconType: 'doc' },
    ],
  },
  {
    id: 'enlaces',
    category: 'enlace',
    title: 'Enlaces de interés',
    column: 1,
    categoryIconPaths: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
        style={{ width: 18, height: 18, flexShrink: 0, color: 'var(--c-turquoise)' }} aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    items: [
      { text: 'dpgsp dirección provincial seguridad privada enlace', label: 'DPGSP — Dirección Provincial de Seguridad Privada', href: 'https://www.mseg.gba.gov.ar/areas/dirprovsegpriv/index.html', iconType: 'link' },
      { text: 'renar anmac armas registro enlace', label: 'RENAR — Registro Nacional de Armas', href: 'https://www.argentina.gob.ar/seguridad/anmac', iconType: 'link' },
      { text: 'registro nacional reincidencia enlace', label: 'Registro Nacional de Reincidencia', href: '#', iconType: 'link' },
    ],
  },
  {
    id: 'ssip',
    category: 'laboral',
    title: 'SSIP — CCT 782/2020',
    column: 2,
    categoryIconPaths: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
        style={{ width: 18, height: 18, flexShrink: 0, color: 'var(--c-turquoise)' }} aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    items: [
      { text: 'adenda anexo d acta acuerdo salarial 2025 ssip laboral', label: 'Adenda Anexo D — Acta Acuerdo Salarial 2025', href: 'http://www.caesba.org.ar/legislacion/ACTA-ACUERDO-SALARIAL-SSIP-OCTUBRE-2025.pdf', iconType: 'doc' },
      { text: 'homologacion adenda anexo d acta acuerdo salarial 2025 ssip laboral', label: 'Homologación Adenda Anexo D — Acta Acuerdo Salarial 2025', href: '#', iconType: 'doc' },
      { text: 'anteriores ssip laboral', label: 'Anteriores', href: '#', iconType: 'doc' },
    ],
  },
  {
    id: 'generales',
    category: 'general',
    title: 'Generales',
    column: 2,
    categoryIconPaths: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
        style={{ width: 18, height: 18, flexShrink: 0, color: 'var(--c-turquoise)' }} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
    items: [
      { text: 'ley 20744 contrato trabajo general', label: 'Ley 20.744 — Contrato de Trabajo', href: 'http://www.caesba.org.ar/legislacion/LEY%2020744-%20Regimen%20de%20Contrato%20de%20Trabajo.pdf', iconType: 'doc' },
      { text: 'ley 11544 jornada trabajo general', label: 'Ley 11.544 — Jornada de Trabajo', href: 'http://www.caesba.org.ar/legislacion/Ley%2011544-%20Jornada%20de%20Trabajo.pdf', iconType: 'doc' },
      { text: 'ley 18204 descanso semanal general', label: 'Ley 18.204 — Descanso Semanal', href: 'http://www.caesba.org.ar/legislacion/LEY%2018204-%20regimen%20de%20Descanso%20Semanal.pdf', iconType: 'doc' },
      { text: 'ley 11544 decreto reglamentario 16115 1933 jornada trabajo general', label: 'Ley 11.544 — Dto. Reglamentario 16.115/33', href: 'https://www.caesba.org.ar/legislacion/DTO%20REG%2016.115%201933%20de%20la%20Ley%2011.544.pdf', iconType: 'doc' },
    ],
  },
  {
    id: 'tramites',
    category: 'enlace',
    title: 'Guía de trámites',
    column: 2,
    categoryIconPaths: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
        style={{ width: 18, height: 18, flexShrink: 0, color: 'var(--c-turquoise)' }} aria-hidden="true">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    items: [
      { text: 'alta vigilador objetivo tramite enlace', label: 'Alta de vigilador y objetivo', href: 'http://caesba.org.ar/altayrenovacion2.pdf', iconType: 'doc' },
      { text: 'tasas administrativas dpgsp tramite enlace', label: 'Tasas administrativas', href: 'https://www.mseg.gba.gov.ar/areas/dirprovsegpriv/tasas.html', iconType: 'doc' },
      { text: 'solicitud certificado prestadoras tramite enlace', label: 'Solicitud de certificado de prestadoras', href: '#', iconType: 'doc' },
      { text: 'obtención certificado antecedentes tramite enlace', label: 'Obtención de Certificado de Antecedentes', href: '#', iconType: 'doc' },
    ],
  },
];

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'Todas' },
  { key: 'actividad', label: 'De la actividad' },
  { key: 'laboral', label: 'Laborales' },
  { key: 'general', label: 'Generales' },
  { key: 'enlace', label: 'Enlaces y trámites' },
];

export default function Normativa() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<FilterKey>('all');
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(CATEGORIES.map((c) => c.id))
  );

  const toggleCategory = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // Calcula qué items y categorías son visibles
  const visibility = useMemo(() => {
    const term = search.trim().toLowerCase();
    const isFiltering = term !== '' || filter !== 'all';

    const categoryMap = CATEGORIES.map((cat) => {
      const matchesFilter = filter === 'all' || cat.category === filter;

      const visibleItems = cat.items.filter((item) => {
        const matchesCat = filter === 'all' || cat.category === filter;
        const matchesSearch = term === '' || item.text.includes(term);
        return matchesCat && matchesSearch;
      });

      const hasVisible = matchesFilter && visibleItems.length > 0;

      return { id: cat.id, hasVisible, visibleItems };
    });

    const totalVisible = categoryMap.reduce((acc, c) => acc + c.visibleItems.length, 0);

    // Abrir automáticamente categorías con resultados cuando se filtra/busca
    if (isFiltering) {
      const autoOpen = new Set<string>();
      categoryMap.forEach(({ id, hasVisible }) => {
        if (hasVisible) autoOpen.add(id);
      });
      return { categoryMap, totalVisible, autoOpen };
    }

    return { categoryMap, totalVisible, autoOpen: null };
  }, [search, filter]);

  // Determina si una categoría está abierta (respeta apertura automática)
  const isOpen = (id: string) => {
    if (visibility.autoOpen) return visibility.autoOpen.has(id);
    return openIds.has(id);
  };

  const col1 = CATEGORIES.filter((c) => c.column === 1);
  const col2 = CATEGORIES.filter((c) => c.column === 2);

  const renderCategory = (cat: NormCategory) => {
    const vis = visibility.categoryMap.find((v) => v.id === cat.id)!;
    if (!vis.hasVisible) return null;

    const open = isOpen(cat.id);

    return (
      <div
        key={cat.id}
        className={`normativa-category${open ? ' is-open' : ''}`}
        data-category={cat.category}
      >
        <button
          className="normativa-category__title"
          aria-expanded={open}
          onClick={() => toggleCategory(cat.id)}
        >
          {cat.categoryIconPaths}
          {cat.title}
          <ChevronIcon />
        </button>
        <ul className="normativa-items" role="list">
          {vis.visibleItems.map((item) => (
            <li className="normativa-item" key={item.label} data-text={item.text}>
              {item.iconType === 'link' ? <LinkIcon /> : <DocIcon />}
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
              <ArrowOutIcon />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section id="normativa" className="section section--alt" aria-labelledby="normativa-title">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow t-label">Documentación</p>
          <h2 className="t-heading section-title" id="normativa-title">
            Normativa y legislación
          </h2>
          <p className="section-subtitle">
            Leyes, decretos, convenios colectivos y guías de trámites del sector de seguridad
            privada.
          </p>
        </div>

        {/* Buscador */}
        <div className="normativa-search" role="search">
          <label className="normativa-search__input" htmlFor="normativa-search-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              id="normativa-search-input"
              placeholder="Buscar normativa…"
              aria-label="Buscar en normativa"
              autoComplete="off"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>

        {/* Filtros */}
        <div className="normativa-filters" role="group" aria-label="Filtrar por categoría">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              className={`filter-btn${filter === key ? ' is-active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Estado vacío */}
        {visibility.totalVisible === 0 && (
          <div className="normativa-empty" role="status" aria-live="polite">
            No se encontraron resultados para tu búsqueda.
          </div>
        )}

        {/* Columnas */}
        {visibility.totalVisible > 0 && (
          <div className="normativa-columns">
            <div>{col1.map(renderCategory)}</div>
            <div>{col2.map(renderCategory)}</div>
          </div>
        )}
      </div>
    </section>
  );
}
