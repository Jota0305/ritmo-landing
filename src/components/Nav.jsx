import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#servicio', label: 'Servicio' },
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__brand">
          <Logo />
          <span className="nav__logo">ViveBien</span>
        </a>

        <nav className="nav__links nav__links--desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="btn btn--primary nav__cta">
          Comienza el Cambio
        </a>

        <button
          className="nav__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="nav__links nav__links--mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn--primary" onClick={() => setOpen(false)}>
            Comienza el Cambio
          </a>
        </nav>
      )}
    </header>
  )
}
