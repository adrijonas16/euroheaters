import { SERIES } from '../data/product'

export function SeriesSection() {
  return (
    <section className="section" id="series">
      <div className="section__inner">
        <div className="reveal">
          <div className="section__label">Línea de Productos</div>
          <h2 className="section__title">Tres series, una solución</h2>
          <p className="section__subtitle">
            Seleccione la serie que mejor se adapte a las necesidades de
            su operación.
          </p>
        </div>

        <div className="series-grid stagger-children">
          {SERIES.map((series) => (
            <article className="series reveal" key={series.name}>
              <div className="series__image-wrapper">
                <img
                  src={series.image}
                  alt={`${series.name} — ${series.tags.join(', ')}`}
                  className="series__image"
                  loading="lazy"
                />
              </div>
              <div className="series__content">
                <h3 className="series__name">{series.name}</h3>
                <p className="series__desc">{series.description}</p>
                <div className="series__tags">
                  {series.tags.map((tag) => (
                    <span className="series__tag" key={tag}>{tag}</span>
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
