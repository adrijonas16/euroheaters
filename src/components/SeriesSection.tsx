import { SERIES } from '../data/product'

export function SeriesSection() {
  return (
    <section className="section" id="series">
      <div className="section-inner">
        <div className="reveal">
          <div className="section-label">Línea de Productos</div>
          <h2 className="section-title">Tres series, una solución</h2>
          <p className="section-subtitle">
            Seleccione la serie que mejor se adapte a las necesidades de
            su operación.
          </p>
        </div>

        <div className="series-grid stagger-children">
          {SERIES.map((series) => (
            <article className="series-card reveal" key={series.name}>
              <div className="series-image-wrapper">
                <img
                  src={series.image}
                  alt={`${series.name} — ${series.tags.join(', ')}`}
                  className="series-image"
                />
              </div>
              <div className="series-content">
                <h3 className="series-name">{series.name}</h3>
                <p className="series-desc">{series.description}</p>
                <div className="series-specs">
                  {series.tags.map((tag) => (
                    <span className="series-spec-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
