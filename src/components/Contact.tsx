import { CONTACT_INFO } from '../data/product'
import { Icon } from './Icon'

export function Contact() {
  return (
    <section className="section cta" id="contacto">
      <div className="section-inner">
        <div className="reveal">
          <div className="section-label" style={{ color: 'rgba(232, 72, 78, 0.8)' }}>
            Contacto
          </div>
          <h2 className="section-title">Solicite su cotización hoy</h2>
          <p className="section-subtitle">
            Nuestro equipo de asesores está listo para ayudarle a encontrar
            el controlador ideal para su operación. Entrega inmediata y
            garantía incluida.
          </p>

          <div className="cta-actions">
            <a href={`mailto:${CONTACT_INFO.email}`} className="btn btn-primary-solid">
              Solicitar Cotización
            </a>
          </div>

          <div className="cta-contact">
            <div className="cta-contact-item">
              <Icon name="mail" size={18} />
              {CONTACT_INFO.email}
            </div>
            <div className="cta-contact-item">
              <Icon name="phone" size={18} />
              {CONTACT_INFO.phone}
            </div>
            <div className="cta-contact-item">
              <Icon name="pin" size={18} />
              {CONTACT_INFO.address}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
