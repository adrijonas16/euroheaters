import { BENEFITS } from '../data/product'
import { Icon } from './Icon'

export function Benefits() {
  return (
    <section className="section" id="beneficios">
      <div className="section__inner">
        <div className="reveal">
          <div className="section__label">Beneficios y Aplicaciones</div>
          <h2 className="section__title">¿Por qué elegir Euroheaters?</h2>
          <p className="section__subtitle">
            Más de 50 años respaldando la industria del plástico con soluciones
            confiables para inyección por colada caliente.
          </p>
        </div>

        <div className="benefits stagger-children">
          {BENEFITS.map((benefit) => (
            <div className="benefit reveal" key={benefit.title}>
              <div className="benefit__icon">
                <Icon name={benefit.icon} size={20} />
              </div>
              <div>
                <h3 className="benefit__title">{benefit.title}</h3>
                <p className="benefit__text">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
