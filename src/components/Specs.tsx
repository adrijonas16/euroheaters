import { SPECS } from '../data/product'
import { Icon } from './Icon'

export function Specs() {
  return (
    <section className="section section--dark" id="especificaciones">
      <div className="section__inner">
        <div className="reveal">
          <div className="section__label">Especificaciones Técnicas</div>
          <h2 className="section__title">Construido para la industria</h2>
          <p className="section__subtitle">
            Cada detalle está diseñado para ofrecer rendimiento y confiabilidad
            en los entornos más exigentes.
          </p>
        </div>

        <div className="specs">
          <div className="specs__image-container reveal-left">
            <img
              src="/images/ctrl3.jpg"
              alt="Controlador Modular — Panel de 4 zonas"
              className="specs__image"
              loading="lazy"
            />
            <div className="specs__badge">IP65</div>
          </div>

          <div className="specs__list stagger-children">
            {SPECS.map((spec) => (
              <div className="spec reveal" key={spec.label}>
                <div className="spec__icon">
                  <Icon name={spec.icon} size={20} />
                </div>
                <div>
                  <div className="spec__label">{spec.label}</div>
                  <div className="spec__value">{spec.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
