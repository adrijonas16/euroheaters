import { CONTACT_INFO } from '../data/product'
import { Icon } from './Icon'

export function Contact() {
  return (
    <section className="section cta" id="contacto">
      <div className="section__inner">
        <div className="reveal">
          <div className="section__label section__label--light">
            Contacto
          </div>
          <h2 className="section__title">Solicite su cotización hoy</h2>
          <p className="section__subtitle">
            Nuestro equipo de asesores está listo para ayudarle a encontrar
            el controlador ideal para su operación. Entrega inmediata y
            garantía incluida.
          </p>

          <div className="cta__actions">
            <a href={`mailto:${CONTACT_INFO.email}`} className="btn btn--primary-solid">
              Solicitar Cotización
            </a>
          </div>

          <div className="cta__contact">
            <div className="cta__contact-item">
              <Icon name="mail" size={18} />
              {CONTACT_INFO.email}
            </div>
            <div className="cta__contact-item">
              <Icon name="phone" size={18} />
              {CONTACT_INFO.phone}
            </div>
            <div className="cta__contact-item">
              <Icon name="pin" size={18} />
              {CONTACT_INFO.address}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
