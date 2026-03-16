const STATS = [
  { value: '+25', label: 'Años de trayectoria' },
  { value: '+100', label: 'Empresas asociadas' },
  { value: 'Ley 12.297', label: 'Marco regulatorio provincial' },
  { value: 'CAME', label: 'Miembro oficial' },
];

export default function StatsBar() {
  return (
    <div className="stats-bar" role="region" aria-label="Datos institucionales">
      <div className="container">
        <div className="stats-grid">
          {STATS.map(({ value, label }) => (
            <div className="stat-item" key={label}>
              <div className="stat-item__value">{value}</div>
              <div className="stat-item__label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
