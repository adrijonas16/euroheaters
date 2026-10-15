import { SPECS } from '../data/product'
import { Icon } from './Icon'

export function Specs() {
  return (
    <section className="section section-dark" id="especificaciones">
      <div className="section-inner">
        <div className="reveal">
          <div className="section-label">Especificaciones Técnicas</div>
          <h2 className="section-title">Construido para la industria</h2>
          <p className="section-subtitle">
            Cada detalle está diseñado para ofrecer rendimiento y confiabilidad
            en los entornos más exigentes.
          </p>
        </div>

        <div className="specs-layout">
          <div className="specs-image-container reveal-left">
            <img
              src="/images/ctrl3.jpg"
              alt="Controlador Modular — Panel de 4 zonas"
              className="specs-image"
            />
            <div className="specs-ip-badge">IP65</div>
          </div>

          <div className="specs-list stagger-children">
            {SPECS.map((spec) => (
              <div className="spec-item reveal" key={spec.label}>
                <div className="spec-icon">
                  <Icon name={spec.icon} size={20} />
                </div>
                <div>
                  <div className="spec-label">{spec.label}</div>
                  <div className="spec-value">{spec.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
