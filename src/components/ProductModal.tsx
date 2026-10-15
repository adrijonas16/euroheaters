import { useEffect } from 'react'
import type { Series } from '../data/product'
import { Icon } from './Icon'

interface ProductModalProps {
  product: Series | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [product])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!product) return null

  const { detail } = product

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Cerrar">
          <Icon name="close" size={20} />
        </button>

        <div className="modal__header">
          <img
            src={product.image}
            alt={product.name}
            className="modal__image"
          />
          <div className="modal__header-content">
            <div className="modal__tags">
              {product.tags.map((tag) => (
                <span className="modal__tag" key={tag}>{tag}</span>
              ))}
            </div>
            <h2 className="modal__title">{product.name}</h2>
            <p className="modal__description">{detail.fullDescription}</p>
          </div>
        </div>

        <div className="modal__body">
          <div className="modal__section">
            <h3 className="modal__section-title">
              <Icon name="server" size={18} />
              Especificaciones Técnicas
            </h3>
            <div className="modal__specs">
              {detail.specs.map((spec) => (
                <div className="modal__spec" key={spec.label}>
                  <span className="modal__spec-label">{spec.label}</span>
                  <span className="modal__spec-value">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="modal__section">
            <h3 className="modal__section-title">
              <Icon name="check" size={18} />
              Aplicaciones
            </h3>
            <ul className="modal__applications">
              {detail.applications.map((app) => (
                <li key={app}>{app}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="modal__footer">
          <a href="mailto:ventas@euroheaters.mx" className="btn btn--primary-solid">
            Solicitar Cotización — {product.name}
          </a>
        </div>
      </div>
    </div>
  )
}
