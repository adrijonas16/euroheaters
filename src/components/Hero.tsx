export function Hero() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="producto">
      <div className="hero-grid-overlay" />
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">Controladores Modulares</div>
          <h1 className="hero-title">
            Controladores de<br />
            Temperatura <span>Modular</span>
          </h1>
          <p className="hero-description">
            Sistema de control de temperatura de alto rendimiento para moldes
            con canales calientes. Más de 50 años de experiencia respaldando
            cada módulo con tecnología de última generación.
          </p>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">50+</div>
              <div className="hero-stat-label">Años de experiencia</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">22%</div>
              <div className="hero-stat-label">Mercado global</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">256</div>
              <div className="hero-stat-label">Zonas máx.</div>
            </div>
          </div>

          <div className="hero-actions">
            <a
              href="#contacto"
              className="btn btn-primary"
              onClick={(e) => handleClick(e, '#contacto')}
            >
              Solicitar Cotización
            </a>
            <a
              href="#especificaciones"
              className="btn btn-outline"
              onClick={(e) => handleClick(e, '#especificaciones')}
            >
              Ver Especificaciones
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="/images/serie5.jpg"
            alt="Controlador de Temperatura Modular Euroheaters — Panel de 6 zonas"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}
