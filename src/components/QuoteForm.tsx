import { useState } from 'react'
import { CONTACT_INFO, SERIES } from '../data/product'
import { Icon } from './Icon'

interface QuoteFormProps {
  isOpen: boolean
  onClose: () => void
  preselectedSeries?: string
}

interface FormData {
  name: string
  email: string
  company: string
  series: string
  zones: string
  message: string
}

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  company: '',
  series: '',
  zones: '',
  message: '',
}

export function QuoteForm({ isOpen, onClose, preselectedSeries }: QuoteFormProps) {
  const [form, setForm] = useState<FormData>({
    ...INITIAL_FORM,
    series: preselectedSeries ?? '',
  })
  const [sent, setSent] = useState(false)

  if (!isOpen) return null

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Cotización — ${form.series || 'Controlador Modular'}`
    )
    const body = encodeURIComponent(
      [
        `Nombre: ${form.name}`,
        `Correo: ${form.email}`,
        `Empresa: ${form.company || 'No especificada'}`,
        `Producto de interés: ${form.series || 'General'}`,
        `Zonas requeridas: ${form.zones || 'Por definir'}`,
        '',
        `Mensaje:`,
        form.message || 'Solicito cotización del producto indicado.',
        '',
        '---',
        'Enviado desde euroheaters.vercel.app',
      ].join('\n')
    )

    window.open(
      `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`,
      '_self'
    )

    setSent(true)
  }

  const handleClose = () => {
    setSent(false)
    setForm({ ...INITIAL_FORM, series: preselectedSeries ?? '' })
    onClose()
  }

  return (
    <div className="modal__overlay" onClick={handleClose}>
      <div className="modal quote-form" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={handleClose} aria-label="Cerrar">
          <Icon name="close" size={20} />
        </button>

        {sent ? (
          <div className="quote-form__success">
            <div className="quote-form__success-icon">
              <Icon name="check" size={32} />
            </div>
            <h2 className="quote-form__success-title">¡Solicitud lista!</h2>
            <p className="quote-form__success-text">
              Se abrió su cliente de correo con la información pre-llenada.
              Envíe el correo para completar su solicitud de cotización.
            </p>
            <p className="quote-form__success-alt">
              Si no se abrió el correo, escriba directamente a:{' '}
              <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
            </p>
            <button className="btn btn--primary" onClick={handleClose}>
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <div className="quote-form__header">
              <h2 className="quote-form__title">Solicitar Cotización</h2>
              <p className="quote-form__subtitle">
                Complete el formulario y se abrirá su correo con toda la
                información lista para enviar.
              </p>
            </div>

            <form className="quote-form__body" onSubmit={handleSubmit}>
              <div className="quote-form__row">
                <div className="quote-form__field">
                  <label className="quote-form__label" htmlFor="name">
                    Nombre completo *
                  </label>
                  <input
                    className="quote-form__input"
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="quote-form__field">
                  <label className="quote-form__label" htmlFor="email">
                    Correo electrónico *
                  </label>
                  <input
                    className="quote-form__input"
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="correo@empresa.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="quote-form__row">
                <div className="quote-form__field">
                  <label className="quote-form__label" htmlFor="company">
                    Empresa
                  </label>
                  <input
                    className="quote-form__input"
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nombre de su empresa"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="quote-form__field">
                  <label className="quote-form__label" htmlFor="zones">
                    Zonas requeridas
                  </label>
                  <input
                    className="quote-form__input"
                    id="zones"
                    name="zones"
                    type="text"
                    placeholder="Ej. 6, 12, 24..."
                    value={form.zones}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="quote-form__field">
                <label className="quote-form__label" htmlFor="series">
                  Producto de interés
                </label>
                <select
                  className="quote-form__input"
                  id="series"
                  name="series"
                  value={form.series}
                  onChange={handleChange}
                >
                  <option value="">Seleccione un producto</option>
                  {SERIES.map((s) => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div className="quote-form__field">
                <label className="quote-form__label" htmlFor="message">
                  Mensaje adicional
                </label>
                <textarea
                  className="quote-form__input quote-form__textarea"
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Detalles adicionales sobre su requerimiento..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn--primary-solid">
                Generar Cotización
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
