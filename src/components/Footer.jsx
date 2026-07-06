import { Instagram, Linkedin, Facebook } from 'lucide-react'
import VisitCounter from './VisitCounter.jsx'

const REDES = [
  { icon: Instagram, href: 'https://instagram.com/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com/', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="nav__logo">ViveBien</span>
        <p>Organiza el trabajo, protege el descanso.</p>

        <div className="footer__social">
          {REDES.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon size={20} strokeWidth={1.8} />
            </a>
          ))}
        </div>

        <VisitCounter />

        <p className="footer__copy">
          © {new Date().getFullYear()} ViveBien. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
