import { useSmoothScroll } from '../hooks/useSmoothScroll'

export function Hero() {
  const { scrollTo } = useSmoothScroll()

  return (
    <section className="hero" id="producto">
      <div className="hero__grid-overlay" />
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__badge">Controladores Modulares</div>
          <h1 className="hero__title">
            Controladores de<br />
            Temperatura <span>Modular</span>
          </h1>
          <p className="hero__description">
            Pirómetros digitales con microprocesador de alta tecnología en
            formato normalizado de 48 x 96mm. Diseñados para inyección por
            colada caliente con más de 50 años de experiencia en el mercado.
          </p>

          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-value">50+</div>
              <div className="hero__stat-label">Años de experiencia</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-value">22%</div>
              <div className="hero__stat-label">Mercado global</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-value">256</div>
              <div className="hero__stat-label">Zonas máx.</div>
            </div>
          </div>

          <div className="hero__actions">
            <a
              href="#contacto"
              className="btn btn--primary"
              onClick={(e) => scrollTo(e, '#contacto')}
            >
              Solicitar Cotización
            </a>
            <a
              href="#especificaciones"
              className="btn btn--outline"
              onClick={(e) => scrollTo(e, '#especificaciones')}
            >
              Ver Especificaciones
            </a>
          </div>
        </div>

        <div className="hero__image-wrapper">
          <img
            src="/images/serie5.jpg"
            alt="Controlador de Temperatura Modular Euroheaters — Panel de 6 zonas"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  )
}
