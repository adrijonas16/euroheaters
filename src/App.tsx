import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      observer.observe(el)
    })

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50)
      }
    }
    window.addEventListener('scroll', handleScroll)

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
        if (href) {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#producto" className="navbar-logo">
            EURO<span>HEATERS</span>
          </a>
          <ul className="navbar-links">
            <li><a href="#producto" className="active">Producto</a></li>
            <li><a href="#caracteristicas">Caracteristicas</a></li>
            <li><a href="#especificaciones">Especificaciones</a></li>
            <li><a href="#series">Series</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
          <button className="mobile-menu-btn" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="producto">
        <div className="hero-grid-overlay" />
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">Controladores Modulares</div>
            <h1 className="hero-title">
              Controladores de<br />
              Temperatura <span>Modular</span>
            </h1>
            <p className="hero-description">
              Sistema de control de temperatura de alto rendimiento para moldes
              con canales calientes. Mas de 50 anios de experiencia respaldando
              cada modulo con tecnologia de ultima generacion.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">50+</div>
                <div className="hero-stat-label">Anios de experiencia</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">22%</div>
                <div className="hero-stat-label">Mercado global</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">256</div>
                <div className="hero-stat-label">Zonas max.</div>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#contacto" className="btn btn-primary">
                Solicitar Cotizacion
              </a>
              <a href="#especificaciones" className="btn btn-outline">
                Ver Especificaciones
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="/images/serie5.jpg"
              alt="Controlador de Temperatura Modular Euroheaters - Panel de 6 zonas"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" id="caracteristicas">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">Caracteristicas</div>
            <h2 className="section-title">Tecnologia que garantiza precision</h2>
            <p className="section-subtitle">
              Cada controlador incorpora funcionalidades avanzadas para maximizar
              el rendimiento y la durabilidad de sus moldes.
            </p>
          </div>
          <div className="features-grid stagger-children">
            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 className="feature-title">Sintonizacion Self Control</h3>
              <p className="feature-text">
                Software de sintonizacion permanente de alto rendimiento con
                componentes electronicos de ultima generacion para un control preciso.
              </p>
            </div>
            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="feature-title">Diagnostico Preventivo</h3>
              <p className="feature-text">
                Sistema integrado de diagnostico de molde que detecta posicion
                incorrecta entre calentador y termocouple, evitando danos costosos.
              </p>
            </div>
            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h3 className="feature-title">Diseno Modular</h3>
              <p className="feature-text">
                Completamente modular para un facil mantenimiento. Permite
                configurar desde 2 hasta 256 zonas segun sus necesidades.
              </p>
            </div>
            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="feature-title">Arranque Suave (Soft Start)</h3>
              <p className="feature-text">
                Funcion de arranque suave que protege los componentes del molde
                durante el encendido, extendiendo su vida util.
              </p>
            </div>
            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
              </div>
              <h3 className="feature-title">Sincronizacion de Zonas</h3>
              <p className="feature-text">
                Sincronizacion automatica de todas las zonas de temperatura para
                una distribucion uniforme del calor en todo el molde.
              </p>
            </div>
            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3 className="feature-title">Pantalla Tactil</h3>
              <p className="feature-text">
                Interfaz touch screen amigable para una operacion intuitiva
                con visualizacion en tiempo real de todos los parametros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="section section-dark" id="especificaciones">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">Especificaciones Tecnicas</div>
            <h2 className="section-title">Construido para la industria</h2>
            <p className="section-subtitle">
              Cada detalle esta disenado para ofrecer rendimiento y confiabilidad
              en los entornos mas exigentes.
            </p>
          </div>
          <div className="specs-layout">
            <div className="specs-image-container reveal-left">
              <img
                src="/images/ctrl3.jpg"
                alt="Controlador Modular - Panel de 4 zonas"
                className="specs-image"
              />
              <div className="specs-ip-badge">IP65</div>
            </div>
            <div className="specs-list stagger-children">
              <div className="spec-item reveal">
                <div className="spec-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <div>
                  <div className="spec-label">Potencia de salida</div>
                  <div className="spec-value">15A / 30A (opcional)</div>
                </div>
              </div>
              <div className="spec-item reveal">
                <div className="spec-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                </div>
                <div>
                  <div className="spec-label">Rango de zonas</div>
                  <div className="spec-value">2 a 256 zonas disponibles</div>
                </div>
              </div>
              <div className="spec-item reveal">
                <div className="spec-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <div className="spec-label">Proteccion</div>
                  <div className="spec-value">IP65 - Cortocircuito y sobrecarga</div>
                </div>
              </div>
              <div className="spec-item reveal">
                <div className="spec-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>
                </div>
                <div>
                  <div className="spec-label">Control termico</div>
                  <div className="spec-value">Disipacion eficaz con temperatura baja interior</div>
                </div>
              </div>
              <div className="spec-item reveal">
                <div className="spec-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                </div>
                <div>
                  <div className="spec-label">Tipo de salida</div>
                  <div className="spec-value">Angulo de fase disparado con entrega suave</div>
                </div>
              </div>
              <div className="spec-item reveal">
                <div className="spec-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                </div>
                <div>
                  <div className="spec-label">Configuracion</div>
                  <div className="spec-value">Modulos individuales o armarios rack 19"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERIES */}
      <section className="section" id="series">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">Linea de Productos</div>
            <h2 className="section-title">Tres series, una solucion</h2>
            <p className="section-subtitle">
              Seleccione la serie que mejor se adapte a las necesidades de
              su operacion.
            </p>
          </div>
          <div className="series-grid stagger-children">
            <div className="series-card reveal">
              <div className="series-image-wrapper">
                <img
                  src="/images/ctrl4.jpg"
                  alt="Serie 5 - Panel de 6 zonas"
                  className="series-image"
                />
              </div>
              <div className="series-content">
                <h3 className="series-name">Serie 5</h3>
                <p className="series-desc">
                  Modulos individuales o armarios configurables. Ideal para
                  aplicaciones que requieren flexibilidad y escalabilidad.
                </p>
                <div className="series-specs">
                  <span className="series-spec-tag">2 a 48 zonas</span>
                  <span className="series-spec-tag">Modular</span>
                  <span className="series-spec-tag">15A</span>
                </div>
              </div>
            </div>
            <div className="series-card reveal">
              <div className="series-image-wrapper">
                <img
                  src="/images/serie-mundial.jpg"
                  alt="Serie Mundial - Modulos individuales"
                  className="series-image"
                />
              </div>
              <div className="series-content">
                <h3 className="series-name">Serie Mundial</h3>
                <p className="series-desc">
                  Modulos con certificacion bajo normas internacionales.
                  Disenados para operaciones globales con los mas altos
                  estandares.
                </p>
                <div className="series-specs">
                  <span className="series-spec-tag">Normas Internacionales</span>
                  <span className="series-spec-tag">Certificado</span>
                </div>
              </div>
            </div>
            <div className="series-card reveal">
              <div className="series-image-wrapper">
                <img
                  src="/images/ctrl6.jpg"
                  alt="Serie 8 - Panel de 24 zonas"
                  className="series-image"
                />
              </div>
              <div className="series-content">
                <h3 className="series-name">Serie 8</h3>
                <p className="series-desc">
                  Modulos compactos dobles para optimizar espacio sin
                  sacrificar potencia. Perfecto para instalaciones de
                  gran escala.
                </p>
                <div className="series-specs">
                  <span className="series-spec-tag">2 a 48 zonas</span>
                  <span className="series-spec-tag">Compacto</span>
                  <span className="series-spec-tag">30A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta" id="contacto">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label" style={{ color: 'rgba(232, 72, 78, 0.8)' }}>
              Contacto
            </div>
            <h2 className="section-title">
              Solicite su cotizacion hoy
            </h2>
            <p className="section-subtitle">
              Nuestro equipo de asesores esta listo para ayudarle a encontrar
              el controlador ideal para su operacion. Entrega inmediata y
              garantia incluida.
            </p>
            <div style={{ marginTop: 36 }}>
              <a href="mailto:ventas@euroheaters.mx" className="btn btn-primary-solid">
                Solicitar Cotizacion
              </a>
            </div>
            <div className="cta-contact">
              <div className="cta-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                ventas@euroheaters.mx
              </div>
              <div className="cta-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                (0052) 5557-757515
              </div>
              <div className="cta-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Paseo de la Reforma 483, CDMX
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; 2026 Euroheaters Mexico. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App
