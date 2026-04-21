import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { models } from '../data/models'

const secondaryLinks = [
  { label: 'Comparación', to: '/comparacion' },
  { label: 'Conclusión', to: '/conclusion' },
  { label: 'Minutas', to: '/minutas' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Ir al inicio" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true" />
          <span>PETI Digital</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Abrir navegación</span>
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${isOpen ? 'is-open' : ''}`}
          aria-label="Navegación principal"
        >
          {models.map((model) => (
            <NavLink key={model.id} to={model.route} onClick={closeMenu}>
              {model.shortName}
            </NavLink>
          ))}
          {secondaryLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
