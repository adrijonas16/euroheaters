import { useState } from 'react'
import { NAV_LINKS } from '../data/product'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import { Icon } from './Icon'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollTo } = useSmoothScroll()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false)
    scrollTo(e, href)
  }

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a
          href="#producto"
          className="navbar__logo"
          onClick={(e) => handleNavClick(e, '#producto')}
        >
          EURO<span>HEATERS</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="navbar__menu-btn"
          aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </div>
    </nav>
  )
}
