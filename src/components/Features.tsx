import { FEATURES } from '../data/product'
import { Icon } from './Icon'

export function Features() {
  return (
    <section className="section" id="caracteristicas">
      <div className="section__inner">
        <div className="reveal">
          <div className="section__label">Características</div>
          <h2 className="section__title">Tecnología que garantiza precisión</h2>
          <p className="section__subtitle">
            Cada controlador incorpora funcionalidades avanzadas para maximizar
            el rendimiento y la durabilidad de sus moldes.
          </p>
        </div>

        <div className="features stagger-children">
          {FEATURES.map((feature) => (
            <article className="feature reveal" key={feature.title}>
              <div className="feature__icon">
                <Icon name={feature.icon} />
              </div>
              <h3 className="feature__title">{feature.title}</h3>
              <p className="feature__text">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
