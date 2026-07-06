import { ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__inner">
        <p>¿Listo para ordenar el trabajo de tu equipo?</p>
        <a
          href="https://wa.me/51999999999?text=Hola%2C%20quiero%20más%20información%20sobre%20ViveBien"
          target="_blank"
          rel="noreferrer"
          className="btn btn--primary btn--lg"
        >
          Empezar ahora <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}
