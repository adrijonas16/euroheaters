import { FEATURES } from '../data/product'
import { Icon } from './Icon'

export function Features() {
  return (
    <section className="section" id="caracteristicas">
      <div className="section-inner">
        <div className="reveal">
          <div className="section-label">Características</div>
          <h2 className="section-title">Tecnología que garantiza precisión</h2>
          <p className="section-subtitle">
            Cada controlador incorpora funcionalidades avanzadas para maximizar
            el rendimiento y la durabilidad de sus moldes.
          </p>
        </div>

        <div className="features-grid stagger-children">
          {FEATURES.map((feature) => (
            <article className="feature-card reveal" key={feature.title}>
              <div className="feature-icon">
                <Icon name={feature.icon} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
